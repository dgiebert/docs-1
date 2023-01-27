"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5595],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?i.createElement(h,o(o({ref:t},p),{},{components:r})):i.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=r(3117),n=(r(7294),r(3905));const a={sidebar_label:"Custom Certificate Authorities",title:""},o="Custom Certificate Authorities",s={unversionedId:"distributing-policies/custom-certificate-authorities",id:"distributing-policies/custom-certificate-authorities",title:"",description:"Both kwctl and policy-server allow you to pull policies from OCI registries and HTTP servers, as well as pushing to OCI registries. In this process, by default, HTTPS is enforced with host TLS verification.",source:"@site/docs/distributing-policies/custom-certificate-authorities.md",sourceDirName:"distributing-policies",slug:"/distributing-policies/custom-certificate-authorities",permalink:"/distributing-policies/custom-certificate-authorities",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/distributing-policies/custom-certificate-authorities.md",tags:[],version:"current",lastUpdatedAt:1674808837,formattedLastUpdatedAt:"Jan 27, 2023",frontMatter:{sidebar_label:"Custom Certificate Authorities",title:""},sidebar:"docs",previous:{title:"Secure Supply Chain",permalink:"/distributing-policies/secure-supply-chain"},next:{title:"Operator Manual",permalink:"/operator-manual/intro"}},l={},c=[{value:"The <code>sources.yaml</code> file",id:"the-sourcesyaml-file",level:2},{value:"Insecure sources",id:"insecure-sources",level:3},{value:"Source authorities",id:"source-authorities",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-certificate-authorities"},"Custom Certificate Authorities"),(0,n.kt)("p",null,"Both ",(0,n.kt)("inlineCode",{parentName:"p"},"kwctl")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"policy-server")," allow you to pull policies from OCI registries and HTTP servers, as well as pushing to OCI registries. In this process, by default, HTTPS is enforced with host TLS verification."),(0,n.kt)("p",null,"The system CA store is used to validate the trusted chain of certificates presented by the OCI registry. In a regular Kubewarden installation, the ",(0,n.kt)("inlineCode",{parentName:"p"},"policy-server")," will use the CA store shipped with its Linux container. In the client side, ",(0,n.kt)("inlineCode",{parentName:"p"},"kwctl")," will use your operating system CA store."),(0,n.kt)("p",null,"If you are using the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kubewarden-controller"},"Kubewarden Controller"),",\nyou can configure the PolicyServer via their ",(0,n.kt)("inlineCode",{parentName:"p"},"spec")," fields, as documented\n",(0,n.kt)("a",{parentName:"p",href:"/operator-manual/policy-servers/custom-cas"},"here"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important"),": the default behavior of ",(0,n.kt)("inlineCode",{parentName:"p"},"kwctl")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"policy-server")," is to enforce HTTPS with trusted certificates matching the system CA store. You can interact with registries using untrusted certificates or even without TLS, by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"insecure_sources")," setting. This approach is ",(0,n.kt)("strong",{parentName:"p"},"highly discouraged")," in environments closer to production.")),(0,n.kt)("h2",{id:"the-sourcesyaml-file"},"The ",(0,n.kt)("inlineCode",{parentName:"h2"},"sources.yaml")," file"),(0,n.kt)("p",null,"The pull and push behavior of ",(0,n.kt)("inlineCode",{parentName:"p"},"kwctl")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"policy-server")," can be tuned via the ",(0,n.kt)("inlineCode",{parentName:"p"},"sources.yaml")," file."),(0,n.kt)("p",null,"This file can be provided both to ",(0,n.kt)("inlineCode",{parentName:"p"},"kwctl")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"policy-server")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"--sources-path")," argument.\n",(0,n.kt)("inlineCode",{parentName:"p"},"kwctl")," will try to load the ",(0,n.kt)("inlineCode",{parentName:"p"},"sources.yaml")," file from the following folders if the ",(0,n.kt)("inlineCode",{parentName:"p"},"--sources-path")," argument is not provided:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Linux ",(0,n.kt)("inlineCode",{parentName:"li"},"$HOME/.config/kubewarden/sources.yaml")," "),(0,n.kt)("li",{parentName:"ul"},"Mac ",(0,n.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Application Support/io.kubewarden.kubewarden/sources.yaml")),(0,n.kt)("li",{parentName:"ul"},"Windows ",(0,n.kt)("inlineCode",{parentName:"li"},"$HOME\\AppData\\Roaming\\kubewarden\\config\\sources.yaml"))),(0,n.kt)("p",null,"Its structure is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'insecure_sources:\n  - "registry-dev.example.com"\n  - "registry-dev2.example.com:5500"\nsource_authorities:\n  "registry-pre.example.com":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-1.pem\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-2.der\n  "registry-pre2.example.com:5500":\n    - type: Data\n      data: |\n            -----BEGIN CERTIFICATE-----\n            ca-pre2 PEM cert\n            -----END CERTIFICATE-----\n')),(0,n.kt)("p",null,"This file can be provided in YAML or JSON format. All keys are optional, so the following are also valid ",(0,n.kt)("inlineCode",{parentName:"p"},"sources.yaml")," files:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'insecure_sources: ["dev.registry.example.com"]\n')),(0,n.kt)("p",null,"As well as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "source_authorities": {\n        "host.k3d.internal:5000": [\n            {"type": "Data","data":"pem cert 1"},\n            {"type": "Data","data":"pem cert 2"}\n        ]\n    }\n}\n')),(0,n.kt)("h3",{id:"insecure-sources"},"Insecure sources"),(0,n.kt)("p",null,"Hosts listed in the ",(0,n.kt)("inlineCode",{parentName:"p"},"insecure_sources")," configuration behave in a different way than hosts that are not listed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Unlisted hosts (default)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Try to connect using HTPS, verifying the server identity. If the connection fails, operation is aborted."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Listed hosts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Try to connect using HTTPS verifying the server identity. If the connection fails,"),(0,n.kt)("li",{parentName:"ul"},"Try to connect using HTTPS, skipping host verification. If the connection fails,"),(0,n.kt)("li",{parentName:"ul"},"Try to connect using HTTP. If the connection fails, operation is aborted.")))),(0,n.kt)("p",null,"It is generally fine to use ",(0,n.kt)("inlineCode",{parentName:"p"},"insecure_sources")," when using local registries or\nHTTP servers when developing locally, to avoid the certificate burden. However,\nthis setting is ",(0,n.kt)("strong",{parentName:"p"},"completely discouraged")," for environments closer to\nproduction."),(0,n.kt)("h3",{id:"source-authorities"},"Source authorities"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"source_authorities")," is a map that contains URIs and a list of CA\ncertificates that form a certificate chain for that URI, used to verify the\nidentity of OCI registries and HTTPs servers."),(0,n.kt)("p",null,"These certificates can be encoded in PEM or DER format. Certificates in binary\nDER format can be provided as a path to a file containing the certificate,\nmeanwhile certificates in PEM format can either by a path to the certificate\nfile, or a string with the certificate contents. Both possibilities are\nspecified via a ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," key:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'source_authorities:\n  "registry-pre.example.com":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-1.pem\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-2.der\n    - type: Data\n      data: |\n            -----BEGIN CERTIFICATE-----\n            ca-pre1-3 PEM cert\n            -----END CERTIFICATE-----\n  "registry-pre2.example.com:5500":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre2-1.der\n')))}u.isMDXComponent=!0}}]);