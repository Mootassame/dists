!function(){function e(e,n){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{TDBs:function(t,a,c){"use strict";c.r(a),c.d(a,"DashboardModule",(function(){return Ee}));var i,o=c("PCNd"),s=c("tyNb"),d=c("mrSG"),f=c("Vbab"),u=c("fXoL"),l=c("wZkO"),h=c("mmyZ"),p=c("qXBG"),g=c("QmLB"),b=c("LRQo"),v=((i=function(){function t(e,a){n(this,t),this.authService=e,this.errorService=a,this.loading=!1,this.loadingin=!1,this.loadingte=!1,this.loadingas=!1,this.loadingpa=!1,this.countne=0,this.countin=0,this.countte=0,this.countas=0,this.countpa=0}return r(t,[{key:"countNews",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,b.a.countNews();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;)c=r.value,this.countne=c.count}catch(i){a.e(i)}finally{a.f()}t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.errorService.handle(t.t0),this.loading=!1,this.countne=0;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})))}},{key:"countInformations",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingin=!0,t.next=4,b.a.countInformations();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;)c=r.value,this.countin=c.count}catch(i){a.e(i)}finally{a.f()}t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.errorService.handle(t.t0),this.loadingin=!1,this.countin=0;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})))}},{key:"countTestimony",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingte=!0,t.next=4,b.a.countTestimony();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;)c=r.value,this.countte=c.count}catch(i){a.e(i)}finally{a.f()}t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.errorService.handle(t.t0),this.loadingte=!1,this.countte=0;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})))}},{key:"countAssistance",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingas=!0,t.next=4,b.a.countAssistance();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;)c=r.value,this.countas=c.count}catch(i){a.e(i)}finally{a.f()}t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.errorService.handle(t.t0),this.loadingas=!1,this.countne=0;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})))}},{key:"countPartenar",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingpa=!0,t.next=4,b.a.countPartenar();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;)c=r.value,this.countpa=c.count}catch(i){a.e(i)}finally{a.f()}t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.errorService.handle(t.t0),this.loadingpa=!1,this.countpa=0;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})))}},{key:"hasPermissionToRead",get:function(){return this.authService.hasPermission(h.a.values.dashboardRead)}}]),t}()).\u0275fac=function(e){return new(e||i)(u.Rc(p.a),u.Rc(g.a))},i.\u0275prov=u.Dc({token:i,factory:i.\u0275fac,providedIn:"root"}),i),y=c("UDmo"),m=c("ofXK"),x=c("Xa2L");function k(e,t){1&e&&(u.Nc(0,"div",8),u.Ic(1,"mat-spinner",9),u.Mc())}function w(e,t){if(1&e&&(u.Nc(0,"div"),u.Nc(1,"div",2),u.Nc(2,"span",3),u.yd(3),u.Mc(),u.Mc(),u.Nc(4,"div",4),u.Ic(5,"app-i18n",10),u.Mc(),u.Mc()),2&e){var n=u.Xc();u.wc(3),u.Ad(" ",n.Countin," ")}}function S(e,t){1&e&&(u.Nc(0,"div",8),u.Ic(1,"mat-spinner",9),u.Mc())}function C(e,t){if(1&e&&(u.Nc(0,"div"),u.Nc(1,"div",2),u.Nc(2,"span",3),u.yd(3),u.Mc(),u.Mc(),u.Nc(4,"div",4),u.Ic(5,"app-i18n",11),u.Mc(),u.Mc()),2&e){var n=u.Xc();u.wc(3),u.Ad(" ",n.Countte," ")}}function M(e,t){1&e&&(u.Nc(0,"div",8),u.Ic(1,"mat-spinner",9),u.Mc())}function F(e,t){if(1&e&&(u.Nc(0,"div"),u.Nc(1,"div",2),u.Nc(2,"span",3),u.yd(3),u.Mc(),u.Mc(),u.Nc(4,"div",4),u.Ic(5,"app-i18n",12),u.Mc(),u.Mc()),2&e){var n=u.Xc();u.wc(3),u.Ad(" ",n.Countas," ")}}function I(e,t){1&e&&(u.Nc(0,"div",8),u.Ic(1,"mat-spinner",9),u.Mc())}function N(e,t){if(1&e&&(u.Nc(0,"div"),u.Nc(1,"div",2),u.Nc(2,"span",3),u.yd(3),u.Mc(),u.Mc(),u.Nc(4,"div",4),u.Ic(5,"app-i18n",13),u.Mc(),u.Mc()),2&e){var n=u.Xc();u.wc(3),u.Ad(" ",n.Countpa," ")}}var A,R,B,E,O,j=((A=function(){function e(t){n(this,e),this.GeneralService=t}return r(e,[{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.GeneralService.countNews();case 2:case"end":return e.stop()}}),e,this)})))}},{key:"Loading",get:function(){return this.GeneralService.loading}},{key:"Count",get:function(){return this.GeneralService.countne}},{key:"Loadingin",get:function(){return this.GeneralService.loadingin}},{key:"Countin",get:function(){return this.GeneralService.countin}},{key:"Loadingte",get:function(){return this.GeneralService.loadingte}},{key:"Countte",get:function(){return this.GeneralService.countte}},{key:"Loadingas",get:function(){return this.GeneralService.loadingas}},{key:"Countas",get:function(){return this.GeneralService.countas}},{key:"Loadingpa",get:function(){return this.GeneralService.loadingpa}},{key:"Countpa",get:function(){return this.GeneralService.countpa}}]),e}()).\u0275fac=function(e){return new(e||A)(u.Hc(v))},A.\u0275cmp=u.Bc({type:A,selectors:[["app-generale"]],decls:20,vars:9,consts:[[1,"container"],[1,"card"],[1,"card-header"],[1,"tag","tag-pink"],[1,"card-body"],["key","dashboard.news"],["class","app-page-spinner",4,"ngIf"],[4,"ngIf"],[1,"app-page-spinner"],["color","accent"],["key","dashboard.informations"],["key","dashboard.testimony"],["key","dashboard.assistance"],["key","dashboard.partenar"]],template:function(e,t){1&e&&(u.Nc(0,"div",0),u.Nc(1,"div",1),u.Nc(2,"div"),u.Nc(3,"div",2),u.Nc(4,"span",3),u.yd(5),u.Mc(),u.Mc(),u.Nc(6,"div",4),u.Ic(7,"app-i18n",5),u.Mc(),u.Mc(),u.Mc(),u.Nc(8,"div",1),u.xd(9,k,2,0,"div",6),u.xd(10,w,6,1,"div",7),u.Mc(),u.Nc(11,"div",1),u.xd(12,S,2,0,"div",6),u.xd(13,C,6,1,"div",7),u.Mc(),u.Nc(14,"div",1),u.xd(15,M,2,0,"div",6),u.xd(16,F,6,1,"div",7),u.Mc(),u.Nc(17,"div",1),u.xd(18,I,2,0,"div",6),u.xd(19,N,6,1,"div",7),u.Mc(),u.Mc()),2&e&&(u.wc(5),u.Ad(" ",t.Count," "),u.wc(4),u.dd("ngIf",t.Loadingin),u.wc(1),u.dd("ngIf",!t.Loadingin),u.wc(2),u.dd("ngIf",t.Loadingte),u.wc(1),u.dd("ngIf",!t.Loadingte),u.wc(2),u.dd("ngIf",t.Loadingas),u.wc(1),u.dd("ngIf",!t.Loadingas),u.wc(2),u.dd("ngIf",t.Loadingpa),u.wc(1),u.dd("ngIf",!t.Loadingpa))},directives:[y.a,m.k,x.b],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");*[_ngcontent-%COMP%]{box-sizing:border-box}.container[_ngcontent-%COMP%]{display:flex;width:auto;justify-content:space-evenly;flex-wrap:wrap;padding-top:15px}.card[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{align-items:center}.card[_ngcontent-%COMP%]{margin:10px;background-color:#fff;border-radius:10px;box-shadow:0 2px 20px rgba(0,0,0,.2);overflow:hidden;width:300px}.card-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;min-height:150px}.card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:80px;justify-content:center}.card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;min-height:150px}.tag[_ngcontent-%COMP%]{background:#ccc;border-radius:50px;font-size:12px;margin:0;color:#fff;padding:2px 10px;text-transform:uppercase;cursor:pointer}.tag-teal[_ngcontent-%COMP%]{background-color:#47bcd4}.tag-purple[_ngcontent-%COMP%]{background-color:#5e76bf}.tag-pink[_ngcontent-%COMP%]{background-color:#cd5b9f}.card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;margin:0 0 40px}h1[_ngcontent-%COMP%]{text-align:center;font-size:25px}']}),A),P=c("3aUP"),_=c("zkTT"),T=((E=function(){function t(e,a){n(this,t),this.errorService=e,this.snackbar=a,this.loadingt=!1,this.countt=[],this.labelt=[]}return r(t,[{key:"Transfere",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c,i,o,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingt=!0,this.labelt.length=0,this.countt.length=0,t.next=4,b.a.findByTransfere();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;){c=r.value,i=e(c.user);try{for(i.s();!(o=i.n()).done;)s=o.value,this.labelt.push(s.fullName)}catch(d){i.e(d)}finally{i.f()}this.countt.push(c.count)}}catch(d){a.e(d)}finally{a.f()}this.loadingt=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.errorService.handle(t.t0),this.labelt.length=0,this.countt.length=0,this.loadingt=!1;case 13:case"end":return t.stop()}}),t,this,[[0,10]])})))}},{key:"TransfereAssistance",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c,i,o,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingt=!0,this.labelt.length=0,this.countt.length=0,t.next=4,b.a.findByTransfereAssistance();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;){c=r.value,i=e(c.user);try{for(i.s();!(o=i.n()).done;)s=o.value,this.labelt.push(s.fullName)}catch(d){i.e(d)}finally{i.f()}this.countt.push(c.count)}}catch(d){a.e(d)}finally{a.f()}this.loadingt=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.errorService.handle(t.t0),this.labelt.length=0,this.countt.length=0,this.loadingt=!1;case 13:case"end":return t.stop()}}),t,this,[[0,10]])})))}}]),t}()).\u0275fac=function(e){return new(e||E)(u.Rc(g.a),u.Rc(_.a))},E.\u0275prov=u.Dc({token:E,factory:E.\u0275fac,providedIn:"root"}),E),X=((B=function(){function t(e,a){n(this,t),this.errorService=e,this.snackbar=a,this.loadingr=!1,this.countr=[],this.labelr=[]}return r(t,[{key:"Region",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingr=!0,this.labelr.length=0,this.countr.length=0,t.next=4,b.a.findByRegion();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;)c=r.value,this.labelr.push(Object(f.d)("entities.testimony.enumerators.region."+c._id)),this.countr.push(c.count)}catch(i){a.e(i)}finally{a.f()}this.loadingr=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.errorService.handle(t.t0),this.labelr.length=0,this.countr.length=0,this.loadingr=!1;case 13:case"end":return t.stop()}}),t,this,[[0,10]])})))}}]),t}()).\u0275fac=function(e){return new(e||B)(u.Rc(g.a),u.Rc(_.a))},B.\u0275prov=u.Dc({token:B,factory:B.\u0275fac,providedIn:"root"}),B),H=((R=function(){function t(e){n(this,t),this.errorService=e,this.loadingp=!1,this.countp=[],this.labelp=[]}return r(t,[{key:"Partenar",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingp=!0,this.labelp.length=0,this.countp.length=0,t.next=4,b.a.findByPartenar();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;)c=r.value,this.labelp.push(c.title),this.countp.push(c.count)}catch(i){a.e(i)}finally{a.f()}this.loadingp=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.errorService.handle(t.t0),this.labelp.length=0,this.countp.length=0,this.loadingp=!1;case 13:case"end":return t.stop()}}),t,this,[[0,10]])})))}}]),t}()).\u0275fac=function(e){return new(e||R)(u.Rc(g.a))},R.\u0275prov=u.Dc({token:R,factory:R.\u0275fac,providedIn:"root"}),R),L=c("gKUh"),G=c("MO+k"),D=c("Wp6s"),Z=["canvas"],z=((O=function(){function e(){n(this,e),this.chart=null}return r(e,[{key:"ngOnInit",value:function(){this.chart=new G.Chart(this.canvas.nativeElement,this.props);var e=Object(f.d)("dashboard.chart.title"),t=Object(f.d)("dashboard.chart.content");G.Chart.plugins.register({afterDraw:function(n){if(0===n.data.datasets[0].data.length){var a=n.chart.ctx,r=n.chart.width,c=n.chart.height;n.clear(),a.save(),a.textAlign="center",a.textBaseline="middle",a.font="16px normal 'Helvetica Nueue'",a.fillText(e,r/2,18),a.fillText(t,r/2,c/2),a.restore()}}})}}]),e}()).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=u.Bc({type:O,selectors:[["app-dashboard-chart"]],viewQuery:function(e,t){var n;1&e&&u.td(Z,!0),2&e&&u.ld(n=u.Uc())&&(t.canvas=n.first)},inputs:{props:"props"},decls:3,vars:0,consts:[[1,"mat-elevation-z0",2,"border","1px solid #e8e8e8"],["id","chart"],["canvas",""]],template:function(e,t){1&e&&(u.Nc(0,"mat-card",0),u.Ic(1,"canvas",1,2),u.Mc())},directives:[D.a],encapsulation:2}),O);function U(e,t){1&e&&(u.Nc(0,"div",6),u.Ic(1,"mat-spinner",7),u.Mc())}function Q(e,t){if(1&e&&(u.Nc(0,"div"),u.Ic(1,"app-dashboard-chart",8),u.Mc()),2&e){var n=u.Xc();u.wc(1),u.dd("props",n.bar)}}function J(e,t){1&e&&(u.Nc(0,"div",6),u.Ic(1,"mat-spinner",7),u.Mc())}function K(e,t){if(1&e&&(u.Nc(0,"div"),u.Ic(1,"app-dashboard-chart",8),u.Mc()),2&e){var n=u.Xc();u.wc(1),u.dd("props",n.barAssign)}}function q(e,t){1&e&&(u.Nc(0,"div",6),u.Ic(1,"mat-spinner",7),u.Mc())}function V(e,t){if(1&e&&(u.Nc(0,"div"),u.Ic(1,"app-dashboard-chart",8),u.Mc()),2&e){var n=u.Xc();u.wc(1),u.dd("props",n.barPartenar)}}function W(e,t){1&e&&(u.Nc(0,"div",6),u.Ic(1,"mat-spinner",7),u.Mc())}function $(e,t){if(1&e&&(u.Nc(0,"div"),u.Ic(1,"app-dashboard-chart",8),u.Mc()),2&e){var n=u.Xc();u.wc(1),u.dd("props",n.barRegion)}}function Y(e,t){1&e&&(u.Nc(0,"div",6),u.Ic(1,"mat-spinner",7),u.Mc())}function ee(e,t){if(1&e&&(u.Nc(0,"div"),u.Ic(1,"app-dashboard-chart",8),u.Mc()),2&e){var n=u.Xc();u.wc(1),u.dd("props",n.doughnut)}}var te,ne,ae,re=((ae=function(){function e(t,a,r,c,i,o,s){n(this,e),this.authService=t,this.StatusService=a,this.TransfereService=r,this.RegionService=c,this.PartenarService=i,this.CategoryService=o,this.router=s,this.doughnut={type:"doughnut",data:{labels:this.labelc,datasets:[{data:this.counts,backgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"]}]},options:{title:{display:!0,text:Object(f.d)("dashboard.text.category")}}},this.barPartenar={type:"bar",data:{labels:this.labelp,datasets:[{backgroundColor:["#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],borderColor:"#36A2EB",hoverBackgroundColor:["#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],hoverBorderColor:["#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],data:this.countp}]},options:{title:{display:!0,text:Object(f.d)("dashboard.text.partenar")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}},this.barRegion={type:"bar",data:{labels:this.labelr,datasets:[{backgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3"],borderColor:"#36A2EB",hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3"],hoverBorderColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3"],data:this.countr}]},options:{title:{display:!0,text:Object(f.d)("dashboard.text.region")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}},this.barAssign={type:"bar",data:{labels:this.labelt,datasets:[{backgroundColor:["#ffa600","#ff6361","#ff7c43","#48bee7","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#FF6384","#36A2EB","#FFCE56","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],borderColor:"#36A2EB",hoverBackgroundColor:["#ffa600","#ff6361","#ff7c43","#48bee7","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#FF6384","#36A2EB","#FFCE56","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],hoverBorderColor:["#ffa600","#ff6361","#ff7c43","#48bee7","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#FF6384","#36A2EB","#FFCE56","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],data:this.countt}]},options:{title:{display:!0,text:Object(f.d)("dashboard.text.assign")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}},this.bar={type:"bar",data:{labels:this.labels,datasets:[{backgroundColor:["#5098cd","#ffd6cd","#0094a3","#2cd182","#003f5c"],borderColor:"#36A2EB",hoverBackgroundColor:["#5098cd","#ffd6cd","#0094a3","#2cd182","#003f5c"],hoverBorderColor:["#5098cd","#ffd6cd","#0094a3","#2cd182","#003f5c"],data:this.conts}]},options:{title:{display:!0,text:Object(f.d)("dashboard.text.status")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}}}return r(e,[{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.CategoryService.Category();case 2:return e.next=4,this.StatusService.Status();case 4:return e.next=6,this.TransfereService.Transfere();case 6:return e.next=8,this.RegionService.Region();case 8:return e.next=10,this.PartenarService.Partenar();case 10:case"end":return e.stop()}}),e,this)})))}},{key:"loadings",get:function(){return this.StatusService.loadings}},{key:"labels",get:function(){return this.StatusService.labels}},{key:"conts",get:function(){return this.StatusService.counts}},{key:"labelt",get:function(){return this.TransfereService.labelt}},{key:"countt",get:function(){return this.TransfereService.countt}},{key:"loadingt",get:function(){return this.TransfereService.loadingt}},{key:"labelr",get:function(){return this.RegionService.labelr}},{key:"countr",get:function(){return this.RegionService.countr}},{key:"loadingr",get:function(){return this.RegionService.loadingr}},{key:"loadingp",get:function(){return this.PartenarService.loadingp}},{key:"labelp",get:function(){return this.PartenarService.labelp}},{key:"countp",get:function(){return this.PartenarService.countp}},{key:"counts",get:function(){return this.CategoryService.countc}},{key:"loadingc",get:function(){return this.CategoryService.loadingc}},{key:"labelc",get:function(){return this.CategoryService.labelc}}]),e}()).\u0275fac=function(e){return new(e||ae)(u.Hc(p.a),u.Hc(P.a),u.Hc(T),u.Hc(X),u.Hc(H),u.Hc(L.a),u.Hc(s.b))},ae.\u0275cmp=u.Bc({type:ae,selectors:[["app-testimonys"]],decls:17,vars:10,consts:[[2,"margin-top","16px"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-4",2,"margin-bottom","1em"],["class","app-page-spinner",4,"ngIf"],[4,"ngIf"],[1,"col-xs-12","col-md-6",2,"margin-bottom","1em"],[1,"app-page-spinner"],["color","accent"],[3,"props"]],template:function(e,t){1&e&&(u.Nc(0,"div",0),u.Nc(1,"div",1),u.Nc(2,"div",2),u.xd(3,U,2,0,"div",3),u.xd(4,Q,2,1,"div",4),u.Mc(),u.Nc(5,"div",2),u.xd(6,J,2,0,"div",3),u.xd(7,K,2,1,"div",4),u.Mc(),u.Nc(8,"div",2),u.xd(9,q,2,0,"div",3),u.xd(10,V,2,1,"div",4),u.Mc(),u.Nc(11,"div",5),u.xd(12,W,2,0,"div",3),u.xd(13,$,2,1,"div",4),u.Mc(),u.Nc(14,"div",5),u.xd(15,Y,2,0,"div",3),u.xd(16,ee,2,1,"div",4),u.Mc(),u.Mc(),u.Mc()),2&e&&(u.wc(3),u.dd("ngIf",t.loadings),u.wc(1),u.dd("ngIf",!t.loadings),u.wc(2),u.dd("ngIf",t.loadingt),u.wc(1),u.dd("ngIf",!t.loadingt),u.wc(2),u.dd("ngIf",t.loadingp),u.wc(1),u.dd("ngIf",!t.loadingp),u.wc(2),u.dd("ngIf",t.loadingr),u.wc(1),u.dd("ngIf",!t.loadingr),u.wc(2),u.dd("ngIf",t.loadingc),u.wc(1),u.dd("ngIf",!t.loadingc))},directives:[m.k,x.b,z],styles:[""]}),ae),ce=((ne=function(){function t(e,a){n(this,t),this.errorService=e,this.snackbar=a,this.loadings=!1,this.counts=[],this.labels=[],this.record=null,this.countm=[],this.labelm=[]}return r(t,[{key:"Status",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadings=!0,this.labels.length=0,this.counts.length=0,t.next=4,b.a.findByStatusAssistance();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;)c=r.value,"en"==(i=localStorage.getItem("language"))?this.labels.push(c._id):"es"==i?"waiting"==c._id?this.labels.push("En attente"):"open"==c._id?this.labels.push("En cours"):"closed"==c._id?this.labels.push("Ferm\xe9"):"canceled"==c._id&&this.labels.push("Annul\xe9"):this.labels.push(c._id),this.counts.push(c.count)}catch(o){a.e(o)}finally{a.f()}this.loadings=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.errorService.handle(t.t0),this.counts.length=0,this.labels.length=0,this.loadings=!1;case 13:case"end":return t.stop()}}),t,this,[[0,10]])})))}},{key:"MemberStatus",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadings=!0,t.next=4,b.a.MemberStatus();case 4:n=t.sent,this.labelm.length=0,this.countm.length=0,a=e(n);try{for(a.s();!(r=a.n()).done;)c=r.value,"en"==(i=localStorage.getItem("language"))?this.labelm.push(c._id):"es"==i?"waiting"==c._id?this.labelm.push("En attente"):"open"==c._id?this.labelm.push("En cours"):"closed"==c._id?this.labelm.push("Ferm\xe9"):"canceled"==c._id&&this.labelm.push("Annul\xe9"):this.labelm.push(c._id),this.countm.push(c.count)}catch(o){a.e(o)}finally{a.f()}this.loadings=!1,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),this.errorService.handle(t.t0),this.countm=[],this.labelm=[],this.loadings=!1;case 14:case"end":return t.stop()}}),t,this,[[0,11]])})))}}]),t}()).\u0275fac=function(e){return new(e||ne)(u.Rc(g.a),u.Rc(_.a))},ne.\u0275prov=u.Dc({token:ne,factory:ne.\u0275fac,providedIn:"root"}),ne),ie=function(){var t=function(){function t(e,a){n(this,t),this.errorService=e,this.snackbar=a,this.loadingr=!1,this.countr=[],this.labelr=[]}return r(t,[{key:"Region",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingr=!0,this.labelr.length=0,this.countr.length=0,t.next=4,b.a.findByRegionAssistance();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;)c=r.value,this.labelr.push(Object(f.d)("entities.testimony.enumerators.region."+c._id)),this.countr.push(c.count)}catch(i){a.e(i)}finally{a.f()}this.loadingr=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.errorService.handle(t.t0),this.labelr.length=0,this.countr.length=0,this.loadingr=!1;case 13:case"end":return t.stop()}}),t,this,[[0,10]])})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Rc(g.a),u.Rc(_.a))},t.\u0275prov=u.Dc({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),oe=function(){var t=function(){function t(e){n(this,t),this.errorService=e,this.loadingp=!1,this.countp=[],this.labelp=[]}return r(t,[{key:"Partenar",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingp=!0,this.labelp.length=0,this.countp.length=0,t.next=4,b.a.findByPartenarAssistance();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;)c=r.value,this.labelp.push(c.title),this.countp.push(c.count)}catch(i){a.e(i)}finally{a.f()}this.loadingp=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.errorService.handle(t.t0),this.labelp.length=0,this.countp.length=0,this.loadingp=!1;case 13:case"end":return t.stop()}}),t,this,[[0,10]])})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Rc(g.a))},t.\u0275prov=u.Dc({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),se=((te=function(){function t(e){n(this,t),this.errorService=e,this.loadingc=!1,this.countc=[],this.labelc=[],this.countm=[],this.labelm=[],this.loadingm=!1}return r(t,[{key:"Category",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c,i,o,s,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingc=!0,this.labelc.length=0,this.countc.length=0,t.next=4,b.a.findByCategoryAssistance();case 4:n=t.sent,this.language=Object(f.a)(),a=e(n);try{for(a.s();!(r=a.n()).done;){c=r.value,i=e(c.cat);try{for(i.s();!(o=i.n()).done;)s=o.value,d=localStorage.getItem("language"),this.labelc.push("en"==d?s.titleEN:"es"==d?s.titleFR:s.titleEN)}catch(u){i.e(u)}finally{i.f()}this.countc.push(c.count)}}catch(u){a.e(u)}finally{a.f()}this.loadingc=!1,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),this.errorService.handle(t.t0),this.labelc.length=0,this.countc.length=0,this.loadingc=!1;case 14:case"end":return t.stop()}}),t,this,[[0,11]])})))}},{key:"MemeberCategory",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c,i,o,s,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loadingm=!0,this.labelm.length=0,this.countm.length=0,t.next=4,b.a.MemberCategory();case 4:n=t.sent,a=e(n);try{for(a.s();!(r=a.n()).done;){c=r.value,i=e(c.cat);try{for(i.s();!(o=i.n()).done;)s=o.value,d=localStorage.getItem("language"),this.labelm.push("en"==d?s.titleEN:"es"==d?s.titleFR:s.titleEN)}catch(f){i.e(f)}finally{i.f()}this.countm.push(c.count)}}catch(f){a.e(f)}finally{a.f()}this.loadingm=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.errorService.handle(t.t0),this.labelm.length=0,this.countm.length=0,this.loadingm=!1;case 13:case"end":return t.stop()}}),t,this,[[0,10]])})))}}]),t}()).\u0275fac=function(e){return new(e||te)(u.Rc(g.a))},te.\u0275prov=u.Dc({token:te,factory:te.\u0275fac,providedIn:"root"}),te);function de(e,t){1&e&&(u.Nc(0,"div",6),u.Ic(1,"mat-spinner",7),u.Mc())}function fe(e,t){if(1&e&&(u.Nc(0,"div"),u.Ic(1,"app-dashboard-chart",8),u.Mc()),2&e){var n=u.Xc();u.wc(1),u.dd("props",n.bar)}}function ue(e,t){1&e&&(u.Nc(0,"div",6),u.Ic(1,"mat-spinner",7),u.Mc())}function le(e,t){if(1&e&&(u.Nc(0,"div"),u.Ic(1,"app-dashboard-chart",8),u.Mc()),2&e){var n=u.Xc();u.wc(1),u.dd("props",n.barAssign)}}function he(e,t){1&e&&(u.Nc(0,"div",6),u.Ic(1,"mat-spinner",7),u.Mc())}function pe(e,t){if(1&e&&(u.Nc(0,"div"),u.Ic(1,"app-dashboard-chart",8),u.Mc()),2&e){var n=u.Xc();u.wc(1),u.dd("props",n.barPartenar)}}function ge(e,t){1&e&&(u.Nc(0,"div",6),u.Ic(1,"mat-spinner",7),u.Mc())}function be(e,t){if(1&e&&(u.Nc(0,"div"),u.Ic(1,"app-dashboard-chart",8),u.Mc()),2&e){var n=u.Xc();u.wc(1),u.dd("props",n.barRegion)}}function ve(e,t){1&e&&(u.Nc(0,"div",6),u.Ic(1,"mat-spinner",7),u.Mc())}function ye(e,t){if(1&e&&(u.Nc(0,"div"),u.Ic(1,"app-dashboard-chart",8),u.Mc()),2&e){var n=u.Xc();u.wc(1),u.dd("props",n.doughnut)}}var me,xe=((me=function(){function e(t,a,r,c,i,o,s){n(this,e),this.authService=t,this.StatusService=a,this.RegionService=r,this.PartenarService=c,this.CategoryService=i,this.TransfereService=o,this.router=s,this.doughnut={type:"doughnut",data:{labels:this.labelc,datasets:[{data:this.counts,backgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"]}]},options:{title:{display:!0,text:Object(f.d)("dashboard.text_dashboard.category")}}},this.barPartenar={type:"bar",data:{labels:this.labelp,datasets:[{backgroundColor:["#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],borderColor:"#36A2EB",hoverBackgroundColor:["#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],hoverBorderColor:["#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],data:this.countp}]},options:{title:{display:!0,text:Object(f.d)("dashboard.text_dashboard.partenar")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}},this.barAssign={type:"bar",data:{labels:this.labelt,datasets:[{backgroundColor:["#ffa600","#ff6361","#ff7c43","#48bee7","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#FF6384","#36A2EB","#FFCE56","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],borderColor:"#36A2EB",hoverBackgroundColor:["#ffa600","#ff6361","#ff7c43","#48bee7","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#FF6384","#36A2EB","#FFCE56","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],hoverBorderColor:["#ffa600","#ff6361","#ff7c43","#48bee7","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#FF6384","#36A2EB","#FFCE56","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],data:this.countt}]},options:{title:{display:!0,text:Object(f.d)("dashboard.text_dashboard.assign")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}},this.barRegion={type:"bar",data:{labels:this.labelr,datasets:[{backgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3"],borderColor:"#36A2EB",hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3"],hoverBorderColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3"],data:this.countr}]},options:{title:{display:!0,text:Object(f.d)("dashboard.text_dashboard.region")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}},this.bar={type:"bar",data:{labels:this.labels,datasets:[{backgroundColor:["#5098cd","#ffd6cd","#0094a3","#2cd182","#003f5c"],borderColor:"#36A2EB",hoverBackgroundColor:["#5098cd","#ffd6cd","#0094a3","#2cd182","#003f5c"],hoverBorderColor:["#5098cd","#ffd6cd","#0094a3","#2cd182","#003f5c"],data:this.conts}]},options:{title:{display:!0,text:Object(f.d)("dashboard.text_dashboard.status")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}}}return r(e,[{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.CategoryService.Category();case 2:return e.next=4,this.StatusService.Status();case 4:return e.next=6,this.RegionService.Region();case 6:return e.next=8,this.PartenarService.Partenar();case 8:return e.next=10,this.TransfereService.TransfereAssistance();case 10:case"end":return e.stop()}}),e,this)})))}},{key:"loadings",get:function(){return this.StatusService.loadings}},{key:"labels",get:function(){return this.StatusService.labels}},{key:"conts",get:function(){return this.StatusService.counts}},{key:"labelt",get:function(){return this.TransfereService.labelt}},{key:"countt",get:function(){return this.TransfereService.countt}},{key:"loadingt",get:function(){return this.TransfereService.loadingt}},{key:"labelr",get:function(){return this.RegionService.labelr}},{key:"countr",get:function(){return this.RegionService.countr}},{key:"loadingr",get:function(){return this.RegionService.loadingr}},{key:"loadingp",get:function(){return this.PartenarService.loadingp}},{key:"labelp",get:function(){return this.PartenarService.labelp}},{key:"countp",get:function(){return this.PartenarService.countp}},{key:"counts",get:function(){return this.CategoryService.countc}},{key:"loadingc",get:function(){return this.CategoryService.loadingc}},{key:"labelc",get:function(){return this.CategoryService.labelc}}]),e}()).\u0275fac=function(e){return new(e||me)(u.Hc(p.a),u.Hc(ce),u.Hc(ie),u.Hc(oe),u.Hc(se),u.Hc(T),u.Hc(s.b))},me.\u0275cmp=u.Bc({type:me,selectors:[["app-assistance"]],decls:17,vars:10,consts:[[2,"margin-top","16px"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-4",2,"margin-bottom","1em"],["class","app-page-spinner",4,"ngIf"],[4,"ngIf"],[1,"col-xs-12","col-md-6",2,"margin-bottom","1em"],[1,"app-page-spinner"],["color","accent"],[3,"props"]],template:function(e,t){1&e&&(u.Nc(0,"div",0),u.Nc(1,"div",1),u.Nc(2,"div",2),u.xd(3,de,2,0,"div",3),u.xd(4,fe,2,1,"div",4),u.Mc(),u.Nc(5,"div",2),u.xd(6,ue,2,0,"div",3),u.xd(7,le,2,1,"div",4),u.Mc(),u.Nc(8,"div",2),u.xd(9,he,2,0,"div",3),u.xd(10,pe,2,1,"div",4),u.Mc(),u.Nc(11,"div",5),u.xd(12,ge,2,0,"div",3),u.xd(13,be,2,1,"div",4),u.Mc(),u.Nc(14,"div",5),u.xd(15,ve,2,0,"div",3),u.xd(16,ye,2,1,"div",4),u.Mc(),u.Mc(),u.Mc()),2&e&&(u.wc(3),u.dd("ngIf",t.loadings),u.wc(1),u.dd("ngIf",!t.loadings),u.wc(2),u.dd("ngIf",t.loadingt),u.wc(1),u.dd("ngIf",!t.loadingt),u.wc(2),u.dd("ngIf",t.loadingp),u.wc(1),u.dd("ngIf",!t.loadingp),u.wc(2),u.dd("ngIf",t.loadingr),u.wc(1),u.dd("ngIf",!t.loadingr),u.wc(2),u.dd("ngIf",t.loadingc),u.wc(1),u.dd("ngIf",!t.loadingc))},directives:[m.k,x.b,z],styles:[""]}),me);function ke(e,t){1&e&&u.Ic(0,"app-generale")}function we(e,t){1&e&&u.Ic(0,"app-testimonys")}function Se(e,t){1&e&&u.Ic(0,"app-assistance")}var Ce,Me,Fe,Ie=((Ce=function(){function e(t){n(this,e),this.router=t}return r(e,[{key:"i18n",value:function(e){return Object(f.d)(e)}},{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}}]),e}()).\u0275fac=function(e){return new(e||Ce)(u.Hc(s.b))},Ce.\u0275cmp=u.Bc({type:Ce,selectors:[["app-dashboard"]],decls:11,vars:3,consts:[[1,"page-wrapper"],[1,"content"],[1,"row"],[2,"align-items","center","justify-content","center"],[3,"label"],["matTabContent",""]],template:function(e,t){1&e&&(u.Nc(0,"div",0),u.Nc(1,"div",1),u.Nc(2,"div",2),u.Nc(3,"div",3),u.Nc(4,"mat-tab-group"),u.Nc(5,"mat-tab",4),u.xd(6,ke,1,0,"ng-template",5),u.Mc(),u.Nc(7,"mat-tab",4),u.xd(8,we,1,0,"ng-template",5),u.Mc(),u.Nc(9,"mat-tab",4),u.xd(10,Se,1,0,"ng-template",5),u.Mc(),u.Mc(),u.Mc(),u.Mc(),u.Mc(),u.Mc()),2&e&&(u.wc(5),u.dd("label",t.i18n("dashboard.general")),u.wc(2),u.dd("label",t.i18n("dashboard.testimonys")),u.wc(2),u.dd("label",t.i18n("dashboard.asssistance")))},directives:[l.c,l.a,l.b,j,re,xe],encapsulation:2}),Ce),Ne=c("P+IX"),Ae=[{path:"",component:c("uswQ").a,children:[{path:"",component:Ie,canActivate:[Ne.a]}]}],Re=((Me=function e(){n(this,e)}).\u0275mod=u.Fc({type:Me}),Me.\u0275inj=u.Ec({factory:function(e){return new(e||Me)},providers:[],imports:[[s.f.forChild(Ae)],s.f]}),Me),Be=c("Tx//"),Ee=((Fe=function e(){n(this,e)}).\u0275mod=u.Fc({type:Fe}),Fe.\u0275inj=u.Ec({factory:function(e){return new(e||Fe)},providers:[],imports:[[o.a,Be.a,Re]]}),Fe)}}])}();