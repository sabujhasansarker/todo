(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{48:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(20),r=n.n(s),o=(n(48),n(43)),i=n(21),j=n(15),d=n(6),l=(n(49),n(65)),b=n(59),h=n(64),x=n(60),u=n(3),O=function(e){var t=e.todoLength;return Object(u.jsx)(c.Fragment,{children:Object(u.jsx)(l.a,{bg:"dark",variant:"dark",children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(l.a.Brand,{href:"#home",children:Object(u.jsxs)(j.b,{to:"/",className:"text-white",children:[Object(u.jsx)("img",{alt:"",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoG6tfQA2ZpPPeYhFg8p4GJlb0AiLMtDe43A&usqp=CAU",width:"30",height:"30",className:"d-inline-block align-top"})," ","Todo List"]})}),Object(u.jsxs)(h.a,{className:"ml-auto text-white",children:[Object(u.jsx)(h.a.Link,{as:j.b,to:"/",children:"Home"}),Object(u.jsxs)(h.a.Link,{as:j.b,to:"todos",children:["Todos",Object(u.jsx)(x.a,{variant:"light ml-1 ",children:t})]})]})]})})})},m=n(66),g=n(63),p=n(61),f=function(e){var t=e.addTodo,n=Object(c.useState)(""),a=Object(i.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(""),j=Object(i.a)(o,2),d=j[0],l=j[1],b=Object(c.useState)(!1),h=Object(i.a)(b,2),x=h[0],O=h[1];return Object(u.jsxs)("div",{className:"home",children:[x&&Object(u.jsx)(m.a,{variant:"success",children:Object(u.jsx)(m.a.Heading,{as:"h5",children:"Your Todo Add Now.\u2764"})}),Object(u.jsx)("h1",{className:"text-center",children:"Add Todo"}),Object(u.jsxs)(g.a,{onSubmit:function(e){return function(e){e.preventDefault(),""!==s&&""!==d&&(t({id:Math.floor(100*Math.random()),heading:s,text:d}),l(""),r(""),O(!0),setTimeout((function(){O(!1)}),2e3))}(e)},children:[Object(u.jsxs)(g.a.Group,{children:[Object(u.jsx)(g.a.Label,{children:"Heading"}),Object(u.jsx)(g.a.Control,{type:"text",placeholder:"Inter Your Todo Heading",name:"heading",onChange:function(e){return r(e.target.value)},value:s})]}),Object(u.jsxs)(g.a.Group,{children:[Object(u.jsx)(g.a.Label,{children:"Text"}),Object(u.jsx)(g.a.Control,{name:"text",placeholder:"Inter Your Todo Text",onChange:function(e){return l(e.target.value)},value:d,as:"textarea"})]}),Object(u.jsx)(p.a,{variant:"primary",type:"submit",children:"Add Todo"})]})]})},v=function(e){var t=e.todos,n=window.location.pathname;n=n.split("/");var a=t&&t.find((function(e){return e.id===Number(n[1])}));return Object(u.jsx)(c.Fragment,{children:a?Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("h1",{className:"text-center",children:a&&a.heading}),Object(u.jsx)("p",{className:"pt-4",children:a&&a.text})]}):Object(u.jsx)("h2",{className:"text-center pt-5",children:"Todos dose not found"})})},N=n(62),T=n(42),k=n(67),L=function(e){var t=e.todo;return Object(u.jsx)(T.a,{sm:3,children:Object(u.jsxs)(k.a,{as:j.b,to:"/".concat(t.id),children:[Object(u.jsx)(k.a.Header,{className:"text-black text-bold",children:Object(u.jsx)("h5",{children:t.heading})}),Object(u.jsx)(k.a.Body,{children:t.text.length>50?Object(u.jsxs)(c.Fragment,{children:[t.text.slice(0,50)," ..."]}):t.text})]})})},w=function(e){var t=e.todos;return Object(u.jsxs)(b.a,{children:[Object(u.jsx)("h1",{className:"text-center",children:"Todo List"}),0!==t.length?Object(u.jsx)(N.a,{children:t.map((function(e){return Object(u.jsx)(L,{todo:e},e.id)}))}):Object(u.jsx)("h4",{className:"text-center pt-4",children:"No more todos ..."})]})},S=function(){return Object(u.jsx)("div",{className:"position-absolute bottom-0 footer text-black fs-4",children:Object(u.jsxs)("p",{children:["Created by"," ",Object(u.jsxs)("a",{href:"https://github.com/sabujhasansarker",target:"_blank",children:["Sabuj Hasan Sarker ",Object(u.jsx)("span",{style:{color:"red"},children:"\u2764"})]})]})})};var y=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(j.a,{children:[Object(u.jsx)(O,{todoLength:n.length}),Object(u.jsxs)(b.a,{className:"pt-5",style:{minHeight:window.screen.height-150},children:[Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(u.jsx)(f,{addTodo:function(e){return function(e){return a([].concat(Object(o.a)(n),[e]))}(e)}})}}),Object(u.jsx)(d.a,{exact:!0,path:"/todos",render:function(){return Object(u.jsx)(w,{todos:n})}}),Object(u.jsx)(d.a,{exact:!0,path:"/:id",render:function(){return Object(u.jsx)(v,{todos:n})}})]}),Object(u.jsx)(S,{})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),C()}},[[57,1,2]]]);
//# sourceMappingURL=main.1728133c.chunk.js.map