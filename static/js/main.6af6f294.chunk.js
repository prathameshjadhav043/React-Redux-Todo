(this["webpackJsonpredux-todo-app"]=this["webpackJsonpredux-todo-app"]||[]).push([[0],{17:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(6),n=t.n(s),l=(t(17),t(0)),i=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid mx-4",children:[Object(l.jsx)("p",{className:"navbar-brand",children:"Redux Form"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsx)("div",{className:"navbar-nav",children:Object(l.jsx)("p",{className:"nav-link active","aria-current":"page",children:"Home"})})})]})})})},r=t(2),d=t(3),o=function(){var e=Object(c.useState)(""),a=Object(r.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)(""),i=Object(r.a)(n,2),o=i[0],b=i[1],j=Object(c.useState)(""),m=Object(r.a)(j,2),u=m[0],O=m[1],h=Object(c.useState)(""),v=Object(r.a)(h,2),x=v[0],p=v[1],N=Object(c.useState)(""),f=Object(r.a)(N,2),g=f[0],y=f[1],C=Object(c.useState)(""),k=Object(r.a)(C,2),S=k[0],_=k[1],F=Object(d.b)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main",children:Object(l.jsxs)("form",{className:"row g-3 needs-validation",onSubmit:function(e){e.preventDefault(),F(function(e,a,t,c,s,n){return{type:"add_Todo",payload:{id:(new Date).getTime().toString(),fname:e,lname:a,username:t,city:c,State:s,zip:n}}}(t,o,u,x,g,S)),s(""),b(""),O(""),p(""),y(""),_("")},children:[Object(l.jsxs)("div",{className:"col-md-4",children:[Object(l.jsx)("label",{htmlFor:"validationCustom01",className:"form-label",children:"First Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"validationCustom01",placeholder:"First Name",required:!0,value:t,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(l.jsxs)("div",{className:"col-md-4",children:[Object(l.jsx)("label",{htmlFor:"validationCustom02",className:"form-label",children:"Last Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"validationCustom02",placeholder:"Last Name",required:!0,value:o,onChange:function(e){b(e.target.value)}}),Object(l.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(l.jsxs)("div",{className:"col-md-4",children:[Object(l.jsx)("label",{htmlFor:"validationCustomUsername",className:"form-label",children:"Username"}),Object(l.jsxs)("div",{className:"input-group has-validation",children:[Object(l.jsx)("span",{className:"input-group-text",id:"inputGroupPrepend",children:"@"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Username",id:"validationCustomUsername","aria-describedby":"inputGroupPrepend",required:!0,value:u,onChange:function(e){O(e.target.value)}}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please choose a username. "})]})]}),Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)("label",{htmlFor:"validationCustom03",className:"form-label",children:"City"}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"City",id:"validationCustom03",required:!0,value:x,onChange:function(e){p(e.target.value)}}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid city."})]}),Object(l.jsxs)("div",{className:"col-md-3",children:[Object(l.jsx)("label",{htmlFor:"validationCustom04",className:"form-label",children:"State"}),Object(l.jsxs)("select",{className:"form-select",id:"validationCustom04",required:!0,value:g,onChange:function(e){y(e.target.value)},children:[Object(l.jsx)("option",{selected:!0,disabled:!0,children:"Choose..."}),Object(l.jsx)("option",{children:"..."}),Object(l.jsx)("option",{children:"Maharshtra"}),Object(l.jsx)("option",{children:"Hydrabad"}),Object(l.jsx)("option",{children:"Chennai"}),Object(l.jsx)("option",{children:"Banglore"}),Object(l.jsx)("option",{children:"Gujrat"}),Object(l.jsx)("option",{children:"Utterpardes"})]}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please select a valid state."})]}),Object(l.jsxs)("div",{className:"col-md-3",children:[Object(l.jsx)("label",{htmlFor:"validationCustom05",className:"form-label",children:"Zip"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"validationCustom05",requiredvalue:S,onChange:function(e){_(e.target.value)}}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid zip."})]}),Object(l.jsx)("div",{className:"col-12",children:Object(l.jsxs)("div",{className:"form-check",children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"invalidCheck",required:!0}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"invalidCheck",children:"Agree to terms and conditions"}),Object(l.jsx)("div",{className:"invalid-feedback",children:"You must agree before submitting."})]})}),Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("button",{className:"btn btn-sm btn-primary",type:"submit",children:"Submit"})})]})})})},b=function(e){var a=e.item,t=a.fname,s=a.lname,n=a.username,i=a.id,o=a.city,b=a.State,j=a.zip,m=Object(c.useState)(!1),u=Object(r.a)(m,2),O=u[0],h=u[1],v=Object(d.b)();return Object(l.jsxs)("div",{className:"form_m",children:[Object(l.jsxs)("div",{className:"form_d",children:[Object(l.jsx)("label",{className:"fn mx-1",children:t}),Object(l.jsx)("label",{className:"us mx-1",children:s}),Object(l.jsxs)("div",{className:"btns",children:[Object(l.jsx)("button",{className:"btn btn_ btn-sm btn-info text-white mx-1",onClick:function(){h((function(e){return!e}))},children:"Details"}),Object(l.jsx)("button",{className:"btn btn_ btn-sm btn-danger mx-1",onClick:function(){v(function(e){return{type:"del_Todo",payload:{key:e}}}(i))},children:"Delete"})]})]}),O?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("label",{className:"u",children:n}),Object(l.jsx)("label",{className:"c",children:o}),Object(l.jsx)("label",{className:"s",children:b}),Object(l.jsx)("label",{className:"z",children:j})]}),Object(l.jsx)("hr",{})]}):Object(l.jsx)(l.Fragment,{})]})},j=function(){var e=Object(d.c)((function(e){return e.todoReducers.data}));return Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("label",{className:"t",children:"Submited Forms"}),Object(l.jsx)("hr",{}),e.map((function(e){return Object(l.jsx)(b,{item:e},e.id)}))]})},m=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{}),Object(l.jsx)(o,{}),Object(l.jsx)(j,{})]})},u=(t(23),t(8)),O=t(12),h=t(5),v={data:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"add_Todo":var t=a.payload,c=t.id,s=t.fname,n=t.lname,l=t.username,i=t.city,r=t.State,d=t.zip;return Object(h.a)(Object(h.a)({},e),{},{data:[].concat(Object(O.a)(e.data),[{id:c,fname:s,lname:n,username:l,city:i,State:r,zip:d}])});case"del_Todo":var o=a.payload.key,b=e.data.filter((function(e){return e.id!==o}));return Object(h.a)(Object(h.a)({},e),{},{data:b});default:return e}},p=Object(u.a)({todoReducers:x}),N=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(a){return}}(),f=Object(u.b)(p,N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());f.subscribe((function(){!function(e){try{var a=JSON.stringify(e);localStorage.setItem("state",a)}catch(t){}}(f.getState())})),n.a.render(Object(l.jsx)(d.a,{store:f,children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6af6f294.chunk.js.map