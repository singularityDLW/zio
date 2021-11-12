"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2758],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8470:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"promise",title:"Promise"},p=void 0,s={unversionedId:"datatypes/concurrency/promise",id:"version-1.x/datatypes/concurrency/promise",isDocsHomePage:!1,title:"Promise",description:"A Promise[E, A] is a variable of IO[E, A] type that can be set exactly once.",source:"@site/versioned_docs/version-1.x/datatypes/concurrency/promise.md",sourceDirName:"datatypes/concurrency",slug:"/datatypes/concurrency/promise",permalink:"/version-1.x/datatypes/concurrency/promise",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/concurrency/promise.md",tags:[],version:"1.x",frontMatter:{id:"promise",title:"Promise"},sidebar:"datatypes-sidebar",previous:{title:"RefM",permalink:"/version-1.x/datatypes/concurrency/refm"},next:{title:"Queue",permalink:"/version-1.x/datatypes/concurrency/queue"}},c=[{value:"Operations",id:"operations",children:[{value:"Creation",id:"creation",children:[],level:3},{value:"Completing",id:"completing",children:[],level:3},{value:"Awaiting",id:"awaiting",children:[],level:3},{value:"Polling",id:"polling",children:[],level:3}],level:2},{value:"Example Usage",id:"example-usage",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise[E, A]")," is a variable of ",(0,r.kt)("inlineCode",{parentName:"p"},"IO[E, A]")," type that can be set exactly once."),(0,r.kt)("p",null,"Promise is a ",(0,r.kt)("strong",{parentName:"p"},"purely functional synchronization primitive")," which represents a single value that may not yet be available. When we create a Promise, it always started with an empty value, then it can be completed exactly once at some point, and then it will never become empty or modified again."),(0,r.kt)("p",null,"Promise is a synchronization primitive. So, it is useful whenever we want to wait for something to happen. Whenever we need to synchronize a fiber with another fiber, we can use Promise. It allows us to have fibers waiting for other fibers to do things. Any time we want to handoff of a work from one fiber to another fiber or anytime we want to suspend a fiber until some other fiber does a certain amount of work, well we need to be using a Promise. Also, We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," to build other concurrent primitives, like Queue and Semaphore. "),(0,r.kt)("p",null,"By calling ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," on the Promise, the current fiber blocks, until that event happens. As we know, blocking thread in ZIO, don't actually block kernel threads. They are semantic blocking, so when a fiber is blocked the underlying thread is free to run all other fibers."),(0,r.kt)("p",null,"Promise is the equivalent of Scala's Promise. It's almost the same, except it has two type parameters, instead of one. Also instead of calling ",(0,r.kt)("inlineCode",{parentName:"p"},"future"),", we need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," on ZIO Promise to wait for the Promise to be completed."),(0,r.kt)("p",null,"Promises can be failed with a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," and succeeded that is completed with success with the value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),". So there are two ways we can complete a Promise, with failure or success and then whoever is waiting on the Promise will get back that failure or success. "),(0,r.kt)("h2",{id:"operations"},"Operations"),(0,r.kt)("h3",{id:"creation"},"Creation"),(0,r.kt)("p",null,"Promises can be created using ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise.make[E, A]"),", which returns ",(0,r.kt)("inlineCode",{parentName:"p"},"UIO[Promise[E, A]]"),". This is a description of creating a promise, but not the actual promise. Promises cannot be created outside of IO, because creating them involves allocating mutable memory, which is an effect and must be safely captured in IO."),(0,r.kt)("h3",{id:"completing"},"Completing"),(0,r.kt)("p",null,"You can complete a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise[E, A]")," in few different ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"successfully with a value of type ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"succeed")),(0,r.kt)("li",{parentName:"ul"},"with ",(0,r.kt)("inlineCode",{parentName:"li"},"Exit[E, A]")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"done")," - each ",(0,r.kt)("inlineCode",{parentName:"li"},"await")," will get this exit propagated")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"with result of effect ",(0,r.kt)("inlineCode",{parentName:"li"},"IO[E, A]")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"complete")," - the effect will be executed once and the result will be propagated to all waiting fibers")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"with effect ",(0,r.kt)("inlineCode",{parentName:"li"},"IO[E, A]")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"completeWith")," - first fiber that calls ",(0,r.kt)("inlineCode",{parentName:"li"},"completeWith")," wins and sets effect that ",(0,r.kt)("strong",{parentName:"li"},"will be executed by each ",(0,r.kt)("inlineCode",{parentName:"strong"},"await"),"ing fiber"),", so be careful when using ",(0,r.kt)("inlineCode",{parentName:"li"},"p.completeWith(someEffect)")," and rather use ",(0,r.kt)("inlineCode",{parentName:"li"},"p.complete(someEffect")," unless executing ",(0,r.kt)("inlineCode",{parentName:"li"},"someEffect")," by each ",(0,r.kt)("inlineCode",{parentName:"li"},"await"),"ing fiber is intent"),(0,r.kt)("li",{parentName:"ul"},"simply fail with ",(0,r.kt)("inlineCode",{parentName:"li"},"E")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"fail")),(0,r.kt)("li",{parentName:"ul"},"simply defect with ",(0,r.kt)("inlineCode",{parentName:"li"},"Throwable")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"die")),(0,r.kt)("li",{parentName:"ul"},"fail or defect with ",(0,r.kt)("inlineCode",{parentName:"li"},"Cause[E]")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"halt")),(0,r.kt)("li",{parentName:"ul"},"interrupt it with ",(0,r.kt)("inlineCode",{parentName:"li"},"interrupt"))),(0,r.kt)("p",null,"Following example shows usage of all of them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval race: IO[String, Int] = for {\n    p     <- Promise.make[String, Int]\n    _     <- p.succeed(1).fork\n    _     <- p.complete(ZIO.succeed(2)).fork\n    _     <- p.completeWith(ZIO.succeed(3)).fork\n    _     <- p.done(Exit.succeed(4)).fork\n    _     <- p.fail("5")\n    _     <- p.halt(Cause.die(new Error("6")))\n    _     <- p.die(new Error("7"))\n    _     <- p.interrupt.fork\n    value <- p.await\n  } yield value\n')),(0,r.kt)("p",null,"The act of completing a Promise results in an ",(0,r.kt)("inlineCode",{parentName:"p"},"UIO[Boolean]"),", where the ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," represents whether the promise value has been set (",(0,r.kt)("inlineCode",{parentName:"p"},"true"),") or whether it was already set (",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"). This is demonstrated below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val ioPromise1: UIO[Promise[Exception, String]] = Promise.make[Exception, String]\nval ioBooleanSucceeded: UIO[Boolean] = ioPromise1.flatMap(promise => promise.succeed("I\'m done"))\n')),(0,r.kt)("p",null,"Another example with ",(0,r.kt)("inlineCode",{parentName:"p"},"fail(...)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val ioPromise2: UIO[Promise[Exception, Nothing]] = Promise.make[Exception, Nothing]\nval ioBooleanFailed: UIO[Boolean] = ioPromise2.flatMap(promise => promise.fail(new Exception("boom")))\n')),(0,r.kt)("p",null,"To re-iterate, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," tells us whether or not the operation took place successfully (",(0,r.kt)("inlineCode",{parentName:"p"},"true"),") i.e. the Promise\nwas set with the value or the error."),(0,r.kt)("h3",{id:"awaiting"},"Awaiting"),(0,r.kt)("p",null,"We can get a value from a Promise using ",(0,r.kt)("inlineCode",{parentName:"p"},"await"),", calling fiber will suspend until Promise is completed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val ioPromise3: UIO[Promise[Exception, String]] = Promise.make[Exception, String]\nval ioGet: IO[Exception, String] = ioPromise3.flatMap(promise => promise.await)\n")),(0,r.kt)("h3",{id:"polling"},"Polling"),(0,r.kt)("p",null,"The computation will suspend (in a non-blocking fashion) until the Promise is completed with a value or an error."),(0,r.kt)("p",null,"If we don't want to suspend, and we only want to query the state of whether or not the Promise has been completed, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"poll"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val ioPromise4: UIO[Promise[Exception, String]] = Promise.make[Exception, String]\nval ioIsItDone: UIO[Option[IO[Exception, String]]] = ioPromise4.flatMap(p => p.poll)\nval ioIsItDone2: IO[Option[Nothing], IO[Exception, String]] = ioPromise4.flatMap(p => p.poll.get)\n")),(0,r.kt)("p",null,"If the Promise was not completed when we called ",(0,r.kt)("inlineCode",{parentName:"p"},"poll")," then the IO will fail with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Unit")," value otherwise, we obtain an ",(0,r.kt)("inlineCode",{parentName:"p"},"IO[E, A]"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," represents if the Promise completed with an error and ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," indicates that the Promise successfully completed with an ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," value."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isDone")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"UIO[Boolean]")," that evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if promise is already completed."),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("p",null,"Here is a scenario where we use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," to hand-off a value between two ",(0,r.kt)("inlineCode",{parentName:"p"},"Fiber"),"s"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import java.io.IOException\nimport zio.console._\nimport zio.duration._\nimport zio.clock._\n\nval program: ZIO[Console with Clock, IOException, Unit] = \n  for {\n    promise         <-  Promise.make[Nothing, String]\n    sendHelloWorld  =   (IO.succeed("hello world") <* sleep(1.second)).flatMap(promise.succeed)\n    getAndPrint     =   promise.await.flatMap(putStrLn(_))\n    fiberA          <-  sendHelloWorld.fork\n    fiberB          <-  getAndPrint.fork\n    _               <-  (fiberA zip fiberB).join\n  } yield ()\n')),(0,r.kt)("p",null,"In the example above, we create a Promise and have a Fiber (",(0,r.kt)("inlineCode",{parentName:"p"},"fiberA"),") complete that promise after 1 second and a second Fiber (",(0,r.kt)("inlineCode",{parentName:"p"},"fiberB"),") will call ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," on that Promise to obtain a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and then print it to screen. The example prints ",(0,r.kt)("inlineCode",{parentName:"p"},"hello world")," to the screen after 1 second. Remember, this is just a description of the program and not the execution\nitself."))}u.isMDXComponent=!0}}]);