if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-77119501"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/10/10/hello-world/index.html",revision:"050750b35eb0de9d05684c6229415e7d"},{url:"2021/10/10/我的第一篇文章/index.html",revision:"3afd53557f7f80ab78b5aeeae1679424"},{url:"2021/10/12/markdown速成学习之路/index.html",revision:"77becbe88acad1d848822294fe9e17e0"},{url:"2021/10/14/Java学习路线/index.html",revision:"6c5086a1c6bacec86d37f94884f1f837"},{url:"2021/10/22/单片机学习笔记/index.html",revision:"6ff93a41024468720578699b4d646722"},{url:"2021/11/01/PLC1200学习/index.html",revision:"d3be03bc4bdbcd0417ed8da656e435a8"},{url:"about/index.html",revision:"abc256eb4696703d20d5f377c46d5cc9"},{url:"archives/2021/10/index.html",revision:"ad37f9906ec694a683c8f9124afde36a"},{url:"archives/2021/11/index.html",revision:"1b970084f75635e54e4504f5059e7ef2"},{url:"archives/2021/index.html",revision:"18838b07acceca2ae9a1e17c645cd3fa"},{url:"archives/index.html",revision:"341c079e27b239df4becf8080763a690"},{url:"artitalk/index.html",revision:"24f23e0d230b12cc661a6cb023d5b5dd"},{url:"bangumis/index.html",revision:"01fa382b3f94e46382a0971fc604f48b"},{url:"books/index.html",revision:"ceff5624f4d91bfb2a362c18f4f190c9"},{url:"comments/index.html",revision:"ad5eb93b06feb64a14ad2c4177f73b01"},{url:"css/custom.css",revision:"18cdc9368a734df6e14c5942a018d0eb"},{url:"css/index.css",revision:"8d6f43f9ca2099ed5ad91a9175becfdc"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/qrcode.png",revision:"5f47997adfc90629bb8d544d583d8fe1"},{url:"img/屏幕截图 2021-10-14 170505.jpg",revision:"c1b233990bfc2989b57c3d50864685dc"},{url:"index.html",revision:"8c509e25e70e898ac773f6aad54017e2"},{url:"js/main.js",revision:"b927f14192577cdad7741ccf3b3cef63"},{url:"js/search/algolia.js",revision:"9f72ef8b8fdda25a767a787cd4bf9121"},{url:"js/search/local-search.js",revision:"106895beff015bc24d36965440c0fed3"},{url:"js/tw_cn.js",revision:"0310e94ad716c794eadcb0fddfab0a2a"},{url:"js/utils.js",revision:"5ababdf577f19dad461230cd061df72a"},{url:"link/index.html",revision:"ab7abb44521adeb457b914ee1702595f"},{url:"movies/index.html",revision:"4cf4ea8fc58a5e586de5042abb50a7b2"},{url:"music/index-1.html",revision:"78042231d3704a418072b68b45e35693"},{url:"music/index.html",revision:"96b7080c2549f6362a9a2d42f4f0e500"},{url:"tags/Android/index.html",revision:"460371bd4bf73b2780a56844aecd6874"},{url:"tags/index.html",revision:"d84aaeffea758adfea7b6a2fceb67135"},{url:"tags/学习/index.html",revision:"5339c8e87e4e72e71a26deba799ce196"},{url:"tags/学习心得/index.html",revision:"a4fb5c13fe1e696b9ab6377537c82589"},{url:"tags/学习路线/index.html",revision:"a47f96ea3c957a06e96a76a2e891988f"},{url:"tags/教程/index.html",revision:"646b857ee2c4a8589ce131b1f7cd0a44"},{url:"tags/语言/index.html",revision:"30472b87d595144520b929a655d23aff"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
