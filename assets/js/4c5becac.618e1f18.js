"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68833],{87981:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"classes/EventEmitter","title":"Class: EventEmitter\\\\<T\\\\>","description":"Defined in167","source":"@site/api/classes/EventEmitter.md","sourceDirName":"classes","slug":"/classes/EventEmitter","permalink":"/api/classes/EventEmitter","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"Disposable","permalink":"/api/classes/Disposable"},"next":{"title":"TelemetryTrustedValue","permalink":"/api/classes/TelemetryTrustedValue"}}');var i=s(62540),r=s(43023);const d={},c="Class: EventEmitter<T>",l={},o=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"T",id:"t",level:3},{value:"Constructors",id:"constructors",level:2},{value:"new EventEmitter()",id:"new-eventemitter",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"event",id:"event",level:3},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-1",level:4},{value:"fire()",id:"fire",level:3},{value:"Parameters",id:"parameters",level:4},{value:"data",id:"data",level:5},{value:"Returns",id:"returns-2",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"class-eventemittert",children:"Class: EventEmitter<T>"})}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/AlexonOliveiraRH/podman-desktop/blob/107ddf645dd70bb808e4d1b774cf1a504aa92762/packages/extension-api/src/extension-api.d.ts#L167",children:"packages/extension-api/src/extension-api.d.ts:167"})]}),"\n",(0,i.jsxs)(n.p,{children:["A class to create and manage an ",(0,i.jsx)(n.a,{href:"/api/interfaces/Event",children:"Event"})," for clients to subscribe to.\nThe emitter can only send one kind of event."]}),"\n",(0,i.jsx)(n.p,{children:"Use this class to send events inside extension or provide API to the other\nextensions."}),"\n",(0,i.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,i.jsx)(n.h3,{id:"t",children:"T"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"T"})}),"\n",(0,i.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(n.h3,{id:"new-eventemitter",children:"new EventEmitter()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"new EventEmitter"}),"<",(0,i.jsx)(n.code,{children:"T"}),">(): ",(0,i.jsx)(n.code,{children:"EventEmitter"}),"<",(0,i.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"EventEmitter"}),"<",(0,i.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"event",children:"event"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"event"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/AlexonOliveiraRH/podman-desktop/blob/107ddf645dd70bb808e4d1b774cf1a504aa92762/packages/extension-api/src/extension-api.d.ts#L171",children:"packages/extension-api/src/extension-api.d.ts:171"})]}),"\n",(0,i.jsx)(n.p,{children:"For the public to allow to subscribe to events from this Emitter"}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dispose"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/AlexonOliveiraRH/podman-desktop/blob/107ddf645dd70bb808e4d1b774cf1a504aa92762/packages/extension-api/src/extension-api.d.ts#L180",children:"packages/extension-api/src/extension-api.d.ts:180"})]}),"\n",(0,i.jsx)(n.p,{children:"Dispose by removing registered listeners"}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"fire",children:"fire()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"fire"}),"(",(0,i.jsx)(n.code,{children:"data"}),"): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/AlexonOliveiraRH/podman-desktop/blob/107ddf645dd70bb808e4d1b774cf1a504aa92762/packages/extension-api/src/extension-api.d.ts#L176",children:"packages/extension-api/src/extension-api.d.ts:176"})]}),"\n",(0,i.jsx)(n.p,{children:"To fire an event to the subscribers"}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.h5,{id:"data",children:"data"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"T"})}),"\n",(0,i.jsx)(n.p,{children:"The event to send to the registered listeners"}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(63696);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);