"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4626],{4626:(x,c,r)=>{r.r(c),r.d(c,{ResultadosPageModule:()=>T});var l=r(6814),g=r(95),i=r(9843),u=r(1379),e=r(9468);function m(t,s){1&t&&(e.TgZ(0,"ion-item"),e._UZ(1,"ion-icon",4),e.qZA())}function d(t,s){1&t&&(e.TgZ(0,"ion-item")(1,"ion-label")(2,"h1",5),e._uU(3,"Todas tus respuestas son Correctas"),e.qZA()()())}function _(t,s){if(1&t&&(e.TgZ(0,"ion-item"),e._uU(1),e.qZA()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.hij(" ",o.label," ")}}function p(t,s){if(1&t&&(e.TgZ(0,"ion-item",8),e._uU(1),e.qZA()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.hij(" ",o.label," ")}}function f(t,s){if(1&t&&(e.TgZ(0,"ion-item"),e.YNc(1,_,2,1,"ion-item",2),e.YNc(2,p,2,1,"ion-item",7),e.qZA()),2&t){const o=s.$implicit;e.xp6(1),e.Q6J("ngIf",1==o.result),e.xp6(1),e.Q6J("ngIf",0==o.result)}}function R(t,s){if(1&t&&(e.TgZ(0,"ion-item")(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),e._uU(4),e.qZA()(),e.TgZ(5,"ion-card-content")(6,"ion-list"),e.YNc(7,f,3,2,"ion-item",6),e.qZA()()()()),2&t){const o=s.$implicit;e.xp6(4),e.Oqu(o.question),e.xp6(3),e.Q6J("ngForOf",o.answers)}}function Z(t,s){if(1&t&&(e.TgZ(0,"ion-list")(1,"ion-item"),e._uU(2," Listado de Errores: "),e.qZA(),e.TgZ(3,"ion-list"),e.YNc(4,R,8,2,"ion-item",6),e.qZA()()),2&t){const o=e.oxw();e.xp6(4),e.Q6J("ngForOf",o.errores)}}const h=[{path:"",component:(()=>{var t;class s{constructor(n,a){this.router=n,this.navCtrl=a,this.errores=[],this.tmpJson="",this.sinErrores=!1}ngOnInit(){this.tmpJson=localStorage.getItem("failResponse")||"",""!=this.tmpJson?(this.errores=JSON.parse(this.tmpJson),console.log("Errores del LocalStorage",this.errores)):(this.sinErrores=!0,console.log("SIN ERRORES"))}resetResultados(){this.navCtrl.navigateRoot("")}}return(t=s).\u0275fac=function(n){return new(n||t)(e.Y36(u.F0),e.Y36(i.SH))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-resultados"]],decls:12,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],[4,"ngIf"],["expand","full",3,"click"],["name","checkmark-circle",2,"color","green"],[1,"ion-text-wrap"],[4,"ngFor","ngForOf"],["style","color: red;",4,"ngIf"],[2,"color","red"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Resultados"),e.qZA()()(),e.TgZ(4,"ion-content",1),e.YNc(5,m,2,0,"ion-item",2),e.YNc(6,d,4,0,"ion-item",2),e.YNc(7,Z,5,1,"ion-list",2),e.TgZ(8,"ion-footer")(9,"ion-toolbar")(10,"ion-button",3),e.NdJ("click",function(){return a.resetResultados()}),e._uU(11,"Home"),e.qZA()()()()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngIf",1==a.sinErrores),e.xp6(1),e.Q6J("ngIf",1==a.sinErrores),e.xp6(1),e.Q6J("ngIf",0==a.sinErrores))},dependencies:[l.sg,l.O5,i.YG,i.PM,i.FN,i.Zi,i.Dq,i.W2,i.fr,i.Gu,i.gu,i.Ie,i.Q$,i.q_,i.wd,i.sr],styles:["ion-icon[_ngcontent-%COMP%]{font-size:256px}"]}),s})()}];let P=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(h),u.Bz]}),s})(),T=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,g.u5,i.Pc,P]}),s})()}}]);