import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Robot } from '../robot';
import { RobotsService } from '../robots.service';

@Component({
  selector: 'app-robot-edit',
  templateUrl: './robot-edit.component.html',
  styleUrls: ['./robot-edit.component.css']
})
export class RobotEditComponent implements OnInit {
  id!: string;
  editMode = false;
  robot!: Robot;
  robotForm!: FormGroup

  constructor(private route: ActivatedRoute, private router: Router, private robotService: RobotsService) { }

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.LoadForm();
      }
    );
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

  private async LoadForm() {
    let robotName = '';
    let robotColor = '';
    let robotAttack = '';
    let robotDefense = '';

    if(this.editMode){
      const robotSnapshot = await this.robotService.getRobot(this.id);
      const robotData = robotSnapshot?.data() as { name: string; color: string; attack: number; defense: number };
        this.robotForm = new FormGroup({
          'name': new FormControl(robotData?.['name']),
          'color': new FormControl(robotData?.['color']),
          'attack': new FormControl(robotData?.['attack']),
          'defense': new FormControl(robotData?.['defense']),
        })
      }
      else {
        this.robotForm = new FormGroup({
          'name': new FormControl(robotName, Validators.required),
          'color': new FormControl(robotColor, Validators.required),
          'attack': new FormControl(robotAttack, Validators.required),
          'defense': new FormControl(robotDefense, Validators.required)
        });
      }
  }

  onSubmit() {
    if(this.editMode) {
      const robot: Robot = {
        id: this.id,
        name: this.robotForm.value['name'],
        color: this.robotForm.value['color'],
        attack: this.robotForm.value['attack'],
        defense: this.robotForm.value['defense']
        };
      this.robotService.updateRobot(robot, this.robotForm.value);
    }
    else
    {
      this.robotService.addRobot(this.robotForm.value);
    }
    this.onCancel();
  }

  onUpdate() {
    
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
