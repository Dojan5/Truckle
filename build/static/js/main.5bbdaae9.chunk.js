(this.webpackJsonpweightapp=this.webpackJsonpweightapp||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"0":[11.5,16,12,11.5],"1.0":[16,16,12,16],"1.3":[18,16,12,18],"1.8":[20,16,12,20],"2.0":[21,20,12.5,21],"2.4":[21,20,13,21],"2.6":[24,22,13,24],"2.8":[24,22,13.5,24],"3.2":[24,22,14,24],"3.6":[24,22,14.5,24],"4.0":[24,22,15,24],"4.4":[25,22,15.5,25],"4.7":[26,22,15.5,26],"4.8":[26,22.16,16,26],"5.0":[26,22.5,16,26],"5.2":[27,22.84,16.5,27],"5.4":[28,23.18,16.5,28],"5.6":[29,23.52,17,29],"5.8":[30,23.86,17,30],"6.0":[31,24.2,17.5,31],"6.2":[32,24.54,17.5,32]}')},36:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n,a=c(1),l=c.n(a),s=c(18),r=c.n(s),i=c(8),j=c(2),o=c(0),b=function(){return Object(o.jsx)("h1",{children:"Loading..."})},d=c(3),u=c(40),O=function(){var e=Object(u.a)(),t=Object(d.a)(e,1)[0];return Object(o.jsxs)("nav",{className:"app-menu",children:[Object(o.jsx)(i.b,{to:"/",children:t("interface.calculator")}),Object(o.jsx)(i.b,{to:"/loading",children:"Loading"}),Object(o.jsx)(i.b,{to:"/about",children:t("interface.about")})]})},h=(c(36),c(12)),x=c(9),p=h,g=x;function f(e,t,c,n,a,l){var s,r=m(c,l),i=m(n,l),j=(s=l,v(p[a][s])),o=(e<=r?e:r)+(t<=i?t:i);return o<=j?o:j}function v(e){return e<1e3?1e3*e:e}function m(e,t){return v(g[e][t])}!function(e){e[e.BK1=0]="BK1",e[e.BK2=1]="BK2",e[e.BK3=2]="BK3",e[e.BK4=3]="BK4"}(n||(n={}));var S=function(){var e=Object(u.a)(),t=Object(d.a)(e,1)[0],c=Object(a.useState)(12e3),l=Object(d.a)(c,2),s=l[0],r=l[1],i=Object(a.useState)(0),j=Object(d.a)(i,2),b=j[0],O=j[1],p=Object(a.useState)(0),g=Object(d.a)(p,2),m=g[0],S=g[1],N=Object(a.useState)(null),k=Object(d.a)(N,2),B=k[0],y=k[1],K=Object(a.useState)(null),w=Object(d.a)(K,2),C=w[0],A=w[1],F=Object(a.useState)(null),L=Object(d.a)(F,2),J=L[0],P=L[1],T=Object(a.useState)(!0),V=Object(d.a)(T,2),W=V[0],D=V[1],I=Object(a.useState)([0,0,0,0]),q=Object(d.a)(I,2),E=q[0],M=q[1],z=function(e){if(null!==b&&void 0!==b&&null!==m&&void 0!==m&&null!==B&&void 0!==B&&null!==C&&void 0!==C&&null!==J&&void 0!==C){var t=function(e,t,c,a,l){var s=v(e),r=v(t);return[f(s,r,c,a,l,n.BK1),f(s,r,c,a,l,n.BK2),f(s,r,c,a,l,n.BK3),f(s,r,c,a,l,n.BK4)]}(b,m,B,C,J);M(t)}};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:t("vehicleSpecification")}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:t("vehicleWeight")}),Object(o.jsx)("input",{type:"number",name:"weight",value:s,onChange:function(e){var t=parseFloat(e.target.value);r(t),z()},pattern:"[0-9]*"})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:t("frontAxleOverride")}),Object(o.jsx)("input",{type:"number",value:b,onChange:function(e){var t=parseFloat(e.target.value);O(t),z()},pattern:"[0-9]*"})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:t("backAxleOverride")}),Object(o.jsx)("input",{type:"number",value:m,onChange:function(e){var t=parseFloat(e.target.value);S(t),z()},pattern:"[0-9]*"})]})]}),Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:t("tableSettings")}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:t("frontAxle")}),Object(o.jsxs)("select",{name:"frontAxle",onChange:function(e){var t=e.target.value,c="string"!==typeof t?t.toString():t;y(c),z()},children:[Object(o.jsx)("option",{value:null,children:t("interface.pleaseSelect")}),Object.keys(x).map((function(e){return Object(o.jsx)("option",{value:e,children:e})}))]})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:t("backAxle")}),Object(o.jsxs)("select",{name:"backAxle",onChange:function(e){var t=e.target.value,c="string"!==typeof t?t.toString():t;A(c),z()},children:[Object(o.jsx)("option",{value:null,children:t("interface.pleaseSelect")}),Object.keys(x).map((function(e){return Object(o.jsx)("option",{value:e,children:e})}))]})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{children:t("weightTable")}),Object(o.jsxs)("select",{name:"grossWeight",onChange:function(e){var t=e.target.value,c="string"!==typeof t?t.toString():t;P(c),z()},children:[Object(o.jsx)("option",{value:null,children:t("interface.pleaseSelect")}),Object.keys(h).map((function(e){return Object(o.jsx)("option",{value:e,children:e})}))]})]})]}),Object(o.jsxs)("div",{className:"result-table",children:[Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"header",children:t("class")}),Object(o.jsx)("td",{className:"text-center header",children:t("weightAllowance")}),Object(o.jsx)("td",{className:"text-right header",children:t("allowedLoad")})]})}),Object(o.jsx)("tbody",{children:E.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{className:"header",children:["BK",t+1]}),Object(o.jsx)("td",{className:"text-center",children:W?Object(o.jsxs)("span",{children:[e," kg"]}):Object(o.jsxs)("span",{children:[e/1e3," t"]})}),Object(o.jsx)("td",{className:"text-right",children:W?Object(o.jsxs)("span",{children:[e-s," kg"]}):Object(o.jsxs)("span",{children:[e/1e3-s," t"]})})]})}))})]}),Object(o.jsxs)("div",{className:"unit-toggle",children:[Object(o.jsx)("label",{onClick:function(){return D(!W)},children:"Display in Kilogram"}),Object(o.jsx)("input",{type:"checkbox",checked:W,onChange:function(){return D(!W)}})]})]})]})})},N=(c(37),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),l(e),s(e)}))}),k=c(16),B=c(23),y=c(25),K=c(10);k.a.use(B.a).use(y.a).use(K.e).init({fallbackLng:"sv",debug:!0,detection:{order:["queryString","cookie"],caches:["cookie"]},interpolation:{escapeValue:!1}});k.a;r.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(a.Suspense,{fallback:Object(o.jsx)(b,{}),children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)("section",{className:"app-content",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",element:Object(o.jsx)(S,{})}),Object(o.jsx)(j.a,{path:"/loading",element:Object(o.jsx)(b,{})}),Object(o.jsx)(j.a,{path:"/about"})]})}),Object(o.jsx)(O,{})]})})}),document.getElementById("root")),N()},9:function(e){e.exports=JSON.parse('{"singleAxleNoPower":[10,10,8,10],"singleAxleWithPower":[11.5,10,8,11.5],"boggi":[18,16,12,18],"boggiVVF":[19,16,12,19],"triple":[26,22,13,26]}')}},[[39,1,2]]]);
//# sourceMappingURL=main.5bbdaae9.chunk.js.map