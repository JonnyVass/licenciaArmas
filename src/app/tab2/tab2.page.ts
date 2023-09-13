import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  // listado de preguntas y respuestas 
  itemsT1: any = [];
  itemsT2: any = [];
  itemsT3: any = [];
  itemsT4: any = [];
  itemsT5: any = [];
  itemsT6: any = [];
  itemsT7: any = [];

  examen: any = [];
  activaRevision: boolean = false;
  preguntasExamen: number = 0;
  sinPreguntas: boolean = false;
  respuestaPregunta: boolean = false;
  //listado de preguntas FALLIDAS
  failResponse: any = [];
  //listado de preguntas CORRECTAS
  CorrectResponse: any = [];

  constructor(
    public http: HttpClient //
  ) {}
  
  ionViewWillEnter() {
    // Usamos este evento para reinicializar el Examen Final cada vez ya que en el 
      // ngOnInit solo se ejecuta 1 vez cuando cargamos la App
    
      //reset de la variable
    this.examen = [];
    //preparo el examen simulando el original
    this.getExamen()
  }

  ngOnInit() {
    let tmpJson: string = "";
    // Obtener todos los temas del storage y los trato como NO usados
      // TEMA 1
    tmpJson = localStorage.getItem("PreguntasT1") || "";
    //recupero los resultados del tema
    if (tmpJson != "") {
      this.itemsT1 = JSON.parse(tmpJson);
    } else {
      //error en datos del Storage
      // ¿?¿? Alert, ¿como puedo resetear la App por completo?
    }
      //console.log("itemsT1 recuperados Storage", this.itemsT1);
    this.itemsT1 = this.resetListado(this.itemsT1); //reinicio para que esten todas NO usadas
      // TEMA 2
    tmpJson = localStorage.getItem("PreguntasT2") || "";
    //recupero los resultados del tema
    if (tmpJson != "") {
      this.itemsT2 = JSON.parse(tmpJson);
    } else {
      //error en datos del Storage
      // ¿?¿? Alert, ¿como puedo resetear la App por completo?
    }
    this.itemsT2 = this.resetListado(this.itemsT2); //reinicio para que esten todas NO usadas
      // TEMA 3
    tmpJson = localStorage.getItem("PreguntasT3") || "";
    //recupero los resultados del tema
    if (tmpJson != "") {
      this.itemsT3 = JSON.parse(tmpJson);
    } else {
      //error en datos del Storage
      // ¿?¿? Alert, ¿como puedo resetear la App por completo?
    }
    this.itemsT3 = this.resetListado(this.itemsT3); //reinicio para que esten todas NO usadas
      // TEMA 4
    tmpJson = localStorage.getItem("PreguntasT4") || "";
    //recupero los resultados del tema
    if (tmpJson != "") {
      this.itemsT4 = JSON.parse(tmpJson);
    } else {
      //error en datos del Storage
      // ¿?¿? Alert, ¿como puedo resetear la App por completo?
    }
    this.itemsT4 = this.resetListado(this.itemsT4); //reinicio para que esten todas NO usadas
      // TEMA 5
    tmpJson = localStorage.getItem("PreguntasT5") || "";
    //recupero los resultados del tema
    if (tmpJson != "") {
      this.itemsT5 = JSON.parse(tmpJson);
    } else {
      //error en datos del Storage
      // ¿?¿? Alert, ¿como puedo resetear la App por completo?
    }
    this.itemsT5 = this.resetListado(this.itemsT5); //reinicio para que esten todas NO usadas
      // TEMA 6
    tmpJson = localStorage.getItem("PreguntasT6") || "";
    //recupero los resultados del tema
    if (tmpJson != "") {
      this.itemsT6 = JSON.parse(tmpJson);
    } else {
      //error en datos del Storage
      // ¿?¿? Alert, ¿como puedo resetear la App por completo?
    }
    this.itemsT6 = this.resetListado(this.itemsT6); //reinicio para que esten todas NO usadas
      // TEMA 7
    tmpJson = localStorage.getItem("PreguntasT7") || "";
    //recupero los resultados del tema
    if (tmpJson != "") {
      this.itemsT7 = JSON.parse(tmpJson);
    } else {
      //error en datos del Storage
      // ¿?¿? Alert, ¿como puedo resetear la App por completo?
    }
    this.itemsT7 = this.resetListado(this.itemsT7); //reinicio para que esten todas NO usadas



    // descoloco las preguntas para que NO estén en orden
    this.barajarArray(this.itemsT1); //random en listado
    this.barajarArray(this.itemsT2); //random en listado
    this.barajarArray(this.itemsT3); //random en listado
    this.barajarArray(this.itemsT4); //random en listado
    this.barajarArray(this.itemsT5); //random en listado
    this.barajarArray(this.itemsT6); //random en listado
    this.barajarArray(this.itemsT7); //random en listado
  
      // no hacemos mas, esperamos a que se ejecute el ionViewWillEnter
        // para generar el examen random (ya q ese evento se genera cada vez que
        // se carga la pagina)
    
  }

  

  resetListado (preguntas: any[]){
    //recorro las preguntas para dejarlas a NO usadas
    for (let i=0; i < preguntas.length; i++){
      preguntas[i].usada = false;
    }
    return preguntas;
  }

  getExamen() {
    //voy obteniendo una pregunta de cada tema aplicando la logica de la GuardiaCivil
      // hay N preguntas de cada tema y busco en la NO usadas
      // realizo N llamadas con la misma lista y añado al final del array de examen
      let aux: any [] = [];
        // TEMA 1 --> 4 preguntas
      for (let i=1; i<=4; i++){
        aux = this.buscarAleatorio(this.itemsT1);
        if (aux != null){
          //es una respuesta NO usada antes
          this.examen.push(aux);
        }else {
          //si es null, reseteo el listado para comenzar de nuevo
          this.itemsT3 = this.resetListado(this.itemsT1);
          aux = this.buscarAleatorio(this.itemsT1);
          this.examen.push(aux);
        }
      }
        // TEMA 2 --> 3 preguntas
      for (let i=1; i<=3; i++){
        aux = this.buscarAleatorio(this.itemsT2);
        if (aux != null){
          //es una respuesta NO usada antes
          this.examen.push(aux);
        }else {
          //si es null, reseteo el listado para comenzar de nuevo
          this.itemsT3 = this.resetListado(this.itemsT2);
          aux = this.buscarAleatorio(this.itemsT2);
          this.examen.push(aux);
        }
      }
        // TEMA 3 --> 3 preguntas
      for (let i=1; i<=3; i++){
        aux = this.buscarAleatorio(this.itemsT3);
        if (aux != null){
          //es una respuesta NO usada antes
          this.examen.push(aux);
        }else {
          //si es null, reseteo el listado para comenzar de nuevo
          this.itemsT3 = this.resetListado(this.itemsT3);
          aux = this.buscarAleatorio(this.itemsT3);
          this.examen.push(aux);
        }
      }
        // TEMA 4 --> 4 preguntas
      for (let i=1; i<=4; i++){
        aux = this.buscarAleatorio(this.itemsT4);
        if (aux != null){
          //es una respuesta NO usada antes
          this.examen.push(aux);
        }else {
          //si es null, reseteo el listado para comenzar de nuevo
          this.itemsT4 = this.resetListado(this.itemsT4);
          aux = this.buscarAleatorio(this.itemsT4);
          this.examen.push(aux);
        }
      }
        // TEMA 5 --> 3 preguntas
      for (let i=1; i<=3; i++){
        aux = this.buscarAleatorio(this.itemsT5);
        if (aux != null){
          //es una respuesta NO usada antes
          this.examen.push(aux);
        }else {
          //si es null, reseteo el listado para comenzar de nuevo
          this.itemsT5 = this.resetListado(this.itemsT5);
          aux = this.buscarAleatorio(this.itemsT5);
          this.examen.push(aux);
        }
      }
        // TEMA 6 --> 3 preguntas
      for (let i=1; i<=3; i++){
        aux = this.buscarAleatorio(this.itemsT6);
        if (aux != null){
          //es una respuesta NO usada antes
          this.examen.push(aux);
        }else {
          //si es null, reseteo el listado para comenzar de nuevo
          this.itemsT6 = this.resetListado(this.itemsT6);
          aux = this.buscarAleatorio(this.itemsT6);
          this.examen.push(aux);
        }
      }
        // TEMA 7 --> 4 preguntas
      for (let i=1; i<=4; i++){
        aux = this.buscarAleatorio(this.itemsT7);
        if (aux != null){
          //es una respuesta NO usada antes
          this.examen.push(aux);
        }else {
          //si es null, reseteo el listado para comenzar de nuevo
          this.itemsT7 = this.resetListado(this.itemsT7);
          aux = this.buscarAleatorio(this.itemsT7);
          this.examen.push(aux);
        }
      }
   

    //sacamos las preguntas de manera aleatoria:
    this.barajarArray(this.examen);

    //inicializo el Nº de preguntas del examen
    this.preguntasExamen = this.examen.length;
    console.log("Nº de preguntas: ", this.preguntasExamen)
  }

  // NO LO USO, borrar si NO es necesario
  contarDisponibles( preguntasTema: any[]) {
    // cuenta el nº de items que estan SIN usar para saber si hay que resetear o no
    let contador: number = 0;
    for (let i=0; i < preguntasTema.length ; i++){
      if (!preguntasTema[i].usada) {
        contador++;
      }
    }
    return contador
  }

  buscarAleatorio( preguntasTema: any[]) {
    // Busco una pregunta NO usada dentro del listado que ya es aleatorio
    let encontrada: boolean = false;
    let pos: number = 0;

    for (let i=0; i < preguntasTema.length ; i++){
      if (preguntasTema[i].usada) {
        // está usada y NO quiero repetir
          //console.log("Pregunta usada: ", preguntasTema[i]);
      }else{
        // NO se ha usado y me quedo con ella
        pos = i;
        encontrada = true;
          //console.log("Pregunta libre: ", preguntasTema[i]);
        break;
      }
    }

    // devuelvo la pregunta encontrada (o reseteo y devuelvo la primera)
    if (encontrada) {
      preguntasTema[pos].usada = true;
      return preguntasTema[pos]
    } else {
      //preguntasTema = this.resetListado(preguntasTema);
      //preguntasTema[0].usada = true;
      return null //preguntasTema[0]
    }

  }

  numAleatorio(a:number,b:number) {
    return Math.round(Math.random() * (b - a));// + parseInt(a, 10));
  }

  barajarArray(lista: any[]){
    // barajea las posiciones del Array de manera aleatoria
    let num: number;
    let aleatorio:number;
    let aux: any;

    num = lista.length-1;
    while (num > 0) {
      aleatorio = Math.round(Math.random());
      aux = lista[aleatorio];
      lista[aleatorio] = lista[num];
      lista[num] = aux;
      num =num - 1;
    }

  }

  resuelveRespuesta( pregunta:any, respuesta:string){
    //Compruebo el resultado (en cada click) de cada respuesta seleccionada
    // me voy almacenando los datos para despues poder navegar a la pantalla
      // FINAL del Examen
    
    //Busco la pregunta en el listado del examen y asigno el valor respondido
    this.examen[
      this.buscaPregunta(pregunta)
    ].userAns=respuesta;
    
    //si se han respondido todas las preguntas activo el boton en pantalla
    this.activaRevision = this.todasRespondidas();
      
  }

  buscaPregunta( pregunta:any ): number{
    //recorro el examen buscando la posicion de esta pregunta
    for (let i=0; i < this.examen.length ; i++){
      if (this.examen[i].question == pregunta.question ){
        return i;
      }
    }
    return 99 // esto NO puede ocurrir nunca
  }

  todasRespondidas(): boolean {
    //recorro el examen para ver si todas se han respondido o no
    for (let i=0; i < this.examen.length ; i++){
      if (this.examen[i].userAns == "-1"){
        //esta pregunta está sin responder
        return false
      }
    }

    return true 
  }

  resuelveExamen(){
    //me guardo en el LocalStorage el resultado del examen para poder tratarlo en la
      //pagina de resultados
    localStorage.removeItem("respuestasExamen");
    localStorage.setItem("respuestasExamen",JSON.stringify(this.examen));
  }
  //xxxxxxxxx

}
