(this.webpackJsonpnew_cryptoreact=this.webpackJsonpnew_cryptoreact||[]).push([[0],{26:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),i=c(16),r=c.n(i),o=(c(26),c(27),c(31),c(32),c(4)),l=c.n(o),j=c(5),d=c(3),u=(c(34),function(e){var t=e.coins;return Object(a.jsx)("div",{className:"mt-4",children:Object(a.jsx)("div",{className:"coin_list row mt-4",children:t.map((function(e){return Object(a.jsxs)("div",{className:"col-4 col-md-2 mt-3",children:[Object(a.jsx)("img",{src:e.iconImage,alt:"image cap",width:"100px"}),Object(a.jsxs)("div",{className:"align-bottom py-3",children:[Object(a.jsx)("h5",{className:"coin_name",children:e.FROMSYMBOL}),Object(a.jsxs)("p",{className:"coin_price",children:["$",e.PRICE.toFixed(2)]})]})]},e.FROMSYMBOL)}))})})}),b=c(6),m=c.n(b),O=(c(53),c.p+"static/media/BTC.ef7c2565.svg"),f=c.p+"static/media/ETH.ec8d5f59.svg",h=c.p+"static/media/XLM.839200d7.svg",p=c.p+"static/media/XRP.c393186e.svg",x=c.p+"static/media/ETC.74a33129.svg",v=c.p+"static/media/BCH.bd7aac44.svg",g=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(!0),o=Object(d.a)(r,2),b=o[0],g=o[1],N=Object(n.useState)(""),S=Object(d.a)(N,2),C=S[0],y=S[1];Object(n.useEffect)((function(){w(),setInterval((function(){w()}),6e4)}),[]);var w=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,a,n,s,r,o,j,d,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],"5f1669f9639c90e3b179bbd4e9569d83195316fd3252fdf9a54b0604120f1d1e",c="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,XLM,ETC&tsyms=USD&api_key={".concat("5f1669f9639c90e3b179bbd4e9569d83195316fd3252fdf9a54b0604120f1d1e","}"),e.next=5,m.a.get(c);case 5:a=e.sent,n=a.data.RAW.BTC.USD,s=a.data.RAW.ETH.USD,r=a.data.RAW.XRP.USD,o=a.data.RAW.BCH.USD,j=a.data.RAW.XLM.USD,d=a.data.RAW.ETC.USD,u=Math.floor(.0830908*n.PRICE),n.iconImage=O,s.iconImage=f,r.iconImage=p,o.iconImage=v,j.iconImage=h,d.iconImage=x,t.push(n,s,r,o,j,d),i(t),y(u),g(!1);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[b?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"loader"}),Object(a.jsx)("h4",{children:"Loading..."})]}):Object(a.jsx)(u,{coins:s}),Object(a.jsx)("div",{className:"assets",children:Object(a.jsxs)("p",{children:["Total Assets: $",C]})})]})},N=c(17),S=c(18),C=c(20),y=c(19),w=function(e){Object(C.a)(c,e);var t=Object(y.a)(c);function c(e){var a;return Object(N.a)(this,c),(a=t.call(this,e)).state={year:new Date},a}return Object(S.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){e.setState({time:new Date})}),864e3)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"fixed-bottom",children:Object(a.jsxs)("p",{className:"small",children:["All rights reserved \xa9 ",this.state.year.getFullYear()," | Eliram Malachi"]})})}}]),c}(n.Component),I=(c(54),function(e){var t=e.searchCoin,c=Object(n.useState)("Enter full coin's name"),s=Object(d.a)(c,2),i=s[0],r=s[1];return Object(a.jsx)("div",{className:"search container",children:Object(a.jsxs)("div",{className:"inputLine",children:[Object(a.jsx)("h4",{className:"text-light lead",children:"Search more coins"}),Object(a.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),r(e.target.reset()),t(i)}(e)},children:Object(a.jsxs)("div",{className:"form-row align-items-center px-4 py-2",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("input",{type:"text",className:"form-control mb-2",id:"inlineFormInput",name:"searchInput",placeholder:i,onChange:function(e){return r(e.target.value.toLowerCase())},required:!0})}),Object(a.jsx)("div",{className:"col-auto",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-outline-warning mb-2",children:Object(a.jsx)("i",{className:"fas fa-search"})})})]})})]})})}),R=(c(55),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!0),r=Object(d.a)(i,2),o=r[0],u=r[1],b=Object(n.useState)(!0),O=Object(d.a)(b,2),f=(O[0],O[1],Object(n.useState)("")),h=Object(d.a)(f,2),p=h[0],x=h[1],v=Object(n.useState)([]),g=Object(d.a)(v,2);g[0],g[1];Object(n.useEffect)((function(){}),[]);var N=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,a,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(""),s(""),u(!0),URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=".concat(t,"&order=market_cap_desc&per_page=7000&page=1&sparkline=false"),e.next=6,m.a.get(URL);case 6:return c=e.sent,e.next=9,c.data;case 9:if(a=e.sent,console.log(a),0==a)x("Coin was not found \ud83d\ude41");else for(n in a)i=a[n],s(i),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"searchResult",children:[Object(a.jsx)(I,{searchCoin:N}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h4",{children:p}),o?Object(a.jsx)("div",{children:Object(a.jsx)("p",{})}):Object(a.jsx)("div",{className:"box_result",children:Object(a.jsxs)("h4",{className:"lead p-2",children:[Object(a.jsx)("img",{src:c.image,alt:"coin-icon",className:"mr-1"})," ".concat(c.name," - ").concat(c.symbol.toUpperCase()," - $").concat(c.current_price.toFixed(2))]})})]})]})}),D=function(){return Object(a.jsxs)("div",{className:"App text-light",children:[Object(a.jsx)("h1",{className:"display-3 pt-2",children:"Crypto Tracker"}),Object(a.jsx)(g,{}),Object(a.jsx)(R,{}),Object(a.jsx)(w,{})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),E()}},[[56,1,2]]]);
//# sourceMappingURL=main.bb84fda7.chunk.js.map