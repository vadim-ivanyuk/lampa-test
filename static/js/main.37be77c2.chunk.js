(this["webpackJsonplampa-test"]=this["webpackJsonplampa-test"]||[]).push([[0],{45:function(t,e,c){},50:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c(1),r=c(21),i=c.n(r),s=c(11),o=c(12),d=c(33),u=c(34),b=c(20),j=c(51),l=Object(j.a)({UPDATE_PRODUCTS:function(t,e){var c=e.payload;return Object(b.a)(Object(b.a)({},t),{},{products:c})},UPDATE_CART:function(t,e){var c=e.payload;return Object(b.a)(Object(b.a)({},t),{},{cart:c})}},{products:[],cart:[]}),p=Object(o.combineReducers)({store:l}),m=Object(o.createStore)(p,Object(u.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),f=(c(44),c(45),c(23)),O=c(5),h=function(){var t=Object(s.c)((function(t){return t.store})),e=t.cart;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"d-flex align-items-center mr-2",children:e.length>0&&Object(a.jsxs)("p",{className:"d-flex align-items-center mb-0",children:[function(){if(t.cart.length>0)return t.cart.map((function(t){return+Number(t.price)})).reduce((function(t,e){return t+e}))}()," $"]})}),Object(a.jsx)("div",{children:Object(a.jsx)(f.b,{to:"/cart/",children:Object(a.jsx)("button",{className:"btn btn-light text-uppercase",children:"Cart"})})})]})},x=function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("div",{className:"container d-flex justify-content-end",children:Object(a.jsx)(h,{})})})},v=c(30);c(47);v.a.initializeApp({apiKey:"AIzaSyC39ynb4f8SXzUMLniQmWo7TCZXCQUaOgo",authDomain:"lampa-test-ivanyuk.firebaseapp.com",databaseURL:"https://lampa-test-ivanyuk-default-rtdb.firebaseio.com",projectId:"lampa-test-ivanyuk",storageBucket:"lampa-test-ivanyuk.appspot.com",messagingSenderId:"258682313552",appId:"1:258682313552:web:9c52b733087aa245f9aa55",measurementId:"G-J1E66XWPRK"});var g=v.a.database(),y=function(t){var e=t.product,c=t.addToCart;return Object(a.jsxs)("div",{className:"product-item ".concat(e.id," mb-4"),children:[Object(a.jsx)("img",{className:"product-item__image",src:"".concat("https://firebasestorage.googleapis.com/v0/b/lampa-test-ivanyuk.appspot.com/o/").concat(e.image,"?alt=media&token=65a20e7f-e979-44a1-8f44-e4580a56bfee"),alt:""}),Object(a.jsx)("h5",{className:"product-item__title mt-3 font-weight-bold",children:e.title}),Object(a.jsx)("p",{className:"product-item__description",children:e.description}),Object(a.jsxs)("p",{className:"product-item__price font-weight-bold",children:["Price: ",e.price," $"]}),Object(a.jsx)("button",{className:"btn btn-dark col-12",onClick:c.bind(undefined,e),children:"Add to cart"})]})},T=c(52),C=(Object(T.a)("UPDATE_PRODUCTS",(function(t){return t})),Object(T.a)("UPDATE_CART",(function(t){return t}))),N=function(){var t=Object(s.c)((function(t){return t.store})),e=Object(s.b)(),c=function(c){var a=t.cart;a.push(c),e(C(a))};return Object(a.jsx)(a.Fragment,{children:t.products.map((function(t){return Object(a.jsx)(y,{product:t,addToCart:c},t.id)}))})};function _(){return Object(a.jsx)("div",{className:"container d-flex justify-content-between flex-wrap mt-4",children:Object(a.jsx)(N,{})})}var k=function(){return Object(a.jsx)("div",{children:"CartPage"})};var P=function(){var t=Object(s.b)();return Object(n.useEffect)((function(){t((function(t){g.ref("products").on("value",(function(e){t({type:"UPDATE_PRODUCTS",payload:e.val()})}))}))}),[]),Object(a.jsxs)(f.a,{basename:"/lampa-test/",children:[Object(a.jsx)(x,{}),Object(a.jsx)(O.a,{exact:!0,path:"/",component:_}),Object(a.jsx)(O.a,{path:"/cart/",component:k})]})};i.a.render(Object(a.jsx)(s.a,{store:m,children:Object(a.jsx)(P,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.37be77c2.chunk.js.map