(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"16l3":function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),l=t.n(r);function c(e){var a=e.name,t=e.image_url,r=e.tags,c=e.project_link;return l.a.createElement("div",{className:"project-item"},l.a.createElement("img",{alt:"",src:t}),l.a.createElement("div",{className:"project-inner"},l.a.createElement("div",{className:"project-title"},a),l.a.createElement("div",{className:"category"},r),l.a.createElement("div",{className:"links"},l.a.createElement("a",{href:c,target:"_blank",rel:"noreferrer"},"Live Link"))))}var n=t("vrFN"),o=t("hTlr");a.default=function(){var e=Object(r.useRef)(null),a=Object(r.useState)("all"),t=a[0],i=a[1];Object(r.useEffect)((function(){var e=document.querySelectorAll(".project-item .category");"all"!=t?e.forEach((function(e,a){document.querySelectorAll(".project-item")[a].style.display="block",e.innerHTML.toLowerCase().includes(t.toLowerCase())||(document.querySelectorAll(".project-item")[a].style.display="none")})):document.querySelectorAll(".project-item").forEach((function(e){return e.style.display="block"}))}),[t]);var s=function(e){var a=document.querySelectorAll(".option");i(e.target.innerHTML.toLowerCase()),a.forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active")};return l.a.createElement(o.a,null,l.a.createElement(n.a,{title:"Projects",description:"Here is a collection of many projects that I have worked on, contributed, or built for fun!"}),l.a.createElement("div",{className:"page"},l.a.createElement("h1",{className:"title"},"Projects!"),l.a.createElement("p",{className:"sub-title"},"Here is a collection of many projects that I have worked on, contributed, or built for fun!"),l.a.createElement("div",{className:"page-categories"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"option active",onClick:s},"All")),l.a.createElement("li",null,l.a.createElement("span",{className:"option",onClick:s},"JavaScript")),l.a.createElement("li",null,l.a.createElement("span",{className:"option",onClick:s},"React")),l.a.createElement("li",null,l.a.createElement("span",{className:"option",onClick:s},"Vue")),l.a.createElement("li",null,l.a.createElement("span",{className:"option",onClick:s},"Node.js")),l.a.createElement("li",null,l.a.createElement("span",{className:"option",onClick:s},"Flutter/Dart")),l.a.createElement("li",null,l.a.createElement("span",{className:"option",onClick:s},"Kotlin")))),l.a.createElement("div",{className:"project-items",ref:e},l.a.createElement(c,{name:"Gift Cards Belize",tags:"#React",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1620461000/Screenshot_2021_05_08_at_16_03_09_79b61516a1.png",project_link:"https://giftcards.bz/"}),l.a.createElement(c,{name:"EcoCrypt.org",tags:"#React #Node.js #JavaScript",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1616780380/Screenshot_2021_03_27_at_01_39_31_2e20c61e4f.png",project_link:"https://ecocrypt.org/"}),l.a.createElement(c,{name:"Belize Coronavirus Tracker",tags:"#JavaScript",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1616780119/Screenshot_2021_03_27_at_01_35_10_48b2e4fa7b.png",project_link:"https://lmanzanero.github.io/belize-coronavirus-tracker/"}),l.a.createElement(c,{name:"BettaPay",tags:"#Vue",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1620461285/Screenshot_2021_05_08_at_16_07_54_892743a8fe.png",project_link:"https://bettapay.app/"}),l.a.createElement(c,{name:"BettaPay Mobile",tags:"#Flutter/Dart",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1622399770/Screenshot_2021_05_31_at_02_34_10_e4db41c0eb.png",project_link:"https://bettapay.app/"}),l.a.createElement(c,{name:"EcoCrypt.org Mobile",tags:"#Flutter/Dart",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1620548473/Blog_Cover_85b173ce50.png",project_link:"https://ecocrypt.org/"}),l.a.createElement(c,{name:"Belizing Payments - Android",tags:"#Kotlin",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1620460534/belizing_payments_bdb861e244.png",project_link:"hhttps://payments.belizing.com/"}),l.a.createElement(c,{name:"React Firestore Shopping Cart",tags:"#React #CloudFunctions #firestore",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1623945259/Screenshot_2021_06_17_at_23_54_09_4b9ce0c97b.png",project_link:"https://lmanzanero.github.io/firebase-react-store/"}),l.a.createElement(c,{name:"JavaScript Realtime Quiz",tags:"#JavaScript #Node.js #Socket.io",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1622399771/Screenshot_2021_05_28_at_01_11_53_d46b1e8513.png",project_link:"http://real-time-games-staging.herokuapp.com/real-time-quiz"}),l.a.createElement(c,{name:"JavaScript Calculator",tags:"#JavaScript",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1616779674/Screenshot_2021_03_27_at_01_27_43_99d47c0a15.png",project_link:"https://lmanzanero.github.io/functional-js-calculator/"}),l.a.createElement(c,{name:"JavaScript Weather App",tags:"#JavaScript",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1616780011/Screenshot_2021_03_27_at_01_33_24_005ba354d7.png",project_link:"https://lmanzanero.github.io/weather-app/"}),l.a.createElement(c,{name:"JavaScript Youtube Player",tags:"#JavaScript",image_url:"https://res.cloudinary.com/daeq8bixw/image/upload/v1616780325/Screenshot_2021_03_27_at_01_38_35_371e9928b4.png",project_link:"https://lmanzanero.github.io/video-carousel-slider/"}))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-77a9c6ab088d7db0c612.js.map