(window.webpackJsonpshoppingcart=window.webpackJsonpshoppingcart||[]).push([[0],{13:function(n,e,t){},14:function(n,e,t){},15:function(n,e,t){"use strict";t.r(e);var o=t(0),i=t.n(o),a=t(2),r=t.n(a),c=(t(13),t(3)),s=t(4),l=t(6),u=t(5),d=t(7),f=(t(14),function(n){function e(){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this))).state={product:{}},n}return Object(d.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){var n=this;fetch("/data/data.json").then((function(n){return n.json()})).then((function(e){console.log(e),n.setState({product:e.product_list[0]})})).catch((function(n){console.log(n)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",null,"Sample",i.a.createElement("img",{src:this.state.product.Image_url}))))}}]),e}(o.Component)),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}r.a.render(i.a.createElement(f,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/shoppingcart",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/shoppingcart","/service-worker.js");h?(!function(n,e){fetch(n).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):p(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(e,n)}))}}()},8:function(n,e,t){n.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.716b1799.chunk.js.map