if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,d,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return r;case"module":return a;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-77119501"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/10/10/hello-world/index.html",revision:"0d20110dcd817e6b86ad70810eaf3f3c"},{url:"2021/10/10/我的第一篇文章/index.html",revision:"608d1390101cbc7ef7e7a387f12bf1d6"},{url:"2021/10/12/markdown速成学习之路/index.html",revision:"71e8b66179b870837fcf06bf8f15f92f"},{url:"2021/10/14/Java学习路线/index.html",revision:"27c00c2d7597315f8de027ed6382a9c2"},{url:"2021/10/22/单片机学习笔记/index.html",revision:"6cbf2d883be1ef19c1a69c7eb9f32bcd"},{url:"2021/11/01/PLC1200学习/index.html",revision:"d142237141a24b9a2f187edb63f2ce64"},{url:"about/index.html",revision:"2c857edffbafa96876b679aacafb0bc9"},{url:"archives/2021/10/index.html",revision:"c115bf7f7e6cbb79eed075ef1a5d5053"},{url:"archives/2021/11/index.html",revision:"275b5b6f73b1fec873b627bf23495835"},{url:"archives/2021/index.html",revision:"de08232db5407d29701f273e2901273c"},{url:"archives/index.html",revision:"f667beda4983767a3caad197e34a48d3"},{url:"artitalk/index.html",revision:"c4397db23ec57bb2e23c509bffddbb98"},{url:"bangumis/index.html",revision:"5aa6678652c26c6b1b42a55cd3d7f6f6"},{url:"books/index.html",revision:"7dc936af3245ccfbc32904a51587057c"},{url:"comments/index.html",revision:"cc06f1da54612e7be75b065bf421a163"},{url:"css/index.css",revision:"297025d93dad950d9d481956651680d3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"games/index.html",revision:"cde614fb9b4d4b3c30b6efb677368d81"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/qrcode.png",revision:"5f47997adfc90629bb8d544d583d8fe1"},{url:"img/屏幕截图 2021-10-14 170505.jpg",revision:"c1b233990bfc2989b57c3d50864685dc"},{url:"index.html",revision:"2245b58843492d5156f35c6a3f70c6da"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"5aa0e4735613c528fccf507242f255b8"},{url:"movies/index.html",revision:"5a8e7f581a813e810a6ce66b43e68ba9"},{url:"music/index-1.html",revision:"0e2e2a51f822fa13ed5f7c1a55ac26ae"},{url:"music/index.html",revision:"7c58f48d33c728bc24cc0ab3487de19f"},{url:"tags/Android/index.html",revision:"c11276e462a40ab63c44c0842d49833e"},{url:"tags/index.html",revision:"75c723c2ad78aeb70fbda6497ef47af4"},{url:"tags/学习/index.html",revision:"a21149e5f811418fabea0c555af8b245"},{url:"tags/学习心得/index.html",revision:"21069129a257beafb1bcf7905cca4ae6"},{url:"tags/学习路线/index.html",revision:"86e767e4f3ec58edebeee6d953b1511d"},{url:"tags/教程/index.html",revision:"0ab22fcebe804aa5b221a91a56cbd8b5"},{url:"tags/语言/index.html",revision:"eaa5abafd279887a558ed9ea1521a5e7"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
