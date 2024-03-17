export default [
  {
    text: "ECMAScript",
    collapsed: true,
    items: [
      {
        text: "语法",
        collapsed: true,
        items: [
          { text: "注释", link: "/JavaScript/ECMAScript/语法/注释" },
          { text: "严格模式", link: "/JavaScript/ECMAScript/语法/严格模式" },
          {
            text: "关键字和保留字",
            link: "/JavaScript/ECMAScript/语法/关键字和保留字",
          },
          { text: "字面量", link: "/JavaScript/ECMAScript/语法/字面量" },
          { text: "常用方法", link: "/JavaScript/ECMAScript/语法/常用方法" },
        ],
      },
      {
        text: "变量",
        collapsed: true,
        items: [
          { text: "var", link: "/JavaScript/ECMAScript/变量/var" },
          { text: "let", link: "/JavaScript/ECMAScript/变量/let" },
          { text: "const", link: "/JavaScript/ECMAScript/变量/const" },
        ],
      },
      {
        text: "数据类型",
        collapsed: true,
        items: [
          { text: "Number", link: "/JavaScript/ECMAScript/数据类型/Number" },
          { text: "Boolean", link: "/JavaScript/ECMAScript/数据类型/Boolean" },
          { text: "String", link: "/JavaScript/ECMAScript/数据类型/String" },
          { text: "Null", link: "/JavaScript/ECMAScript/数据类型/Null" },
          {
            text: "Undefined",
            link: "/JavaScript/ECMAScript/数据类型/Undefined",
          },
          { text: "BigInt", link: "/JavaScript/ECMAScript/数据类型/BigInt" },
          { text: "Symbol", link: "/JavaScript/ECMAScript/数据类型/Symbol" },
          { text: "Object", link: "/JavaScript/ECMAScript/数据类型/Object" },
          {
            text: "类型转换",
            link: "/JavaScript/ECMAScript/数据类型/类型转换",
          },
          {
            text: "类型检测",
            link: "/JavaScript/ECMAScript/数据类型/类型检测",
          },
        ],
      },
      {
        text: "操作符",
        collapsed: true,
        items: [
          {
            text: "赋值运算符",
            link: "/JavaScript/ECMAScript/操作符/赋值运算符",
          },
          {
            text: "比较运算符",
            link: "/JavaScript/ECMAScript/操作符/比较运算符",
          },
          {
            text: "相等运算符",
            link: "/JavaScript/ECMAScript/操作符/相等运算符",
          },
          {
            text: "算术运算符",
            link: "/JavaScript/ECMAScript/操作符/算术运算符",
          },
          { text: "位运算符", link: "/JavaScript/ECMAScript/操作符/位运算符" },
          {
            text: "移位运算符",
            link: "/JavaScript/ECMAScript/操作符/移位运算符",
          },
          {
            text: "逻辑运算符",
            link: "/JavaScript/ECMAScript/操作符/二元逻辑运算符",
          },
          {
            text: "条件运算符",
            link: "/JavaScript/ECMAScript/操作符/三元条件运算符",
          },
          {
            text: "逗号运算符",
            link: "/JavaScript/ECMAScript/操作符/逗号运算符",
          },
          {
            text: "一元运算符",
            link: "/JavaScript/ECMAScript/操作符/一元运算符",
          },
          {
            text: "可选链运算符",
            link: "/JavaScript/ECMAScript/操作符/可选链运算符",
          },
          {
            text: "运算符优先级",
            link: "/JavaScript/ECMAScript/操作符/运算符优先级",
          },
        ],
      },
      {
        text: "语句",
        collapsed: true,
        items: [
          {
            text: "条件判断语句",
            link: "/JavaScript/ECMAScript/语句/条件判断语句",
          },
          { text: "循环语句", link: "/JavaScript/ECMAScript/语句/循环语句" },
          {
            text: "异常处理语句",
            link: "/JavaScript/ECMAScript/语句/异常处理语句",
          },
        ],
      },
      // { text: "函数", link: "/JavaScript/" },
      // { text: "数组", link: "/JavaScript/" },
      // { text: "Map、WeakMap", link: "/JavaScript/" },
      // { text: "Set、WeakSet", link: "/JavaScript/" },
      // { text: "原型", link: "/JavaScript/" },
      // { text: "类", link: "/JavaScript/" },
      { text: "JSON", link: "/JavaScript/" },
      // { text: "正则表达式", link: "/JavaScript/" },
    ],
  },
  {
    text: "BOM",
    collapsed: true,
    items: [
      { text: "window", link: "/JavaScript/BOM/window" },
      { text: "location", link: "/JavaScript/BOM/location" },
      { text: "navigator", link: "/JavaScript/BOM/navigator" },
      { text: "screen", link: "/JavaScript/BOM/screen" },
      { text: "history", link: "/JavaScript/BOM/history" },
    ],
  },
  {
    text: "DOM",
    collapsed: true,
    items: [
      { text: "Our Team", link: "/JavaScript/" },
      { text: "Our Team", link: "/JavaScript/" },
    ],
  },
  {
    text: "网络请求",
    collapsed: true,
    items: [
      {
        text: "XMLHttpRequest",
        collapsed: true,
        items: [
          {
            text: "简介",
            link: "/JavaScript/网络请求/ajax/ajax",
          },
          {
            text: "XML简介",
            link: "/JavaScript/网络请求/ajax/xml简介",
          },
          {
            text: "Ajax特点",
            link: "/JavaScript/网络请求/ajax/ajax特点",
          },
          {
            text: "Http简介",
            link: "/JavaScript/网络请求/ajax/http简介",
          },
          {
            text: "应用",
            items: [
              {
                text: "原生",
                link: "/JavaScript/网络请求/ajax/ajax使用",
              },
              {
                text: "jQuery中的Ajax",
                link: "/JavaScript/网络请求/ajax/jquery-ajax",
              },
              {
                text: "Axios中的Ajax",
                link: "/JavaScript/网络请求/ajax/axios-ajax",
              },
            ],
          },
        ],
      },
      { text: "Fetch", link: "/JavaScript/网络请求/fetch" },
      { text: "Web Socket", link: "/JavaScript/网络请求" },
    ],
  },
  {
    text: "客户端存储",
    collapsed: true,
    items: [
      { text: "cookie", link: "/JavaScript/客户端存储/cookie" },
      { text: "Web Storage", link: "/JavaScript/客户端存储/web-storage" },
    ],
  },
  {
    text: "模块化",
    collapsed: true,
    items: [{ text: "模块化", link: "/JavaScript/模块化/模块化" }],
  },
  {
    text: "内置对象",
    collapsed: true,
    items: [
      { text: "Array", link: "/JavaScript/内置对象/Array" },
      { text: "Object", link: "/JavaScript/内置对象/Object" },
      { text: "String", link: "/JavaScript/内置对象/String" },
      { text: "Math", link: "/JavaScript/内置对象/Math" },
      { text: "Date", link: "/JavaScript/内置对象/Date" },
    ],
  },
];
