(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/virtualnyc.36e6d00f.png"},function(e,t,a){e.exports=a.p+"static/media/login.37ccc4fa.png"},function(e,t,a){e.exports=a.p+"static/media/quarantine-wrapped.22b18fc4.png"},,,function(e,t,a){e.exports=a.p+"static/media/portfolio.858f360f.png"},function(e,t,a){e.exports=a.p+"static/media/tot.921c406a.png"},function(e,t,a){e.exports=a.p+"static/media/westvillage.50160ea6.jpg"},function(e,t,a){e.exports=a.p+"static/media/resume.bc01f737.png"},function(e,t,a){e.exports=a.p+"static/media/resume.dcb6d4d9.pdf"},,,,,,function(e,t,a){e.exports=a.p+"static/media/mail.9d216170.svg"},function(e,t,a){e.exports=a.p+"static/media/github.89c2c067.png"},function(e,t,a){e.exports=a.p+"static/media/linkedin.c54c1027.svg"},,function(e,t,a){e.exports=a.p+"static/media/tulum.a4bb57ec.jpg"},function(e,t,a){e.exports=a.p+"static/media/bluestripes.40677108.jpg"},function(e,t,a){e.exports=a.p+"static/media/paris.55e435a8.jpg"},function(e,t,a){e.exports=a.p+"static/media/laylow.02ac94b4.jpg"},function(e,t,a){e.exports=a.p+"static/media/covid.49ac4e77.png"},function(e,t,a){e.exports=a.p+"static/media/bv.58bcf9a0.png"},function(e,t,a){e.exports=a.p+"static/media/claire.8c291894.png"},,function(e,t,a){e.exports=a(61)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),o=(a(49),a(1)),c=a(2),s=a(9),m=a(4),p=a(3),u=a(20),d=a(6),h=a(8),g=(a(50),a(51),a(17)),v=a.n(g),b=a(18),E=a.n(b),f=a(22),y=a.n(f),k=a(23),w=a.n(k),j=a(32),N=a.n(j),S=a(33),O=a.n(S),C=a(34),x=a.n(C),I=a(19),T=a.n(I),A=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"section-wrapper "+this.props.color,style:this.props.styles},this.props.text?r.a.createElement("div",{className:"text-wrapper"},this.props.children):this.props.children)}}]),a}(r.a.Component),D=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={posts:[{title:"Quarantine Wrapped",src:T.a,link:"https://quarantine-wrapped.herokuapp.com/",description:"React, node.js, Express, SASS, REST API",local:!1},{src:v.a,title:"Virtual NYC",description:"HTML, CSS Animation, SVG, Adobe Illustrator, Javascript",link:"/dotw-final-project",local:!1},{src:E.a,title:"Real-Time Multiplayer Sheng Ji",description:"Node, Express, MongoDB, Socket.io, HTML, SASS/CSS, jQuery",link:"https://multiplayer-sheng-ji.herokuapp.com/",local:!1}]},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"section-wrapper "+this.props.color},r.a.createElement("div",{className:"section"},r.a.createElement("h1",{style:{"text-align":"right"}},this.props.title),r.a.createElement("div",{className:"blog-wrapper"},this.state.posts.map((function(e){return r.a.createElement(M,{src:e.src,title:e.title,link:e.link,local:e.local})})),r.a.createElement("div",{className:"blog-link"},r.a.createElement(h.b,{to:"/work"},r.a.createElement("h4",null,"See More \u27f6"))))))}}]),a}(r.a.Component);function M(e){var t=r.a.createElement("div",null,r.a.createElement("img",{src:e.src}),r.a.createElement("p",null,e.title));return r.a.createElement("div",{className:"blog-post"},e.local?r.a.createElement(h.b,{to:e.link},t):r.a.createElement("a",{href:e.link},t))}var L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"split-section-wrapper"},r.a.createElement("div",{className:"split-section-light"},this.props.children),r.a.createElement("div",{className:"split-section-dark"},r.a.createElement("div",null,r.a.createElement("img",{src:this.props.img}))))}}]),a}(r.a.Component),P=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"section-wrapper"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"collage-wrapper"},r.a.createElement("div",{className:"collage-left"},r.a.createElement("img",{src:this.props.pic1,id:"photography-link"}),r.a.createElement(h.b,{to:"/hobbies"},r.a.createElement("p",null,r.a.createElement("a",{className:"button",href:this.props.link},this.props.linkTitle)))),r.a.createElement("div",{className:"collage-right"},r.a.createElement("div",{className:"collage-inner-header"},r.a.createElement("h1",null,this.props.title)),r.a.createElement("div",{className:"collage-inner-top"},r.a.createElement("img",{src:this.props.pic2})),r.a.createElement("div",{className:"collage-inner-bottom"},r.a.createElement("img",{src:this.props.pic3}))))))}}]),a}(r.a.Component),H=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"section-wrapper top-section header "+this.props.color},r.a.createElement("h1",null,this.props.title))}}]),a}(r.a.Component),R=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"section-wrapper top-section"},r.a.createElement("div",{className:"photo-header-section-wrapper"},this.props.children,r.a.createElement("div",{className:"photo-header-section-photo"},r.a.createElement("img",{src:this.props.img}),r.a.createElement("div",{className:"bg"}),r.a.createElement("img",{src:this.props.img,id:"placeholder"}))))}}]),a}(r.a.Component),W=(r.a.Component,function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"gallery"},this.props.images.map((function(e){return r.a.createElement(B,{src:e.src,caption:e.caption})})))}}]),a}(r.a.Component));function B(e){var t=Object(n.useRef)(null),a=Object(n.useRef)(null),i=Object(n.useState)(0),l=Object(u.a)(i,2),o=l[0],c=l[1];Object(n.useEffect)((function(){s()}),[]),window.addEventListener("resize",(function(e){s()}));var s=function(){if(a.current){var e=a.current.clientWidth;c(e)}};return r.a.createElement("div",{className:"gallery-item"},r.a.createElement("div",{className:"gallery-item-photo",ref:t},r.a.createElement("img",{src:""+e.src,style:{height:o},ref:a})),r.a.createElement("p",{className:"gallery-caption"},e.caption))}var J=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"photo-divider",style:{backgroundImage:"url("+this.props.img+")"}})}}]),a}(r.a.Component);function Y(e){return r.a.createElement("div",{className:"footer-wrapper"},r.a.createElement("div",{className:"footer"},r.a.createElement("h1",null,"Get in touch \u2013"),r.a.createElement("div",{className:"footer-links"},r.a.createElement("a",{href:"mailto:cyw336@nyu.edu",target:"_blank",alt:"email",title:"Email"},r.a.createElement("img",{src:N.a})),r.a.createElement("a",{href:"https://github.com/clawang",target:"_blank",alt:"github",title:"Github"},r.a.createElement("img",{src:O.a})),r.a.createElement("a",{href:"https://www.linkedin.com/in/clawang/",target:"_blank",alt:"linkedin",title:"LinkedIn"},r.a.createElement("img",{src:x.a})))))}a(57);var G=["C","l","a","i","r","e"," ","W","a","n","g"];function U(e){return r.a.createElement("div",{className:"polaroid-container",style:{top:e.top,left:e.left}},r.a.createElement("div",{className:"polaroid-photo",style:{background:{blush:"#d09b7b",nude:"#d0b0af",terracotta:"#bb6f1c",blue:"#cbd2d4",darkGreen:"#3A4F41",lightGreen:"#81957a"}[e.color]}}))}var V=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={header:"",headerDone:!1,subtitle:"",subtitleDone:!1},n.typeHeader=n.typeHeader.bind(Object(s.a)(n)),n.typeSubtitle=n.typeSubtitle.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"typeHeader",value:function(e){if(this.state.header.length<G.length){var t=this.state.header.concat(G[e]);setTimeout(function(){this.setState({header:t}),this.typeHeader(e+1)}.bind(this),200)}else this.setState({headerDone:!0}),setTimeout(function(){this.typeSubtitle(0)}.bind(this),500)}},{key:"typeSubtitle",value:function(e){if(this.state.subtitle.length<"DEVELOPER & DESIGNER".length){var t=this.state.subtitle.concat("DEVELOPER & DESIGNER".charAt(e));setTimeout(function(){this.setState({subtitle:t}),this.typeSubtitle(e+1)}.bind(this),200)}}},{key:"render",value:function(){return r.a.createElement("div",{className:"drawing-container"},r.a.createElement("div",{className:"drawing"},r.a.createElement("div",{className:"computer"},r.a.createElement("div",{className:"computer-screen"},r.a.createElement("h1",{className:this.state.headerDone?"":"typing"},this.state.header),r.a.createElement("h4",{className:this.state.subtitleDone?"":"typing"},this.state.subtitle)),r.a.createElement("div",{className:"computer-bezel"},r.a.createElement("div",{className:"computer-button"})),r.a.createElement("div",{className:"computer-stand"})),r.a.createElement("div",{className:"mouse"}),r.a.createElement("div",{className:"plant"},r.a.createElement("div",{className:"plant-pot"}),r.a.createElement("div",{className:"plant-leaves-1"}),r.a.createElement("div",{className:"plant-leaves-2"}),r.a.createElement("div",{className:"plant-leaves-3"})),r.a.createElement("div",{className:"coffee"},r.a.createElement("div",{className:"coffee-mug"}),r.a.createElement("div",{className:"coffee-handle"})),r.a.createElement("div",{className:"shelf"},r.a.createElement("div",{className:"book-1"}),r.a.createElement("div",{className:"book-2"}),r.a.createElement("div",{className:"book-3"}),r.a.createElement("div",{className:"book-4"}),r.a.createElement("div",{className:"binder-1"}),r.a.createElement("div",{className:"book-5"}),r.a.createElement("div",{className:"book-6"}),r.a.createElement("div",{className:"book-7"}),r.a.createElement("div",{className:"shelf-picture"}),r.a.createElement("div",{className:"shelf-plant"},r.a.createElement("div",{className:"shelf-plant-pot"}),r.a.createElement("div",{className:"shelf-plant-1"}),r.a.createElement("div",{className:"shelf-plant-2"}),r.a.createElement("div",{className:"shelf-plant-3"})),r.a.createElement("div",{className:"shelf-bottom"})),r.a.createElement(U,{color:"blush",top:"150px",left:"650px"}),r.a.createElement(U,{color:"blue",top:"170px",left:"800px"}),r.a.createElement(U,{color:"darkGreen",top:"220px",left:"720px"}),r.a.createElement(U,{color:"nude",top:"300px",left:"120px"}),r.a.createElement("div",{className:"clock"},r.a.createElement("div",{className:"clock-hour-hand"}),r.a.createElement("div",{className:"clock-minute-hand"}),r.a.createElement("div",{className:"clock-second-hand"}))),r.a.createElement("div",{className:"desk"}))}},{key:"componentDidMount",value:function(){this.typeHeader(0)}}]),a}(r.a.Component),_=(a(58),a(36)),z=a.n(_),q=a(37),F=a.n(q),Q=a(24),X=a.n(Q),$=a(38),K=a.n($);function Z(e){return r.a.createElement("p",{className:"skill-button"},e.name)}var ee=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={prevScrollpos:window.pageYOffset,hidden:!0},n.handleScroll=n.handleScroll.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleScroll",value:function(){var e=window.pageYOffset,t=e<700;this.setState({prevScrollpos:e,hidden:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"home page"},r.a.createElement(V,null),r.a.createElement(A,{color:"pink"},r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Skills"),r.a.createElement("div",{className:"skills-wrapper"},r.a.createElement(Z,{name:"javascript"}),r.a.createElement(Z,{name:"html"}),r.a.createElement(Z,{name:"CSS/SASS"}),r.a.createElement(Z,{name:"react"}),r.a.createElement(Z,{name:"java"}),r.a.createElement(Z,{name:"python"}),r.a.createElement(Z,{name:"SQL"}),r.a.createElement(Z,{name:"mongoDB"})))),r.a.createElement(D,{title:"Recent Work"}),r.a.createElement(L,{img:K.a},r.a.createElement("div",null,r.a.createElement("h3",null,"Hey there, I'm Claire, and I'm passionate about developing attractive, functional, and intuitive user experiences. "),r.a.createElement("p",null,"I'm currently a senior at NYU currently studying Computer Science, Web Programming & Applications, and the Business of Entertainment, Media, and Technology. "),r.a.createElement("p",null,"Just a few of my many varied interests include: full-stack development, design, and photography."),r.a.createElement("p",{className:"read-more-link"},r.a.createElement(h.b,{to:"/about"},"Read More")," \u27f6"))),r.a.createElement(P,{title:"Other Interests",linkTitle:"View More",pic1:z.a,pic2:X.a,pic3:F.a}),r.a.createElement(Y,null))}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}}]),a}(r.a.Component),te=(a(16),a(39)),ae=a.n(te);function ne(e){return r.a.createElement("div",{className:"position-wrapper"},r.a.createElement("div",{className:"position-title"},r.a.createElement("h3",null,e.company),r.a.createElement("p",null,e.title),r.a.createElement("p",null,e.date)),r.a.createElement("div",{className:"position-description"},r.a.createElement("ul",null,e.description.map((function(e){return r.a.createElement("li",null,e)})))))}var re=[{title:"Engineering Ambassdaor",company:"Contra",date:"March 2021",description:["Beta tested new features on the remote work platform and provided UX/UI feedback to improve user experience.","Created articles and other content to inform other users about how to get the most value from the platform."]},{title:"UI Engineering Intern",company:"FULLBEAUTY Brands",date:"Sep 2020 - Nov 2020",description:["Developed UI components for FULLBEAUTY\u2019s design system using HTML and Sass by collaborating with product designers.","Created proof of concept to demonstrate how to convert company e-commerce websites into Progressive Web Apps (PWAs) and presented it to leadership."]},{title:"Application Developer Intern",company:"MarketAxess",date:"Jun 2020 - Aug 2020",description:["Enhanced user experiences across our internal applications by interfacing with product managers in Agile sprints to improve UI.","Built and integrated download ability for audit history database records in Javascript and jQuery to help employees manage MarketAxess\u2019 bond trading platform.","Collaborated with other interns to present enhancements to senior leaders and the global management team."]},{title:"Web Intern",company:"Twenty Over Ten",date:"Jan 2020 - Jun 2020",description:["Designed websites alongside 4 lead designers for financial advisors to increase conversions.","Developed front end using HTML, CSS, JavaScript, and our in-house content management system."]},{title:"Course Grader",company:"NYU Courant Institute",date:"Sep 2019 - Dec 2019",description:["Responsible for turning over 50+ grades for Web Development and Programming assignments weekly on a strict deadline.","Provided feedback and training on debugging code, connecting to servers, improving HTML/CSS/Javascript."]}],ie=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-page page"},r.a.createElement(R,{img:ae.a},r.a.createElement("div",{className:"photo-header-section-text"},r.a.createElement("h2",null,"Developer, designer, photographer, \u2013& avid foodie."),r.a.createElement("p",null,"Hi there! I'm Claire, and currently, I'm a senior at NYU studying:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Computer Science"),r.a.createElement("li",null,"Web Programming & Applications"),r.a.createElement("li",null,"Business of Entertainment, Media, and Technology")),r.a.createElement("p",null,"Although I have many varied interests, what I am passionate about is creating attractive, functional, and intuitive user experiences, and I believe that having a holistic view of the software I engineer will result in better end products."),r.a.createElement("p",null,"When I'm not doing that, I'm usually curating playlists on Spotify, attempting to visit every restaurant in the city, or travelling."),r.a.createElement("p",null,"Interested in learning more? Please feel free to contact me at ",r.a.createElement("a",{href:"mailto:cyw336@nyu.edu"},"cyw336@nyu.edu"),". Looking forward to hearing from you!"))),r.a.createElement(A,{color:"white",styles:{"padding-top":"4rem"}},r.a.createElement("div",{className:"section"},r.a.createElement("h2",null,"Experience"),re.map((function(e){return r.a.createElement(ne,{title:e.title,company:e.company,date:e.date,description:e.description})})),r.a.createElement("p",null,r.a.createElement(h.b,{to:"/resume",className:"button"},"Resume")))),r.a.createElement(D,{title:"Recent Work"}),r.a.createElement(Y,null))}}]),a}(r.a.Component),le=a(62),oe=a(40),ce=a.n(oe),se=a(41),me=a.n(se),pe=[{title:"Quarantine Wrapped",src:T.a,button:!0,link:"https://quarantine-wrapped.herokuapp.com/",linkText:"View Demo",tags:"React, node.js, Express, SASS, REST API",description:"A Spotify wrapped clone created with the Spotify API to show users a summary of their Spotify listening activity for the past 6 months."},{title:"Real-Time Multiplayer Sheng Ji",src:E.a,button:!0,link:"https://multiplayer-sheng-ji.herokuapp.com/",linkText:"View Demo",tags:"React, node.js, Express, Socket.io, SASS",description:"Developed a real-time multiplayer web game to play Sheng Ji, a classic Chinese card game. It's a tradition in my family to play this game at get togethers, and ever since my sister and I have gone to college, we haven't had the chance to play. I thought this would be a good temporary solution until we get the chance to be together again."},{title:"Virtual New York City",src:v.a,button:!0,link:"https://clawang.github.io/dotw-final-project",linkText:"View Demo",tags:"HTML, Javascript, CSS Animation, Adobe Illustrator",description:"Illustrated and developed interactive animated web drawings of New York City, as a homage to the city during the thick of the pandemic. I chose locations that meant a lot to me, personally, as I missed the vibrance that they usually held."},{title:"Bon Viveur",src:me.a,button:!0,link:"https://clawang.github.io/bon-viveur",linkText:"View Demo",tags:"React, Google Maps API",description:"Developed a website to display restaurant recommendations in NYC using the Google Maps API and the Yelp API. Markers were populated on the map using the Google Places API, and users can view in map or list format. Restaurants can be filtered by cuisine, category, location, and price."},{title:"CovidStory",src:ce.a,button:!0,link:"https://clawang.github.io/ic-midterm-project",linkText:"View Demo",tags:"HTML, Javascript, p5",description:"Developed a game where you fight Covid particles throughout different countries in multiple levels. You get stronger as you go, but so does the covid. Once you earn enough points, you can purchase upgrades at the shop to help you in your fight. Based off Maple Story."},{title:"Twenty Over Ten Websites",src:w.a,button:!0,link:"/tot",linkText:"See More",tags:"HTML, CSS, jQuery",description:"During my internship at Twenty Over Ten, I designed a number of websites for various financial advisors, and developed them by customizing Twenty Over Ten's content management system using CSS and jQuery. Here are just a few examples."},{title:"Portfolio Website",src:y.a,button:!0,link:"https://github.com/clawang/clawang.github.io/",linkText:"View Source Code",tags:"React, SASS",description:"I developed this website to showcase my professional and personal work using React.js, SASS/CSS. For the homepage, I challenged myself to create a 2D scene entirely out of HTML elements and CSS. Some of the elements are animated, and others (like the Polaroids) are interactive."}],ue=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this;return e=this.props.button?"/"===this.props.link.charAt(0)?r.a.createElement("p",null,r.a.createElement(h.b,{to:this.props.link},r.a.createElement("a",{className:"button",style:{marginLeft:0}},this.props.linkText))):r.a.createElement("p",null,r.a.createElement("a",{href:this.props.link,target:"_blank",className:"button",style:{marginLeft:0}},this.props.linkText)):"",r.a.createElement("div",{className:"gallery-item-wrapper"},r.a.createElement("div",{className:"gallery-item-img"},r.a.createElement("img",{src:this.props.img,onClick:function(){t.props.onClick(t.props.img)}})),r.a.createElement("div",{className:"gallery-item-text"},r.a.createElement("p",{className:"tags"},this.props.tags),r.a.createElement("h2",null,this.props.title),r.a.createElement("p",null,this.props.description),e))}}]),a}(r.a.Component),de=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={visible:!1},n.handleClick=n.handleClick.bind(Object(s.a)(n)),n.handleImgClick=n.handleImgClick.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleClick",value:function(){this.setState({visible:!1})}},{key:"handleImgClick",value:function(e){this.props.lightbox&&(this.setState({visible:!0}),document.getElementById("pop-up-img").src=e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"gallery-wrapper "+(this.props.lightbox?"lightbox":"")},r.a.createElement(le.a,{in:this.state.visible,timeout:100,classNames:"visible"},r.a.createElement("div",{className:"pop-up",onClick:this.handleClick},r.a.createElement("img",{src:"",id:"pop-up-img"}))),this.props.items.map((function(t){return r.a.createElement(ue,{img:t.src,link:t.link,title:t.title,tags:t.tags,description:t.description,linkText:t.linkText,button:t.button,onClick:e.handleImgClick})})),this.props.subpage?r.a.createElement("p",{className:"back-link"},"\u27f5 ",r.a.createElement(h.b,{to:"/work"},"Back to Projects")):r.a.createElement("div",null))}}]),a}(r.a.Component),he=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement(H,{title:"Projects"}),r.a.createElement(A,{color:"white"},r.a.createElement("div",{className:"section"},r.a.createElement(de,{items:pe}))),r.a.createElement(Y,null))}}]),a}(r.a.Component),ge=a(25),ve=a.n(ge),be=a(26),Ee=a.n(be),fe=[{title:"Ankeny Financial",src:"/ankeny.jpg",button:!0,link:"https://ankenyfinancialplanning.com/",linkText:"View Live Website"},{title:"Nexus Wealth Advisors",src:"/nexus.jpg",button:!0,link:"https://nexuswealthadvisors.com/",linkText:"View Live Website"},{title:"Legacy Advisors",src:"/legacy.jpg"},{title:"The Coffeehouse Advisor",src:"/coffeehouse.jpg",button:!1}],ye=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"page tot"},r.a.createElement(H,{title:"Twenty Over Ten"}),r.a.createElement(A,{color:"white"},r.a.createElement("div",{className:"section"},r.a.createElement(de,{items:fe,lightbox:!0,subpage:!0}))),r.a.createElement(Y,null))}}]),a}(r.a.Component),ke=[{src:"nyt.JPG",caption:"Met some travel bloggers that I really admire at the New York Times Travel Show."},{src:"book.jpg",caption:r.a.createElement("span",null,"My picture of London street food in #wanderlust by ",r.a.createElement("a",{href:"https://www.instagram.com/girlvsglobe",target:"_blank"},"@girlvsglobe"),".")},{src:"nomadicmatt.jpg",caption:r.a.createElement("span",null,"Got to meet ",r.a.createElement("a",{href:"https://www.nomadicmatt.com/",target:"_blank"},"Nomadic Matt")," and his team at his book launch in NYC.")}],we=[{src:"/food/gracestreet.jpg",caption:"Grace Street"},{src:"/food/johnsjuice.jpg",caption:"John's Juice"},{src:"/food/goodthanks.jpg",caption:"Good Thanks"},{src:"/food/simo-4.jpg",caption:"Simo Pizza"},{src:"/food/dessertgoals.jpg",caption:"Dessert Goals Festival"},{src:"/food/citizensofbleecker-3.jpg",caption:"Citizens of Bleecekr"},{src:"/food/barpatea.jpg",caption:"Bar Pa Tea"},{src:"/food/charleyst-5.jpg",caption:"Charley St"},{src:"/food/sweetmoment.jpg",caption:"Sweet Moment"},{src:"/food/blankslatetea-8.jpg",caption:"Blank Slate Tea"},{src:"/food/bluestripes-7.jpg",caption:"Blue Stripes"},{src:"/food/thedonutpub-4.jpg",caption:"The Donut Pub"}],je=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement(H,{title:"Hobbies",color:"lightpink"}),r.a.createElement(A,{color:"white",text:!0},r.a.createElement("div",{className:"section"},r.a.createElement("h3",null,"Travel Blog \u2013\xa0Adventure at Work"),r.a.createElement("div",{className:"columns"},r.a.createElement("p",null,"In my junior year of high school, I decided to start a ",r.a.createElement("a",{href:"http://adventureatwork.co",target:"_blank"},"travel blog")," to document my journeys. Although it started out as a simple way to record my memories for later, upon introduction to the travel blog community, I realized that there were people for whom their travel blog was their full-time job!"),r.a.createElement("p",null,"As a student, I could never commit the same amount of time into my blog as the professionals did, but through the travel community I did learn enough to turn my humble blog into a side gig which at its peak reached 80,000 monthly page views! I learned so much about photography, digital marketing, graphic design, and more through this community, and also received some insane opportunities, like the chance to attend the New York Times Travel Show and to see ",r.a.createElement("a",{href:"https://www.amazon.com/wanderlust-Worlds-Unforgettable-Travel-Destinations/dp/006298103X",target:"_blank"},"my photography published in a book"),". And the best part is, I got to meet some of the most incredible people from around the world.")),r.a.createElement("p",null,r.a.createElement("a",{href:"http://adventureatwork.co/",target:"_blank",className:"button"},"Read the Blog")),r.a.createElement(W,{images:ke}))),r.a.createElement(J,{img:"/bluestripes.jpg"}),r.a.createElement(A,{text:!0},r.a.createElement("div",{className:"section"},r.a.createElement("h3",null,"Food Photography"),r.a.createElement("div",{className:"columns"},r.a.createElement("p",null,"As an avid foodie and photographer, I started taking food photography more seriously once I moved to New York. I joined a food publication on campus called Spoon University, and started contributing to their ",r.a.createElement("a",{href:"https://instagram.com/biteclubnyu",target:"_blank"},"Instagram account")," weekly. Due to our sizeable following, I started to work with local restaurants to help them create photography for promotional materials."),r.a.createElement("p",null,"In my Junior year, I was promoted to Social Media Director of our club just as Spoon University the organization got defunded. We decided to rebrand our local chapter into a new publication called ",r.a.createElement("a",{href:"https://www.biteclubnyu.com/",target:"_blank"},"Bite Club")," so that we could continue creating content and supporting restaurants and eateries in the area. Especially during Covid, I'm proud to be able to use our influence to support local businesses in NYC.")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://instagram.com/fooodiesadventures/",target:"_blank",className:"button"},"See my photography")))),r.a.createElement("div",{className:"gallery-full-wrapper"},r.a.createElement("div",{className:"gallery-full"},r.a.createElement(W,{images:we}))),r.a.createElement(Y,null))}}]),a}(r.a.Component),Ne=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement(H,{title:"Resume",color:"orange"}),r.a.createElement(A,{color:"white"},r.a.createElement("div",{className:"section"},r.a.createElement("img",{src:ve.a,className:"resume-img"}),r.a.createElement("p",null,r.a.createElement("a",{href:Ee.a,className:"button",download:!0},"Download")))),r.a.createElement(D,{title:"My Projects"}),r.a.createElement(Y,null))}}]),a}(r.a.Component),Se=(a(59),a(60),a(63)),Oe=a(42),Ce=a.n(Oe);var xe=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={open:!1},n.handleClick=n.handleClick.bind(Object(s.a)(n)),n.handleHover=n.handleHover.bind(Object(s.a)(n)),n.logoClick=n.logoClick.bind(Object(s.a)(n)),n.removeHover=n.removeHover.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleHover",value:function(){var e=document.querySelector(".nav");this.state.open||e.classList.toggle("hover")}},{key:"removeHover",value:function(){this.state.open||document.querySelector(".nav").classList.remove("hover")}},{key:"handleClick",value:function(e){var t=this.state.open;this.setState({open:!t}),t&&document.querySelector(".nav").classList.remove("hover")}},{key:"logoClick",value:function(){this.state.open&&(this.setState({open:!1}),document.querySelector(".nav").classList.remove("hover"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("div",{id:"logo"},r.a.createElement(h.b,{to:"/"},r.a.createElement("img",{src:Ce.a,onClick:this.logoClick}))),r.a.createElement(le.a,{in:this.state.open,timeout:250,classNames:"cross"},r.a.createElement("div",{className:"menu",onMouseEnter:this.handleHover,onMouseLeave:this.removeHover,onClick:this.handleClick},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement(le.a,{in:this.state.open,timeout:350,classNames:"open"},r.a.createElement("div",{className:"nav",key:"nav"},r.a.createElement("div",{className:"nav-container"},r.a.createElement(Ie,{number:"01.",name:"About",link:"/about",onClick:this.handleClick}),r.a.createElement(Ie,{number:"02.",name:"Work",link:"/work",onClick:this.handleClick}),r.a.createElement(Ie,{number:"03.",name:"Play",link:"/play",onClick:this.handleClick}),r.a.createElement(Ie,{number:"04.",name:"Resume",link:"/resume",onClick:this.handleClick})))))}}]),a}(r.a.Component),Ie=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.b,{to:this.props.link},r.a.createElement("div",{className:"nav-item",onClick:this.props.onClick},r.a.createElement("p",null,this.props.number),r.a.createElement("h3",null,this.props.name)))}}]),a}(r.a.Component),Te=Object(d.f)((function(e){var t=e.location,a=Object(n.useState)(t.pathname),i=Object(u.a)(a,2),l=(i[0],i[1]);return Object(n.useEffect)((function(){var e=t.pathname;l(e)}),[t.pathname]),r.a.createElement("div",{className:"App"},r.a.createElement(xe,null),r.a.createElement(d.a,{render:function(e){var t=e.location;return r.a.createElement(Se.a,null,r.a.createElement(le.a,{key:t.pathname,timeout:1e3,classNames:"switch"},r.a.createElement(d.c,{location:t,key:t.pathname},r.a.createElement(d.a,{path:"/about",component:ie}),r.a.createElement(d.a,{path:"/work",component:he}),r.a.createElement(d.a,{path:"/tot",component:ye}),r.a.createElement(d.a,{path:"/play",component:je}),r.a.createElement(d.a,{path:"/resume",component:Ne}),r.a.createElement(d.a,{path:"/",component:ee}))))}}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,null,r.a.createElement(Te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.45cf8518.chunk.js.map