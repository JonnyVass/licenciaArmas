import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  // listado de preguntas y respuestas 
  itemsT1: any = [];
  itemsT2: any = [];
  itemsT3: any = [];
  itemsT4: any = [];
  itemsT5: any = [];
  itemsT6: any = [];
  itemsT7: any = [];
  // listado de errores
  erroresT1: any = [];
  erroresT2: any = [];
  erroresT3: any = [];
  erroresT4: any = [];
  erroresT5: any = [];
  erroresT6: any = [];
  erroresT7: any = [];

  constructor(
    public http: HttpClient
  ) {}

  ngOnInit() {
    //Compruebo si tengo datos de sesion
    if (this.cargarSesion())
      console.log("Se cargan los datos de sesion")
    else {
      // Cargo los datos que tengo en los Ficheros JMG_cambiar por un FOR
      // TEMA 1
      this.getPreguntas("Tema_1").subscribe(res => {
        // tengo que esperarme (suscribirme) a la obtencion de datos del Fichero
        this.itemsT1 = res;
        console.log("FICHERO: Listado preguntas T1", this.itemsT1);
        if (this.itemsT1.length > 0) { //si tengo datos los guardo en el Storage
          localStorage.setItem("PreguntasT1",JSON.stringify(this.itemsT1));
        } else { // guardo dato Vacío
            localStorage.setItem("PreguntasT1","");
        }
      });
      // TEMA 2
      this.getPreguntas("Tema_2").subscribe(res => {
        this.itemsT2 = res;
        console.log("FICHERO: Listado preguntas T2", this.itemsT2);
        if (this.itemsT2.length > 0) {
          localStorage.setItem("PreguntasT2",JSON.stringify(this.itemsT2));
        } else { // guardo dato Vacío
            localStorage.setItem("PreguntasT2","");
        }
      });
      // TEMA 3
      this.getPreguntas("Tema_3").subscribe(res => {
        this.itemsT3 = res;
        console.log("FICHERO: Listado preguntas T3", this.itemsT3);
        if (this.itemsT3.length > 0) {
          localStorage.setItem("PreguntasT3",JSON.stringify(this.itemsT3));
        } else { // guardo dato Vacío
            localStorage.setItem("PreguntasT3","");
        }
      });
      
      // FIN JMG_cambiar por un FOR
      localStorage.setItem("datos","true");
      console.log("FIN de creacion de datos en LocalStorage");
      // NO SE CARGAN LOS ERRORES EN LocalStorage ya que estamos entrando de 0
      
      //this.guardarFicherosSesion();
    }
  }

  cargarSesion():boolean {
    // recupero los datos que tengo en el LocalStorage almacenados
    //variable temporal
    let tmpJson: string = "";
    
    //Compruebo si tengo datos en el localStorage
    if (localStorage.getItem("datos")){
      //PREGUNTAS: recorro los distintos temarios JMG_cambiar por un FOR
      tmpJson = localStorage.getItem("PreguntasT1") || "";
        //recupero los resultados del tema
      if (tmpJson != "") {
        this.itemsT1 = JSON.parse(tmpJson);
        console.log("Listado preguntas T1",this.itemsT1);
      }
      tmpJson = localStorage.getItem("PreguntasT2") || "";
        //recupero los resultados del tema
      if (tmpJson != "") {
        this.itemsT2 = JSON.parse(tmpJson);
        console.log("Listado preguntas T2",this.itemsT2);
      }
      // FIN JMG_cambiar por un FOR

      //ERRORES: recorro los distintos temarios JMG_cambiar por un FOR
      tmpJson = localStorage.getItem("ErroresT1") || "";
        //recupero los resultados del tema
      if (tmpJson != "") {
        this.erroresT1 = JSON.parse(tmpJson);
        console.log("Listado Errores T1",this.erroresT1);
      }
      tmpJson = localStorage.getItem("ErroresT2") || "";
        //recupero los resultados del tema
      if (tmpJson != "") {
        this.erroresT2 = JSON.parse(tmpJson);
        console.log("Listado Errores T2",this.erroresT2);
      }
      // FIN JMG_cambiar por un FOR
      return true;
    } else {
      console.log("NO hay datos del Storage");
      return false
    }
  }

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

  
}
