"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4054],{4054:(P,r,s)=>{s.r(r),s.d(r,{TabsPageModule:()=>b});var i=s(9843),g=s(6814),T=s(95),h=s(1379),m=s(7398),a=s(9468),u=s(9862);const d=[{path:"tabs",component:(()=>{var e;class o{constructor(t){this.http=t,this.itemsT1=[],this.itemsT2=[],this.itemsT3=[],this.itemsT4=[],this.itemsT5=[],this.itemsT6=[],this.itemsT7=[],this.erroresT1=[],this.erroresT2=[],this.erroresT3=[],this.erroresT4=[],this.erroresT5=[],this.erroresT6=[],this.erroresT7=[]}ngOnInit(){this.cargarSesion()?console.log("Se cargan los datos de sesion"):(this.getPreguntas("Tema_1").subscribe(t=>{this.itemsT1=t,console.log("FICHERO: Listado preguntas T1",this.itemsT1),this.itemsT1.length>0?localStorage.setItem("PreguntasT1",JSON.stringify(this.itemsT1)):localStorage.setItem("PreguntasT1","")}),this.getPreguntas("Tema_2").subscribe(t=>{this.itemsT2=t,console.log("FICHERO: Listado preguntas T2",this.itemsT2),this.itemsT2.length>0?localStorage.setItem("PreguntasT2",JSON.stringify(this.itemsT2)):localStorage.setItem("PreguntasT2","")}),this.getPreguntas("Tema_3").subscribe(t=>{this.itemsT3=t,console.log("FICHERO: Listado preguntas T3",this.itemsT3),this.itemsT3.length>0?localStorage.setItem("PreguntasT3",JSON.stringify(this.itemsT3)):localStorage.setItem("PreguntasT3","")}),localStorage.setItem("datos","true"),console.log("FIN de creacion de datos en LocalStorage"))}cargarSesion(){let t="";return localStorage.getItem("datos")?(t=localStorage.getItem("PreguntasT1")||"",""!=t&&(this.itemsT1=JSON.parse(t),console.log("Listado preguntas T1",this.itemsT1)),t=localStorage.getItem("PreguntasT2")||"",""!=t&&(this.itemsT2=JSON.parse(t),console.log("Listado preguntas T2",this.itemsT2)),t=localStorage.getItem("ErroresT1")||"",""!=t&&(this.erroresT1=JSON.parse(t),console.log("Listado Errores T1",this.erroresT1)),t=localStorage.getItem("ErroresT2")||"",""!=t&&(this.erroresT2=JSON.parse(t),console.log("Listado Errores T2",this.erroresT2)),!0):(console.log("NO hay datos del Storage"),!1)}getPreguntas(t){return this.http.get("assets/data/"+t+".json").pipe((0,m.U)(l=>l.data))}}return(e=o).\u0275fac=function(t){return new(t||e)(a.Y36(u.eN))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-tabs"]],decls:14,vars:0,consts:[["slot","bottom"],["tab","tab1"],["aria-hidden","true","name","newspaper-outline"],["tab","tab2"],["aria-hidden","true","name","ribbon-outline"],["tab","tab3"],["aria-hidden","true","name","library-outline"]],template:function(t,l){1&t&&(a.TgZ(0,"ion-tabs")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),a._UZ(3,"ion-icon",2),a.TgZ(4,"ion-label"),a._uU(5,"Temas"),a.qZA()(),a.TgZ(6,"ion-tab-button",3),a._UZ(7,"ion-icon",4),a.TgZ(8,"ion-label"),a._uU(9,"Examen"),a.qZA()(),a.TgZ(10,"ion-tab-button",5),a._UZ(11,"ion-icon",6),a.TgZ(12,"ion-label"),a._uU(13,"Temario"),a.qZA()()()())},dependencies:[i.gu,i.Q$,i.yq,i.ZU,i.UN]}),o})(),children:[{path:"tab1",loadChildren:()=>Promise.all([s.e(8592),s.e(6849)]).then(s.bind(s,6849)).then(e=>e.Tab1PageModule)},{path:"tab2",loadChildren:()=>Promise.all([s.e(8592),s.e(8204)]).then(s.bind(s,8204)).then(e=>e.Tab2PageModule)},{path:"tab3",loadChildren:()=>Promise.all([s.e(8592),s.e(582)]).then(s.bind(s,582)).then(e=>e.Tab3PageModule)},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}];let c=(()=>{var e;class o{}return(e=o).\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[h.Bz.forChild(d)]}),o})(),b=(()=>{var e;class o{}return(e=o).\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[i.Pc,g.ez,T.u5,c]}),o})()}}]);