(this["webpackJsonplampa-test"]=this["webpackJsonplampa-test"]||[]).push([[0],{207:function(t,e,c){},249:function(t,e,c){"use strict";c.r(e);var n=c(2),a=c(1),r=c(57),i=c.n(r),s=c(12),o=c(10),l=c(109),d=c(110),u=c(107),m=c(15),b=c(250),j={products:[],cart:JSON.parse(localStorage.getItem("cart"))||[]},p={store:Object(b.a)({UPDATE_PRODUCTS:function(t,e){var c=e.payload;return Object(m.a)(Object(m.a)({},t),{},{products:c})},UPDATE_CART:function(t,e){var c=e.payload;return Object(m.a)(Object(m.a)({},t),{},{cart:c})}},j),form:u.a},f=Object(o.combineReducers)(p),O=Object(o.createStore)(f,Object(d.composeWithDevTools)(Object(o.applyMiddleware)(l.a))),h=(c(206),c(207),c(36)),x=c(11),v=function(){var t=Object(s.d)((function(t){return t.store})).cart;return Object(n.jsxs)("div",{className:"d-flex cart",children:[Object(n.jsx)("div",{className:"d-flex align-items-center mr-3",children:t.length>0&&Object(n.jsx)("p",{className:"d-flex align-items-center mb-0",children:"Items ".concat(t.length,", subtotal $").concat(function(){if(t.length>0)return t.map((function(t){return Number(t.price)*t.quantity})).reduce((function(t,e){return t+e}))}())})}),Object(n.jsx)("div",{children:Object(n.jsx)(h.b,{to:"/cart/",children:Object(n.jsx)("button",{className:"btn btn-light text-uppercase",children:"Cart"})})})]})},N=function(){return Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("div",{className:"container d-flex justify-content-between",children:[Object(n.jsx)("h4",{className:"d-flex align-items-center m-0",children:Object(n.jsx)(h.b,{to:"/",children:"Lampa test"})}),Object(n.jsx)(v,{})]})})},g=c(82);c(209);g.a.initializeApp({apiKey:"AIzaSyC39ynb4f8SXzUMLniQmWo7TCZXCQUaOgo",authDomain:"lampa-test-ivanyuk.firebaseapp.com",databaseURL:"https://lampa-test-ivanyuk-default-rtdb.firebaseio.com",projectId:"lampa-test-ivanyuk",storageBucket:"lampa-test-ivanyuk.appspot.com",messagingSenderId:"258682313552",appId:"1:258682313552:web:9c52b733087aa245f9aa55",measurementId:"G-J1E66XWPRK"});var y=g.a.database(),w="https://firebasestorage.googleapis.com/v0/b/lampa-test-ivanyuk.appspot.com/o/",_="65a20e7f-e979-44a1-8f44-e4580a56bfee",k=function(t){var e=t.product,c=t.addToCart;return Object(n.jsxs)("div",{className:"product-item ".concat(e.id," mb-4"),children:[Object(n.jsx)("img",{className:"product-item__image",src:"".concat(w).concat(e.image,"?alt=media&token=").concat(_),alt:""}),Object(n.jsx)("h5",{className:"product-item__title mt-3 font-weight-bold",children:e.title}),Object(n.jsx)("p",{className:"product-item__description",children:e.description}),Object(n.jsxs)("p",{className:"product-item__price font-weight-bold",children:["Price: ",e.price," $"]}),Object(n.jsx)("button",{className:"btn btn-dark col-12",onClick:c(e),children:"Add to cart"})]})},q=c(251),S="UPDATE_PRODUCTS",T=(Object(q.a)(S,(function(t){return t})),Object(q.a)("UPDATE_CART",(function(t){return localStorage.setItem("cart",JSON.stringify(t)),t}))),C=function(){var t=Object(s.d)((function(t){return t.store})),e=Object(s.c)(),c=t.cart,a=function(t){return function(){var n,a=c.findIndex((function(e){return e.id===t.id}));n=t.id,-1!==c.findIndex((function(t){return t.id===n}))?c[a].quantity=c[a].quantity+1:c.push(Object(m.a)(Object(m.a)({},t),{},{quantity:1})),e(T(c))}};return Object(n.jsx)(n.Fragment,{children:t.products.map((function(t){return Object(n.jsx)(k,{product:t,addToCart:a},t.id)}))})};function I(){return Object(n.jsx)("div",{className:"container d-flex justify-content-between flex-wrap mt-4",children:Object(n.jsx)(C,{})})}var P=function(t){var e=t.product,c=t.decrementQuantity,a=t.incrementQuantity;return Object(n.jsxs)("div",{className:"d-flex col-12 product-item ".concat(e.id," mb-4"),style:{width:"100%"},children:[Object(n.jsx)("div",{className:"mr-3",children:Object(n.jsx)("img",{className:"product-item__image",src:"".concat(w).concat(e.image,"?alt=media&token=").concat(_),alt:""})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h5",{className:"product-item__title font-weight-bold",children:e.title}),Object(n.jsx)("p",{className:"product-item__description mb-2",children:e.description}),Object(n.jsxs)("p",{className:"product-item__price font-weight-bold m-0",children:["Price: ",e.price," $"]})]}),Object(n.jsxs)("div",{className:"d-flex align-items-center ml-3",children:[Object(n.jsx)("button",{className:"btn btn-dark font-weight-bold",onClick:c(e.id),children:"-"}),Object(n.jsx)("p",{className:"m-0 font-weight-bold pl-3 pr-3",children:e.quantity}),Object(n.jsx)("button",{className:"btn btn-dark font-weight-bold",onClick:a(e.id),children:"+"})]})]})},A=function(){var t=Object(s.d)((function(t){return t.store})),e=Object(s.c)(),c=t.cart,a=function(t){return c.findIndex((function(e){return e.id===t}))},r=function(t){return function(){var n=a(t);c[n].quantity>1?c[n].quantity=c[n].quantity-1:c.splice(n,1),e(T(c))}},i=function(t){return function(){var n=a(t);c[n].quantity=c[n].quantity+1,e(T(c))}};return Object(n.jsx)(n.Fragment,{children:c.map((function(t){return Object(n.jsx)(P,{product:t,decrementQuantity:r,incrementQuantity:i},t.id)}))})},D=c(78),U=c(105),E=c(106),R=function(t){if(!t)return"Is required"},J=function(t){var e=t.input,c=t.label,a=t.type,r=t.meta,i=r.touched,s=r.error,o=r.warning;return Object(n.jsxs)("div",{className:"form-group mb-2",children:[Object(n.jsxs)("label",{className:"mb-1 font-weight-bold",htmlFor:c,children:[c," *"]}),Object(n.jsx)("input",Object(m.a)(Object(m.a)({},e),{},{id:c,placeholder:c,type:a,className:"w-100"})),i&&(s&&Object(n.jsx)("p",{className:"invalid-field",children:s})||o&&Object(n.jsx)("p",{className:"invalid-field",children:o}))]})},Q=function(t){var e=Object(s.d)((function(t){return t.store})).cart,c=t.handleSubmit,a=function(){return e.length>0?e.map((function(t){return Number(t.price)*t.quantity})).reduce((function(t,e){return t+e})):0};return Object(n.jsxs)("form",{className:"order-form",onSubmit:c((function(t,c){var n=e.map((function(t){return{id:t.id,title:t.title,price:t.price,quantity:t.quantity}}));y.ref("orders").child("order".concat((new Date).getTime())).set(JSON.stringify({user:Object(m.a)({},t),cart:n,totalPrice:a()})),c(T([])),c(Object(D.a)("order-form"))})),children:[Object(n.jsx)("h5",{className:"text-center",children:"Order Form"}),Object(n.jsx)(U.a,{name:"name",component:J,className:"w-100",label:"Name",validate:[R]}),Object(n.jsx)(U.a,{name:"surname",component:J,className:"w-100",label:"Surname",validate:[R]}),Object(n.jsx)(U.a,{name:"address",component:J,className:"w-100",label:"Address",validate:[R]}),Object(n.jsx)(U.a,{name:"phone",component:J,type:"tel",className:"w-100",label:"Phone",validate:[R]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("p",{className:"font-weight-bold",children:"Total: $".concat(a())})}),Object(n.jsx)("button",{type:"submit",className:"btn btn-dark w-100",children:"Order"})]})},F=Q=Object(E.a)({form:"order-form"})(Q),$=function(){return Object(n.jsxs)("div",{className:"container d-flex mt-4 mb-4",children:[Object(n.jsx)("div",{className:"col-9 cart-products",children:Object(n.jsx)(A,{})}),Object(n.jsx)("div",{className:"col-3",children:Object(n.jsx)(F,{})})]})};var z=function(){var t=Object(s.c)();return Object(a.useEffect)((function(){t((function(t){y.ref("products").on("value",(function(e){t({type:S,payload:e.val()})}))}))}),[]),Object(n.jsxs)(h.a,{basename:"/lampa-test/",children:[Object(n.jsx)(N,{}),Object(n.jsx)(x.a,{exact:!0,path:"/",component:I}),Object(n.jsx)(x.a,{path:"/cart/",component:$})]})};i.a.render(Object(n.jsx)(s.a,{store:O,children:Object(n.jsx)(z,{})}),document.getElementById("root"))}},[[249,1,2]]]);
//# sourceMappingURL=main.7209c341.chunk.js.map