if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,c,r)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const a={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return d;case"module":return a;default:return e(i)}}))).then((e=>{const i=r(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-77119501"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/10/10/hello-world/index.html",revision:"17844408ee89df45798a22e9e3009650"},{url:"2021/10/10/我的第一篇文章/index.html",revision:"3e810311d89b146c4c486af58a9c71e3"},{url:"2021/10/12/markdown速成学习之路/index.html",revision:"b39492fc6817267840e1661fc9f393db"},{url:"2021/10/14/Java学习路线/index.html",revision:"1a3473c913f2756a8d9ac771e6f31c2f"},{url:"2021/10/22/单片机学习笔记/index.html",revision:"197e27c19dd786faa876b8bece71326b"},{url:"2021/11/01/PLC1200学习/index.html",revision:"eb719048adf43e092afe04ecddae3aff"},{url:"about/index.html",revision:"d3ded07f86774ee91cd4030365288b2e"},{url:"archives/2021/10/index.html",revision:"fa410104dbac3e01220577191b3c679c"},{url:"archives/2021/11/index.html",revision:"4d464c01a496ca6f36c360aec456f07b"},{url:"archives/2021/index.html",revision:"79f84709c8ad3a1b096fda7d3ffa7ec6"},{url:"archives/index.html",revision:"3e300b20df6187ca0943fa9ef8c827ba"},{url:"artitalk/index.html",revision:"cdab3c14787aefa844928998ba8bcab6"},{url:"bangumis/index.html",revision:"1728bcf7e3c3de2191bd5beccdca5df5"},{url:"books/index.html",revision:"74d0edecdbb2cee22f93be94c9e8ca23"},{url:"comments/index.html",revision:"d02ead71f1fb645552a495657c7a8f4b"},{url:"css/index.css",revision:"297025d93dad950d9d481956651680d3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"games/index.html",revision:"4ccfbd5db4061e38e3dbd7fe98e28aea"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/qrcode.png",revision:"5f47997adfc90629bb8d544d583d8fe1"},{url:"img/屏幕截图 2021-10-14 170505.jpg",revision:"c1b233990bfc2989b57c3d50864685dc"},{url:"index.html",revision:"76a950be261988ed6385491ee6c36c01"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"afd1885258dc6fa6ee4d3fcc1b7acc24"},{url:"movies/index.html",revision:"ad6fcb8aaac7ba8a3d2c11bce15987cc"},{url:"music/index-1.html",revision:"d108b170879bc9900c9c34abda7b4e5d"},{url:"music/index.html",revision:"1432c3eb0efc4b2baa9a09d8dbcc0541"},{url:"tags/Android/index.html",revision:"d98fe3b56d46a9394623f0242b9e63a2"},{url:"tags/index.html",revision:"573c2328d421bef9ae3688efe860645c"},{url:"tags/学习/index.html",revision:"c3c4a75cd604c856de0990aa71e8ad6d"},{url:"tags/学习心得/index.html",revision:"b3e2261d5470d527ce590e7e5a62ec84"},{url:"tags/学习路线/index.html",revision:"586a766ee870b120df174d84156c34be"},{url:"tags/教程/index.html",revision:"072cfa0c9c944450fa160ab80cdd29b3"},{url:"tags/语言/index.html",revision:"be5603cf886994504987466ba8ab6c27"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
