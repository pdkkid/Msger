(this.webpackJsonpmsger=this.webpackJsonpmsger||[]).push([[0],{58:function(e,t,r){"use strict";r.r(t);var n=r(3),c=r.n(n),s=r(28),i=r.n(s),a=r(32),o=r(9),u=r(29),j=r.n(u),d=r(4),l=r(34),b=r(22),h=r.n(b),p=r(31),O=r(19),x=r(5),f=Object(n.createContext)({}),g={apiKey:"AIzaSyAIHoxSWXlI6bWZLynpHYF6giGruf465pY",authDomain:"msger-42f49.firebaseapp.com",databaseURL:"https://msger-42f49-default-rtdb.firebaseio.com",projectId:"msger-42f49",storageBucket:"msger-42f49.appspot.com",messagingSenderId:"894659435130",appId:"1:894659435130:web:c70e28dd3d0831f6ea39c3",measurementId:"G-MMQJ13T1N0"},m=function(e){var t=e.children;return O.a.apps.length||O.a.initializeApp(g),Object(x.jsx)("div",{children:Object(x.jsx)(f.Provider,{value:{firebase:O.a.app()},children:t})})},v=Object(n.createContext)({}),I=function(e){var t=e.children,r=Object(n.useContext)(f).firebase,c=function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.auth().signOut();case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=Object(n.useState)({}),i=Object(l.a)(s,2),a=i[0],o=i[1];return Object(x.jsx)(v.Provider,{value:{user:a,setUser:o,logout:c},children:t})},y=(r(25),function(){var e=Object(n.useContext)(v).setUser,t={signInFlow:"popup",signInOptions:[{provider:d.a.auth.EmailAuthProvider.PROVIDER_ID,requireDisplayName:!0},{provider:d.a.auth.GoogleAuthProvider.PROVIDER_ID,requireDisplayName:!0}],signInSuccessUrl:"/",callbacks:{signInSuccessWithAuthResult:function(t){var r=t.user;return e(r),!1}}};return Object(x.jsx)("div",{children:Object(x.jsx)(j.a,{uiConfig:t,firebaseAuth:d.a.auth()})})}),w=function(){var e=Object(n.useContext)(v),t=e.user,r=e.logout;return Object(x.jsxs)("div",{children:["Hello world",t&&t.displayName?Object(x.jsxs)("div",{children:[JSON.stringify(t),Object(x.jsx)("button",{onClick:r,style:{paddingLeft:"20px"},children:"Sign out"})]}):Object(x.jsx)(y,{})]})},C=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Msger"}),Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"Chat Room 1"}),Object(x.jsx)("li",{children:"Chat Room 2"})]})]})},S=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(C,{}),Object(x.jsx)(a.a,{children:Object(x.jsx)(o.c,{children:Object(x.jsx)(o.a,{exact:!0,path:"/",component:w})})})]})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(m,{children:Object(x.jsx)(I,{children:Object(x.jsx)(S,{})})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.48767d89.chunk.js.map