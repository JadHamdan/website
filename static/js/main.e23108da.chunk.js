(window.webpackJsonpwebsite=window.webpackJsonpwebsite||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(8),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),d=(a(9),a(6)),p=a.n(d);p()(document).ready(function(){p()("#navbar a").bind("click",function(e){e.preventDefault();var t=p()(this).attr("href");p()("html, body").stop().animate({scrollLeft:p()(t).offset().left,scrollTop:p()(t).offset().top},1200)})});var h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navDiv"},r.a.createElement("ul",{id:"navbar",className:"container-fluid"},r.a.createElement("li",{className:"strikeout"},".00 jad hamdan"),r.a.createElement("li",null,r.a.createElement("a",{href:"#About"}," .01 about")),r.a.createElement("li",null,r.a.createElement("a",{href:"#Projects"}," .02 projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"#Writing"}," .03 writing")),r.a.createElement("li",null,r.a.createElement("a",{href:"#Contact"}," .04 contact"))))}}]),t}(n.Component),b=a(11),f=a.n(b),v=a(12),E=a.n(v);function g(e){var t=0;e.setup=function(){e.createCanvas(1300,160)},e.draw=function(){e.background("#1f262a"),e.stroke(255),e.noFill(),e.beginShape();for(var a=t,n=0;n<e.width;n++){e.stroke(255);var r=e.noise(a)*e.height;e.vertex(n,r),a+=.01}e.endShape(),t+=.01}}var y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{sketch:g}))}}]),t}(n.Component),j="#00B1E1",w="#c9a3b8",N="#1f262a";p()("document").ready(function(){new f.a("#typed",{strings:["Hi, ","Hi, nice to meet you."],backSpeed:60,typeSpeed:40})});var O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"About",style:{backgroundColor:j},className:"container col-3 panel"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{backgroundColor:N},className:"col-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{backgroundColor:N},className:"col-8"}),r.a.createElement("div",{style:{backgroundColor:w},className:"col-4"}))),r.a.createElement("div",{style:{backgroundColor:N},className:"col-11"},r.a.createElement("div",{style:{height:"100vh"},className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{top:"40px",left:"-50px"},className:"col-7"},r.a.createElement(y,null),r.a.createElement("div",null,r.a.createElement("div",{id:"typed-strings"},r.a.createElement("h1",{className:"aboutText",id:"typed"})),r.a.createElement("p",{className:"aboutText"},"I'm Jad, a U3 student at McGill University with a questionably high caffeine intake. I study mathematics and computer science and enjoy just about any topic these fields have to offer."),r.a.createElement("p",{className:"aboutText"},"I have the honour of being affiliated with wonderful organizations in the McGill Community and of working with the inspiring people that form them. These include the McGill AI Society and Hack4Impact McGill."),r.a.createElement("p",{className:"aboutText"},"When I'm not studying, you'll find me learning new recipes to cook or playing the piano. I also enjoy coding, and you can find some of my (very dated) projects on the next page."),r.a.createElement("p",{className:"nextText"},"( Use the navigation bar or scroll to see projects >> )"))),r.a.createElement("div",{className:"col-5"},r.a.createElement("img",{src:"images/aboutpic.png",style:{height:"100vh"}})))))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={title:e.title,subtitle:e.subtitle,description:e.description,url:e.url,pic:e.pic},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-sm-12 col-md-4"},r.a.createElement("img",{src:this.state.pic}),r.a.createElement("div",{className:"lightbox container-fluid"},r.a.createElement("div",{id:"projectText",className:"projectHead"},this.state.title),r.a.createElement("div",{id:"projectText",className:"projectSub"},this.state.subtitle),r.a.createElement("div",{id:"projectText",className:"projectBody"},this.state.description)))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"divider"},r.a.createElement("p",null,this.props.value))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-sm-12 col-md-4"},r.a.createElement("h1",{className:"emptyProject"}," . . . "))}}]),t}(n.Component),A="#c9a3b8",T="#1f262a",P="#ffffff",x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={dividerValue:".02 projects"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"Projects",style:{backgroundColor:T},class:" container col-3 panel"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{backgroundColor:T},className:"col-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{backgroundColor:P},className:"col-8"},r.a.createElement(C,{value:this.state.dividerValue})),r.a.createElement("div",{style:{backgroundColor:A},className:"col-4"}))),r.a.createElement("div",{style:{backgroundColor:T},className:"col-11"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container-fluid gallery-container"},r.a.createElement("div",{className:"tz-gallery"},r.a.createElement("div",{className:"row"},r.a.createElement(k,{title:"Neural Music Generation & Classification",subtitle:"McGill AI Society Bootcamp Final Project",description:"Used the Keras library to classify music samples by genre (CNN) and generate a simple piano tune (LSTM). ",pic:"images/musicml.png"}),r.a.createElement(k,{title:"Timesheet Web Application",subtitle:"Vanrise Solutions Internship Project",description:"Developed a full stack ASP.Net core web application. All data was fetched from an SQL database running on a docker container and sent to the client-side via REST APIs.",pic:"images/vanrise.png"}),r.a.createElement(k,{title:"Malaria Detector",subtitle:"Side Project",description:"I wrote this simple classifier to learn basic Keras syntax and image data preprocessing. Django web app implementation in progress.",pic:"images/malaria.png"}),r.a.createElement(k,{title:"Sentiment Analysis with Human Intervention",subtitle:"ConcordAI Hackathon Third Place Winner",description:"Developed an algorithm that uses human intervention to accurately analyze ironic statements with Rosie Zhao (github.com/rosieyzh) & Jonathan Carr (github.com/j-c-carr).",pic:"images/concordai.png"}),r.a.createElement(k,{title:"CourseTalk",subtitle:"HackPrinceton Fall 2018 Project",description:"Developed an online discussion and collaboration platform with Marcel Goh (github.com/marcelgoh) & Parsa Yadollahi (github.com/parsayadollahi). ",pic:"images/coursetalk.png"}),r.a.createElement(S,null))))))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid article"},r.a.createElement("h1",null,"A Reusable Way to Retrieve Data From Your SQL Server Database"),r.a.createElement("h5",null,"Go from an SQL table to a list of objects in one method call in ASP.NET Core."),r.a.createElement("p",null,"With just a few lines of code, you\u2019ll learn how to write a method that calls any SQL stored procedure, passes it its parameters and returns a list of objects of a given type, ready to be used by your ASP.NET Core Application. In an attempt to make the article self-contained, introductory tasks such as ASP.NET Core project initialization or SQL Table creation will be covered as well. This makes the article quite lengthy, but feel free to skip to \u201cRetrieving Data from our ASP.NET Core Application\u201d for the interesting stuff.",r.a.createElement("br",null)),r.a.createElement("h6",null,r.a.createElement("br",null),"Prerequisites:"),r.a.createElement("p",null,"- Any computer with the latest version of the Visual Studio IDE installed. ",r.a.createElement("br",null),"- A running SQL Server database, along with the necessary login information to access it (see the connection string further down this article). ",r.a.createElement("br",null),"- Basic programming knowledge (object-oriented programming, value methods, for/while loops).",r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("h6",null,"Creating an Empty ASP.NET Core Application"),r.a.createElement("p",null,"If you already have a project up and running (or prefer a different way of organizing your files), feel free to skip this step. It is only meant to initialize project folders to work in...",r.a.createElement("tab1",null)),r.a.createElement("a",{href:"https://medium.com/@jadhamdan/a-reusable-way-to-retrieve-data-from-your-sql-server-database-42ab599f5839"},"( Continue Reading >> )"))}}]),t}(n.Component),D="#c9a3b8",L="#1f262a",M="#ffffff",q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={dividerValue:".03 writing"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"Writing",style:{backgroundColor:L},class:" container col-3 panel"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{backgroundColor:L},className:"col-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{backgroundColor:M},className:"col-8"},r.a.createElement(C,{value:this.state.dividerValue})),r.a.createElement("div",{style:{backgroundColor:D},className:"col-4"}))),r.a.createElement("div",{style:{backgroundColor:L},className:"col-11"},r.a.createElement("div",{className:"row"},r.a.createElement(I,null)))))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{action:"https://formspree.io/jad.hamdan@mail.mcgill.ca",method:"POST",style:{margin:"30px"}},r.a.createElement("div",{class:"form-group label-floating"},r.a.createElement("label",{class:"control-label",for:"name"},"Name"),r.a.createElement("input",{class:"form-control",id:"name",type:"text",name:"name",required:!0,"data-error":"Please enter your name"})),r.a.createElement("div",{class:"form-group label-floating"},r.a.createElement("label",{class:"control-label",for:"email"},"Email"),r.a.createElement("input",{class:"form-control",id:"email",type:"email",name:"email",required:!0,"data-error":"Please enter your Email"})),r.a.createElement("div",{class:"form-group label-floating"},r.a.createElement("label",{class:"control-label"},"Subject"),r.a.createElement("input",{class:"form-control",id:"msg_subject",type:"text",name:"subject",required:!0,"data-error":"Please enter your message subject"})),r.a.createElement("div",{class:"form-group label-floating"},r.a.createElement("label",{for:"message",class:"control-label"},"Message"),r.a.createElement("textarea",{class:"form-control",rows:"3",id:"message",name:"message",required:!0,"data-error":"Write your message"})),r.a.createElement("button",{type:"submit",className:"contactFormButton"},"Submit >>")))}}]),t}(n.Component),V="#c9a3b8",W="#1f262a",G="#ffffff",H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={dividerValue:".04 contact"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"Contact",style:{backgroundColor:W},class:"container col-3 panel"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{backgroundColor:W},className:"col-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{backgroundColor:G},className:"col-8"},r.a.createElement(C,{value:this.state.dividerValue})),r.a.createElement("div",{style:{backgroundColor:V},className:"col-4"}))),r.a.createElement("div",{style:{backgroundColor:W},className:"col-11"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-7 contactTitle"},r.a.createElement("h1",null,"Let's have a chat"),r.a.createElement("p",null,"There are very few things I enjoy more than meeting and learning from new people. If I can be of help in any way - or if you simply want to chat - make sure to let me know using the form below!"),r.a.createElement(z,null)),r.a.createElement("div",{className:"col-5"},r.a.createElement("img",{src:"images/contactpic.png",style:{height:"100vh"}})))))))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(O,null),r.a.createElement(x,null),r.a.createElement(q,null),r.a.createElement(H,null))}}]),t}(n.Component);a(20);p()(function(){p()("html, head, body").mousewheel(function(e,t){e.preventDefault(),this.scrollLeft-=1*t})}),p()(document).ready(function(){var e=p()(window);function t(){e.width()<=900&&window.location.replace("http://jadhamdan.github.io/website-mobile")}t(),p()(window).resize(t)}),c.a.render(r.a.createElement(B,null),document.getElementById("root"))},8:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.e23108da.chunk.js.map
