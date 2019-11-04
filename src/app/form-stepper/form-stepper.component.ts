import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Step} from '../models/step';
import {Member} from '../models/member';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.css']
})
export class FormStepperComponent implements OnInit, OnChanges {

  nextStep: Step;
  previousStep: Step;
  showMembers = false;

  @Input() step: Step;
  @Input() steps: Step[];
  @Input() members: Member[];

  @Output() updateStepEmit = new EventEmitter<Step>();
  @Output() updateMembersEmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log("Members:");
    console.log(this.members);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.step) {
      this.updateButtons();
    }
  }

  goToStep(event: Step) {
    this.updateStepEmit.emit(event);
  }

  addMember(){
    const member: Member = { name:"", answers: [] };
    this.steps.forEach( function(step){
      member.answers[step.title] = "";
    });
    this.members.push(member);
    this.step.value++;

    this.updateButtons();
    this.updateMembersEmit.emit(this.members);
  }

  removeMember(i: number){
    this.members.splice(i, 1);
    this.step.value--;

    this.updateButtons();
    this.updateMembersEmit.emit(this.members);
  }

  isDisabled(step: Step){
    if(this.members.length > 0)
      return false;

    return step.disabled;
  }

  updateButtons() {
    const nextInd = this.steps.findIndex( (s) => this.step.title === s.title) + 1;
    this.nextStep = (this.steps[nextInd] && !this.isDisabled(this.steps[nextInd])) ? this.steps[nextInd] : undefined;

    const prevInd = this.steps.findIndex( (s) => this.step.title === s.title) - 1;
    this.previousStep = (this.steps[prevInd] && !this.isDisabled(this.steps[prevInd])) ? this.steps[prevInd] : undefined;
  }
}
