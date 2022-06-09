"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[138],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7879:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],s={sidebar_label:"TypeScript",title:""},p="TypeScript",l={unversionedId:"writing-policies/typescript",id:"writing-policies/typescript",title:"",description:"As stated on the official website:",source:"@site/docs/writing-policies/typescript.md",sourceDirName:"writing-policies",slug:"/writing-policies/typescript",permalink:"/writing-policies/typescript",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/typescript.md",tags:[],version:"current",lastUpdatedAt:1654781422,formattedLastUpdatedAt:"6/9/2022",frontMatter:{sidebar_label:"TypeScript",title:""},sidebar:"docs",previous:{title:"Swift",permalink:"/writing-policies/swift"},next:{title:"Distributing Policies",permalink:"/distributing-policies"}},c={},u=[{value:"Current State",id:"current-state",level:2},{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript"},"TypeScript"),(0,a.kt)("p",null,"As stated on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"official website"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TypeScript extends JavaScript by adding types."),(0,a.kt)("p",{parentName:"blockquote"},"By understanding JavaScript, TypeScript saves you time catching errors and\nproviding fixes before you run code.")),(0,a.kt)("p",null,"TypeScript ",(0,a.kt)("strong",{parentName:"p"},"cannot")," be converted to WebAssembly, however\n",(0,a.kt)("a",{parentName:"p",href:"https://www.assemblyscript.org/"},"AssemblyScript")," is a ",(0,a.kt)("strong",{parentName:"p"},"subset")," of TypeScript\ndesigned explicitly for WebAssembly."),(0,a.kt)("h2",{id:"current-state"},"Current State"),(0,a.kt)("p",null,"Currently there's no Kubewarden SDK for AssemblyScript. We haven't created it\nbecause of lack of time. We will do that in the near future."),(0,a.kt)("p",null,"In the meantime, there seem to be some limitatations affecting AssemblyScript:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There's no built-in way to serialize and deserialize Classes to\nand from JSON. See ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/AssemblyScript/assemblyscript/issues/292"},"this issue")),(0,a.kt)("li",{parentName:"ul"},"It ",(0,a.kt)("em",{parentName:"li"},"seems")," there's no JSON path library for AssemblyScript")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/pod-privileged-policy"},"This GitHub repository"),"\ncontains a Kubewarden Policy written in AssemblyScript."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Worth noting:")," this repository has a series of GitHub Actions that automate\nthe following tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run unit tests and code linting on pull requests and after code is merged\ninto the main branch"),(0,a.kt)("li",{parentName:"ul"},"Build the policy in ",(0,a.kt)("inlineCode",{parentName:"li"},"release")," mode and push it to an OCI registry as an\nartifact")))}d.isMDXComponent=!0}}]);