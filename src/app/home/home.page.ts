import { GenteService } from './../gente.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public mia:object[];
  public mostrar=false;
  constructor(private gente:GenteService) {}

  load(){
    this.gente.load().then((d)=>{
      this.mia=d.results;
      this.mostrar=true;
    })
  }

  nameUser(item:any){
    return item.name.title+' '+item.name.first+' '+item.name.last;
  }
}
