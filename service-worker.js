if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,r,a)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return d;case"module":return s;default:return e(i)}}))).then((e=>{const i=a(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-77119501"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/10/10/hello-world/index.html",revision:"7cd5235c527d0871f67a634953f8b530"},{url:"2021/10/10/我的第一篇文章/index.html",revision:"3ffb89225f553240d22a6280d3a40858"},{url:"2021/10/12/markdown速成学习之路/index.html",revision:"96296085d8ebf6bda726d2c6708f7deb"},{url:"2021/10/14/Java学习路线/index.html",revision:"ef9bfe46ec7f6ab7f156d704a2895e1e"},{url:"2021/10/22/单片机学习笔记/index.html",revision:"a2c1fb2ebba1eae0723682c29d8986db"},{url:"2021/11/01/PLC1200学习/index.html",revision:"d39b95f611c4e2c12ff911cc486e11df"},{url:"about/index.html",revision:"cef8352a2952dd237d39ca47f068ea4e"},{url:"archives/2021/10/index.html",revision:"3b467c2ff0837683015746d6052db8ac"},{url:"archives/2021/11/index.html",revision:"94a77e34d43a0197731242d792ea213f"},{url:"archives/2021/index.html",revision:"2f3390bd7592af1b70da4a0e19911d21"},{url:"archives/index.html",revision:"c2700cbf4d4847ff6f398887bf557699"},{url:"artitalk/index.html",revision:"83f31072cfd9a97ee19d409d6cdd631e"},{url:"bangumis/index.html",revision:"51b521c9aa328c38a8e196fbd4902e52"},{url:"books/index.html",revision:"fc6fd16b0ecd86c80d7f1325b6d277eb"},{url:"comments/index.html",revision:"d790f15453680d7311e08d44d76a31ec"},{url:"css/index.css",revision:"297025d93dad950d9d481956651680d3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"games/index.html",revision:"5521e8bc6ca6565f2dcd3a5ff1a4fae7"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/qrcode.png",revision:"5f47997adfc90629bb8d544d583d8fe1"},{url:"img/屏幕截图 2021-10-14 170505.jpg",revision:"c1b233990bfc2989b57c3d50864685dc"},{url:"index.html",revision:"6f736795dff6908e782316135780b7aa"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"7d9e0182d6c8840bc1aaa6dca53b6db7"},{url:"movies/index.html",revision:"73e1dadd553ff314664a6ba5da6473ee"},{url:"music/index-1.html",revision:"8e801a44097bdab09af6fdf2d52acbd9"},{url:"music/index.html",revision:"09bd0c21a05c57e32e9f699e374fefb5"},{url:"tags/Android/index.html",revision:"fd9b992c8096f73f14cc03038783bde0"},{url:"tags/index.html",revision:"4c05980cb50f7289adeb1b61f29aba3b"},{url:"tags/学习/index.html",revision:"74fa34cf460656781db1b40eea6694ed"},{url:"tags/学习心得/index.html",revision:"992e2d95be6f301906dbfbcce3f5c87a"},{url:"tags/学习路线/index.html",revision:"035319de8a73325d4068a9c223b5191a"},{url:"tags/教程/index.html",revision:"aa321d1dda6e744a05c200cfef2c4675"},{url:"tags/语言/index.html",revision:"9f7274f9b4290cfe663f8a1d1dde51b7"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
