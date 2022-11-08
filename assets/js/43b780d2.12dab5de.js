"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8719],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>m});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=t.createContext({}),g=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=g(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=g(o),m=a,u=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return o?t.createElement(u,i(i({ref:n},p),{},{components:o})):t.createElement(u,i({ref:n},p))}));function m(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var g=2;g<r;g++)i[g]=o[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},62357:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var t=o(87462),a=(o(67294),o(3905));const r={id:"index",title:"Introduction to ZIO Logging",sidebar_label:"Introduction"},i=void 0,l={unversionedId:"index",id:"index",title:"Introduction to ZIO Logging",description:"ZIO Logging is the official logging library for ZIO 2 applications, with integrations for common logging backends.",source:"@site/node_modules/@zio.dev/zio-logging/index.md",sourceDirName:".",slug:"/",permalink:"/zio-logging/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Logging",sidebar_label:"Introduction"},sidebar:"sidebar",next:{title:"Java Platform/System Logger",permalink:"/zio-logging/jpl"}},s={},g=[{value:"Installation",id:"installation",level:2},{value:"Log Format",id:"log-format",level:3},{value:"Logger Context and Annotations",id:"logger-context-and-annotations",level:3},{value:"Logger setup in ZIO application",id:"logger-setup-in-zio-application",level:3},{value:"Examples",id:"examples",level:2},{value:"JSON console logger",id:"json-console-logger",level:3},{value:"Console colored logger with log filtering",id:"console-colored-logger-with-log-filtering",level:3}],p={toc:g};function d(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"ZIO Logging")," is the official logging library for ZIO 2 applications, with integrations for common logging backends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type-safe, purely-functional, ZIO-powered"),(0,a.kt)("li",{parentName:"ul"},"Compositional, type-safe log formatting"),(0,a.kt)("li",{parentName:"ul"},"Richly integrated into ZIO 2's built-in logging facilities"),(0,a.kt)("li",{parentName:"ul"},"ZIO Console, SLF4j, and other backends")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ZIO-Logging")," is available via maven repo.\nIn order to use this library, we need to add the following line in our build.sbt file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-logging" % 2.1.3\n')),(0,a.kt)("h3",{id:"log-format"},"Log Format"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"LogFormat")," represents a DSL to describe the format of text log messages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.logging.console\nimport zio.logging.LogFormat._\n\nval myLogFormat = timestamp.fixed(32) |-| level |-| label("message", quoted(line))\nval myConsoleLogger = console(myLogFormat)\n')),(0,a.kt)("h3",{id:"logger-context-and-annotations"},"Logger Context and Annotations"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"logContext")," fiber reference is used to store typed, structured log\nannotations, which can be utilized by backends to enrich log messages."),(0,a.kt)("p",null,"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"logContext")," is an ordinary ",(0,a.kt)("inlineCode",{parentName:"p"},"zio.FiberRef"),", it may be get, set,\nand updated like any other fiber reference. However, the idiomatic way to\ninteract with ",(0,a.kt)("inlineCode",{parentName:"p"},"logContext")," is by using ",(0,a.kt)("inlineCode",{parentName:"p"},"zio.logging.LogAnnotation"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"myResponseHandler(request) @@ LogAnnotation.UserId(request.userId)\n")),(0,a.kt)("p",null,"This code would add the structured log annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"LogAnnotation.UserId"),"\nto all log messages emitted by the ",(0,a.kt)("inlineCode",{parentName:"p"},"myResponseHandler(request)")," effect."),(0,a.kt)("p",null,"The user of the library is allowed to add a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"LogAnnotation"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.logging.LogAnnotation\n\nval customLogAnnotation = LogAnnotation[Int]("custom_annotation", _ + _, _.toString)\n')),(0,a.kt)("h3",{id:"logger-setup-in-zio-application"},"Logger setup in ZIO application"),(0,a.kt)("p",null,"The recommended place for setting the logger is application boostrap.\nIn this case, custom logger will be set for whole application runtime (also application failures will be logged with specified logger)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.{ LogFormat, console }\nimport zio.{ ExitCode, Runtime, Scope, ZIO, ZIOAppArgs, ZIOAppDefault, ZLayer }\n\nobject SimpleApp extends ZIOAppDefault {\n\n  override val bootstrap: ZLayer[ZIOAppArgs with Scope, Any, Any] =\n    Runtime.removeDefaultLoggers >>> console(LogFormat.default)\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    for {\n      _ <- ZIO.logInfo("Start")\n      _ <- ZIO.fail("FAILURE")\n      _ <- ZIO.logInfo("Done")\n    } yield ExitCode.success\n\n}\n')),(0,a.kt)("p",null,"Expected console output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'timestamp=2022-10-28T18:40:25.517623+02:00 level=INFO thread=zio-fiber-6 message="Start"\ntimestamp=2022-10-28T18:40:25.54676+02:00  level=ERROR thread=zio-fiber-0 message="" cause=Exception in thread "zio-fiber-6" java.lang.String: FAILURE\n    at zio.logging.example.SimpleApp.run(SimpleApp.scala:14)\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"You can find the source code ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-logging/tree/master/examples/src/main/scala/zio/logging/example"},"here")),(0,a.kt)("h3",{id:"json-console-logger"},"JSON console logger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.{ LogAnnotation, LogFormat, consoleJson }\nimport zio.{ ExitCode, Runtime, Scope, ZIO, ZIOAppDefault, _ }\n\nimport java.util.UUID\n\nobject ConsoleJsonApp extends ZIOAppDefault {\n\n  private val userLogAnnotation = LogAnnotation[UUID]("user", (_, i) => i, _.toString)\n\n  override val bootstrap: ZLayer[ZIOAppArgs with Scope, Any, Any] =\n    Runtime.removeDefaultLoggers >>> consoleJson(\n      LogFormat.default + LogFormat.annotation(LogAnnotation.TraceId) + LogFormat.annotation(\n        userLogAnnotation\n      )\n    )\n\n  private val users = List.fill(2)(UUID.randomUUID())\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    (for {\n      traceId <- ZIO.succeed(UUID.randomUUID())\n      _       <- ZIO.foreachPar(users) { uId =>\n        {\n          ZIO.logInfo("Starting operation") *>\n            ZIO.sleep(500.millis) *>\n            ZIO.logInfo("Stopping operation")\n        } @@ userLogAnnotation(uId)\n      } @@ LogAnnotation.TraceId(traceId)\n      _       <- ZIO.logInfo("Done")\n    } yield ExitCode.success)\n\n}\n')),(0,a.kt)("p",null,"Expected console output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"timestamp":"2022-10-28T13:48:20.350244+02:00","level":"INFO","thread":"zio-fiber-8","message":"Starting operation","trace_id":"674a118e-2944-46a7-8db2-ceb79d91d51d","user":"b4cf9c71-5b1d-4fe1-bfb4-35a6e51483b2"}\n{"timestamp":"2022-10-28T13:48:20.350238+02:00","level":"INFO","thread":"zio-fiber-7","message":"Starting operation","trace_id":"674a118e-2944-46a7-8db2-ceb79d91d51d","user":"372071a6-a643-452b-a07c-d0966e556bfa"}\n{"timestamp":"2022-10-28T13:48:20.899453+02:00","level":"INFO","thread":"zio-fiber-7","message":"Stopping operation","trace_id":"674a118e-2944-46a7-8db2-ceb79d91d51d","user":"372071a6-a643-452b-a07c-d0966e556bfa"}\n{"timestamp":"2022-10-28T13:48:20.899453+02:00","level":"INFO","thread":"zio-fiber-8","message":"Stopping operation","trace_id":"674a118e-2944-46a7-8db2-ceb79d91d51d","user":"b4cf9c71-5b1d-4fe1-bfb4-35a6e51483b2"}\n{"timestamp":"2022-10-28T13:48:20.908254+02:00","level":"INFO","thread":"zio-fiber-6","message":"Done"}\n')),(0,a.kt)("h3",{id:"console-colored-logger-with-log-filtering"},"Console colored logger with log filtering"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.{ LogFilter, LogFormat, console }\nimport zio.{ Cause, ExitCode, LogLevel, Runtime, Scope, URIO, ZIO, ZIOAppArgs, ZIOAppDefault, ZLayer }\n\nobject ConsoleColoredApp extends ZIOAppDefault {\n\n  override val bootstrap: ZLayer[ZIOAppArgs with Scope, Any, Any] =\n    Runtime.removeDefaultLoggers >>> console(\n      LogFormat.colored,\n      LogFilter\n        .logLevelByName(\n          LogLevel.Info,\n          "zio.logging.example.LivePingService" -> LogLevel.Debug\n        )\n        .cached\n    )\n\n  private def ping(address: String): URIO[PingService, Unit] =\n    PingService\n      .ping(address)\n      .foldZIO(\n        e => ZIO.logErrorCause(s"ping: $address - error", Cause.fail(e)),\n        r => ZIO.logInfo(s"ping: $address - result: $r")\n      )\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    (for {\n      _ <- ping("127.0.0.1")\n      _ <- ping("x8.8.8.8")\n    } yield ExitCode.success).provide(LivePingService.layer)\n\n}\n')),(0,a.kt)("p",null,"Expected console output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'timestamp=2022-10-28T21:12:07.313782+02:00 level=DEBUG thread=zio-fiber-6 message="ping: /127.0.0.1"\ntimestamp=2022-10-28T21:12:07.326911+02:00 level=INFO thread=zio-fiber-6 message="ping: 127.0.0.1 - result: true"\ntimestamp=2022-10-28T21:12:07.348939+02:00 level=ERROR thread=zio-fiber-6 message="ping: x8.8.8.8 - invalid address error" cause=Exception in thread "zio-fiber-6" java.net.UnknownHostException: java.net.UnknownHostException: x8.8.8.8: nodename nor servname provided, or not known\n    at java.net.Inet6AddressImpl.lookupAllHostAddr(Native Method)\n    at java.net.InetAddress$PlatformNameService.lookupAllHostAddr(InetAddress.java:929)\n    at java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1529)\n    at java.net.InetAddress$NameServiceAddresses.get(InetAddress.java:848)\n    at java.net.InetAddress.getAllByName0(InetAddress.java:1519)\n    at java.net.InetAddress.getAllByName(InetAddress.java:1378)\n    at java.net.InetAddress.getAllByName(InetAddress.java:1306)\n    at java.net.InetAddress.getByName(InetAddress.java:1256)\n    at zio.logging.example.LivePingService.ping(PingService.scala:35)\n    at zio.logging.example.LivePingService.ping(PingService.scala:36)\n    at zio.logging.example.LivePingService.ping(PingService.scala:33)\n    at zio.logging.example.ConsoleColoredApp.ping(ConsoleColoredApp.scala:37)\n    at zio.logging.example.ConsoleColoredApp.run(ConsoleColoredApp.scala:45)\n    at zio.logging.example.ConsoleColoredApp.run(ConsoleColoredApp.scala:46)\ntimestamp=2022-10-28T21:12:07.357647+02:00 level=ERROR thread=zio-fiber-6 message="ping: x8.8.8.8 - error" cause=Exception in thread "zio-fiber-" java.net.UnknownHostException: java.net.UnknownHostException: x8.8.8.8: nodename nor servname provided, or not known\n')))}d.isMDXComponent=!0}}]);