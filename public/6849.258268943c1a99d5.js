"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6849],{6849:(F,c,n)=>{n.r(c),n.d(c,{Tab1PageModule:()=>b});var i=n(9843),l=n(6814),m=n(95),g=n(3554),r=n(1379),d=n(7398),t=n(9468),p=n(9862);const T=function(e){return["/questionario",e]};function f(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"ion-item",3),t.NdJ("click",function(){const M=t.CHM(a).$implicit,x=t.oxw();return t.KtG(x.setTema(M))}),t._uU(1),t.qZA()}if(2&e){const a=s.$implicit;t.Q6J("routerLink",t.VKq(2,T,a.id)),t.xp6(1),t.hij(" ",a.name," ")}}const h=[{path:"",component:(()=>{var e;class s{constructor(o){this.http=o,this.temas=[],this.tema={}}ngOnInit(){this.getTemas().subscribe(o=>{console.log("Temas",o),this.temas=o})}getTemas(){return this.http.get("assets/data/temas.json").pipe((0,d.U)(o=>o.data))}setTema(o){console.log("Tema seleccionado: ",o),this.tema=o,localStorage.removeItem("failResponse")}}return(e=s).\u0275fac=function(o){return new(o||e)(t.Y36(p.eN))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tab1"]],decls:7,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],[3,"routerLink","click",4,"ngFor","ngForOf"],[3,"routerLink","click"]],template:function(o,u){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Elije un tema "),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-list"),t.YNc(6,f,2,4,"ion-item",2),t.qZA()()),2&o&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("ngForOf",u.temas))},dependencies:[i.W2,i.Gu,i.Ie,i.q_,i.wd,i.sr,i.YI,l.sg,r.rH]}),s})()}];let P=(()=>{var e;class s{}return(e=s).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.Bz.forChild(h),r.Bz]}),s})();var v=n(9007);let b=(()=>{var e;class s{}return(e=s).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.Pc,l.ez,m.u5,g.e,P,v.QuestionarioPageModule]}),s})()}}]);