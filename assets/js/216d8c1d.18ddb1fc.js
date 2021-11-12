"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7808],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9292:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"caliban",title:"Caliban"},s=void 0,p={unversionedId:"resources/ecosystem/community/caliban",id:"resources/ecosystem/community/caliban",isDocsHomePage:!1,title:"Caliban",description:"Caliban is a purely functional library for creating GraphQL servers and clients in Scala.",source:"@site/docs/resources/ecosystem/community/caliban.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/caliban",permalink:"/next/resources/ecosystem/community/caliban",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/community/caliban.md",tags:[],version:"current",frontMatter:{id:"caliban",title:"Caliban"},sidebar:"resources-sidebar",previous:{title:"Introduction",permalink:"/next/resources/ecosystem/community/index"},next:{title:"Distage",permalink:"/next/resources/ecosystem/community/distage"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ghostdogpr.github.io/caliban/"},"Caliban")," is a purely functional library for creating GraphQL servers and clients in Scala."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Key features of Caliban"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Purely Functional")," \u2014 All interfaces are pure and types are referentially transparent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type Safety")," \u2014 Schemas are type safe and derived at compile time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Minimal Boilerplate")," \u2014 No need to manually define a schema for every type in your API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Excellent Interoperability")," \u2014 Out-of-the-box support for major HTTP server libraries, effect types, JSON libraries, and more.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "com.github.ghostdogpr" %% "caliban" % "1.1.0"\n')),(0,o.kt)("p",null,"Caliban also have lots of optional modules to inter-operate with other various libraries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "com.github.ghostdogpr" %% "caliban-http4s"     % "1.1.0" // routes for http4s\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-akka-http"  % "1.1.0" // routes for akka-http\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-play"       % "1.1.0" // routes for play\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-finch"      % "1.1.0" // routes for finch\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-zio-http"   % "1.1.0" // routes for zio-http\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-cats"       % "1.1.0" // interop with cats effect\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-monix"      % "1.1.0" // interop with monix\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-tapir"      % "1.1.0" // interop with tapir\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-federation" % "1.1.0" // interop with apollo federation\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"First, to define Caliban API, we should define data models using case classes and ADTs. Then the Caliban can derive the whole GraphQL schema from these data models:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala",metastring:"modc:silent:nest","modc:silent:nest":!0},'import caliban.GraphQL.graphQL\nimport caliban.schema.Annotations.GQLDescription\nimport caliban.{RootResolver, ZHttpAdapter}\nimport zhttp.http._\nimport zhttp.service.Server\nimport zio.{ExitCode, ZEnv, ZIO}\n\nimport scala.language.postfixOps\n\nsealed trait Role\n\nobject Role {\n  case object SoftwareDeveloper       extends Role\n  case object SiteReliabilityEngineer extends Role\n  case object DevOps                  extends Role\n}\n\ncase class Employee(\n    name: String,\n    role: Role\n)\n\ncase class EmployeesArgs(role: Role)\ncase class EmployeeArgs(name: String)\n\ncase class Queries(\n    @GQLDescription("Return all employees with specific role")\n    employees: EmployeesArgs => List[Employee],\n    @GQLDescription("Find an employee by its name")\n    employee: EmployeeArgs => Option[Employee]\n)\nobject CalibanExample extends zio.App {\n\n  val employees = List(\n    Employee("Alex", Role.DevOps),\n    Employee("Maria", Role.SoftwareDeveloper),\n    Employee("James", Role.SiteReliabilityEngineer),\n    Employee("Peter", Role.SoftwareDeveloper),\n    Employee("Julia", Role.SiteReliabilityEngineer),\n    Employee("Roberta", Role.DevOps)\n  )\n\n  val myApp = for {\n    interpreter <- graphQL(\n      RootResolver(\n        Queries(\n          args => employees.filter(e => args.role == e.role),\n          args => employees.find(e => e.name == args.name)\n        )\n      )\n    ).interpreter\n    _ <- Server\n      .start(\n        port = 8088,\n        http = Http.route { case _ -> Root / "api" / "graphql" =>\n          ZHttpAdapter.makeHttpService(interpreter)\n        }\n      )\n      .forever\n  } yield ()\n\n  override def run(args: List[String]): ZIO[ZEnv, Nothing, ExitCode] =\n    myApp.exitCode\n\n}\n')),(0,o.kt)("p",null,"Now let's query all software developers using GraphQL query language:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query{\n  employees(role: SoftwareDeveloper){\n    name\n    role\n  }\n}\n")),(0,o.kt)("p",null,"Here is the ",(0,o.kt)("em",{parentName:"p"},"curl")," request of this query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl 'http://localhost:8088/api/graphql' --data-binary '{\"query\":\"query{\\n employees(role: SoftwareDeveloper){\\n name\\n role\\n}\\n}\"}'\n")),(0,o.kt)("p",null,"And the response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data" : {\n    "employees" : [\n      {\n        "name" : "Maria",\n        "role" : "SoftwareDeveloper"\n      },\n      {\n        "name" : "Peter",\n        "role" : "SoftwareDeveloper"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mzqsXklbmfM&t=2849s"},"Zymposium - Caliban")," by Adam Fraser, Kit Langton and Pierre Ricadat \u2014 We will be building full-stack applications with the special guest international man of mystery Pierre Ricadat. Pierre will be walking us through Caliban, a GraphQL library in Scala that just had its 1.0 release. We'll be seeing how easy it can be to upgrade an existing application to use GraphQL with the power of Caliban!")))}m.isMDXComponent=!0}}]);