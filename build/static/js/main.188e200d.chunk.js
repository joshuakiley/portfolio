(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),s=(a(31),a(2)),o=a(3),l=a(5),m=a(4),u=a(6),h=a(13),d=a(15),b=a(12),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={isHovered:{Home:!1,Projects:!1,Hobbies:!1,Contact:!1,Resume:!1}},a.handleHover=a.handleHover.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleHover",value:function(e){switch(e){case"Home":this.setState((function(e){return{isHovered:Object(h.a)({},e.isHovered,{Home:!e.isHovered.Home})}}));break;case"Projects":this.setState((function(e){return{isHovered:Object(h.a)({},e.isHovered,{Projects:!e.isHovered.Projects})}}));break;case"Hobbies":this.setState((function(e){return{isHovered:Object(h.a)({},e.isHovered,{Hobbies:!e.isHovered.Hobbies})}}));break;case"Contact":this.setState((function(e){return{isHovered:Object(h.a)({},e.isHovered,{Contact:!e.isHovered.Contact})}}));break;case"Resume":this.setState((function(e){return{isHovered:Object(h.a)({},e.isHovered,{Resume:!e.isHovered.Resume})}}))}}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("div",{"data-target":"slide-out",className:"sidenav-trigger hide-on-large-only"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{className:"hide-on-med-and-down"},this.props.linkUrl.map((function(t,a){return r.a.createElement("li",{key:e.props.linkName[a],className:"waves-effect waves-light nav-button"},r.a.createElement(b.b,{onMouseEnter:function(){e.handleHover(e.props.linkName[a])},onMouseLeave:function(){e.handleHover(e.props.linkName[a])},to:t},e.state.isHovered[e.props.linkName[a]]?r.a.createElement("i",{className:"material-icons"},e.props.linkIcon[a]):e.props.linkName[a]))})))))}}]),t}(n.Component),E=a(25),p=a.n(E),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");p.a.Sidenav.init(e,{})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("ul",{id:"slide-out",className:"sidenav"},r.a.createElement("li",{className:"first-li"},r.a.createElement("img",{className:"dirk",src:"/images/dirk.png"}),r.a.createElement("div",{className:"user-view"},r.a.createElement("div",{className:"logo"}),r.a.createElement("a",{href:"#"},r.a.createElement("span",{className:"white-text name center"},"Joshua Kiley")),r.a.createElement("a",{href:"#"},r.a.createElement("span",{className:"white-text name center"},"SOFTWARE ENGINEER")))),this.props.linkUrl.map((function(t,a){return r.a.createElement("li",null,r.a.createElement(b.b,{className:"waves-effect",to:t},r.a.createElement("i",{className:"material-icons"},e.props.linkIcon[a]),e.props.linkName[a]))})))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-inner"},r.a.createElement("h1",null,"Joshua Kiley"),r.a.createElement("h2",null,"SOFTWARE ENGINEER"))),r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-inner"},r.a.createElement("h1",null,"ABOUT ME"),r.a.createElement("h2",null,"all of the things"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo, laboriosam vero veniam voluptatibus ut eos, error amet dicta distinctio excepturi consequuntur ipsa, ratione atque quibusdam. Nobis labore maxime nulla!"))))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-inner"},r.a.createElement("h1",null,"PROJECTS"),r.a.createElement("div",{className:"links"},r.a.createElement("a",{className:"btn green darken-4 waves-light waves-effect"},"hsk flashcards"),r.a.createElement("a",{className:"btn green darken-4 waves-light waves-effect"},"budge"),r.a.createElement("a",{className:"btn green darken-4 waves-light waves-effect"},"getaway")))))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-inner"},r.a.createElement("h1",null,"HOBBIES"))))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-inner"},r.a.createElement("h1",null,"CONTACT"))))}}]),t}(n.Component),H=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-inner"},r.a.createElement("h1",null,"RESUME"))))}}]),t}(n.Component),y=(n.Component,a(10)),w=(a(36),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={linkUrl:["/","/projects","/hobbies","/contact","/resume"],linkName:["Home","Projects","Hobbies","Contact","Resume"],linkIcon:["home","work","toys","chat","cake"],routeComponent:[k,O,j,N,H]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,null,r.a.createElement("header",null,r.a.createElement(v,{linkUrl:this.state.linkUrl,linkName:this.state.linkName,linkIcon:this.state.linkIcon}),r.a.createElement(f,{linkUrl:this.state.linkUrl,linkName:this.state.linkName,linkIcon:this.state.linkIcon})),this.state.routeComponent.map((function(t,a){return r.a.createElement(y.a,{key:a,path:e.state.linkUrl[a],exact:!0,component:t})})))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.188e200d.chunk.js.map