import{_ as s,c as a,o as e,V as n}from"./chunks/framework.YnO4XY28.js";const g=JSON.parse('{"title":"配置自动重启","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/koa-server-side/配置自动重启.md","filePath":"guide/notes/koa-server-side/配置自动重启.md","lastUpdated":1733062151000}'),i={name:"guide/notes/koa-server-side/配置自动重启.md"},t=n(`<h1 id="配置自动重启" tabindex="-1">配置自动重启 <a class="header-anchor" href="#配置自动重启" aria-label="Permalink to &quot;配置自动重启&quot;">​</a></h1><hr><p><strong>步骤 1：安装 nodemon</strong></p><p><a href="https://www.npmjs.com/package/nodemon" target="_blank" rel="noreferrer">nodemon</a> 是一个工具，它可以在文件变化时自动重启您的 Node.js 应用。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add --save-dev nodemon</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><p><strong>步骤 2：配置 <code>package.json</code></strong></p><p>在 <code>package.json</code> 文件中添加一个新的脚本命令，以便使用 Nodemon 启动服务。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {   </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nodemon ./server/main.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><p><strong>步骤 3：启动服务</strong></p><p>使用以下命令启动服务：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,13),p=[t];function r(l,o,d,h,c,k){return e(),a("div",null,p)}const m=s(i,[["render",r]]);export{g as __pageData,m as default};
