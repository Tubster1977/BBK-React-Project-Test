(this["webpackJsonpbbk-react-project-proy"]=this["webpackJsonpbbk-react-project-proy"]||[]).push([[0],{21:function(e,t,i){e.exports={form:"NewTaskForm_form__2rWM4",control:"NewTaskForm_control__1RHTi",actions:"NewTaskForm_actions__2S3xn"}},22:function(e,t,i){e.exports={form:"Form_form__cvyS-",control:"Form_control__3ar8e",actions:"Form_actions__3ScoO"}},24:function(e,t,i){e.exports={item:"TaskItem_item__2aCa0",image:"TaskItem_image__1hbWt",content:"TaskItem_content__1j8yX",actions:"TaskItem_actions__2Y_27"}},27:function(e,t,i){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",active:"MainNavigation_active__oN3Ka",badge:"MainNavigation_badge__QYsXO"}},33:function(e,t,i){e.exports={footer:"FooterNavigation_footer__2yppG",logo:"FooterNavigation_logo__3YvY_",active:"FooterNavigation_active__2FrMi"}},37:function(e,t,i){e.exports={card:"Card_card__3_jzl"}},38:function(e,t,i){e.exports={list:"TaskList_list__3v5Oy"}},41:function(e,t,i){e.exports={main:"Layout_main__auk_r"}},48:function(e,t,i){},59:function(e,t,i){"use strict";i.r(t);var a=i(4),s=i(36),c=i.n(s),r=i(14),n=(i(48),i(11)),o=i(43),l=i(18),d=i(37),j=i.n(d),h=i(3);var b=function(e){return Object(h.jsx)("div",{className:j.a.card,children:e.children})},u=i(24),m=i.n(u),g=Object(a.createContext)({priorities:[],totalPriorities:0,addPriority:function(e){},removePriority:function(e){},itemIsPriority:function(e){}});function O(e){var t=Object(a.useState)([]),i=Object(l.a)(t,2),s=i[0],c=i[1];var r={priorities:s,totalPriorities:s.length,addPriority:function(e){c((function(t){return t.concat(e)}))},removePriority:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsPriority:function(e){return s.some((function(t){return t.id===e}))}};return Object(h.jsx)(g.Provider,{value:r,children:e.children})}var x=g;var p=function(e){var t=Object(a.useContext)(x),i=t.itemIsPriority(e.id);return Object(h.jsx)("li",{className:m.a.item,children:Object(h.jsxs)(b,{children:[Object(h.jsx)("div",{className:m.a.image,children:Object(h.jsx)("img",{src:e.image,alt:e.title})}),Object(h.jsxs)("div",{className:m.a.content,children:[Object(h.jsx)("h3",{children:e.title}),Object(h.jsx)("address",{children:e.address}),Object(h.jsx)("p",{children:e.description})]}),Object(h.jsx)("div",{className:m.a.actions,children:Object(h.jsx)("button",{onClick:function(){i?t.removePriority(e.id):t.addPriority({id:e.id,title:e.title,description:e.description,image:e.image,address:e.address})},children:i?"Remove from Priorities":"To Priorities"})})]})})},v=i(38),f=i.n(v);var y=function(e){return Object(h.jsx)("ul",{className:f.a.list,children:e.tasks.map((function(e){return Object(h.jsx)(p,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})};var k=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),i=t[0],s=t[1],c=Object(a.useState)([]),r=Object(l.a)(c,2),n=r[0],d=r[1];return Object(a.useEffect)((function(){s(!0),fetch("https://bbk-react-project-default-rtdb.firebaseio.com/tasks.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var i in e){var a=Object(o.a)({id:i},e[i]);t.push(a)}s(!1),d(t)}))}),[]),i?Object(h.jsx)("section",{children:Object(h.jsx)("p",{children:"Loading..."})}):Object(h.jsxs)("section",{children:[Object(h.jsx)("div",{style:{background:"url('".concat("/Tubster1977.github.io/BBK-React-Project-Test","/images/image 10.jpeg')"),width:"100%",height:"75vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"5px"},children:Object(h.jsx)("h1",{children:"All Tasks Page"})}),Object(h.jsxs)(b,{children:[Object(h.jsx)("h2",{children:"Current Uploaded Tasks"}),Object(h.jsx)("h3",{children:"Can you help?"}),Object(h.jsx)("p",{children:"Bentley Priory Conservation Taskforce, BPCT, are looking for local residents to take stewardship of a site that has been designated an area of special scientific interest."}),Object(h.jsx)("p",{children:"Shown below are tasks recently uploaded and stored on our database. If you would like to get involved, have a read at what is coming up and simply arrive at the recommended times."}),Object(h.jsx)("p",{children:"Whilst this website is publicly open for the time being, we will be monitoring how the site is being used before making it exclusively for the use of registered volunteers"})]}),Object(h.jsx)(y,{tasks:n})]})},w=i(21),N=i.n(w);var P=function(e){var t=Object(a.useRef)(),i=Object(a.useRef)(),s=Object(a.useRef)(),c=Object(a.useRef)();return Object(h.jsx)(b,{children:Object(h.jsxs)("form",{className:N.a.form,onSubmit:function(a){a.preventDefault();var r={title:t.current.value,image:i.current.value,address:s.current.value,description:c.current.value};e.onAddTask(r)},children:[Object(h.jsxs)("div",{className:N.a.control,children:[Object(h.jsx)("label",{htmlFor:"title",children:"Task Title"}),Object(h.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(h.jsxs)("div",{className:N.a.control,children:[Object(h.jsx)("label",{htmlFor:"image",children:"Task Image"}),Object(h.jsx)("input",{type:"url",required:!0,id:"image",ref:i})]}),Object(h.jsxs)("div",{className:N.a.control,children:[Object(h.jsx)("label",{htmlFor:"address",children:"Address"}),Object(h.jsx)("input",{type:"text",required:!0,id:"address",ref:s})]}),Object(h.jsxs)("div",{className:N.a.control,children:[Object(h.jsx)("label",{htmlFor:"description",children:"Description"}),Object(h.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:c})]}),Object(h.jsx)("div",{className:N.a.actions,children:Object(h.jsx)("button",{children:"Add Task"})})]})})};var T=function(){var e=Object(n.f)();return Object(h.jsxs)("section",{children:[Object(h.jsx)("div",{style:{background:"url('".concat("/Tubster1977.github.io/BBK-React-Project-Test","/images/image 10.jpeg')"),width:"100%",height:"75vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"5px"},children:Object(h.jsx)("h1",{children:"New Task Page"})}),Object(h.jsxs)(b,{children:[Object(h.jsx)("h2",{children:"Adding Further Tasks"}),Object(h.jsx)("h3",{children:"Is there anything you have noticed that needs to be done?"}),Object(h.jsx)("p",{children:"At BPCT, we don't always get it right. We therefore rely on our stewards to report on anything of noticeable concern. These are typically around littering, but could also involve the welfare of animals or the condition of key habitats."}),Object(h.jsx)("p",{children:"Please use this section of the website with care and respect and where possible, be clear but succinct. When adding images from external websites, ensure they represent the proposed task and always include the full url. Please also try to include images that are of high quality."}),Object(h.jsx)("p",{children:"PLEASE NOTE: This site is being regularly monitored!"})]}),Object(h.jsx)(P,{onAddTask:function(t){fetch("https://bbk-react-project-default-rtdb.firebaseio.com/tasks.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})};var _=function(){var e,t=Object(a.useContext)(x);return e=0===t.totalPriorities?Object(h.jsx)("p",{children:"You have no tasks on your 'my priorities' page. You might want to start adding some?"}):Object(h.jsx)(y,{tasks:t.priorities}),Object(h.jsxs)("section",{children:[Object(h.jsx)("div",{style:{background:"url('".concat("/Tubster1977.github.io/BBK-React-Project-Test","/images/image 10.jpeg')"),width:"100%",height:"75vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"5px"},children:Object(h.jsx)("h1",{children:"My Priorities"})}),Object(h.jsxs)(b,{children:[Object(h.jsx)("h2",{children:"Prioritising Tasks"}),Object(h.jsx)("h3",{children:"Is there anything from the All Tasks Page that you can contribute towards?"}),Object(h.jsx)("p",{children:"Don't worry if you haven't found anything that you personally would like to get involved with. More will gradually be added to the All Tasks Page as this site grows. In the meantime, please make sure you bookmark and regularly check the homepage for updates."}),Object(h.jsx)("p",{children:"Also, take a look at the Archives Page to see what tasks have been completed in the past together with tasks that are ongoing."})]}),e]})},B=i(7),R=i.n(B);var A=function(){return Object(h.jsxs)("section",{children:[Object(h.jsx)("div",{style:{background:"url('".concat("/Tubster1977.github.io/BBK-React-Project-Test","/images/image 10.jpeg')"),width:"100%",height:"75vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"5px"},children:Object(h.jsx)("h1",{children:"About Page"})}),Object(h.jsxs)(b,{children:[Object(h.jsx)("h2",{children:"About Us"}),Object(h.jsx)("h3",{children:"Who are we and what exactly do we do?"}),Object(h.jsx)("p",{children:"BPCT is made up of a team of dedicated volunteers that work together in ensuring that the habitats that make up Bentley Priory are protected. The hope is that biodiversity will increase during a time where we are experiencing a climate emergency."}),Object(h.jsx)("h3",{children:"What are we looking for?"}),Object(h.jsx)("p",{children:"We are looking for more volunteers to take on the overall stewardship of the nature reserve. Be it through helping with ongoing tasks or in simply having a presence, you can become both an active AND effective member of the wider team."}),Object(h.jsx)("h3",{children:"What is an active member?"}),Object(h.jsx)("p",{children:"An active member can be someone that gets involved in ongoing tasks such as litter collection and disposal in a safe and responsible manner without passing the problem on to the wider community. An active member can also be someone that regularly checks the site for tasks that need to be completed and helps in whatever way they can."}),Object(h.jsx)("h3",{children:"What is an effective member?"}),Object(h.jsx)("p",{children:"An effective member is someone that works well with BPCT conservation officers and the wider community in resolving issues. An effective member is also someone that can communicate effectively to others and demonstrate leadership values."}),Object(h.jsx)("h3",{children:"Other important qualities of BPCT"}),Object(h.jsx)("p",{children:"BPCT practices inclusiveness and respect. We believe that in working together harmoniously, Bentley Priory can be a place where everyone, regardless of race, gender and sexuality can collectively thrive in. We all have one thing in common - the effective stewardship of Bentley Priory for the protection of habitats and wildlife."})]}),Object(h.jsxs)(b,{children:[Object(h.jsx)("h2",{children:"Finding Your Way About"}),Object(h.jsx)("div",{className:R.a.image,children:Object(h.jsx)("img",{src:"/Tubster1977.github.io/BBK-React-Project-Test/images/image 11.jpeg",alt:"map of Bentley Priory"})})]})]})};var S=function(){return Object(h.jsxs)("section",{children:[Object(h.jsx)("div",{style:{background:"url('".concat("/Tubster1977.github.io/BBK-React-Project-Test","/images/image 10.jpeg')"),width:"100%",height:"75vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"5px"},children:Object(h.jsx)("h1",{children:"Archives Page"})}),Object(h.jsx)("div",{className:R.a.item,children:Object(h.jsxs)(b,{children:[Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("h2",{children:"Protecting Meadows"})}),Object(h.jsx)("div",{className:R.a.image,children:Object(h.jsx)("img",{src:"/Tubster1977.github.io/BBK-React-Project-Test/images/image 1.jpeg",alt:"pheasant in a meadow"})}),Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("p",{children:"A team of volunteers placed sign posts around various meadows to discourage walkers from trampling on long grass. This has resulted in the successful breeding of ground nesting birds and has also increased the population of pheasants."})})]})}),Object(h.jsx)("div",{className:R.a.item,children:Object(h.jsxs)(b,{children:[Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("h2",{children:"Protecting Lakes and Ponds"})}),Object(h.jsx)("div",{className:R.a.image,children:Object(h.jsx)("img",{src:"/Tubster1977.github.io/BBK-React-Project-Test/images/image 2.jpeg",alt:"great crested grebe on a lake"})}),Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("p",{children:"A team of volunteers placed secure animal friendly fencing around the lakes to prevent plastics and man-made materials from entering the lakes and ponds around Bentley Priory."})})]})}),Object(h.jsx)("div",{className:R.a.item,children:Object(h.jsxs)(b,{children:[Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("h2",{children:"Improving Plant Biodiversity"})}),Object(h.jsx)("div",{className:R.a.image,children:Object(h.jsx)("img",{src:"/Tubster1977.github.io/BBK-React-Project-Test/images/image 3.jpeg",alt:"bumble bee on lavendar"})}),Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("p",{children:"When meadows are left to flourish, an excellent byproduct of that is the increased abundance and variety of pollinators. Planting interventions are rare, but volunteers do occasionally get involved in introducing plant species with the intention of improving biodiversity."})})]})}),Object(h.jsx)("div",{className:R.a.item,children:Object(h.jsxs)(b,{children:[Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("h2",{children:"Monitoring Biodiversity"})}),Object(h.jsx)("div",{className:R.a.image,children:Object(h.jsx)("img",{src:"/Tubster1977.github.io/BBK-React-Project-Test/images/image 4.jpeg",alt:"peacock butterfly on wild pink flowers"})}),Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("p",{children:"Volunteers have been involved in recording the range of pollinators found at Bentley Priory Nature Reserve. This is very important work in determining the health of the site."})})]})}),Object(h.jsx)("div",{className:R.a.item,children:Object(h.jsxs)(b,{children:[Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("h2",{children:"Litter Removal and Disposal"})}),Object(h.jsx)("div",{className:R.a.image,children:Object(h.jsx)("img",{src:"/Tubster1977.github.io/BBK-React-Project-Test/images/image 5.jpeg",alt:"autumn scene"})}),Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("p",{children:"Volunteers are regularly involved in removing litter. There is a group that meets every Saturday morning from 10am at Old Lodge Meadow, so please join them if you would like to get involved."})})]})}),Object(h.jsx)("div",{className:R.a.item,children:Object(h.jsxs)(b,{children:[Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("h2",{children:"Coppicing"})}),Object(h.jsx)("div",{className:R.a.image,children:Object(h.jsx)("img",{src:"/Tubster1977.github.io/BBK-React-Project-Test/images/image 6.jpeg",alt:"trees in a wood"})}),Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("p",{children:"Volunteers have been involved in coppicing in order to help in the stronger re-growth of birch and ash trees in the woods. Treecreepers have benefitted from these interventions."})})]})}),Object(h.jsx)("div",{className:R.a.item,children:Object(h.jsxs)(b,{children:[Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("h2",{children:"Welfare of Livestock"})}),Object(h.jsx)("div",{className:R.a.image,children:Object(h.jsx)("img",{src:"/Tubster1977.github.io/BBK-React-Project-Test/images/image 7.jpeg",alt:"cows in a field"})}),Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("p",{children:"Volunteers are encouraged to report on but NOT inspect the health of grazing livestock. Herbivores that are given access to the reserve are vital for the management of Bentley Priory."})})]})}),Object(h.jsx)("div",{className:R.a.item,children:Object(h.jsxs)(b,{children:[Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("h2",{children:"Path Maintenance"})}),Object(h.jsx)("div",{className:R.a.image,children:Object(h.jsx)("img",{src:"/Tubster1977.github.io/BBK-React-Project-Test/images/image 8.jpeg",alt:"path lined with trees and tall grass"})}),Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("p",{children:"Volunteers are encouraged to safely pick up litter dropped by visitors and put them in the bins found near all the entrances located around Bentley Priory."})})]})}),Object(h.jsx)("div",{className:R.a.item,children:Object(h.jsxs)(b,{children:[Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("h2",{children:"Reporting on Illegal Fishing at Boot Pond"})}),Object(h.jsx)("div",{className:R.a.image,children:Object(h.jsx)("img",{src:"/Tubster1977.github.io/BBK-React-Project-Test/images/image 9.jpeg",alt:"pond in a park"})}),Object(h.jsx)("div",{className:R.a.content,children:Object(h.jsx)("p",{children:"Volunteers are encouraged to report on but NOT directly challenge anyone caught fishing at Boot Pond. If any fishing wire has been left in the pond itself, you are not to enter the water as it is very deep and there is the real risk of drowning."})})]})})]})},C=i(22),F=i.n(C),I=i(40),K=i(42).a.initializeApp({apiKey:"AIzaSyBnab-Hop3P4Li4FyXl7csxdPRStVddZ7c",authDomain:"bbk-react-project-contact-form.firebaseapp.com",projectId:"bbk-react-project-contact-form",storageBucket:"bbk-react-project-contact-form.appspot.com",messagingSenderId:"872362179849",appId:"1:872362179849:web:f3f2e62e458821388f67d8"}).firestore(),W=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),i=t[0],s=t[1],c=Object(a.useState)(""),r=Object(l.a)(c,2),n=r[0],o=r[1],d=Object(a.useState)(""),j=Object(l.a)(d,2),b=j[0],u=j[1],m=Object(a.useState)(!1),g=Object(l.a)(m,2),O=g[0],x=g[1];return Object(h.jsxs)("form",{className:F.a.form,onSubmit:function(e){e.preventDefault(),x(!0),K.collection("contacts").add({name:i,email:n,message:b}).then((function(){alert("Message has been sent"),x(!1)})).catch((function(e){alert(e.message),x(!1)})),s(""),o(""),u("")},children:[Object(h.jsxs)("h2",{children:["Feel free to get in touch ",Object(h.jsx)(I.a,{})]}),Object(h.jsxs)("div",{className:F.a.control,children:[Object(h.jsx)("label",{htmlFor:"full name",children:"Full Name"}),Object(h.jsx)("input",{required:!0,id:"full name",placeholder:"Name",value:i,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:F.a.control,children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{required:!0,id:"email",placeholder:"Email",value:n,onChange:function(e){return o(e.target.value)}})]}),Object(h.jsxs)("div",{className:F.a.control,children:[Object(h.jsx)("label",{htmlFor:"message",children:"Message"}),Object(h.jsx)("textarea",{required:!0,id:"message",placeholder:"Message",rows:"5",value:b,onChange:function(e){return u(e.target.value)}})]}),Object(h.jsx)("div",{className:F.a.actions,children:Object(h.jsx)("button",{type:"submit",style:{background:O?"#ccc":"#f1c6d3"},children:"Submit"})})]})};var M=function(){return Object(h.jsxs)("section",{children:[Object(h.jsx)("div",{style:{background:"url('".concat("/Tubster1977.github.io/BBK-React-Project-Test","/images/image 10.jpeg')"),width:"100%",height:"75vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"5px"},children:Object(h.jsx)("h1",{children:"Contact Page"})}),Object(h.jsx)(b,{children:Object(h.jsx)(W,{})})]})},z=i(26),L=i(27),q=i.n(L);var E=function(){var e=Object(a.useContext)(x);return Object(h.jsxs)("header",{className:q.a.header,children:[Object(h.jsxs)("div",{className:q.a.logo,children:["BPCT ",Object(h.jsx)(z.b,{})]}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/",children:"All Tasks"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/new-task",children:"Add New Task"})}),Object(h.jsx)("li",{children:Object(h.jsxs)(r.b,{to:"/priorities",children:["My Priorities"," ",Object(h.jsx)("span",{className:q.a.badge,children:e.totalPriorities})]})})]})})]})},D=i(41),V=i.n(D),Y=i(33),H=i.n(Y);var X=function(){return Object(h.jsxs)("footer",{className:H.a.footer,children:[Object(h.jsxs)("div",{className:H.a.logo,children:["LensIn2Nature ",Object(h.jsx)(z.a,{})]}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/archives",children:"Archives"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/contact",children:"Contact Us"})})]})})]})};function J(){var e=Object(n.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var U=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(J,{}),Object(h.jsx)(E,{}),Object(h.jsx)("main",{className:V.a.main,children:e.children}),Object(h.jsx)(X,{})]})};var G=function(){return Object(h.jsx)(U,{children:Object(h.jsxs)(n.c,{children:[Object(h.jsx)(n.a,{path:"/",exact:!0,children:Object(h.jsx)(k,{})}),Object(h.jsx)(n.a,{path:"/new-task",children:Object(h.jsx)(T,{})}),Object(h.jsx)(n.a,{path:"/priorities",children:Object(h.jsx)(_,{})}),Object(h.jsx)(n.a,{path:"/about",children:Object(h.jsx)(A,{})}),Object(h.jsx)(n.a,{path:"/archives",children:Object(h.jsx)(S,{})}),Object(h.jsx)(n.a,{path:"/contact",children:Object(h.jsx)(M,{})})]})})};c.a.render(Object(h.jsx)(O,{children:Object(h.jsx)(r.a,{children:Object(h.jsx)(G,{})})}),document.getElementById("root"))},7:function(e,t,i){e.exports={item:"Customisations_item__2SWHf",image:"Customisations_image__HoXrS",content:"Customisations_content__2X_-H"}}},[[59,1,2]]]);
//# sourceMappingURL=main.a4d73f07.chunk.js.map