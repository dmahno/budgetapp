var K=Object.defineProperty;var X=(n,t,s)=>t in n?K(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var g=(n,t,s)=>X(n,typeof t!="symbol"?t+"":t,s);import{r as d,j as e,m as ee,k as T,l as M,o as v,u as P}from"./react-vendor-BJbwX1Mq.js";import{aV as te,aW as w}from"./vendor-BrVx_Nsu.js";import{b as y,I as U,S as H,e as se,B as V,R as ae,P as ne,T as oe,f as re,M as ie}from"./ant-design-vendor-DPi8yqbB.js";import{I,B as Q,R as J,S as le,a as Y,M as ce,L as W}from"./index-B1TcJlJC.js";const de=n=>d.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.5 9C19.5 8.17157 18.8284 7.5 18 7.5C17.1716 7.5 16.5 8.17157 16.5 9V16.5H9C8.17157 16.5 7.5 17.1716 7.5 18C7.5 18.8284 8.17157 19.5 9 19.5H16.5V27C16.5 27.8284 17.1716 28.5 18 28.5C18.8284 28.5 19.5 27.8284 19.5 27V19.5H27C27.8284 19.5 28.5 18.8284 28.5 18C28.5 17.1716 27.8284 16.5 27 16.5H19.5V9Z"})),ue=n=>d.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M29.9436 19.1707C29.9809 18.7855 30 18.395 30 18C30 11.3726 24.6274 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30C19.2925 30 20.5373 29.7956 21.7039 29.4175C22.3649 30.4534 23.4384 31.2006 24.6928 31.4278C22.6781 32.4339 20.4051 33 18 33C9.71573 33 3 26.2843 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18C33 18.5878 32.9662 19.1678 32.9004 19.738C32.0044 19.1119 30.9289 18.9613 29.9436 19.1707ZM13.5 11.4C13.5 10.0745 14.5745 9 15.9 9H19.5C22.8137 9 25.5 11.6863 25.5 15C25.5 18.3137 22.8137 21 19.5 21H16.5V22.5H20.25C20.6642 22.5 21 22.8358 21 23.25C21 23.6642 20.6642 24 20.25 24H16.5V25.5C16.5 26.3284 15.8284 27 15 27C14.1716 27 13.5 26.3284 13.5 25.5V24H11.25C10.8358 24 10.5 23.6642 10.5 23.25C10.5 22.8358 10.8358 22.5 11.25 22.5H13.5V21H11.25C10.8358 21 10.5 20.6642 10.5 20.25C10.5 19.8358 10.8358 19.5 11.25 19.5H13.5V11.4ZM19.5 18C21.1569 18 22.5 16.6569 22.5 15C22.5 13.3431 21.1569 12 19.5 12H16.5V18H19.5ZM24 27C24 26.1716 24.6716 25.5 25.5 25.5L30 25.5V22.8107C30 22.1425 30.8079 21.8079 31.2803 22.2803L34.9393 25.9393C35.5251 26.5251 35.5251 27.4749 34.9393 28.0607L31.2803 31.7197C30.8079 32.1921 30 31.8575 30 31.1893V28.5L25.5 28.5C24.6716 28.5 24 27.8284 24 27Z"})),he="c-j1uHIF",me="-aQyJWMz",pe="hMe-qoqo",Ce="UlJbvRCE",ge="_1xoHqSXK",xe="JWM3UXOB",k={button:he,primary:me,secondary:pe,iconWrapper:Ce,iconContainer:ge,textWrapper:xe},_=({icon:n,text:t,onClick:s,appearance:a="primary",...o})=>{const i=n||(a==="primary"?de:ue);return e.jsxs("button",{className:`${k.button} ${k[a]}`,onClick:s,...o,children:[e.jsx("div",{className:k.iconWrapper,children:i&&e.jsx(i,{})}),e.jsx("div",{className:k.textWrapper,children:t})]})},ye="financeApp",D="operations",A=()=>te(ye,1,{upgrade(n){if(!n.objectStoreNames.contains(D)){const t=n.createObjectStore(D,{keyPath:"id",autoIncrement:!0});t.createIndex("category","category",{unique:!1}),t.createIndex("date","date",{unique:!1})}}});class ve{constructor(){g(this,"operationsList",[]);g(this,"selectedTab","all");g(this,"selectedTimeFilter",null);g(this,"selectedCategory",null);g(this,"selectedDates",null);g(this,"lastOperation",null);g(this,"setTab",T(t=>{this.selectedTab=t}));g(this,"setTimeFilter",T(t=>{this.selectedTimeFilter=t}));g(this,"setCategory",T(t=>{this.selectedCategory=t}));g(this,"setDateRange",T(t=>{this.selectedDates=t}));g(this,"handleDelete",T(t=>{this.deleteOperation(t)}));ee(this),this.loadOperations()}async loadOperations(){try{const s=await(await A()).getAll(D);M(()=>{this.operationsList=s,this.lastOperation=this.findLatestOperation()})}catch(t){console.error("Failed to load operations:",t),y.error("Не удалось загрузить операции.")}}async addOperation(t,s,a,o,i){if(a==="exclude"&&t>this.totalSum){y.error(`Недостаточно средств. Максимальная сумма для списания: ${this.totalSum} ₽`);return}try{const h=await A(),u={amount:t,amountOperation:s,type:a,category:o,description:i,date:new Date},m=await h.add(D,u);typeof m=="number"&&M(()=>{const r={...u,id:m};this.operationsList.unshift(r),(!this.lastOperation||r.date>this.lastOperation.date)&&(this.lastOperation=r)})}catch(h){console.error("Failed to add operation:",h),y.error("Не удалось добавить операцию.")}}async deleteOperation(t){try{await(await A()).delete(D,t),M(()=>{var o;const a=this.operationsList.find(i=>i.id===t);this.operationsList=this.operationsList.filter(i=>i.id!==t),a&&((o=this.lastOperation)==null?void 0:o.id)===t&&(this.lastOperation=this.findLatestOperation())})}catch(s){console.error("Failed to delete operation:",s),y.error("Не удалось удалить операцию.")}}async updateOperation(t,s){try{const a=await A(),o=this.operationsList.find(i=>i.id===t);if(o){const i={...o,...s};await a.put(D,i),M(()=>{var u,m;const h=this.operationsList.findIndex(r=>r.id===t);this.operationsList[h]=i,((u=this.lastOperation)==null?void 0:u.id)===t?i.date>this.lastOperation.date?this.lastOperation=i:this.lastOperation=this.findLatestOperation():i.date>(((m=this.lastOperation)==null?void 0:m.date)||0)&&(this.lastOperation=i)}),y.success("Операция успешно обновлена.")}}catch(a){console.error("Failed to update operation:",a),y.error("Не удалось обновить операцию.")}}async clearDatabase(){try{await(await A()).clear(D),M(()=>{this.operationsList=[],this.lastOperation=null}),y.success("База данных успешно очищена.")}catch(t){console.error("Failed to clear database:",t),y.error("Не удалось очистить базу данных.")}}isDateWithinSelectedFilter(t){return this.selectedTimeFilter==="week"?this.isCurrentWeek(t):this.selectedTimeFilter==="month"?this.isCurrentMonth(t):this.selectedTimeFilter==="quarter"?this.isCurrentQuarter(t):this.selectedTimeFilter==="year"?this.isCurrentYear(t):!0}findLatestOperation(){if(this.operationsList.length===0)return null;let t=this.operationsList[0];for(const s of this.operationsList)s.date>t.date&&(t=s);return t}isCurrentWeek(t){const s=new Date;s.setDate(s.getDate()-s.getDay());const a=new Date(s);return a.setDate(s.getDate()+6),t>=s&&t<=a}isCurrentMonth(t){const s=new Date(w(new Date,"yyyy-mm-01")),a=new Date(w(new Date,"yyyy-mm-31"));return t>=s&&t<=a}isCurrentQuarter(t){const s=new Date,a=new Date(s);return a.setMonth(s.getMonth()-s.getMonth()%3),a.setDate(1),t>=a&&t<=s}isCurrentYear(t){const s=new Date(new Date().getFullYear(),0,1),a=new Date(new Date().getFullYear(),11,31);return t>=s&&t<=a}get filteredOperations(){return this.operationsList.filter(t=>{const s=new Date(t.date);return!(this.selectedTab!=="all"&&t.type!==this.selectedTab||this.selectedCategory&&t.category!==this.selectedCategory||!this.isDateWithinSelectedFilter(s)||this.selectedDates&&(s<this.selectedDates[0]||s>this.selectedDates[1]))})}get totalSum(){return this.operationsList.reduce((t,s)=>s.type==="add"?t+s.amount:t-s.amount,0)}get sortedOperations(){return this.filteredOperations.slice().sort((t,s)=>s.date.getTime()-t.date.getTime())}}const L=new ve,fe="ULRzQIxJ",je="_92XQlLOJ",we="MGwEIl2w",Le="Llj3ltoo",F={sum:fe,totalSum:je,sumTitle:we,cents:Le},be=v(()=>{const{totalSum:n}=L,t=n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g," "),[s,a]=t.split(".");return e.jsxs("div",{className:F.sum,children:[e.jsx("p",{className:F.sumTitle,children:"Мой бюджет"}),e.jsxs("h1",{className:F.totalSum,children:[e.jsx("span",{children:s}),e.jsxs("span",{className:F.cents,children:[".",a," ₽"]})]})]})}),Oe=n=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.0001 6.00015L16.5001 4.50015C17.0523 3.94787 17.9478 3.94787 18.5001 4.50015C19.0523 5.05244 19.0523 5.94787 18.5001 6.50015L17.0001 8.00015L15.0001 6.00015ZM7.74692 20.0002H20.0001C20.5523 20.0002 21.0001 19.5524 21.0001 19.0002C21.0001 18.4479 20.5523 18.0002 20.0001 18.0002H9.82836L8.32267 19.5058C8.14316 19.6853 7.95064 19.8505 7.74692 20.0002ZM6.99993 18.0002L16.0001 9.00015L14.0001 7.00015L4.59339 15.9364C4.20485 16.3055 3.92228 16.7719 3.77505 17.2872L3.28885 18.9889C3.17313 19.394 3.57941 19.7518 3.96657 19.5859L4.14042 19.5114L4.53119 19.3439L5.26936 19.0275L5.3702 18.9843L5.9689 18.7277L5.96891 18.7277C5.96891 18.7277 5.96891 18.7277 5.96891 18.7277C5.96891 18.7277 5.9689 18.7277 5.9689 18.7277M6.90846 18.0916L6.99993 18.0002Z"})),He=n=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6H19C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4H16L15.5528 3.10557C15.214 2.428 14.5215 2 13.7639 2H10.2361C9.47852 2 8.786 2.428 8.44721 3.10557L8 4H5ZM6.99655 8.91695C6.95068 8.36658 6.46733 7.95759 5.91695 8.00345C5.36658 8.04932 4.95759 8.53267 5.00345 9.08305L5.77422 18.3322C5.94698 20.4053 7.68004 22 9.7604 22H14.2396C16.32 22 18.053 20.4053 18.2258 18.3322L18.9965 9.08305C19.0424 8.53267 18.6334 8.04932 18.083 8.00345C17.5327 7.95759 17.0493 8.36658 17.0035 8.91695L16.2327 18.1661C16.1463 19.2027 15.2798 20 14.2396 20H9.7604C8.72022 20 7.85369 19.2027 7.76731 18.1661L6.99655 8.91695Z"})),S=[{label:"Другое",value:"other",color:"default"},{label:"Перевод",value:"brown",color:"brown"},{label:"Питание",value:"food",color:"volcano"},{label:"Транспорт",value:"transport",color:"blue"},{label:"Развлечения",value:"purple",color:"purple"},{label:"Учеба",value:"green",color:"green"},{label:"Зарплата",value:"pink",color:"pink"}],De="xHI7fO2c",Ne="Nrlylvvn",Se="vobJnbCk",Te="_1TttVgNh",Me="aeSQzAgG",Ae="UmWvQXkA",j={transactionItem:De,transactionDetailLeft:Ne,transactionDetailRight:Se,transactionDetails:Te,amount:Me,headerTitle:Ae},Ve=v(({operations:n})=>{const[t,s]=d.useState(null),[a,o]=d.useState({amount:"",category:"",amountOperation:"",description:""}),i=r=>{s(r.id||null),o({amount:r.amount.toString(),category:r.category||S[0].value,amountOperation:r.amountOperation,description:r.description})},h=r=>{const l=a.amountOperation==="Пополнение"?"add":"exclude";L.updateOperation(r,{amount:parseFloat(a.amount),category:a.category,amountOperation:a.amountOperation,description:a.description,type:l}),s(null)},u=r=>{const l=w(r,"yyyy-mm-dd")===w(new Date,"yyyy-mm-dd"),C=w(r,"yyyy-mm-dd")===w(new Date(Date.now()-864e5),"yyyy-mm-dd");return l?"Сегодня":C?"Вчера":w(r,"dd.mm.yyyy (dddd)")},m=n.reduce((r,l)=>{const C=w(new Date(l.date),"yyyy-mm-dd");return r[C]||(r[C]=[]),r[C].push(l),r},{});return e.jsx("div",{className:j.transactionList,children:Object.keys(m).map(r=>e.jsxs("div",{className:j.dateGroup,children:[e.jsx("div",{className:j.headerTitle,children:e.jsx("h3",{children:u(new Date(r))})}),e.jsx("div",{className:j.transactionsForDate,children:m[r].map(l=>{var C,b;return e.jsxs("div",{className:j.transactionItem,children:[e.jsxs("div",{className:j.transactionDetailLeft,children:[t===l.id?e.jsx(U,{value:a.amount,onChange:c=>o({...a,amount:c.target.value})}):e.jsxs("span",{className:j.amount,style:{color:l.type==="add"?"green":"red"},children:[l.type==="add"?"+":"-",l.amount.toLocaleString("ru-RU")," ₽"]}),t===l.id&&e.jsxs(H,{value:a.amountOperation,onChange:c=>o({...a,amountOperation:c}),children:[e.jsx(H.Option,{value:"Пополнение",children:"Пополнение"}),e.jsx(H.Option,{value:"Списание",children:"Списание"})]}),t===l.id?e.jsx(U.TextArea,{value:a.description,onChange:c=>o({...a,description:c.target.value}),rows:2}):e.jsx("span",{className:j.description,children:l.description.length>20?`${l.description.slice(0,20)}...`:l.description})]}),e.jsxs("div",{className:j.transactionDetailRight,children:[e.jsx("div",{children:e.jsx(se,{children:t===l.id?e.jsx(V,{type:"link",icon:e.jsx(ae,{}),onClick:()=>h(l.id),children:"Сохранить"}):e.jsxs(e.Fragment,{children:[e.jsx(V,{type:"link",icon:e.jsx(Oe,{}),onClick:()=>i(l)}),e.jsx(ne,{title:"Удаление записи",onConfirm:()=>L.handleDelete(l.id),okText:"Да",cancelText:"Нет",children:e.jsx(V,{icon:e.jsx(He,{}),type:"link"})})]})})}),t===l.id?e.jsx(H,{value:a.category,onChange:c=>o({...a,category:c}),children:S.map(c=>e.jsx(H.Option,{value:c.value,children:c.label},c.value))}):e.jsx(oe,{color:((C=S.find(c=>c.value===l.category))==null?void 0:C.color)||"default",children:((b=S.find(c=>c.value===l.category))==null?void 0:b.label)||"Other"})]})]},l.id)})})]},r))})}),Ie=n=>d.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25 15C25 16.7732 24.5385 18.4385 23.7291 19.8826C23.7335 19.9214 23.7372 19.9606 23.7402 20.0001H26.2501C26.3198 20.0001 26.3892 20.0012 26.4584 20.0035C27.1283 18.4714 27.5 16.7791 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5C15.4692 27.5 15.9324 27.4741 16.3881 27.4238L15.3662 26.4019C14.9532 25.9889 14.6567 25.5035 14.4766 24.9865C9.19705 24.7143 5 20.3473 5 15C5 9.47715 9.47715 5 15 5C20.5228 5 25 9.47715 25 15ZM17.2465 24.7467L17.134 24.6341C16.6458 24.146 16.6458 23.3545 17.134 22.8664L20.1832 19.8172C20.5769 19.4235 21.2501 19.7023 21.2501 20.2591V22.5001H21.6145H23.7501H25.0009H26.2501C28.3211 22.5001 30.0001 24.179 30.0001 26.2501C30.0001 28.3211 28.3211 30.0001 26.2501 30.0001H25.2193C24.5289 30.0001 23.9693 29.4404 23.9693 28.7501C23.9693 28.0597 24.5289 27.5001 25.2193 27.5001H26.2501C26.9404 27.5001 27.5001 26.9404 27.5001 26.2501C27.5001 25.5597 26.9404 25.0001 26.2501 25.0001H22.5011H21.2501V25.2147V25.4676V25.8277V27.2414C21.2501 27.7982 20.5769 28.077 20.1832 27.6833L19.2565 26.7566L18.9289 26.429L18.7501 26.2502L17.2465 24.7467ZM13.75 20H16.4648L17.4112 19.0537C17.3019 18.8717 17.1027 18.75 16.875 18.75H13.75V17.5H16.25C19.0114 17.5 21.25 15.2614 21.25 12.5C21.25 9.73858 19.0114 7.5 16.25 7.5H13.25C12.1454 7.5 11.25 8.39543 11.25 9.5V16.25H9.375C9.02982 16.25 8.75 16.5298 8.75 16.875C8.75 17.2202 9.02982 17.5 9.375 17.5H11.25V18.75H9.375C9.02982 18.75 8.75 19.0298 8.75 19.375C8.75 19.7202 9.02982 20 9.375 20H11.25V21.25C11.25 21.9404 11.8096 22.5 12.5 22.5C13.1904 22.5 13.75 21.9404 13.75 21.25V20ZM18.75 12.5C18.75 13.8807 17.6307 15 16.25 15H13.75V10H16.25C17.6307 10 18.75 11.1193 18.75 12.5Z"})),ke=n=>d.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.953 15.9756C24.9841 15.6546 25 15.3291 25 15C25 9.47715 20.5228 5 15 5C9.47715 5 5 9.47715 5 15C5 20.5228 9.47715 25 15 25C16.0771 25 17.1144 24.8297 18.0866 24.5146C18.6374 25.3778 19.532 26.0005 20.5773 26.1898C18.8984 27.0283 17.0043 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 15.4899 27.4718 15.9732 27.417 16.4483C26.6704 15.9266 25.7741 15.801 24.953 15.9756ZM11.25 9.5C11.25 8.39543 12.1454 7.5 13.25 7.5H16.25C19.0114 7.5 21.25 9.73858 21.25 12.5C21.25 15.2614 19.0114 17.5 16.25 17.5H13.75V18.75H16.875C17.2202 18.75 17.5 19.0298 17.5 19.375C17.5 19.7202 17.2202 20 16.875 20H13.75V21.25C13.75 21.9404 13.1904 22.5 12.5 22.5C11.8096 22.5 11.25 21.9404 11.25 21.25V20H9.375C9.02982 20 8.75 19.7202 8.75 19.375C8.75 19.0298 9.02982 18.75 9.375 18.75H11.25V17.5H9.375C9.02982 17.5 8.75 17.2202 8.75 16.875C8.75 16.5298 9.02982 16.25 9.375 16.25H11.25V9.5ZM16.25 15C17.6307 15 18.75 13.8807 18.75 12.5C18.75 11.1193 17.6307 10 16.25 10H13.75V15H16.25ZM20 22.5C20 21.8096 20.5596 21.25 21.25 21.25H25V19.0089C25 18.4521 25.6732 18.1732 26.0669 18.5669L29.1161 21.6161C29.6043 22.1043 29.6043 22.8957 29.1161 23.3839L26.0669 26.4331C25.6732 26.8268 25 26.5479 25 25.9911V23.75H21.25C20.5596 23.75 20 23.1904 20 22.5Z"})),Fe="eR3jJ25x",Ee="U4VeLhrQ",Re="Q3L23unQ",$e="p8URsMAK",Ue="BgOxVzNO",Ze="_14j8SM38",Be="Ni0ayjXv",We="HADNRYOZ",_e="nmuQV-VB",x={lastTransactionDetails:Fe,description:Ee,date:Re,amount:$e,add:Ue,subtract:Ze,category:Be,iconDescriptionArea:We,iconArea:_e},Pe=v(()=>{const n=L.lastOperation;if(!n)return e.jsx("div",{children:"Нет транзакций"});const{date:t,amount:s,category:a,type:o,description:i}=n,h=S.find(m=>m.value===a),u=`${x.amount} ${o==="add"?x.add:x.subtract}`;return e.jsxs("div",{className:x.lastTransactionDetails,children:[e.jsxs("div",{className:`${x.iconArea} ${u}`,children:[o?e.jsx(Ie,{}):e.jsx(ke,{}),e.jsxs("div",{className:x.iconDescriptionArea,children:[e.jsx("div",{className:x.date,children:w(t,"dd.mm.yyyy")}),e.jsx("div",{className:x.description,children:i})]})]}),e.jsxs("div",{className:x.category,children:[e.jsxs("div",{className:`${x.amount} ${o==="add"?x.add:x.subtract}`,children:[o==="add"?"+":"-",s.toLocaleString("ru-RU")," ₽"]}),e.jsx("div",{children:h==null?void 0:h.label})]})]})}),Qe="EdPCS5Mu",Je="_4S4SIeih",Ye="Ee7aJUuL",qe="_1xrUPOLu",Ge="gnq--BFY",ze="_1l3vznRC",Ke="_5prBd0QU",Xe="_-24nE3eE",E={transactionHistoryArea:Qe,transactionHistory:Je,tabs:Ye,dateSection:qe,transactionsList:Ge,transactionItem:ze,transactionDetails:Ke,description:Xe},et=v(()=>e.jsxs("div",{className:E.transactionHistoryArea,children:[e.jsx("div",{className:E.transactionHistoryLastTransaction,children:e.jsx(Pe,{})}),e.jsxs("div",{className:E.transactionHistory,children:[e.jsx("h2",{children:"История транзакций"}),e.jsx(re,{className:E.tabs,items:[{label:"Все",key:"all"},{label:"Поступления",key:"add"},{label:"Списания",key:"exclude"}],defaultActiveKey:"all",onChange:n=>L.setTab(n),activeKey:L.selectedTab}),e.jsx(Ve,{operations:L.sortedOperations})]})]})),tt="jEAoCZyx",st="lXUT6oQR",at="_0JtH342Z",O={buttons:tt,amountDisplay:st,controls:at},{Option:nt}=H,ot=v(()=>{const[n,t]=d.useState(!1),[s,a]=d.useState(null),[o,i]=d.useState(0),[h,u]=d.useState("other"),[m,r]=d.useState(""),l=()=>{a("add"),t(!0),i(0),u("other"),r("")},C=()=>{a("extract"),t(!0),i(0),u("other"),r("")},b=async()=>{o>0?(s==="add"?(await L.addOperation(o,"Пополнение","add",h,m),y.success(`Сумма ${N(o)} добавлена`)):s==="extract"&&(await L.addOperation(o,"Списание","exclude",h,m),y.success(`Сумма ${N(o)} списана`)),t(!1),i(0),u("other"),r("")):y.error("Пожалуйста, введите корректную сумму")},c=()=>{t(!1),i(0),u("other"),r("")},N=p=>p.toLocaleString("ru-RU"),Z=()=>i(p=>p+1e3),B=()=>i(p=>Math.max(0,p-1e3)),f=p=>{const z=Number(p.target.value.replace(/\D/g,""));i(z)},q=p=>{u(p)},G=p=>{r(p.target.value)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:O.buttons,children:[e.jsx(_,{text:"Пополнить",onClick:l}),e.jsx(_,{text:"Списать",appearance:"secondary",onClick:C})]}),e.jsxs(ie,{title:s==="add"?"Пополнить счет":"Списать средства",open:n,onOk:b,onCancel:c,children:[e.jsx("div",{className:O.amountDisplay,children:e.jsxs("span",{className:O.amount,children:[N(o)," ₽"]})}),e.jsx(U,{type:"text",value:o>0?N(o):"",placeholder:"Введите сумму",onChange:f,className:O.inputField}),e.jsx(H,{value:h,onChange:q,className:O.selectCategory,style:{width:"100%",marginTop:"16px"},children:S.map(p=>e.jsx(nt,{value:p.value,children:p.label},p.value))}),e.jsx(U.TextArea,{value:m,placeholder:"Введите описание",onChange:G,className:O.textareaField,style:{marginTop:"16px"}}),e.jsxs("div",{className:O.controls,children:[e.jsx(V,{onClick:B,disabled:o<=0,children:"-"}),e.jsx(V,{onClick:Z,children:"+"})]})]})]})}),rt={},wt=v(()=>e.jsxs("div",{className:rt.container,children:[e.jsx(be,{}),e.jsx(ot,{}),e.jsx(et,{})]})),it="TdZ90AYN",lt="CTyu-mpA",ct="HiIy4SzJ",dt="mlhC4W0-",R={formContainer:it,form:lt,formHeader:ct,signUpLink:dt},ut=v(()=>{const{loginAction:n,setLogin:t,setPassword:s,areFieldsFilled:a,loading:o,password:i,login:h,userName:u}=Y,m=P(),r=c=>{c.preventDefault(),n(()=>{m(ce)})},l=d.useCallback(c=>{t(c.target.value)},[t]),C=d.useCallback(c=>{s(c.target.value)},[s]),b=a({login:h,password:i});return e.jsx(e.Fragment,{children:e.jsxs("div",{className:R.formContainer,children:[e.jsxs("h1",{className:R.formHeader,children:["Привет",u?`, ${u}`:"","!",e.jsx("br",{}),"Войди в приложение"]}),e.jsxs("form",{className:R.form,onSubmit:r,children:[e.jsx(I,{label:"Логин",autoComplete:"none",value:h,onChange:l}),e.jsx(I,{label:"Пароль",autoComplete:"none",password:!0,value:i,onChange:C}),e.jsx(Q,{loading:o,width:"full",disabled:o||!b,children:"Войти"})]}),e.jsx(J,{className:R.signUpLink,to:le,children:"У меня нет логина и пароля"})]})})}),Lt=v(()=>e.jsx(ut,{})),ht="m27qtyrP",mt="Bjjb-nZw",pt="liaWouwr",Ct="iNc8RuBD",$={formContainer:ht,form:mt,formHeader:pt,signUpLink:Ct},gt=v(()=>{const{signUp:n,setLogin:t,setPassword:s,setUserName:a,validateLogin:o,loading:i,password:h,login:u,userName:m,isLoginInvalid:r,isPasswordInvalid:l,isFormValid:C}=Y,b=P();d.useEffect(()=>{o()},[o,u]);const c=f=>{f.preventDefault(),n(()=>{b(W)})},N=f=>{t(f.target.value)},Z=f=>{s(f.target.value)},B=f=>{a(f.target.value)};return e.jsxs("div",{className:$.formContainer,children:[e.jsxs("h1",{className:$.formHeader,children:["Привет",m?`, ${m}`:"","!",e.jsx("br",{}),"Тут проходит регистрация"]}),e.jsxs("form",{className:$.form,onSubmit:c,children:[e.jsx(I,{label:"Логин",autoComplete:"none",value:u,onChange:N}),r&&e.jsx("small",{style:{color:"red"},children:"Только латинские буквы"}),e.jsx(I,{label:"Имя пользователя",value:m,onChange:B}),e.jsx(I,{label:"Пароль",password:!0,autoComplete:"none",value:h,onChange:Z}),l&&e.jsx("small",{style:{color:"red"},children:"Пароль должен быть больше 5 символов"}),e.jsx(Q,{width:"full",disabled:i||!C(),children:"Зарегистрироваться"})]}),e.jsx(J,{className:$.signUpLink,to:W,children:"Перейти на страницу авторизации"})]})}),bt=v(()=>e.jsx(gt,{}));export{Lt as A,wt as F,bt as S};
