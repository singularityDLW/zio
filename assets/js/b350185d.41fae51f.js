"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7504],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7120:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"summary",title:"Summary"},l=void 0,m={unversionedId:"datatypes/metrics/summary",id:"datatypes/metrics/summary",isDocsHomePage:!1,title:"Summary",description:"A Summary represents a sliding window of a time series along with metrics for certain percentiles of the time series, referred to as quantiles.",source:"@site/docs/datatypes/metrics/summary.md",sourceDirName:"datatypes/metrics",slug:"/datatypes/metrics/summary",permalink:"/datatypes/metrics/summary",tags:[],version:"current",frontMatter:{id:"summary",title:"Summary"},sidebar:"datatypes-sidebar",previous:{title:"Histogram",permalink:"/datatypes/metrics/histogram"},next:{title:"SetCount",permalink:"/datatypes/metrics/setcount"}},p=[{value:"Internals",id:"internals",children:[]},{value:"API",id:"api",children:[]},{value:"Use Cases",id:"use-cases",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Summary")," represents a sliding window of a time series along with metrics for certain percentiles of the time series, referred to as quantiles."),(0,i.kt)("p",null,"Quantiles describe specified percentiles of the sliding window that are of interest. For example, if we were using a summary to track the response time for requests over the last hour then we might be interested in the 50th percentile, 90th percentile, 95th percentile, and 99th percentile for response times."),(0,i.kt)("h2",{id:"internals"},"Internals"),(0,i.kt)("p",null,"Similar to a ",(0,i.kt)("a",{parentName:"p",href:"/datatypes/metrics/histogram"},"histogram")," a summary also observes ",(0,i.kt)("em",{parentName:"p"},"Double")," values. While a histogram directly modifies the bucket counters and does not keep the individual samples, the summary keeps the observed samples in its internal state. To avoid the set of samples grow uncontrolled, the summary needs to be configured with a maximum age ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," and a maximum size ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),". To calculate the statistics, maximal ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," samples will be used, all of which are not older than ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,i.kt)("p",null,"Essentially, the set of samples is a ",(0,i.kt)("em",{parentName:"p"},"sliding window")," over the last observed samples matching the conditions above."),(0,i.kt)("p",null,"A summary is used to calculate a set of quantiles over the current set of samples. A quantile is defined by a ",(0,i.kt)("em",{parentName:"p"},"Double")," value ",(0,i.kt)("inlineCode",{parentName:"p"},"q")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"0 <= q <= 1")," and resolves to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Double")," as well."),(0,i.kt)("p",null,"The value of a given quantile ",(0,i.kt)("inlineCode",{parentName:"p"},"q")," is the maximum value ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," out of the current sample buffer with size ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," where at most ",(0,i.kt)("inlineCode",{parentName:"p"},"q * n")," values out of the sample buffer are less or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"v"),"."),(0,i.kt)("p",null,"Typical quantiles for observation are ",(0,i.kt)("inlineCode",{parentName:"p"},"0.5")," (the median) and the ",(0,i.kt)("inlineCode",{parentName:"p"},"0.95"),". Quantiles are very good for monitoring ",(0,i.kt)("em",{parentName:"p"},"Service Level Agreements"),"."),(0,i.kt)("p",null,"The ZIO Metrics API also allows summaries to be configured with an error margin ",(0,i.kt)("inlineCode",{parentName:"p"},"e"),". The error margin is applied to the count of values, so that a quantile ",(0,i.kt)("inlineCode",{parentName:"p"},"q")," for a set of size ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," resolves to value ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," if the number ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," of values less or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"(1 -e)q * s <= n <= (1+e)q"),"."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"observeSummary"))," \u2014 A metric aspect that adds a value to a summary each time the effect it is applied to succeeds. This aspect can be applied to effects producing a ",(0,i.kt)("inlineCode",{parentName:"p"},"Double"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def observeSummary(\n  name: String,\n  maxAge: Duration,\n  maxSize: Int,\n  error: Double,\n  quantiles: Chunk[Double],\n  tags: MetricLabel*\n): Summary[Double]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"observeSummaryWith"))," \u2014 A metric aspect that adds a value to a summary each time the effect it is applied to succeeds, using the specified function to transform the value returned by the effect to the value to add to the summary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def observeSummaryWith[A](\n  name: String,\n  maxAge: Duration,\n  maxSize: Int,\n  error: Double,\n  quantiles: Chunk[Double],\n  tags: MetricLabel*\n)(f: A => Double): Summary[A]\n")),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"Like ",(0,i.kt)("a",{parentName:"p",href:"/datatypes/metrics/histogram"},"histograms"),", summaries are used for ",(0,i.kt)("em",{parentName:"p"},"monitoring latencies"),", but they don't require us to define buckets. So, summaries are the best choice in these situations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When histograms are not proper for us, in terms of accuracy"),(0,i.kt)("li",{parentName:"ul"},"When we can't use histograms, as we don't have a good estimation of the range of values"),(0,i.kt)("li",{parentName:"ul"},"When we don't need to perform aggregation or averages across multiple instances, as the calculations are done on the application side")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Create a summary that can hold ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," samples, the max age of the samples is ",(0,i.kt)("inlineCode",{parentName:"p"},"1 day")," and the error margin is ",(0,i.kt)("inlineCode",{parentName:"p"},"3%"),". The summary should report the ",(0,i.kt)("inlineCode",{parentName:"p"},"10%"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"50%")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"90%")," Quantile. It can be applied to effects yielding an ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nval summary =\n  ZIOMetric.observeSummaryWith[Int](\n    name = "mySummary", \n    maxAge = 1.day,\n    maxSize = 100,\n    error = 0.03d, \n    quantiles = Chunk(0.1, 0.5, 0.9)\n  )(_.toDouble)\n')),(0,i.kt)("p",null,"Now we can apply this aspect to an effect producing an ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"Random.nextIntBetween(100, 500) @@ summary\n")))}c.isMDXComponent=!0}}]);