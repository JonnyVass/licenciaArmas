import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  //listado de errores del test
  errores: any[] = [];
  tmpJson: string = "";
  sinErrores: boolean = false;

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // recupero los errores que tengo en el LocalStorage almacenados
    //variable temporal
    this.tmpJson = localStorage.getItem("failResponse") || "";
      //console.log("FIN recupero LocalStorage", this.tmpJson)
    //recupero los resultados del tema
    if (this.tmpJson != "") {
      this.errores = JSON.parse(this.tmpJson);
      console.log("Errores del LocalStorage", this.errores);
    } else {
      // NO TENGO ERRORES!!!
      // inicializo para que por pantalla salga esta info
      this.sinErrores = true;
      console.log("SIN ERRORES")
    }
  }

  resetResultados() {
    //this.errores= [];
    //this.tmpJson = "";
    //this.sinErrores = false;
    //localStorage.removeItem ("failResponse");
    //this.router.navigateByUrl("/");
    this.navCtrl.navigateRoot('');
  }
  
}
