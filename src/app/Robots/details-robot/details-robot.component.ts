import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Robot } from '../robot';
import { RobotsService } from '../robots.service';

@Component({
  selector: 'app-details-robot',
  templateUrl: './details-robot.component.html',
  styleUrls: ['./details-robot.component.css']
})
export class DetailsRobotComponent implements OnInit {
  id!: string;
  robot!: Robot;

  constructor(private robotService: RobotsService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.route.params.subscribe(
      async (params: Params) => {
        this.id = params['id'];
        this.robot = await this.getRobot();
      })
  }

  async getRobot(): Promise<Robot> {
    const robotSnapshot = await this.robotService.getRobot(this.id);
    const robotData = robotSnapshot?.data();
  
    if (robotData) {
      const robot: Robot = {
        id: robotData['id'],
        name: robotData['name'],
        color: robotData['color'],
        attack: robotData['attack'],
        defense: robotData['defense']
      };
      return robot;
    } else {
      throw new Error('Robot not found.');
    }
  }

  onEdit() {
    console.log(this.id+'/edit')
    this.router.navigate(['/'+this.id+'/edit'], { relativeTo: this.route });
  }

  onDelete() {
    let alert = confirm("Are you sure you want to delete this bot?");
    if(alert == true){
      this.robotService.deleteRobot(this.id);
    }
    this.onBack();
  }

  onBack() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
