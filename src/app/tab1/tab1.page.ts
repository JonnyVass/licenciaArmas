import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { QuestionarioPage } from '../questionario/questionario.page'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //@Output() temaEnviado = new EventEmitter;
  //private readonly fichero = "assets/data/temas.json";
  temas: any = [];
  tema: any = {};

  constructor(public http: HttpClient) {  }
    
  ngOnInit() {
    //Almaceno el temario recuperadas en el objeto
    this.getTemas().subscribe(res => {
      console.log("Temas", res);
      this.temas = res;
    })
  }

  getTemas() {
    // recupero los temas del  Fichero
    return this.http
    .get("assets/data/temas.json")
    .pipe(
      map((res: any) => {
      return res.data;
    })
    )
  }

  setTema( tema:any){
    //Almaceno el tema seleccionado por pantalla
    console.log ("Tema seleccionado: ",tema)
    this.tema = tema; 
      //console.log (this.tema);
    //this.temaEnviado.emit (tema)
    localStorage.removeItem("failResponse")
  }
}
