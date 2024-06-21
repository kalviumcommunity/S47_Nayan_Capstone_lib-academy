import{P as w,e as j,B as b,b as v,a as C,r as c,j as r,d as k,a2 as E,f as B}from"./index-CVHsgGyL.js";import{G,a as L,S as A}from"./index.esm--ddRR-Sx.js";import{s as i}from"./styled-CpWpjGkL.js";import{C as F}from"./Container-CksAh_Oz.js";import{T as p}from"./TextField-C-8Xz9mF.js";import{A as I}from"./Alert-6Ca_5wWL.js";import"./mergeSlotProps-CCCx748f.js";import"./Modal-D9nivw5Y.js";import"./useFormControl-D_L_ZpmW.js";import"./createSvgIcon-CRBgYmHc.js";const T="https://s47-nayan-capstone-libacademy.onrender.com/api",P="963011057711-md4pthsv1vv72dport7bp2pgg11rlj8t.apps.googleusercontent.com",D=i(w)(({theme:e})=>({padding:e.spacing(4),marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:e.palette.background.default,boxShadow:e.shadows[5]})),W=i("form")(({theme:e})=>({width:"100%",marginTop:e.spacing(1)})),O=i(j)(({theme:e})=>({margin:e.spacing(3,0,2),background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:e.palette.common.white})),V=i(b)(({theme:e})=>({marginTop:e.spacing(2),width:"100%",display:"flex",justifyContent:"center"})),K=()=>{const e=v(),d=C(),[l,u]=c.useState({email:"",password:""}),[m,n]=c.useState(!1),[h,s]=c.useState(""),g=a=>{const{name:o,value:t}=a.target;u(S=>({...S,[o]:t}))},f=a=>{a.preventDefault();const o=a.target;if(o.checkValidity()===!1){o.reportValidity();return}e(E(l)).then(t=>{t.type==="learner/login/fulfilled"?(d("/learner/"),window.location.reload()):t.type==="learner/login/rejected"&&(s(t.payload),n(!0))}).catch(t=>{console.error("Error logging in:",t),s("An error occurred while logging in."),n(!0)})},x=async a=>{try{const o=await B.post(`${T}/learners/login/google`,{credential:a.credential});localStorage.setItem("token",o.data.token),localStorage.setItem("learnerData",JSON.stringify(o.data.learner)),d("/learner/"),window.location.reload()}catch(o){console.error("Error logging in:",o),s(o.response.data.message),n(!0)}},y=a=>{console.error("Google Sign-In error:",a),s("An error occurred during Google Sign-In."),n(!0)};return r.jsxs(F,{component:"main",maxWidth:"xs",children:[r.jsxs(D,{children:[r.jsx(k,{component:"h1",variant:"h5",children:"Learner Login"}),r.jsxs(W,{onSubmit:f,noValidate:!0,children:[r.jsx(p,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",type:"email",autoComplete:"email",autoFocus:!0,value:l.email,onChange:g}),r.jsx(p,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:l.password,onChange:g}),r.jsx(O,{type:"submit",fullWidth:!0,variant:"contained",children:"Login"})]}),r.jsx(V,{children:r.jsx(G,{clientId:P,children:r.jsx(L,{onSuccess:x,onFailure:y,scope:"profile email"})})})]}),r.jsx(A,{open:m,autoHideDuration:6e3,onClose:()=>n(!1),children:r.jsx(I,{onClose:()=>n(!1),severity:"error",sx:{width:"100%"},children:h})})]})};export{K as default};
