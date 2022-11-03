"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3834],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6970:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var o=n(3117),i=n(102),r=(n(7294),n(3905)),a=["components"],l={sidebar_label:"Introduction to Monitor Mode",title:""},p="Monitor mode",s={unversionedId:"operator-manual/monitor-mode/intro",id:"operator-manual/monitor-mode/intro",title:"",description:"When a policy is deployed on the cluster, it will start accepting,",source:"@site/docs/operator-manual/monitor-mode/01-intro.md",sourceDirName:"operator-manual/monitor-mode",slug:"/operator-manual/monitor-mode/intro",permalink:"/operator-manual/monitor-mode/intro",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/operator-manual/monitor-mode/01-intro.md",tags:[],version:"current",lastUpdatedAt:1667486623,formattedLastUpdatedAt:"Nov 3, 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction to Monitor Mode",title:""},sidebar:"docs",previous:{title:"Verification Config",permalink:"/operator-manual/verification-config"},next:{title:"Security",permalink:"/security/intro"}},d={},c=[{value:"Transitioning policy mode",id:"transitioning-policy-mode",level:2},{value:"A note on mutating policies",id:"a-note-on-mutating-policies",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"monitor-mode"},"Monitor mode"),(0,r.kt)("p",null,"When a policy is deployed on the cluster, it will start accepting,\nrejecting or mutating requests. It's a binary operation, either the\npolicy is taking decisions on operations it targets, or it's not\ninstalled at all."),(0,r.kt)("p",null,"In order to let users deploy a policy to a cluster, without\nletting it take final decisions, the ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor")," mode has been included."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor")," mode is a way to deploy policies to the cluster in a way\nthat:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"All requests that go through the policy will be accepted, as if the\npolicy didn't exist."),(0,r.kt)("li",{parentName:"ol"},"The policy result is traced in the ",(0,r.kt)("inlineCode",{parentName:"li"},"policy-server"),"\nnormally. Details are included on whether the request would have\nbeen rejected, or if a mutation would have been proposed by the\npolicy."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"policy-server")," metrics are updated normally, with the mode\nincluded in the metric baggage. Therefore, it's easy to filter policies by\nmode, and focus on the ones deployed via ",(0,r.kt)("inlineCode",{parentName:"li"},"monitor")," mode.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," is an attribute included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AdmissionPolicy"),"\nresources. There are two values that the ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," attribute can assume: ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"protect"),". If the\n",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," is omitted, it will default to ",(0,r.kt)("inlineCode",{parentName:"p"},"protect"),"."),(0,r.kt)("p",null,"In order to create a policy in monitor mode, all you need to do is to\ninclude the mode as part of the spec of the resource. For example, in a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-capabilities\nspec:\n  mode: monitor\n  policyServer: reserved-instance-for-tenant-a\n  module: registry://ghcr.io/kubewarden/policies/psp-capabilities:v0.1.3\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    allowed_capabilities:\n    - CHOWN\n    required_drop_capabilities:\n    - NET_ADMIN\n')),(0,r.kt)("h2",{id:"transitioning-policy-mode"},"Transitioning policy mode"),(0,r.kt)("p",null,"It's worth noting that certain attributes can be updated on policies\nonce they have been deployed."),(0,r.kt)("p",null,"For security purposes, a user with UPDATE permissions on policy\nresources can make the policy more restrictive, so that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transitioning the ",(0,r.kt)("inlineCode",{parentName:"li"},"mode")," of an existing ",(0,r.kt)("inlineCode",{parentName:"li"},"ClusterAdmissionPolicy")," or\n",(0,r.kt)("inlineCode",{parentName:"li"},"AdmissionPolicy")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"monitor")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"protect")," is allowed.")),(0,r.kt)("p",null,"However,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transitioning the ",(0,r.kt)("inlineCode",{parentName:"li"},"mode")," of an existing ",(0,r.kt)("inlineCode",{parentName:"li"},"ClusterAdmissionPolicy")," or\n",(0,r.kt)("inlineCode",{parentName:"li"},"AdmissionPolicy")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"protect")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"monitor")," is ",(0,r.kt)("strong",{parentName:"li"},"disallowed"),".\nThis is because the policy would be effectively disabled during\nthe time that it would have been in ",(0,r.kt)("inlineCode",{parentName:"li"},"monitor")," mode, until it was\nrestored back to ",(0,r.kt)("inlineCode",{parentName:"li"},"protect")," mode.")),(0,r.kt)("p",null,"Hence, in order to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," of a policy from\n",(0,r.kt)("inlineCode",{parentName:"p"},"protect")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor"),", it is required to delete the\npolicy and recreate it in ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor")," mode. This\nensures that the user has permissions to remove policies."),(0,r.kt)("h2",{id:"a-note-on-mutating-policies"},"A note on mutating policies"),(0,r.kt)("p",null,"Mutating policies in ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor")," mode are ",(0,r.kt)("strong",{parentName:"p"},"not")," going to produce a\nmutation on the resource, since on ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor")," mode they are exclusively\ngoing to log what their answer would have been, including the patch\nthat they would have produced had they been in ",(0,r.kt)("inlineCode",{parentName:"p"},"protect")," mode."),(0,r.kt)("p",null,"It's important to take this into account, given that when a mutating\npolicy is in ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor")," mode, subsequent policies will evaluate a\n",(0,r.kt)("em",{parentName:"p"},"slightly")," different resource than they would have once the mutating policy\nis in ",(0,r.kt)("inlineCode",{parentName:"p"},"protect")," mode. This is because the mutation that it produces has not\nhappened due to the policy being in ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor")," mode."))}m.isMDXComponent=!0}}]);