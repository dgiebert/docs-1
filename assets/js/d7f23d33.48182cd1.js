"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4459],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5583:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),l=["components"],a={sidebar_label:"Context Aware Policies",title:""},s="Context aware policies",c={unversionedId:"writing-policies/spec/context-aware-policies",id:"writing-policies/spec/context-aware-policies",title:"",description:"NOTE: This feature is a work in progress, and not to be depended",source:"@site/docs/writing-policies/spec/05-context-aware-policies.md",sourceDirName:"writing-policies/spec",slug:"/writing-policies/spec/context-aware-policies",permalink:"/writing-policies/spec/context-aware-policies",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/spec/05-context-aware-policies.md",tags:[],version:"current",lastUpdatedAt:1651837203,formattedLastUpdatedAt:"5/6/2022",sidebarPosition:5,frontMatter:{sidebar_label:"Context Aware Policies",title:""},sidebar:"docs",previous:{title:"Mutating Policies",permalink:"/writing-policies/spec/mutating-policies"},next:{title:"Signature Verifier Policies",permalink:"/writing-policies/spec/signature-verifier-policies"}},u={},p=[{value:"Accessing the cluster context",id:"accessing-the-cluster-context",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"context-aware-policies"},"Context aware policies"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," This feature is a work in progress, and not to be depended\nupon. Features described here are incomplete and subject to change\nat any time until the feature stabilizes."),(0,o.kt)("p",{parentName:"blockquote"},"Feedback is highly appreciated.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server")," has capabilities to expose cluster information to\npolicies, so that they can take decisions based on other existing\nresources, and not only based on the resource they are evaluated in\nisolation."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server")," being a deployment, is deployed on the Kubernetes\ncluster with a specific service account, that is able to list and\nwatch a subset of Kubernetes resources, meaning:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Namespaces"),(0,o.kt)("li",{parentName:"ul"},"Services"),(0,o.kt)("li",{parentName:"ul"},"Ingresses")),(0,o.kt)("p",null,"This information is exposed to policies (waPC guests) through a\nwell known procedure call set of endpoints, that allows to retrieve\nthis cached information."),(0,o.kt)("p",null,"The result of these procedure calls is the JSON-encoded result of the\nlist of resources, as provided by Kubernetes."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server")," will be the component responsible for refreshing\nthis information when it considers, and the policy always retrieves\nthe latest available information exposed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server"),"."),(0,o.kt)("h2",{id:"accessing-the-cluster-context"},"Accessing the cluster context"),(0,o.kt)("p",null,"Language SDK's that support cluster context at this time will expose\nfunctions that allow policies to retrieve the current state of the\ncluster."),(0,o.kt)("p",null,"The workflow we have seen until now has been that the policy exposes\nwell known waPC functions, namely: ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"validate_settings"),". At some point, the host will call these functions\nwhen it requires either to validate a request, or to validate the\nsettings that were provided to it for the given policy."),(0,o.kt)("p",null,"In this case, after the host calls to the ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," waPC function in\nthe guest, the guest is able to retrieve cluster information in order\nto produce a response to the ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," waPC function that was called\nby the host on the guest."),(0,o.kt)("p",null,"This guest-host intercommunication is performed using the regular waPC\nhost calling mechanism, and so any guest implementing the waPC\nintercommunication mechanism is able to request this information from\nthe host."),(0,o.kt)("p",null,"waPC has the following function arguments when performing a call from\nthe guest to the host:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Binding"),(0,o.kt)("li",{parentName:"ul"},"Namespace"),(0,o.kt)("li",{parentName:"ul"},"Operation"),(0,o.kt)("li",{parentName:"ul"},"Payload")),(0,o.kt)("p",null,"By contract, or convention, policies can retrieve the Kubernetes\ncluster information by calling the host in the following ways:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Binding"),(0,o.kt)("th",null,"Namespace"),(0,o.kt)("th",null,"Operation"),(0,o.kt)("th",null,"Input payload"),(0,o.kt)("th",null,"Output payload (JSON format)"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"kubernetes")),(0,o.kt)("td",null,(0,o.kt)("code",null,"ingresses")),(0,o.kt)("td",null,(0,o.kt)("code",null,"list")),(0,o.kt)("td",null,"N/A"),(0,o.kt)("td",null,"Result of ",(0,o.kt)("code",null,"GET /apis/networking.k8s.io/v1/ingresses"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"kubernetes")),(0,o.kt)("td",null,(0,o.kt)("code",null,"namespaces")),(0,o.kt)("td",null,(0,o.kt)("code",null,"list")),(0,o.kt)("td",null,"N/A"),(0,o.kt)("td",null,"Result of ",(0,o.kt)("code",null,"GET /apis/v1/namespaces"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"kubernetes")),(0,o.kt)("td",null,(0,o.kt)("code",null,"services")),(0,o.kt)("td",null,(0,o.kt)("code",null,"list")),(0,o.kt)("td",null,"N/A"),(0,o.kt)("td",null,"Result of ",(0,o.kt)("code",null,"GET /apis/v1/services"))))),(0,o.kt)("p",null,"The request the waPC guest performs to the host is local, and served\nfrom a cache -- this request does not get forwarded to the Kubernetes\nAPI server. The policy-server (host) decides when to refresh this\ninformation from the Kubernetes API server."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," This is a proof-of-concept at this time, there are plans\nto generalize what resources can be fetched from the cluster, to\ninclude all built-in Kubernetes types, as well as custom resources.")))}h.isMDXComponent=!0}}]);