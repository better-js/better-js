import{_ as n,E as t,c as l,m as s,a,J as p,w as r,V as i,o}from"./chunks/framework.YnO4XY28.js";const y=JSON.parse('{"title":"注释","description":"","frontmatter":{},"headers":[],"relativePath":"guide/javascript/es/语法/注释.md","filePath":"guide/javascript/es/语法/注释.md","lastUpdated":1732283740000}'),h={name:"guide/javascript/es/语法/注释.md"},d=i(`<h1 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h1><p>ECMAScript采用C语言的注释风格，包括 <strong>单行注释</strong> 和 <strong>块注释</strong>。</p><p>在 JavaScript 中，注释有两个主要作用：</p><ol><li><p>代码解释：注释用于向开发者提供关于代码段的解释和说明，使得代码更易于理解。</p></li><li><p>代码调试：注释还可以用于临时禁用某些代码行或代码块，这在调试过程中非常有用。</p></li></ol><h2 id="单行注释" tabindex="-1">单行注释 <a class="header-anchor" href="#单行注释" aria-label="Permalink to &quot;单行注释&quot;">​</a></h2><p>使用两个 <code>//</code> 开始，只影响斜杠后的同一行。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这是一个单行注释</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello world!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里的注释不会影响代码的执行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="块注释" tabindex="-1">块注释 <a class="header-anchor" href="#块注释" aria-label="Permalink to &quot;块注释&quot;">​</a></h2><p>使用一对 <code>/*</code> 和 <code>*/</code> 包裹，可以跨越多行。</p>`,9),c=i(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	这是一个多行注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	它可以跨域多行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello world!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>注释是代码文档的重要组成部分，它不仅可以帮助他人理解代码，也是自我文档化的良好实践。</p><p>建议多写注释，养成良好的编码习惯，但同时应该避免过度注释（比如注释一些比较明显的代码，因为这可能会对代码阅读造成干扰）。</p></div>`,2);function k(_,u,g,b,m,E){const e=t("font");return o(),l("div",null,[d,s("p",null,[a("注意："),s("strong",null,[p(e,{color:"red"},{default:r(()=>[a("多行注释不能嵌套多行注释。")]),_:1})])]),c])}const A=n(h,[["render",k]]);export{y as __pageData,A as default};
