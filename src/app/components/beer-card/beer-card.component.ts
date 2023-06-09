import { Component, Input } from '@angular/core';
import { Birra } from 'src/app/model/birra';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent {

@Input() beer?: Birra;

}
