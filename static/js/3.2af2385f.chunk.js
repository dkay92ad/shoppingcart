(window.webpackJsonpshoppingcart=window.webpackJsonpshoppingcart||[]).push([[3],{19:function(e,t,a){},20:function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,c=void 0;try{for(var o,d=e[Symbol.iterator]();!(r=(o=d.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(u){n=!0,c=u}finally{try{r||null==d.return||d.return()}finally{if(n)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.r(t);var n=a(0),c=a.n(n);a(19),t.default=function(e){var t=r(Object(n.useState)(0),2),a=t[0],o=t[1],d=r(Object(n.useState)(!1),2),u=d[0],i=d[1],l=function(){var t=parseInt(window.pageYOffset/160)+3;e.product.Product_id<=t&&i(!0)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l,!0),console.log("counting..."),e.product.Product_id<=3&&i(!0),function(){window.removeEventListener("scroll",l,!0)}}),[e.product.Product_id]),c.a.createElement("div",{className:"product-details"},c.a.createElement("div",{className:"product-details-left"},c.a.createElement("div",{className:"product-image"},u&&c.a.createElement("img",{src:e.product.Image_url,alt:"product"})),c.a.createElement("div",{className:"product-offer"},c.a.createElement("span",null,e.product.Offer_text))),c.a.createElement("div",{className:"product-details-right"},c.a.createElement("div",{className:"brand-name"},e.product.Brand_name),c.a.createElement("div",{className:"product-name"},e.product.Product_name),c.a.createElement("div",{className:"quantity"},e.product.Quantity),c.a.createElement("div",{className:"mrp"},"MRP ",e.product.MRP),c.a.createElement("div",{className:"price"},"Rs ",e.product.Price),c.a.createElement("div",{className:"add-to-cart"},c.a.createElement("button",{className:"add-cart",onClick:function(){o((function(e){return e+1})),e.productAddHandler(e.product.Price)}},"ADD CART"),c.a.createElement("div",{className:"inc-dec"},c.a.createElement("button",{className:"plus",onClick:function(){o((function(e){return e+1})),e.productAddHandler(e.product.Price)}},"+"),c.a.createElement("span",{className:"added-quantity"},a),c.a.createElement("button",{className:"minus",disabled:0===a,onClick:function(){o((function(e){return 0===e?0:e-1})),e.productRemoveHandler(e.product.Price)}},"-")))))}}}]);
//# sourceMappingURL=3.2af2385f.chunk.js.map