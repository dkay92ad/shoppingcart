(window.webpackJsonpshoppingcart=window.webpackJsonpshoppingcart||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(13),n(1)),l=n(2),s=n(4),u=n(3),d=n(5),p=(n(14),n(15),function(e){return o.a.createElement("div",{className:"footer-details"},o.a.createElement("div",{className:"footer-left"},o.a.createElement("div",{className:"left quantity"},"Qty ",e.cartQty),o.a.createElement("div",{className:"left total"},"Total ",e.cartTotalPrice)),o.a.createElement("button",{className:"footer-right",disabled:!e.cartTotalPrice,onClick:function(){e.checkoutHandler()}},"CHECKOUT"))}),f=(n(16),function(e){return o.a.createElement("div",{className:"modal-popup"},o.a.createElement("div",{title:"Close",className:"close-modal-popup",onClick:function(){e.closeModalHandler()}},"X"),o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"total-price"},"Total price: \u20b9 ",e.cartTotalPrice),o.a.createElement("div",{className:"trans-success"},"Transaction successful!")))}),h=(n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log("production"),console.log(t)}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("div",{className:"error-page"},o.a.createElement("h3",null,"We encountered a problem while loading the Shopping App."),o.a.createElement("h5",null,"We sincerely regret the inconvenience caused.")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log(e),{hasError:!0}}}]),t}(a.Component)),m=o.a.lazy((function(){return n.e(3).then(n.bind(null,20))})),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).checkoutHandler=function(){e.setState({showModalPopup:!0})},e.productAddHandler=function(t){e.setState((function(e){return{cartQty:e.cartQty+1,cartTotalPrice:parseInt(e.cartTotalPrice)+parseInt(t)}}))},e.productRemoveHandler=function(t){e.setState((function(e){return{cartQty:e.cartQty-1,cartTotalPrice:e.cartTotalPrice-t}}))},e.closeModalHandler=function(){e.setState({showModalPopup:!1})},e.state={products:[],cartQty:0,cartTotalPrice:0,showModalPopup:!1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("data/data.json").then((function(e){return e.json()})).then((function(t){e.setState({products:t.product_list})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){console.log("conponentDidUpdate...")}},{key:"render",value:function(){var e=this,t=this.state.products.map((function(t){return o.a.createElement(a.Suspense,{key:t.Product_id,fallback:o.a.createElement("div",{className:"fallback"})},o.a.createElement(m,{key:t.Product_id,product:t,quantity:e.state.cartQty,productAddHandler:e.productAddHandler,productRemoveHandler:e.productRemoveHandler}))}));return o.a.createElement("div",{className:"App"},o.a.createElement(h,null,t,this.state.showModalPopup&&o.a.createElement(f,{closeModalHandler:this.closeModalHandler,cartTotalPrice:this.state.cartTotalPrice}),o.a.createElement("footer",null,o.a.createElement(p,{cartQty:this.state.cartQty,cartTotalPrice:this.state.cartTotalPrice,checkoutHandler:this.checkoutHandler}))))}}]),t}(a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}try{c.a.render(o.a.createElement(v,null),document.getElementById("root"))}catch(y){console.error("Error intercepted!",y)}!function(e){if("serviceWorker"in navigator){if(new URL("/shoppingcart",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/shoppingcart","/service-worker.js");g?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}({onUpdate:function(e){var t=e.waiting;t&&t.postMessage({type:"SKIP_WAITING"});var n=document.createElement("a");n.classList.add("update-notification"),n.setAttribute("href","#"),n.innerHTML="Update is available. Click here to install.",n.addEventListener("click",(function(e){e.preventDefault(),window.location.reload()})),document.querySelector("body").appendChild(n)}})}],[[8,1,2]]]);
//# sourceMappingURL=main.82768455.chunk.js.map