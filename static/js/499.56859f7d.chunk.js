"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[499],{9196:function(r,e,t){t.d(e,{M1:function(){return f},TP:function(){return p},tx:function(){return v},z8:function(){return h},JN:function(){return i}});var n=t(5861),c=t(7757),a=t.n(c),u=t(4569),s=t.n(u),o="9d3b2d59c7632f197e52385ff97229b9";s().defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s().get("trending/movie/day?api_key=".concat(o));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s().get("movie/".concat(e,"?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s().get("/movie/".concat(e,"/credits?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s().get("movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s().get("search/movie?query=".concat(e,"&api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",Promise.reject(new Error(r.t0.message)));case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},8499:function(r,e,t){t.r(e),t.d(e,{default:function(){return f}});var n,c=t(885),a=t(2791),u=t(6871),s=t(9196),o=t(168),i=t(6031).ZP.p(n||(n=(0,o.Z)(["\n  padding-left: 30px;\n  padding-right: 30px;\n}\n"]))),p=t(184);function f(){var r=(0,u.UO)().movieId,e=(0,a.useState)([]),t=(0,c.Z)(e,2),n=t[0],o=t[1];return(0,a.useEffect)((function(){(0,s.tx)(r).then((function(r){return r.results})).then(o)}),[r]),(0,p.jsx)(p.Fragment,{children:n.length>0?n.map((function(r){return(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:r.author}),(0,p.jsx)(i,{children:r.content})]},r.id)})):(0,p.jsx)("p",{children:"There are no reviews."})})}}}]);
//# sourceMappingURL=499.56859f7d.chunk.js.map