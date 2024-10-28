const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainPage-G5FDb-L9.js","assets/react-vendor-BJbwX1Mq.js","assets/vendor-BrVx_Nsu.js","assets/ant-design-vendor-DPi8yqbB.js","assets/SignUp-HP3XFlPo.js","assets/SignUp-C0RyFaP_.css","assets/LoginPage-BqwHa7A5.js","assets/NotFoundPage-CG-WaLfZ.js","assets/SignUpPage-DKswU4ga.js","assets/AimsPage-CNOZFGfz.js","assets/CategoryPage-COG-XXOc.js"])))=>i.map(i=>d[i]);
var s2=Object.defineProperty;var a2=(e,s,n)=>s in e?s2(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n;var l=(e,s,n)=>a2(e,typeof s!="symbol"?s+"":s,n);import{r as a,j as t,m as W,k as m,l as V,o as y,u as n2,n as o2,p as M,N as z,q as r2,B as i2}from"./react-vendor-BJbwX1Mq.js";import{aU as A,F}from"./vendor-BrVx_Nsu.js";import{s as R,d as l2,B as c2}from"./ant-design-vendor-DPi8yqbB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();class C2 extends a.Component{constructor(){super(...arguments);l(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n,o){console.error("Uncaught error:",n,o)}render(){return this.state.hasError?t.jsx("h1",{children:"Something went wrong."}):this.props.children}}const q=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];function d2(e){return q.includes(e)}class u2{constructor(){l(this,"user",null);l(this,"isAuthenticated",!1);l(this,"loading",!1);l(this,"login","");l(this,"password","");l(this,"userName","");l(this,"availableImages",q);l(this,"isLoginInvalid",!1);l(this,"isPasswordInvalid",!1);l(this,"isWelcome",!1);l(this,"setLogin",m(s=>{this.login=s.toLowerCase().trim(),this.validateLogin()}));l(this,"resetForm",m(()=>{this.login="",this.password="",this.userName=""}));l(this,"setPassword",m(s=>{this.password=s.trim(),this.validatePassword()}));l(this,"showWelcome",m(()=>{this.isWelcome=!0,setTimeout(()=>{V(()=>{this.isWelcome=!1})},5e3)}));l(this,"setUserName",m(s=>{this.userName=s.trimStart()}));l(this,"isFormValid",m(()=>this.login.trim()!==""&&this.password.trim()!==""&&this.userName.trim()!==""&&!this.isPasswordInvalid));l(this,"validatePassword",m(()=>{this.isPasswordInvalid=this.password.length<=5}));l(this,"checkIfLoginExists",m(()=>localStorage.getItem("signupLogin")===A.SHA256(this.login).toString()));l(this,"validateLogin",m(()=>{const s=/^[A-Za-z]+$/;this.isLoginInvalid=this.login?!s.test(this.login):!1}));l(this,"getRandomImage",()=>{const s=Math.floor(Math.random()*this.availableImages.length);return this.availableImages[s]});l(this,"signUp",m(s=>{if(this.checkIfLoginExists()){R.error({message:"Ошибка",description:"Пользователь с таким логином уже существует. Введите другой логин."});return}this.loading=!0,setTimeout(()=>{V(()=>{const n=A.SHA256(this.login).toString(),o=A.SHA256(this.password).toString();localStorage.setItem("signupLogin",n),localStorage.setItem("signupUserName",this.userName),localStorage.setItem("signupPassword",o);const i=this.getRandomImage();localStorage.setItem("userImage",i),localStorage.setItem("userName",this.userName),R.success({message:"Вы успешно зарегистрировались",description:"Используйте регистрационные данные для входа"}),this.resetForm(),s(),this.loading=!1})},2e3)}));l(this,"loginAction",m(s=>{this.loading=!0,setTimeout(()=>{const n=A.SHA256(this.login).toString(),o=A.SHA256(this.password).toString(),i=localStorage.getItem("signupLogin"),c=localStorage.getItem("signupPassword"),r=localStorage.getItem("signupUserName");if(i&&c)if(i===n&&c===o){let C=localStorage.getItem("userImage");d2(C)||(C=this.getRandomImage(),localStorage.setItem("userImage",C)),V(()=>{this.user={id:1,userNameInfo:r,avatar:C},this.isAuthenticated=!0,this.loading=!1}),localStorage.setItem("authUser",JSON.stringify(this.user)),V(()=>{r&&(localStorage.setItem("userName",r),this.userName=r)}),this.showWelcome(),s()}else V(()=>{this.loading=!1}),R.error({message:"Ошибка в авторизации",description:"Неправильно ввели логин или пароль, попробуйте еще раз или пройдите регистрацию."});else V(()=>{this.loading=!1}),R.error({message:"Ошибка в авторизации",description:"Убедитесь в верности введенных данных."})},2e3)}));l(this,"logout",m(()=>{this.isAuthenticated=!1,this.isWelcome=!1,localStorage.removeItem("authUser")}));l(this,"onDeleteAccount",m(()=>{this.user=null,this.isAuthenticated=!1,localStorage.removeItem("authUser"),localStorage.removeItem("signupLogin"),localStorage.removeItem("signupPassword"),localStorage.removeItem("userName")}));l(this,"loadUser",m(()=>{const s=localStorage.getItem("authUser");s&&(this.user=JSON.parse(s),this.isAuthenticated=!0)}));l(this,"loadUserName",m(()=>{const s=localStorage.getItem("userName");s&&(this.userName=s)}));W(this),this.loadUser(),this.loadUserName()}areFieldsFilled(s){return Object.values(s).every(n=>typeof n=="string"?n.trim()!=="":!0)}}const L=new u2,G="theme",$={dark:"dark",light:"light"};class h2{constructor(){l(this,"isDark");l(this,"toggleTheme",()=>{this.isDark=!this.isDark,localStorage.setItem(G,this.isDark?$.dark:$.light),this.applyGlobalStyles()});l(this,"applyGlobalStyles",()=>{this.isDark?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme"))});const s=localStorage.getItem(G);this.isDark=s?s===$.dark:!1,this.applyGlobalStyles(),W(this)}}const m2=new h2,g2="modulepreload",p2=function(e){return"/"+e},K={},N=function(s,n,o){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),C=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=p2(u),u in K)return;K[u]=!0;const d=u.endsWith(".css"),w=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${w}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":g2,d||(h.as="script"),h.crossOrigin="",h.href=u,C&&h.setAttribute("nonce",C),document.head.appendChild(h),d)return new Promise((f,I)=>{h.addEventListener("load",f),h.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function c(r){const C=new Event("vite:preloadError",{cancelable:!0});if(C.payload=r,window.dispatchEvent(C),!C.defaultPrevented)throw r}return i.then(r=>{for(const C of r||[])C.status==="rejected"&&c(C.reason);return s().catch(c)})},f2=a.lazy(async()=>N(async()=>{const{MainPage:e}=await import("./MainPage-G5FDb-L9.js");return{MainPage:e}},__vite__mapDeps([0,1,2,3,4,5])).then(({MainPage:e})=>({default:e}))),x2=a.lazy(async()=>N(async()=>{const{LoginPage:e}=await import("./LoginPage-BqwHa7A5.js");return{LoginPage:e}},__vite__mapDeps([6,1,2,3,4,5])).then(({LoginPage:e})=>({default:e}))),J=a.lazy(async()=>N(async()=>{const{NotFoundPage:e}=await import("./NotFoundPage-CG-WaLfZ.js");return{NotFoundPage:e}},__vite__mapDeps([7,1,2,3])).then(({NotFoundPage:e})=>({default:e}))),w2=a.lazy(async()=>N(async()=>{const{SignUpPage:e}=await import("./SignUpPage-DKswU4ga.js");return{SignUpPage:e}},__vite__mapDeps([8,1,2,3,4,5])).then(({SignUpPage:e})=>({default:e}))),v2=a.lazy(async()=>N(async()=>{const{AimsPage:e}=await import("./AimsPage-CNOZFGfz.js");return{AimsPage:e}},__vite__mapDeps([9,1,2,3])).then(({AimsPage:e})=>({default:e}))),y2=a.lazy(async()=>N(async()=>{const{CategoryPage:e}=await import("./CategoryPage-COG-XXOc.js");return{CategoryPage:e}},__vite__mapDeps([10,1,2,3])).then(({CategoryPage:e})=>({default:e}))),O="/",I2="/aims",j2="/category",k="/login",B="/signup",L2={notFound:"*",mainPage:O,loginPage:k,signUpPage:B,aimsPage:I2,category:j2},{notFound:S2,mainPage:E2,loginPage:V2,signUpPage:N2,aimsPage:H2,category:P2}=L2,M2={loginPage:{path:V2,element:t.jsx(x2,{}),authorization:!1},signUpPage:{path:N2,element:t.jsx(w2,{}),authorization:!1},notFound:{path:S2,element:t.jsx(J,{}),authorization:!1},mainPage:{path:E2,element:t.jsx(f2,{})},aimsPage:{path:H2,element:t.jsx(v2,{})},category:{path:P2,element:t.jsx(y2,{})}};y(()=>{var e;return L.user?t.jsxs("div",{children:[t.jsxs("h2",{children:["Добро пожаловать, ",L.user.userNameInfo,"!"]}),L.user.avatar&&t.jsx("img",{src:`../../shared/assets/${(e=L.user)==null?void 0:e.avatar}`,alt:"User Avatar"})]}):null});const A2=e=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V3C11 3.55228 11.4477 4 12 4C12.5523 4 13 3.55228 13 3V2ZM13 21C13 20.4477 12.5523 20 12 20C11.4477 20 11 20.4477 11 21V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V21ZM2 11C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H3C3.55228 13 4 12.5523 4 12C4 11.4477 3.55228 11 3 11H2ZM21 11C20.4477 11 20 11.4477 20 12C20 12.5523 20.4477 13 21 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H21ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM19.7782 5.63597C20.1687 5.24544 20.1687 4.61228 19.7782 4.22176C19.3876 3.83123 18.7545 3.83123 18.3639 4.22176L17.6568 4.92886C17.2663 5.31939 17.2663 5.95255 17.6568 6.34308C18.0474 6.7336 18.6805 6.7336 19.071 6.34308L19.7782 5.63597ZM6.34312 19.071C6.73365 18.6805 6.73365 18.0473 6.34312 17.6568C5.9526 17.2663 5.31943 17.2663 4.92891 17.6568L4.2218 18.3639C3.83128 18.7544 3.83128 19.3876 4.2218 19.7781C4.61233 20.1686 5.24549 20.1686 5.63602 19.7781L6.34312 19.071ZM19.7782 19.7784C19.3877 20.1689 18.7546 20.1689 18.364 19.7784L17.6569 19.0713C17.2664 18.6808 17.2664 18.0476 17.6569 17.6571C18.0474 17.2666 18.6806 17.2666 19.0711 17.6571L19.7782 18.3642C20.1688 18.7547 20.1688 19.3879 19.7782 19.7784ZM6.34322 6.34337C5.95269 6.73389 5.31953 6.73389 4.929 6.34337L4.2219 5.63626C3.83137 5.24574 3.83137 4.61257 4.2219 4.22205C4.61242 3.83152 5.24559 3.83152 5.63611 4.22205L6.34322 4.92915C6.73374 5.31968 6.73374 5.95284 6.34322 6.34337Z"})),_2=e=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.7724 2C15.3321 3.40126 14.2925 4.48397 13 4.85821V5.14175C14.2925 5.51599 15.3322 6.59872 15.7724 8H16.2276C16.6679 6.59873 17.7075 5.516 19 5.14175V4.85821C17.7075 4.48396 16.6679 3.40125 16.2276 2H15.7724ZM9.33741 3.54949C9.44878 3.15493 9.30804 2.73236 8.98233 2.48337C8.65661 2.23439 8.21192 2.20943 7.86039 2.42042C4.95075 4.16679 3 7.35516 3 11.0001C3 12.327 3.25842 13.5935 3.72768 14.7521C3.77367 14.6541 3.81507 14.5506 3.85111 14.4417C4.06985 13.7807 4.6046 13.2685 5.27285 13.0793C5.0949 12.4163 5 11.7193 5 11.0001C5 8.96964 5.75618 7.11526 7.00392 5.70384C7.00131 5.8023 7 5.90106 7 6.00012C7 12.0753 11.9249 17.0001 18 17.0001C18.0991 17.0001 18.1979 16.9988 18.2963 16.9962C16.8849 18.244 15.0305 19.0001 13 19.0001C12.2719 19.0001 11.5666 18.9029 10.8962 18.7207C10.6853 19.365 10.1711 19.8707 9.52401 20.0727C9.40202 20.1108 9.27958 20.1654 9.15998 20.2363C10.3423 20.7284 11.6394 21.0001 13 21.0001C16.645 21.0001 19.8334 19.0494 21.5797 16.1397C21.7907 15.7882 21.7658 15.3435 21.5168 15.0178C21.2678 14.6921 20.8452 14.5513 20.4507 14.6627C19.6727 14.8823 18.8509 15.0001 18 15.0001C13.0294 15.0001 9 10.9707 9 6.00012C9 5.1492 9.11781 4.32745 9.33741 3.54949ZM3 17.8582C4.29248 17.484 5.33215 16.4013 5.7724 15H6.22762C6.66787 16.4013 7.70753 17.484 9 17.8582V18.1418C7.70752 18.516 6.66785 19.5987 6.22761 21H5.77241C5.33217 19.5987 4.29249 18.516 3 18.1417V17.8582Z"})),b2=e=>a.createElement("svg",{width:86,height:33,viewBox:"0 0 86 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{d:"M76.7915 3.21609H72.3236V0.260254H85V3.21609H80.5321V14.2406H76.7915V3.21609Z"}),a.createElement("path",{d:"M59.9686 0.260254H70.5669V3.01637H63.7092V5.75252H69.9435V8.34887H63.7092V11.4844H70.5669V14.2406H59.9686V0.260254Z"}),a.createElement("path",{d:"M51.1295 14.4996C50.132 14.4996 49.2107 14.3664 48.3656 14.1001C47.5205 13.8339 46.7862 13.4144 46.1628 12.8419C45.5394 12.2561 45.0476 11.5105 44.6874 10.6051C44.341 9.69968 44.1678 8.61454 44.1678 7.34965V6.95021C44.1678 5.73859 44.3479 4.70005 44.7081 3.8346C45.0684 2.95584 45.5602 2.23685 46.1836 1.67764C46.807 1.10511 47.5344 0.685701 48.3656 0.41941C49.1968 0.139803 50.0835 0 51.0256 0C51.8568 0 52.6326 0.0932021 53.353 0.279606C54.0735 0.46601 54.7107 0.758931 55.2649 1.15837C55.8191 1.54449 56.2762 2.04379 56.6364 2.65626C57.0105 3.26873 57.2529 4.00103 57.3638 4.85317H53.4985C53.4015 4.48036 53.263 4.17412 53.0829 3.93446C52.9028 3.6948 52.7019 3.50839 52.4802 3.37525C52.2586 3.22879 52.0231 3.12893 51.7737 3.07567C51.5243 3.02241 51.2749 2.99578 51.0256 2.99578C50.5822 2.99578 50.1736 3.06235 49.7995 3.1955C49.4393 3.32865 49.1276 3.54834 48.8644 3.85457C48.6011 4.16081 48.3933 4.5669 48.2409 5.07286C48.1024 5.57881 48.0331 6.2046 48.0331 6.95021V7.34965C48.0331 8.09527 48.1093 8.73437 48.2617 9.26695C48.4141 9.78622 48.6219 10.2123 48.8851 10.5452C49.1622 10.878 49.4878 11.1243 49.8618 11.2841C50.2497 11.4306 50.6723 11.5038 51.1295 11.5038C51.5035 11.5038 51.8707 11.4572 52.2309 11.364C52.6049 11.2708 52.9305 11.1243 53.2076 10.9246C53.4985 10.7249 53.734 10.4786 53.9141 10.1857C54.0942 9.87942 54.1912 9.51327 54.2051 9.0872H51.5451V6.81041H57.6755V7.74909C57.6755 8.9474 57.5092 9.97262 57.1768 10.8248C56.8581 11.6769 56.4079 12.3759 55.826 12.9218C55.2441 13.4677 54.5514 13.8671 53.7479 14.1201C52.9582 14.3731 52.0854 14.4996 51.1295 14.4996Z"}),a.createElement("path",{d:"M29.832 0.260254H35.339C36.4335 0.260254 37.4102 0.406714 38.2691 0.699635C39.1281 0.979242 39.8554 1.39865 40.4511 1.95786C41.0468 2.51708 41.504 3.21609 41.8227 4.05491C42.1413 4.89373 42.3006 5.85904 42.3006 6.95083V7.35027C42.3006 8.4687 42.1344 9.46063 41.8019 10.3261C41.4832 11.1782 41.0122 11.8972 40.3888 12.483C39.7792 13.0556 39.0311 13.495 38.1444 13.8012C37.2578 14.0941 36.2534 14.2406 35.1312 14.2406H29.832V0.260254ZM34.9234 11.2847C35.3944 11.2847 35.8377 11.2182 36.2534 11.085C36.6828 10.9386 37.0569 10.7122 37.3755 10.406C37.708 10.0997 37.9643 9.69364 38.1444 9.18768C38.3384 8.68173 38.4354 8.06926 38.4354 7.35027V6.95083C38.4354 6.27179 38.3453 5.69926 38.1652 5.23325C37.999 4.75393 37.7634 4.3678 37.4587 4.07488C37.1677 3.76865 36.8214 3.54896 36.4196 3.41581C36.0178 3.28266 35.5884 3.21609 35.1312 3.21609H33.5726V11.2847H34.9234Z"}),a.createElement("path",{d:"M20.7825 14.5002C19.8128 14.5002 18.933 14.3804 18.1434 14.1407C17.3675 13.8877 16.7025 13.5216 16.1484 13.0423C15.6081 12.5496 15.1855 11.9371 14.8807 11.2048C14.5898 10.4725 14.4443 9.62041 14.4443 8.64844V0.260254H18.1849V8.22903C18.1849 9.30752 18.3789 10.1264 18.7668 10.6856C19.1547 11.2315 19.8266 11.5044 20.7825 11.5044C21.7662 11.5044 22.445 11.2315 22.8191 10.6856C23.1931 10.1264 23.3802 9.31417 23.3802 8.24901V0.260254H27.1207V8.64844C27.1207 9.62041 26.9753 10.4725 26.6843 11.2048C26.3934 11.9371 25.9709 12.5496 25.4167 13.0423C24.8764 13.5216 24.2114 13.8877 23.4217 14.1407C22.6459 14.3804 21.7662 14.5002 20.7825 14.5002Z"}),a.createElement("path",{d:"M0 0.260254H6.96163C8.66568 0.260254 9.90561 0.586461 10.6814 1.23888C11.4573 1.87798 11.8452 2.79668 11.8452 3.995C11.8452 4.71398 11.6512 5.33311 11.2633 5.85238C10.8754 6.35833 10.3489 6.72449 9.68394 6.95083C10.5429 7.13724 11.2217 7.5167 11.7205 8.08923C12.2192 8.64844 12.4686 9.38074 12.4686 10.2861C12.4686 11.5111 12.0461 12.4764 11.201 13.1821C10.3697 13.8877 9.02588 14.2406 7.16944 14.2406H0V0.260254ZM6.3382 11.4844C7.23871 11.4844 7.86214 11.358 8.20849 11.105C8.55484 10.8387 8.72802 10.4326 8.72802 9.8867C8.72802 9.3408 8.54792 8.93471 8.18771 8.66841C7.84136 8.40212 7.21101 8.26898 6.29664 8.26898H3.74058V11.4844H6.3382ZM6.04727 5.83241C6.8508 5.83241 7.39111 5.71258 7.66819 5.47291C7.95912 5.21994 8.10459 4.8671 8.10459 4.4144C8.10459 3.94839 7.95912 3.60222 7.66819 3.37587C7.39111 3.1362 6.85773 3.01637 6.06805 3.01637H3.74058V5.83241H6.04727Z"}),a.createElement("path",{d:"M79.8094 20.4609H82.2889V21.6209C82.3587 21.4813 82.4635 21.3309 82.6032 21.1698C82.7545 21.0087 82.9291 20.8583 83.127 20.7187C83.3249 20.5791 83.546 20.4663 83.7905 20.3804C84.0466 20.2944 84.3201 20.2515 84.6111 20.2515C84.809 20.2515 84.9662 20.2622 85.0826 20.2837C85.199 20.3052 85.3038 20.3267 85.3969 20.3481V22.4909C85.3387 22.4587 85.2048 22.4211 84.9953 22.3782C84.7858 22.3352 84.5413 22.3137 84.2619 22.3137C83.645 22.3137 83.1968 22.4802 82.9175 22.8132C82.6381 23.1461 82.4984 23.5489 82.4984 24.0215V28.9999H79.8094V20.4609Z"}),a.createElement("path",{d:"M73.9629 29.2093C73.2878 29.2093 72.6534 29.1234 72.0597 28.9516C71.4777 28.769 70.9713 28.4951 70.5407 28.1299C70.11 27.7647 69.7724 27.3082 69.5279 26.7604C69.2835 26.2019 69.1613 25.5521 69.1613 24.811V24.4887C69.1613 23.7798 69.2777 23.1622 69.5105 22.6359C69.7549 22.1096 70.0809 21.6693 70.4883 21.3148C70.9073 20.9604 71.3962 20.6972 71.955 20.5254C72.5254 20.3428 73.1365 20.2515 73.7883 20.2515C75.3132 20.2515 76.4657 20.6167 77.2456 21.347C78.0255 22.0667 78.4154 23.1139 78.4154 24.4887V25.3748H71.92C71.9317 25.7078 71.9957 25.9924 72.1121 26.2287C72.2285 26.4543 72.3798 26.6423 72.5661 26.7926C72.7523 26.943 72.9619 27.0558 73.1947 27.131C73.4391 27.1954 73.6952 27.2276 73.9629 27.2276C74.4751 27.2276 74.8767 27.1578 75.1677 27.0182C75.4704 26.8678 75.6683 26.6691 75.7614 26.4221H78.2408C78.0546 27.3565 77.5948 28.0547 76.8614 28.5165C76.1281 28.9784 75.1619 29.2093 73.9629 29.2093ZM73.8756 22.217C73.6312 22.217 73.3926 22.2439 73.1598 22.2976C72.9386 22.3513 72.7349 22.4426 72.5486 22.5715C72.374 22.6896 72.2285 22.8454 72.1121 23.0387C72.0074 23.232 71.9491 23.4683 71.9375 23.7476H75.7789C75.7789 23.4469 75.7265 23.1998 75.6217 23.0065C75.517 22.8132 75.3773 22.6574 75.2027 22.5393C75.0397 22.4211 74.8418 22.3406 74.609 22.2976C74.3762 22.2439 74.1317 22.217 73.8756 22.217Z"}),a.createElement("path",{d:"M58.9384 20.4609H61.4178V21.6209C61.6506 21.245 62.0114 20.9228 62.5003 20.6542C63.0009 20.3857 63.6644 20.2515 64.4909 20.2515C65.5967 20.2515 66.429 20.5307 66.9877 21.0893C67.5581 21.637 67.8433 22.4211 67.8433 23.4415V28.9999H65.1544V24.0054C65.1544 23.4469 65.0205 23.028 64.7528 22.7487C64.4967 22.4587 64.0718 22.3137 63.4781 22.3137C63.1522 22.3137 62.8728 22.362 62.64 22.4587C62.4072 22.5446 62.2151 22.6628 62.0638 22.8132C61.9125 22.9635 61.8019 23.1461 61.7321 23.3609C61.6622 23.565 61.6273 23.7798 61.6273 24.0054V28.9999H58.9384V20.4609Z"}),a.createElement("path",{d:"M48.3666 20.4609H50.846V21.6209C51.0788 21.245 51.4397 20.9228 51.9286 20.6542C52.4291 20.3857 53.0926 20.2515 53.9191 20.2515C55.0249 20.2515 55.8572 20.5307 56.416 21.0893C56.9863 21.637 57.2715 22.4211 57.2715 23.4415V28.9999H54.5826V24.0054C54.5826 23.4469 54.4487 23.028 54.181 22.7487C53.9249 22.4587 53.5 22.3137 52.9064 22.3137C52.5804 22.3137 52.3011 22.362 52.0682 22.4587C51.8354 22.5446 51.6434 22.6628 51.492 22.8132C51.3407 22.9635 51.2301 23.1461 51.1603 23.3609C51.0904 23.565 51.0555 23.7798 51.0555 24.0054V28.9999H48.3666V20.4609Z"}),a.createElement("path",{d:"M41.119 29.2093C40.6185 29.2093 40.1703 29.1395 39.7745 28.9999C39.3904 28.8603 39.0645 28.6723 38.7967 28.436C38.529 28.1889 38.3253 27.9043 38.1856 27.5821C38.0459 27.2491 37.9761 26.8893 37.9761 26.5026C37.9761 25.6541 38.2554 25.0043 38.8142 24.5532C39.3846 24.1021 40.2401 23.8765 41.3809 23.8765H44.0175V23.5221C44.0175 23.0065 43.8836 22.652 43.6159 22.4587C43.3482 22.2546 42.9815 22.1526 42.5159 22.1526C42.0735 22.1526 41.7476 22.217 41.5381 22.3459C41.3285 22.4748 41.2121 22.6789 41.1888 22.9582H38.4999C38.5232 22.5715 38.6279 22.217 38.8142 21.8948C39.0004 21.5618 39.2623 21.2772 39.5999 21.0409C39.9491 20.7939 40.374 20.6005 40.8746 20.4609C41.3751 20.3213 41.9513 20.2515 42.6032 20.2515C43.2085 20.2515 43.7614 20.3159 44.2619 20.4448C44.7741 20.5629 45.2106 20.7617 45.5715 21.0409C45.9323 21.3094 46.2117 21.6639 46.4096 22.1043C46.6075 22.5339 46.7064 23.0602 46.7064 23.6832V26.8249C46.7064 27.276 46.7181 27.6734 46.7413 28.0171C46.7646 28.3501 46.7996 28.6777 46.8461 28.9999H44.2969C44.2736 28.8173 44.2503 28.6562 44.227 28.5165C44.2154 28.3769 44.2095 28.2051 44.2095 28.001C43.9302 28.3447 43.5402 28.6347 43.0397 28.871C42.5508 29.0966 41.9106 29.2093 41.119 29.2093ZM41.992 27.4693C42.5624 27.4693 43.0397 27.3189 43.4238 27.0182C43.8196 26.7175 44.0175 26.3039 44.0175 25.7776V25.4232H41.9047C41.509 25.4232 41.2121 25.5198 41.0142 25.7132C40.828 25.9065 40.7349 26.1321 40.7349 26.3899C40.7349 26.7013 40.828 26.9591 41.0142 27.1632C41.2121 27.3673 41.5381 27.4693 41.992 27.4693Z"}),a.createElement("path",{d:"M35.7069 29.0967C35.1482 29.0967 34.6651 29.0538 34.2577 28.9678C33.8503 28.8819 33.5127 28.7262 33.245 28.5006C32.9889 28.2643 32.7968 27.9475 32.6688 27.55C32.5407 27.1419 32.4767 26.621 32.4767 25.9872V17.7222H35.1656V25.6167C35.1656 25.8852 35.1831 26.1108 35.218 26.2934C35.2529 26.476 35.3111 26.621 35.3926 26.7284C35.4857 26.8358 35.6138 26.9163 35.7768 26.97C35.9397 27.013 36.1434 27.0345 36.3879 27.0345C36.5276 27.0345 36.644 27.0345 36.7371 27.0345C36.8302 27.0237 36.9233 27.013 37.0165 27.0023V29.0484C36.6673 29.0806 36.2307 29.0967 35.7069 29.0967Z"}),a.createElement("path",{d:"M21.6469 20.4609H24.1263V21.6209C24.2427 21.4491 24.3882 21.2826 24.5628 21.1215C24.749 20.9496 24.9644 20.7992 25.2088 20.6704C25.4533 20.5415 25.7268 20.4394 26.0295 20.3642C26.3321 20.2891 26.6581 20.2515 27.0073 20.2515C28.311 20.2515 29.3005 20.6059 29.9756 21.3148C30.6508 22.0237 30.9883 23.0817 30.9883 24.4887V24.811C30.9883 25.5413 30.8952 26.1804 30.709 26.7282C30.5227 27.276 30.255 27.7325 29.9058 28.0977C29.5566 28.4628 29.1375 28.7421 28.6486 28.9354C28.1597 29.118 27.6126 29.2093 27.0073 29.2093C26.4835 29.2093 25.9829 29.1019 25.5057 28.8871C25.04 28.6615 24.6501 28.3393 24.3358 27.9204V32.2221H21.6469V20.4609ZM26.3612 27.1632C26.8967 27.1632 27.339 26.9645 27.6883 26.5671C28.0491 26.1697 28.2295 25.5843 28.2295 24.811V24.4887C28.2295 23.7476 28.0549 23.1998 27.7057 22.8454C27.3681 22.4802 26.92 22.2976 26.3612 22.2976C25.7909 22.2976 25.3078 22.4641 24.912 22.797C24.5279 23.1193 24.3358 23.6026 24.3358 24.2471V25.0526C24.3358 25.7293 24.5279 26.2502 24.912 26.6154C25.3078 26.9806 25.7909 27.1632 26.3612 27.1632Z"})),Z2=()=>t.jsx(k2,{className:void 0,disableAntColor:!0,to:O,children:t.jsx(b2,{})});function R2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const k2=({target:e,to:s,onClick:n,disableAntColor:o=!1,...i})=>{const c=n2();return t.jsx(l2,{...i,style:o?{color:"inherit",textDecoration:"none"}:void 0,onClick:r=>{try{n&&n(r)}catch(C){throw r.preventDefault(),C}!r.defaultPrevented&&r.button===0&&(!e||e==="_self")&&!R2(r)&&(r.preventDefault(),c(s))}})},$2="_7hEFR0Om",U2="MmsWfDD-",p={switch:"_-97B1BOF","switch-disabled":"ehcfQO0P","switch-loading":"_9STi2o5g",slider:$2,"switch-default":"sP-pHi2R","switch-checked":"JBO1litK","switch-inner":"_7AkZJpLG",icon:U2,"icon-light":"-lL-1abU","icon-dark":"gJXa5c9Y"};y(({size:e="default",className:s,rootClassName:n,checked:o,defaultChecked:i,onChange:c,onClick:r,checkedChildren:C,unCheckedChildren:u,disabled:d,loading:w,autoFocus:h,style:f,title:I,tabIndex:j,id:H})=>{const[x,S]=a.useState(i||!1);a.useEffect(()=>{typeof o<"u"&&S(o)},[o]);const _=Z=>{if(d||w)return;const P=!x;S(P),c==null||c(P,Z),r==null||r(P,Z)},b=F(n,p.switch,p[`switch-${e}`],{[p["switch-checked"]]:x,[p["switch-disabled"]]:d,[p["switch-loading"]]:w},s);return t.jsxs("button",{id:H,className:b,style:f,onClick:_,disabled:d,autoFocus:h,title:I,tabIndex:j,children:[t.jsx("span",{className:p.switch,children:t.jsx("span",{className:p.slider})}),t.jsxs("span",{className:p["switch-inner"],children:[t.jsx("span",{className:`${p.icon} ${p["icon-light"]}`,children:u}),t.jsx("span",{className:`${p.icon} ${p["icon-dark"]}`,children:C})]})]})});const D2="Mjxebfcg",B2="VgCzerxn",F2="BttijRGx",O2="iuw0nYkA",T2="_9xSMiXBU",z2="K9Dta3xi",G2="-wiQvMTp",U={spinner:D2,spinnerAnimation:B2,light:F2,dark:O2,s:T2,m:z2,l:G2},Q=({size:e="m",mode:s="light",className:n})=>t.jsx("div",{className:F(U.spinner,U[e],U[s],n)}),K2=e=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.1535 5.43254C17.544 5.04202 18.1772 5.04202 18.5677 5.43254C18.9583 5.82307 18.9583 6.45623 18.5677 6.84676L13.4144 12.0001L18.5677 17.1535C18.9583 17.544 18.9583 18.1772 18.5677 18.5677C18.1772 18.9583 17.544 18.9583 17.1535 18.5677L12.0001 13.4143L6.84676 18.5677C6.45623 18.9583 5.82307 18.9583 5.43254 18.5677C5.04202 18.1772 5.04202 17.544 5.43254 17.1535L10.5859 12.0001L5.43255 6.84676C5.04203 6.45623 5.04203 5.82307 5.43255 5.43254C5.82308 5.04202 6.45624 5.04202 6.84677 5.43254L12.0001 10.5859L17.1535 5.43254Z"})),W2=e=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 12C20 13.1012 19.3649 14.3027 17.9241 15.3113C16.4897 16.3154 14.4014 17 12 17C9.5986 17 7.51034 16.3154 6.07586 15.3113C4.63506 14.3027 4 13.1012 4 12C4 10.8988 4.63506 9.69728 6.07586 8.68872C7.51034 7.68458 9.5986 7 12 7C14.4014 7 16.4897 7.68458 17.9241 8.68872C19.3649 9.69728 20 10.8988 20 12ZM22 12C22 15.866 17.5228 19 12 19C6.47715 19 2 15.866 2 12C2 8.13401 6.47715 5 12 5C17.5228 5 22 8.13401 22 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"})),q2=e=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L5.3548 6.76901C3.29651 8.05116 2 9.91959 2 12C2 15.866 6.47715 19 12 19C13.7183 19 15.3354 18.6966 16.748 18.1622L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289ZM15.1642 16.5784L14.032 15.4462C13.4365 15.7981 12.7418 16 12 16C9.79086 16 8 14.2091 8 12C8 11.2582 8.20193 10.5635 8.55382 9.96803L6.81667 8.23089C6.55379 8.37423 6.30638 8.52735 6.07586 8.68872C4.63506 9.69727 4 10.8988 4 12C4 13.1012 4.63506 14.3027 6.07586 15.3113C7.51034 16.3154 9.5986 17 12 17C13.137 17 14.2037 16.8465 15.1642 16.5784ZM20 12C20 12.8267 19.6421 13.71 18.8541 14.5256L20.2676 15.9391C21.3608 14.817 22 13.4607 22 12C22 8.13401 17.5228 5 12 5C11.1517 5 10.3281 5.07394 9.54154 5.21311L11.3455 7.01709C11.5609 7.00579 11.7791 7 12 7C14.4014 7 16.4897 7.68458 17.9241 8.68872C19.3649 9.69727 20 10.8988 20 12Z"})),J2="nG3hyLHE",Q2="ilwUGIPE",Y2="Moi-fYq7",X2="SQndy1YZ",e1="s5O1Fs00",t1="MHElU46q",s1="xXc1i8yI",a1="O28q-HmM",n1="qCDSHvZp",o1="KI-q-7Ib",r1="vKds-LKD",i1="ftkA--g3",l1="z6Akg4hc",c1="tmD9Eqbr",C1="trcqCH-y",d1="G6IvxxL8",g={inputWrapper:J2,s:Q2,m:Y2,bordered:X2,disabled:e1,hasContent:t1,inputField:s1,loading:a1,focused:n1,label:o1,labelActive:r1,passwordToggle:i1,clearIcon:l1,charCount:c1,loadingIcon:C1,inputIcons:d1},W1=y(({label:e,password:s=!1,customSize:n="m",disabled:o=!1,bordered:i=!1,showCount:c=!1,loading:r=!1,clearable:C=!0,width:u="100%",value:d,onChange:w,onFocus:h,onBlur:f,...I})=>{const[j,H]=a.useState(!1),[x,S]=a.useState((d==null?void 0:d.toString())||""),[_,b]=a.useState(!1);a.useEffect(()=>{S((d==null?void 0:d.toString())||"")},[d]);const Z=()=>H(!j),P=()=>S(""),Y=E=>{S(E.target.value),w&&w(E)},X=E=>{b(!0),h&&h(E)},e2=E=>{b(!1),f&&f(E)},t2=_||x.length>0,T=_||x.length>0;return t.jsxs("div",{className:`${g.inputWrapper} ${g[n]} ${i?g.bordered:""} ${o?g.disabled:""} ${T?g.hasContent:""}`,style:{width:u},children:[t.jsx("input",{name:e,type:s&&!j?"password":"text",className:`${g.inputField} ${r?g.loading:""} ${T?g.focused:""}`,value:x,onChange:Y,onFocus:X,onBlur:e2,disabled:o,...I}),e&&t.jsx("label",{className:`${g.label} ${t2?g.labelActive:""}`,children:e}),t.jsxs("div",{className:g.inputIcons,children:[r&&t.jsx(Q,{size:"s",className:g.loadingIcon}),C&&x.length>0&&t.jsx("span",{className:g.clearIcon,onClick:P,children:t.jsx(K2,{})}),s&&t.jsx("span",{className:g.passwordToggle,onClick:Z,children:j?t.jsx(W2,{}):t.jsx(q2,{})})]}),c&&t.jsx("span",{className:g.charCount,children:(x==null?void 0:x.toString().length)||0})]})}),u1="k9Vs97de",h1="C8BGI7u-",m1="JAWTjaer",g1="gDQ40lQ1",p1="_2U5IqRBi",f1="_4gd2J-Rw",x1="UxlRoRvS",v={button:u1,loading:h1,disabled:m1,fullWidth:g1,"size-s":"_2QL-iPCA","size-m":"ndSZiKGH","size-l":"JqpG400o","appearance-primary":"xzH5pckd","appearance-secondary":"i0hlDOIW","appearance-thirdly":"BLusYLn-",icon:p1,loader:f1,spin:x1},w1=({id:e,name:s,children:n,disabled:o=!1,as:i="button",className:c,loading:r=!1,icon:C,iconAlign:u="left",onClick:d,size:w="m",appearance:h="primary",width:f="auto",...I})=>{const j=F(v.button,v[`size-${w}`],v[`appearance-${h}`],{[v.loading]:r,[v.disabled]:o,[v.fullWidth]:f==="full"},c),H=f!=="full"&&f!=="auto"?{width:f}:void 0;return t.jsx(i,{id:e,name:s,className:j,onClick:d,disabled:o,style:H,...I,children:r?t.jsx(Q,{size:"s",mode:"dark"}):t.jsxs(t.Fragment,{children:[C&&u==="left"&&t.jsx("span",{className:v.icon,children:C}),n,C&&u==="right"&&t.jsx("span",{className:v.icon,children:C})]})})},v1=y(()=>{const{isDark:e,toggleTheme:s}=m2;return t.jsx(w1,{onClick:s,size:"s",appearance:"thirdly",icon:e?t.jsx(_2,{}):t.jsx(A2,{})})}),y1="/assets/1-sJkgyE0G.jpg",I1="/assets/2-Cf2csoBt.jpg",j1="/assets/3-BqxNZqaK.jpg",L1="/assets/4-D2I8g40-.jpg",S1="/assets/5-DINBPloV.jpg",E1={"1.jpg":y1,"2.jpg":I1,"3.jpg":j1,"4.jpg":L1,"5.jpg":S1},V1=e=>a.createElement("svg",{width:24,height:25,viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2.92723C11 1.81216 12.1735 1.08691 13.1708 1.58559L19.8944 4.94739C20.572 5.28617 21 5.9787 21 6.73625V18.2641C21 19.0217 20.572 19.7142 19.8944 20.053L13.1708 23.4148C12.1735 23.9134 11 23.1882 11 22.0731V2.92723ZM16 13.0002C16 13.8286 15.3284 14.5002 14.5 14.5002C13.6716 14.5002 13 13.8286 13 13.0002C13 12.1717 13.6716 11.5002 14.5 11.5002C15.3284 11.5002 16 12.1717 16 13.0002ZM7 4.50018C4.79086 4.50018 3 6.29104 3 8.50018V16.5002C3 18.7093 4.79086 20.5002 7 20.5002H8C8.55228 20.5002 9 20.0525 9 19.5002C9 18.9479 8.55228 18.5002 8 18.5002H7C5.89543 18.5002 5 17.6048 5 16.5002V8.50018C5 7.39561 5.89543 6.50018 7 6.50018H8C8.55228 6.50018 9 6.05247 9 5.50018C9 4.9479 8.55228 4.50018 8 4.50018H7Z"})),N1="A0a215je",H1="SQ4HNZyG",P1="y0CAw-Mi",D={userInfo:N1,userAvatar:H1,userName:P1},M1=y(()=>{const{user:e,logout:s}=L,n=e==null?void 0:e.avatar,o=n?E1[n]:"";return t.jsxs("div",{className:D.userInfo,children:[t.jsx(v1,{}),t.jsx("div",{className:D.userAvatar,children:o&&t.jsx("img",{src:o,alt:`${e==null?void 0:e.userNameInfo}`})}),t.jsx("div",{className:D.userName,children:e==null?void 0:e.userNameInfo}),t.jsx(c2,{onClick:()=>s(),color:"default",variant:"link",icon:t.jsx(V1,{})})]})}),A1=()=>{const e=new Date().getHours();return e>=0&&e<5?"Доброй ночи":e>=5&&e<12?"Доброе утро":e>=12&&e<18?"Добрый день":"Добрый вечер"},_1="M3QwuF8t",b1="qcamA0oN",Z1={fadeInWelcome:_1,fadeInOut:b1},q1=y(()=>{const{userName:e,isWelcome:s}=L;if(!s)return null;const n=e?e.split(" ")[0]:"";return t.jsx("div",{className:Z1.fadeInWelcome,role:"alert","aria-live":"assertive",children:t.jsxs("h1",{children:[A1(),n&&`, ${n}`,"! ",t.jsx("br",{})," Входим в приложение."]})})}),R1="VJV6iscZ",k1={header:R1},$1=y(()=>t.jsxs("header",{className:k1.header,children:[t.jsx(Z2,{}),t.jsx(M1,{})]})),U1="sMhpAcTP",D1={layout:U1},B1=({children:e})=>t.jsxs(t.Fragment,{children:[t.jsx($1,{}),t.jsx("main",{className:D1.layout,children:e})]}),F1=y(()=>{const{isAuthenticated:e}=L;return t.jsx(a.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsxs(o2,{children:[Object.values(M2).map(s=>{const{element:n,path:o,authorization:i=!0}=s;return!i&&!e&&(o===k||o===B)?t.jsx(M,{path:o,element:n},o):i&&!e?t.jsx(M,{path:o,element:t.jsx(z,{to:k,replace:!0})},o):e&&(o===B||o===k)?t.jsx(M,{path:o,element:t.jsx(z,{to:O,replace:!0})},o):i?t.jsx(M,{path:o,element:t.jsx(B1,{children:n})},o):null}),t.jsx(M,{path:"*",element:t.jsx(J,{})})]})})});function O1(){return t.jsx(a.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsx(F1,{})})}r2(document.getElementById("root")).render(t.jsx(a.StrictMode,{children:t.jsx(C2,{children:t.jsx(i2,{children:t.jsx(O1,{})})})}));export{w1 as B,q1 as F,W1 as I,k as L,O as M,k2 as R,B as S,L as a};
