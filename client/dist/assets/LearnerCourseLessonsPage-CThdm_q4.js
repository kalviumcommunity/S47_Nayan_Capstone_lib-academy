import{a as x,H as f,r as i,j as t,T as s,c as j}from"./index-f7-2eSJk.js";import{s as m}from"./styled-Cry4a1KF.js";import{C as b}from"./Card-BKKX2NPm.js";import{C as L}from"./Container-CUuuXKaa.js";const w=m(x)({position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",width:"100%",backgroundColor:"#000",marginBottom:"20px","& iframe":{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),c=m(b)(({theme:n})=>({backgroundColor:n.palette.background.paper,padding:n.spacing(2),marginBottom:n.spacing(2)})),E=()=>{const{lessonId:n}=f(),[o,h]=i.useState(null),[l,d]=i.useState(null),g="https://s47-nayan-capstone-libacademy-7yf9.onrender.com/api",y="https://s47-nayan-capstone-libacademy-7yf9.onrender.com/";return i.useEffect(()=>{(async()=>{var r,p,u;try{const a=await j.get(`${g}/lessons/fetchLessonById/${n}`);h(a.data.lesson),d(null)}catch(a){console.error("Error fetching lesson:",((r=a.response)==null?void 0:r.data)||a.message),d(((u=(p=a.response)==null?void 0:p.data)==null?void 0:u.message)||"An error occurred while fetching the lesson.")}})()},[n]),l?t.jsx(s,{color:"error",children:l}):o?t.jsxs(L,{children:[t.jsx(w,{children:o.content.media.filter(e=>e.type==="video").map((e,r)=>t.jsx("iframe",{src:`${y}${e.url}`,title:e.alt,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},r))}),t.jsxs(c,{children:[t.jsx(s,{variant:"h4",gutterBottom:!0,children:o.title}),t.jsx(s,{variant:"body1",gutterBottom:!0,children:o.content.text}),t.jsx(s,{variant:"body2",color:"textSecondary",children:o.content.media[0].description}),t.jsxs(s,{variant:"caption",color:"textSecondary",display:"block",gutterBottom:!0,children:["Updated on: ",new Date(o.updatedAt).toLocaleDateString()]})]}),o.content.media.filter(e=>e.type!=="video").map((e,r)=>t.jsxs(c,{children:[e.type==="image"&&t.jsx("img",{src:e.url,alt:e.alt,style:{width:"100%",marginBottom:"10px"}}),e.type==="audio"&&t.jsxs("audio",{controls:!0,children:[t.jsx("source",{src:e.url,type:"audio/mpeg"}),"Your browser does not support the audio element."]}),t.jsx(s,{variant:"body2",children:e.description})]},r)),o.content.embedded&&o.content.embedded.map((e,r)=>t.jsx(c,{dangerouslySetInnerHTML:{__html:e}},r))]}):t.jsx(s,{children:"Loading..."})};export{E as default};
