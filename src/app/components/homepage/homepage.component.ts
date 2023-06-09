import { Component, OnInit } from '@angular/core';
import { Birra } from 'src/app/model/birra';
import { BirraServService } from 'src/app/services/birra-Serv/birra-serv.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  beer: Birra[]=[]


  constructor(private beerServ: BirraServService){
    this.loadBeers();
  }
  ngOnInit(): void {
    this.loadBeers();
  }


  loadBeers(){
    this.beerServ.getBeersAPI().subscribe({
      next: beer => this.beer= beer,
      error: err=> console.log('errore',err)
    })
  }


}
