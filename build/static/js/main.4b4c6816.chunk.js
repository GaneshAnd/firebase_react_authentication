(this["webpackJsonpreact-firebase-auth"]=this["webpackJsonpreact-firebase-auth"]||[]).push([[0],{56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),s=a.n(r),i=a(11),l=a.n(i),j=a(19),o=a(15),b=a(18),d=a(8),u=a(62),h=a(59),p=a(60),m=a(58),x=a(36),O=(a(47),x.a.initializeApp({apiKey:"AIzaSyCVr5F8l_Co4PKPw225OPNi8gWiHBygv1Y",authDomain:"fir-producion.firebaseapp.com",projectId:"fir-producion",storageBucket:"fir-producion.appspot.com",messagingSenderId:"1029614709539",appId:"1:1029614709539:web:e455262e75300cdd783a96",measurementId:"G-Q3LF3GDYT3"})),g=O.auth(),v=a(1),f=c.a.createContext();function w(){return Object(n.useContext)(f)}function y(e){var t=e.children,a=Object(n.useState)(""),c=Object(d.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!0),l=Object(d.a)(i,2),j=l[0],o=l[1];Object(n.useEffect)((function(){return g.onAuthStateChanged((function(e){s(e),o(!1)}))}),[]);var b={currentUser:r,signup:function(e,t){return g.createUserWithEmailAndPassword(e,t)},login:function(e,t){return g.signInWithEmailAndPassword(e,t)},logout:function(){return g.signOut()},reSetPassword:function(e){return g.sendPasswordResetEmail(e)}};return Object(v.jsx)(f.Provider,{value:b,children:!j&&t})}var N=a(7),S=a(10);var C=function(){var e=Object(n.useState)({email:"",password:"",confirmPassword:""}),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(d.a)(r,2),i=s[0],x=s[1],O=Object(n.useState)(!1),g=Object(d.a)(O,2),f=g[0],y=g[1],C=Object(N.g)(""),P=w().signup;function k(){return(k=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.password===a.confirmPassword){e.next=3;break}return e.abrupt("return",x("Password do not match"));case 3:return e.prev=3,x(""),y(!0),e.next=8,P(a.email,a.password);case 8:C.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),x("Failed to create account");case 14:return e.prev=14,y(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})))).apply(this,arguments)}function L(e){c(Object(o.a)(Object(o.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))}return Object(v.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(v.jsxs)("div",{className:"w-100 p-2",style:{maxWidth:"400px"},children:[Object(v.jsxs)(u.a,{children:[Object(v.jsx)("h2",{className:"text-primary text-center mt-2 mb-2",children:"Sign Up"}),i&&Object(v.jsx)(h.a,{variant:"danger",children:i}),Object(v.jsxs)(p.a,{className:"p-4",onSubmit:function(e){return k.apply(this,arguments)},children:[Object(v.jsxs)(p.a.Group,{id:"email",children:[Object(v.jsx)(p.a.Label,{children:"Email"}),Object(v.jsx)(p.a.Control,{type:"text",name:"email",onChange:function(e){return L(e)},required:!0})]}),Object(v.jsxs)(p.a.Group,{id:"password",children:[Object(v.jsx)(p.a.Label,{children:"Password"}),Object(v.jsx)(p.a.Control,{type:"password",name:"password",onChange:function(e){return L(e)},required:!0})]}),Object(v.jsxs)(p.a.Group,{id:"confirmPassword",children:[Object(v.jsx)(p.a.Label,{children:"Confirm password"}),Object(v.jsx)(p.a.Control,{type:"password",name:"confirmPassword",onChange:function(e){return L(e)},required:!0})]}),Object(v.jsx)(m.a,{type:"submit",disabled:f,className:"w-100",children:"Sign Up"})]})]}),Object(v.jsxs)("div",{className:"w-100 text-center mt-2",children:["Alredy have an acoount ? ",Object(v.jsx)(S.b,{to:"/login",children:"log in"})]})]})})};var P=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(d.a)(r,2),i=s[0],x=s[1],O=Object(n.useState)(!1),g=Object(d.a)(O,2),f=g[0],y=g[1],C=Object(N.g)(""),P=w().login;function k(){return(k=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,x(""),y(!0),e.next=6,P(a.email,a.password);case 6:C.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),x("Failed to login");case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))).apply(this,arguments)}function L(e){c(Object(o.a)(Object(o.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))}return Object(v.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(v.jsxs)("div",{className:"w-100 p-2",style:{maxWidth:"400px"},children:[Object(v.jsxs)(u.a,{children:[Object(v.jsx)("h2",{className:"text-primary text-center mt-2 mb-2",children:"Log In"}),i&&Object(v.jsx)(h.a,{variant:"danger",children:i}),Object(v.jsxs)(p.a,{className:"p-4",onSubmit:function(e){return k.apply(this,arguments)},children:[Object(v.jsxs)(p.a.Group,{id:"email",children:[Object(v.jsx)(p.a.Label,{children:"Email"}),Object(v.jsx)(p.a.Control,{type:"text",name:"email",onChange:function(e){return L(e)},required:!0})]}),Object(v.jsxs)(p.a.Group,{id:"password",children:[Object(v.jsx)(p.a.Label,{children:"Password"}),Object(v.jsx)(p.a.Control,{type:"password",name:"password",onChange:function(e){return L(e)},required:!0})]}),Object(v.jsx)(m.a,{type:"submit",disabled:f,className:"w-100",children:"Login"}),Object(v.jsx)("div",{className:"w-100 text-center mt-2",children:Object(v.jsx)(S.b,{to:"/forgetPassword",children:"Forget Password ?"})})]})]}),Object(v.jsxs)("div",{className:"w-100 text-center mt-2",children:["Don't have an acoount ? ",Object(v.jsx)(S.b,{to:"/signUp",children:"Sign Up"})]})]})})};var k=function(){var e=w(),t=(e.logout,e.currentUser,Object(n.useState)("")),a=Object(d.a)(t,2);return a[0],a[1],Object(N.g)(""),Object(v.jsx)("div",{className:"w-100 d-flex  justify-content-center",style:{minHeight:"100vh"},children:Object(v.jsxs)("div",{className:"w-100 p-2",style:{maxWidth:"90%"},children:[Object(v.jsxs)(p.a,{className:"form-inline w-100 mt-3 row d-flex justify-content-between",children:[Object(v.jsx)(p.a.Control,{className:"form-control mr-sm-2 col-md-10 ml-3",type:"search",placeholder:"Search","aria-label":"Search"}),Object(v.jsx)(m.a,{className:"btn btn-primary",type:"submit",style:{minWidth:"130px",marginRight:"-10px"},children:"Search"})]}),Object(v.jsxs)("table",{className:"table table-hover mt-4",children:[Object(v.jsx)("thead",{className:"table-primary",children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:"First"}),Object(v.jsx)("th",{scope:"col",children:"Last"}),Object(v.jsx)("th",{scope:"col",children:"Handle"})]})}),Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Mark"}),Object(v.jsx)("td",{children:"Otto"}),Object(v.jsx)("td",{children:"@mdo"})]})})]})]})})},L=a(61);var U=function(){var e=w(),t=e.logout,a=e.currentUser,c=Object(n.useState)(""),r=Object(d.a)(c,2),s=(r[0],r[1]),i=Object(N.g)("");function j(){return(j=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(""),e.next=4,t();case 4:i.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s("failed to logout");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(v.jsx)(v.Fragment,{children:a&&Object(v.jsx)(L.a,{className:" w-100 navbar navbar-expand-lg navbar-light bg-light",children:Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsx)(S.b,{className:"navbar-brand",to:"/",children:Object(v.jsx)("strong",{className:"text-secondary",children:"Expence Tracker"})}),Object(v.jsx)(m.a,{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsxs)("div",{className:"collapse navbar-collapse justify-content-between",id:"navbarSupportedContent",children:[Object(v.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(S.b,{className:"nav-link active","aria-current":"page",to:"/home",children:"Home"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(S.b,{className:"nav-link",to:"/",children:"Add Expence"})})]}),Object(v.jsx)(p.a,{className:"d-flex",children:Object(v.jsx)(m.a,{className:"btn btn-dark  ml-2",type:"button",style:{minWidth:"80px"},onClick:function(){return function(){return j.apply(this,arguments)}()},children:"Logout"})})]})]})})})};var E=function(){var e=Object(n.useState)({email:""}),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(d.a)(r,2),i=s[0],x=s[1],O=Object(n.useState)(!1),g=Object(d.a)(O,2),f=g[0],y=g[1],C=(Object(N.g)(""),w().reSetPassword),P=Object(n.useState)(""),k=Object(d.a)(P,2),L=k[0],U=k[1];function E(){return(E=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,x(""),y(!0),e.next=6,C(a.email);case 6:U("Email has been sent"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),x("Failed to send email");case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))).apply(this,arguments)}return Object(v.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(v.jsxs)("div",{className:"w-100 p-2",style:{maxWidth:"400px"},children:[Object(v.jsxs)(u.a,{children:[Object(v.jsx)("h2",{className:"text-primary text-center mt-2 mb-2",children:"Forget Password"}),i&&Object(v.jsx)(h.a,{variant:"danger",children:i}),L&&Object(v.jsx)(h.a,{variant:"success",children:L}),Object(v.jsxs)(p.a,{className:"p-4",onSubmit:function(e){return E.apply(this,arguments)},children:[Object(v.jsxs)(p.a.Group,{id:"email",children:[Object(v.jsx)(p.a.Label,{children:"Email"}),Object(v.jsx)(p.a.Control,{type:"text",name:"email",onChange:function(e){return function(e){c(Object(o.a)(Object(o.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))}(e)},required:!0})]}),Object(v.jsx)(m.a,{type:"submit",disabled:f,className:"w-100",children:"Continue"}),Object(v.jsxs)("div",{className:"w-100 text-center mt-2",children:["Alredy have an account ",Object(v.jsx)(S.b,{to:"/login",children:"Login"})]})]})]}),Object(v.jsxs)("div",{className:"w-100 text-center mt-2",children:["Don't have an acoount ? ",Object(v.jsx)(S.b,{to:"/signUp",children:"Sign Up"})]})]})})},F=a(41);var W=function(e){var t=e.component,a=Object(F.a)(e,["component"]),n=w().currentUser;return Object(v.jsx)(N.b,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return n?Object(v.jsx)(t,Object(o.a)({},e)):Object(v.jsx)(N.a,{to:"/login"})}}))};var A=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(S.a,{children:Object(v.jsxs)(y,{children:[Object(v.jsx)(U,{}),Object(v.jsxs)(N.d,{children:[Object(v.jsx)(N.b,{exact:!0,path:"/login",component:P}),Object(v.jsx)(N.b,{exact:!0,path:"/signUp",component:C}),Object(v.jsx)(W,{exact:!0,path:"/",component:k}),Object(v.jsx)(W,{exact:!0,path:"/home",component:k}),Object(v.jsx)(N.b,{exact:!0,path:"/forgetPassword",component:E})]})]})})})};a(55);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(A,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.4b4c6816.chunk.js.map