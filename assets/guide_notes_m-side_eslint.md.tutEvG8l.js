import{_ as s,c as n,o as a,V as p}from"./chunks/framework.YnO4XY28.js";const d=JSON.parse('{"title":"ESLint","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/m-side/eslint.md","filePath":"guide/notes/m-side/eslint.md","lastUpdated":1733062151000}'),e={name:"guide/notes/m-side/eslint.md"},l=p(`<h1 id="eslint" tabindex="-1">ESLint <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;ESLint&quot;">​</a></h1><p><a href="https://eslint.org/" target="_blank" rel="noreferrer">ESLint</a> 是一个用于识别和报告 JavaScript 代码中的模式匹配问题的工具，它帮助开发者在开发过程中保持代码的一致性和质量。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create @eslint/config@latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p><code>eslint.config.js</code> 配置文件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导入全局变量定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> globals </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;globals&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导入 @eslint/js 插件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pluginJs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@eslint/js&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导入 typescript-eslint 插件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tseslint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;typescript-eslint&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导入 eslint-plugin-vue 插件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pluginVue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;eslint-plugin-vue&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {import(&#39;eslint&#39;).Linter.Config[]}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 匹配所有以.js、.mjs、.cjs、.ts、.vue 结尾的文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{ files: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;**/*.{js,mjs,cjs,ts,vue}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 配置全局变量，这里使用了 globals 库中的 browser 环境变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{ languageOptions: { globals: globals.browser } },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 使用 @eslint/js 插件的 recommended 配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	pluginJs.configs.recommended,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 使用 typescript-eslint 插件的 recommended 配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tseslint.configs.recommended,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 使用 eslint-plugin-vue 插件的 flat/essential 配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pluginVue.configs[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flat/essential&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 仅匹配.vue 文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		files: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;**/*.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 配置解析器选项，使用 typescript-eslint 解析器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		languageOptions: { parserOptions: { parser: tseslint.parser } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		 * &quot;off&quot; or 0 - 关闭规则</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		 * &quot;warn&quot; or 1 - 打开规则作为警告 (不影响代码执行)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		 * &quot;error&quot; or 2 - 打开规则作为一个错误 (代码不能执行，界面报错)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		rules: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;no-var&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 禁止使用var声明变量</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;no-unused-vars&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 禁止定义未使用的变量</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;no-undef&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 禁止使用未定义的变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p><code>.eslintignore</code> 忽略文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dist</span></span>
<span class="line"><span>node_modules</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p><code>package.json</code> 新增运行脚本</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;lint:eslint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint src/**/*.{ts,vue} --cache --fix&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>运行脚本</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run lint:eslint</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="rules" tabindex="-1">rules <a class="header-anchor" href="#rules" aria-label="Permalink to &quot;rules&quot;">​</a></h2><details class="details custom-block"><summary>检测潜在错误的规则</summary><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>array-callback-return</span></span>
<span class="line"><span>constructor-super</span></span>
<span class="line"><span>for-direction</span></span>
<span class="line"><span>getter-return</span></span>
<span class="line"><span>no-async-promise-executor</span></span>
<span class="line"><span>no-await-in-loop</span></span>
<span class="line"><span>no-class-assign</span></span>
<span class="line"><span>no-compare-neg-zero</span></span>
<span class="line"><span>no-cond-assign</span></span>
<span class="line"><span>no-const-assign</span></span>
<span class="line"><span>no-constant-binary-expression</span></span>
<span class="line"><span>no-constant-condition</span></span>
<span class="line"><span>no-constructor-return</span></span>
<span class="line"><span>no-control-regex</span></span>
<span class="line"><span>no-debugger</span></span>
<span class="line"><span>no-dupe-args</span></span>
<span class="line"><span>no-dupe-class-members</span></span>
<span class="line"><span>no-dupe-else-if</span></span>
<span class="line"><span>no-dupe-keys</span></span>
<span class="line"><span>no-duplicate-case</span></span>
<span class="line"><span>no-duplicate-imports</span></span>
<span class="line"><span>no-empty-character-class</span></span>
<span class="line"><span>no-empty-pattern</span></span>
<span class="line"><span>no-ex-assign</span></span>
<span class="line"><span>no-fallthrough</span></span>
<span class="line"><span>no-func-assign</span></span>
<span class="line"><span>no-import-assign</span></span>
<span class="line"><span>no-inner-declarations</span></span>
<span class="line"><span>no-invalid-regexp</span></span>
<span class="line"><span>no-irregular-whitespace</span></span>
<span class="line"><span>no-loss-of-precision</span></span>
<span class="line"><span>no-misleading-character-class</span></span>
<span class="line"><span>no-new-native-nonconstructor</span></span>
<span class="line"><span>no-obj-calls</span></span>
<span class="line"><span>no-promise-executor-return</span></span>
<span class="line"><span>no-prototype-builtins</span></span>
<span class="line"><span>no-self-assign</span></span>
<span class="line"><span>no-self-compare</span></span>
<span class="line"><span>no-setter-return</span></span>
<span class="line"><span>no-sparse-arrays</span></span>
<span class="line"><span>no-template-curly-in-string</span></span>
<span class="line"><span>no-this-before-super</span></span>
<span class="line"><span>no-undef</span></span>
<span class="line"><span>no-unexpected-multiline</span></span>
<span class="line"><span>no-unmodified-loop-condition</span></span>
<span class="line"><span>no-unreachable</span></span>
<span class="line"><span>no-unreachable-loop</span></span>
<span class="line"><span>no-unsafe-finally</span></span>
<span class="line"><span>no-unsafe-negation</span></span>
<span class="line"><span>no-unsafe-optional-chaining</span></span>
<span class="line"><span>no-unused-private-class-members</span></span>
<span class="line"><span>no-unused-vars</span></span>
<span class="line"><span>no-use-before-define</span></span>
<span class="line"><span>no-useless-assignment</span></span>
<span class="line"><span>no-useless-backreference</span></span>
<span class="line"><span>require-atomic-updates</span></span>
<span class="line"><span>use-isnan</span></span>
<span class="line"><span>valid-typeof</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div></details><details class="details custom-block"><summary>建议</summary><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>accessor-pairs</span></span>
<span class="line"><span>arrow-body-style</span></span>
<span class="line"><span>block-scoped-var</span></span>
<span class="line"><span>camelcase</span></span>
<span class="line"><span>capitalized-comments</span></span>
<span class="line"><span>class-methods-use-this</span></span>
<span class="line"><span>complexity</span></span>
<span class="line"><span>consistent-return</span></span>
<span class="line"><span>consistent-this</span></span>
<span class="line"><span>curly</span></span>
<span class="line"><span>default-case</span></span>
<span class="line"><span>default-case-last</span></span>
<span class="line"><span>default-param-last</span></span>
<span class="line"><span>dot-notation</span></span>
<span class="line"><span>eqeqeq</span></span>
<span class="line"><span>func-name-matching</span></span>
<span class="line"><span>func-names</span></span>
<span class="line"><span>func-style</span></span>
<span class="line"><span>grouped-accessor-pairs</span></span>
<span class="line"><span>guard-for-in</span></span>
<span class="line"><span>id-denylist</span></span>
<span class="line"><span>id-length</span></span>
<span class="line"><span>id-match</span></span>
<span class="line"><span>init-declarations</span></span>
<span class="line"><span>logical-assignment-operators</span></span>
<span class="line"><span>max-classes-per-file</span></span>
<span class="line"><span>max-depth</span></span>
<span class="line"><span>max-lines</span></span>
<span class="line"><span>max-lines-per-function</span></span>
<span class="line"><span>max-nested-callbacks</span></span>
<span class="line"><span>max-params</span></span>
<span class="line"><span>max-statements</span></span>
<span class="line"><span>new-cap</span></span>
<span class="line"><span>no-alert</span></span>
<span class="line"><span>no-array-constructor</span></span>
<span class="line"><span>no-bitwise</span></span>
<span class="line"><span>no-caller</span></span>
<span class="line"><span>no-case-declarations</span></span>
<span class="line"><span>no-console</span></span>
<span class="line"><span>no-continue</span></span>
<span class="line"><span>no-delete-var</span></span>
<span class="line"><span>no-div-regex</span></span>
<span class="line"><span>no-else-return</span></span>
<span class="line"><span>no-empty</span></span>
<span class="line"><span>no-empty-function</span></span>
<span class="line"><span>no-empty-static-block</span></span>
<span class="line"><span>no-eq-null</span></span>
<span class="line"><span>no-eval</span></span>
<span class="line"><span>no-extend-native</span></span>
<span class="line"><span>no-extra-bind</span></span>
<span class="line"><span>no-extra-boolean-cast</span></span>
<span class="line"><span>no-extra-label</span></span>
<span class="line"><span>no-global-assign</span></span>
<span class="line"><span>no-implicit-coercion</span></span>
<span class="line"><span>no-implicit-globals</span></span>
<span class="line"><span>no-implied-eval</span></span>
<span class="line"><span>no-inline-comments</span></span>
<span class="line"><span>no-invalid-this</span></span>
<span class="line"><span>no-iterator</span></span>
<span class="line"><span>no-label-var</span></span>
<span class="line"><span>no-labels</span></span>
<span class="line"><span>no-lone-blocks</span></span>
<span class="line"><span>no-lonely-if</span></span>
<span class="line"><span>no-loop-func</span></span>
<span class="line"><span>no-magic-numbers</span></span>
<span class="line"><span>no-multi-assign</span></span>
<span class="line"><span>no-multi-str</span></span>
<span class="line"><span>no-negated-condition</span></span>
<span class="line"><span>no-nested-ternary</span></span>
<span class="line"><span>no-new</span></span>
<span class="line"><span>no-new-func</span></span>
<span class="line"><span>no-new-wrappers</span></span>
<span class="line"><span>no-nonoctal-decimal-escape</span></span>
<span class="line"><span>no-object-constructor</span></span>
<span class="line"><span>no-octal</span></span>
<span class="line"><span>no-octal-escape</span></span>
<span class="line"><span>no-param-reassign</span></span>
<span class="line"><span>no-plusplus</span></span>
<span class="line"><span>no-proto</span></span>
<span class="line"><span>no-redeclare</span></span>
<span class="line"><span>no-regex-spaces</span></span>
<span class="line"><span>no-restricted-exports</span></span>
<span class="line"><span>no-restricted-globals</span></span>
<span class="line"><span>no-restricted-imports</span></span>
<span class="line"><span>no-restricted-properties</span></span>
<span class="line"><span>no-restricted-syntax</span></span>
<span class="line"><span>no-return-assign</span></span>
<span class="line"><span>no-script-url</span></span>
<span class="line"><span>no-sequences</span></span>
<span class="line"><span>no-shadow</span></span>
<span class="line"><span>no-shadow-restricted-names</span></span>
<span class="line"><span>no-ternary</span></span>
<span class="line"><span>no-throw-literal</span></span>
<span class="line"><span>no-undef-init</span></span>
<span class="line"><span>no-undefined</span></span>
<span class="line"><span>no-underscore-dangle</span></span>
<span class="line"><span>no-unneeded-ternary</span></span>
<span class="line"><span>no-unused-expressions</span></span>
<span class="line"><span>no-unused-labels</span></span>
<span class="line"><span>no-useless-call</span></span>
<span class="line"><span>no-useless-catch</span></span>
<span class="line"><span>no-useless-computed-key</span></span>
<span class="line"><span>no-useless-concat</span></span>
<span class="line"><span>no-useless-constructor</span></span>
<span class="line"><span>no-useless-escape</span></span>
<span class="line"><span>no-useless-rename</span></span>
<span class="line"><span>no-useless-return</span></span>
<span class="line"><span>no-var</span></span>
<span class="line"><span>no-void</span></span>
<span class="line"><span>no-warning-comments</span></span>
<span class="line"><span>no-with</span></span>
<span class="line"><span>object-shorthand</span></span>
<span class="line"><span>one-var</span></span>
<span class="line"><span>operator-assignment</span></span>
<span class="line"><span>prefer-arrow-callback</span></span>
<span class="line"><span>prefer-const</span></span>
<span class="line"><span>prefer-destructuring</span></span>
<span class="line"><span>prefer-exponentiation-operator</span></span>
<span class="line"><span>prefer-named-capture-group</span></span>
<span class="line"><span>prefer-numeric-literals</span></span>
<span class="line"><span>prefer-object-has-own</span></span>
<span class="line"><span>prefer-object-spread</span></span>
<span class="line"><span>prefer-promise-reject-errors</span></span>
<span class="line"><span>prefer-regex-literals</span></span>
<span class="line"><span>prefer-rest-params</span></span>
<span class="line"><span>prefer-spread</span></span>
<span class="line"><span>prefer-template</span></span>
<span class="line"><span>radix</span></span>
<span class="line"><span>require-await</span></span>
<span class="line"><span>require-unicode-regexp</span></span>
<span class="line"><span>require-yield</span></span>
<span class="line"><span>sort-imports</span></span>
<span class="line"><span>sort-keys</span></span>
<span class="line"><span>sort-vars</span></span>
<span class="line"><span>strict</span></span>
<span class="line"><span>symbol-description</span></span>
<span class="line"><span>vars-on-top</span></span>
<span class="line"><span>yoda</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br></div></div></details>`,17),i=[l];function r(c,t,b,u,o,m){return a(),n("div",null,i)}const k=s(e,[["render",r]]);export{d as __pageData,k as default};
