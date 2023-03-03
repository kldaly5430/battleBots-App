import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Robot } from 'src/app/Robots/robot';
import { RobotsService } from 'src/app/Robots/robots.service';
import { BattleService } from '../battle.service';
import { Battle } from '../battles';

@Component({
  selector: 'app-battle-list',
  templateUrl: './battle-list.component.html',
  styleUrls: ['./battle-list.component.css']
})
export class BattleListComponent implements OnInit {
  robots$: Observable<any[]> | undefined;
  selectedRobotId: any;
  robotOne!: Robot;
  robotTwo!: Robot;
  battle!: Battle;

  constructor(private robotService: RobotsService, private battleService: BattleService) { }

  ngOnInit() {
    this.robots$ = this.robotService.getRobots().pipe(
      map(robots => {
        return robots.map(robot => {
          return {
            id: robot.id,
            name: robot.name
          };
        });
      })
    );
  }

  async onBotSelectOne(event: any) {
    const selectedRobotId = (event.target as HTMLInputElement).value;
    const robotSnapshot = await this.robotService.getRobot(selectedRobotId);
    const robotData = robotSnapshot?.data();
  
    if (robotData) {
      this.robotOne = {
        id: robotData['id'],
        name: robotData['name'],
        color: robotData['color'],
        attack: robotData['attack'],
        defense: robotData['defense']
      };
    } else {
      throw new Error('Robot not found.');
    }
  }

  async onBotSelectTwo(event: any) {
    const selectedRobotId = (event.target as HTMLInputElement).value;
    const robotSnapshot = await this.robotService.getRobot(selectedRobotId);
    const robotData = robotSnapshot?.data();
  
    if (robotData) {
      this.robotTwo = {
        id: robotData['id'],
        name: robotData['name'],
        color: robotData['color'],
        attack: robotData['attack'],
        defense: robotData['defense']
      };
    } else {
      throw new Error('Robot not found.');
    }
  }

  logBattle(botOneId: string, botOneName: string, botTwoId:string, botTwoName: string, winner: string) {
    const battleData: Battle = {
      id: '',
      botOne: botOneId,
      botOneName: botOneName,
      botTwo: botTwoId,
      botTwoName: botTwoName,
      winner: winner
    }
    this.battleService.addBattle(battleData);
  }

  onBattle() {
    let botOneHP = this.robotOne.defense;
    let botTwoHP = this.robotTwo.defense;
    let turn = 0;
    ;
    while(botOneHP > 0 && botTwoHP > 0){
      if(turn%2 == 0){
        let attack = this.generateAttack() + this.robotOne.attack;
        if(attack > this.robotTwo.defense)
          botTwoHP--;
      } else {
        let attack = this.generateAttack() + this.robotTwo.attack;
        if(attack > this.robotOne.defense)
          botOneHP--;
      }
      turn++;
    }
    
    const winner = document.getElementById('winner');
    if(botOneHP <= 0 )
    {
      if(winner)
        winner.innerHTML = "Battle Bot 2 Wins!";
      this.logBattle(this.robotOne.id, this.robotOne.name, this.robotTwo.id, this.robotTwo.name, this.robotTwo.name);
    }
    else
    {
      if(winner)
        winner.innerHTML = "Battle Bot 1 Wins!";
        this.logBattle(this.robotOne.id, this.robotOne.name, this.robotTwo.id, this.robotTwo.name, this.robotOne.name);
    }
  }

  generateAttack(): number {
    return Math.floor(Math.random() * 20) + 1;
  }
}
