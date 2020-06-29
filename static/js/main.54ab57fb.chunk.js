(this["webpackJsonpjm_redux-auth-reg"]=this["webpackJsonpjm_redux-auth-reg"]||[]).push([[0],{100:function(e,t,a){},160:function(e,t,a){e.exports=a(239)},165:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(29),s=a.n(i),c=(a(165),a(10)),o=a(140),u=a(41),l=a(26);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=a(4),d=a(118),p=a(14),f=a.n(p),b=a(42),h=a(244),O=a(77),v=a(111),E=a.n(v),j="https://conduit.productionready.io/api/",g="".concat(j,"users"),S="".concat(j,"users/login"),w={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},json:!0},I=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E()(Object(O.a)(Object(O.a)({},w),{},{data:JSON.stringify(t),url:g})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E()(Object(O.a)(Object(O.a)({},w),{},{data:JSON.stringify(t),url:S})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=Object(h.a)("SIGN_UP_REQUEST"),y=Object(h.a)("SIGN_UP_SUCCESS"),A=Object(h.a)("SIGN_UP_FAILURE"),_=Object(h.a)("LOG_IN_REQUEST"),z=Object(h.a)("LOG_IN_SUCCESS"),U=Object(h.a)("LOG_IN_FAILURE"),x=Object(h.a)("LOGOUT_SUCCESS"),C=(a(100),a(101),{logOutSuccess:x}),D=function(e){var t=e.logOutSuccess,a=e.username;return r.a.createElement("div",{className:"home"},r.a.createElement("span",{className:"home-title"},"\u041f\u0440\u0438\u0432\u0435\u0442, ".concat(a)),r.a.createElement(d.a,{className:"home-logout",type:"primary",onClick:function(){t()}},"\u0412\u044b\u0445\u043e\u0434"))};D.defaultProps={logOutSuccess:null,username:""};var P=Object(c.b)((function(e){return{username:e.userData.username}}),C)(D),q=a(92),T=a(243),G=a(245),L=a(246),F={email:"",password:""},R={signIn:function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){var n,r,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(_()),t.prev=1,t.next=4,k(e);case 4:n=t.sent,r=n.data.user,i={username:r.username,token:r.token,isAuthorized:!0},a(z(i)),t.next=15;break;case 10:throw t.prev=10,t.t0=t.catch(1),alert("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),a(U()),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}},J=function(e){var t=e.isInputsDisable,a=e.signIn,n=Object(q.a)({initialValues:F,onSubmit:function(){!function(){var e=n.values,t=e.email,r=e.password;a({user:{email:t,password:r}})}()}});return r.a.createElement("form",{onSubmit:n.handleSubmit,className:"form"},r.a.createElement("div",{className:"form-title"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("label",{htmlFor:"email",className:"form-item"},"\u041f\u043e\u0447\u0442\u0430:",r.a.createElement(T.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email",id:"email",name:"email",onChange:n.handleChange,value:n.values.email,disabled:t})),r.a.createElement("label",{htmlFor:"password",className:"form-item"},"\u041f\u0430\u0440\u043e\u043b\u044c:",r.a.createElement(T.a.Password,{id:"password",name:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0440\u043e\u043b\u044c",onChange:n.handleChange,value:n.values.password,iconRender:function(e){return e?r.a.createElement(G.a,null):r.a.createElement(L.a,null)},disabled:t})),r.a.createElement("div",{className:"form-item"},r.a.createElement(d.a,{type:"primary",htmlType:"submit",className:"form-submit",onClick:n.handleSubmit},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(l.b,{to:"sign-up",className:"form-link"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))};J.defaultProps={signIn:null,isInputsDisable:!1};var V=Object(c.b)((function(e){return{isInputsDisable:"requested"===e.signInState}}),R)(J),B=a(79),Q=a(53),W={login:"",email:"",password:"",repeatPassword:""},X=[{id:Object(B.uniqueId)(),title:"\u041b\u043e\u0433\u0438\u043d:",name:"login",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"},{id:Object(B.uniqueId)(),title:"\u041f\u043e\u0447\u0442\u0430:",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443"},{id:Object(B.uniqueId)(),title:"\u041f\u0430\u0440\u043e\u043b\u044c:",name:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"},{id:Object(B.uniqueId)(),title:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:",name:"repeatPassword",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}],Z=Q.a({login:Q.c().max(30,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u043d\u0438\u043a!").required("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"),email:Q.c().email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email").required("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"),password:Q.c().min(8,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439").max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439").matches(/^[A-Za-z0-9]+$/,"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0438 \u0446\u0438\u0444\u0440\u044b").matches(/(?=.*[0-9])/,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0446\u0438\u0444\u0440\u0443").matches(/(?=.*[A-Z])/,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443").required("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"),repeatPassword:Q.c().oneOf([Q.b("password"),null],"\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c").required("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435")}),$={signUp:function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(N()),t.prev=1,t.next=4,I(e);case 4:alert("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e"),a(y()),t.next=13;break;case 8:throw t.prev=8,t.t0=t.catch(1),alert("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"),a(A()),t.t0;case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},H=function(e){var t=Object(q.a)({initialValues:W,validationSchema:Z,onSubmit:function(){a()}}),a=function(){var a=Object(b.a)(f.a.mark((function a(){var n,r,i,s,c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=e.signUp,r=t.values,i=r.login,s=r.email,c=r.password,n({user:{username:i,email:s,password:c}}),t.resetForm();case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),n=e.isInputsDisable;return r.a.createElement("form",{onSubmit:t.handleSubmit,className:"form"},r.a.createElement("div",{className:"form-title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),X.map((function(e){return r.a.createElement("label",{key:e.id,htmlFor:e.name,className:"form-item"},e.title,r.a.createElement(T.a,{type:"password"===e.name||"repeatPassword"===e.name?"password":"text",placeholder:e.placeholder,id:e.name,name:e.name,onChange:t.handleChange,value:t.values[e.name],disabled:n}),t.touched[e.name]&&t.errors[e.name]?r.a.createElement("div",{className:"form-item-error"},t.errors[e.name]):null)})),r.a.createElement("div",{className:"form-item"},r.a.createElement(d.a,{htmlType:"submit",type:"primary",className:"form-submit",onClick:t.handleSubmit,disabled:n},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),r.a.createElement(l.b,{to:"/sign-in",className:"form-link"},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438")))};H.defaultProps={signUp:null,isInputsDisable:!1};var K=Object(c.b)((function(e){var t=e.signUpState;return{isInputsDisable:"requested"===t,signUpState:t}}),$)(H),M=a(95),Y=Object(c.b)((function(e){return{isAuthorized:e.userData.isAuthorized}}),null)((function(e){var t=e.component,a=e.isAuthorized,n=Object(M.a)(e,["component","isAuthorized"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(){return a?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/sign-in"})}}))})),ee=Object(c.b)((function(e){return{isAuthorized:e.userData.isAuthorized}}),null)((function(e){var t=e.component,a=e.isAuthorized,n=Object(M.a)(e,["component","isAuthorized"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(){return a?r.a.createElement(m.a,{to:"/"}):r.a.createElement(t,e)}}))})),te=(a(238),{signInSuccess:z}),ae=function(e){var t=e.dispatch,a=e.isAuthorized;return Object(n.useEffect)((function(){void 0!==localStorage.token&&t(z({isAuthorized:!0,token:localStorage.token,username:localStorage.username}))}),[a]),r.a.createElement(l.a,null,r.a.createElement(m.d,null,r.a.createElement(Y,{path:"/",exact:!0,component:P}),r.a.createElement(ee,{path:"/sign-in",component:V}),r.a.createElement(ee,{path:"/sign-up",component:K}),r.a.createElement(m.a,{to:"/sign-in"})))};ae.defaultProps={dispatch:null,isAuthorized:!1};var ne,re,ie,se=Object(c.b)((function(e){var t=e.userData;return{isAuthorized:t.isAuthorized,userData:t}}),te)(ae),ce=a(24),oe=a(241),ue=function(e,t){localStorage.setItem(String(e),String(t))},le=function(e){localStorage.removeItem(e)},me=Object(oe.a)((ne={},Object(ce.a)(ne,N,(function(){return"requested"})),Object(ce.a)(ne,A,(function(){return"failed"})),Object(ce.a)(ne,y,(function(){return"finished"})),ne),"none"),de=Object(oe.a)((re={},Object(ce.a)(re,_,(function(){return"requested"})),Object(ce.a)(re,U,(function(){return"failed"})),Object(ce.a)(re,z,(function(){return"finished"})),re),"none"),pe={username:"",token:"",isAuthorized:!1},fe=Object(oe.a)((ie={},Object(ce.a)(ie,z,(function(e,t){var a=t.payload,n=a.username,r=a.token,i=a.isAuthorized;return ue("token",r),ue("username",n),{username:n,token:r,isAuthorized:i}})),Object(ce.a)(ie,x,(function(){return le("token"),le("username"),pe})),ie),pe),be=Object(u.c)({signUpState:me,signInState:de,userData:fe}),he=window.__REDUX_DEVTOOLS_EXTENSION__,Oe=he&&he(),ve=Object(u.e)(be,Object(u.d)(Object(u.a)(o.a),Oe));s.a.render(r.a.createElement(c.a,{store:ve},r.a.createElement(l.a,null,r.a.createElement(se,{dispatch:ve.dispatch}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[160,1,2]]]);
//# sourceMappingURL=main.54ab57fb.chunk.js.map