"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[223],{9196:function(n,t,e){e.d(t,{M1:function(){return f},TP:function(){return p},tx:function(){return d},z8:function(){return l},JN:function(){return u}});var r=e(5861),a=e(7757),c=e.n(a),o=e(4569),i=e.n(o),s="9d3b2d59c7632f197e52385ff97229b9";i().defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("trending/movie/day?api_key=".concat(s));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("movie/".concat(t,"?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("/movie/".concat(t,"/credits?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("movie/".concat(t,"/reviews?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("search/movie?query=".concat(t,"&api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",Promise.reject(new Error(n.t0.message)));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},9223:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,a,c,o,i,s,u,p,f=e(885),d=e(2791),l=e(9196),x=e(168),h=e(6031),v=e(501),g=h.ZP.div(r||(r=(0,x.Z)(["\n  padding: 0px 30px;\n  margin: 0px auto;\n"]))),m=h.ZP.ul(a||(a=(0,x.Z)(["\n  display: grid;\n  max-width: calc(100vw - 30px);\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  gap: 30px;\n  margin: 0px auto;\n  padding: 15px 20px 0px;\n  list-style: none;\n"]))),b=h.ZP.li(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 8px;\n  box-shadow: 0 5px 10px rgb(0 0 0 / 50%);\n  :hover {\n    cursor: pointer;\n    transform: scale(1.03) translateY(-3px);\n    box-shadow: 0 5px 10px rgb(0 0 0 / 50%);\n  }\n"]))),w=(0,h.ZP)(v.rU)(o||(o=(0,x.Z)(["\n  text-decoration: none;\n"]))),Z=h.ZP.img(i||(i=(0,x.Z)(["\n  width: 100%;\n  height: 355px;\n  border-radius: 5px;\n  object-fit: cover;\n"]))),y=h.ZP.div(s||(s=(0,x.Z)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding-left: 5px;\n  padding-right: 5px;\n"]))),_=h.ZP.h2(u||(u=(0,x.Z)(["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  text-transform: uppercase;\n  color: #2a363b;\n  text-decoration: none;\n  margin-left: 10px;\n"]))),k=h.ZP.span(p||(p=(0,x.Z)(["\n  padding: 0 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n\n  background-color: #ff6b08;\n  color: #fff;\n  border-radius: 5px;\n"]))),j=e(7107),P=e(184);function z(){var n=(0,d.useState)([]),t=(0,f.Z)(n,2),e=t[0],r=t[1];return(0,d.useEffect)((function(){(0,l.JN)().then(r)}),[]),(0,P.jsx)(g,{children:(0,P.jsx)(m,{children:e&&e.map((function(n){return(0,P.jsx)(b,{children:(0,P.jsxs)(w,{to:"movies/".concat(n.id),children:[(0,P.jsx)("div",{children:(0,P.jsx)(Z,{src:n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):j,alt:n.title})}),(0,P.jsxs)(y,{children:[(0,P.jsx)(_,{children:n.title}),(0,P.jsx)(k,{children:n.vote_average})]})]})},n.id)}))})})}},7107:function(n,t,e){n.exports=e.p+"static/media/noposter.d7e60210de6e7d4fcc19.jpg"}}]);
//# sourceMappingURL=223.b49ff202.chunk.js.map