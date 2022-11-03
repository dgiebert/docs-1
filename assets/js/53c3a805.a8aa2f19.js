"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3310],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(b,o(o({ref:t},p),{},{components:n})):i.createElement(b,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],s={sidebar_label:"Container Registry Capabilities",title:""},l="Container registry capabilities",c={unversionedId:"writing-policies/spec/host-capabilities/container-registry",id:"writing-policies/spec/host-capabilities/container-registry",title:"",description:"Container registries can be used to distribute many types of OCI objects, going",source:"@site/docs/writing-policies/spec/host-capabilities/03-container-registry.md",sourceDirName:"writing-policies/spec/host-capabilities",slug:"/writing-policies/spec/host-capabilities/container-registry",permalink:"/writing-policies/spec/host-capabilities/container-registry",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/spec/host-capabilities/03-container-registry.md",tags:[],version:"current",lastUpdatedAt:1667486623,formattedLastUpdatedAt:"Nov 3, 2022",sidebarPosition:3,frontMatter:{sidebar_label:"Container Registry Capabilities",title:""},sidebar:"docs",previous:{title:"Signature Verifier Policies",permalink:"/writing-policies/spec/host-capabilities/signature-verifier-policies"},next:{title:"Network Capabilities",permalink:"/writing-policies/spec/host-capabilities/net"}},p={},u=[{value:"Get OCI manifest digest",id:"get-oci-manifest-digest",level:2},{value:"Caching",id:"caching",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Communication protocol",id:"communication-protocol",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"container-registry-capabilities"},"Container registry capabilities"),(0,a.kt)("p",null,"Container registries can be used to distribute many types of OCI objects, going\nfrom well-known container images to generic OCI Artifacts. OCI Artifacts are used\nto store objects such as Kubewarden Policies, Helm charts, and more."),(0,a.kt)("p",null,"Below documented are the capabilities exposed by the Kubewarden host to interact with\ncontainer registries."),(0,a.kt)("h2",{id:"get-oci-manifest-digest"},"Get OCI manifest digest"),(0,a.kt)("p",null,"This function computes the digest of an OCI manifest. This information can\nbe used to identify an object stored inside of an OCI registry in an immutable\nway, as opposed to ",(0,a.kt)("inlineCode",{parentName:"p"},"tags")," which are mutable."),(0,a.kt)("h3",{id:"caching"},"Caching"),(0,a.kt)("p",null,"Computing the digest involves a series of network requests between the Kubewarden\npolicy host and the remote registry. These operation can be time expensive,\nbecause of that the results are going to be cached for 1 minute."),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Interactions with private registries require the Kubewarden policy host to\nauthenticate against the remote registry."),(0,a.kt)("p",null,"The policy host will use the same set of credentials used to fetch policies\nfrom the remote registry."),(0,a.kt)("h3",{id:"communication-protocol"},"Communication protocol"),(0,a.kt)("p",null,"This is the description of the waPC protocol used to expose this capability:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"waPC function name")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Input payload")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Output payload")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"v1/manifest_digest")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"// OCI URI",(0,a.kt)("br",null),"// JSON encoded string",(0,a.kt)("br",null),"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"{",(0,a.kt)("br",null),"   // digest of the OCI object",(0,a.kt)("br",null),'   "digest": string',(0,a.kt)("br",null),"}"))))),(0,a.kt)("p",null,"For example, when requesting the manifest digest of the ",(0,a.kt)("inlineCode",{parentName:"p"},"busybox:latest")," image,\nthe payload would be the following ones:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Input payload: ",(0,a.kt)("inlineCode",{parentName:"li"},'"busybox:latest"')),(0,a.kt)("li",{parentName:"ul"},"Output payload: ",(0,a.kt)("inlineCode",{parentName:"li"},'{ "digest": "sha256:69e70a79f2d41ab5d637de98c1e0b055206ba40a8145e7bddb55ccc04e13cf8f"}'))))}m.isMDXComponent=!0}}]);