(this["webpackJsonprugged-frontend"]=this["webpackJsonprugged-frontend"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),i=c(4),s=c.n(i),j=(c(9),c(2)),r=(c(10),c.p+"static/media/logo.6ce24c58.svg"),u=c(0),o=function(t){var e=t.showForm;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("img",{src:r,className:"App-logo",alt:"logo"})}),Object(u.jsx)("p",{children:"Welcome to the rugged frontend"}),Object(u.jsx)("button",{onClick:e,children:"Go To Rugged Form"})]})},b=c(14),d=function(t){var e=t.showFailure,c=t.showSuccess,a=Object(n.useState)(void 0),i=Object(j.a)(a,2),s=i[0],r=i[1],o=Object(n.useState)(void 0),d=Object(j.a)(o,2),l=d[0],O=d[1],x=Object(n.useState)(void 0),h=Object(j.a)(x,2),p=h[0],f=h[1],g=Object(n.useState)(void 0),v=Object(j.a)(g,2),m=v[0],T=v[1],S=Object(n.useState)(!1),F=Object(j.a)(S,2),w=F[0],C=F[1],k=Object(n.useState)(!1),L=Object(j.a)(k,2),y=L[0],I=L[1],A=function(){I(!0),"text 1 test data"===s&&"text 2 success data"===l&&"text 3 test data"===p&&"coconut"===m&&w?setTimeout((function(){c(),I(!1)}),2e3):"text 1 test data"===s&&"text 2 failure data"===l&&"text 3 test data"===p&&"coconut"===m&&w?setTimeout((function(){e(),I(!1)}),2e3):setTimeout((function(){I(!1),alert("Form input not what it should be")}))};return Object(u.jsxs)(u.Fragment,{children:[y&&Object(u.jsx)("p",{children:"Processing your input, please wait..."}),!y&&Object(u.jsxs)("form",{onSubmit:function(t){A(),t.preventDefault()},children:[Object(u.jsx)("p",{children:"Here is a rugged form!"}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{id:Object(b.a)(),"data-testid":"text-input-label-1",children:["Label Text for Text Input 1",Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:Object(b.a)(),"data-testid":"text-input-input-1",value:s,onChange:function(t){return r(t.target.value)}})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{id:Object(b.a)(),children:["Label Text for Text Input 2",Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:Object(b.a)(),value:l,onChange:function(t){return O(t.target.value)}})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{id:Object(b.a)(),"data-testid":"text-input-label-3",children:["Label Text for Text Input 3",Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:Object(b.a)(),"data-testid":"text-input-input-3",value:p,onChange:function(t){return f(t.target.value)}})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{id:Object(b.a)(),"data-testid":"select-label",children:["Label Text for Select Input",Object(u.jsx)("br",{}),Object(u.jsxs)("select",{value:m,onChange:function(t){return T(t.target.value)},"data-testid":"select-input",children:[Object(u.jsx)("option",{selected:!0,value:"grapefruit","data-testid":"grapefruit",children:"Grapefruit"}),Object(u.jsx)("option",{value:"lime","data-testid":"lime",children:"Lime"}),Object(u.jsx)("option",{value:"coconut","data-testid":"coconut",children:"Coconut"}),Object(u.jsx)("option",{value:"mango","data-testid":"mango",children:"Mango"})]})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{id:Object(b.a)(),"data-testid":"checkbox-label",children:["Label Text for Checkbox",Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:Object(b.a)(),"data-testid":"checkbox-input",type:"checkbox",checked:w,onChange:function(t){return C(t.target.checked)}})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{id:Object(b.a)(),children:["Label for a submit ",Object(u.jsx)("br",{}),Object(u.jsx)("button",{id:Object(b.a)(),type:"button",onClick:A,children:"Submit"})]})})]})]})},l=function(){return Object(u.jsx)("p",{children:"The Form was submitted successfully. Thank you for your input!"})},O=function(){return Object(u.jsx)("p",{children:"There was a failure in the form, please try again."})};var x=function(){var t=Object(n.useState)(!1),e=Object(j.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)(!1),s=Object(j.a)(i,2),r=s[0],b=s[1],x=Object(n.useState)(!1),h=Object(j.a)(x,2),p=h[0],f=h[1];return Object(u.jsxs)("div",{className:"App",children:[!c&&!r&&!p&&Object(u.jsx)(o,{showForm:function(){return a(!0)}}),c&&Object(u.jsx)(d,{showSuccess:function(){b(!0),a(!1)},showFailure:function(){f(!0),a(!1)}}),r&&Object(u.jsx)(l,{}),p&&Object(u.jsx)(O,{})]})},h=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),i(t),s(t)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),h()},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.c5576664.chunk.js.map