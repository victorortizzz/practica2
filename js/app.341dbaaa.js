(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"42001fbf"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/practica2/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[n("b-container",[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-navbar-brand",{attrs:{href:"#"}},[t._v("DailyFit")]),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")]),n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")]),n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Yourdailyroutine"}},[t._v("Yor daily routine")])],1)],1)],1)],1),n("b-container",[n("router-view")],1)],1)},o=[],i=n("2877"),s={},u=Object(i["a"])(s,a,o,!1,null,null,null),c=u.exports,l=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("b-row",{staticClass:"my-5"},[n("b-col",[n("h1",[t._v("Here you have some posts you may like")])])],1),n("b-container",[n("b-row",{attrs:{"align-v":"center"}},t._l(t.posts,(function(t){return n("posts",{key:t.id,attrs:{name:t.name,srcimg:t.srcimg,texto:t.texto}})})),1)],1)],1)},f=[],d=(n("96cf"),n("1da1")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-col",[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.name,"img-src":t.srcimg,"img-alt":"an-image-of-a-post","img-top":"",tag:"article",footer:"A post from DailyFit"}},[n("b-card-text",[t._v(" "+t._s(t.texto)+" ")])],1)],1)],1)},b=[],v={props:["name","texto","srcimg"]},h=v,g=Object(i["a"])(h,m,b,!1,null,"39fa8d41",null),y=g.exports,w={name:"Home",components:{posts:y},mounted:function(){this.fetchData()},data:function(){return{posts:[]}},methods:{fetchData:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("Posts.json");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.posts=r;case 7:case"end":return e.stop()}}),e)})))()}}},_=w,x=Object(i["a"])(_,p,f,!1,null,null,null),j=x.exports;r["a"].use(l["a"]);var O=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/Yourdailyroutine",name:"Yourdailyroutine",component:function(){return n.e("about").then(n.bind(null,"81ab"))}}],k=new l["a"]({mode:"history",base:"/practica2/",routes:O}),P=k,C=n("2f62");r["a"].use(C["a"]);var S=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),E=n("aee4"),T=n("5a71");n("b6ad"),n("6210");r["a"].use(E["a"]),r["a"].use(T["a"]),r["a"].config.productionTip=!1,new r["a"]({router:P,store:S,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.341dbaaa.js.map