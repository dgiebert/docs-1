"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8791],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),s=a,k=m["".concat(c,".").concat(s)]||m[s]||d[s]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2625:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),l=["components"],i={sidebar_label:"Metrics Reference Documentation",title:""},c="Metrics Reference",u={unversionedId:"operator-manual/telemetry/metrics/reference",id:"operator-manual/telemetry/metrics/reference",title:"",description:"Kubewarden exposes some relevant metrics that enhance visibility of the platform, and allows cluster",source:"@site/docs/operator-manual/telemetry/metrics/02-reference.md",sourceDirName:"operator-manual/telemetry/metrics",slug:"/operator-manual/telemetry/metrics/reference",permalink:"/operator-manual/telemetry/metrics/reference",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/operator-manual/telemetry/metrics/02-reference.md",tags:[],version:"current",lastUpdatedAt:1651837203,formattedLastUpdatedAt:"5/6/2022",sidebarPosition:2,frontMatter:{sidebar_label:"Metrics Reference Documentation",title:""},sidebar:"docs",previous:{title:"Tracing Quickstart",permalink:"/operator-manual/telemetry/tracing/quickstart"},next:{title:"Introduction to Monitor Mode",permalink:"/operator-manual/monitor-mode/intro"}},p={},d=[{value:"Policy Server",id:"policy-server",level:2},{value:"Metrics",id:"metrics",level:3},{value:"<code>kubewarden_policy_evaluations_total</code>",id:"kubewarden_policy_evaluations_total",level:4},{value:"Baggage",id:"baggage",level:5}],m={toc:d};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metrics-reference"},"Metrics Reference"),(0,o.kt)("p",null,"Kubewarden exposes some relevant metrics that enhance visibility of the platform, and allows cluster\nadministrators and policy developers to identify patterns and potential issues."),(0,o.kt)("h2",{id:"policy-server"},"Policy Server"),(0,o.kt)("p",null,"The Policy Server is the component that initializes and runs policies. Upon receiving requests from\nthe Kubernetes API server, it will forward the request to the policy, and return the response\nprovided by the policy to the Kubernetes API server."),(0,o.kt)("h3",{id:"metrics"},"Metrics"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": Baggage are key-value attributes added to the metric. They are used to enrich the metric\nwith additional information.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"kubewarden_policy_evaluations_total")),(0,o.kt)("td",{parentName:"tr",align:null},"Counter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#kubewarden_policy_evaluations_total"},"Baggage"))))),(0,o.kt)("h4",{id:"kubewarden_policy_evaluations_total"},(0,o.kt)("inlineCode",{parentName:"h4"},"kubewarden_policy_evaluations_total")),(0,o.kt)("h5",{id:"baggage"},"Baggage"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Label"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"policy_name")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the policy")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"resource_name")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the evaluated resource")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"resource_kind")),(0,o.kt)("td",{parentName:"tr",align:null},"Kind of the evaluated resource")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"resource_namespace")),(0,o.kt)("td",{parentName:"tr",align:null},"Namespace of the evaluated resource. Not present if the resource is cluster scoped.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"resource_request_operation")),(0,o.kt)("td",{parentName:"tr",align:null},"Operation type: ",(0,o.kt)("inlineCode",{parentName:"td"},"CREATE"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"UPDATE"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"DELETE"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"PATCH"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"WATCH"),"...")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"accepted")),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the request was accepted or not")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mutated")),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the request was mutated or not")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"error_code")),(0,o.kt)("td",{parentName:"tr",align:null},"Error code returned by the policy in case of rejection, if any. Not present if the policy didn't provide one.")))))}s.isMDXComponent=!0}}]);