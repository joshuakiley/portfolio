(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(22),o=a.n(s),r=(a(31),a(1)),l=a(2),c=a(4),u=a(3),h=a(5),m=a(13),d=a(15),p=a(12),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isHovered:{Home:!1,Projects:!1,Hobbies:!1,Contact:!1,Resume:!1}},a.handleHover=a.handleHover.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleHover",value:function(e){switch(e){case"Home":this.setState((function(e){return{isHovered:Object(m.a)({},e.isHovered,{Home:!e.isHovered.Home})}}));break;case"Projects":this.setState((function(e){return{isHovered:Object(m.a)({},e.isHovered,{Projects:!e.isHovered.Projects})}}));break;case"Hobbies":this.setState((function(e){return{isHovered:Object(m.a)({},e.isHovered,{Hobbies:!e.isHovered.Hobbies})}}));break;case"Contact":this.setState((function(e){return{isHovered:Object(m.a)({},e.isHovered,{Contact:!e.isHovered.Contact})}}));break;case"Resume":this.setState((function(e){return{isHovered:Object(m.a)({},e.isHovered,{Resume:!e.isHovered.Resume})}}))}}},{key:"render",value:function(){var e=this;return i.a.createElement("nav",null,i.a.createElement("div",{className:"nav-wrapper"},i.a.createElement("div",{"data-target":"slide-out",className:"sidenav-trigger hide-on-large-only"},i.a.createElement("i",{className:"material-icons"},"menu")),i.a.createElement("ul",{className:"hide-on-med-and-down"},this.props.linkUrl.map((function(t,a){return i.a.createElement("li",{key:e.props.linkName[a],className:"waves-effect waves-light nav-button"},i.a.createElement(p.b,{onMouseEnter:function(){e.handleHover(e.props.linkName[a])},onMouseLeave:function(){e.handleHover(e.props.linkName[a])},to:t},e.state.isHovered[e.props.linkName[a]]?i.a.createElement("i",{className:"material-icons"},e.props.linkIcon[a]):e.props.linkName[a]))})))))}}]),t}(n.Component),f=a(25),g=a.n(f),v=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");g.a.Sidenav.init(e,{})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("ul",{id:"slide-out",className:"sidenav"},i.a.createElement("li",{className:"first-li"},i.a.createElement("img",{className:"dirk",src:"/images/avatar.jpg"}),i.a.createElement("div",{className:"user-view"},i.a.createElement("div",{className:"logo"}),i.a.createElement("a",{href:"#"},i.a.createElement("span",{className:"white-text name center"},"Joshua Kiley")),i.a.createElement("a",{href:"#"},i.a.createElement("span",{className:"white-text name center"},"SOFTWARE ENGINEER")))),this.props.linkUrl.map((function(t,a){return i.a.createElement("li",null,i.a.createElement(p.b,{className:"waves-effect",to:t},i.a.createElement("i",{className:"material-icons"},e.props.linkIcon[a]),e.props.linkName[a]))})))}}]),t}(n.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("section",{id:"hero",className:"hero"},i.a.createElement("div",{className:"hero-inner"},i.a.createElement("h1",null,this.props.title)),i.a.createElement("div",{className:null===this.props.links?"hidden":"show"},null===this.props.links?null:this.props.links.map((function(t,a){return i.a.createElement("a",{key:a,href:t,className:"btn white black-text waves-effect"},e.props.linkTitles[a])}))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={title:"Contact",links:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",null,i.a.createElement("article",null,i.a.createElement("h1",null,"Lorem Ipsum"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint vero maxime! Fugiat ut, voluptates neque dolorem nostrum alias facilis saepe voluptatem enim corporis quod similique, reiciendis, nemo magnam non.")))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={title:"Joshua Kiley",links:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(k,{title:this.state.title,links:this.state.links}),i.a.createElement(y,null))}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"project",id:this.props.info.id},i.a.createElement("figure",{className:"project-figure"},i.a.createElement("img",{className:"project-figure-image",src:this.props.info.thumbnail,alt:"project homepage"}),i.a.createElement("figcaption",{className:"project-figure-figcaption"},i.a.createElement("a",{className:"btn blue darken-1 white-text waves-effect",href:this.props.info.liveSite},"Live Site"),i.a.createElement("a",{className:"btn blue darken-1 white-text waves-effect",href:this.props.info.github},"Github"),i.a.createElement("a",{href:"#hero",className:"btn black white-text waves-effect"},"top"))),i.a.createElement("br",null),i.a.createElement("div",{className:"project-text"},i.a.createElement("article",{className:"project-article"},i.a.createElement("h1",{className:"project-article-title"},this.props.info.title),i.a.createElement("h2",{className:"project-article-subtitle"},this.props.info.subtitle),this.props.info.description.map((function(e,t){return i.a.createElement("p",{key:t},e)}))),i.a.createElement("aside",{className:"project-aside"},i.a.createElement("div",{className:"project-aside-category"},i.a.createElement("h3",null,"Technologies"),i.a.createElement("ul",null,this.props.info.tech.map((function(e,t){return i.a.createElement("li",{key:t},e)})))),i.a.createElement("div",{className:"project-aside-category"},i.a.createElement("h3",null,"Obstacles"),this.props.info.obstacles.map((function(e,t){return i.a.createElement("p",{key:t},e)}))))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={title:"Projects",links:["#hskflashcard","#budge","#getaway"],linkTitles:["Flashcards","Budge","Getaway"],hsk:{id:"hskflashcard",thumbnail:"/images/hsk.png",title:"HSK Flashcards",subtitle:"The HSK is the official Chinese language exam in China.",liveSite:"https://joshuakiley.github.io/",github:"https://github.com/joshuakiley/joshuakiley.github.io",description:["Toward the end of my stay in China I needed to pass the HSK in order to qualify for a temporary residence visa, so I made this webapp modeled after the simple flashcard exercises I would use with my students to help them learn English.","We use the official HSK vocabulary list, which includes Chinese vocabulary, English translations, and phonetics (\u62fc\u97f3). For the pronunciation audio files I pull from a reliable API accessing www.forvo.com. Forvo is a website that crowd-sources pronunciation of many languages and dialects around the world.","This app allows you to choose the number of cards you want to study in any given session. It allows you to choose the HSK level you want to study. It also allows you to retire cards that you\u2019re sure you know.","Future releases of this application will focus on migrating from Express to either React or Angular. The localstorage system for storing retired cards will be replaced with a NoSQL database run on Google Firebase. Sign-in through Google Firebase.","I am the sole developer of this project."],tech:["HTML","CSS","JavaScript","MaterializeCSS","Express","Node","3rd party API calls using AJAX"],obstacles:["One of the obstacles that I came across while developing this application is that I would have preferred to have built it in React now that I know how to use React.","Another issue was that I wanted to app to be small and contained, so rather than make a database to store user study information I used localstorage in the browser to contain this information. I would like to change this in the future by adding a login and a database (I haven\u2019t decided on SQL or NoSQL yet)."]},budge:{id:"budge",thumbnail:"/images/budge.png",title:"Budge: A Budgeting App",subtitle:"Day to Day Budgeting.",liveSite:"https://budgemanager.herokuapp.com/",github:"https://github.com/joshuakiley/budge",description:["During college and when I first moved out on my own I had trouble budgeting long-term, over the course of the year, or even month to month. So I designed my budget spreadsheets on a day to day basis to help me develop better budgeting skills.","This app takes your income and your expenses and it divides them among the days in the pay period so that you can easily see how much money you can spend in a day before you start eating into your savings.","The app asks users to create an account, and will ask users to input their income and expenses for the previous pay period, then ask them the length of the next pay period. All of this data is stored in a NoSQL database.","Future releases of this application will be ported to either Angular or React. The NoSQL database and sign in authorization will be run through Google Firebase for security.","I am the sole developer for this project."],tech:["HTML","CSS","JavaScript","MaterializeCSS","Express","Node","Mongoose","MongoDB","RESTful Routes"],obstacles:["An issue that I had while developing this was ensuring that the math was being done correctly. In the future I hope to implement Dinero.js in order to add features like proper currency conversion and ensuring that the math is up to banking standards.","Another issue that I had while implementing this was creating a graphical date picker. Due to time constraints I forewent this feature for manual date input. I will add the graphical date picker once I migrate the app to either Angular or React."]},getaway:{id:"getaway",thumbnail:"/images/getaway.png",title:"Getaway",subtitle:"A trip planner for people who have an idea for a trip but aren't sure when they may want to go.",liveSite:"http://getaway.surge.sh/",github:"https://github.com/joshuakiley/getaway-frontend",description:["This web app was built by a group of people using React, Node.js, JavaScript, MongoDB (a NoSQL database), and Materializecss (a CSS framework similar to Bootstrap that follows Google's Material Design principles). It accesses an external API for flight prices and data. It creates a local database of user data that includes places the user would like to visit, possible activities that the user may want to partake in during the trip. This app handles user creation and user login."],tech:["HTML","CSS","JavaScript","MaterializeCSS","React","Node","Mongoose","MongoDB","3rd party API calls using AJAX"],obstacles:["One of the obstacles that I came across while developing this application is that I would have preferred to have built it in React now that I know how to use React.","Another issue was that I wanted to app to be small and contained, so rather than make a database to store user study information I used localstorage in the browser to contain this information. I would like to change this in the future by adding a login and a database (I haven\u2019t decided on SQL or NoSQL yet)."]}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(k,{title:this.state.title,links:this.state.links,linkTitles:this.state.linkTitles}),i.a.createElement(j,{info:this.state.hsk}),i.a.createElement(j,{info:this.state.budge}),i.a.createElement(j,{info:this.state.getaway}))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={title:"Hobbies",links:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(k,{title:this.state.title,links:this.state.links}))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={title:"Contact",links:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(k,{title:this.state.title,links:this.state.links}))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={title:"Resume",links:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement(k,{title:this.state.title,links:this.state.links}))}}]),t}(n.Component),S=(n.Component,a(10)),H=(a(36),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={linkUrl:["/","/projects","/hobbies","/contact","/resume"],linkName:["Home","Projects","Hobbies","Contact","Resume"],linkIcon:["home","work","toys","chat","cake"],routeComponent:[w,E,O,N,I]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p.a,null,i.a.createElement("header",null,i.a.createElement(b,{linkUrl:this.state.linkUrl,linkName:this.state.linkName,linkIcon:this.state.linkIcon}),i.a.createElement(v,{linkUrl:this.state.linkUrl,linkName:this.state.linkName,linkIcon:this.state.linkIcon})),this.state.routeComponent.map((function(t,a){return i.a.createElement(S.a,{key:a,path:e.state.linkUrl[a],exact:!0,component:t})})))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);o.a.render(i.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.4d988d31.chunk.js.map