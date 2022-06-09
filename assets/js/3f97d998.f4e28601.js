"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9595],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5404:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={sidebar_label:"Network Capabilities",title:""},s="Network capabilities",p={unversionedId:"writing-policies/spec/host-capabilities/net",id:"writing-policies/spec/host-capabilities/net",title:"",description:"Kubewarden policies cannot make network request from within the WebAssembly",source:"@site/docs/writing-policies/spec/host-capabilities/04-net.md",sourceDirName:"writing-policies/spec/host-capabilities",slug:"/writing-policies/spec/host-capabilities/net",permalink:"/writing-policies/spec/host-capabilities/net",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/spec/host-capabilities/04-net.md",tags:[],version:"current",lastUpdatedAt:1654781422,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:4,frontMatter:{sidebar_label:"Network Capabilities",title:""},sidebar:"docs",previous:{title:"Container Registry Capabilities",permalink:"/writing-policies/spec/host-capabilities/container-registry"},next:{title:"Introduction to Rust",permalink:"/writing-policies/rust/intro-rust"}},c={},u=[{value:"DNS host lookup",id:"dns-host-lookup",level:2},{value:"Caching",id:"caching",level:3},{value:"Communication protocol",id:"communication-protocol",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-capabilities"},"Network capabilities"),(0,o.kt)("p",null,"Kubewarden policies cannot make network request from within the WebAssembly\nexecution context."),(0,o.kt)("p",null,"Network operations can be done by leveraging a series of capabilities exposed\nby the host."),(0,o.kt)("h2",{id:"dns-host-lookup"},"DNS host lookup"),(0,o.kt)("p",null,"This function performs a DNS lookup starting from the FQDN given by the policy."),(0,o.kt)("h3",{id:"caching"},"Caching"),(0,o.kt)("p",null,"Lookup results are cached for 1 minute."),(0,o.kt)("h3",{id:"communication-protocol"},"Communication protocol"),(0,o.kt)("p",null,"This is the description of the waPC protocol used to expose this capability:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"waPC function name")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Input payload")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Output payload")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v1/dns_lookup_host")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"// hostname",(0,o.kt)("br",null),"// JSON encoded string",(0,o.kt)("br",null),"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"{",(0,o.kt)("br",null),"   // list of IPs",(0,o.kt)("br",null),'   "ips": ',"[",(0,o.kt)("br",null),"     string",(0,o.kt)("br",null),"   ]",(0,o.kt)("br",null),"}"))))),(0,o.kt)("p",null,"All the IPs associated with the given FQDN, are going to be returned as strings\ninside of the response. Both IPv4 and IPv6 entries are going to be returned as\npart of the same response."),(0,o.kt)("p",null,"For example, when requesting the manifest digest of the ",(0,o.kt)("inlineCode",{parentName:"p"},"busybox:latest")," image,\nthe payload would be the following ones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Input payload: ",(0,o.kt)("inlineCode",{parentName:"li"},'"google.com"')),(0,o.kt)("li",{parentName:"ul"},"Output payload: ",(0,o.kt)("inlineCode",{parentName:"li"},'{ "ips": ["127.0.0.1"]}'))))}m.isMDXComponent=!0}}]);