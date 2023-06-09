import { Component } from '@angular/core';
import { BirraServService } from './services/birra-Serv/birra-serv.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prova-esame';

  constructor(private beerServ: BirraServService){

    beerServ.getBeersAPI().subscribe({
      next: birra => console.log('BIRRAAA',birra),
      error: err=> console.log('errr',err)
    })

  }

}
