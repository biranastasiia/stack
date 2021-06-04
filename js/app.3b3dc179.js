(function(t){function s(s){for(var r,o,l=s[0],c=s[1],n=s[2],v=0,f=[];v<l.length;v++)o=l[v],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(s);while(f.length)f.shift()();return i.push.apply(i,n||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],r=!0,l=1;l<e.length;l++){var c=e[l];0!==a[c]&&(r=!1)}r&&(i.splice(s--,1),t=o(o.s=e[0]))}return t}var r={},a={app:0},i=[];function o(s){if(r[s])return r[s].exports;var e=r[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var r in t)o.d(e,r,function(s){return t[s]}.bind(null,r));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/stack/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=s,l=l.slice();for(var n=0;n<l.length;n++)s(l[n]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("stack")],1)},i=[],o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"stack__wrapper"},[e("div",{staticClass:"container"},[e("div",{staticClass:"stack"},[e("h1",{staticClass:"stack__title"},[t._v("Russian roulette")]),e("div",{staticClass:"stack__total-score-title"},[t._v("Total score")]),e("div",{staticClass:"stack__total-score"},[e("div",{staticClass:"bot-score"},[t._v(t._s(t.botScore))]),e("div",[t._v(":")]),e("div",{staticClass:"user-score"},[t._v(t._s(t.userScore))])]),e("div",{staticClass:"stack__content"},[e("div",{staticClass:"stack__player"},[e("div",{staticClass:"stack__player-title"},[t._v("BOT")]),e("input",{attrs:{type:"radio",name:"player",id:"bot"},domProps:{checked:t.isBot}}),e("label",{attrs:{for:"bot"}})]),e("div",{staticClass:"stack__gun"},[e("div",{staticClass:"gun-shop"},[e("div",{ref:"1",staticClass:"chamber chamber-1"}),e("div",{ref:"2",staticClass:"chamber chamber-2"}),e("div",{ref:"3",staticClass:"chamber chamber-3"}),e("div",{ref:"4",staticClass:"chamber chamber-4"}),e("div",{ref:"5",staticClass:"chamber chamber-5"}),e("div",{ref:"6",staticClass:"chamber chamber-6"}),e("div",{staticClass:"ratchet"})])]),e("div",{staticClass:"stack__player"},[e("div",{staticClass:"stack__player-title"},[t._v("YOU")]),e("input",{attrs:{type:"radio",name:"player",id:"user"},domProps:{checked:t.isUser}}),e("label",{attrs:{for:"user"}})])]),e("div",{staticClass:"stack__buttons"},[e("div",{ref:"shoot",staticClass:"stack__button shoot",on:{click:t.shootABullet}},[t._v("Shoot a bullet!")]),e("div",{ref:"refill",staticClass:"stack__button refill",on:{click:t.refillAGun}},[t._v("Refill the gun shop")])])]),t.gameOver||t.botGameOver?e("div",{staticClass:"background"}):t._e(),t.gameOver||t.botGameOver?e("div",{staticClass:"score"},[t.gameOver&&!t.botGameOver?e("h2",{staticClass:"score__title"},[t._v("You lose!")]):t._e(),!t.gameOver&&t.botGameOver?e("h2",{staticClass:"score__title"},[t._v("You win!")]):t._e(),e("div",{staticClass:"score__content"},[e("div",{staticClass:"score__sub-title"},[t._v("Game Score")]),e("span",{staticClass:"score__bot"},[t._v(t._s(+t.botGameOver))]),e("span",[t._v(":")]),e("span",{staticClass:"score__player"},[t._v(t._s(+t.gameOver))])]),e("div",{staticClass:"score__button"},[e("div",{staticClass:"score__restart",on:{click:function(s){return t.refillAGun()}}},[t._v("Restart")])])]):t._e()])])},l=[],c=(e("07ac"),e("159b"),{data:function(){return{refill:[],gameOver:!1,botGameOver:!1,isUser:!0,isBot:!1,userScore:0,botScore:0}},mounted:function(){this.refillAGun()},methods:{refillAGun:function(){this.gameOver=!1,this.botGameOver=!1,this.isUser=!0,this.isBot=!1,this.refill=[],this.refill.push(1,2,3,4,5,6),this.refill.sort((function(){return Math.random()-.5}));var t=Object.values(this.$refs);t.forEach((function(t){t.classList.remove("shootenChamber")})),console.log(this.refill)},shootABullet:function(){var t=this.refill.pop();if(1==t)this.gameOver=!0,this.botScore+=1;else{var s=Object.values(this.$refs),e=s[this.refill.length-1];e.classList.add("shootenChamber"),this.$refs.shoot.classList.add("disabled"),this.$refs.refill.classList.add("disabled"),this.isUser=!1,this.isBot=!0,setTimeout(this.shootABotBullet,2e3)}},shootABotBullet:function(){var t=this.refill.pop();if(1==t)this.botGameOver=!0,this.userScore+=1,this.$refs.shoot.classList.remove("disabled"),this.$refs.refill.classList.remove("disabled");else{var s=Object.values(this.$refs),e=s[this.refill.length-1];e.classList.add("shootenChamber"),this.$refs.shoot.classList.remove("disabled"),this.$refs.refill.classList.remove("disabled"),this.isUser=!0,this.isBot=!1}}}}),n=c,u=e("2877"),v=Object(u["a"])(n,o,l,!1,null,null,null),f=v.exports,h={components:{stack:f}},d=h,_=Object(u["a"])(d,a,i,!1,null,null,null),p=_.exports;e("a1a3");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(p)}}).$mount("#app")},a1a3:function(t,s,e){}});
//# sourceMappingURL=app.3b3dc179.js.map