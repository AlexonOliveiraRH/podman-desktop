"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14036],{90945:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"interfaces/ProgressOptions","title":"Interface: ProgressOptions","description":"Defined in1259","source":"@site/api/interfaces/ProgressOptions.md","sourceDirName":"interfaces","slug":"/interfaces/ProgressOptions","permalink":"/api/interfaces/ProgressOptions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"Progress","permalink":"/api/interfaces/Progress"},"next":{"title":"Provider","permalink":"/api/interfaces/Provider"}}');var t=s(62540),r=s(43023);const o={},a="Interface: ProgressOptions",c={},d=[{value:"Properties",id:"properties",level:2},{value:"cancellable?",id:"cancellable",level:3},{value:"details?",id:"details",level:3},{value:"routeArgs",id:"routeargs",level:4},{value:"routeId",id:"routeid",level:4},{value:"Example",id:"example",level:4},{value:"location",id:"location",level:3},{value:"title?",id:"title",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-progressoptions",children:"Interface: ProgressOptions"})}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/AlexonOliveiraRH/podman-desktop/blob/107ddf645dd70bb808e4d1b774cf1a504aa92762/packages/extension-api/src/extension-api.d.ts#L1259",children:"packages/extension-api/src/extension-api.d.ts:1259"})]}),"\n",(0,t.jsx)(n.p,{children:"Value-object describing where and how progress should show."}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"cancellable",children:"cancellable?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"cancellable"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/AlexonOliveiraRH/podman-desktop/blob/107ddf645dd70bb808e4d1b774cf1a504aa92762/packages/extension-api/src/extension-api.d.ts#L1277",children:"packages/extension-api/src/extension-api.d.ts:1277"})]}),"\n",(0,t.jsxs)(n.p,{children:["Controls if a cancel button should show to allow the user to\ncancel the long running operation.  Note that currently only\n",(0,t.jsx)(n.code,{children:"ProgressLocation.Notification"})," is supporting to show a cancel\nbutton."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"details",children:"details?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"details"}),": ",(0,t.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/AlexonOliveiraRH/podman-desktop/blob/107ddf645dd70bb808e4d1b774cf1a504aa92762/packages/extension-api/src/extension-api.d.ts#L1301",children:"packages/extension-api/src/extension-api.d.ts:1301"})]}),"\n",(0,t.jsx)(n.p,{children:"You may specify a navigation object, making the task having a\nnavigate action that the user can trigger."}),"\n",(0,t.jsx)(n.h4,{id:"routeargs",children:"routeArgs"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"routeArgs"}),": ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The arguments to provide the route"}),"\n",(0,t.jsx)(n.h4,{id:"routeid",children:"routeId"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"routeId"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The routeId used in ",(0,t.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/navigation/functions/register",children:"navigation.register"})]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { window, type ProgressLocation } from '@podman-desktop/api';\n\nawait window.withProgress<string>(\n    {\n      location: ProgressLocation.TASK_WIDGET,\n      title: 'My task',\n      details: {\n        routeId: 'dummy-route-id',\n        routeArgs: ['hello', 'world'],\n      }\n    },\n    async () => {\n      return 'dummy result';\n    },\n  );\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"location",children:"location"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"location"}),": ",(0,t.jsx)(n.a,{href:"/api/enumerations/ProgressLocation",children:(0,t.jsx)(n.code,{children:"ProgressLocation"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/AlexonOliveiraRH/podman-desktop/blob/107ddf645dd70bb808e4d1b774cf1a504aa92762/packages/extension-api/src/extension-api.d.ts#L1263",children:"packages/extension-api/src/extension-api.d.ts:1263"})]}),"\n",(0,t.jsx)(n.p,{children:"The location at which progress should show."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"title",children:"title?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"title"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/AlexonOliveiraRH/podman-desktop/blob/107ddf645dd70bb808e4d1b774cf1a504aa92762/packages/extension-api/src/extension-api.d.ts#L1269",children:"packages/extension-api/src/extension-api.d.ts:1269"})]}),"\n",(0,t.jsx)(n.p,{children:"A human-readable string which will be used to describe the\noperation."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(63696);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);