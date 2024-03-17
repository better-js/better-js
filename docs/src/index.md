---
layout: home

hero:
  name: "Code Better"
  text: "A knowledge base"
  # tagline: Coding comes from love, so life is wonderful.
  image:
    src: /logo/code.svg
    alt: VitePress
  actions:
    - theme: brand
      text: 快速开始
      link: /our-team
    - theme: alt
      text: 代码案例
      link: /our-team

features:
  - icon: 
      src: /images/concentration.svg
    title: 保持专注
    details: focus
  - icon:
      src: /images/accumulate.svg
    title: 勤于积累
    details: accumulate
  - icon:
      src: /images/share.svg
    title: 乐于分享
    details: share

footer: true
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(
    315deg,
    #3b71f2 25%,
    #90c3f8
  );

  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #3b71f2 50%,
    #90c3f8 50%
  );
  --vp-home-hero-image-filter: blur(40px);
  /* 1.0.0-beta.7 及以前版本配色方案 */
  --vp-c-brand: var(--vp-c-green);
  --vp-c-brand-light: var(--vp-c-green-light);
  --vp-c-brand-lighter: var(--vp-c-green-lighter);
  --vp-c-brand-lightest: var(--vp-c-green-lightest);
  --vp-c-brand-dark: var(--vp-c-green-dark);
  --vp-c-brand-darker: var(--vp-c-green-darker);
  --vp-c-brand-darkest: var(--vp-c-green-darkest);
  --vp-c-brand-dimm-1: var(--vp-c-green-dimm-1);
  --vp-c-brand-dimm-2: var(--vp-c-green-dimm-2);
  --vp-c-brand-dimm-3: var(--vp-c-green-dimm-3);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>