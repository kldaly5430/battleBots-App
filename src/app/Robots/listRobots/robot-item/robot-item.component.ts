import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Robot } from '../../robot';
import { RobotsService } from '../../robots.service';

@Component({
  selector: 'app-robot-item',
  templateUrl: './robot-item.component.html',
  styleUrls: ['./robot-item.component.css']
})
export class RobotItemComponent implements OnInit {
  id!: string;
  @Input() robot!: Robot;
  @Input() index!: number;

  robotData: any = [];

  constructor(private robotService: RobotsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  deleteRobot(id: string) {
    let alert = confirm("Are you sure you want to delete this bot?");
    if(alert == true){
      this.robotService.deleteRobot(id);
    }
  }

  updateRobot(robot: Robot) {
    this.router.navigate([`${robot.id}/edit`], { relativeTo: this.route });
  }

}
