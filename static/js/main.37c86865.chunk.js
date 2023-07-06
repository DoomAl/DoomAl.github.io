(this["webpackJsonpcypress-react-test"]=this["webpackJsonpcypress-react-test"]||[]).push([[0],{178:function(e,t,c){},179:function(e,t,c){"use strict";c.r(t);var i=c(0),r=c(64),n=c.n(r),s=c(5),a=c(7),o=c(17),l=c(2),j=c(8),b=c(30),u=c(18),d=c(1),h=u.c().shape({activities:u.a().min(1,"No activity can lead to health problems")});function m(e){var t,c=e.state,i=e.setState,r=Object(j.c)({resolver:Object(b.a)(h)}),n=r.register,s=r.handleSubmit,u=r.errors,m=[{id:"0",title:"Kayak webshop",sectorName:"e-commerce"},{id:"1",title:"Electronics webshop",sectorName:"e-commerce"},{id:"2",title:"Flowers webshop",sectorName:"e-commerce"},{id:"3",title:"Software development",sectorName:"IT"},{id:"4",title:"UX design",sectorName:"IT"},{id:"5",title:"IT consultancy",sectorName:"IT"}],v=Object(a.c)(),p=Object(l.a)(new Set(m.map((function(e){return e.sectorName})))),O=function(e){return!!c.activities.find((function(t){return t.id===e}))};return Object(d.jsxs)("form",{onSubmit:s((function(e){var t=m.filter((function(t){var c=t.id;return e.activities.includes(c)}));i(Object(o.a)(Object(o.a)({},c),{},{activities:t})),v("/inventory")})),children:[Object(d.jsx)("h1",{children:"Which activities do you want to insure?"}),Object(d.jsx)("h2",{children:"Select the activities of your company."}),Object(d.jsxs)("div",{className:"wrapper",children:[p.map((function(e){return Object(d.jsxs)("div",{className:"sectorWrapper",children:[Object(d.jsx)("h3",{children:e}),m.filter((function(t){return t.sectorName===e})).map((function(e){var t=e.id,c=e.title;return Object(d.jsxs)("label",{className:"checkbox",children:[Object(d.jsx)("input",{type:"checkbox",name:"activities",value:t,ref:n,defaultChecked:O(t)}),c]},t)}))]},e)})),(null===u||void 0===u?void 0:u.activities)&&Object(d.jsx)("div",{className:"error-message",children:null===u||void 0===u||null===(t=u.activities)||void 0===t?void 0:t.message}),Object(d.jsx)("button",{type:"submit",children:"Next page"})]})]})}function v(e){var t=Object(a.c)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Hurray! This is Checkout page!"}),Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("iframe",{title:"Checkout kitty",src:"https://giphy.com/embed/aNqEFrYVnsS52",width:"480",height:"270",frameBorder:"0",className:"giphy-embed",allowFullScreen:!0}),Object(d.jsx)("button",{type:"button",onClick:function(){t("/inventory")},children:"Go back"})]})]})}function p(e){var t=Object(a.c)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"This is HighCare page!"}),Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("iframe",{title:"HighCare kitty",src:"https://giphy.com/embed/VbnUQpnihPSIgIXuZv",width:"384",height:"480",frameBorder:"0",className:"giphy-embed",allowFullScreen:!0}),Object(d.jsx)("button",{type:"button",onClick:function(){t("/inventory")},children:"Go back"})]})]})}var O=u.c().shape({inventory:u.b().min(1e3,"You need to have more stuff to run your business").max(1e7,"Whoah, Scrooge McDuck")}),f=2e6,x=5e5;function y(e){var t,c=e.state,r=e.setState,n=Object(i.useState)(!1),l=Object(s.a)(n,2),u=l[0],h=l[1],m=Object(j.c)({resolver:Object(b.a)(O)}),v=m.register,p=m.handleSubmit,y=m.watch,g=m.errors,N=Object(a.c)(),k=y("inventory");return Object(i.useEffect)((function(){var e=c.activities.length>4,t=c.activities.find((function(e){return"e-commerce"===e.sectorName})),i=c.activities.find((function(e){return"IT"===e.sectorName})),r=f;i&&(r=x),t&&i&&(r=25e5),h(e||Number(k)>r)}),[c,k]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:p((function(e){r(Object(o.a)(Object(o.a)({},c),{},{inventory:e.inventory})),N(u?"/highcare":"/checkout")})),children:[Object(d.jsx)("h1",{children:"Inventory and goods"}),Object(d.jsx)("h2",{children:"Enter estimated value of your inventory"}),Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("label",{children:"Total value of goods"}),Object(d.jsx)("input",{type:"number",name:"inventory",ref:v,defaultValue:c.inventory,placeholder:"0"})]}),(null===g||void 0===g?void 0:g.inventory)&&Object(d.jsx)("div",{className:"error-message",children:null===g||void 0===g||null===(t=g.inventory)||void 0===t?void 0:t.message}),Object(d.jsx)("button",{type:"button",onClick:function(){N("/activity")},children:"Go back"}),Object(d.jsx)("button",{type:"submit",children:"Next page"})]})]})})}c(178);function g(){var e=Object(i.useState)({activities:[],inventory:void 0}),t=Object(s.a)(e,2),c=t[0],r=t[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(a.a,{children:function(e){var t=e.location;return Object(d.jsxs)(a.b,{location:t,basepath:"/",children:[Object(d.jsx)(m,{path:"/activity",state:c,setState:r,default:!0}),Object(d.jsx)(y,{path:"/inventory",state:c,setState:r}),Object(d.jsx)(v,{path:"/checkout"}),Object(d.jsx)(p,{path:"/highcare"})]})}})})}var N=document.getElementById("root");n.a.render(Object(d.jsx)(i.StrictMode,{children:Object(d.jsx)(g,{})}),N)}},[[179,1,2]]]);
//# sourceMappingURL=main.37c86865.chunk.js.map