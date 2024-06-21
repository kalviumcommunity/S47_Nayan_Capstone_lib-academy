import{P,B as E,a as N,u as k,b as G,r as u,e as F,j as e,T as x,f as B,c as T}from"./index-f7-2eSJk.js";import{G as D,a as I,S as R}from"./index.esm-JbGSsOFe.js";import{s as m}from"./styled-Cry4a1KF.js";import{C as W}from"./Container-CUuuXKaa.js";import{T as d}from"./TextField-B4aAAyhF.js";import{A}from"./Alert-CQZzBUb_.js";import"./Modal-DyP9q9P1.js";import"./useFormControl-N2H_Ek8d.js";import"./IconButton-5JQqtBZk.js";const L="https://s47-nayan-capstone-libacademy-7yf9.onrender.com/api",q="963011057711-md4pthsv1vv72dport7bp2pgg11rlj8t.apps.googleusercontent.com",O=m(P)(({theme:a})=>({padding:a.spacing(4),marginTop:a.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:a.palette.background.default,boxShadow:a.shadows[5]})),V=m("form")(({theme:a})=>({width:"100%",marginTop:a.spacing(1)})),H=m(E)(({theme:a})=>({margin:a.spacing(3,0,2),background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:a.palette.common.white})),J=m(N)(({theme:a})=>({marginTop:a.spacing(2),width:"100%",display:"flex",justifyContent:"center"})),Z=()=>{const a=k(),g=G(),[t,w]=u.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),{status:p,error:y}=F(r=>r.learner),[b,n]=u.useState(""),[v,s]=u.useState(!1),i=r=>{w({...t,[r.target.name]:r.target.value})},S=r=>{r.preventDefault();const c=r.target;if(c.checkValidity()===!1){c.reportValidity();return}if(t.password!==t.confirmPassword){n("Passwords do not match"),s(!0);return}a(B(t)).then(o=>{o.type==="learner/register/fulfilled"?g("/learner/"):o.type==="learner/register/rejected"&&(n(o.payload),s(!0))}).catch(o=>{console.error("Error registering learner:",o),n(o.message||"Registration failed"),s(!0)})},j=async r=>{var o,h;const{credential:c}=r;try{const l=await T.post(`${L}/learners/register/google`,{credential:c});localStorage.setItem("token",l.data.token),localStorage.setItem("learnerData",JSON.stringify(l.data.learner)),g("/learner/"),window.location.reload()}catch(l){console.error("Error registering with Google OAuth:",l),n(((h=(o=l.response)==null?void 0:o.data)==null?void 0:h.message)||"Google registration failed"),s(!0)}},C=r=>{console.error("Google Sign-In Error:",r),n("Google Sign-In failed"),s(!0)},f=()=>{s(!1)};return e.jsxs(W,{component:"main",maxWidth:"xs",children:[e.jsxs(O,{children:[e.jsx(x,{component:"h1",variant:"h5",children:"Register as a Learner"}),p==="failed"&&e.jsx(x,{color:"error",variant:"body2",align:"center",children:y}),e.jsxs(V,{onSubmit:S,noValidate:!0,children:[e.jsx(d,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"firstName",label:"First Name",name:"firstName",type:"text",autoComplete:"fname",autoFocus:!0,value:t.firstName,onChange:i}),e.jsx(d,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",type:"text",autoComplete:"lname",value:t.lastName,onChange:i}),e.jsx(d,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",type:"email",autoComplete:"email",value:t.email,onChange:i}),e.jsx(d,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:t.password,onChange:i}),e.jsx(d,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",autoComplete:"current-password",value:t.confirmPassword,onChange:i}),e.jsx(H,{type:"submit",fullWidth:!0,variant:"contained",disabled:p==="loading",children:"Register"})]}),e.jsx(J,{children:e.jsx(D,{clientId:q,children:e.jsx(I,{onSuccess:j,onFailure:C,scope:"profile email"})})})]}),e.jsx(R,{open:v,autoHideDuration:6e3,onClose:f,children:e.jsx(A,{onClose:f,severity:"error",sx:{width:"100%"},children:b})})]})};export{Z as default};
