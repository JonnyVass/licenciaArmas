import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-acertadas',
  templateUrl: './acertadas.page.html',
  styleUrls: ['./acertadas.page.scss'],
})
export class AcertadasPage implements OnInit {
  
  //para recuperar el tema del path
  tema: any = {};
  // listado de preguntas y respuestas 
  items: any = [];
  sinPreguntasOK: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // recupero el tema que me llega como parametro
    this.tema = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("parametro tema", this.tema);

    //variable temporal
    let tmpJson: string = "";
    let tmpitems: any[] = [];
    //recupero las preguntas del tema (localStorage), todas
    tmpJson = localStorage.getItem("Preguntas"+ this.tema) || "";
    if (tmpJson != "") {
      tmpitems = JSON.parse(tmpJson);
      console.log("Listado preguntas " + this.tema + " Completo",tmpitems);
      //recorro los datos obtenidos usar solo las preguntas YA USADAS
      for (let i=0; i < tmpitems.length; i++){
        if (tmpitems[i].usada) {
          console.log("Pregunta YA USADA", i, tmpitems[i].question)
          this.items.push(tmpitems[i]);
        } else{
          console.log("Pregunta NO USADA", i, tmpitems[i].question)
        }
      }
    }
    if (this.items.length < 1){
      //NO hay preguntas Validadas - OK, Mostrar aviso en pantalla
      this.sinPreguntasOK = true;
    }
  }

  resetAcertadas() {
    this.navCtrl.navigateRoot('');
  }

}
