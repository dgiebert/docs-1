"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_label:"Writing Policies",title:""},o="What is a Kubewarden policy",s={unversionedId:"writing-policies/index",id:"writing-policies/index",title:"",description:"In this section we will explain what Kubewarden policies are by using some traditional computing",source:"@site/docs/writing-policies/index.md",sourceDirName:"writing-policies",slug:"/writing-policies/",permalink:"/writing-policies/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/index.md",tags:[],version:"current",lastUpdatedAt:1671477327,formattedLastUpdatedAt:"Dec 19, 2022",frontMatter:{sidebar_label:"Writing Policies",title:""},sidebar:"docs",previous:{title:"Architecture",permalink:"/architecture"},next:{title:"Policy Communication Specification",permalink:"/writing-policies/spec/intro-spec"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-a-kubewarden-policy"},"What is a Kubewarden policy"),(0,i.kt)("p",null,"In this section we will explain what Kubewarden policies are by using some traditional computing\nanalogies."),(0,i.kt)("p",null,"A Kubewarden policy can be seen as a regular program that does one job: it receives\ninput data, performs some computation against that and it finally returns a response."),(0,i.kt)("p",null,"The input data are Kubernetes admission requests and the result of the computation\nis a validation response, something that tells to Kubernetes whether to accept, reject or\nmutate the original input data."),(0,i.kt)("p",null,"All these operations are performed by a component of Kubewarden that is called\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/policy-server"},"policy-server"),"."),(0,i.kt)("p",null,"The policy server doesn't bundle any data processing capability. All these capabilities are\nadded at runtime via add-ons: the Kubewarden policies."),(0,i.kt)("p",null,"As a consequence, a Kubewarden policy can be seen as a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Plug-in_%28computing%29"},"traditional plug-in"),'\nof the "policy server" program.'),(0,i.kt)("p",null,"To recap:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubewarden policies are plug-ins that expose a set of well-defined\nfunctionalities (validate a Kubernetes request object, validate policy settings\nprovided by the user,...) using a well-defined API"),(0,i.kt)("li",{parentName:"ul"},'Policy server is the "main" program that loads the plug-ins\n(aka policies) and leverages their exposed functionalities to validate or mutate\nKubernetes requests')),(0,i.kt)("p",null,"Writing Kubewarden policies consists of writing the validation business logic\nand then exposing it through a well-defined API."),(0,i.kt)("h1",{id:"programming-language-requirements"},"Programming language requirements"),(0,i.kt)("p",null,"Kubewarden policies are delivered as ",(0,i.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly"),"\nbinaries."),(0,i.kt)("p",null,"Policy authors can write policies using any programming language that supports\nWebAssembly as a compilation target. The list of supported language is constantly\nevolving, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/appcypher/awesome-wasm-langs"},"this page"),"\nprovides a nice overview of the WebAssembly landscape."),(0,i.kt)("p",null,"Currently WebAssembly doesn't have an official way to share complex data types\nbetween the host and a WebAssembly guest. To overcome this limitation\nKubewarden policies leverage the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wapc"},"waPC")," project, which\nprovides a bi-directional communication channel."),(0,i.kt)("p",null,"Because of that your programming language of choice must provide a waPC guest SDK.\nIf that's not the case, feel free to reach out. We can help you overcome this\nlimitation."))}u.isMDXComponent=!0}}]);