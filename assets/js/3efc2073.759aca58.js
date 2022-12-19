"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[2929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(3117),o=(n(7294),n(3905));const r={sidebar_label:"Cluster Operators",title:""},i="Before deployment",s={unversionedId:"testing-policies/cluster-operators",id:"testing-policies/cluster-operators",title:"",description:"As a Kubernetes cluster operator you probably want to perform some tests",source:"@site/docs/testing-policies/03-cluster-operators.md",sourceDirName:"testing-policies",slug:"/testing-policies/cluster-operators",permalink:"/testing-policies/cluster-operators",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/testing-policies/03-cluster-operators.md",tags:[],version:"current",lastUpdatedAt:1671477327,formattedLastUpdatedAt:"Dec 19, 2022",sidebarPosition:3,frontMatter:{sidebar_label:"Cluster Operators",title:""},sidebar:"docs",previous:{title:"Policy Authors",permalink:"/testing-policies/policy-authors"},next:{title:"Operator Manual",permalink:"/operator-manual/intro"}},l={},p=[{value:"Install",id:"install",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Create <code>AdmissionReview</code> requests",id:"create-admissionreview-requests",level:3},{value:"Test the policy",id:"test-the-policy",level:3},{value:"Automation",id:"automation",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"before-deployment"},"Before deployment"),(0,o.kt)("p",null,"As a Kubernetes cluster operator you probably want to perform some tests\nagainst a Kubewarden policy you just found."),(0,o.kt)("p",null,"You probably want to answer questions like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What are the correct policy settings to get the validation/mutation outcome\nI desire?"),(0,o.kt)("li",{parentName:"ul"},"How can I be sure everything will keep working as expected when I upgrade\nthe policy to a newer version, when I add/change some Kubernetes resources,\nwhen I change the configuration parameters of the policy,...")),(0,o.kt)("p",null,"Kubewarden has a dedicated utility that allows testing of the policies\noutside of Kubernetes, among other operations. This utility is called\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kwctl"},(0,o.kt)("inlineCode",{parentName:"a"},"kwctl")),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kwctl")," usage is quite simple, we just have to invoke it with the\nfollowing data as input:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"WebAssembly binary file reference of the policy to be run. The\nKubewarden policy can be loaded from the local filesystem\n(",(0,o.kt)("inlineCode",{parentName:"li"},"file://"),"), an HTTP(s) server (",(0,o.kt)("inlineCode",{parentName:"li"},"https://"),") or an OCI registry\n(",(0,o.kt)("inlineCode",{parentName:"li"},"registry://"),")."),(0,o.kt)("li",{parentName:"ol"},"The admission request object to be evaluated.  This is provided via\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},"--request-path")," argument. The request can be provided through\n",(0,o.kt)("inlineCode",{parentName:"li"},"stdin")," by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"--request-path")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"-"),"."),(0,o.kt)("li",{parentName:"ol"},"The policy settings to be used at evaluation time, they can be\nprovided as an inline JSON via ",(0,o.kt)("inlineCode",{parentName:"li"},"--settings-json")," flag, or a JSON or\nYAML file loaded from the filesystem via ",(0,o.kt)("inlineCode",{parentName:"li"},"--settings-path"),".")),(0,o.kt)("p",null,"Once the policy evaluation is done, ",(0,o.kt)("inlineCode",{parentName:"p"},"kwctl")," prints the\n",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," object to the standard output."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"You can download pre-built binaries of ",(0,o.kt)("inlineCode",{parentName:"p"},"kwctl")," from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kwctl/releases"},"here"),"."),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"This section describes how to test the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/psp-apparmor"},"psp-apparmor")," policy with\ndifferent configurations and validation request objects as input data."),(0,o.kt)("h3",{id:"create-admissionreview-requests"},"Create ",(0,o.kt)("inlineCode",{parentName:"h3"},"AdmissionReview")," requests"),(0,o.kt)("p",null,"We have to create some files holding the ",(0,o.kt)("inlineCode",{parentName:"p"},"AdmissionReview")," objects\nthat will be evaluated by the policy."),(0,o.kt)("p",null,"Let's create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"pod-req-no-specific-apparmor-profile.json")," with the following\ncontents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "no-apparmor"\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n')),(0,o.kt)("p",null,"This request tries to create a Pod that doesn't specify any AppArmor\nprofile to be used, that's because it doesn't have an ",(0,o.kt)("inlineCode",{parentName:"p"},"annotation"),"\nwith the ",(0,o.kt)("inlineCode",{parentName:"p"},"container.apparmor.security.beta.kubernetes.io/<name of the\ncontainer>")," key."),(0,o.kt)("p",null,"Let's create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"pod-req-apparmor-unconfined.json")," with the\nfollowing contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "privileged-pod",\n      "annotations": {\n        "container.apparmor.security.beta.kubernetes.io/nginx": "unconfined"\n      }\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n')),(0,o.kt)("p",null,"This request tries to create a Pod with a container called ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," that runs\nwith the ",(0,o.kt)("inlineCode",{parentName:"p"},"unconfined")," AppArmor profile. Note well, running in ",(0,o.kt)("inlineCode",{parentName:"p"},"unconfined")," mode\nis a bad security practice."),(0,o.kt)("p",null,"Finally, let's create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"pod-req-apparmor-custom.json")," with the following\ncontents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "kind": {\n    "kind": "Pod",\n    "version": "v1"\n  },\n  "object": {\n    "metadata": {\n      "name": "privileged-pod",\n      "annotations": {\n        "container.apparmor.security.beta.kubernetes.io/nginx": "localhost/nginx-custom"\n      }\n    },\n    "spec": {\n      "containers": [\n        {\n          "image": "nginx",\n          "name": "nginx"\n        }\n      ]\n    }\n  },\n  "operation": "CREATE",\n  "requestKind": {"version": "v1", "kind": "Pod"},\n  "userInfo": {\n    "username": "alice",\n    "uid": "alice-uid",\n    "groups": ["system:authenticated"]\n  }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note well:")," these are stripped down ",(0,o.kt)("inlineCode",{parentName:"p"},"AdmissionReview")," objects, we\nleft only the fields that are relevant to our policy.")),(0,o.kt)("h3",{id:"test-the-policy"},"Test the policy"),(0,o.kt)("p",null,"Now we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"kwctl")," to test the creation of a Pod that doesn't\nspecify an AppArmor profile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kwctl run \\\n    --request-path pod-req-no-specific-apparmor-profile.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 | jq\n")),(0,o.kt)("p",null,"The policy will accept the request and produce the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n')),(0,o.kt)("p",null,"The policy will instead reject the creation of a Pod with an\n",(0,o.kt)("inlineCode",{parentName:"p"},"unconfined")," AppArmor profile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kwctl run \\\n    --request-path pod-req-apparmor-unconfined.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "These AppArmor profiles are not allowed: [\\"unconfined\\"]"\n  }\n}\n')),(0,o.kt)("p",null,"Both times we ran the policy ",(0,o.kt)("strong",{parentName:"p"},"without")," providing any kind of\nsetting. As the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/psp-apparmor#configuration"},"policy's\ndocumentation"),"\nstates, this results in preventing the usage of non-default profiles."),(0,o.kt)("p",null,"As a matter of fact, the Pod using a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," profile gets rejected by\nthe policy too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "These AppArmor profiles are not allowed: [\\"localhost/nginx-custom\\"]"\n  }\n}\n')),(0,o.kt)("p",null,"We can change the default behaviour and allow some chosen AppArmor to be used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    --settings-json \'{"allowed_profiles": ["runtime/default", "localhost/nginx-custom"]}\' \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4 | jq\n')),(0,o.kt)("p",null,"This time the request is accepted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n')),(0,o.kt)("h2",{id:"automation"},"Automation"),(0,o.kt)("p",null,"All these steps shown above can be automated using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bats-core/bats-core"},"bats"),"."),(0,o.kt)("p",null,"We can write a series of tests and integrate their execution inside of\nyour existing CI and CD pipelines."),(0,o.kt)("p",null,"That would ensure changes to the policy version, policy configuration\nparameters, Kubernetes resources,... won't break the outcome of the\nvalidation/mutation operations."),(0,o.kt)("p",null,'The commands used above can be easily "wrapped" into a ',(0,o.kt)("inlineCode",{parentName:"p"},"bats")," test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'@test "all is good" {\n  run kwctl run \\\n    --request-path pod-req-no-specific-apparmor-profile.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # request accepted\n  [ $(expr "$output" : \'.*"allowed":true.*\') -ne 0 ]\n}\n\n@test "reject" {\n  run kwctl run \\\n    --request-path pod-req-apparmor-custom.json \\\n    registry://ghcr.io/kubewarden/policies/psp-apparmor:v0.1.4\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # request rejected\n  [ $(expr "$output" : \'.*"allowed":false.*\') -ne 0 ]\n}\n')),(0,o.kt)("p",null,"Assuming the snippet from above is inside of a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"e2e.bats"),",\nwe can run the test in this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ bats e2e.bats\n \u2713 all is good\n \u2713 reject\n\n2 tests, 0 failures\n")),(0,o.kt)("p",null,"Checkout ",(0,o.kt)("a",{parentName:"p",href:"/writing-policies/go/e2e-tests"},"this section")," of the\ndocumentation to learn more about writing end-to-end tests of your\npolicies."))}c.isMDXComponent=!0}}]);