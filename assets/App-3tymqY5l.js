import{j as s,r as c}from"./index-DDk4manS.js";import{c as l,b as d,u as n,a as x}from"./useProduct-DTJcxB2i.js";const m=a=>{const{name:e,category:i,price:r,inStock:t}=a;return s.jsxs("div",{className:"flex flex-wrap bg-white pa2 mv1 ba b--black-10",children:[s.jsx("div",{className:"w-25 pa2",children:e}),s.jsx("div",{className:"w-25 pa2",children:l[i]}),s.jsxs("div",{className:"w-25 pa2",children:["$",r]}),s.jsx("div",{className:"w-25 pa2",children:t?"是":"否"})]})},o=a=>{const{items:e}=a;return s.jsxs("div",{className:"pa3",children:[s.jsxs("div",{className:"flex flex-wrap bg-light-gray pa2 mb1",children:[s.jsx("div",{className:"w-25 pa2 fw6",children:"商品名稱"}),s.jsx("div",{className:"w-25 pa2 fw6",children:"類別"}),s.jsx("div",{className:"w-25 pa2 fw6",children:"價格"}),s.jsx("div",{className:"w-25 pa2 fw6",children:"庫存"})]}),s.jsx(d,{height:620,itemCount:e.length,itemSize:63,width:"100%",children:({index:i,style:r})=>{const t=e[i];return s.jsx("div",{style:r,children:s.jsx(m,{...t})})}})]})},p=()=>{const[a,e]=c.useState({}),i=n({filters:a});return s.jsxs("div",{className:"flex flex-wrap pa4 bg-near-white min-vh-100",children:[s.jsx("div",{className:"pr4",style:{width:"400px"},children:s.jsx(x,{onSubmit:r=>e(r)})}),s.jsx("div",{className:"flex-grow-1",children:s.jsx(o,{items:i})})]})},w=()=>s.jsx("div",{children:s.jsx(p,{})});export{w as default};