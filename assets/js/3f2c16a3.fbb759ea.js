"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4221],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},999:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"urio",title:"URIO"},s=void 0,c={unversionedId:"datatypes/core/urio",id:"version-1.x/datatypes/core/urio",isDocsHomePage:!1,title:"URIO",description:"URIO[R, A] is a type alias for ZIO[R, Nothing, A], which represents an effect that requires an R, and cannot fail, but can succeed with an A.",source:"@site/versioned_docs/version-1.x/datatypes/core/urio.md",sourceDirName:"datatypes/core",slug:"/datatypes/core/urio",permalink:"/version-1.x/datatypes/core/urio",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/core/urio.md",tags:[],version:"1.x",frontMatter:{id:"urio",title:"URIO"},sidebar:"datatypes-sidebar",previous:{title:"UIO",permalink:"/version-1.x/datatypes/core/uio"},next:{title:"Task",permalink:"/version-1.x/datatypes/core/task"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"URIO[R, A]")," is a type alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[R, Nothing, A]"),", which represents an effect that requires an ",(0,o.kt)("inlineCode",{parentName:"p"},"R"),", and cannot fail, but can succeed with an ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:"))),(0,o.kt)("p",{parentName:"blockquote"},"In Scala, the ",(0,o.kt)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,o.kt)("p",null,"Let's see how the ",(0,o.kt)("inlineCode",{parentName:"p"},"URIO")," type alias is defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"type URIO[-R, +A] = ZIO[R, Nothing, A]\n")),(0,o.kt)("p",null,"So the ",(0,o.kt)("inlineCode",{parentName:"p"},"URIO")," just equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," which requires ",(0,o.kt)("inlineCode",{parentName:"p"},"R")," and cannot fail because in the Scala the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing")," type has no inhabitant, we can't create an instance of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing"),". It succeeds with ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("p",null,"In following example, the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"putStrLn")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"URIO[Console, Unit]")," which means, it requires ",(0,o.kt)("inlineCode",{parentName:"p"},"Console")," service as an environment, and it succeeds with ",(0,o.kt)("inlineCode",{parentName:"p"},"Unit")," value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def putStrLn(line: => String): ZIO[Console, IOException, Unit] =\n  ZIO.accessM(_.get putStrLn line)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("em",{parentName:"p"},"Principle of The Least Power")),(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On other hand, the type aliases are a way of subtyping and specializing the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," type, specific for a less powerful workflow. "),(0,o.kt)("p",{parentName:"blockquote"},"Lot of the time, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the proper specialized type alias."),(0,o.kt)("p",{parentName:"blockquote"},"So there is no need to convert type aliases to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, whenever the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}d.isMDXComponent=!0}}]);