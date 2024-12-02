import{_ as n,E as e,c as l,m as s,a,J as r,w as p,V as i,o as h}from"./chunks/framework.YnO4XY28.js";const F=JSON.parse('{"title":"语法","description":"","frontmatter":{},"headers":[],"relativePath":"guide/javascript/es/1-语法/语法.md","filePath":"guide/javascript/es/1-语法/语法.md","lastUpdated":1732283740000}'),d={name:"guide/javascript/es/1-语法/语法.md"},o=i(`<h1 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h1><h2 id="区分大小写" tabindex="-1">区分大小写 <a class="header-anchor" href="#区分大小写" aria-label="Permalink to &quot;区分大小写&quot;">​</a></h2><p>在 JavaScript 中，大小写敏感是非常重要的。这意味着在 JavaScript 中，变量、函数名、对象的属性名等标识符的命名，大写字母和小写字母是不同的。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// myVar 和 myvar 会被视为两个不同的变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myVar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, JavaScript!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myVar); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Hello, JavaScript!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myvar); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ReferenceError: myvar is not defined</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>因此，当你在编写 JavaScript 代码时，必需非常注意大小写，确保你的标识符、关键字和属性名的大小写始终保持一致。</p><h2 id="标识符" tabindex="-1">标识符 <a class="header-anchor" href="#标识符" aria-label="Permalink to &quot;标识符&quot;">​</a></h2><p>所谓标识符，就是变量、函数、属性或函数参数的名称。</p><p>在 JavaScript 中标识符遵循一定的命名规则：</p><ol><li><p>标识符由 <strong><code>字母</code></strong>、<strong><code>数字</code></strong>、<strong><code>下划线( _ )</code></strong>、<strong><code>美元符号( $ )</code></strong> 组成，且不能以 <strong><code>数字</code></strong> 开头。</p></li><li><p>标识符不能是 <strong><code>关键字</code></strong> 或 <strong><code>保留字</code></strong>。</p></li><li><p><strong>标识符严格区分大小写</strong>。</p></li></ol><p>例如：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 有效的标识符</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myVar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _myVar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $myVar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 无效的标识符</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 123myVar; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 错误，标识符不能以数字开头</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> for; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 错误，for是关键字</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>标识符中的字母也可以是 <strong><code>ASCII</code></strong> 中的字母或 <strong><code>Unicode</code></strong> 的字母。这意味着你可以在标识符中使用全球各种语言的字符。例如：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 变量 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> π </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.1415926</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(变量); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(π); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1415926</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>虽然 JavaScript 允许你这样做，但是在实际编程中，通常推荐使用英文字符来命名标识符，这样可以使代码更易于理解和维护。</p><p>另外，标识符的命名方式推荐使用驼峰大小写形式，即第一个单词的首字母小写，后面每个单词的首字母大写，例如：<code>myVar</code>。</p><h2 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h2><p>在 JavaScript 中，注释是一种让你在代码中添加说明或描述的方式，它对程序的执行没有任何影响。</p><p>JavaScript中提供了两种类型的注释： <strong>单行注释</strong> 和 <strong>多行注释（块注释）</strong>。</p><blockquote><p>注释在编程中非常重要，它可以帮助你和其他开发者理解代码的功能和目的。在编写负载的代码或函数时，使用注释来解释你的思路和方法是一个很好的实践。此外，注释还可以用于临时禁用某些代码行或代码块，这在调试过程中非常有用。</p></blockquote><h3 id="单行注释" tabindex="-1">单行注释 <a class="header-anchor" href="#单行注释" aria-label="Permalink to &quot;单行注释&quot;">​</a></h3><p>单行注释以两个斜杠字符 <code>(//)</code> 开始，只影响斜杠后的同一行。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这是一个单行注释</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, JavaScript!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里的注释不会影响代码的执行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="多行注释" tabindex="-1">多行注释 <a class="header-anchor" href="#多行注释" aria-label="Permalink to &quot;多行注释&quot;">​</a></h3><p>多行注释以一个斜杠和一个星号（<code>/*</code>）开始 ， 以一个星号和一个斜杠（<code>*/</code>）结束 ，可以跨越多行。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	这是一个多行注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	它可以跨域多行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, JavaScript!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,25),k=i('<h2 id="可选的分号" tabindex="-1">可选的分号 <a class="header-anchor" href="#可选的分号" aria-label="Permalink to &quot;可选的分号&quot;">​</a></h2><p>ECMAScript中的语句以 <code>分号(;)</code> 结尾，虽然分号可写可不写（换行符会被识别成结束符），但为了养成良好的编码习惯，还是建议书写。</p><h2 id="关键字和保留字" tabindex="-1">关键字和保留字 <a class="header-anchor" href="#关键字和保留字" aria-label="Permalink to &quot;关键字和保留字&quot;">​</a></h2><h3 id="关键字" tabindex="-1">关键字 <a class="header-anchor" href="#关键字" aria-label="Permalink to &quot;关键字&quot;">​</a></h3><p>有特殊含义的字符，JavaScript 内置的一些英语词汇。</p><table><thead><tr><th><strong>break</strong></th><th><strong>do</strong></th><th><strong>in</strong></th><th><strong>typeof</strong></th></tr></thead><tbody><tr><td><strong>case</strong></td><td><strong>else</strong></td><td><strong>instanceof</strong></td><td><strong>var</strong></td></tr><tr><td><strong>catch</strong></td><td><strong>export</strong></td><td><strong>new</strong></td><td><strong>void</strong></td></tr><tr><td><strong>class</strong></td><td><strong>extends</strong></td><td><strong>return</strong></td><td><strong>while</strong></td></tr><tr><td><strong>const</strong></td><td><strong>finally</strong></td><td><strong>super</strong></td><td><strong>with</strong></td></tr><tr><td><strong>continue</strong></td><td><strong>for</strong></td><td><strong>switch</strong></td><td><strong>yoield</strong></td></tr><tr><td><strong>debugger</strong></td><td><strong>function</strong></td><td><strong>this</strong></td><td></td></tr><tr><td><strong>default</strong></td><td><strong>if</strong></td><td><strong>throw</strong></td><td></td></tr><tr><td><strong>delete</strong></td><td><strong>import</strong></td><td><strong>try</strong></td><td></td></tr></tbody></table><h3 id="保留字" tabindex="-1">保留字 <a class="header-anchor" href="#保留字" aria-label="Permalink to &quot;保留字&quot;">​</a></h3><p>现在还不是关键字，但是未来可能成为关键字。</p><table><thead><tr><th>await</th><th>interface</th><th>protected</th><th>static</th></tr></thead><tbody><tr><td><strong>enum</strong></td><td><strong>let</strong></td><td><strong>private</strong></td><td></td></tr><tr><td><strong>implements</strong></td><td><strong>package</strong></td><td><strong>public</strong></td><td></td></tr></tbody></table><h2 id="常用方法" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法" aria-label="Permalink to &quot;常用方法&quot;">​</a></h2><h3 id="弹出警示框" tabindex="-1">弹出警示框 <a class="header-anchor" href="#弹出警示框" aria-label="Permalink to &quot;弹出警示框&quot;">​</a></h3><p>用于在浏览器里面弹出警示框，会阻止后续的代码执行，直到点击 &quot;确定&quot; 后才会向下执行。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, JavaScript!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="控制台输出" tabindex="-1">控制台输出 <a class="header-anchor" href="#控制台输出" aria-label="Permalink to &quot;控制台输出&quot;">​</a></h3><p>在调试代码的时候最常用的，且不会阻止代码的执行。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, JavaScript!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="网页文档输出" tabindex="-1">网页文档输出 <a class="header-anchor" href="#网页文档输出" aria-label="Permalink to &quot;网页文档输出&quot;">​</a></h3><p>内容会输出到页面的body标签里面，且内容支持使用html标签，但现在很少用了。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;h1&gt;Hello, JavaScript!&lt;/h1&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="弹出对话确认框" tabindex="-1">弹出对话确认框 <a class="header-anchor" href="#弹出对话确认框" aria-label="Permalink to &quot;弹出对话确认框&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;确认删除么？&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="弹出提示输入框" tabindex="-1">弹出提示输入框 <a class="header-anchor" href="#弹出提示输入框" aria-label="Permalink to &quot;弹出提示输入框&quot;">​</a></h3><p>在浏览器里面弹出一个输入框，让用户输入信息，仅测试使用。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prompt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入信息：&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',24);function c(g,u,E,b,y,m){const t=e("font");return h(),l("div",null,[o,s("p",null,[a("注意："),s("strong",null,[r(t,{color:"red"},{default:p(()=>[a("多行注释不能嵌套多行注释。")]),_:1})])]),k])}const C=n(d,[["render",c]]);export{F as __pageData,C as default};
