(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),r=n(4),c=n(5),o=n(7),i=n(6),u=n(1),p=n(0),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={pressedKey:""},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",(function(t){return e.handleKeyUpEvent(t)}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUpEvent)}},{key:"handleKeyUpEvent",value:function(e){this.setState({pressedKey:e.key})}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(u.Component);n(13);s.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cee11a1a.chunk.js.map