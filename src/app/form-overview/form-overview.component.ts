import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Step} from '../models/step';
import {Member} from '../models/member';

@Component({
  selector: 'app-form-overview',
  templateUrl: './form-overview.component.html',
  styleUrls: ['./form-overview.component.css']
})
export class FormOverviewComponent implements OnInit {

  @Input() steps: Step[];
  @Input() members: Member[];

  @Output() updateStepEmit = new EventEmitter<Step>();

  constructor() { }

  ngOnInit() {
  }

  updateStep(step: Step) {
    console.log(step);
    if(!this.isDisabled(step))
      this.updateStepEmit.emit(step);
  }

  isDisabled(step: Step){
    if(this.members.length > 0)
      return false;

    return step.disabled;
  }
}
