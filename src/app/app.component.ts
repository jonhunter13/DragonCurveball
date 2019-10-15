import {Component, OnInit} from '@angular/core';
import {Step} from './models/step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DragonCurveball';
  showForm = true;
  loading = false;
  steps: Step[] = [];
  step = 0;

  ngOnInit() {
    this.steps.push({title: 'Overview', question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum viverra dolor, id cursus massa facilisis vitae. Etiam purus risus, mollis eget ligula sed, aliquam imperdiet lorem. Proin fermentum magna quis sapien sollicitudin, tincidunt ullamcorper dui pretium. Suspendisse at porttitor augue. In non massa et enim interdum pellentesque aliquam ac orci. Curabitur porttitor ex et odio aliquam, et cursus eros luctus. Aliquam blandit urna id augue sagittis commodo. Integer aliquam, eros a feugiat pellentesque, arcu odio hendrerit diam, vel tincidunt turpis nisi vitae mauris. Duis tristique sagittis mauris.', type: 'none', values: []});
    this.steps.push({title: 'Members', question: 'Number of Members:', type: 'select', values: [1, 2, 3, 4, '5+']});
    this.steps.push({title: 'Instrumentation', question: 'Instrumentation:', type: 'select', values: ['Violin 1', 'Violin 2', 'Viola', 'Cello']});
    this.steps.push({title: 'Location', question: 'Current City:', type: 'location'});
    this.steps.push({title: 'Concert Date', question: 'Date of Concert:', type: 'date'});
    this.steps.push({title: 'Initials', question: 'Initials:', type: 'text'});
    this.steps.push({title: 'Birth Month', question: 'What is Your Birth Month?', type: 'select', values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']});
    this.steps.push({title: 'Birth Place', question: 'Birth Place (City/Town):', type: 'location'});
    this.steps.push({title: 'Age', question: 'Age', type: 'select', values: Array.from(Array(85)).map((e, i=5)=>i+1)});
    this.steps.push({title: 'Years Played', question: 'How Many Years Have You Played Your Instrument?', type: 'select', values: [1, 2, 3, 4, '5+']});
    this.steps.push({title: 'School', question: 'Have You Graduated from music school?', type: 'radio', values: ['Yes', 'No']});
    this.steps.push({title: 'Family Members', question: 'Number of Immediate Family Members:', type: 'select', values: [1, 2, 3, 4, '5+']});
    this.steps.push({title: 'Family Siblings', question: 'Number of Siblings (include half- and step-siblings):', type: 'select', values: [1, 2, 3, 4, '5+']});

    this.steps.push({title: 'Review', question: 'Review your answers and submit', type: 'none', values: Array.from(Array(85)).map((e, i=5)=>i+1)});
  }

  onUpdateStep(step: Step) {
    console.log(step);
    this.step = this.steps.findIndex( (s) => step.title === s.title);
  }

  onSubmit() {
    this.processAnswers();
  }

  processAnswers() {
    this.showForm = false;
    this.loading = true;

  }
}
