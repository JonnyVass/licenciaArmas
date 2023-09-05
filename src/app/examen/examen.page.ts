import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {

  resultados: any[] = [];
  sinDatos: boolean = false;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    //variable temporal
    let tmpJson: string = "";
    let tmpitems:any[] = [];

    tmpJson = localStorage.getItem("respuestasExamen") || "";
    if (tmpJson != "") {
      tmpitems = JSON.parse(tmpJson);
    }else {
      this.sinDatos = true;
    }

    //realizo un HACK para usar el boolean del listado para indicar si es o NO correcta
    for (let i=0; i < tmpitems.length ; i++){
      if (tmpitems[i].userAns == tmpitems[i].correctAns){
        //la respuesta es correcta
        tmpitems[i].usada = true; //este es el HACK (el dato NO estaba pensado para esto)
      } else {
        //la respuesta es incorrecta
        tmpitems[i].usada = false; //este es el HACK (el dato NO estaba pensado para esto)
      }
      this.resultados.push(tmpitems[i]);
    }
  }

  resetExamen() {
    localStorage.removeItem("respuestasExamen");
    this.navCtrl.navigateRoot('');
  }

}
