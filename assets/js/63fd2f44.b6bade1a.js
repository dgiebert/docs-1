"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[295],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Create a New Policy",title:""},c="Creating a new validation policy",s={unversionedId:"writing-policies/go/scaffold",id:"writing-policies/go/scaffold",title:"",description:"We are going to create a validation policy that validates the labels of generic Kubernetes",source:"@site/docs/writing-policies/go/02-scaffold.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/scaffold",permalink:"/writing-policies/go/scaffold",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/go/02-scaffold.md",tags:[],version:"current",lastUpdatedAt:1651837203,formattedLastUpdatedAt:"5/6/2022",sidebarPosition:2,frontMatter:{sidebar_label:"Create a New Policy",title:""},sidebar:"docs",previous:{title:"Introduction to Go",permalink:"/writing-policies/go/intro-go"},next:{title:"Define Policy Settings",permalink:"/writing-policies/go/policy-settings"}},p={},u=[{value:"Scaffolding new policy project",id:"scaffolding-new-policy-project",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-new-validation-policy"},"Creating a new validation policy"),(0,a.kt)("p",null,"We are going to create a validation policy that validates the labels of generic Kubernetes\nobjects."),(0,a.kt)("p",null,"The policy will reject all the resources that use one or more labels on the deny list.\nThe policy will also validate certain labels using a regular expression\nprovided by the user."),(0,a.kt)("p",null,"To summarize, the policy settings will look like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# List of labels that cannot be used\ndenied_labels:\n- foo\n- bar\n\n# Labels that are validated with user-defined regular expressions\nconstrained_labels:\n  priority: "[123]"\n  cost-center: "^cc-\\d+"\n')),(0,a.kt)("p",null,"The policy would reject the creation of this Pod:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    foo: hello world\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n")),(0,a.kt)("p",null,"The policy would also reject the creation of this Pod:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    cost-center: cc-marketing\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n")),(0,a.kt)("p",null,"Policy's settings can also be used to force certain labels to be specified,\nregardless of their contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Policy's settings\n\nconstrained_labels:\n  mandatory-label: \".*\" # <- this label must be present, we don't care about its value\n")),(0,a.kt)("h2",{id:"scaffolding-new-policy-project"},"Scaffolding new policy project"),(0,a.kt)("p",null,"The creation of a new policy project can be done by using this GitHub\ntemplate repository: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/go-policy-template"},"kubewarden/go-policy-template"),'.\nJust press the "Use  this template" green button near the top of the page\nand follow GitHub\'s wizard.'),(0,a.kt)("p",null,"Clone the repository locally and then ensure the ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," directive inside\nof the ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod")," file looks like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"module <path to your repository>\n")))}f.isMDXComponent=!0}}]);