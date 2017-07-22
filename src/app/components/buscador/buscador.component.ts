import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService,Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes:Heroe[]=[];
  terminoVal:any="";

  constructor(private activatedRoute:ActivatedRoute,private _heroesService:HeroesService) {
      this.activatedRoute.params.subscribe( params =>{
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
      this.terminoVal=params;
      console.log(this.terminoVal);
      })
  }

  ngOnInit() {
    //this.heroes=this._heroesService.buscarHeroes();
  }

}
