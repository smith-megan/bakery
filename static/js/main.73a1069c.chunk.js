(this.webpackJsonpsweet=this.webpackJsonpsweet||[]).push([[0],{20:function(e,s,t){},21:function(e,s,t){},22:function(e,s,t){},23:function(e,s,t){},24:function(e,s,t){},25:function(e,s,t){},43:function(e,s,t){},44:function(e,s,t){},45:function(e,s,t){},46:function(e,s,t){},47:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t(2),i=t.n(c),r=t(12),n=t.n(r);t(20),t(21),t(22);var l=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)("a",{className:"nav-link",href:"#Order",children:"Order"}),Object(a.jsx)("a",{className:"nav-link",href:"#Favorites",children:"Favorites"}),Object(a.jsx)("a",{className:"nav-link",href:"#About",children:"About"}),Object(a.jsx)("a",{className:"nav-link",href:"#Home",children:"Home"})]})},o=t.p+"static/media/logo-03.8d8d068c.svg";t(23);var d=function(){return Object(a.jsxs)("div",{id:"Home",children:[Object(a.jsxs)("div",{className:"intro",children:[Object(a.jsx)("img",{src:o,alt:"Oh So Sweet Logo",className:"intro-img"}),Object(a.jsx)("h1",{className:"intro-oh",children:"Oh!"}),Object(a.jsx)("h1",{className:"intro-so-sweet",children:"So Sweet"}),Object(a.jsx)("p",{className:"intro-paragraph-p",children:"Fresh, Local, Delightful Treats. Handmade and Delivered"}),Object(a.jsx)("a",{className:"intro-btn",href:"#Order",children:"Get Sweet"})]}),Object(a.jsx)("div",{className:"intro-header-img"})]})};t(24);var j=function(){return Object(a.jsx)("div",{id:"Works",children:Object(a.jsxs)("div",{className:"master-works",children:[Object(a.jsx)("div",{className:"background"}),Object(a.jsx)("div",{className:"works-main",children:Object(a.jsx)("div",{className:"works-div",children:Object(a.jsxs)("div",{className:"works-text",children:[Object(a.jsx)("h1",{className:"works-text-title",children:"- How it Works -"}),Object(a.jsxs)("div",{className:"works-paragraph",children:[Object(a.jsx)("div",{className:"works-img-1"}),Object(a.jsxs)("div",{className:"works-blurb",children:[Object(a.jsx)("h3",{children:"Imagine!"}),Object(a.jsx)("p",{children:"The special treats that would make your event shine. Be creative, custom, and ask others for fun ideas."})]})]}),Object(a.jsxs)("div",{className:"works-paragraph",children:[Object(a.jsx)("div",{className:"works-img-2"}),Object(a.jsxs)("div",{className:"works-blurb",children:[Object(a.jsx)("h3",{children:"Choose!"}),Object(a.jsx)("p",{children:"Flavors, frosting, and fun themes. Decide what combination is the right fit for you and set your party size to make sure there is plenty to go around."})]})]}),Object(a.jsxs)("div",{className:"works-paragraph",children:[Object(a.jsx)("div",{className:"works-img-3"}),Object(a.jsxs)("div",{className:"works-blurb",children:[Object(a.jsx)("h3",{children:"Enjoy!"}),Object(a.jsx)("p",{children:"The magical day with the delivered goodies and maybe start some ideas for your next event to make it just as great as this one."})]})]})]})})}),Object(a.jsx)("div",{className:"background"})]})})};t(25);var h=function(){var e=0,s=1;function t(t){!function(t,a){var c=document.getElementsByClassName("image");t<0?e=c.length-1:a<0?s=c.length-1:a>c.length-1?s=0:t>c.length-1&&(e=0);for(var i=0;i<c.length;i++)c[i].style.display="none";c[s].style.gridArea="b",c[e].style.gridArea="a",c[s].style.display="block",c[e].style.display="block"}(e+=t,s+=t)}return Object(a.jsx)("div",{id:"images",children:Object(a.jsxs)("div",{className:"slide-gallery",children:[Object(a.jsx)("button",{className:"prev",onClick:function(){t(-1)},children:"\u276e"}),Object(a.jsx)("button",{className:"next",onClick:function(){t(1)},children:"\u276f"}),Object(a.jsx)("div",{className:"image image-zero"}),Object(a.jsx)("div",{className:"image image-first"}),Object(a.jsx)("div",{className:"image image-second"}),Object(a.jsx)("div",{className:"image image-third"}),Object(a.jsx)("div",{className:"image image-fourth"}),Object(a.jsx)("div",{className:"image image-fifth"}),Object(a.jsx)("div",{className:"image image-sixth"}),Object(a.jsx)("div",{className:"image image-seventh"}),Object(a.jsx)("div",{className:"image image-eighth"}),Object(a.jsx)("div",{className:"image image-ninth"}),Object(a.jsx)("div",{className:"image image-tenth"})]})})},b=t(14),m=t(13),x=t.n(m);t(43);var u=function(){var e=Object(c.useState)({submitting:!1,status:null}),s=Object(b.a)(e,2),t=s[0],i=s[1],r=function(e,s,t){i({submitting:!1,status:{ok:e,msg:s}}),e&&t.reset()},n=function(e){var s=[];return e.flavors.forEach((function(t,c){s.push(Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{id:t,type:"checkbox",name:t+"-"+e.type}),Object(a.jsx)("label",{htmlFor:"message",children:t})]},t+"-"+c))})),Object(a.jsx)("div",{className:e.type,children:s})};return Object(a.jsxs)("div",{id:"Order",children:[Object(a.jsx)("div",{className:"order-banner",children:Object(a.jsx)("h1",{className:"order-text-title",children:"Let's get some..."})}),Object(a.jsxs)("div",{className:"body",children:[Object(a.jsxs)("div",{className:"handle-overflow",children:[Object(a.jsx)("div",{className:"form-div",id:"letter",children:Object(a.jsxs)("form",{className:"actual-form",onSubmit:function(e){e.preventDefault();var s=e.target;i({submitting:!0}),x()({method:"post",url:"https://formspree.io/f/xeqprzag",data:new FormData(s)}).then((function(e){r(!0,"Thanks! We'll chat more soon! Keep an eye on your inbox.",s),function(){var e=document.getElementById("letter"),s=2,t=setInterval((function(){110===s?clearInterval(t):(e.style.left=s+"%",s+=10)}),50)}()})).catch((function(e){r(!1,e.response.data.error,s)}))},children:[Object(a.jsxs)("div",{className:"cupcakes-header",children:[Object(a.jsx)("div",{className:"cupcake-image"}),Object(a.jsx)("h2",{children:"Cupcakes"}),n({type:"cupcakes",flavors:["Vanilla","Chocolate","Raspberry","Strawberry","Orange"]}),Object(a.jsx)("h3",{children:"frosted with..."}),n({type:"frosting",flavors:["Chocolate","Vanilla","Vanilla Swirl","Strawberry"]})]}),Object(a.jsxs)("div",{className:"cookies-header",children:[Object(a.jsx)("div",{className:"cookie-image"}),Object(a.jsx)("h2",{children:"Cookies"}),n({type:"cookies",flavors:["Chocolate","Vanilla","Snickerdoodle","Macaroons","Peanutbutter Chocolate"]})]}),Object(a.jsxs)("div",{className:"candies-header",children:[Object(a.jsx)("div",{className:"sweets-image"}),Object(a.jsx)("h2",{children:"Candies"}),n({type:"candies",flavors:["Toffee","Fudge","Cake Bites","Peanutbutter Truffles","Lollipops"]})]}),Object(a.jsxs)("div",{className:"additional-info",children:[Object(a.jsx)("div",{className:"stamp"}),Object(a.jsx)("label",{htmlFor:"message",children:"Extra Notes:"}),Object(a.jsx)("textarea",{id:"message",name:"message",placeholder:"Colors, Themes, Details, or Ideas you want to chat about!"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"name",children:"From:"}),Object(a.jsx)("input",{id:"name",type:"name",name:"name",placeholder:"First Last Name",required:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(a.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"email@emailservice.com",required:!0})]}),Object(a.jsx)("button",{className:"contact-button",type:"submit",disabled:t.submitting,children:"Submit"})]})]})}),t.status&&Object(a.jsx)("p",{className:t.status.ok?"":"errorMsg",children:t.status.msg})]}),Object(a.jsx)("div",{className:"order-mailbox"})]})]})};t(44);var O=function(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("a",{className:"foot-link",href:"#Order",children:"Order"}),Object(a.jsx)("a",{className:"foot-link",href:"#Favorites",children:"Favorites"}),Object(a.jsx)("a",{className:"foot-link",href:"#About",children:"About"}),Object(a.jsx)("a",{className:"foot-link",href:"#Home",children:"Home"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"copyright",children:"CopyRight Oh So Sweet 2020"}),Object(a.jsx)("p",{className:"copyright",children:"All Rights Reserved"})]})]})};t(45);var v=function(){return Object(a.jsxs)("div",{id:"About",children:[Object(a.jsx)("div",{className:"about-banner",children:Object(a.jsx)("h1",{className:"about-text-title",children:"Oh! So Sweet Is All About..."})}),Object(a.jsxs)("div",{className:"about-page-main",children:[Object(a.jsx)("div",{className:"about-gallery",children:Object(a.jsx)("div",{className:"home"})}),Object(a.jsx)("div",{className:"color-div",children:Object(a.jsxs)("div",{className:"about-text",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Goodies!"})," A fun and delicious way to treat tastebuds and brighten a day."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Parties!"})," Make party planning a breeze, and bring something special to eat for Birthday Parties, Gender Reveals, Graduations, Friendships, and More."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Fun!"})," Creative, new, and personalized goodies to brighten up days for those that matter most."]})]})})]}),Object(a.jsxs)("div",{className:"about-page-main",children:[Object(a.jsx)("div",{className:"color-div",children:Object(a.jsxs)("div",{className:"about-text",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Started"})," by Melanie Ulrich Oh! So Sweet has grown to bring sweetness and fun to everyone."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Inspired"})," by her time working in a professional bakery Melanie wanted to bring those skills and creativity to everyone around her."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"This Dream"})," is going strong serving delicious treats and creating new delights."]})]})}),Object(a.jsx)("div",{className:"about-gallery",children:Object(a.jsx)("div",{className:"mixing"})})]})]})};t(46);var g=function(){return Object(a.jsxs)("div",{id:"Favorites",children:[Object(a.jsx)("div",{className:"favorite-banner",children:Object(a.jsx)("h1",{className:"favorite-text-title",children:"Some Favorites..."})}),Object(a.jsx)("div",{className:"main-menu",children:function(e){var s=[];return e.forEach((function(e,t,c){s.push(Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsx)("div",{className:"cupcake"+t}),Object(a.jsxs)("div",{className:"cupcake-text",children:[Object(a.jsx)("h2",{children:e[0]}),Object(a.jsx)("p",{children:e[1]})]})]},"menu"+t))})),s}([["The Chocolate-Chocolate","A delicious chocolate cupcake with rich chocolate frosting. A real crowd favorite."],["The Sweet Vanilla","Safe, sweet and marvelous this vanilla is a safe bet for many picky flavorists."],["Strawberry Punch","A fun sweet tangy flavor topped with sliced strawberry in a cute heart, a fun treat for backyard barbeques or pool parties."],["Cherry Twist","Cherry flavored cupcake made from fresh in-season bing cherries and topped with chocolate deliciousness."],["Chocolate Cheesecake","Creamy like cheesecake and rich like chocolate this is sure to be a total hit."],["Cartoon Champion","A favorite for the littles, these bright cupcakes come with custom white chocolate characters on top."]])})]})};var f=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsx)(d,{}),Object(a.jsx)(j,{}),Object(a.jsx)(v,{}),Object(a.jsx)(g,{}),Object(a.jsx)(u,{}),Object(a.jsx)(h,{}),Object(a.jsx)(O,{})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,i=s.getLCP,r=s.getTTFB;t(e),a(e),c(e),i(e),r(e)}))};n.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),p()}},[[47,1,2]]]);
//# sourceMappingURL=main.73a1069c.chunk.js.map