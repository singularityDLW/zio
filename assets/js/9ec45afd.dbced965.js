"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6993],{3905:function(e,t,n){n.d(t,{Zo:function(){return y},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(m,i(i({ref:t},y),{},{components:n})):a.createElement(m,i({ref:t},y))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7369:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return y},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"hasmany",title:"HasMany"},l=void 0,p={unversionedId:"datatypes/contextual/hasmany",id:"datatypes/contextual/hasmany",isDocsHomePage:!1,title:"HasMany",description:"The HasMany[K, A] data type is used with the ZIO environment to express an effect's dependency on multiple services of type A which are keyed by type A.",source:"@site/docs/datatypes/contextual/hasmany.md",sourceDirName:"datatypes/contextual",slug:"/datatypes/contextual/hasmany",permalink:"/next/datatypes/contextual/hasmany",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/contextual/hasmany.md",tags:[],version:"current",frontMatter:{id:"hasmany",title:"HasMany"},sidebar:"datatypes-sidebar",previous:{title:"Has",permalink:"/next/datatypes/contextual/has"},next:{title:"ZLayer",permalink:"/next/datatypes/contextual/zlayer"}},y=[{value:"Providing Multiple Instance of the Same Interface",id:"providing-multiple-instance-of-the-same-interface",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],c={toc:y};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"HasMany[K, A]")," data type is used with the ZIO environment to express an effect's dependency on multiple services of type ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," which are keyed by type ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"HasMany[K, A]")," is a type alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"Has[Map[K, A]]")," data type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"type HasMany[K, A] = Has[Map[K, A]]\n")),(0,o.kt)("h2",{id:"providing-multiple-instance-of-the-same-interface"},"Providing Multiple Instance of the Same Interface"),(0,o.kt)("p",null,"In ordinary ",(0,o.kt)("inlineCode",{parentName:"p"},"Has[A]")," data type, when we want to express dependencies of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Console"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Logging"),", we use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Has[Console] with Has[Database] with Has[Logging]")," data type. This is convenient, where each type uniquely\nidentifies one service."),(0,o.kt)("p",null,"What about those cases where we need to express multiple services of the same type, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Database"),"? To deal with such\ncases we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"HasMany")," data type. So in these cases the environment type would be something\nlike ",(0,o.kt)("inlineCode",{parentName:"p"},"Has[Console] with HasMany[String, Database] with Has[Logging]"),"."),(0,o.kt)("p",null,"To access the specified service correspond to a key, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.serviceAt[Service](key)")," constructor. For\nexample, to access a ",(0,o.kt)("inlineCode",{parentName:"p"},"Database"),' service which is specified by the "inmemory" key, we can write:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val database: URIO[HasMany[String, Database], Option[Database]] =\n  ZIO.serviceAt[Database]("persistent")\n')),(0,o.kt)("p",null,"A service can be updated at the specified key with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#updateServiceAt")," operator."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is an example of multiple instances of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," interface that are provided to the ZIO environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'trait Database {\n  def add(key: String, value: Array[Byte]): ZIO[Any, Throwable, Unit]\n\n  def get(key: String): ZIO[Any, Throwable, Array[Byte]]\n}\n\nobject Database {\n  val layer: URLayer[Has[Logging], HasMany[String, Database]] = { (logger: Logging) =>\n    Map(\n      "persistent" -> PersistentDatabase(logger),\n      "inmemory" -> InmemoryDatabase(logger)\n    )\n  }.toLayer\n}\n\ntrait Logging {\n  def log(line: Any): ZIO[Any, Throwable, Unit]\n}\n\ncase class ConsoleLogger(console: Console) extends Logging {\n  override def log(line: Any): ZIO[Any, Throwable, Unit] =\n    console.printLine(s"ConsoleLogger -- $line")\n}\n\nobject ConsoleLogger {\n  val layer: URLayer[Has[Console], Has[Logging]] =\n    (ConsoleLogger.apply _).toLayer[Logging]\n}\n\ncase class InmemoryDatabase(logger: Logging) extends Database {\n  override def add(key: String, value: Array[Byte]): ZIO[Any, Throwable, Unit] =\n    ZIO.unit <* logger.log(s"new $key added to the inmemory database")\n\n  override def get(key: String): ZIO[Any, Throwable, Array[Byte]] =\n    ZIO(Array.empty[Byte]) <* logger.log(s"retrieving value of $key key from inmemory database")\n}\n\nobject InmemoryDatabase {\n  val layer: URLayer[Has[Logging], Has[Database]] =\n    (InmemoryDatabase.apply _).toLayer[Database]\n}\n\ncase class PersistentDatabase(logger: Logging) extends Database {\n  override def add(key: String, value: Array[Byte]): ZIO[Any, Throwable, Unit] =\n    ZIO.unit <* logger.log(s"new $key added to the persistent database")\n\n  override def get(key: String): ZIO[Any, Throwable, Array[Byte]] =\n    ZIO.succeed(Array.empty[Byte]) <* logger.log(s"retrieving value of $key key from persistent database")\n}\n\nobject PersistentDatabase {\n  def layer: URLayer[Has[Logging], Has[Database]] = (PersistentDatabase.apply _).toLayer[Database]\n}\n\nobject HasManyExample extends ZIOAppDefault {\n  val myApp = for {\n    inmemory <- ZIO.serviceAt[Database]("inmemory").flatMap(x => ZIO.fromOption[Database](x))\n    persistent <- ZIO.serviceAt[Database]("persistent").flatMap(x => ZIO.fromOption[Database](x))\n    _ <- inmemory.add("key1", "value1".getBytes)\n    _ <- persistent.add("key2", "value2".getBytes)\n  } yield ()\n\n  def run =\n    myApp.injectCustom(\n      Database.layer,\n      ConsoleLogger.layer\n    )\n}\n')))}d.isMDXComponent=!0}}]);