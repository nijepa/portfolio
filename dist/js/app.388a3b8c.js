(function(t){function e(e){for(var a,r,i=e[0],s=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},c={app:0},o=[];function i(t){return s.p+"js/"+({aboutme:"aboutme",contact:"contact",education:"education",projects:"projects"}[t]||t)+"."+{aboutme:"a14b9f39",contact:"22183238",education:"f263e206",projects:"6a50dce4"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={aboutme:1,contact:1,education:1,projects:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({aboutme:"aboutme",contact:"contact",education:"education",projects:"projects"}[t]||t)+"."+{aboutme:"403ca2bb",contact:"c5728ecf",education:"eee09c65",projects:"a1867e5f"}[t]+".css",c=s.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===c))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],p.parentNode.removeChild(p),n(o)},p.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/portfolio/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1aa9":function(t,e,n){var a={"./1976_Tommy_McCook_Prophets_Death_Trap.mp3":"f1b7"};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=c,t.exports=r,r.id="1aa9"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("router-view")],1)],1)},c=[],o={},i=o,s=(n("5c0b"),n("2877")),l=Object(s["a"])(i,r,c,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homez"},[n("div",{on:{wheel:t.handleStart}},[n("Start",{on:{"start-app":t.handleStart}})],1)])},h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t._m(0),n("section",{attrs:{id:"home"}},[n("div",{staticClass:"slide-wrapper",attrs:{id:"front"}},[t._m(1),n("div",{staticClass:"cover-wrapper text-center",attrs:{id:"home-content"},on:{click:t.seek}},[n("div",{staticClass:"cover-wrapper__inner"},[n("div",{staticClass:"cover-wrapper__container"},[t._m(2),n("router-link",{attrs:{id:"down",tag:"a",to:"/aboutme"}},[t._v("More")])],1),n("div",{staticClass:"music__btn",on:{click:function(e){e.preventDefault(),t.isPlaying?t.pause(t.track):t.play(t.track)}}},[t.isPlaying?n("svg",{class:t.isPlaying?"play__m Capa_1":"Capa_1",staticStyle:{"enable-background":"new 0 0 52.821 52.821"},attrs:{id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 52.821 52.821","xml:space":"preserve"},on:{click:function(e){e.preventDefault(),t.playing=!t.playing}}},[n("g",[n("path",{attrs:{d:"M51.82,19.074c-1.488-5.344-4.965-10.164-9.608-13.189C37.292,2.68,30.86,1.717,25.106,1.588\n                  C17.071,1.404,6.893,4.49,2.94,12.152c-0.329,0.637,0.64,1.184,0.969,0.547c2.801-5.43,9.491-8.566,15.263-9.594\n                  c6.209-1.104,12.998-0.236,18.873,1.955c6.134,2.287,10.393,7.537,12.486,13.611c2.33,6.758,1.04,13.488-2.679,19.424\n                  c-7.678,12.252-26.522,16.229-37.982,6.943c-5.25-4.254-8.674-9.945-8.74-16.752c-0.039-4.012,0.743-8.492,2.746-12.012\n                  c0.621-1.09,1.455-2.024,2.396-2.867c0.014-0.219,0.03-0.436,0.045-0.652c-0.109-0.139-0.202-0.289-0.25-0.475\n                  c-0.005-0.021-0.004-0.037-0.009-0.059c-0.572,0.481-1.126,0.986-1.65,1.529c-2.291,2.371-3.194,5.66-3.832,8.801\n                  c-1.268,6.24-0.515,12.074,3.063,17.346c3.063,4.514,7.787,8.715,13.131,10.182c6.42,1.762,13.123,1.613,19.198-1.108\n                  c2.749-1.23,5.729-2.438,8.039-4.424c2.833-2.438,4.961-5.881,6.679-9.156C53.305,30.399,53.303,24.397,51.82,19.074z"}}),n("path",{attrs:{d:"M17.736,31.85c0.103,1.15,0.121,3.08,1.325,3.598c0.051,0.066,0.105,0.127,0.167,0.174\n                  c1.198,0.902,2.868-0.504,3.876-1.109c2.797-1.674,12.586-8.037,14.039-10.277c0.151-0.234,0.098-0.455-0.046-0.609\n                  c-0.01-0.16-0.081-0.318-0.258-0.428c-1.622-0.992-8.87-4.297-10.89-5.045c-1.044-0.389-5.593-2.34-6.212-2.355\n                  c-2.373-1.525-2.021,5.525-2.033,6.152C17.639,25.235,17.444,28.574,17.736,31.85z M20.96,25.033\n                  c-0.088,0.039-0.162,0.102-0.217,0.182c-0.004-0.299-0.009-0.596-0.011-0.891c0.096,0.055,0.197,0.104,0.298,0.154\n                  C21.009,24.66,20.984,24.846,20.96,25.033z M21.167,29.695c0.063-0.248,0.151-0.498,0.257-0.748\n                  c1.583-0.371,3.088-1.146,4.634-1.645c0.754-0.207,1.509-0.414,2.259-0.633C25.981,27.764,23.595,28.74,21.167,29.695z\n                  M24.587,25.762c-0.18,0.082-0.362,0.162-0.539,0.25c-0.158-0.098-0.319-0.174-0.483-0.244\n                  C23.905,25.758,24.246,25.754,24.587,25.762z M24.108,24.285c0.023-0.014,0.048-0.025,0.074-0.037\n                  c0.642,0.137,1.284,0.231,1.944,0.24c0.459,0.055,0.918,0.113,1.378,0.166c-0.044,0.016-0.088,0.029-0.133,0.045\n                  C26.401,24.598,25.23,24.488,24.108,24.285z M28.874,23.106c-0.761-0.27-1.523-0.549-2.291-0.854\n                  c-1.265-0.502-2.525-0.859-3.846-1.17c-0.413-0.096-0.753-0.26-1.052-0.465C24.175,21.008,26.571,21.971,28.874,23.106z\n                  M22.896,22.258c-0.75-0.072-1.509-0.107-2.278-0.105c-0.026-0.297-0.056-0.592-0.085-0.889\n                  C21.281,21.785,22.06,22.047,22.896,22.258z"}})])]):n("svg",{staticClass:"Capa_1",staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},on:{click:function(e){e.preventDefault(),t.playing=!t.playing}}},[n("g",[n("path",{attrs:{d:"M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,482.743\n                      C130.974,482.743,29.257,381.026,29.257,256S130.974,29.257,256,29.257S482.743,130.974,482.743,256S381.026,482.743,256,482.743z\n                      "}}),n("path",{attrs:{d:"M266.243,416.5c-8.078,0-14.629,6.557-14.629,14.636c0,8.079,6.551,14.629,14.629,14.629s14.629-6.551,14.629-14.629\n                      v-0.013C280.872,423.044,274.321,416.5,266.243,416.5z"}}),n("path",{attrs:{d:"M432.599,248.117c-8.078,0-14.629,6.551-14.629,14.629c0,67.634-43.33,126.623-107.82,146.786\n                      c-7.711,2.409-12.007,10.616-9.596,18.327c1.956,6.257,7.728,10.268,13.957,10.268c1.445,0,2.917-0.216,4.37-0.671\n                      c36.419-11.385,69.113-34.578,92.058-65.3c23.741-31.792,36.289-69.625,36.289-109.409\n                      C447.228,254.667,440.677,248.117,432.599,248.117z"}}),n("path",{attrs:{d:"M225.344,153.6h-57.116c-8.078,0-14.629,6.551-14.629,14.629v175.543c0,8.078,6.551,14.629,14.629,14.629h57.116\n                      c8.078,0,14.629-6.551,14.629-14.629V168.229C239.973,160.151,233.422,153.6,225.344,153.6z M210.716,329.143h-27.859V182.857\n                      h27.859V329.143z"}}),n("path",{attrs:{d:"M340.878,153.6h-57.116c-8.078,0-14.629,6.551-14.629,14.629v175.543c0,8.078,6.551,14.629,14.629,14.629h57.116\n                      c8.079,0,14.629-6.551,14.629-14.629V168.229C355.506,160.151,348.956,153.6,340.878,153.6z M326.249,329.143h-27.859V182.857\n                      h27.859V329.143z"}})])]),n("div",{attrs:{id:"seek"}},[n("div",{staticClass:"player-progress",attrs:{title:"Seek"}},[n("div",{staticClass:"player-seeker",style:{width:this.percentComplete+"%"}})])])])])])])])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"big-circles",attrs:{id:"bc"}},[n("div",{staticClass:"big-circle"}),n("div",{staticClass:"big-circle"}),n("div",{staticClass:"big-circle"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smallcircles"},[n("div",{staticClass:"small-circle"}),n("div",{staticClass:"small-circle"}),n("div",{staticClass:"small-circle"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cover__caption"},[n("h1",{attrs:{id:"myname"}},[t._v("Nikola Pavićević")]),n("h3",[t._v("Full Stack Web Developer")])])}],v={name:"Start",props:{method:{type:Function}},data:function(){return{isPlaying:!1,track:null,currentSeconds:0,durationSeconds:0,loaded:!0,audio:void 0,playing:!1}},mounted:function(){this.track=new Audio(this.getAudioUrl("1976_Tommy_McCook_Prophets_Death_Trap")),this.audio=this.getAudioUrl("1976_Tommy_McCook_Prophets_Death_Trap"),this.track.addEventListener("timeupdate",this.update)},computed:{percentComplete:function(){return parseInt(parseInt(this.currentSeconds)/parseInt(this.durationSeconds)*100)}},watch:{playing:function(t){if(t)return this.track.play();this.track.pause()}},methods:{getAudioUrl:function(t){return n("1aa9")("./"+t+".mp3")},startApp:function(){this.$emit("start-app",!0)},play:function(t){console.log(this.track.duration),this.isPlaying=!0,this.playing=!0,t.play(),this.durationSeconds=parseInt(this.track.duration)},pause:function(t){this.isPlaying=!1,this.playing=!1,100===this.percentComplete?(this.durationSeconds=0,this.play()):t.pause()},seek:function(t){if(this.loaded){var e=t.target.getBoundingClientRect(),n=(t.clientX-e.left)/e.width;this.track.currentTime=parseInt(this.track.duration*n)}},update:function(t){console.log(t),this.currentSeconds=parseInt(this.track.currentTime),100===this.percentComplete&&(this.currentSeconds=0,this.playing=!1,this.isPlaying=!1)}}},_=v,g=(n("a02f"),Object(s["a"])(_,m,f,!1,null,"67b57fde",null)),b=g.exports,y={name:"Home",components:{Start:b},methods:{handleStart:function(){this.$router.push("/aboutme")}}},C=y,k=Object(s["a"])(C,p,h,!1,null,null,null),M=k.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homez"},[n("Navigation",{on:{"nav-click":t.handleNav}}),n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("router-view")],1),n("Footer")],1)},S=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fall"}},[n("nav",{directives:[{name:"show",rawName:"v-show",value:t.apeared,expression:"apeared"}],staticClass:"menu",on:{load:t.onApeared}},[n("button",{attrs:{"aria-expanded":"false","aria-controls":"menu-list"},on:{click:t.toggleNav}},[n("div",{staticClass:"textme__content"},[n("span",{staticClass:"open"},[t._v("☰")]),n("span",{staticClass:"close"},[t._v("×")]),t._v(" Menu ")])]),n("ul",{attrs:{id:"menu-list"}},t._l(t.menuItems,(function(e){return n("li",{key:e.id},[n("a",{class:e.id===t.activeLink?"active__link":"for__hover",attrs:{id:e.id},on:{click:t.navClick}},[t._v(t._s(e.title)+" ")])])})),0)])])},z=[],j={name:"Navigation",props:{method:{type:Function}},data:function(){return{activeLink:"aboutme",menuItems:[{id:"",title:"N"},{id:"aboutme",title:"About"},{id:"projects",title:"Projects"},{id:"education",title:"Education"},{id:"contact",title:"Contact"}],apeared:!1}},methods:{navClick:function(t){var e=document.querySelector("button[aria-expanded]");e.setAttribute("aria-expanded",!1),this.activeLink=t.target.id,this.$router.push("/"+t.target.id),this.scrollTop()},toggleNav:function(t){var e=t.target,n=document.querySelector("button[aria-expanded]"),a="true"===e.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!a)},scrollTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},onApeared:function(){this.apeared=!0}},mounted:function(){this.onApeared()}},A=j,E=(n("9028"),Object(s["a"])(A,x,z,!1,null,null,null)),T=E.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"rise"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.apeared,expression:"apeared"}],staticClass:"foo"},[n("footer",[n("a",{staticClass:"linked__in",attrs:{href:"https://rs.linkedin.com/public-profile/in/nikola-pavicevic-43924221?trk=people-guest_people_search-card&challengeId=AQFwM84RTHl52QAAAXT864ARXwq3qjSqielMX6RiVGn0FBiZ-U38eqbpE1xw-lfq11Oc4sBXWdS7gH0qjEuyCfXHvH9_j8rDLA&submissionId=9f75dd66-4058-3b16-8dfc-98a22f23c735",target:"blank"}},[n("svg",{attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}})])]),n("a",{attrs:{href:"https://github.com/nijepa",target:"blank"}},[n("svg",{attrs:{viewBox:"0 0 128 128"}},[n("path",{attrs:{d:"M64 1.512c-23.493 0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37 2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837 2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586 4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38 3.536.383-2.75 1.485-4.628 2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44 4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7 4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658 1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418 11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953 19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048 10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z","clip-rule":"evenodd"}}),n("path",{attrs:{d:"M37.57 62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zm-.524-.388M39.293 64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm-.406-.437M40.97 66.968c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005 1.024zm0 0M43.268 69.336c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185 1.102.163.37.342.482.83.233 1.086zm0 0M46.44 70.71c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493 1.067-.342.48.144.795.53.696.87zm0 0M49.92 70.965c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618 0-.354.4-.642.908-.65.506-.01.92.272.92.62zm0 0M53.16 70.414c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118 1.017.466zm0 0"}}),n("path",{attrs:{fill:"#100E0F",d:"M24.855 108.302h-10.7a.5.5 0 0 0-.5.5v5.232a.5.5 0 0 0 .5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508 0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636 6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 0 0-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472 3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0 9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 0 0-.5-.5zM79.506 94.81H73.48a.5.5 0 0 0-.498.503l.002 11.644h-9.392V95.313a.5.5 0 0 0-.497-.503H57.07a.5.5 0 0 0-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 0 0 .497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 0 0 .497-.504v-31.53c0-.278-.22-.502-.497-.502zM32.34 95.527c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884 3.925 2.146 0 3.885-1.758 3.885-3.925 0-2.17-1.74-3.923-3.885-3.923zM35.296 105.135H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-6.346-14.553a.5.5 0 0 0-.498-.502zM102.902 105.182h-5.98a.5.5 0 0 0-.496.504v15.46s-1.52 1.11-3.675 1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 0 0-.497-.504h-6.068a.502.502 0 0 0-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 0 0 .5-.504l-.003-21.166a.504.504 0 0 0-.5-.502zM119.244 104.474c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 0 0-.497-.503H107a.5.5 0 0 0-.5.503v31.53a.5.5 0 0 0 .5.503h4.192c.19 0 .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837 6.398zM53.195 122.12c-.263 0-.937.107-1.63.107-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 0 0 .5-.504v-4.856a.5.5 0 0 0-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 0 0-.36.48v3.877a.5.5 0 0 0 .497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61 1.497 0 3.29-.48 3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 0 0-.5-.502z"}})])]),n("a",{staticClass:"mail__me",attrs:{href:"mailto:nijepa@hotmail.com"}},[n("svg",{attrs:{viewBox:"0 0 400 400"}},[n("polygon",{attrs:{id:"XMLID_869_",points:"0,127.5 0,274.219 104.8,206.1 \t"}}),n("polygon",{attrs:{id:"XMLID_870_",points:"400,274.219 400,127.5 295.2,206.1 \t"}}),n("polygon",{attrs:{id:"XMLID_871_",points:"200,277.5 130.357,225.268 0,310 0,340 400,340 400,310 269.643,225.268 \t"}}),n("polygon",{attrs:{id:"XMLID_872_",points:"0,90 200,240 400,90 400,60 0,60 \t"}})])])]),n("div",{staticClass:"author"},[n("p",{attrs:{"v-model":t.atCopy,id:"date"},domProps:{innerHTML:t._s(t.atCopy)}})])])])},O=[],N={name:"Footer",data:function(){return{atCopy:"",apeared:!1}},methods:{onApeared:function(){this.apeared=!0}},mounted:function(){var t=new Date,e=t.getFullYear();this.atCopy="&copy; "+e+" Nikola",this.onApeared()}},D=N,L=(n("760c"),Object(s["a"])(D,P,O,!1,null,null,null)),I=L.exports,$={name:"About",components:{Navigation:T,Footer:I},methods:{handleNav:function(t){this.$router("/"+t.target.id)}}},F=$,H=Object(s["a"])(F,w,S,!1,null,null,null),B=H.exports;a["a"].use(d["a"]);var q=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:B,children:[{path:"/aboutme",name:"AboutMe",component:function(){return n.e("aboutme").then(n.bind(null,"59e7"))}},{path:"/projects",name:"Projects",component:function(){return n.e("projects").then(n.bind(null,"acca"))}},{path:"/education",name:"Education",component:function(){return n.e("education").then(n.bind(null,"7a0c"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}}]}],X=new d["a"]({mode:"history",base:"/portfolio/",routes:q}),V=X,U=n("2f62");a["a"].use(U["a"]);var R=new U["a"].Store({state:{isStarted:!1},mutations:{setStarted:function(t,e){t.isStarted=e}},actions:{setIsStarted:function(t,e){var n=t.commit;n("setStarted",e)}},getters:{isStarted:function(t){return t.isStarted}}});a["a"].config.productionTip=!1,new a["a"]({router:V,store:R,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"760c":function(t,e,n){"use strict";n("c3f5")},9028:function(t,e,n){"use strict";n("db78")},"96e0":function(t,e,n){},"9c0c":function(t,e,n){},a02f:function(t,e,n){"use strict";n("96e0")},c3f5:function(t,e,n){},db78:function(t,e,n){},f1b7:function(t,e,n){t.exports=n.p+"media/1976_Tommy_McCook_Prophets_Death_Trap.f2303fdf.mp3"}});
//# sourceMappingURL=app.388a3b8c.js.map