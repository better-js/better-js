import{_ as s,c as a,o as i,V as e}from"./chunks/framework.YnO4XY28.js";const u=JSON.parse('{"title":"注释","description":"","frontmatter":{},"headers":[],"relativePath":"guide/html/注释.md","filePath":"guide/html/注释.md","lastUpdated":1732283740000}'),n={name:"guide/html/注释.md"},t=e(`<h1 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h1><p>在HTML中，注释是一种用于在代码中添加说明性文字或备注而不在浏览器中显示的方法。</p><p>注释主要用于提高代码的可读性和可维护性，便于自己或其他人理解和修改代码。同时注释也可以用于临时移除某些代码片段而不删除它们，以便在调试或测试期间方便地启用或禁用部分内容。</p><h2 id="html注释的语法" tabindex="-1">HTML注释的语法 <a class="header-anchor" href="#html注释的语法" aria-label="Permalink to &quot;HTML注释的语法&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 注释内容 --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注释以 <code>&lt;!--</code> 开头，并以 <code>--&gt;</code> 结束，注释内容可以是单行或多行。</p><p>单行注释</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 这是一个单行注释 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;这是一个段落。&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>多行注释</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">这是一个多行注释，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">它可以跨越多行。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;这是一个段落。&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><p>嵌套限制：HTML注释不能嵌套。以下是一个非法的嵌套注释示例：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 这是一个注释 </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;!--</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 嵌套的注释 --&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>避免敏感信息：尽量不在注释中包含敏感信息，因为注释内容可以通过查看网页源代码轻松看到，即使它们不显示在浏览器中。</p></li></ol>`,12),l=[t];function p(h,r,d,c,k,o){return i(),a("div",null,l)}const m=s(n,[["render",p]]);export{u as __pageData,m as default};
