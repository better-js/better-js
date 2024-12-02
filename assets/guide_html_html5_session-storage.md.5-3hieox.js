import{_ as s,c as i,o as a,V as n}from"./chunks/framework.YnO4XY28.js";const g=JSON.parse('{"title":"sessionStorage","description":"","frontmatter":{},"headers":[],"relativePath":"guide/html/html5/session-storage.md","filePath":"guide/html/html5/session-storage.md","lastUpdated":1732283740000}'),e={name:"guide/html/html5/session-storage.md"},t=n(`<h1 id="sessionstorage" tabindex="-1">sessionStorage <a class="header-anchor" href="#sessionstorage" aria-label="Permalink to &quot;sessionStorage&quot;">​</a></h1><p><code>sessionStorage</code> 是会话存储，存储的内容会随着浏览器窗口的关闭而消失（关闭网页即会话结束）。</p><p>sessionStorage特点：</p><ol><li>暂时性存储，关闭窗口即清除数据。</li><li>以字符串的形式存储数据。</li><li>一般浏览器的存储大小是5MB，即5120KB。</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 存数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sessionStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,value)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 取数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sessionStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除指定数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sessionStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 清空数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">seesionStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,5),l=[t];function p(h,r,k,o,d,c){return a(),i("div",null,l)}const m=s(e,[["render",p]]);export{g as __pageData,m as default};
