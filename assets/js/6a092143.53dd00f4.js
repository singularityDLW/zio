"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1147],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},423:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"zio-pulsar",title:"ZIO Pulsar"},s=void 0,c={unversionedId:"resources/ecosystem/community/zio-pulsar",id:"resources/ecosystem/community/zio-pulsar",isDocsHomePage:!1,title:"ZIO Pulsar",description:"ZIO Pulsar is the Apache Pulsar client for Scala with ZIO and ZIO Streams integration.",source:"@site/docs/resources/ecosystem/community/zio-pulsar.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/zio-pulsar",permalink:"/next/resources/ecosystem/community/zio-pulsar",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/community/zio-pulsar.md",tags:[],version:"current",frontMatter:{id:"zio-pulsar",title:"ZIO Pulsar"},sidebar:"resources-sidebar",previous:{title:"ZIO Kinesis",permalink:"/next/resources/ecosystem/community/zio-kinesis"},next:{title:"ZIO Saga",permalink:"/next/resources/ecosystem/community/zio-saga"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"ZIO Pulsar")," is the ",(0,o.kt)("em",{parentName:"p"},"Apache Pulsar")," client for Scala with ZIO and ZIO Streams integration."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"ZIO Pulsar is a purely functional Scala wrapper over the official Pulsar client. Some key features of this library:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type-safe")," \u2014 Utilizes Scala type system to reduce runtime exceptions present in the official Java client."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Streaming-enabled")," \u2014 Naturally integrates with ZIO Streams."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ZIO integrated")," \u2014 Uses common ZIO primitives like ZIO effect and ",(0,o.kt)("inlineCode",{parentName:"li"},"ZManaged")," to reduce the boilerplate and increase expressiveness.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file for ",(0,o.kt)("em",{parentName:"p"},"Scala 3"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "com.github.jczuchnowski" %% "zio-pulsar" % "0.1"\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"First of all we need to create an instance of ",(0,o.kt)("em",{parentName:"p"},"Apache Pulsar")," and run that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it \\\n  -p 6650:6650 \\\n  -p 8080:8080 \\\n  --mount source=pulsardata,target=/pulsar/data \\\n  --mount source=pulsarconf,target=/pulsar/conf \\\n  --network pulsar \\\n  apachepulsar/pulsar:2.7.0 \\\n  bin/pulsar standalone\n")),(0,o.kt)("p",null,"Now we can run the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.pulsar.client.api.{PulsarClientException, Schema}\nimport zio._\nimport zio.blocking._\nimport zio.clock._\nimport zio.console._\nimport zio.pulsar._\nimport zio.stream._\n\nimport java.nio.charset.StandardCharsets\n\nobject StreamingExample extends zio.App {\n  val topic = "my-topic"\n\n  val producer: ZManaged[Has[PulsarClient], PulsarClientException, Unit] =\n    for {\n      sink <- Producer.make(topic, Schema.STRING).map(_.asSink)\n      _ <- Stream.fromIterable(0 to 100).map(i => s"Message $i").run(sink).toManaged_\n    } yield ()\n\n  val consumer: ZManaged[Has[PulsarClient] with Blocking with Console, PulsarClientException, Unit] =\n    for {\n      builder <- ConsumerBuilder.make(Schema.STRING).toManaged_\n      consumer <- builder\n        .subscription(Subscription("my-subscription", SubscriptionType.Exclusive))\n        .topic(topic)\n        .build\n      _ <- consumer.receiveStream.take(10).foreach { e =>\n        consumer.acknowledge(e.getMessageId) *>\n          putStrLn(new String(e.getData, StandardCharsets.UTF_8)).orDie\n      }.toManaged_\n    } yield ()\n\n  val myApp =\n    for {\n      f <- consumer.fork\n      _ <- producer\n      _ <- f.join.toManaged_\n    } yield ()\n\n  def run(args: List[String]): URIO[ZEnv, ExitCode] =\n    myApp\n      .provideCustomLayer(\n        (Console.live ++ Clock.live) >+>\n          PulsarClient.live("localhost", 6650)\n      ).useNow.exitCode\n}\n')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tpwydDqQBmk"},"ZIO World - ZIO PULSAR")," by Jakub Czuchnowski (March 2020) \u2014 A new library that offers a native, first-class ZIO experience for Pulsar, the Kafka competitor gaining traction for some use cases.")))}m.isMDXComponent=!0}}]);