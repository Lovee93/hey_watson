(this.webpackJsonphey_watson=this.webpackJsonphey_watson||[]).push([[0],{40:function(e,n,t){e.exports=t(95)},45:function(e,n,t){},46:function(e,n,t){},53:function(e,n){},55:function(e,n){},64:function(e,n){},66:function(e,n){},95:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),a=t(34),r=t.n(a),c=(t(45),t(35)),s=t(36),l=t(38),u=t(39),f=(t(46),t(37)),h=t.n(f),d=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).state={text:""},e}return Object(s.a)(t,[{key:"onListenClick",value:function(){var e=this;fetch("https://nameless-fortress-57383.herokuapp.com/api/speech-to-text/token").then((function(e){return e.json()})).then((function(n){var t=h()(Object.assign(n,{objectMode:!0,format:!1}));t.on("data",(function(n){e.setState({text:n.results[0].alternatives[0].transcript})})),t.on("error",(function(e){console.log(e)})),document.querySelector("#stop").onclick=t.stop.bind(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Wanna Speak?"),i.a.createElement("button",{onClick:this.onListenClick.bind(this),className:"goForItButton"},"Go for it!"),i.a.createElement("h3",null,this.state.text)))}}]),t}(o.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hey_watson",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/hey_watson","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(n,e)}))}}()}},[[40,1,2]]]);
//# sourceMappingURL=main.4048109a.chunk.js.map