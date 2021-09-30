"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3495],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2348:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"clock",title:"Clock"},l=void 0,s={unversionedId:"datatypes/contextual/services/clock",id:"datatypes/contextual/services/clock",isDocsHomePage:!1,title:"Clock",description:"Clock service contains some functionality related to time and scheduling.",source:"@site/docs/datatypes/contextual/services/clock.md",sourceDirName:"datatypes/contextual/services",slug:"/datatypes/contextual/services/clock",permalink:"/datatypes/contextual/services/clock",tags:[],version:"current",frontMatter:{id:"clock",title:"Clock"},sidebar:"datatypes-sidebar",previous:{title:"Console",permalink:"/datatypes/contextual/services/console"},next:{title:"Random",permalink:"/datatypes/contextual/services/random"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Clock service contains some functionality related to time and scheduling. "),(0,o.kt)("p",null,"To get the current time in a specific time unit, the ",(0,o.kt)("inlineCode",{parentName:"p"},"currentTime")," function takes a unit as ",(0,o.kt)("inlineCode",{parentName:"p"},"TimeUnit")," and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"UIO[Long]"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val inMiliseconds: URIO[Has[Clock], Long] = Clock.currentTime(TimeUnit.MILLISECONDS)\nval inDays: URIO[Has[Clock], Long] = Clock.currentTime(TimeUnit.DAYS)\n")),(0,o.kt)("p",null,"To get current data time in the current timezone the ",(0,o.kt)("inlineCode",{parentName:"p"},"currentDateTime")," function returns a ZIO effect containing ",(0,o.kt)("inlineCode",{parentName:"p"},"OffsetDateTime"),"."),(0,o.kt)("p",null,"Also, the Clock service has a very useful functionality for sleeping and creating a delay between jobs. The ",(0,o.kt)("inlineCode",{parentName:"p"},"sleep")," takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"Duration")," and sleep for the specified duration. It is analogous to ",(0,o.kt)("inlineCode",{parentName:"p"},"java.lang.Thread.sleep")," function, but it doesn't block any underlying thread. It's completely non-blocking."),(0,o.kt)("p",null,"In following example we are going to print the current time periodically by placing a one second",(0,o.kt)("inlineCode",{parentName:"p"},"sleep")," between each print call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def printTimeForever: ZIO[Has[Console] with Has[Clock], Throwable, Nothing] =\n  Clock.currentDateTime.flatMap(Console.printLine(_)) *>\n    ZIO.sleep(1.seconds) *> printTimeForever\n")),(0,o.kt)("p",null,"For scheduling purposes like retry and repeats, ZIO has a great data type called ",(0,o.kt)("a",{parentName:"p",href:"/datatypes/misc/schedule"},"Schedule"),"."))}d.isMDXComponent=!0}}]);