"use strict";(self.webpackChunkAngular-Featuers-Exploration-Part2=self.webpackChunkAngular-Featuers-Exploration-Part2||[]).push([[143],{7143:(q,p,n)=>{n.r(p),n.d(p,{PostModule:()=>F});var a=n(8583),i=n(665),t=n(639),l=n(1841),d=n(8002),m=(n(5257),n(3190),n(3342)),v=n(1955);let h=(()=>{class e{constructor(o,s){this.httpClient=o,this.authServive=s}addPost(o){return this.httpClient.post("https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json",o,{headers:new l.WM({"custom-header":"Post Request"}),params:(new l.LE).set("custom","hai"),observe:"response"})}getPosts(){return this.httpClient.get("https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json",{}).pipe((0,d.U)(o=>{let s=[];for(let c in o)s.push(Object.assign(Object.assign({},o[c]),{id:c}));return s}))}clearPosts(){return this.httpClient.delete("https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json",{headers:new l.WM({"custom-header":"Delete Request"}),params:(new l.LE).set("custom","hai"),observe:"events",responseType:"text"}).pipe((0,m.b)(o=>{console.log(o),o.type===l.dt.Sent&&console.log("request sent"),o.type===l.dt.Response&&(console.log(o.body),console.log(o.body))})).subscribe(o=>{console.log(o)})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(l.eN),t.LFG(v.q))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function f(e,r){1&e&&(t.TgZ(0,"span",13),t._uU(1," Please Enter Tiltle "),t.qZA())}function Z(e,r){1&e&&(t.TgZ(0,"span",13),t._uU(1," Please Enter Description "),t.qZA())}function P(e,r){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.TgZ(3,"div"),t._uU(4),t.qZA(),t.qZA()),2&e){const o=r.$implicit;t.xp6(2),t.hij(" Title: ",o.title," "),t.xp6(2),t.hij(" Description: ",o.description," ")}}function b(e,r){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,P,5,2,"div",14),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.posts)}}function T(e,r){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",15),t._uU(2),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(2),t.Oqu(o.error)}}let C=(()=>{class e{constructor(o,s){this.httpClient=o,this.postserviceService=s,this.posts=[],this.postForm=new i.cw({title:new i.NI(null,[i.kI.required]),description:new i.NI(null,[i.kI.required])}),this.getPosts()}ngOnInit(){}get postFormControls(){return this.postForm.controls}addPost(){this.postserviceService.addPost(this.postForm.value).subscribe(s=>{console.log(s),this.getPosts()},s=>{console.log(s)},()=>{console.log("add complete")})}getPosts(){this.postserviceService.getPosts().subscribe(o=>{console.log(o),this.posts=o},o=>{this.error=o.message,console.log(o)},()=>{console.log("get complete")})}clearPosts(){this.postserviceService.clearPosts(),this.getPosts()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.eN),t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-posts"]],decls:23,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[3,"formGroup"],[1,"form-group"],["for","title"],["type","text","formControlName","title",1,"form-control"],["class","help-block",4,"ngIf"],["type","text","rows","3","formControlName","description",1,"form-control"],[1,"my-2"],[1,"btn","btn-primary",3,"disabled","click"],[1,"btn","btn-primary",3,"click"],[4,"ngIf"],[1,"help-block"],[4,"ngFor","ngForOf"],[1,"alert","alert-danger"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"form",3),t.TgZ(4,"div",4),t.TgZ(5,"label",5),t._uU(6,"Title"),t.qZA(),t._UZ(7,"input",6),t.YNc(8,f,2,0,"span",7),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"label",5),t._uU(11,"Description"),t.qZA(),t._UZ(12,"textarea",8),t.YNc(13,Z,2,0,"span",7),t.qZA(),t.TgZ(14,"div",9),t.TgZ(15,"button",10),t.NdJ("click",function(){return s.addPost()}),t._uU(16,"Add Post"),t.qZA(),t.TgZ(17,"button",11),t.NdJ("click",function(){return s.clearPosts()}),t._uU(18,"Clear Posts"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"h3"),t._uU(20,"Posts"),t.qZA(),t.YNc(21,b,2,1,"div",12),t.YNc(22,T,3,1,"div",12),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(3),t.Q6J("formGroup",s.postForm),t.xp6(5),t.Q6J("ngIf",!s.postFormControls.title.valid&&s.postFormControls.title.touched),t.xp6(5),t.Q6J("ngIf",!s.postFormControls.description.valid&&s.postFormControls.description.touched),t.xp6(2),t.Q6J("disabled",s.postForm.invalid),t.xp6(6),t.Q6J("ngIf",!s.error),t.xp6(1),t.Q6J("ngIf",s.error))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,a.O5,a.sg],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})();var A=n(2555),y=n(5822);let F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,i.u5,i.UX,A.Bz.forChild([{path:"",component:C,canActivate:[y.D]}])]]}),e})()}}]);