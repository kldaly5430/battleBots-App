import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Robot } from '../robot';
import { RobotsService } from '../robots.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.css']
})
export class RobotListComponent implements OnInit {

  robotData: any = [];

  constructor(private router: Router, private route: ActivatedRoute, private robotService: RobotsService) { }

  ngOnInit(): void {
    this.getRobots();
  }

  onNewRobot() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  getRobots() {
    this.robotService.getRobots().subscribe((res:Robot[])=>{
      this.robotData = res;
    })
  }
}
