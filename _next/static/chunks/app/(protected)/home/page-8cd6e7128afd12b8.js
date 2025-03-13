(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{3933:(e,t,l)=>{Promise.resolve().then(l.bind(l,6062)),Promise.resolve().then(l.bind(l,5568)),Promise.resolve().then(l.bind(l,9746)),Promise.resolve().then(l.bind(l,4100)),Promise.resolve().then(l.bind(l,8353)),Promise.resolve().then(l.bind(l,9479))},6046:(e,t,l)=>{"use strict";var s=l(6658);l.o(s,"useRouter")&&l.d(t,{useRouter:function(){return s.useRouter}})},1956:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let s=l(306)._(l(580));function r(e,t){var l;let r={};"function"==typeof e&&(r.loader=e);let a={...r,...t};return(0,s.default)({...a,modules:null==(l=a.loadableGenerated)?void 0:l.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9827:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let s=l(3719);function r(e){let{reason:t,children:l}=e;if("undefined"==typeof window)throw new s.BailoutToCSRError(t);return l}},580:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let s=l(5155),r=l(2115),a=l(9827),n=l(9214);function i(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},d=function(e){let t={...o,...e},l=(0,r.lazy)(()=>t.loader().then(i)),d=t.loading;function c(e){let i=d?(0,s.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,o=!t.ssr||!!t.loading,c=o?r.Suspense:r.Fragment,u=t.ssr?(0,s.jsxs)(s.Fragment,{children:["undefined"==typeof window?(0,s.jsx)(n.PreloadChunks,{moduleIds:t.modules}):null,(0,s.jsx)(l,{...e})]}):(0,s.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(l,{...e})});return(0,s.jsx)(c,{...o?{fallback:i}:{},children:u})}return c.displayName="LoadableComponent",c}},9214:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return i}});let s=l(5155),r=l(7650),a=l(5861),n=l(8284);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let l=a.workAsyncStorage.getStore();if(void 0===l)return null;let i=[];if(l.reactLoadableManifest&&t){let e=l.reactLoadableManifest;for(let l of t){if(!e[l])continue;let t=e[l].files;i.push(...t)}}return 0===i.length?null:(0,s.jsx)(s.Fragment,{children:i.map(e=>{let t=l.assetPrefix+"/_next/"+(0,n.encodeURIPath)(e);return e.endsWith(".css")?(0,s.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,r.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},6062:(e,t,l)=>{"use strict";l.d(t,{default:()=>p});var s=l(5155),r=l(5565),a=l(2115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return t.filter((e,t,l)=>!!e&&""!==e.trim()&&l.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let d=(0,a.forwardRef)((e,t)=>{let{color:l="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:d="",children:c,iconNode:u,...x}=e;return(0,a.createElement)("svg",{ref:t,...o,width:s,height:s,stroke:l,strokeWidth:n?24*Number(r)/Number(s):r,className:i("lucide",d),...x},[...u.map(e=>{let[t,l]=e;return(0,a.createElement)(t,l)}),...Array.isArray(c)?c:[c]])}),c=(e,t)=>{let l=(0,a.forwardRef)((l,s)=>{let{className:r,...o}=l;return(0,a.createElement)(d,{ref:s,iconNode:t,className:i("lucide-".concat(n(e)),r),...o})});return l.displayName="".concat(e),l},u=c("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),x=c("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),m=c("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),f=c("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);var h=l(425),g=l(6046);function p(e){let t=(0,g.useRouter)();return(0,s.jsxs)("div",{className:"relative z-10 bg-white/90 backdrop-blur-md ".concat(e.home?"":"shadow-xl"," rounded-2xl p-6 sm:p-8 md:p-10 max-w-lg w-full transform transition-all"),children:[(0,s.jsx)("div",{className:"relative w-full h-48 md:h-56 overflow-hidden rounded-xl group",children:(0,s.jsx)(r.default,{src:"/images/16-9-wedding-5.svg",alt:"Wedding decoration",layout:"fill",objectFit:"cover",className:"transition-all duration-500 ease-in-out group-hover:scale-110"})}),(0,s.jsxs)("div",{className:"text-center mt-6",children:[(0,s.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold text-gray-800",children:"เรียนเชิญร่วมงานมงคลสมรส"}),(0,s.jsxs)("div",{className:"flex items-center justify-center mt-3 space-x-3",children:[(0,s.jsx)("h2",{className:"text-xl text-gray-700",children:"คุณเจ้าบ่าว"}),(0,s.jsx)(u,{className:"text-pink-400 w-6 h-6"}),(0,s.jsx)("h2",{className:"text-xl text-gray-700",children:"คุณเจ้าสาว"})]})]}),(0,s.jsxs)("div",{className:"mt-6 space-y-4 mb-4",children:[(0,s.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,s.jsx)(x,{className:"text-stone-500 w-5 h-5"}),(0,s.jsx)("p",{className:"text-gray-700 text-lg",children:"วันอังคารที่ 15 เมษายน 2568"})]}),(0,s.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,s.jsx)(m,{className:"text-stone-500 w-5 h-5"}),(0,s.jsx)("p",{className:"text-gray-700 text-lg",children:"พิธีเช้า: 09:00 น. | งานเลี้ยง: 18:00 น."})]}),(0,s.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,s.jsx)(f,{className:"text-stone-500 w-5 h-5"}),(0,s.jsx)("p",{className:"text-gray-700 text-lg",children:"ศูนย์ประชุมมารินทร์, มหาสารคาม"})]})]}),(0,s.jsxs)("div",{className:"mt-6 text-center text-sm text-gray-500",children:[(0,s.jsx)("p",{children:"กรุณาตอบรับภายในวันที่ 10 เมษายน 2568"}),(0,s.jsx)("p",{children:"สอบถามข้อมูลเพิ่มเติม: 080-XXX-XXXX"})]}),e.button&&(0,s.jsx)(h.$,{className:"w-full mt-8 bg-primary text-white py-3 rounded-lg text-lg hover:bg-pink-500 transition-all duration-200 ease-in-out",onClick:()=>t.push("/home"),children:"เข้าชมเว็บไซต์"})]})}},5568:(e,t,l)=>{"use strict";l.d(t,{default:()=>n});var s=l(5155),r=l(2115);let a=["/images/wedding.jpg","/images/wedding.jpg","/images/wedding2.jpg","/images/wedding4.jpg","/images/wedding5.jpg","/images/wedding3.jpg","/images/wedding6.jpg","/images/wedding7.jpg"],n=()=>{let[e,t]=(0,r.useState)(0),l=(0,r.useRef)(null),[n,i]=(0,r.useState)(!1),[o,d]=(0,r.useState)(0),[c,u]=(0,r.useState)(0);return(0,r.useEffect)(()=>{l.current&&(l.current.style.transition="transform 1s ease-in-out",l.current.style.transform="translateX(-".concat(100*e,"%)"))},[e]),(0,r.useEffect)(()=>{n||u(0)},[n]),(0,s.jsxs)("section",{className:"relative w-full h-screen overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.3)]",children:[(0,s.jsx)("div",{ref:l,className:"flex w-full h-full",style:{display:"flex",flexDirection:"row"},onTouchStart:e=>{i(!0),d(e.touches[0].clientX),u(0)},onTouchMove:e=>{n&&u(e.touches[0].clientX-o)},onTouchEnd:()=>{i(!1),Math.abs(c)>50&&(c>0&&e>0?t(e=>e-1):c<0&&e<a.length-1&&t(e=>e+1))},children:a.map((t,l)=>(0,s.jsx)("div",{className:"w-full h-full flex-shrink-0",style:{backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center"},"aria-hidden":l!==e,children:0===l&&(0,s.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-black bg-opacity-40",style:{backdropFilter:"blur(10px)"},children:(0,s.jsxs)("div",{className:"absolute top-1/4 left-1/2 grid gap-10 transform -translate-x-1/2 text-center text-white",children:[(0,s.jsx)("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-bold font-cormorantGaramond",children:"Forever Begins Here A Love Written in the Stars"}),(0,s.jsx)("div",{className:"grid gap-6 sm:gap-8",children:(0,s.jsx)("h3",{className:"text-lg sm:text-xl font-raleway",children:"Two hearts, one journey, bound by love and cherished moments. Join us as we celebrate the beginning of our forever, surrounded by those who mean the most."})})]})})},l))}),(0,s.jsx)("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2",children:a.map((l,r)=>(0,s.jsx)("button",{className:"w-3 h-3 rounded-full ".concat(r===e?"bg-white":"bg-gray-300 bg-opacity-50 backdrop-blur-md"),onClick:()=>t(r),"aria-label":"Slide ".concat(r+1)},r))})]})}},9746:(e,t,l)=>{"use strict";l.d(t,{default:()=>n});var s=l(5155),r=l(2115);let a=new Date("2025-04-15T00:00:00").getTime();function n(){let[e,t]=(0,r.useState)(l());function l(){let e=a-new Date().getTime();return e<=0?{days:0,hours:0,minutes:0,seconds:0}:{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%36e5/6e4),seconds:Math.floor(e%6e4/1e3)}}return(0,r.useEffect)(()=>{let e=setInterval(()=>{t(l())},1e3);return()=>clearInterval(e)},[]),(0,s.jsx)("div",{className:"mt-6 flex justify-center space-x-4 text-2xl sm:text-3xl font-semibold",children:["days","hours","minutes","seconds"].map(t=>(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("span",{className:"text-4xl sm:text-5xl font-bold",children:e[t]}),(0,s.jsx)("span",{className:"text-sm sm:text-base",children:"days"===t?"วัน":"hours"===t?"ชั่วโมง":"minutes"===t?"นาที":"วินาที"})]},t))})}},4100:(e,t,l)=>{"use strict";l.d(t,{default:()=>o});var s=l(5155),r=l(2115),a=l(5565),n=l(5729);l(7587);let i=[{src:"/images/wedding.jpg",alt:"Wedding Image 1"},{src:"/images/wedding4.jpg",alt:"Wedding Image 4"},{src:"/images/wedding2.jpg",alt:"Wedding Image 2"},{src:"/images/wedding5.jpg",alt:"Wedding Image 5"},{src:"/images/wedding3.jpg",alt:"Wedding Image 3"},{src:"/images/wedding6.jpg",alt:"Wedding Image 4"},{src:"/images/wedding.jpg",alt:"Wedding Image 1"},{src:"/images/wedding7.jpg",alt:"Wedding Image 4"}],o=()=>{let[e,t]=(0,r.useState)(!1),[l,o]=(0,r.useState)(null),d=(0,r.useRef)(0),c=(0,r.useRef)(0),u=(0,r.useRef)(null),x=e=>{o(e)};return(0,r.useEffect)(()=>{let e=u.current;if(!e)return;let t=()=>{let t=e.scrollWidth-e.clientWidth;e.scrollLeft===t&&(e.style.transition="transform 0.3s ease",e.scrollLeft=e.clientWidth),0===e.scrollLeft&&(e.style.transition="transform 0.3s ease",e.scrollLeft=t)};return e.addEventListener("scroll",t),()=>{e&&e.removeEventListener("scroll",t)}},[]),(0,s.jsx)("div",{className:"flex items-center justify-center bg-[#f4f4f4] pt-16 px-6 font-sans",children:(0,s.jsxs)("div",{className:"container mx-auto text-center mb-16",children:[(0,s.jsx)("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4",children:"Gallery"}),(0,s.jsx)("p",{className:"text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-12",children:"บันทึกความทรงจำของพวกเรา"}),(0,s.jsx)("div",{ref:u,className:"relative overflow-x-auto scrollbar-hide h-[480px]",onMouseDown:e=>{t(!0),d.current=e.pageX-u.current.offsetLeft,c.current=u.current.scrollLeft},onMouseLeave:()=>{t(!1)},onMouseUp:()=>{t(!1)},onMouseMove:t=>{if(!e)return;t.preventDefault();let l=(t.pageX-u.current.offsetLeft-d.current)*3;u.current.scrollLeft=c.current-l},children:(0,s.jsx)("div",{className:"flex space-x-4",children:[...i,...i,...i].map((e,t)=>(0,s.jsx)("div",{className:"flex-shrink-0 w-80 group content-center",children:(0,s.jsx)("div",{className:"rounded-lg shadow-lg overflow-hidden",children:(0,s.jsx)(a.default,{src:e.src,alt:e.alt,width:500,height:300,className:"w-full h-auto object-cover group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 cursor-pointer",onClick:()=>x(e.src)})})},t))})}),(0,s.jsx)(n.A,{isOpen:!!l,imageSrc:l,onClose:()=>{o(null)}})]})})}},8353:(e,t,l)=>{"use strict";l.d(t,{default:()=>n});var s=l(5155);l(2115);var r=l(1956);let a=l.n(r)()(()=>Promise.all([l.e(484),l.e(761),l.e(381)]).then(l.bind(l,8381)),{loadableGenerated:{webpack:()=>[8381]},ssr:!1}),n=e=>{let{id:t}=e,l=()=>{window.open("https://www.google.com/maps/place/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1/@16.177433,103.2958412,17z/data=!3m1!4b1!4m6!3m5!1s0x3122a6ee881540bb:0xaf02299a3abf9bb4!8m2!3d16.177433!4d103.2984161!16s%2Fg%2F11bxg0gh6c?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D","_blank")};return(0,s.jsx)("div",{id:t,className:"flex items-center justify-center bg-[#f4f4f4] py-16 px-6 font-sans",children:(0,s.jsxs)("div",{className:"container mx-auto text-center",children:[(0,s.jsx)("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4",children:"A Place Every Moment Becomes a Memory"}),(0,s.jsx)("p",{className:"text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-12",children:"สถานที่จัดงาน สถานที่ที่เราจะสร้างความทรงจำที่ไม่มีวันลืมร่วมกัน"}),(0,s.jsxs)("p",{className:"text-lg sm:text-xl md:text-2xl text-gray-600 px-6",children:["เรามีความยินดีที่จะเชิญทุกท่านมาร่วมเป็นสักขีพยานในวันสำคัญของเรา",(0,s.jsx)("br",{}),"ที่",(0,s.jsx)("strong",{className:"font-bold",children:" ศูนย์ประชุมมารินทร์ "}),(0,s.jsx)("br",{}),"เลขที่ 65 ซอยผดุงวิถี 8, ตำบลตลาด, อำเภอเมืองมหาสารคาม, จังหวัดมหาสารคาม, ประเทศไทย 44000"]}),(0,s.jsx)("div",{className:"mt-12 mb-3 w-full flex justify-center items-center relative z-0",children:(0,s.jsx)("div",{className:"max-w-[756px] h-[300px] w-full rounded-2xl shadow-xl",children:(0,s.jsx)(a,{})})}),(0,s.jsx)("button",{className:"bg-primary text-white py-2 px-6 rounded-md w-80 sm:w-96 mt-4 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 shadow-lg transform transition duration-200 ease-in-out hover:scale-105","aria-label":"Details about the wedding event",onClick:e=>{e.preventDefault(),l()},rel:"noopener noreferrer",children:"เปิดใน Google Maps"})]})})}},9479:(e,t,l)=>{"use strict";l.d(t,{default:()=>i});var s=l(5155),r=l(5565),a=l(2115),n=l(5729);let i=()=>{let[e,t]=(0,a.useState)(!1),[l,i]=(0,a.useState)(null),o=e=>{i(e),t(!0)};return(0,s.jsxs)("div",{className:"flex items-center justify-center bg-[#f4f4f4] pt-16 px-6 font-sans",children:[(0,s.jsxs)("div",{className:"container mx-auto text-center",children:[(0,s.jsx)("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4",children:"Our Love Story"}),(0,s.jsx)("p",{className:"text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-12",children:"ความรักของเราจากจุดเริ่มต้นจนถึงวันนี้"}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:grid-cols-4",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2 sm:gap-4 md:gap-6 lg:col-start-2",children:[(0,s.jsx)("div",{className:"relative group cursor-pointer overflow-hidden",onClick:()=>o("/images/wedding.jpg"),children:(0,s.jsx)(r.default,{src:"/images/wedding.jpg",alt:"Love Story Image 1",width:600,height:400,className:"w-full h-auto rounded-lg shadow-md group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 cursor-pointer"})}),(0,s.jsx)("div",{className:"relative group cursor-pointer overflow-hidden",onClick:()=>o("/images/wedding4.jpg"),children:(0,s.jsx)(r.default,{src:"/images/wedding4.jpg",alt:"Love Story Image 1",width:600,height:400,className:"w-full h-auto rounded-lg shadow-md group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 cursor-pointer"})})]}),(0,s.jsx)("div",{className:"flex flex-col h-full",children:(0,s.jsx)("div",{className:"relative group cursor-pointer overflow-hidden h-full",onClick:()=>o("/images/wedding5.jpg"),children:(0,s.jsx)(r.default,{src:"/images/wedding5.jpg",alt:"Love Story Image 3",width:600,height:800,className:"w-full h-full object-cover rounded-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 cursor-pointer"})})})]}),(0,s.jsxs)("div",{className:"mt-12 w-full flex flex-col justify-center",children:[(0,s.jsx)("p",{className:"text-xl sm:text-2xl md:text-3xl w-full max-w-[756px] font-bold text-left text-primary mb-4 mx-auto",children:"จุดเริ่มต้นของเรา"}),(0,s.jsx)("p",{className:"text-lg sm:text-xl md:text-2xl w-full max-w-[756px] text-left mx-auto text-gray-700 leading-relaxed",children:"ทุกความรักมีเรื่องราวของมันเอง… และเรื่องราวของเราก็เริ่มต้นจากวันธรรมดาวันหนึ่ง ที่กลายเป็นวันที่พิเศษที่สุด เมื่อสายตาสองคู่บังเอิญสบกัน โลกที่เคยวุ่นวายกลับเงียบสงบในชั่วพริบตา เราเริ่มต้นจากการเป็นเพื่อน พูดคุย หัวเราะ และค่อยๆ เติมเต็มกันและกัน"})]})]}),(0,s.jsx)(n.A,{isOpen:e,imageSrc:l,onClose:()=>{t(!1),i(null)}})]})}},5729:(e,t,l)=>{"use strict";l.d(t,{A:()=>a});var s=l(5155);l(2115);var r=l(5565);let a=e=>{let{isOpen:t,imageSrc:l,onClose:a}=e;return t?(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4",onClick:a,children:(0,s.jsxs)("div",{className:"relative bg-white rounded-lg overflow-hidden w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 max-w-md m-auto",onClick:e=>e.stopPropagation(),children:[(0,s.jsx)(r.default,{src:l,alt:"Selected Image",width:0,height:0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw",className:"w-full h-auto object-contain"}),(0,s.jsx)("button",{className:"absolute top-2 right-2 text-white text-2xl",onClick:a,children:"✕"})]})}):null}},7587:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[116,425,565,441,517,358],()=>t(3933)),_N_E=e.O()}]);