export default [
  {
    text: "HTML中的JavaScript",
    collapsed: true,
    items: [
      { text: "script元素", link: "/JavaScript/HTML中的JavaScript/script元素" },
      {
        text: "noscript元素",
        link: "/JavaScript/HTML中的JavaScript/noscript元素",
      },
    ],
  },
  {
    text: "ECMAScript",
    collapsed: true,
    items: [
      {
        text: "语法",
        collapsed: true,
        items: [
          { text: "区分大小写", link: "/JavaScript/ECMAScript/语法/区分大小写" },
          { text: "标识符", link: "/JavaScript/ECMAScript/语法/标识符" },
          { text: "注释", link: "/JavaScript/ECMAScript/语法/注释" },
          { text: "严格模式", link: "/JavaScript/ECMAScript/语法/严格模式" },
          { text: "语句", link: "/JavaScript/ECMAScript/语法/语句" },
          { text: "常用方法", link: "/JavaScript/ECMAScript/语法/常用方法" },
        ],
      },
      { text: "关键字和保留字", link: "/JavaScript/ECMAScript/关键字和保留字" },
      { text: "字面量", link: "/JavaScript/ECMAScript/字面量" },
      {
        text: "变量",
        collapsed: true,
        items: [
          { text: "var", link: "/JavaScript/ECMAScript/变量/var" },
          { text: "let", link: "/JavaScript/ECMAScript/变量/let" },
          { text: "const", link: "/JavaScript/ECMAScript/变量/const" },
          { text: "变量扩展", link: "/JavaScript/ECMAScript/变量/变量扩展" },
        ],
      },
      {
        text: "数据类型",
        collapsed: true,
        items: [
          {
            text: "简单数据类型（原始类型）",
            items: [
              { text: "Number", link: "/JavaScript/ECMAScript/数据类型/Number" },
              { text: "Boolean", link: "/JavaScript/ECMAScript/数据类型/Boolean" },
              { text: "String", link: "/JavaScript/ECMAScript/数据类型/String" },
              { text: "Null", link: "/JavaScript/ECMAScript/数据类型/Null" },
              { text: "Undefined", link: "/JavaScript/ECMAScript/数据类型/Undefined" },
              { text: "BigInt", link: "/JavaScript/ECMAScript/数据类型/BigInt" },
              { text: "Symbol（doing）", link: "/JavaScript/ECMAScript/数据类型/Symbol" },
            ],
          },
          {
            text: "简单数据类型（原始类型）",
            items: [{ text: "Object", link: "/JavaScript/ECMAScript/数据类型/Object" }],
          },
          { text: "类型转换", link: "/JavaScript/ECMAScript/数据类型/类型转换" },
          {
            text: "类型检测",
            items: [
              {
                text: "typeof",
                link: "/JavaScript/ECMAScript/数据类型/typeof",
              },
              {
                text: "instanceof",
                link: "/JavaScript/ECMAScript/数据类型/instanceof",
              },
            ],
          },
        ],
      },
      {
        text: "操作符",
        collapsed: true,
        items: [
          {
            text: "一元操作符",
            link: "/JavaScript/ECMAScript/操作符/一元操作符",
          },
          { text: "位操作符（doing）", link: "/JavaScript/ECMAScript/操作符/位操作符" },
          {
            text: "布尔操作符",
            link: "/JavaScript/ECMAScript/操作符/布尔操作符",
          },
          {
            text: "算术运算符",
            link: "/JavaScript/ECMAScript/操作符/算术运算符",
          },
          {
            text: "关系操作符",
            link: "/JavaScript/ECMAScript/操作符/关系操作符",
          },
          {
            text: "相等操作符",
            link: "/JavaScript/ECMAScript/操作符/相等操作符",
          },
          {
            text: "条件运算符",
            link: "/JavaScript/ECMAScript/操作符/三元条件运算符",
          },
          {
            text: "赋值操作符",
            link: "/JavaScript/ECMAScript/操作符/赋值操作符",
          },
          {
            text: "逗号运算符",
            link: "/JavaScript/ECMAScript/操作符/逗号运算符",
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
      { text: "函数", link: "/JavaScript/ECMAScript/函数" },
      { text: "正则表达式", link: "/JavaScript/ECMAScript/正则表达式" },
      { text: "作用域", link: "/JavaScript/" },
      { text: "垃圾回收", link: "/JavaScript/" },
      { text: "引用类型", link: "/JavaScript/" },
      { text: "迭代器与生成器", link: "/JavaScript/" },
      { text: "对象", link: "/JavaScript/" },
      { text: "类", link: "/JavaScript/ECMAScript/class" },
      { text: "代理", link: "/JavaScript/" },
      // { text: "原型", link: "/JavaScript/" },
      { text: "JSON", link: "/JavaScript/ECMAScript/json" },
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
];
