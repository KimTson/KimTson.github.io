if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,d,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-77119501"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/10/10/hello-world/index.html",revision:"a067c3b3a9a66da3474be9fb363d119e"},{url:"2021/10/10/我的第一篇文章/index.html",revision:"72f136f7e655717e478e55823229afb7"},{url:"2021/10/12/markdown速成学习之路/index.html",revision:"521bf658c40c7339a7ddfaff1e242a0a"},{url:"2021/10/14/Java学习路线/index.html",revision:"981274303314af22cb528fbb51afc17a"},{url:"2021/10/22/单片机学习笔记/index.html",revision:"447b74a00e226367176169be9f1332b7"},{url:"2021/11/01/PLC1200学习/index.html",revision:"e1af9e0f05aca9681cabace190e2e2f9"},{url:"about/index.html",revision:"a71816e824bda7cedfed21f51fdce188"},{url:"archives/2021/10/index.html",revision:"324814e11222334012dafd32e9ef518a"},{url:"archives/2021/11/index.html",revision:"27167affd43d747c75c1f34f98383d62"},{url:"archives/2021/index.html",revision:"22138332d4619cc5313e8f782945ab97"},{url:"archives/index.html",revision:"3b0289caf883b30efd9ffde2cb7d163d"},{url:"artitalk/index.html",revision:"1a5a1941d899bc5cf3888147c2911381"},{url:"bangumis/index.html",revision:"bc06dc11db63137a7a2fac4c75ceb93e"},{url:"books/index.html",revision:"81c23f0c8ef6337a399fcfa0b308f2fc"},{url:"comments/index.html",revision:"920128a9bdf4694e0938554d7f1d7c05"},{url:"css/comment.css",revision:"ae69a9006cadf1c3fe07adb6926ee6eb"},{url:"css/custom.css",revision:"18cdc9368a734df6e14c5942a018d0eb"},{url:"css/home.css",revision:"197441807c1e7eb9b3da533957be43ff"},{url:"css/index.css",revision:"8d6f43f9ca2099ed5ad91a9175becfdc"},{url:"css/name.css",revision:"1506e34fbde8b403a1e2152affcaaceb"},{url:"css/type.css",revision:"63ec5213cebe8d167a14fe6682c2fa8b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/qrcode.png",revision:"5f47997adfc90629bb8d544d583d8fe1"},{url:"img/屏幕截图 2021-10-14 170505.jpg",revision:"c1b233990bfc2989b57c3d50864685dc"},{url:"index.html",revision:"2eff3673e5f8e372be76cee8b8e20a05"},{url:"js/chocolate.js",revision:"fdd54975d977907de50d48729819d063"},{url:"js/main.js",revision:"b927f14192577cdad7741ccf3b3cef63"},{url:"js/meng.js",revision:"20e1ec3c9542c72cece3fe1d1ff5432f"},{url:"js/runtime.js",revision:"1c1fca8c26d845f497e3d872ae859b3d"},{url:"js/search/algolia.js",revision:"9f72ef8b8fdda25a767a787cd4bf9121"},{url:"js/search/local-search.js",revision:"106895beff015bc24d36965440c0fed3"},{url:"js/tw_cn.js",revision:"0310e94ad716c794eadcb0fddfab0a2a"},{url:"js/utils.js",revision:"5ababdf577f19dad461230cd061df72a"},{url:"js/wow_init.js",revision:"9e89ad02053483defdf93c0c63a6f63c"},{url:"link/index.html",revision:"a0594b3ca3c390e9019aa47170afe783"},{url:"movies/index.html",revision:"f55ce55819fc6219317021291134c991"},{url:"music/index-1.html",revision:"8d74d37b0367ee4d7f670350ce80b641"},{url:"music/index.html",revision:"5f511e1d50d717dc5a890ac49432d6c9"},{url:"tags/Android/index.html",revision:"65d2faff5f5544edceab61ef3e6ed17b"},{url:"tags/index.html",revision:"bbac901ff80b08b8dbcda4e65563aec7"},{url:"tags/学习/index.html",revision:"bd2420735d42b8a784f1957fd50f4411"},{url:"tags/学习心得/index.html",revision:"a7d5bbf5e6fa5a27530537287eb3c6b6"},{url:"tags/学习路线/index.html",revision:"d9418d356ea7c06dd3fd14ce87d0a012"},{url:"tags/教程/index.html",revision:"d4b13667075b6ffbb4120c56753f4b11"},{url:"tags/语言/index.html",revision:"d9e8c00998694ff91f877857f199d081"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
