(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{402:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"多数据源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多数据源"}},[t._v("#")]),t._v(" 多数据源")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://images.gitee.com/uploads/images/2019/0626/231046_f44892b9_709883.png",border:"0"}})]),t._v(" "),a("p",{attrs:{align:"center"}},[a("strong",[t._v("一个基于springboot的快速集成多数据源的启动器")])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"https://www.travis-ci.org/baomidou/dynamic-datasource-spring-boot-starter",target:"_blank"}},[a("img",{attrs:{src:"https://www.travis-ci.org/baomidou/dynamic-datasource-spring-boot-starter.svg?branch=master"}})]),t._v(" "),a("a",{attrs:{href:"http://mvnrepository.com/artifact/com.baomidou/dynamic-datasource-spring-boot-starter",target:"_blank"}},[a("img",{attrs:{src:"https://img.shields.io/maven-central/v/com.baomidou/dynamic-datasource-spring-boot-starter.svg"}})]),t._v(" "),a("a",{attrs:{href:"http://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank"}},[a("img",{attrs:{src:"http://img.shields.io/:license-apache-brightgreen.svg"}})]),t._v(" "),a("a",[a("img",{attrs:{src:"https://img.shields.io/badge/JDK-1.7+-green.svg"}})]),t._v(" "),a("a",[a("img",{attrs:{src:"https://img.shields.io/badge/springBoot-1.5.x__2.x.x-green.svg"}})]),t._v(" "),a("a",{attrs:{target:"_blank",href:"//shang.qq.com/wpa/qunwpa?idkey=ded31006508b57d2d732c81266dd2c26e33283f84464e2c294309d90b9674992"}},[a("img",{attrs:{border:"0",src:"//pub.idqqimg.com/wpa/images/group.png",alt:"dynamic-sring-boot-starter",title:"dynamic-sring-boot-starter"}})])]),t._v(" "),a("h1",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("dynamic-datasource-spring-boot-starter 是一个基于springboot的快速集成多数据源的启动器。")]),t._v(" "),a("p",[t._v("其支持 "),a("strong",[t._v("Jdk 1.7+,    SpringBoot 1.4.x  1.5.x   2.x.x")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("示例项目")]),t._v(" 可参考项目下的samples目录。")]),t._v(" "),a("h1",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),a("ol",[a("li",[t._v("支持 "),a("strong",[t._v("数据源分组")]),t._v(" ，适用于多种场景 纯粹多库  读写分离  一主多从  混合模式。")]),t._v(" "),a("li",[t._v("支持数据库敏感配置信息 "),a("strong",[t._v("加密")]),t._v("  ENC()。")]),t._v(" "),a("li",[t._v("支持每个数据库独立初始化表结构schema和数据库database。")]),t._v(" "),a("li",[t._v("支持 "),a("strong",[t._v("自定义注解")]),t._v(" ，需继承DS(3.2.0+)。")]),t._v(" "),a("li",[t._v("提供对Druid，Mybatis-Plus，P6sy，Jndi的快速集成。")]),t._v(" "),a("li",[t._v("简化Druid和HikariCp配置，提供 "),a("strong",[t._v("全局参数配置")]),t._v(" 。配置一次，全局通用。")]),t._v(" "),a("li",[t._v("提供 "),a("strong",[t._v("自定义数据源来源")]),t._v(" 方案。")]),t._v(" "),a("li",[t._v("提供项目启动后 "),a("strong",[t._v("动态增加移除数据源")]),t._v(" 方案。")]),t._v(" "),a("li",[t._v("提供Mybatis环境下的  "),a("strong",[t._v("纯读写分离")]),t._v(" 方案。")]),t._v(" "),a("li",[t._v("提供使用 "),a("strong",[t._v("spel动态参数")]),t._v(" 解析数据源方案。内置spel，session，header，支持自定义。")]),t._v(" "),a("li",[t._v("支持  "),a("strong",[t._v("多层数据源嵌套切换")]),t._v(" 。（ServiceA >>>  ServiceB >>> ServiceC）。")]),t._v(" "),a("li",[t._v("提供对shiro，sharding-jdbc,quartz等第三方库集成的方案,注意事项和示例。")]),t._v(" "),a("li",[t._v("提供  "),a("strong",[t._v("基于seata的分布式事务方案。")]),t._v(" 附：不支持原生spring事务。")])]),t._v(" "),a("h1",{attrs:{id:"约定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#约定"}},[t._v("#")]),t._v(" 约定")]),t._v(" "),a("ol",[a("li",[t._v("本框架只做 "),a("strong",[t._v("切换数据源")]),t._v(" 这件核心的事情，并"),a("strong",[t._v("不限制你的具体操作")]),t._v("，切换了数据源可以做任何CRUD。")]),t._v(" "),a("li",[t._v("配置文件所有以下划线 "),a("code",[t._v("_")]),t._v(" 分割的数据源 "),a("strong",[t._v("首部")]),t._v(" 即为组的名称，相同组名称的数据源会放在一个组下。")]),t._v(" "),a("li",[t._v("切换数据源可以是组名，也可以是具体数据源名称。组名则切换时采用负载均衡算法切换。")]),t._v(" "),a("li",[t._v("默认的数据源名称为  "),a("strong",[t._v("master")]),t._v(" ，你可以通过 "),a("code",[t._v("spring.datasource.dynamic.primary")]),t._v(" 修改。")]),t._v(" "),a("li",[t._v("方法上的注解优先于类上注解。")]),t._v(" "),a("li",[t._v("强烈建议只在service的类和方法上添加注解，不建议在mapper上添加注解。")])]),t._v(" "),a("h1",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("ol",[a("li",[t._v("引入dynamic-datasource-spring-boot-starter。")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.baomidou"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("dynamic-datasource-spring-boot-starter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("配置数据源。")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dynamic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("primary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置默认的数据源或者数据源组,默认值即为master")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置严格模式,默认false不启动. 启动后在未匹配到指定数据源时候会抛出异常,不启动则使用默认数据源.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//xx.xx.xx.xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3306/dynamic\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.jdbc.Driver "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3.2.0开始支持SPI可省略此配置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//xx.xx.xx.xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3307/dynamic\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.jdbc.Driver\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ENC(xxxxx) "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 内置加密,使用请查看详细文档")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ENC(xxxxx)\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ENC(xxxxx)\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.jdbc.Driver\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" db/schema.sql "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置则生效,自动初始化表结构")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" db/data.sql "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置则生效,自动初始化数据")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("continue-on-error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认true,初始化失败是否继续")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("separator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sql默认分号分隔符")]),t._v("\n          \n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#......省略")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#以上会配置一个默认库master，一个组slave下有两个子库slave_1,slave_2")]),t._v("\n")])])]),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多主多从                      纯粹多库（记得设置primary）                   混合配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                               "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                               "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dynamic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dynamic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dynamic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                             "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                             "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("oracle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                               "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sqlserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("postgresql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("oracle_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slave_3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                                   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("oracle_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("使用  "),a("strong",[t._v("@DS")]),t._v("  切换数据源。")])]),t._v(" "),a("p",[a("strong",[t._v("@DS")]),t._v(" 可以注解在方法上和类上，"),a("strong",[t._v("同时存在方法注解优先于类上注解")]),t._v("。")]),t._v(" "),a("p",[t._v("强烈建议只注解在service实现上。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("注解")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("结果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("没有@DS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认数据源")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('@DS("dsName")')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dsName可以为组名也可以为具体某个库的名称")])])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slave"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserServiceImpl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdbcTemplate")]),t._v(" jdbcTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("  jdbcTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryForList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slave_1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectByCondition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("  jdbcTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryForList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from user where age >10"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h4",{attrs:{id:"赶紧集成体验一下吧！-如果需要更多功能请点击下面链接查看详细文档！"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赶紧集成体验一下吧！-如果需要更多功能请点击下面链接查看详细文档！"}},[t._v("#")]),t._v(" 赶紧集成体验一下吧！ 如果需要更多功能请点击下面链接查看详细文档！")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/baomidou/dynamic-datasource-spring-boot-starter/wiki/FAQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见问题请点我"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/dynamic-datasource-spring-boot-starter/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式事务，加密,Druid集成，MybatisPlus集成，动态增减数据源，自定义切换规则,纯读写分离插件等等更多更细致的文档在这里"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"支持一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持一下"}},[t._v("#")]),t._v(" 支持一下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.gitee.com/uploads/images/2019/0921/225754_ef8c21e8_709883.png",alt:"uSA83t.png"}}),t._v(" "),a("img",{attrs:{src:"https://images.gitee.com/uploads/images/2019/0921/230525_be693c65_709883.png",alt:"uSVpFJ.png"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);