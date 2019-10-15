import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Step} from '../models/step';

@Component({
  selector: 'app-form-overview',
  templateUrl: './form-overview.component.html',
  styleUrls: ['./form-overview.component.css']
})
export class FormOverviewComponent implements OnInit {

  @Input() steps: Step[];
  @Output() updateStepEmit = new EventEmitter<Step>();

  constructor() { }

  ngOnInit() {
  }

  updateStep(event: Step) {
    console.log(event);
    this.updateStepEmit.emit(event);
  }

}
