(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),i=n.n(r),s=(n(16),n(5)),l=n(6),o=n(7),d=n(10),b=n(9),j=(n(17),n(2));var u=Object(j.a)("div",{target:"e77rkgg0"})({name:"1azakc",styles:"text-align:center"}),h=n(0);function O(e){var t=e.title,n=e.children;return Object(h.jsxs)(u,{children:[Object(h.jsx)("h1",{children:t}),n]})}var g=n(11);var p=Object(j.a)("button",{target:"e1c0aijd2"})("display:block;width:max-content;border:2px solid grey;padding:5px;margin:10px;border-radius:5px;text-transform:capitalize;cursor:pointer;background-color:",(function(e){switch(e.typeFeedback){case"good":return"green";case"neutral":return"blue";case"bad":return"tomato";default:return"grey"}}),";"),x=Object(j.a)("ul",{target:"e1c0aijd1"})({name:"105kwuu",styles:"display:flex;padding:0;justify-content:center;list-style:none"}),f=Object(j.a)("li",{target:"e1c0aijd0"})({name:"4zleql",styles:"display:block"});function v(e){var t=e.options,n=e.leaveFeedback;return Object(h.jsx)(x,{children:Object.keys(t).map((function(e){return Object(h.jsx)(f,{children:Object(h.jsx)(p,{typeFeedback:e,onClick:function(){return n(e)},children:e},e)},Object(g.a)())}))})}function k(e){var t=e.message;return Object(h.jsx)("p",{children:t})}var y=Object(j.a)("li",{target:"eyhmo201"})({name:"4zleql",styles:"display:block"}),m=Object(j.a)("ul",{target:"eyhmo200"})({name:"1fz8zcq",styles:"display:block;padding:0;list-style:none"});function w(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(h.jsx)(h.Fragment,{children:c?Object(h.jsxs)(m,{children:[Object(h.jsxs)(y,{children:["Good: ",t]}),Object(h.jsxs)(y,{children:["Neutral: ",n]}),Object(h.jsxs)(y,{children:["Bad: ",a]}),Object(h.jsxs)(y,{children:["Total: ",c]}),Object(h.jsxs)(y,{children:["Positive feedback: ",r,"%"]})]}):Object(h.jsx)(k,{message:"No feedback given"})})}var F=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.incrementFeedback=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=Object.values(this.state).reduce((function(e,t){return e+t}),0),r=Math.round(t/c*100);return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{title:"Please, leave feedback",children:Object(h.jsx)(v,{options:this.state,leaveFeedback:this.incrementFeedback})}),Object(h.jsx)(O,{title:"Statistics",children:Object(h.jsx)(w,{good:t,neutral:n,bad:a,total:c,positivePercentage:r})})]})}}]),n}(a.Component);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.73c4c6b6.chunk.js.map