import{s as i,B as h,b as k,H as v,r as a,j as r,a as m,T as x,c as B}from"./index-CMhKlQ9x.js";import{C as b}from"./CourseReviews-DmXCMLFo.js";import{C as L}from"./Rating-B4WteD8O.js";import{C as E}from"./Container-ODW-pUM5.js";import{A as T}from"./Alert-NbfKCkmU.js";import{G as f}from"./Grid-Di95imu8.js";import{C as $}from"./Card-BPAXoQRh.js";import"./IconButton-BRZ8ioHV.js";import"./Modal-BEHYS6tq.js";import"./TextField-B8tTtmf-.js";import"./useFormControl-D9fy2Jgo.js";import"./styled-Juhbs2Pg.js";const w="http://localhost:3000/api",R=i(h)(({theme:o})=>({marginBottom:o.spacing(2),backgroundColor:o.palette.primary.main,color:o.palette.primary.contrastText,"&:hover":{backgroundColor:o.palette.primary.dark}})),A=i(h)(({theme:o})=>({marginTop:o.spacing(1),backgroundColor:o.palette.secondary.main,color:o.palette.secondary.contrastText,"&:hover":{backgroundColor:o.palette.secondary.dark}})),_=i(L)(({theme:o})=>({backgroundColor:"#205295",color:"#ffffff",borderRadius:"10px","&:hover":{backgroundColor:"#1b3b5f"}}));function J(){var d;const o=k(),{courseId:t}=v(),[g,C]=a.useState([]),[c,l]=a.useState(null);a.useEffect(()=>{(async()=>{var e,p,u;try{const n=await B.get(`${w}/lessons/fetchLessonsByCourseId/${t}`);C(n.data),l(null)}catch(n){console.error("Error fetching lessons:",((e=n.response)==null?void 0:e.data)||n.message),l(((u=(p=n.response)==null?void 0:p.data)==null?void 0:u.message)||"An error occurred while fetching lessons.")}})()},[t]);const j=s=>{o(`/tutor/courses/${t}/lessons/${s}`)},y=(s,e)=>{s.stopPropagation(),o(`/tutor/courses/${t}/lessons/edit/${e}`)};return r.jsxs(m,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",width:"100%"},children:[r.jsxs(E,{sx:{flexGrow:1,paddingTop:"16px",paddingBottom:"16px"},children:[r.jsx(x,{variant:"h4",gutterBottom:!0,children:"Course Lessons"}),r.jsx(m,{sx:{display:"flex",justifyContent:"left",marginBottom:"16px"},children:r.jsx(R,{variant:"contained",onClick:()=>o(`/tutor/courses/${t}/createlesson`),children:"Create Lesson"})}),c&&r.jsx(T,{severity:"error",children:c}),r.jsx(f,{container:!0,spacing:2,children:(d=g.lessons)==null?void 0:d.map(s=>r.jsx(f,{item:!0,xs:12,sm:6,md:4,children:r.jsx($,{sx:{cursor:"pointer",height:"100%",borderRadius:"10px"},onClick:()=>j(s._id),children:r.jsxs(_,{children:[r.jsx(x,{variant:"h6",gutterBottom:!0,children:s.title}),r.jsx(A,{variant:"contained",onClick:e=>y(e,s._id),children:"Edit"})]})})},s._id))})]}),r.jsx(b,{courseId:t})]})}export{J as default};
