(this.webpackJsonpweightapp=this.webpackJsonpweightapp||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),l=c.n(n),a=c(6),s=c.n(a),r=c(2),i=(c(11),c(4)),j=c(3),o=c(0);var b=function(){var e=Object(n.useState)(12e3),t=Object(r.a)(e,2),c=t[0],l=t[1],a=Object(n.useState)(0),s=Object(r.a)(a,2),b=s[0],d=s[1],h=Object(n.useState)(0),O=Object(r.a)(h,2),x=O[0],u=O[1],g=Object(n.useState)(j.singleAxleNoPower),p=Object(r.a)(g,2),v=p[0],m=p[1],f=Object(n.useState)(j.singleAxleNoPower),N=Object(r.a)(f,2),k=N[0],A=N[1],w=Object(n.useState)(i[0]),F=Object(r.a)(w,2),C=F[0],S=F[1],y=Object(n.useState)(!0),W=Object(r.a)(y,2),B=W[0],P=W[1],T=Object(n.useState)([0,0,0,0]),J=Object(r.a)(T,2),V=J[0],L=J[1],D=function(e){var t=b<1e3?b:b/1e3,c=x<1e3?x:x/1e3,n=parseFloat(v[e]),l=parseFloat(k[e]),a=parseFloat(C[e]),s=t<=n?t:n;console.log(typeof s);var r=c<=l?c:l;console.log(typeof r);var i=s+r,j=a,o=i<j?i:a;return console.table({frontAxleOverride:b,backAxleOverride:x,rlFront:n,rlBack:l,gW:a,frontAxleWeightAllowance:s,backAxleWeightAllowance:r,addedTogether:i,grossWeightAllowance:j,result:o}),o};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:"Vehicle Specification"}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:"Vehicle weight"}),Object(o.jsx)("input",{type:"number",name:"weight",value:c,onChange:function(e){var t=parseFloat(e.target.value);l(t)}})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:"Front axle override"}),Object(o.jsx)("input",{type:"number",value:b,onChange:function(e){var t=parseFloat(e.target.value);d(t)}})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:"Back axle override"}),Object(o.jsx)("input",{type:"number",value:x,onChange:function(e){var t=parseFloat(e.target.value);u(t)}})]})]}),Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:"Table Settings"}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:"Front axle"}),Object(o.jsx)("select",{name:"frontAxle",onChange:function(e){var t=j[e.target.value];m(t)},children:Object.keys(j).map((function(e){return Object(o.jsx)("option",{value:e,children:e})}))})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:"Back axle"}),Object(o.jsx)("select",{name:"backAxle",onChange:function(e){var t=j[e.target.value];A(t)},children:Object.keys(j).map((function(e){return Object(o.jsx)("option",{value:e,children:e})}))})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:"Weight Table"}),Object(o.jsx)("select",{name:"grossWeight",onChange:function(e){var t=i[e.target.value];S(t)},children:Object.keys(i).map((function(e){return Object(o.jsx)("option",{value:e,children:e})}))})]})]}),Object(o.jsxs)("div",{className:"result-table",children:[Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"header",children:"Class"}),Object(o.jsx)("td",{className:"text-center header",children:"Weight Allowance"}),Object(o.jsx)("td",{className:"text-right header",children:"Allowed Load"})]})}),Object(o.jsx)("tbody",{children:V.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{className:"header",children:["BK",t+1]}),Object(o.jsx)("td",{className:"text-center",children:B?Object(o.jsxs)("span",{children:[1e3*e," kg"]}):Object(o.jsxs)("span",{children:[e," t"]})}),Object(o.jsx)("td",{className:"text-right",children:B?Object(o.jsxs)("span",{children:[1e3*e-c," kg"]}):Object(o.jsxs)("span",{children:[e-c," t"]})})]})}))})]}),Object(o.jsxs)("div",{className:"unit-toggle",children:[Object(o.jsx)("label",{onClick:function(){return P(!B)},children:"Display in Kilogram"}),Object(o.jsx)("input",{type:"checkbox",checked:B,onChange:function(){return P(!B)}})]})]}),Object(o.jsx)("button",{className:"btn",onClick:function(e){var t=D(0),c=D(1),n=D(2),l=D(3);L([t,c,n,l])},children:"Calculate"})]})})},d=(c(13),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,l=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),l(e),a(e),s(e)}))});s.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),d()},3:function(e){e.exports=JSON.parse('{"singleAxleNoPower":[10,10,8,10],"singleAxleWithPower":[11.5,10,8,11.5],"boggi":[18,16,12,18],"boggiVVF":[19,16,12,19],"triple":[26,22,13,26]}')},4:function(e){e.exports=JSON.parse('{"0":[11.5,16,12,11.5],"1.0":[16,16,12,16],"1.3":[18,16,12,18],"1.8":[20,16,12,20],"2.0":[21,20,12.5,21],"2.4":[21,20,13,21],"2.6":[24,22,13,24],"2.8":[24,22,13.5,24],"6.0":[31,24.2,17.5,31],"6.2":[32,24.54,17.5,32]}')}},[[14,1,2]]]);
//# sourceMappingURL=main.e6a45abe.chunk.js.map