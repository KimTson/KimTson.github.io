if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,r,a)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return d;case"module":return c;default:return e(i)}}))).then((e=>{const i=a(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-77119501"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/10/10/hello-world/index.html",revision:"aad26e9b32af4d0a3203e5e845bd4c18"},{url:"2021/10/10/我的第一篇文章/index.html",revision:"7e92624dfa34eb1657190a069a172f4d"},{url:"2021/10/12/markdown速成学习之路/index.html",revision:"dc492586b6198c6511f3332a8dacfeb3"},{url:"2021/10/14/Java学习路线/index.html",revision:"5428d1cc2c32dac3dc436a1c0647b719"},{url:"2021/10/22/单片机学习笔记/index.html",revision:"0ca302520287091c0c998ad076d90718"},{url:"2021/11/01/PLC1200学习/index.html",revision:"4bdff18f602ffb4a3fb594b0a75a0ab7"},{url:"about/index.html",revision:"bf315783b4ae0b8e0abbcafbffd36345"},{url:"archives/2021/10/index.html",revision:"c58fef49136a5a6feab154855073d2ac"},{url:"archives/2021/11/index.html",revision:"f7469bc24bd9a7f78a0b53ab8bc370c2"},{url:"archives/2021/index.html",revision:"6fa71947d2f4eb84e63b7b8c948b7d5b"},{url:"archives/index.html",revision:"0405b57228c3eb16d5f163361c40394f"},{url:"artitalk/index.html",revision:"b7c00396cb827d53c5b45b3f863b236f"},{url:"bangumis/index.html",revision:"98e05159aa9cd717db9a85e026587ebc"},{url:"books/index.html",revision:"8742b61a86110a48d969b8c1df6f3633"},{url:"comments/index.html",revision:"bfba91491885f0c0943ba93da9bbe479"},{url:"css/index.css",revision:"297025d93dad950d9d481956651680d3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"games/index.html",revision:"b76bb027a15195d5d051b908ac2da03c"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/qrcode.png",revision:"5f47997adfc90629bb8d544d583d8fe1"},{url:"img/屏幕截图 2021-10-14 170505.jpg",revision:"c1b233990bfc2989b57c3d50864685dc"},{url:"index.html",revision:"ba63146526bd860e6693cb0993bfc2b3"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"5bb694e63e70871b8c9dd18eefe19f23"},{url:"movies/index.html",revision:"fed1c4ae0e5afc9ebfbc389ede3de1df"},{url:"music/index-1.html",revision:"b68a64b393132e38cf91de0dcbaa5645"},{url:"music/index.html",revision:"11d5dafc705f1be38bf356b03e9ac74e"},{url:"tags/Android/index.html",revision:"76e5c4bc0c548e961e3a2a842f89f017"},{url:"tags/index.html",revision:"b7e0e45e63d8ceed6155b61dc8afa15b"},{url:"tags/学习/index.html",revision:"2bf373dc1189158181d0da8afd8ed40f"},{url:"tags/学习心得/index.html",revision:"af43bba107c5fb0c1faaf4a7044f9ed8"},{url:"tags/学习路线/index.html",revision:"5787124aec49abd3c113ea537235ce21"},{url:"tags/教程/index.html",revision:"44720be33aba4e0254650ce5e2b2fd33"},{url:"tags/语言/index.html",revision:"df28a10e362fede7cad1d18ebef1c074"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
