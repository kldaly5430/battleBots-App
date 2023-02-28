import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Robot } from '../robot.model';
// import { RobotServiceService } from '../robot-service.service';

@Component({
  selector: 'app-robot-edit',
  templateUrl: './robot-edit.component.html',
  styleUrls: ['./robot-edit.component.css']
})
export class RobotEditComponent implements OnInit {
  id!: number;
  robotForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    color: new FormControl(''),
    attack: new FormControl(''),
    defense: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let robotName = '';
    let robotColor = '';
    let robotAttack = '';
    let robotDefense = '';

    this.robotForm = new FormGroup({
      'name': new FormControl(robotName, Validators.required),
      'color': new FormControl(robotColor, Validators.required),
      'attack': new FormControl(robotAttack, Validators.required),
      'defense': new FormControl(robotDefense, Validators.required)
    });
  }

  onSubmit() {
    // this.robotService.addRobot(this.robotForm.value);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
