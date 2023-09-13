import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.page.html',
  styleUrls: ['./questionario.page.scss'],
})
export class QuestionarioPage implements OnInit {

   //private readonly fichero = "assets/data/preguntas.json";

  //para recuperar el tema del path
  tema: any = {};
  // listado de preguntas y respuestas 
  items: any = [];
  sinPreguntas: boolean = false;
  respuestaPregunta: boolean = false;
    //para la pantalla
    totales: number = 0;
    restantes: number = 0;
  //listado de preguntas FALLIDAS
  failResponse: any = [];
  //listado de preguntas CORRECTAS
  CorrectResponse: any = [];
  //botones del Alert de Pantalla
  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        //cierro la alerta
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        // llamo al metodo para borrar el questionario
        this.resetCuestionario();
        // vuelvo a la home
        this.navCtrl.navigateRoot('');
      },
    },
  ];
  

  constructor(
    public http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) {  }
    
  ngOnInit() {
    // recupero el tema que me llega como parametro
    this.tema = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("parametro tema", this.tema);

    /*
    //Almaceno las preguntas recuperadas(solo para el tema que quiero cargar) en el objeto
    this.getPreguntas(this.tema).subscribe(res => {
      console.log("Preguntas", res);
      this.items = res;

    })
    */

    //recupero las preguntas del tema (localStorage), que NO están usadas
    //variable temporal
    let tmpJson: string = "";
    let tmpitems: any[] = [];
    tmpJson = localStorage.getItem("Preguntas"+ this.tema) || "";
    //recupero los resultados del tema
    if (tmpJson != "") {
      tmpitems = JSON.parse(tmpJson);
      console.log("Listado preguntas " + this.tema + " Completo",tmpitems);
      //recorro los datos obtenidos para eliminar las preguntas YA USADAS
      for (let i=0; i < tmpitems.length; i++){
        if (tmpitems[i].usada) {
          console.log("Pregunta YA USADA", i, tmpitems[i].question)
          this.CorrectResponse.push(tmpitems[i]);
        } else{
          this.items.push(tmpitems[i]);
        }
      }
    } else {
      //error en datos del Storage
      // ¿?¿? Alert, ¿como puedo resetear la App por completo?
    }
    if (this.items.length < 1){
      //NO hay preguntas sin Usar, por lo tanto el tema está completo y OK
      this.sinPreguntas = true;
    }
    this.totales = tmpitems.length;
    this.restantes = this.items.length;
  }

  /* SOBRA este metodo, lo estamos obteniendo del LocalStorage al inicio de la APP
  getPreguntas( temaSeleccionado:any) {
    // recupero las preguntas del Fichero que corresponde con el tema seleccionado
    return this.http
    .get("assets/data/" + temaSeleccionado + ".json")
    .pipe(
      map((res: any) => {
      return res.data;
    })
    )
  }
  */

  resuelveRespuesta( pregunta:any, respuesta:string){
    //Compruebo el resultado (en cada click) de cada respuesta seleccionada
    // me voy almacenando los datos para despues poder navegar a las pantallas
      // de Errores
      // de Validadas OK
    
    //indico que se ha respondido alguna respuesta
      // para poder actualizar el pie de la pagina (solo Ver OK - Ver OK y Evaluar test)
    this.respuestaPregunta = true;
    // me quedo con la respuesta que se ha dado
    pregunta.userAns=respuesta;

    console.log ("Evaluacion pregunta ")
    if (pregunta.correctAns == respuesta) {
      console.log ("True ");
      // add al listado de Validadas OK
      this.CorrectResponse.push(pregunta)
    } else {
      console.log ("FALSE ");
      // add al listado de errores
      this.failResponse.push(pregunta)
    }
      
  }

  enviaResultados (){
    // recorro el listado de preguntas buscando las CORRECTAS en el listado de OK
    for (let i=0; i < this.items.length; i++){
      // por cada pregunta recorro el listado de OK buscandola
      for (let j=0; j < this.CorrectResponse.length; j++) {
        if (this.items[i].question == this.CorrectResponse[j].question){
          // la pregunta se ha usado y se respondío OK
          this.items[i].usada = true;
          console.log("Marco como USADA", i, this.items[i].question)
          break // para dejar de Recorrer el listado OK
        } else {
          // NO es la misma pregunta
        }
      }
    }

    // Actualizo los datos del LocalStorage para:
      // actualizar el listado completo de preguntas (obviar las usadas)
    console.log("Listado Actualizado:", this.items);
    if (this.items.length > 0) {
      localStorage.setItem("Preguntas"+ this.tema, JSON.stringify(this.items));
    }

      // actualizar el listado de errores
    console.log("Listado de Errores:", this.failResponse);
    if (this.failResponse.length > 0) {
      localStorage.setItem("failResponse",JSON.stringify(this.failResponse));
    }
  
    //console.log("fin de Almacenamiento")
  }

  resetCuestionario() {
    console.log("Inicio el RESET");
    
    //borro las preguntas respondidas OK 
    let tmpJson: string = "";
    let tmpitems: any[] = [];
    tmpJson = localStorage.getItem("Preguntas"+ this.tema) || "";
    if (tmpJson != "") {
      tmpitems = JSON.parse(tmpJson);
      console.log("Listado preguntas " + this.tema + " Completo",tmpitems);
      //recorro los datos obtenidos para eliminar las preguntas YA USADAS
      for (let i=0; i < tmpitems.length; i++){
        if (tmpitems[i].usada) {
          console.log("Pregunta YA USADA, hago RESET", i, tmpitems[i].question)
          tmpitems[i].usada = false;
          tmpitems[i].userAns = "-1";
        } else{
          //no hago nada, pues ya sale
        }
      }
    } else {
      //error en datos del Storage
      // ¿?¿? Alert, ¿como puedo resetear la App por completo?
    }
    this.items = tmpitems;

    //almaceno los datos en LocalStorage
      //borro lo actual
      localStorage.removeItem("Preguntas"+ this.tema);
      //almaceno lo nuevo
      localStorage.setItem("Preguntas"+ this.tema,JSON.stringify(this.items));

    //reseteo variables para la pantalla
    this.sinPreguntas = false;
    this.respuestaPregunta = false;
      //listado de preguntas FALLIDAS
    this.failResponse = [];
      //listado de preguntas CORRECTAS
    this.CorrectResponse = [];

    console.log("Fin del RESET");
  }

}