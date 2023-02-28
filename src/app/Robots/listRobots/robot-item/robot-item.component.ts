import { Component, Input, OnInit } from '@angular/core';
import { Robot } from '../../robot.model';

@Component({
  selector: 'app-robot-item',
  templateUrl: './robot-item.component.html',
  styleUrls: ['./robot-item.component.css']
})
export class RobotItemComponent implements OnInit {
  @Input() robot!: Robot;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
