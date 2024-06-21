import{J as le,_ as p,K as Z,L as H,M as de,N as ue,O as pe,r as m,Q as me,p as E,j as t,q as O,S as fe,U as ee,v as U,k as G,m as V,s as $,A as he,C as oe,w as I,D as ge,o as q,T,u as se,e as D,b as Ce,V as be,B as Y,P as xe,W as ve,F as ke}from"./index-CMhKlQ9x.js";import{C as ye}from"./CourseCard-BRvgsReI.js";import{s as x}from"./styled-Juhbs2Pg.js";import{u as J,f as te}from"./useFormControl-D9fy2Jgo.js";import{b as Fe,c as K}from"./Modal-BEHYS6tq.js";import"./Card-BPAXoQRh.js";import"./Rating-B4WteD8O.js";import"./Grid-Di95imu8.js";const Pe=["component","direction","spacing","divider","children","className","useFlexGap"],je=le(),Be=x("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function Re(e){return fe({props:e,name:"MuiStack",defaultTheme:je})}function we(e,o){const s=m.Children.toArray(e).filter(Boolean);return s.reduce((r,i,n)=>(r.push(i),n<s.length-1&&r.push(m.cloneElement(o,{key:`separator-${n}`})),r),[])}const Se=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],_e=({ownerState:e,theme:o})=>{let s=p({display:"flex",flexDirection:"column"},Z({theme:o},H({values:e.direction,breakpoints:o.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=de(o),i=Object.keys(o.breakpoints.values).reduce((l,c)=>((typeof e.spacing=="object"&&e.spacing[c]!=null||typeof e.direction=="object"&&e.direction[c]!=null)&&(l[c]=!0),l),{}),n=H({values:e.direction,base:i}),u=H({values:e.spacing,base:i});typeof n=="object"&&Object.keys(n).forEach((l,c,g)=>{if(!n[l]){const h=c>0?n[g[c-1]]:"column";n[l]=h}}),s=ue(s,Z({theme:o},u,(l,c)=>e.useFlexGap?{gap:ee(r,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Se(c?n[c]:e.direction)}`]:ee(r,l)}}))}return s=pe(o.breakpoints,s),s};function Ie(e={}){const{createStyledComponent:o=Be,useThemeProps:s=Re,componentName:r="MuiStack"}=e,i=()=>U({root:["root"]},l=>G(r,l),{}),n=o(_e);return m.forwardRef(function(l,c){const g=s(l),y=me(g),{component:h="div",direction:F="column",spacing:B=0,divider:v,children:C,className:b,useFlexGap:a=!1}=y,f=E(y,Pe),k={direction:F,spacing:B,useFlexGap:a},P=i();return t.jsx(n,p({as:h,ownerState:k,ref:c,className:O(P.root,b)},f,{children:v?we(C,v):C}))})}function $e(e){return G("PrivateSwitchBase",e)}V("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Le=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Ne=e=>{const{classes:o,checked:s,disabled:r,edge:i}=e,n={root:["root",s&&"checked",r&&"disabled",i&&`edge${I(i)}`],input:["input"]};return U(n,$e,o)},Oe=$(he)(({ownerState:e})=>p({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Me=$("input",{shouldForwardProp:oe})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ze=m.forwardRef(function(o,s){const{autoFocus:r,checked:i,checkedIcon:n,className:u,defaultChecked:d,disabled:l,disableFocusRipple:c=!1,edge:g=!1,icon:y,id:h,inputProps:F,inputRef:B,name:v,onBlur:C,onChange:b,onFocus:a,readOnly:f,required:k=!1,tabIndex:P,type:j,value:L}=o,w=E(o,Le),[_,re]=Fe({controlled:i,default:!!d,name:"SwitchBase",state:"checked"}),S=J(),ne=R=>{a&&a(R),S&&S.onFocus&&S.onFocus(R)},ae=R=>{C&&C(R),S&&S.onBlur&&S.onBlur(R)},ie=R=>{if(R.nativeEvent.defaultPrevented)return;const X=R.target.checked;re(X),b&&b(R,X)};let M=l;S&&typeof M>"u"&&(M=S.disabled);const ce=j==="checkbox"||j==="radio",A=p({},o,{checked:_,disabled:M,disableFocusRipple:c,edge:g}),Q=Ne(A);return t.jsxs(Oe,p({component:"span",className:O(Q.root,u),centerRipple:!0,focusRipple:!c,disabled:M,tabIndex:null,role:void 0,onFocus:ne,onBlur:ae,ownerState:A,ref:s},w,{children:[t.jsx(Me,p({autoFocus:r,checked:i,defaultChecked:d,className:Q.input,disabled:M,id:ce?h:void 0,name:v,onChange:ie,readOnly:f,ref:B,required:k,ownerState:A,tabIndex:P,type:j},j==="checkbox"&&L===void 0?{}:{value:L},F)),_?n:y]}))}),Te=K(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Ee=K(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Ue=K(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ge(e){return G("MuiCheckbox",e)}const W=V("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),De=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ve=e=>{const{classes:o,indeterminate:s,color:r,size:i}=e,n={root:["root",s&&"indeterminate",`color${I(r)}`,`size${I(i)}`]},u=U(n,Ge,o);return p({},o,u)},qe=$(ze,{shouldForwardProp:e=>oe(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.indeterminate&&o.indeterminate,o[`size${I(s.size)}`],s.color!=="default"&&o[`color${I(s.color)}`]]}})(({theme:e,ownerState:o})=>p({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ge(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${W.checked}, &.${W.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${W.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),Ae=t.jsx(Ee,{}),He=t.jsx(Te,{}),We=t.jsx(Ue,{}),Ye=m.forwardRef(function(o,s){var r,i;const n=q({props:o,name:"MuiCheckbox"}),{checkedIcon:u=Ae,color:d="primary",icon:l=He,indeterminate:c=!1,indeterminateIcon:g=We,inputProps:y,size:h="medium",className:F}=n,B=E(n,De),v=c?g:l,C=c?g:u,b=p({},n,{color:d,indeterminate:c,size:h}),a=Ve(b);return t.jsx(qe,p({type:"checkbox",inputProps:p({"data-indeterminate":c},y),icon:m.cloneElement(v,{fontSize:(r=v.props.fontSize)!=null?r:h}),checkedIcon:m.cloneElement(C,{fontSize:(i=C.props.fontSize)!=null?i:h}),ownerState:b,ref:s,className:O(a.root,F)},B,{classes:a}))}),Je=Ie({createStyledComponent:$("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>q({props:e,name:"MuiStack"})});function Ke(e){return G("MuiFormControlLabel",e)}const z=V("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Qe=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Xe=e=>{const{classes:o,disabled:s,labelPlacement:r,error:i,required:n}=e,u={root:["root",s&&"disabled",`labelPlacement${I(r)}`,i&&"error",n&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",i&&"error"]};return U(u,Ke,o)},Ze=$("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${z.label}`]:o.label},o.root,o[`labelPlacement${I(s.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>p({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${z.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${z.label}`]:{[`&.${z.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),eo=$("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${z.error}`]:{color:(e.vars||e).palette.error.main}})),oo=m.forwardRef(function(o,s){var r,i;const n=q({props:o,name:"MuiFormControlLabel"}),{className:u,componentsProps:d={},control:l,disabled:c,disableTypography:g,label:y,labelPlacement:h="end",required:F,slotProps:B={}}=n,v=E(n,Qe),C=J(),b=(r=c??l.props.disabled)!=null?r:C==null?void 0:C.disabled,a=F??l.props.required,f={disabled:b,required:a};["checked","name","onChange","value","inputRef"].forEach(_=>{typeof l.props[_]>"u"&&typeof n[_]<"u"&&(f[_]=n[_])});const k=te({props:n,muiFormControl:C,states:["error"]}),P=p({},n,{disabled:b,labelPlacement:h,required:a,error:k.error}),j=Xe(P),L=(i=B.typography)!=null?i:d.typography;let w=y;return w!=null&&w.type!==T&&!g&&(w=t.jsx(T,p({component:"span"},L,{className:O(j.label,L==null?void 0:L.className),children:w}))),t.jsxs(Ze,p({className:O(j.root,u),ownerState:P,ref:s},v,{children:[m.cloneElement(l,f),a?t.jsxs(Je,{display:"block",children:[w,t.jsxs(eo,{ownerState:P,"aria-hidden":!0,className:j.asterisk,children:[" ","*"]})]}):w]}))});function so(e){return G("MuiFormGroup",e)}V("MuiFormGroup",["root","row","error"]);const to=["className","row"],ro=e=>{const{classes:o,row:s,error:r}=e;return U({root:["root",s&&"row",r&&"error"]},so,o)},no=$("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.row&&o.row]}})(({ownerState:e})=>p({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),ao=m.forwardRef(function(o,s){const r=q({props:o,name:"MuiFormGroup"}),{className:i,row:n=!1}=r,u=E(r,to),d=J(),l=te({props:r,muiFormControl:d,states:["error"]}),c=p({},r,{row:n,error:l.error}),g=ro(c);return t.jsx(no,p({className:O(g.root,i),ownerState:c,ref:s},u))}),io="_coursesContainer_1fwtx_3",co="_searchButton_1fwtx_11",lo="_coursesList_1fwtx_39",uo="_courseCardWrapper_1fwtx_53",po="_errorMessage_1fwtx_67",mo="_retryButton_1fwtx_77",N={coursesContainer:io,searchButton:co,coursesList:lo,courseCardWrapper:uo,errorMessage:po,retryButton:mo},fo=({categories:e})=>{const o=se(),s=D(d=>d.courses.courses),r=D(d=>d.courses.status),i=D(d=>d.courses.error),n=Ce(),u=()=>{o(be(e))};return t.jsxs("div",{className:N.coursesContainer,children:[t.jsx("button",{className:N.searchButton,onClick:u,disabled:r==="loading",children:r==="loading"?"Searching...":"Search"}),r==="loading"&&t.jsx("div",{children:"Loading..."}),r==="succeeded"&&s.length===0&&t.jsx("div",{children:"No courses found"}),r==="succeeded"&&t.jsx("div",{className:N.coursesList,children:s.map(d=>t.jsx("div",{className:N.courseCardWrapper,onClick:()=>n(`/learner/courses/${d._id}`,{state:{course:d}}),children:t.jsx(ye,{course:d})},d._id))}),r==="failed"&&t.jsxs("div",{children:[t.jsx("div",{className:N.errorMessage,children:i}),t.jsx("button",{className:N.retryButton,onClick:u,children:"Retry"})]})]})},ho=x("div")(({theme:e})=>({flexGrow:1,padding:e.spacing(2)})),go=x(T)(({theme:e})=>({marginBottom:e.spacing(2)})),Co=x(Y)(({theme:e})=>({marginBottom:e.spacing(2)})),bo=x(xe)(({theme:e})=>({position:"fixed",top:"70px",left:"25%",width:"300px",maxHeight:"calc(100vh - 100px)",overflowY:"auto",padding:"20px",zIndex:999,marginTop:e.spacing(2)})),xo=x("div")(({theme:e})=>({marginBottom:e.spacing(2)})),vo=x(Y)(({theme:e})=>({marginTop:e.spacing(2)})),ko=x(Y)(({theme:e})=>({width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:e.spacing(1,2),textTransform:"none",border:`1px solid ${e.palette.divider}`,borderRadius:e.shape.borderRadius,transition:"all 0.3s ease","&:hover":{backgroundColor:e.palette.action.hover,boxShadow:e.shadows[4]},"&:active":{backgroundColor:e.palette.action.selected}})),yo=x(ao)(({theme:e})=>({padding:e.spacing(1),marginTop:e.spacing(1),border:`1px solid ${e.palette.divider}`,borderRadius:e.shape.borderRadius,maxHeight:"150px",overflowY:"auto"})),Fo=x("span")({flexGrow:1}),Po=x("div")(({theme:e})=>({display:"flex",alignItems:"center",marginBottom:e.spacing(.5),padding:e.spacing(.5),borderRadius:e.shape.borderRadius,transition:"background-color 0.3s ease","&:hover":{backgroundColor:e.palette.action.hover}})),jo=x(T)(({theme:e})=>({marginLeft:e.spacing(1),fontSize:"0.875rem"})),Bo=x(Ye)({padding:"4px"}),Oo=()=>{const[e,o]=m.useState([]),[s,r]=m.useState([]),[i,n]=m.useState(!1),u=se(),{learnerData:d,enrolledCourses:l}=D(a=>a.learner),c=d._id,[g,y]=m.useState([{id:"categories",name:"Categories",isOpen:!1},{id:"popular",name:"Popular",isOpen:!1},{id:"trending",name:"Trending",isOpen:!1},{id:"free",name:"Free",isOpen:!1},{id:"paid",name:"Paid",isOpen:!1},{id:"new",name:"New",isOpen:!1},{id:"featured",name:"Featured",isOpen:!1},{id:"topRated",name:"Top Rated",isOpen:!1},{id:"recentlyUpdated",name:"Recently Updated",isOpen:!1}]),h=m.useRef(null);m.useEffect(()=>(F(),document.addEventListener("click",b),()=>{document.removeEventListener("click",b)}),[]),m.useEffect(()=>{Array.isArray(l)&&l.length===0&&u(ve(c))},[]);const F=async()=>{try{const a=await ke();o(a)}catch(a){console.error("Error fetching categories:",a)}},B=a=>{const{id:f,checked:k}=a.target;r(P=>k?[...P,f]:P.filter(j=>j!==f))},v=a=>{a.stopPropagation(),n(!i)},C=a=>{y(f=>f.map(k=>k.id===a?{...k,isOpen:!k.isOpen}:{...k,isOpen:!1}))},b=a=>{h.current&&!h.current.contains(a.target)&&n(!1)};return t.jsx(ho,{children:t.jsxs("div",{children:[t.jsx(go,{variant:"h1",children:"Welcome to LibAcademy, Learner!"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(Co,{onClick:v,variant:"contained",color:"primary",children:"Filter courses"}),i&&t.jsxs(bo,{ref:h,children:[t.jsx(T,{variant:"h2",children:"Filter by"}),g.map(a=>t.jsxs(xo,{children:[t.jsxs(ko,{onClick:()=>C(a.id),variant:"outlined",children:[t.jsx(Fo,{children:a.name}),a.isOpen?"-":"+"]}),a.isOpen&&t.jsx(yo,{children:a.id==="categories"&&e.map(f=>t.jsx(Po,{children:t.jsx(oo,{control:t.jsx(Bo,{id:f._id,checked:s.includes(f._id),onChange:B}),label:t.jsx(jo,{children:f.name})})},f._id))})]},a.id)),t.jsx(vo,{onClick:v,variant:"outlined",children:"Close"})]})]}),t.jsx(fo,{categories:s})]})})};export{Oo as default};
