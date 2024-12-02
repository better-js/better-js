import{_ as e,c as o,o as i,V as d,al as c,am as t,an as a,ao as l}from"./chunks/framework.YnO4XY28.js";const P=JSON.parse('{"title":"Vue3简介","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue/index.md","filePath":"guide/vue/index.md","lastUpdated":1732023681000}'),p={name:"guide/vue/index.md"},s=d('<h1 id="vue3简介" tabindex="-1">Vue3简介 <a class="header-anchor" href="#vue3简介" aria-label="Permalink to &quot;Vue3简介&quot;">​</a></h1><p>2020年9月18日，Vue.js 发布 <code>3.0</code> 版本，代号：<code>One Piece</code>（海贼王）</p><p><a href="https://github.com/vuejs/core/releases/tag/v3.0.0" target="_blank" rel="noreferrer">https://github.com/vuejs/core/releases/tag/v3.0.0</a></p><h2 id="vue3的变化" tabindex="-1">Vue3的变化 <a class="header-anchor" href="#vue3的变化" aria-label="Permalink to &quot;Vue3的变化&quot;">​</a></h2><ul><li><p>同一元素上使用的<code>v-if</code>和<code>v-for</code>优先级已更改，但<strong>不推荐</strong>同时使用 <code>v-if</code> 和 <code>v-for</code>。</p></li><li><p>组件事件需要在<code>emits</code>选项中声明</p></li><li><p><code>destroyed</code> 生命周期选项被重命名为 <code>unmounted</code></p></li><li><p><code>beforeDestroy</code> 生命周期选项被重命名为 <code>beforeUnmount</code></p></li><li><p>自定义指令的API已更改为与组件生命周期一致</p></li><li><p>新增了三个组件：</p><ul><li><p><code>Fragment</code> 支持多个根节点</p></li><li><p><code>Suspense</code> 可以在组件渲染之前的等待时间显示指定内容</p></li><li><p><code>Teleport</code> 可以让子组件能够在视觉上跳出父组件(如父组件overflow:hidden)</p></li></ul></li><li><p>新增指令 <code>v-memo</code>，可以缓存 html 模板，比如 v-for 列表不会变化的就缓存，简单说就是用内存换时间。</p></li><li><p>用 new <code>Proxy</code> 代替 Object.defineProperty 重构了响应式系统，可以监听到数组下标变化，及对象新增属性，因为监听的不是对象属性，而是对象本身，还可拦截 apply、has 等13种方法</p></li><li><p>重构了虚拟 DOM，在编译时会将事件缓存、将 slot 编译为 lazy 函数、保存静态节点直接复用(静态提升)、以及添加静态标记、Diff 算法使用 最长递增子序列 优化了对比流程，使得虚拟 DOM 生成速度提升 <code>200%</code></p></li><li><p>支持在 <code>&lt;style&gt;&lt;/style&gt;</code> 里使用 <code>v-bind</code>，给 CSS 绑定 JS 变量(<code>color: v-bind(str)</code>)</p></li><li><p><span style="color:red;">新增 <code>Composition API(组合式api)</code> 可以更好的逻辑复用和代码组织</span>，同一功能的代码不至于像以前一样太分散，虽然 Vue2 中可以用 mixin 来实现复用代码，但也存在问题，比如方法或属性名会冲突，代码来源也不清楚等</p></li><li><p>全局函数 <code>set</code> 和 <code>delete</code> 以及实例方法 <code>$set</code> 和 <code>$delete</code>移除。基于代理的变化检测已经不再需要它们了</p></li><li><p>毕竟 Vue3 是用 <code>TS</code> 写的，所以对 <code>TS</code> 的支持度更好</p></li><li><p>Vue3 不兼容 <code>IE11</code></p></li><li><p><code>$on</code>，<code>$off</code> 和 <code>$once</code> 实例方法已被移除，组件实例不再实现事件触发接口。</p></li></ul><h2 id="optionsapi-与-compositionapi" tabindex="-1">OptionsAPI 与 CompositionAPI <a class="header-anchor" href="#optionsapi-与-compositionapi" aria-label="Permalink to &quot;OptionsAPI 与 CompositionAPI&quot;">​</a></h2><ul><li><code>Vue2</code>的<code>API</code>设计是<code>Options</code>（配置）风格的。</li><li><code>Vue3</code>的<code>API</code>设计是<code>Composition</code>（组合）风格的。</li></ul><h3 id="options-api-的弊端" tabindex="-1">Options API 的弊端 <a class="header-anchor" href="#options-api-的弊端" aria-label="Permalink to &quot;Options API 的弊端&quot;">​</a></h3><p><code>Options</code>类型的 <code>API</code>，数据、方法、计算属性等，是分散在：<code>data</code>、<code>methods</code>、<code>computed</code>中的，若想新增或者修改一个需求，就需要分别修改：<code>data</code>、<code>methods</code>、<code>computed</code>，不便于维护和复用。</p><div style="display:flex;"><img src="'+c+'" alt="1.gif" style="zoom:60%;border-radius:20px;margin-right:10px;"><img src="'+t+'" alt="2.gif" style="zoom:60%;border-radius:20px;"></div><h3 id="composition-api-的优势" tabindex="-1">Composition API 的优势 <a class="header-anchor" href="#composition-api-的优势" aria-label="Permalink to &quot;Composition API 的优势&quot;">​</a></h3><p>可以用函数的方式，更加优雅的组织代码，让相关功能的代码更加有序的组织在一起。</p><div style="display:flex;"><img src="'+a+'" alt="3.gif" style="height:300px;border-radius:10px;margin-right:10px;"><img src="'+l+'" alt="4.gif" style="height:300px;border-radius:10px;"></div>',13),r=[s];function n(u,m,h,_,f,g){return i(),o("div",null,r)}const x=e(p,[["render",n]]);export{P as __pageData,x as default};
