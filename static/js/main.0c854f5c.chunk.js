(this["webpackJsonpdelay-shop"]=this["webpackJsonpdelay-shop"]||[]).push([[0],{121:function(e,t,a){e.exports=a(207)},126:function(e,t,a){},128:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=(a(126),a(82)),l=a.n(s),i=a(46),u=a(212),p=a(210),h=a(211),m=a(209),d=(a(128),u.a.Search),f=(u.a.TextArea,p.a.Title,p.a.Paragraph,p.a.Text,function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=(t[0],t[1],Object(n.useState)()),c=Object(i.a)(a,2),o=c[0],s=c[1],u=Object(n.useState)(0),p=Object(i.a)(u,2),f=p[0],b=p[1],v=Object(n.useState)(""),E=Object(i.a)(v,2),g=(E[0],E[1],new Array),w=0,y=0,j=new Array,S=function e(t){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/shop.json?display=100&start=1&sort=sim&query="+encodeURI(t),{headers:{"X-Naver-Client-Id":"mnUoJCdcr7xsozFA0gRJ","X-Naver-Client-Secret":"zAkagcFUfG"}}).then((function(e){return 200!=e.status&&alert("error: "+e.status.toString()+" | "+JSON.stringify(e)),e.json()})).then((function(a){var n={code:t,count:a.total};j.push(n),w++,b(100*w/y),w<y?e(g[w]):s(j)}));case 1:case"end":return a.stop()}}))};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:"https://shop-phinf.pstatic.net/20190702_17/ncp_1nq2uj_01_1562054355047mnXo4_JPEG/50108458439258749_-647527624.jpg",className:"App-logo",alt:"logo"})),r.a.createElement("body",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(d,{placeholder:"input search text",enterButton:"Search",size:"large",allowClear:!0,onSearch:function(e){var t;t=e,l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<=0)){e.next=2;break}return e.abrupt("return");case 2:b(w=0),j.splice(0,j.length),g=t.split(","),y=g.length,S(g[w]).then();case 8:case"end":return e.stop()}}))}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(h.a,{strokeLinecap:"square",percent:f})),r.a.createElement(m.a,{header:r.a.createElement("div",null),footer:r.a.createElement("div",null),bordered:!0,dataSource:o,renderItem:function(e){return r.a.createElement(m.a.Item,null,e.count)}})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[121,1,2]]]);
//# sourceMappingURL=main.0c854f5c.chunk.js.map