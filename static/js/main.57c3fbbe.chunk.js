(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){t.exports=n(19)},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),i=n(9),s=(n(16),n(3)),l=n.n(s),u=n(4),b=n(5),m=n(8),p=n(6),d=n(10),f=n(7),h=n.n(f),k=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).state={tabIndex:0},n.handleClick=function(t){n.setState({tabIndex:t})},n}return Object(d.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){var t=this,e=this.state.tabIndex,n=this.props.tabs,a=(n[e]||{}).content;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tabs"},n.map((function(n,a){return c.a.createElement("button",{key:n.id,className:h()({tabs__button:!0,"tabs__button--isActive":e===a}),type:"button",onClick:function(){return t.handleClick(a)}},n.title)}))),c.a.createElement("p",null,a))}}]),e}(a.Component),v=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}].map((function(t){return Object(i.a)({},t,{id:l()()})})),x=function(){return c.a.createElement(k,{tabs:v})};o.a.render(c.a.createElement(x,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.57c3fbbe.chunk.js.map