const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainPage-Buyn0u05.js","assets/react-vendor-DNISrPOH.js","assets/vendor-DSzhlL7V.js","assets/ant-design-vendor-niO4Y5v_.js","assets/Authorization-CquqVw_a.js","assets/Button-DACnu1e_.js","assets/Button-YNIpHdYX.css","assets/Authorization-Ckvp1SC3.css","assets/LoginPage-CUGlTBJc.js","assets/NotFoundPage-CUSLH0IZ.js","assets/SignUpPage-BEJ3Jaby.js","assets/SignUpPage-DpCR2OMY.css","assets/AimsPage-D0foWnib.js","assets/CategoryPage-CZGtogLg.js"])))=>i.map(i=>d[i]);
var s1=Object.defineProperty;var n1=(e,s,a)=>s in e?s1(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a;var l=(e,s,a)=>n1(e,typeof s!="symbol"?s+"":s,a);import{r as n,j as t,m as z,h as g,o as x,u as a1,N as o1,k as r1,l as H,n as T,p as i1,B as l1}from"./react-vendor-DNISrPOH.js";import{aN as A,F as G}from"./vendor-DSzhlL7V.js";import{s as _,d as c1,B as C1}from"./ant-design-vendor-niO4Y5v_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=a(i);fetch(i.href,c)}})();class d1 extends n.Component{constructor(){super(...arguments);l(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(a,o){console.error("Uncaught error:",a,o)}render(){return this.state.hasError?t.jsx("h1",{children:"Something went wrong."}):this.props.children}}const q=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];function h1(e){return q.includes(e)}class g1{constructor(){l(this,"user",null);l(this,"isAuthenticated",!1);l(this,"loading",!1);l(this,"login","");l(this,"password","");l(this,"userName","");l(this,"availableImages",q);l(this,"isLoginInvalid",!1);l(this,"isPasswordInvalid",!1);l(this,"setLogin",g(s=>{this.login=s.toLowerCase().trim(),this.validateLogin()}));l(this,"resetForm",g(()=>{this.login="",this.password="",this.userName=""}));l(this,"setPassword",g(s=>{this.password=s.trim(),this.validatePassword()}));l(this,"setUserName",g(s=>{this.userName=s.trimStart()}));l(this,"isFormValid",g(()=>this.login.trim()!==""&&this.password.trim()!==""&&this.userName.trim()!==""&&!this.isPasswordInvalid));l(this,"validatePassword",g(()=>{this.password.length>5?this.isPasswordInvalid=!1:this.isPasswordInvalid=!0}));l(this,"checkIfLoginExists",g(()=>localStorage.getItem("signupLogin")===this.login));l(this,"validateLogin",g(()=>{const s=/^[A-Za-z]+$/;this.login&&!s.test(this.login)?this.isLoginInvalid=!0:this.isLoginInvalid=!1}));l(this,"getRandomImage",()=>{const s=Math.floor(Math.random()*this.availableImages.length);return this.availableImages[s]});l(this,"signUp",g(s=>{if(this.checkIfLoginExists()){_.error({message:"Ошибка",description:"Пользователь с таким логином уже существует. Введите другой логин."});return}this.loading=!0,setTimeout(()=>{const a=A.SHA256(this.login).toString(),o=A.SHA256(this.password).toString();localStorage.setItem("signupLogin",a),localStorage.setItem("signupUserName",this.userName),localStorage.setItem("signupPassword",o);const i=this.getRandomImage();localStorage.setItem("userImage",i),localStorage.setItem("userName",this.userName),_.success({message:"Вы успешно зарегистрировались",description:"Используйте регистриционные данные для входа"}),this.loading=!1,this.resetForm(),s()},2e3)}));l(this,"loginAction",g(s=>{this.loading=!0,setTimeout(()=>{const a=A.SHA256(this.login).toString(),o=A.SHA256(this.password).toString(),i=localStorage.getItem("signupLogin"),c=localStorage.getItem("signupPassword"),r=localStorage.getItem("signupUserName");if(i&&c)if(i===a&&c===o){let C=localStorage.getItem("userImage");h1(C)||(C=this.getRandomImage(),localStorage.setItem("userImage",C)),this.user={id:1,userNameInfo:r,avatar:C},this.isAuthenticated=!0,localStorage.setItem("authUser",JSON.stringify(this.user)),r&&(localStorage.setItem("userName",r),this.userName=r),this.loading=!1,s()}else this.loading=!1,_.error({message:"Ошибка в авторизации",description:"Не правильно ввели логи или пароль, попробуйте еще раз или пройдите регистрацию"});else this.loading=!1,_.error({message:"Ошибка в авторизации",description:"Убедитесь в верности введенных данных"})},2e3)}));l(this,"logout",g(()=>{this.isAuthenticated=!1,localStorage.removeItem("authUser")}));l(this,"onDeleteAccount",g(()=>{this.user=null,this.isAuthenticated=!1,localStorage.removeItem("authUser"),localStorage.removeItem("signupLogin"),localStorage.removeItem("signupPassword"),localStorage.removeItem("userName")}));l(this,"loadUser",g(()=>{const s=localStorage.getItem("authUser");s&&(this.user=JSON.parse(s),this.isAuthenticated=!0)}));l(this,"loadUserName",g(()=>{const s=localStorage.getItem("userName");s&&(this.userName=s)}));z(this),this.loadUser(),this.loadUserName()}areFieldsFilled(s){return Object.values(s).every(a=>{if(typeof a=="string")return a.trim()!==""})}}const I=new g1,O="theme",R={dark:"dark",light:"light"};class u1{constructor(){l(this,"isDark");l(this,"toggleTheme",()=>{this.isDark=!this.isDark,localStorage.setItem(O,this.isDark?R.dark:R.light),this.applyGlobalStyles()});l(this,"applyGlobalStyles",()=>{this.isDark?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme"))});const s=localStorage.getItem(O);this.isDark=s?s===R.dark:!1,this.applyGlobalStyles(),z(this)}}const m1=new u1,p1="modulepreload",f1=function(e){return"/"+e},B={},L=function(s,a,o){let i=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),C=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.allSettled(a.map(m=>{if(m=f1(m),m in B)return;B[m]=!0;const d=m.endsWith(".css"),v=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${v}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":p1,d||(u.as="script"),u.crossOrigin="",u.href=m,C&&u.setAttribute("nonce",C),document.head.appendChild(u),d)return new Promise((w,E)=>{u.addEventListener("load",w),u.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(r){const C=new Event("vite:preloadError",{cancelable:!0});if(C.payload=r,window.dispatchEvent(C),!C.defaultPrevented)throw r}return i.then(r=>{for(const C of r||[])C.status==="rejected"&&c(C.reason);return s().catch(c)})},v1=n.lazy(async()=>L(async()=>{const{MainPage:e}=await import("./MainPage-Buyn0u05.js");return{MainPage:e}},__vite__mapDeps([0,1,2,3,4,5,6,7])).then(({MainPage:e})=>({default:e}))),x1=n.lazy(async()=>L(async()=>{const{LoginPage:e}=await import("./LoginPage-CUGlTBJc.js");return{LoginPage:e}},__vite__mapDeps([8,1,2,3,4,5,6,7])).then(({LoginPage:e})=>({default:e}))),J=n.lazy(async()=>L(async()=>{const{NotFoundPage:e}=await import("./NotFoundPage-CUSLH0IZ.js");return{NotFoundPage:e}},__vite__mapDeps([9,1,2,3])).then(({NotFoundPage:e})=>({default:e}))),w1=n.lazy(async()=>L(async()=>{const{SignUpPage:e}=await import("./SignUpPage-BEJ3Jaby.js");return{SignUpPage:e}},__vite__mapDeps([10,1,2,3,5,6,11])).then(({SignUpPage:e})=>({default:e}))),j1=n.lazy(async()=>L(async()=>{const{AimsPage:e}=await import("./AimsPage-D0foWnib.js");return{AimsPage:e}},__vite__mapDeps([12,1,2,3])).then(({AimsPage:e})=>({default:e}))),y1=n.lazy(async()=>L(async()=>{const{CategoryPage:e}=await import("./CategoryPage-CZGtogLg.js");return{CategoryPage:e}},__vite__mapDeps([13,1,2,3])).then(({CategoryPage:e})=>({default:e}))),Z="/",W="/aims",Y="/category",b="/login",D="/signup",I1={notFound:"*",mainPage:Z,loginPage:b,signUpPage:D,aimsPage:W,category:Y},{notFound:L1,mainPage:E1,loginPage:S1,signUpPage:V1,aimsPage:H1,category:N1}=I1,P1={loginPage:{path:S1,element:t.jsx(x1,{}),authorization:!1},signUpPage:{path:V1,element:t.jsx(w1,{}),authorization:!1},notFound:{path:L1,element:t.jsx(J,{}),authorization:!1},mainPage:{path:E1,element:t.jsx(v1,{})},aimsPage:{path:H1,element:t.jsx(j1,{})},category:{path:N1,element:t.jsx(y1,{})}};x(()=>{var e;return I.user?t.jsxs("div",{children:[t.jsxs("h2",{children:["Добро пожаловать, ",I.user.userNameInfo,"!"]}),I.user.avatar&&t.jsx("img",{src:`../../shared/assets/${(e=I.user)==null?void 0:e.avatar}`,alt:"User Avatar"})]}):null});const M1=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V3C11 3.55228 11.4477 4 12 4C12.5523 4 13 3.55228 13 3V2ZM13 21C13 20.4477 12.5523 20 12 20C11.4477 20 11 20.4477 11 21V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V21ZM2 11C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H3C3.55228 13 4 12.5523 4 12C4 11.4477 3.55228 11 3 11H2ZM21 11C20.4477 11 20 11.4477 20 12C20 12.5523 20.4477 13 21 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H21ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM19.7782 5.63597C20.1687 5.24544 20.1687 4.61228 19.7782 4.22176C19.3876 3.83123 18.7545 3.83123 18.3639 4.22176L17.6568 4.92886C17.2663 5.31939 17.2663 5.95255 17.6568 6.34308C18.0474 6.7336 18.6805 6.7336 19.071 6.34308L19.7782 5.63597ZM6.34312 19.071C6.73365 18.6805 6.73365 18.0473 6.34312 17.6568C5.9526 17.2663 5.31943 17.2663 4.92891 17.6568L4.2218 18.3639C3.83128 18.7544 3.83128 19.3876 4.2218 19.7781C4.61233 20.1686 5.24549 20.1686 5.63602 19.7781L6.34312 19.071ZM19.7782 19.7784C19.3877 20.1689 18.7546 20.1689 18.364 19.7784L17.6569 19.0713C17.2664 18.6808 17.2664 18.0476 17.6569 17.6571C18.0474 17.2666 18.6806 17.2666 19.0711 17.6571L19.7782 18.3642C20.1688 18.7547 20.1688 19.3879 19.7782 19.7784ZM6.34322 6.34337C5.95269 6.73389 5.31953 6.73389 4.929 6.34337L4.2219 5.63626C3.83137 5.24574 3.83137 4.61257 4.2219 4.22205C4.61242 3.83152 5.24559 3.83152 5.63611 4.22205L6.34322 4.92915C6.73374 5.31968 6.73374 5.95284 6.34322 6.34337Z"})),A1=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.7724 2C15.3321 3.40126 14.2925 4.48397 13 4.85821V5.14175C14.2925 5.51599 15.3322 6.59872 15.7724 8H16.2276C16.6679 6.59873 17.7075 5.516 19 5.14175V4.85821C17.7075 4.48396 16.6679 3.40125 16.2276 2H15.7724ZM9.33741 3.54949C9.44878 3.15493 9.30804 2.73236 8.98233 2.48337C8.65661 2.23439 8.21192 2.20943 7.86039 2.42042C4.95075 4.16679 3 7.35516 3 11.0001C3 12.327 3.25842 13.5935 3.72768 14.7521C3.77367 14.6541 3.81507 14.5506 3.85111 14.4417C4.06985 13.7807 4.6046 13.2685 5.27285 13.0793C5.0949 12.4163 5 11.7193 5 11.0001C5 8.96964 5.75618 7.11526 7.00392 5.70384C7.00131 5.8023 7 5.90106 7 6.00012C7 12.0753 11.9249 17.0001 18 17.0001C18.0991 17.0001 18.1979 16.9988 18.2963 16.9962C16.8849 18.244 15.0305 19.0001 13 19.0001C12.2719 19.0001 11.5666 18.9029 10.8962 18.7207C10.6853 19.365 10.1711 19.8707 9.52401 20.0727C9.40202 20.1108 9.27958 20.1654 9.15998 20.2363C10.3423 20.7284 11.6394 21.0001 13 21.0001C16.645 21.0001 19.8334 19.0494 21.5797 16.1397C21.7907 15.7882 21.7658 15.3435 21.5168 15.0178C21.2678 14.6921 20.8452 14.5513 20.4507 14.6627C19.6727 14.8823 18.8509 15.0001 18 15.0001C13.0294 15.0001 9 10.9707 9 6.00012C9 5.1492 9.11781 4.32745 9.33741 3.54949ZM3 17.8582C4.29248 17.484 5.33215 16.4013 5.7724 15H6.22762C6.66787 16.4013 7.70753 17.484 9 17.8582V18.1418C7.70752 18.516 6.66785 19.5987 6.22761 21H5.77241C5.33217 19.5987 4.29249 18.516 3 18.1417V17.8582Z"})),_1=e=>n.createElement("svg",{width:100,height:41,viewBox:"0 0 100 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M90.3433 4.49207H85.0869V0.822754H100V4.49207H94.744V18.1776H90.3433V4.49207Z"}),n.createElement("path",{d:"M70.5508 0.822754H83.0194V4.24414H74.9515V7.64074H82.2859V10.8638H74.9515V14.7562H83.0194V18.1776H70.5508V0.822754Z"}),n.createElement("path",{d:"M60.1521 18.4995C58.9786 18.4995 57.8947 18.3342 56.9005 18.0036C55.9062 17.6731 55.0424 17.1524 54.3089 16.4417C53.5755 15.7144 52.9969 14.7888 52.5731 13.6649C52.1656 12.541 51.9619 11.1939 51.9619 9.62371V9.12785C51.9619 7.62376 52.1738 6.33454 52.5976 5.26019C53.0213 4.16932 53.5999 3.27678 54.3334 2.58259C55.0668 1.87186 55.9225 1.35122 56.9005 1.02065C57.8784 0.673549 58.9215 0.5 60.0298 0.5C61.0078 0.5 61.9205 0.615699 62.768 0.847097C63.6156 1.0785 64.3653 1.44212 65.0173 1.93798C65.6692 2.4173 66.2071 3.03712 66.6309 3.79743C67.0709 4.55773 67.3561 5.4668 67.4865 6.52462H62.9392C62.8251 6.06182 62.6621 5.68167 62.4502 5.38416C62.2383 5.08665 62.002 4.85525 61.7412 4.68996C61.4804 4.50815 61.2033 4.38419 60.91 4.31807C60.6166 4.25196 60.3232 4.2189 60.0298 4.2189C59.5083 4.2189 59.0275 4.30154 58.5874 4.46683C58.1636 4.63211 57.7969 4.90483 57.4872 5.28499C57.1775 5.66514 56.9331 6.16926 56.7538 6.79734C56.5908 7.42542 56.5093 8.20226 56.5093 9.12785V9.62371C56.5093 10.5493 56.5989 11.3427 56.7782 12.0038C56.9575 12.6484 57.202 13.1773 57.5117 13.5905C57.8376 14.0037 58.2207 14.3095 58.6607 14.5079C59.1171 14.6897 59.6142 14.7806 60.1521 14.7806C60.5921 14.7806 61.0241 14.7227 61.4478 14.607C61.8879 14.4913 62.2709 14.3095 62.5969 14.0616C62.9392 13.8137 63.2162 13.5079 63.4281 13.1443C63.64 12.7641 63.7541 12.3096 63.7704 11.7807H60.641V8.9543H67.8533V10.1196C67.8533 11.6071 67.6577 12.8798 67.2665 13.9376C66.8916 14.9955 66.3619 15.8632 65.6774 16.5409C64.9928 17.2185 64.1779 17.7144 63.2325 18.0284C62.3035 18.3425 61.2767 18.4995 60.1521 18.4995Z"}),n.createElement("path",{d:"M35.0967 0.822754H41.5755C42.8631 0.822754 44.0121 1.00457 45.0227 1.36819C46.0332 1.71529 46.8889 2.23594 47.5897 2.93013C48.2906 3.62433 48.8284 4.49207 49.2033 5.53336C49.5782 6.57465 49.7656 7.77297 49.7656 9.1283V9.62415C49.7656 11.0125 49.57 12.2439 49.1789 13.3183C48.804 14.3761 48.2498 15.2686 47.5164 15.9959C46.7992 16.7066 45.9191 17.252 44.876 17.6322C43.8328 17.9958 42.6512 18.1776 41.331 18.1776H35.0967V0.822754ZM41.0865 14.5083C41.6407 14.5083 42.1622 14.4257 42.6512 14.2604C43.1564 14.0786 43.5965 13.7976 43.9714 13.4174C44.3626 13.0373 44.6641 12.5332 44.876 11.9051C45.1042 11.277 45.2182 10.5167 45.2182 9.62415V9.1283C45.2182 8.28535 45.1123 7.57463 44.9004 6.99613C44.7048 6.40111 44.4278 5.92178 44.0692 5.55816C43.7269 5.178 43.3194 4.90528 42.8468 4.74C42.3741 4.57471 41.8688 4.49207 41.331 4.49207H39.4974V14.5083H41.0865Z"}),n.createElement("path",{d:"M24.4499 18.4999C23.309 18.4999 22.274 18.3512 21.3449 18.0537C20.4322 17.7396 19.6499 17.2851 18.9979 16.6901C18.3623 16.0785 17.8652 15.3182 17.5066 14.4091C17.1643 13.5001 16.9932 12.4423 16.9932 11.2357V0.822754H21.3938V10.715C21.3938 12.0538 21.622 13.0703 22.0784 13.7645C22.5348 14.4422 23.3253 14.781 24.4499 14.781C25.6071 14.781 26.4057 14.4422 26.8458 13.7645C27.2859 13.0703 27.5059 12.0621 27.5059 10.7398V0.822754H31.9066V11.2357C31.9066 12.4423 31.7354 13.5001 31.3932 14.4091C31.0509 15.3182 30.5538 16.0785 29.9018 16.6901C29.2662 17.2851 28.4838 17.7396 27.5548 18.0537C26.6421 18.3512 25.6071 18.4999 24.4499 18.4999Z"}),n.createElement("path",{d:"M0 0.822754H8.19016C10.1949 0.822754 11.6537 1.2277 12.5664 2.0376C13.4791 2.83096 13.9355 3.97142 13.9355 5.45899C13.9355 6.35152 13.7073 7.12009 13.2509 7.7647C12.7946 8.39279 12.1752 8.84732 11.3929 9.1283C12.4034 9.3597 13.202 9.83076 13.7888 10.5415C14.3756 11.2357 14.6689 12.1447 14.6689 13.2687C14.6689 14.7893 14.1718 15.9876 13.1776 16.8636C12.1997 17.7396 10.6187 18.1776 8.43464 18.1776H0V0.822754ZM7.45671 14.7562C8.51613 14.7562 9.24958 14.5992 9.65705 14.2852C10.0645 13.9546 10.2683 13.4505 10.2683 12.7728C10.2683 12.0952 10.0564 11.591 9.6326 11.2605C9.22513 10.9299 8.48354 10.7646 7.40781 10.7646H4.40068V14.7562H7.45671ZM7.11444 7.73991C8.05977 7.73991 8.69542 7.59115 9.0214 7.29364C9.36367 6.9796 9.53481 6.5416 9.53481 5.97963C9.53481 5.40114 9.36367 4.9714 9.0214 4.69041C8.69542 4.3929 8.06792 4.24414 7.13888 4.24414H4.40068V7.73991H7.11444Z"}),n.createElement("path",{d:"M93.8936 25.8997H96.8105V27.3397C96.8927 27.1663 97.0159 26.9797 97.1803 26.7797C97.3583 26.5797 97.5637 26.393 97.7965 26.2197C98.0293 26.0463 98.2895 25.9063 98.5771 25.7996C98.8784 25.693 99.2002 25.6396 99.5426 25.6396C99.7754 25.6396 99.9603 25.653 100.097 25.6796C100.234 25.7063 100.357 25.733 100.467 25.7597V28.4197C100.399 28.3797 100.241 28.333 99.9945 28.2797C99.748 28.2263 99.4604 28.1997 99.1318 28.1997C98.4059 28.1997 97.8787 28.4063 97.55 28.8197C97.2214 29.233 97.057 29.733 97.057 30.3197V36.4998H93.8936V25.8997Z"}),n.createElement("path",{d:"M87.0153 36.7598C86.221 36.7598 85.4746 36.6531 84.7762 36.4398C84.0915 36.2131 83.4957 35.8731 82.989 35.4197C82.4823 34.9664 82.0852 34.3997 81.7976 33.7197C81.51 33.0264 81.3662 32.2197 81.3662 31.2997V30.8997C81.3662 30.0197 81.5032 29.253 81.7771 28.5997C82.0646 27.9463 82.4481 27.3997 82.9274 26.9597C83.4204 26.5197 83.9956 26.193 84.6529 25.9797C85.324 25.753 86.0429 25.6396 86.8098 25.6396C88.6038 25.6396 89.9596 26.093 90.8772 26.9997C91.7947 27.893 92.2535 29.193 92.2535 30.8997V31.9997H84.6118C84.6255 32.413 84.7009 32.7664 84.8378 33.0597C84.9748 33.3397 85.1528 33.5731 85.3719 33.7597C85.591 33.9464 85.8375 34.0864 86.1114 34.1797C86.399 34.2597 86.7003 34.2997 87.0153 34.2997C87.6178 34.2997 88.0903 34.2131 88.4327 34.0397C88.7887 33.8531 89.0215 33.6064 89.1311 33.2997H92.0481C91.8289 34.4597 91.288 35.3264 90.4252 35.8997C89.5625 36.4731 88.4258 36.7598 87.0153 36.7598ZM86.9126 28.0797C86.625 28.0797 86.3442 28.113 86.0703 28.1797C85.8101 28.2463 85.5705 28.3597 85.3514 28.5197C85.1459 28.6663 84.9748 28.8597 84.8378 29.0997C84.7146 29.3397 84.6461 29.633 84.6324 29.9797H89.1516C89.1516 29.6064 89.09 29.2997 88.9668 29.0597C88.8435 28.8197 88.6792 28.6263 88.4737 28.4797C88.282 28.333 88.0492 28.233 87.7753 28.1797C87.5014 28.113 87.2138 28.0797 86.9126 28.0797Z"}),n.createElement("path",{d:"M69.3389 25.8997H72.2558V27.3397C72.5297 26.873 72.9543 26.473 73.5294 26.1397C74.1183 25.8063 74.8989 25.6396 75.8712 25.6396C77.1722 25.6396 78.1514 25.9863 78.8087 26.6797C79.4798 27.3597 79.8153 28.333 79.8153 29.5997V36.4998H76.6518V30.2997C76.6518 29.6064 76.4943 29.0863 76.1794 28.7397C75.8781 28.3797 75.3782 28.1997 74.6798 28.1997C74.2963 28.1997 73.9677 28.2597 73.6938 28.3797C73.4199 28.4863 73.1939 28.633 73.0159 28.8197C72.8379 29.0063 72.7078 29.233 72.6256 29.4997C72.5434 29.753 72.5023 30.0197 72.5023 30.2997V36.4998H69.3389V25.8997Z"}),n.createElement("path",{d:"M56.9014 25.8997H59.8183V27.3397C60.0922 26.873 60.5168 26.473 61.0919 26.1397C61.6808 25.8063 62.4614 25.6396 63.4337 25.6396C64.7347 25.6396 65.7139 25.9863 66.3712 26.6797C67.0423 27.3597 67.3778 28.333 67.3778 29.5997V36.4998H64.2143V30.2997C64.2143 29.6064 64.0568 29.0863 63.7419 28.7397C63.4406 28.3797 62.9407 28.1997 62.2423 28.1997C61.8588 28.1997 61.5302 28.2597 61.2563 28.3797C60.9824 28.4863 60.7564 28.633 60.5784 28.8197C60.4004 29.0063 60.2703 29.233 60.1881 29.4997C60.1059 29.753 60.0648 30.0197 60.0648 30.2997V36.4998H56.9014V25.8997Z"}),n.createElement("path",{d:"M48.3753 36.7598C47.7864 36.7598 47.2592 36.6731 46.7936 36.4998C46.3416 36.3264 45.9582 36.0931 45.6432 35.7997C45.3282 35.4931 45.0886 35.1397 44.9242 34.7397C44.7599 34.3264 44.6777 33.8797 44.6777 33.3997C44.6777 32.3464 45.0064 31.5397 45.6637 30.9797C46.3348 30.4197 47.3413 30.1397 48.6834 30.1397H51.7853V29.6997C51.7853 29.0597 51.6278 28.6197 51.3128 28.3797C50.9978 28.1263 50.5664 27.9997 50.0187 27.9997C49.4983 27.9997 49.1148 28.0797 48.8683 28.2397C48.6218 28.3997 48.4849 28.653 48.4575 28.9997H45.294C45.3214 28.5197 45.4446 28.0797 45.6637 27.6797C45.8829 27.2663 46.191 26.913 46.5881 26.6197C46.999 26.313 47.4988 26.073 48.0877 25.8997C48.6766 25.7263 49.3545 25.6396 50.1214 25.6396C50.8335 25.6396 51.484 25.7196 52.0729 25.8797C52.6754 26.0263 53.189 26.273 53.6135 26.6197C54.038 26.953 54.3667 27.393 54.5995 27.9397C54.8323 28.473 54.9487 29.1263 54.9487 29.8997V33.7997C54.9487 34.3597 54.9624 34.8531 54.9898 35.2797C55.0172 35.6931 55.0583 36.0998 55.1131 36.4998H52.1139C52.0866 36.2731 52.0592 36.0731 52.0318 35.8997C52.0181 35.7264 52.0112 35.5131 52.0112 35.2597C51.6826 35.6864 51.2238 36.0464 50.6349 36.3398C50.0597 36.6198 49.3065 36.7598 48.3753 36.7598ZM49.4024 34.5997C50.0734 34.5997 50.6349 34.4131 51.0868 34.0397C51.5525 33.6664 51.7853 33.1531 51.7853 32.4997V32.0597H49.2997C48.8341 32.0597 48.4849 32.1797 48.252 32.4197C48.0329 32.6597 47.9234 32.9397 47.9234 33.2597C47.9234 33.6464 48.0329 33.9664 48.252 34.2197C48.4849 34.4731 48.8683 34.5997 49.4024 34.5997Z"}),n.createElement("path",{d:"M42.0083 36.6201C41.3509 36.6201 40.7826 36.5668 40.3033 36.4601C39.824 36.3535 39.4268 36.1601 39.1119 35.8801C38.8106 35.5868 38.5846 35.1935 38.434 34.7001C38.2833 34.1934 38.208 33.5468 38.208 32.7601V22.5H41.3715V32.3001C41.3715 32.6334 41.392 32.9134 41.4331 33.1401C41.4742 33.3668 41.5427 33.5468 41.6385 33.6801C41.7481 33.8134 41.8987 33.9134 42.0904 33.9801C42.2822 34.0334 42.5218 34.0601 42.8094 34.0601C42.9738 34.0601 43.1107 34.0601 43.2203 34.0601C43.3298 34.0468 43.4394 34.0334 43.5489 34.0201V36.5601C43.1381 36.6001 42.6245 36.6201 42.0083 36.6201Z"}),n.createElement("path",{d:"M25.4668 25.8997H28.3838V27.3397C28.5207 27.1263 28.6919 26.9197 28.8973 26.7197C29.1164 26.5063 29.3698 26.3197 29.6574 26.1597C29.945 25.9997 30.2668 25.873 30.6228 25.7797C30.9789 25.6863 31.3624 25.6396 31.7732 25.6396C33.307 25.6396 34.471 26.0797 35.2653 26.9597C36.0596 27.8397 36.4568 29.153 36.4568 30.8997V31.2997C36.4568 32.2064 36.3472 32.9997 36.1281 33.6797C35.909 34.3597 35.594 34.9264 35.1832 35.3797C34.7723 35.8331 34.2793 36.1798 33.7041 36.4198C33.129 36.6464 32.4853 36.7598 31.7732 36.7598C31.1569 36.7598 30.5681 36.6264 30.0066 36.3598C29.4588 36.0798 29 35.6797 28.6303 35.1597V40.4998H25.4668V25.8997ZM31.0131 34.2197C31.6431 34.2197 32.1635 33.9731 32.5743 33.4797C32.9989 32.9864 33.2111 32.2597 33.2111 31.2997V30.8997C33.2111 29.9797 33.0057 29.2997 32.5949 28.8597C32.1977 28.4063 31.6705 28.1797 31.0131 28.1797C30.3421 28.1797 29.7738 28.3863 29.3082 28.7997C28.8562 29.1997 28.6303 29.7997 28.6303 30.5997V31.5997C28.6303 32.4397 28.8562 33.0864 29.3082 33.5397C29.7738 33.9931 30.3421 34.2197 31.0131 34.2197Z"})),b1=()=>t.jsx(k1,{disableAntColor:!0,to:Z,children:t.jsx(_1,{})});function Z1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const k1=({target:e,to:s,onClick:a,disableAntColor:o=!1,...i})=>{const c=a1();return t.jsx(c1,{...i,style:o?{color:"inherit",textDecoration:"none"}:void 0,onClick:r=>{try{a&&a(r)}catch(C){throw r.preventDefault(),C}!r.defaultPrevented&&r.button===0&&(!e||e==="_self")&&!Z1(r)&&(r.preventDefault(),c(s))}})},R1="_7hEFR0Om",U1="MmsWfDD-",p={switch:"_-97B1BOF","switch-disabled":"ehcfQO0P","switch-loading":"_9STi2o5g",slider:R1,"switch-default":"sP-pHi2R","switch-checked":"JBO1litK","switch-inner":"_7AkZJpLG",icon:U1,"icon-light":"-lL-1abU","icon-dark":"gJXa5c9Y"},$1=x(({size:e="default",className:s,rootClassName:a,checked:o,defaultChecked:i,onChange:c,onClick:r,checkedChildren:C,unCheckedChildren:m,disabled:d,loading:v,autoFocus:u,style:w,title:E,tabIndex:S,id:k})=>{const[f,j]=n.useState(i||!1);n.useEffect(()=>{typeof o<"u"&&j(o)},[o]);const N=M=>{if(d||v)return;const V=!f;j(V),c==null||c(V,M),r==null||r(V,M)},P=G(a,p.switch,p[`switch-${e}`],{[p["switch-checked"]]:f,[p["switch-disabled"]]:d,[p["switch-loading"]]:v},s);return t.jsxs("button",{id:k,className:P,style:w,onClick:N,disabled:d,autoFocus:u,title:E,tabIndex:S,children:[t.jsx("span",{className:p.switch,children:t.jsx("span",{className:p.slider})}),t.jsxs("span",{className:p["switch-inner"],children:[t.jsx("span",{className:`${p.icon} ${p["icon-light"]}`,children:m}),t.jsx("span",{className:`${p.icon} ${p["icon-dark"]}`,children:C})]})]})}),D1="Mjxebfcg",F1="VgCzerxn",T1="BttijRGx",O1="iuw0nYkA",B1="_9xSMiXBU",K1="K9Dta3xi",z1="-wiQvMTp",U={spinner:D1,spinnerAnimation:F1,light:T1,dark:O1,s:B1,m:K1,l:z1},G1=({size:e="m",mode:s="light",className:a})=>t.jsx("div",{className:G(U.spinner,U[e],U[s],a)}),q1=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.1535 5.43254C17.544 5.04202 18.1772 5.04202 18.5677 5.43254C18.9583 5.82307 18.9583 6.45623 18.5677 6.84676L13.4144 12.0001L18.5677 17.1535C18.9583 17.544 18.9583 18.1772 18.5677 18.5677C18.1772 18.9583 17.544 18.9583 17.1535 18.5677L12.0001 13.4143L6.84676 18.5677C6.45623 18.9583 5.82307 18.9583 5.43254 18.5677C5.04202 18.1772 5.04202 17.544 5.43254 17.1535L10.5859 12.0001L5.43255 6.84676C5.04203 6.45623 5.04203 5.82307 5.43255 5.43254C5.82308 5.04202 6.45624 5.04202 6.84677 5.43254L12.0001 10.5859L17.1535 5.43254Z"})),J1=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 12C20 13.1012 19.3649 14.3027 17.9241 15.3113C16.4897 16.3154 14.4014 17 12 17C9.5986 17 7.51034 16.3154 6.07586 15.3113C4.63506 14.3027 4 13.1012 4 12C4 10.8988 4.63506 9.69728 6.07586 8.68872C7.51034 7.68458 9.5986 7 12 7C14.4014 7 16.4897 7.68458 17.9241 8.68872C19.3649 9.69728 20 10.8988 20 12ZM22 12C22 15.866 17.5228 19 12 19C6.47715 19 2 15.866 2 12C2 8.13401 6.47715 5 12 5C17.5228 5 22 8.13401 22 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"})),W1=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L5.3548 6.76901C3.29651 8.05116 2 9.91959 2 12C2 15.866 6.47715 19 12 19C13.7183 19 15.3354 18.6966 16.748 18.1622L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289ZM15.1642 16.5784L14.032 15.4462C13.4365 15.7981 12.7418 16 12 16C9.79086 16 8 14.2091 8 12C8 11.2582 8.20193 10.5635 8.55382 9.96803L6.81667 8.23089C6.55379 8.37423 6.30638 8.52735 6.07586 8.68872C4.63506 9.69727 4 10.8988 4 12C4 13.1012 4.63506 14.3027 6.07586 15.3113C7.51034 16.3154 9.5986 17 12 17C13.137 17 14.2037 16.8465 15.1642 16.5784ZM20 12C20 12.8267 19.6421 13.71 18.8541 14.5256L20.2676 15.9391C21.3608 14.817 22 13.4607 22 12C22 8.13401 17.5228 5 12 5C11.1517 5 10.3281 5.07394 9.54154 5.21311L11.3455 7.01709C11.5609 7.00579 11.7791 7 12 7C14.4014 7 16.4897 7.68458 17.9241 8.68872C19.3649 9.69727 20 10.8988 20 12Z"})),Y1="nG3hyLHE",Q1="ilwUGIPE",X1="Moi-fYq7",e2="SQndy1YZ",t2="s5O1Fs00",s2="MHElU46q",n2="xXc1i8yI",a2="O28q-HmM",o2="qCDSHvZp",r2="KI-q-7Ib",i2="vKds-LKD",l2="ftkA--g3",c2="z6Akg4hc",C2="tmD9Eqbr",d2="trcqCH-y",h2="G6IvxxL8",h={inputWrapper:Y1,s:Q1,m:X1,bordered:e2,disabled:t2,hasContent:s2,inputField:n2,loading:a2,focused:o2,label:r2,labelActive:i2,passwordToggle:l2,clearIcon:c2,charCount:C2,loadingIcon:d2,inputIcons:h2},O2=x(({label:e,password:s=!1,customSize:a="m",disabled:o=!1,bordered:i=!1,showCount:c=!1,loading:r=!1,clearable:C=!0,width:m="100%",value:d,onChange:v,onFocus:u,onBlur:w,...E})=>{const[S,k]=n.useState(!1),[f,j]=n.useState((d==null?void 0:d.toString())||""),[N,P]=n.useState(!1);n.useEffect(()=>{j((d==null?void 0:d.toString())||"")},[d]);const M=()=>k(!S),V=()=>j(""),Q=y=>{j(y.target.value),v&&v(y)},X=y=>{P(!0),u&&u(y)},e1=y=>{P(!1),w&&w(y)},t1=N||f.length>0,F=N||f.length>0;return t.jsxs("div",{className:`${h.inputWrapper} ${h[a]} ${i?h.bordered:""} ${o?h.disabled:""} ${F?h.hasContent:""}`,style:{width:m},children:[t.jsx("input",{name:e,type:s&&!S?"password":"text",className:`${h.inputField} ${r?h.loading:""} ${F?h.focused:""}`,value:f,onChange:Q,onFocus:X,onBlur:e1,disabled:o,...E}),e&&t.jsx("label",{className:`${h.label} ${t1?h.labelActive:""}`,children:e}),t.jsxs("div",{className:h.inputIcons,children:[r&&t.jsx(G1,{size:"s",className:h.loadingIcon}),C&&f.length>0&&t.jsx("span",{className:h.clearIcon,onClick:V,children:t.jsx(q1,{})}),s&&t.jsx("span",{className:h.passwordToggle,onClick:M,children:S?t.jsx(J1,{}):t.jsx(W1,{})})]}),c&&t.jsx("span",{className:h.charCount,children:(f==null?void 0:f.toString().length)||0})]})}),g2=x(()=>{const{isDark:e,toggleTheme:s}=m1;return t.jsx(t.Fragment,{children:t.jsx($1,{checked:e,onChange:s,checkedChildren:t.jsx(A1,{}),unCheckedChildren:t.jsx(M1,{}),"aria-label":"Toggle theme"})})}),u2=[{label:"Главная",url:Z},{label:"Ваши цели",url:W},{label:"Категории",url:Y}],m2="cy57-4Fs",p2="W8Rm7O0F",$={link:m2,active:p2},f2=({url:e,label:s})=>t.jsx("li",{children:t.jsx(o1,{className:({isActive:a})=>a?`${$.link} ${$.active}`:$.link,to:e,children:s})}),v2="_4DCkk3e1",x2={navigation:v2},w2=()=>t.jsx("nav",{children:t.jsx("ul",{className:x2.navigation,children:u2.map(e=>{const{url:s,label:a}=e;return t.jsx(f2,{url:s,label:a},a)})})}),j2="/assets/1-sJkgyE0G.jpg",y2="/assets/2-Cf2csoBt.jpg",I2="/assets/3-BqxNZqaK.jpg",L2="/assets/4-D2I8g40-.jpg",E2="/assets/5-DINBPloV.jpg",S2={"1.jpg":j2,"2.jpg":y2,"3.jpg":I2,"4.jpg":L2,"5.jpg":E2},V2=e=>n.createElement("svg",{width:24,height:25,viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2.92723C11 1.81216 12.1735 1.08691 13.1708 1.58559L19.8944 4.94739C20.572 5.28617 21 5.9787 21 6.73625V18.2641C21 19.0217 20.572 19.7142 19.8944 20.053L13.1708 23.4148C12.1735 23.9134 11 23.1882 11 22.0731V2.92723ZM16 13.0002C16 13.8286 15.3284 14.5002 14.5 14.5002C13.6716 14.5002 13 13.8286 13 13.0002C13 12.1717 13.6716 11.5002 14.5 11.5002C15.3284 11.5002 16 12.1717 16 13.0002ZM7 4.50018C4.79086 4.50018 3 6.29104 3 8.50018V16.5002C3 18.7093 4.79086 20.5002 7 20.5002H8C8.55228 20.5002 9 20.0525 9 19.5002C9 18.9479 8.55228 18.5002 8 18.5002H7C5.89543 18.5002 5 17.6048 5 16.5002V8.50018C5 7.39561 5.89543 6.50018 7 6.50018H8C8.55228 6.50018 9 6.05247 9 5.50018C9 4.9479 8.55228 4.50018 8 4.50018H7Z"})),H2="A0a215je",N2="SQ4HNZyG",K={userInfo:H2,userAvatar:N2},P2=x(()=>{const{user:e,logout:s}=I,a=e==null?void 0:e.avatar,o=a?S2[a]:"";return t.jsxs("div",{className:K.userInfo,children:[t.jsx(g2,{}),t.jsx("div",{className:K.userAvatar,children:o&&t.jsx("img",{src:o,alt:`${e==null?void 0:e.userNameInfo}`})}),t.jsx("div",{children:e==null?void 0:e.userNameInfo}),t.jsx(C1,{onClick:()=>s(),color:"default",variant:"link",icon:t.jsx(V2,{})})]})}),M2="VJV6iscZ",A2={header:M2},_2=x(()=>t.jsxs("header",{className:A2.header,children:[t.jsx(b1,{}),t.jsx(w2,{}),t.jsx(P2,{})]})),b2="sMhpAcTP",Z2={layout:b2},k2=({children:e})=>t.jsxs(t.Fragment,{children:[t.jsx(_2,{}),t.jsx("main",{className:Z2.layout,children:e})]}),R2=x(()=>{const{isAuthenticated:e}=I;return t.jsx(n.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsxs(r1,{children:[Object.values(P1).map(s=>{const{element:a,path:o,authorization:i=!0}=s;return!i&&!e&&(o===b||o===D)?t.jsx(H,{path:o,element:a},o):i&&!e?t.jsx(H,{path:o,element:t.jsx(T,{to:b,replace:!0})},o):e&&(o===D||o===b)?t.jsx(H,{path:o,element:t.jsx(T,{to:Z,replace:!0})},o):i?t.jsx(H,{path:o,element:t.jsx(k2,{children:a})},o):null}),t.jsx(H,{path:"*",element:t.jsx(J,{})})]})})});function U2(){return t.jsx(n.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsx(R2,{})})}i1(document.getElementById("root")).render(t.jsx(n.StrictMode,{children:t.jsx(d1,{children:t.jsx(l1,{children:t.jsx(U2,{})})})}));export{O2 as I,b as L,Z as M,k1 as R,D as S,I as a,G1 as b};
