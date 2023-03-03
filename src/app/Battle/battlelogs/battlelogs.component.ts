import { Component, OnInit } from '@angular/core';
import { BattleService } from '../battle.service';
import { Battle } from '../battles';

@Component({
  selector: 'app-battlelogs',
  templateUrl: './battlelogs.component.html',
  styleUrls: ['./battlelogs.component.css']
})
export class BattlelogsComponent implements OnInit {
  battleData: any = [];

  constructor(private battleService: BattleService) { }

  ngOnInit(): void {
    this.getBattles();
  }

  getBattles() {
    this.battleService.getBattles().subscribe((res:Battle[]) => {
      this.battleData = res;
    })
  }

}
