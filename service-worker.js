if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,r,c)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const a={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return d;case"module":return a;default:return e(i)}}))).then((e=>{const i=c(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-77119501"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/10/10/hello-world/index.html",revision:"0d20110dcd817e6b86ad70810eaf3f3c"},{url:"2021/10/10/我的第一篇文章/index.html",revision:"608d1390101cbc7ef7e7a387f12bf1d6"},{url:"2021/10/12/markdown速成学习之路/index.html",revision:"71e8b66179b870837fcf06bf8f15f92f"},{url:"2021/10/14/Java学习路线/index.html",revision:"27c00c2d7597315f8de027ed6382a9c2"},{url:"2021/10/22/单片机学习笔记/index.html",revision:"6cbf2d883be1ef19c1a69c7eb9f32bcd"},{url:"2021/11/01/PLC1200学习/index.html",revision:"d142237141a24b9a2f187edb63f2ce64"},{url:"about/index.html",revision:"c7c5a2e4ee68e84fdda67c42334939c9"},{url:"archives/2021/10/index.html",revision:"78aeab89ab4e704607d73afe7481202c"},{url:"archives/2021/11/index.html",revision:"0fc992ebe7307a2c8bcd38eeebeedfd2"},{url:"archives/2021/index.html",revision:"a4554f889402951f2c3a58f1c671ab7e"},{url:"archives/index.html",revision:"c1a447dd2e21e9931b72a10c475cae89"},{url:"artitalk/index.html",revision:"a2e6a21999863738e6893cce2772c3ed"},{url:"bangumis/index.html",revision:"25c1fb9d16eb0798df64d812dd5211f1"},{url:"books/index.html",revision:"f0fbbbe448a636912ad2651fc2229d48"},{url:"comments/index.html",revision:"18d8122b2ceb1b024dddd74665091266"},{url:"css/index.css",revision:"297025d93dad950d9d481956651680d3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"games/index.html",revision:"9a9a7744e881006c26d416ba9500af41"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/qrcode.png",revision:"5f47997adfc90629bb8d544d583d8fe1"},{url:"img/屏幕截图 2021-10-14 170505.jpg",revision:"c1b233990bfc2989b57c3d50864685dc"},{url:"index.html",revision:"a7efb734fb85047e100b58f1314cbd37"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"b8176c58e1ec7b72a9aafb0898c6c695"},{url:"movies/index.html",revision:"d68b85fcdaafaa480df6d0e537e42524"},{url:"music/index-1.html",revision:"5ac282db2f7928abae8a31ddb3d4aec0"},{url:"music/index.html",revision:"e964b61d4d02161bf6adfb1bc220bf49"},{url:"tags/Android/index.html",revision:"558038f54fa0d825c3c6506abea7d485"},{url:"tags/index.html",revision:"b06244179b016db725fd3a5192eb1cea"},{url:"tags/学习/index.html",revision:"6a98958621d165da2bef1875d0e54054"},{url:"tags/学习心得/index.html",revision:"ff6a360665ff753dcbd5609bfa1ee4a1"},{url:"tags/学习路线/index.html",revision:"1c803451d2698c082c0a05e08ac573e8"},{url:"tags/教程/index.html",revision:"c458b62a2a579aec692780a7ebcbb07d"},{url:"tags/语言/index.html",revision:"895b1c1d5e644d1780414f94ddf901fd"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
