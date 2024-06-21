import{r as s,Q as Y,a4 as I,j as S,a5 as J,_ as w,C as $,D as X,s as z,P as Z,a6 as ee,I as K,w as F,x as ne,A as q,G,R as Q}from"./index-CVHsgGyL.js";import{e as N,u as oe}from"./mergeSlotProps-CCCx748f.js";import{b as D,c as te}from"./Modal-D9nivw5Y.js";import{G as re}from"./TextField-C-8Xz9mF.js";function W(e){return e.substring(2).toLowerCase()}function se(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function ie(e){const{children:n,disableReactTree:t=!1,mouseEvent:o="onClick",onClickAway:d,touchEvent:c="onTouchEnd"}=e,u=s.useRef(!1),f=s.useRef(null),a=s.useRef(!1),l=s.useRef(!1);s.useEffect(()=>(setTimeout(()=>{a.current=!0},0),()=>{a.current=!1}),[]);const h=Y(n.ref,f),m=I(v=>{const p=l.current;l.current=!1;const b=D(f.current);if(!a.current||!f.current||"clientX"in v&&se(v,b))return;if(u.current){u.current=!1;return}let r;v.composedPath?r=v.composedPath().indexOf(f.current)>-1:r=!b.documentElement.contains(v.target)||f.current.contains(v.target),!r&&(t||!p)&&d(v)}),y=v=>p=>{l.current=!0;const b=n.props[v];b&&b(p)},C={ref:h};return c!==!1&&(C[c]=y(c)),s.useEffect(()=>{if(c!==!1){const v=W(c),p=D(f.current),b=()=>{u.current=!0};return p.addEventListener(v,m),p.addEventListener("touchmove",b),()=>{p.removeEventListener(v,m),p.removeEventListener("touchmove",b)}}},[m,c]),o!==!1&&(C[o]=y(o)),s.useEffect(()=>{if(o!==!1){const v=W(o),p=D(f.current);return p.addEventListener(v,m),()=>{p.removeEventListener(v,m)}}},[m,o]),S.jsx(s.Fragment,{children:s.cloneElement(n,C)})}function ae(e={}){const{autoHideDuration:n=null,disableWindowBlurListener:t=!1,onClose:o,open:d,resumeHideDuration:c}=e,u=J();s.useEffect(()=>{if(!d)return;function r(i){i.defaultPrevented||(i.key==="Escape"||i.key==="Esc")&&(o==null||o(i,"escapeKeyDown"))}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[d,o]);const f=I((r,i)=>{o==null||o(r,i)}),a=I(r=>{!o||r==null||u.start(r,()=>{f(null,"timeout")})});s.useEffect(()=>(d&&a(n),u.clear),[d,n,a,u]);const l=r=>{o==null||o(r,"clickaway")},h=u.clear,m=s.useCallback(()=>{n!=null&&a(c??n*.5)},[n,c,a]),y=r=>i=>{const g=r.onBlur;g==null||g(i),m()},C=r=>i=>{const g=r.onFocus;g==null||g(i),h()},v=r=>i=>{const g=r.onMouseEnter;g==null||g(i),h()},p=r=>i=>{const g=r.onMouseLeave;g==null||g(i),m()};return s.useEffect(()=>{if(!t&&d)return window.addEventListener("focus",m),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",h)}},[t,d,m,h]),{getRootProps:(r={})=>{const i=w({},N(e),N(r));return w({role:"presentation"},r,i,{onBlur:y(i),onFocus:C(i),onMouseEnter:v(i),onMouseLeave:p(i)})},onClickAway:l}}function ce(e){return $("MuiSnackbarContent",e)}X("MuiSnackbarContent",["root","message","action"]);const le=["action","className","message","role"],ue=e=>{const{classes:n}=e;return q({root:["root"],action:["action"],message:["message"]},ce,n)},de=z(Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{const n=e.palette.mode==="light"?.8:.98,t=ee(e.palette.background.default,n);return w({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(t),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:t,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),fe=z("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),ve=z("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),pe=s.forwardRef(function(n,t){const o=K({props:n,name:"MuiSnackbarContent"}),{action:d,className:c,message:u,role:f="alert"}=o,a=F(o,le),l=o,h=ue(l);return S.jsxs(de,w({role:f,square:!0,elevation:6,className:ne(h.root,c),ownerState:l,ref:t},a,{children:[S.jsx(fe,{className:h.message,ownerState:l,children:u}),d?S.jsx(ve,{className:h.action,ownerState:l,children:d}):null]}))});function ge(e){return $("MuiSnackbar",e)}X("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const me=["onEnter","onExited"],he=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],be=e=>{const{classes:n,anchorOrigin:t}=e,o={root:["root",`anchorOrigin${G(t.vertical)}${G(t.horizontal)}`]};return q(o,ge,n)},U=z("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`anchorOrigin${G(t.anchorOrigin.vertical)}${G(t.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>{const t={left:"50%",right:"auto",transform:"translateX(-50%)"};return w({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},n.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},n.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},n.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:w({},n.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},n.anchorOrigin.horizontal==="center"&&t,n.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},n.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Re=s.forwardRef(function(n,t){const o=K({props:n,name:"MuiSnackbar"}),d=oe(),c={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{action:u,anchorOrigin:{vertical:f,horizontal:a}={vertical:"bottom",horizontal:"left"},autoHideDuration:l=null,children:h,className:m,ClickAwayListenerProps:y,ContentProps:C,disableWindowBlurListener:v=!1,message:p,open:b,TransitionComponent:r=re,transitionDuration:i=c,TransitionProps:{onEnter:g,onExited:M}={}}=o,O=F(o.TransitionProps,me),P=F(o,he),L=w({},o,{anchorOrigin:{vertical:f,horizontal:a},autoHideDuration:l,disableWindowBlurListener:v,TransitionComponent:r,transitionDuration:i}),_=be(L),{getRootProps:T,onClickAway:A}=ae(w({},L)),[j,R]=s.useState(!0),H=te({elementType:U,getSlotProps:T,externalForwardedProps:P,ownerState:L,additionalProps:{ref:t},className:[_.root,m]}),E=x=>{R(!0),M&&M(x)},k=(x,B)=>{R(!1),g&&g(x,B)};return!b&&j?null:S.jsx(ie,w({onClickAway:A},y,{children:S.jsx(U,w({},H,{children:S.jsx(r,w({appear:!0,in:b,timeout:i,direction:f==="top"?"down":"up",onEnter:k,onExited:E},O,{children:h||S.jsx(pe,w({message:p,action:u},C))}))}))}))});function Ce(e={}){const{nonce:n,onScriptLoadSuccess:t,onScriptLoadError:o}=e,[d,c]=s.useState(!1),u=s.useRef(t);u.current=t;const f=s.useRef(o);return f.current=o,s.useEffect(()=>{const a=document.createElement("script");return a.src="https://accounts.google.com/gsi/client",a.async=!0,a.defer=!0,a.nonce=n,a.onload=()=>{var l;c(!0),(l=u.current)===null||l===void 0||l.call(u)},a.onerror=()=>{var l;c(!1),(l=f.current)===null||l===void 0||l.call(f)},document.body.appendChild(a),()=>{document.body.removeChild(a)}},[n]),d}const V=s.createContext(null);function Me({clientId:e,nonce:n,onScriptLoadSuccess:t,onScriptLoadError:o,children:d}){const c=Ce({nonce:n,onScriptLoadSuccess:t,onScriptLoadError:o}),u=s.useMemo(()=>({clientId:e,scriptLoadedSuccessfully:c}),[e,c]);return Q.createElement(V.Provider,{value:u},d)}function we(){const e=s.useContext(V);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function Ee(e){var n;return(n=e==null?void 0:e.clientId)!==null&&n!==void 0?n:e==null?void 0:e.client_id}const ke={large:40,medium:32,small:20};function Oe({onSuccess:e,onError:n,useOneTap:t,promptMomentNotification:o,type:d="standard",theme:c="outline",size:u="large",text:f,shape:a,logo_alignment:l,width:h,locale:m,click_listener:y,containerProps:C,...v}){const p=s.useRef(null),{clientId:b,scriptLoadedSuccessfully:r}=we(),i=s.useRef(e);i.current=e;const g=s.useRef(n);g.current=n;const M=s.useRef(o);return M.current=o,s.useEffect(()=>{var O,P,L,_,T,A,j,R,H;if(r)return(L=(P=(O=window==null?void 0:window.google)===null||O===void 0?void 0:O.accounts)===null||P===void 0?void 0:P.id)===null||L===void 0||L.initialize({client_id:b,callback:E=>{var k;if(!(E!=null&&E.credential))return(k=g.current)===null||k===void 0?void 0:k.call(g);const{credential:x,select_by:B}=E;i.current({credential:x,clientId:Ee(E),select_by:B})},...v}),(A=(T=(_=window==null?void 0:window.google)===null||_===void 0?void 0:_.accounts)===null||T===void 0?void 0:T.id)===null||A===void 0||A.renderButton(p.current,{type:d,theme:c,size:u,text:f,shape:a,logo_alignment:l,width:h,locale:m,click_listener:y}),t&&((H=(R=(j=window==null?void 0:window.google)===null||j===void 0?void 0:j.accounts)===null||R===void 0?void 0:R.id)===null||H===void 0||H.prompt(M.current)),()=>{var E,k,x;t&&((x=(k=(E=window==null?void 0:window.google)===null||E===void 0?void 0:E.accounts)===null||k===void 0?void 0:k.id)===null||x===void 0||x.cancel())}},[b,r,t,d,c,u,f,a,l,h,m]),Q.createElement("div",{...C,ref:p,style:{height:ke[u],...C==null?void 0:C.style}})}export{Me as G,Re as S,Oe as a};
