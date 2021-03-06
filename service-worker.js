/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "58add7647b72155e4bbcdcabf95f354b"
  },
  {
    "url": "assets/css/0.styles.78b597e8.css",
    "revision": "2df3abdfb622a2e475c6786609a50a71"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eadc5e59.js",
    "revision": "826b853eb3c52978df61fc1b5517ffc0"
  },
  {
    "url": "assets/js/11.6e5ef857.js",
    "revision": "7a880107867b16b15ab3a4f105baffd5"
  },
  {
    "url": "assets/js/12.ef5f6f54.js",
    "revision": "1e2d89f7f65d319d172e540e294ea7f0"
  },
  {
    "url": "assets/js/13.43cf7937.js",
    "revision": "59f09bc58ae4b57470811b8984144599"
  },
  {
    "url": "assets/js/14.6fd858c4.js",
    "revision": "2f3996a73bb5846cf1157ccd9d509172"
  },
  {
    "url": "assets/js/15.1752e977.js",
    "revision": "e25bcbae18991b6273136f4f00e0607c"
  },
  {
    "url": "assets/js/16.6e4afb05.js",
    "revision": "13aebd55f0f5ec4377032d5e31362e30"
  },
  {
    "url": "assets/js/17.ec9d32a6.js",
    "revision": "46e233d3e6f9a13fb6eaaa8aa0287f39"
  },
  {
    "url": "assets/js/18.86056de6.js",
    "revision": "cc8126b4af1c1dc9158dced2427b4831"
  },
  {
    "url": "assets/js/19.774a15a4.js",
    "revision": "a3529e55b00dfeea571b35b84d353d96"
  },
  {
    "url": "assets/js/2.f52006e6.js",
    "revision": "9f6328df9cb3f0bbe0764fe7fd439b8f"
  },
  {
    "url": "assets/js/20.2124410a.js",
    "revision": "db7ee3185de43e5a81ddac487063a161"
  },
  {
    "url": "assets/js/21.f8e1f66a.js",
    "revision": "ebc1ae8cea982f0ea038f4f9c471f0d4"
  },
  {
    "url": "assets/js/22.d4ed47dd.js",
    "revision": "0555108908f48b92c4b87850f7671588"
  },
  {
    "url": "assets/js/23.9ba61864.js",
    "revision": "eccec1671ccf38a08401de05479d6d81"
  },
  {
    "url": "assets/js/24.067f4ffb.js",
    "revision": "7fbc8afaec3311aff2fcf5a3fcf076af"
  },
  {
    "url": "assets/js/25.d704516d.js",
    "revision": "75903773d6f203adbb3c0bbc34597c58"
  },
  {
    "url": "assets/js/26.b8cec795.js",
    "revision": "f63c9a24a14f3e8ffa7e9e2b0d708a36"
  },
  {
    "url": "assets/js/27.0130d873.js",
    "revision": "fda91e961bdcca7329ddbaf3a088a1b9"
  },
  {
    "url": "assets/js/28.a5270516.js",
    "revision": "427f8fedb85c0bea52b4637e242428d4"
  },
  {
    "url": "assets/js/29.f0675eff.js",
    "revision": "c7d3bdf5296f3c1f24d0eaa6b2745155"
  },
  {
    "url": "assets/js/3.33d3c687.js",
    "revision": "eccf420be06e93a4dca6cb3ecceb2296"
  },
  {
    "url": "assets/js/30.9dfe8a0b.js",
    "revision": "725d47136439b160449819c5d9f80c19"
  },
  {
    "url": "assets/js/31.2329b03e.js",
    "revision": "050928797de1232bb7a0f03ace06662a"
  },
  {
    "url": "assets/js/32.eb10bb50.js",
    "revision": "d9ac5086b01626bbb2534bfdcfa262ec"
  },
  {
    "url": "assets/js/33.f0bb9337.js",
    "revision": "ffe4f9e56e0d50dd8b73d7a7cc849e88"
  },
  {
    "url": "assets/js/34.95867e0c.js",
    "revision": "ded8a07f4528088424cfc8263f616581"
  },
  {
    "url": "assets/js/35.8b807770.js",
    "revision": "87170049e2b6b7b2635e346a2a911255"
  },
  {
    "url": "assets/js/36.6aaabdb8.js",
    "revision": "a1eebbc49559dd43b1d5f9ce1ce3f9df"
  },
  {
    "url": "assets/js/37.951e1ebd.js",
    "revision": "07614b05a01d20f5cd58775f4c0884e7"
  },
  {
    "url": "assets/js/38.1778ba82.js",
    "revision": "9fe2b670c64d8b5d7756c8a154cae402"
  },
  {
    "url": "assets/js/4.4aa5265b.js",
    "revision": "ebd22ca6a6edd2d1ece8e599e9f8a408"
  },
  {
    "url": "assets/js/5.240388ca.js",
    "revision": "7c2a8e7b79b4f7cb4a7b6ecf91f0edce"
  },
  {
    "url": "assets/js/6.52569a9e.js",
    "revision": "185cc0b56424bb390331b387cc54d712"
  },
  {
    "url": "assets/js/7.bbc30be2.js",
    "revision": "e70174232a220f9c625e0c8f64f7caeb"
  },
  {
    "url": "assets/js/8.bf89fb84.js",
    "revision": "5c6cf8041a9afb09e5ddbee381817b22"
  },
  {
    "url": "assets/js/9.f2262e66.js",
    "revision": "800c7cbabd1103ca9d78bf8d85e9214b"
  },
  {
    "url": "assets/js/app.9fc2ba18.js",
    "revision": "ae572280ef99c7a227f2d47054a3c148"
  },
  {
    "url": "blog.html",
    "revision": "e8f495adbc6e8985e98e5b454cc1e1a1"
  },
  {
    "url": "index.html",
    "revision": "37bae70bee8e9a06f7f2ddae07398694"
  },
  {
    "url": "js-playground.html",
    "revision": "07aa9c84040b037d8992dcc3a0a5f2a9"
  },
  {
    "url": "logo/antron-01.png",
    "revision": "df9cb0520df6a8d8b750f0e647c3f1f2"
  },
  {
    "url": "logo/breaktain-01.png",
    "revision": "e3447201f771a164829745f40966c34a"
  },
  {
    "url": "logo/catowlyinyang-01.jpg",
    "revision": "70a41a51578ec186c2c63b366cb7bf68"
  },
  {
    "url": "logo/Hxme-01.png",
    "revision": "cd23dde1dda6946202fe924405998ec0"
  },
  {
    "url": "logo/inspectus-01.png",
    "revision": "1855632b2395c34ea35651afe496a31c"
  },
  {
    "url": "logo/knifecode-01.png",
    "revision": "56a12b54936d74c67075ad2163888efe"
  },
  {
    "url": "logo/monday-01.png",
    "revision": "054cb8984fa6a8b00fe8cda8e6291f99"
  },
  {
    "url": "logo/oncom-01.png",
    "revision": "551c659807914f1e67582785c6f375c9"
  },
  {
    "url": "logo/Opek-01.png",
    "revision": "a50ba3e168c5c4ce10a9d920d849013b"
  },
  {
    "url": "logo/revisix-01.png",
    "revision": "0d8615ef59ac26fc5c3ed769e8d79473"
  },
  {
    "url": "logo/shi-awaru-01.png",
    "revision": "4c533f19faf335b9974364925daeb5ac"
  },
  {
    "url": "logo/SSS.png",
    "revision": "ceccf4868769b66686fbdee573a4a8d2"
  },
  {
    "url": "logo/Stail-01.png",
    "revision": "ebcd9203da1a057573a27b55717496c9"
  },
  {
    "url": "mini-project.html",
    "revision": "d59a3a67c07689738a6e948f195fa1f5"
  },
  {
    "url": "oojs.html",
    "revision": "cbf37a875470abb287cbc69c5e7e8e12"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "5218f2c7a6a39f0e4b26cf172d840aef"
  },
  {
    "url": "oojs/0/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/0/devdocs.png",
    "revision": "f193fbe3551136e34782dfbd6858e1a7"
  },
  {
    "url": "oojs/0/github.png",
    "revision": "991db5128e5df3be0d823e5b4d8a06f6"
  },
  {
    "url": "oojs/0/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/0/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/0/node.png",
    "revision": "74fa7768d8200bfce4d088603047ed12"
  },
  {
    "url": "oojs/0/safar-safarov-LKsHwgzyk7c-unsplash.jpg",
    "revision": "e9c26c462c68467bd703d4cc7bf6bee2"
  },
  {
    "url": "oojs/1-variable-pada-javascript.html",
    "revision": "263ed912e3ddfdd6fd36797e602aa25a"
  },
  {
    "url": "oojs/1/nodeindex.png",
    "revision": "31d18e997f5df12720d6b20281a548e3"
  },
  {
    "url": "oojs/1/pankaj-patel-4oAFasAPftg-unsplash.jpg",
    "revision": "a2a2a3fedb2aaba1c7705222beeeceaf"
  },
  {
    "url": "oojs/2-tipe-data-javascript.html",
    "revision": "1efb8eb3991aa11e79c2abbb6d056920"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "e73da1fc43c4c25be9a6daf109180241"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "b68bc7da8abf7bad8ef7f548c27fbc7a"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "686800975a93fc9343a63c9ef8773517"
  },
  {
    "url": "oojs/5/ferenc-almasi-EJSaEnVvZcg-unsplash.jpg",
    "revision": "909ea773718cbac3d183a780de43460c"
  },
  {
    "url": "oojs/5/paramarg.png",
    "revision": "6d149e8b12bddc6d038e7f9bed609ef4"
  },
  {
    "url": "oojs/6-struktur-kontrol-dasar-javascript.html",
    "revision": "07bce5d022c3c1c5fd5ef434bd0bd4fa"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "4fc859c5804a7a759145e41f30c9ebfd"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "e42a5d2625e6f769c8f3750ba7b3246c"
  },
  {
    "url": "oojs/8/chris-ried-ieic5Tq8YMk-unsplash.jpg",
    "revision": "93bb7bf89089bb255fa67456854e0db3"
  },
  {
    "url": "oojs/8/mafiduce.jpg",
    "revision": "51d4610ad29ceffa5c2e51672daac0fa"
  },
  {
    "url": "oojs/9-konsep-oop.html",
    "revision": "2dc0c893865683b2394f0f730aa8231b"
  },
  {
    "url": "playground.css",
    "revision": "6e9d33209025b836b6166624af0e9ddc"
  },
  {
    "url": "playground.js",
    "revision": "c50811fb7bb7d22c826fbf47d012a9a0"
  },
  {
    "url": "portfolio.html",
    "revision": "cc090dbce62d8b655cd0a0a4e3f6456e"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "07198d256c9a29519944b135436339f8"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "95cb187a67a49262633b91449141f2dc"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "0d3890639e000b3c15d1d39f49e310f2"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "ab9a6767477eef57d45ab982c4caa922"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
