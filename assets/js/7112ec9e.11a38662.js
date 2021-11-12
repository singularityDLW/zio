"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7834],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?t.createElement(g,i(i({ref:n},p),{},{components:r})):t.createElement(g,i({ref:n},p))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3038:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var t=r(7462),o=r(3366),l=(r(7294),r(3905)),i=["components"],a={id:"zio-grpc",title:"ZIO gRPC"},s=void 0,c={unversionedId:"resources/ecosystem/community/zio-grpc",id:"resources/ecosystem/community/zio-grpc",isDocsHomePage:!1,title:"ZIO gRPC",description:"ZIO-gRPC lets us write purely functional gRPC servers and clients.",source:"@site/docs/resources/ecosystem/community/zio-grpc.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/zio-grpc",permalink:"/next/resources/ecosystem/community/zio-grpc",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/community/zio-grpc.md",tags:[],version:"current",frontMatter:{id:"zio-grpc",title:"ZIO gRPC"},sidebar:"resources-sidebar",previous:{title:"ZIO AWS S3",permalink:"/next/resources/ecosystem/community/zio-aws-s3"},next:{title:"ZIO HTTP",permalink:"/next/resources/ecosystem/community/zio-http"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],u={toc:p};function m(e){var n=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://scalapb.github.io/zio-grpc/"},"ZIO-gRPC")," lets us write purely functional gRPC servers and clients."),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Key features of ZIO gRPC:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Functional and Type-safe")," \u2014 Use the power of Functional Programming and the Scala compiler to build robust, correct and fully featured gRPC servers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Support for Streaming")," \u2014 Use ZIO's feature-rich ",(0,l.kt)("inlineCode",{parentName:"li"},"ZStream"),"s to create server-streaming, client-streaming, and bi-directionally streaming RPC endpoints."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Highly Concurrent")," \u2014 Leverage the power of ZIO to build asynchronous clients and servers without deadlocks and race conditions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Resource Safety")," \u2014 Safely cancel an RPC call by interrupting the effect. Resources on the server will never leak!"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scala.js Support")," \u2014 ZIO gRPC comes with Scala.js support, so we can send RPCs to our service from the browser.")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"First of all we need to add following lines to the ",(0,l.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("com.thesamet" % "sbt-protoc" % "1.0.2")\n\nlibraryDependencies +=\n  "com.thesamet.scalapb.zio-grpc" %% "zio-grpc-codegen" % "0.5.0"\n')),(0,l.kt)("p",null,"Then in order to use this library, we need should add the following line in our ",(0,l.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'PB.targets in Compile := Seq(\n  scalapb.gen(grpc = true) -> (sourceManaged in Compile).value / "scalapb",\n  scalapb.zio_grpc.ZioCodeGenerator -> (sourceManaged in Compile).value / "scalapb"\n)\n\nlibraryDependencies ++= Seq(\n  "io.grpc" % "grpc-netty" % "1.39.0",\n  "com.thesamet.scalapb" %% "scalapb-runtime-grpc" % scalapb.compiler.Version.scalapbVersion\n)\n')),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"In this section, we are going to implement a simple server and client for the following gRPC ",(0,l.kt)("em",{parentName:"p"},"proto")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\noption java_multiple_files = true;\noption java_package = "io.grpc.examples.helloworld";\noption java_outer_classname = "HelloWorldProto";\noption objc_class_prefix = "HLW";\n\npackage helloworld;\n\n// The greeting service definition.\nservice Greeter {\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user\'s name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n')),(0,l.kt)("p",null,"The hello world server would be like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import io.grpc.ServerBuilder\nimport io.grpc.examples.helloworld.helloworld.ZioHelloworld.ZGreeter\nimport io.grpc.examples.helloworld.helloworld.{HelloReply, HelloRequest}\nimport io.grpc.protobuf.services.ProtoReflectionService\nimport scalapb.zio_grpc.{ServerLayer, ServiceList}\nimport zio.console.putStrLn\nimport zio.{ExitCode, URIO, ZEnv, ZIO}\n\nobject HelloWorldServer extends zio.App {\n\n  val helloService: ZGreeter[ZEnv, Any] =\n    (request: HelloRequest) =>\n      putStrLn(s"Got request: $request") *>\n        ZIO.succeed(HelloReply(s"Hello, ${request.name}"))\n\n\n  val myApp = for {\n    _ <- putStrLn("Server is running. Press Ctrl-C to stop.")\n    _ <- ServerLayer\n      .fromServiceList(\n        ServerBuilder\n          .forPort(9000)\n          .addService(ProtoReflectionService.newInstance()),\n        ServiceList.add(helloService))\n      .build.useForever\n  } yield ()\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp.exitCode\n}\n')),(0,l.kt)("p",null,"And this is an example of using its client:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import io.grpc.ManagedChannelBuilder\nimport io.grpc.examples.helloworld.helloworld.HelloRequest\nimport io.grpc.examples.helloworld.helloworld.ZioHelloworld.GreeterClient\nimport scalapb.zio_grpc.ZManagedChannel\nimport zio.console._\nimport zio.{ExitCode, URIO}\n\nobject HelloWorldClient extends zio.App {\n  def myApp =\n    for {\n      r <- GreeterClient.sayHello(HelloRequest("World"))\n      _ <- putStrLn(r.message)\n    } yield ()\n\n  val clientLayer =\n    GreeterClient.live(\n      ZManagedChannel(\n        ManagedChannelBuilder.forAddress("localhost", 9000).usePlaintext()\n      )\n    )\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp.provideCustomLayer(clientLayer).exitCode\n}\n')),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=XTkhxRTH1nE"},"Functional, Type-safe, Testable Microservices with ZIO gRPC")," by Nadav Samet (July 2020)")))}m.isMDXComponent=!0}}]);