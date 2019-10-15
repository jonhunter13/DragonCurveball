import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Step} from '../models/step';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.css']
})
export class FormStepperComponent implements OnInit, OnChanges {

  nextStep: Step;
  previousStep: Step;

  @Input() step: Step;
  @Input() steps: Step[];

  @Output() updateStepEmit = new EventEmitter<Step>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.step) {
      const nextInd = this.steps.findIndex( (s) => this.step.title === s.title) + 1;
      this.nextStep = (this.steps[nextInd]) ? this.steps[nextInd] : undefined;
      console.log(this.nextStep);

      const prevInd = this.steps.findIndex( (s) => this.step.title === s.title) - 1;
      this.previousStep = (this.steps[prevInd]) ? this.steps[prevInd] : undefined;
    }
  }

  goToStep(event: Step) {
    this.updateStepEmit.emit(event);
  }



}
