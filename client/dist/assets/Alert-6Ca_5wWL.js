import{I as _,w as S,_ as n,Q as D,D as N,C as F,s as I,E as G,G as c,H as O,r as W,j as s,x as U,A as H,P as Q,aa as B,ab as k}from"./index-CVHsgGyL.js";import{r as q,m as J,a as K}from"./mergeSlotProps-CCCx748f.js";import{c as z}from"./createSvgIcon-CRBgYmHc.js";function X(o){return _}const Y=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],oo=["component","slots","slotProps"],eo=["component"];function L(o,t){const{className:r,elementType:e,ownerState:a,externalForwardedProps:i,getSlotOwnerState:d,internalForwardedProps:u}=t,g=S(t,Y),{component:p,slots:v={[o]:void 0},slotProps:m={[o]:void 0}}=i,y=S(i,oo),f=v[o]||e,b=q(m[o],a),x=J(n({className:r},g,{externalForwardedProps:o==="root"?y:void 0,externalSlotProps:b})),{props:{component:P},internalRef:R}=x,$=S(x.props,eo),h=D(R,b==null?void 0:b.ref,t.ref),l=d?d($):{},C=n({},a,l),A=o==="root"?P||p:P,M=K(f,n({},o==="root"&&!p&&!v[o]&&u,o!=="root"&&!v[o]&&u,$,A&&{as:A},{ref:h}),C);return Object.keys(l).forEach(j=>{delete M[j]}),[f,M]}function to(o){return F("MuiAlert",o)}const T=N("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);function ro(o){return F("MuiIconButton",o)}const so=N("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),no=["edge","children","className","color","disabled","disableFocusRipple","size"],ao=o=>{const{classes:t,disabled:r,color:e,edge:a,size:i}=o,d={root:["root",r&&"disabled",e!=="default"&&`color${c(e)}`,a&&`edge${c(a)}`,`size${c(i)}`]};return H(d,ro,t)},lo=I(G,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.root,r.color!=="default"&&t[`color${c(r.color)}`],r.edge&&t[`edge${c(r.edge)}`],t[`size${c(r.size)}`]]}})(({theme:o,ownerState:t})=>n({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:O(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:o,ownerState:t})=>{var r;const e=(r=(o.vars||o).palette)==null?void 0:r[t.color];return n({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&n({color:e==null?void 0:e.main},!t.disableRipple&&{"&:hover":n({},e&&{backgroundColor:o.vars?`rgba(${e.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:O(e.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${so.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),io=W.forwardRef(function(t,r){const e=_({props:t,name:"MuiIconButton"}),{edge:a=!1,children:i,className:d,color:u="default",disabled:g=!1,disableFocusRipple:p=!1,size:v="medium"}=e,m=S(e,no),y=n({},e,{edge:a,color:u,disabled:g,disableFocusRipple:p,size:v}),f=ao(y);return s.jsx(lo,n({className:U(f.root,d),centerRipple:!0,focusRipple:!p,disabled:g,ref:r},m,{ownerState:y,children:i}))}),co=z(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),po=z(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),uo=z(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),go=z(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),vo=z(s.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),fo=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],xo=X(),Co=o=>{const{variant:t,color:r,severity:e,classes:a}=o,i={root:["root",`color${c(r||e)}`,`${t}${c(r||e)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return H(i,to,a)},mo=I(Q,{name:"MuiAlert",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.root,t[r.variant],t[`${r.variant}${c(r.color||r.severity)}`]]}})(({theme:o})=>{const t=o.palette.mode==="light"?B:k,r=o.palette.mode==="light"?k:B;return n({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(o.palette).filter(([,e])=>e.main&&e.light).map(([e])=>({props:{colorSeverity:e,variant:"standard"},style:{color:o.vars?o.vars.palette.Alert[`${e}Color`]:t(o.palette[e].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${e}StandardBg`]:r(o.palette[e].light,.9),[`& .${T.icon}`]:o.vars?{color:o.vars.palette.Alert[`${e}IconColor`]}:{color:o.palette[e].main}}})),...Object.entries(o.palette).filter(([,e])=>e.main&&e.light).map(([e])=>({props:{colorSeverity:e,variant:"outlined"},style:{color:o.vars?o.vars.palette.Alert[`${e}Color`]:t(o.palette[e].light,.6),border:`1px solid ${(o.vars||o).palette[e].light}`,[`& .${T.icon}`]:o.vars?{color:o.vars.palette.Alert[`${e}IconColor`]}:{color:o.palette[e].main}}})),...Object.entries(o.palette).filter(([,e])=>e.main&&e.dark).map(([e])=>({props:{colorSeverity:e,variant:"filled"},style:n({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${e}FilledColor`],backgroundColor:o.vars.palette.Alert[`${e}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[e].dark:o.palette[e].main,color:o.palette.getContrastText(o.palette[e].main)})}))]})}),yo=I("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),bo=I("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),w=I("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),E={success:s.jsx(co,{fontSize:"inherit"}),warning:s.jsx(po,{fontSize:"inherit"}),error:s.jsx(uo,{fontSize:"inherit"}),info:s.jsx(go,{fontSize:"inherit"})},zo=W.forwardRef(function(t,r){const e=xo({props:t,name:"MuiAlert"}),{action:a,children:i,className:d,closeText:u="Close",color:g,components:p={},componentsProps:v={},icon:m,iconMapping:y=E,onClose:f,role:b="alert",severity:x="success",slotProps:P={},slots:R={},variant:$="standard"}=e,h=S(e,fo),l=n({},e,{color:g,severity:x,variant:$,colorSeverity:g||x}),C=Co(l),A={slots:n({closeButton:p.CloseButton,closeIcon:p.CloseIcon},R),slotProps:n({},v,P)},[M,j]=L("closeButton",{elementType:io,externalForwardedProps:A,ownerState:l}),[V,Z]=L("closeIcon",{elementType:vo,externalForwardedProps:A,ownerState:l});return s.jsxs(mo,n({role:b,elevation:0,ownerState:l,className:U(C.root,d),ref:r},h,{children:[m!==!1?s.jsx(yo,{ownerState:l,className:C.icon,children:m||y[x]||E[x]}):null,s.jsx(bo,{ownerState:l,className:C.message,children:i}),a!=null?s.jsx(w,{ownerState:l,className:C.action,children:a}):null,a==null&&f?s.jsx(w,{ownerState:l,className:C.action,children:s.jsx(M,n({size:"small","aria-label":u,title:u,color:"inherit",onClick:f},j,{children:s.jsx(V,n({fontSize:"small"},Z))}))}):null]}))});export{zo as A};
