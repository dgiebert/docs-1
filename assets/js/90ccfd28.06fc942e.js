"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5180],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},416:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=t(3117),r=t(102),l=(t(7294),t(3905)),o=["components"],i={sidebar_label:"Tracing Quickstart",title:""},s="Tracing",p={unversionedId:"operator-manual/telemetry/tracing/quickstart",id:"operator-manual/telemetry/tracing/quickstart",title:"",description:"This section illustrates how to enable tracing support of",source:"@site/docs/operator-manual/telemetry/tracing/01-quickstart.md",sourceDirName:"operator-manual/telemetry/tracing",slug:"/operator-manual/telemetry/tracing/quickstart",permalink:"/operator-manual/telemetry/tracing/quickstart",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/operator-manual/telemetry/tracing/01-quickstart.md",tags:[],version:"current",lastUpdatedAt:1651837203,formattedLastUpdatedAt:"5/6/2022",sidebarPosition:1,frontMatter:{sidebar_label:"Tracing Quickstart",title:""},sidebar:"docs",previous:{title:"Metrics Quickstart",permalink:"/operator-manual/telemetry/metrics/quickstart"},next:{title:"Metrics Reference Documentation",permalink:"/operator-manual/telemetry/metrics/reference"}},c={},u=[{value:"Install Jaeger",id:"install-jaeger",level:2},{value:"Install Kubewarden",id:"install-kubewarden",level:2},{value:"Enforcing a policy",id:"enforcing-a-policy",level:2},{value:"Exploring the Jaeger UI",id:"exploring-the-jaeger-ui",level:2}],m={toc:u};function d(e){var n=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tracing"},"Tracing"),(0,l.kt)("p",null,"This section illustrates how to enable tracing support of\nPolicy Server."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note well"),": before continuing, make sure you completed the previous\n",(0,l.kt)("a",{parentName:"p",href:"/operator-manual/telemetry/opentelemetry/quickstart#install-opentelemetry"},"OpenTelemetry")," section of this book. It\nis required for this section to work correctly.")),(0,l.kt)("p",null,"Tracing allows to collect fine grained details about policy evaluations. It can\nbe a useful tool for debugging issues inside of your Kubewarden deployment and policies."),(0,l.kt)("p",null,"We will use ",(0,l.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger")," -- used to receive, store and visualize trace\nevents."),(0,l.kt)("h2",{id:"install-jaeger"},"Install Jaeger"),(0,l.kt)("p",null,"We are going to use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jaegertracing/jaeger-operator"},"Jaeger Operator"),"\nto manage all the different Jaeger components."),(0,l.kt)("p",null,"The operator can be installed in many ways, we are going to use\nits helm chart."),(0,l.kt)("p",null,"As a first step, we need to add the helm repository containing the Jaeger Operator\ncharts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add jaegertracing https://jaegertracing.github.io/helm-charts\n")),(0,l.kt)("p",null,"Then we install the operator inside of a dedicated Namespace called ",(0,l.kt)("inlineCode",{parentName:"p"},"jaeger"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm install --namespace jaeger --create-namespace jaeger-operator jaegertracing/jaeger-operator\n")),(0,l.kt)("p",null,"This will produce an output similar to the following one:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'helm install --namespace jaeger --create-namespace jaeger-operator jaegertracing/jaeger-operator\nmanifest_sorter.go:192: info: skipping unknown hook: "crd-install"\nNAME: jaeger-operator\nLAST DEPLOYED: Tue Sep 28 14:54:02 2021\nNAMESPACE: jaeger\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\njaeger-operator is installed.\n\n\nCheck the jaeger-operator logs\n  export POD=$(kubectl get pods -l app.kubernetes.io/instance=jaeger-operator -lapp.kubernetes.io/name=jaeger-operator --namespace jaeger --output name)\n  kubectl logs $POD --namespace=jaeger\n')),(0,l.kt)("p",null,"Given this is a testing environment, we will use default\n",(0,l.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.26/operator/#allinone-default-strategy"},'"AllInOne"'),"\nstrategy. As stated on the upstream documentation: this deployment strategy is\nmeant to be used only for development, testing and demo purposes."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note well:")," the operator can deploy Jaeger in many different ways. We strongly recommend\nto read its ",(0,l.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.26/operator/"},"official documentation"),".")),(0,l.kt)("p",null,"Let's create a Jaeger resource:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply -f - <<EOF\napiVersion: jaegertracing.io/v1\nkind: Jaeger\nmetadata:\n  name: all-in-one\n  namespace: jaeger\nspec:\n  ingress:\n    enabled: true\n    annotations:\n      kubernetes.io/ingress.class: nginx\nEOF\n")),(0,l.kt)("p",null,"Once all the resources have been created by the Jaeger operator, the\nJaeger Query UI will be reachable at the following address:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"echo http://`minikube ip`\n")),(0,l.kt)("h2",{id:"install-kubewarden"},"Install Kubewarden"),(0,l.kt)("p",null,"We can proceed to the deployment of Kubewarden in the usual way."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note well:")," cert-manager is a requirement of Kubewarden, and OpenTelemetry is required for this\nfeature, but we've already installed them in a previous section of this book.")),(0,l.kt)("p",null,"As a first step, we have to add the Helm repository that contains Kubewarden:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add kubewarden https://charts.kubewarden.io\n")),(0,l.kt)("p",null,"Then we have to install the Custom Resource Definitions (CRDs) defined by\nKubewarden:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm install --wait --namespace kubewarden --create-namespace kubewarden-crds kubewarden/kubewarden-crds\n")),(0,l.kt)("p",null,"Now we can deploy the rest of the Kubewarden stack. The official\nhelm chart will create a PolicyServer named ",(0,l.kt)("inlineCode",{parentName:"p"},"default"),". We want this PolicyServer\ninstance to have tracing enabled."),(0,l.kt)("p",null,"In order to do that, we have to specify some extra values at installation time.\nLet's create a ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file with the following contents:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'policyServer:\n  telemetry:\n    enabled: True\n    tracing:\n      jaeger:\n        endpoint: "all-in-one-collector.jaeger.svc.cluster.local:14250"\n')),(0,l.kt)("p",null,"Then we can proceed with the installation of the helm chart:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm install --wait --namespace kubewarden --create-namespace --values values.yaml kubewarden-controller kubewarden/kubewarden-controller\n")),(0,l.kt)("p",null,"This leads to the creation of the ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"PolicyServer"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get policyservers.policies.kubewarden.io\nNAME      AGE\ndefault   3m7s\n")),(0,l.kt)("p",null,"Looking closer at the Pod running the PolicyServer instance, we will find it has\ntwo containers inside of it: the actual ",(0,l.kt)("inlineCode",{parentName:"p"},"policy-server")," and the OpenTelemetry\nCollector sidecar ",(0,l.kt)("inlineCode",{parentName:"p"},"otc-container"),"."),(0,l.kt)("h2",{id:"enforcing-a-policy"},"Enforcing a policy"),(0,l.kt)("p",null,"We will start by deploying the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/safe-labels-policy"},"safe-labels"),"\npolicy."),(0,l.kt)("p",null,"We want the policy to be enforced only inside of Namespaces that have a\nlabel ",(0,l.kt)("inlineCode",{parentName:"p"},"environment")," with value ",(0,l.kt)("inlineCode",{parentName:"p"},"production"),"."),(0,l.kt)("p",null,"Let's create a Namespace that has such a label:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: team-alpha-prod\n  labels:\n    environment: production\nEOF\n")),(0,l.kt)("p",null,"Next, let's define a ClusterAdmissionPolicy:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: safe-labels\nspec:\n  module: registry://ghcr.io/kubewarden/policies/safe-labels:v0.1.6\n  settings:\n    mandatory_labels:\n    - owner\n  rules:\n    - apiGroups:\n        - apps\n      apiVersions:\n        - v1\n      resources:\n        - deployments\n      operations:\n        - CREATE\n        - UPDATE\n  namespaceSelector:\n    matchExpressions:\n    - key: environment\n      operator: In\n      values: ["production"]\n  mutating: false\nEOF\n')),(0,l.kt)("p",null,"We can wait for the policy to be active in this way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"kubectl wait --for=condition=PolicyActive clusteradmissionpolicy/safe-labels\n")),(0,l.kt)("p",null,"Once the policy is active, we can try it out in this way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  namespace: team-alpha-prod\n  labels:\n    owner: flavio\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 0\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\nEOF\n")),(0,l.kt)("p",null,"This Deployment object will be created because it doesn't violate the policy."),(0,l.kt)("p",null,"On the other hand, this Deployment will be blocked by the policy:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-without-labels\n  namespace: team-alpha-prod\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 0\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\nEOF\n")),(0,l.kt)("p",null,"The policy is not enforced inside of another Namespace."),(0,l.kt)("p",null,"The following command creates a new Namespace called ",(0,l.kt)("inlineCode",{parentName:"p"},"team-alpha-staging"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: team-alpha-staging\n  labels:\n    environment: staging\nEOF\n")),(0,l.kt)("p",null,"As expected, the creation of a Deployment resource that doesn't have any label\nis allowed inside of the ",(0,l.kt)("inlineCode",{parentName:"p"},"team-alpha-staging")," Namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-without-labels\n  namespace: team-alpha-staging\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 0\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\nEOF\n")),(0,l.kt)("p",null,"As expected, this resource is successfully created."),(0,l.kt)("h2",{id:"exploring-the-jaeger-ui"},"Exploring the Jaeger UI"),(0,l.kt)("p",null,"We can see the trace events have been sent by the PolicyServer instance to Jaeger:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Jaeger homepage",src:t(1252).Z,title:"The homepage of Jaeger",width:"1908",height:"964"})),(0,l.kt)("p",null,"The Jaeger collector is properly receiving the traces generated by our PolicyServer."))}d.isMDXComponent=!0},1252:function(e,n,t){n.Z=t.p+"assets/images/jaeger-ui-home-2020c53533a53c94e639d648c8c63cb5.png"}}]);