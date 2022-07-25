/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/python基础之format/index.html","434f30813579cbafb5c8455c0f69442d"],["/2022/05/22/python基础之文件操作/index.html","37947a0f09efc5edc4b4eb87f125fa7b"],["/2022/05/26/MYSQL数据库基础-一-创建数据库/index.html","53b2c39f2ee4d1f2ad28e650b8267bf5"],["/2022/05/26/MYSQL数据库基础-七-数据表的查询四-聚集函数查询/index.html","d4959b97e3b4539b73cd4107f14c96ba"],["/2022/05/26/MYSQL数据库基础-三-数据数据增、删、改/index.html","7e6780c04465222157b1078aa98b8c28"],["/2022/05/26/MYSQL数据库基础-二-数据表结构操作/index.html","b5e5fa681da32d2762e7d4769684ac34"],["/2022/05/26/MYSQL数据库基础-五-数据表的查询二-多表链接查询/index.html","eedce3da9abddba624338d69f50d1563"],["/2022/05/26/MYSQL数据库基础-八-数据库视图/index.html","7184b56fbc0c7a204e183da05395210d"],["/2022/05/26/MYSQL数据库基础-六-数据表的查询三-嵌套查询/index.html","e2a5141838dad381c7d09416c34ddbf2"],["/2022/05/26/MYSQL数据库基础-四-数据表的查询一-简单查询/index.html","7d16e8c95bd358449f7a1fc1718d24da"],["/2022/06/28/python基础之字符串操作/index.html","9cb10fce0c99d2a6e7de2a2de2f94df9"],["/2022/06/28/python基础之常用数据结构/index.html","ad89434e4b27e0e470ac09a43f80b3ce"],["/2022/06/28/python基础之编码与进制/index.html","cf938946734deb7e922af19b2293d50c"],["/2022/07/01/MYSQL数据库基础-九-数据库索引/index.html","f67dcd89ba508566b5bda693fb3e214f"],["/2022/07/14/SQL注入/index.html","2fb2d8120ad77171520aa31980798a85"],["/2022/07/14/XSS跨站脚本攻击/1654952689653.png","102036b924cd32d3df11ddc4acfaf79f"],["/2022/07/14/XSS跨站脚本攻击/1654952754171.png","a709d7a7427117f49e911b8f62ca8eab"],["/2022/07/14/XSS跨站脚本攻击/1654952864134.png","66b321df687359a791e366204cbdf392"],["/2022/07/14/XSS跨站脚本攻击/1654955201315.png","072d544c65c8efec3948c03bd64f3215"],["/2022/07/14/XSS跨站脚本攻击/1654955508113.png","2ec1f6e1bfc7bd11fa86fab8bd9da6f7"],["/2022/07/14/XSS跨站脚本攻击/1654956988932.png","56037ffeb0789d2f87579fadd8b85d16"],["/2022/07/14/XSS跨站脚本攻击/1655125274005.png","45956ce8f353f973e3ce0236b38483a9"],["/2022/07/14/XSS跨站脚本攻击/1655130071557.png","7151a82cb6da192ad78968716bf4bb5e"],["/2022/07/14/XSS跨站脚本攻击/1655130528394.png","f2fd46b3939cdcd97fa6ff13ec36eb59"],["/2022/07/14/XSS跨站脚本攻击/1655131009417.png","51874fc5c77858f8469d5459be952e6c"],["/2022/07/14/XSS跨站脚本攻击/1655132651419.png","242f215f6bc61a7fd632143f62b6faf3"],["/2022/07/14/XSS跨站脚本攻击/1655133020288.png","097d8ccbece9e51104277a7f973c9532"],["/2022/07/14/XSS跨站脚本攻击/1655133898020.png","1c3f1eadfa09de1fecb95b8fedd8e923"],["/2022/07/14/XSS跨站脚本攻击/1655134242894.png","2bfa70c8d389cfad93c18bc2b47b87a2"],["/2022/07/14/XSS跨站脚本攻击/1655135160931.png","46792470f092bf07d960d81a15633ac2"],["/2022/07/14/XSS跨站脚本攻击/1655185794742.png","77bb0f6708fa47eaa5906e98fb35c2de"],["/2022/07/14/XSS跨站脚本攻击/1655207843072.png","df1f06472e551c9de6dffecf89a279fd"],["/2022/07/14/XSS跨站脚本攻击/1655207923964.png","ee14ff7901ed1484ba7736c00194ab87"],["/2022/07/14/XSS跨站脚本攻击/1655208174637.png","ee80aaf4b1e24b3561d85bef71eb4ec7"],["/2022/07/14/XSS跨站脚本攻击/1655208495775.png","9ec9c3de1af24494411292b196095f05"],["/2022/07/14/XSS跨站脚本攻击/1655208793078.png","0cf81c65e61e5c51c31a763290bb285b"],["/2022/07/14/XSS跨站脚本攻击/1655209246258.png","8f8038cf8bdb41de1b7a2cb3c29cdae1"],["/2022/07/14/XSS跨站脚本攻击/1655210758111.png","d295d74d4b2cf453da2892e2594589ae"],["/2022/07/14/XSS跨站脚本攻击/1655212429640.png","09bc66c063d019ec4aa70d1578337764"],["/2022/07/14/XSS跨站脚本攻击/index.html","83cdf93b5b74dabd3669e8a947efd92b"],["/2022/07/14/文件上传漏洞/1654078504278.png","3863f7892544bee05b44091e6d09cc77"],["/2022/07/14/文件上传漏洞/1654078710042.png","895facb968f191cf22756991815029dd"],["/2022/07/14/文件上传漏洞/1654078895575.png","7cf45a40d46a1a34d7abbd5eea2a2f36"],["/2022/07/14/文件上传漏洞/1654079426662.png","731923f35915bfed5e06717124740b97"],["/2022/07/14/文件上传漏洞/1654079931660.png","92269fd18bf5434fbedaaf61db579b9c"],["/2022/07/14/文件上传漏洞/1654079985977.png","e044662dee88eff9be7abdca96b35faf"],["/2022/07/14/文件上传漏洞/1654080064114.png","60050ef0172a9427c30a4c2d8cd3cbf6"],["/2022/07/14/文件上传漏洞/1654080089264.png","ab6c9d992693886b97b778b6e66e6880"],["/2022/07/14/文件上传漏洞/1654080246873.png","654dba28446596d81b7ebce386db5db4"],["/2022/07/14/文件上传漏洞/1654080482441.png","4332d9cd51f462b959937f13c3685291"],["/2022/07/14/文件上传漏洞/1654093689954.png","8278171433a1abc9579e43e24b7cc240"],["/2022/07/14/文件上传漏洞/1654094169130.png","6036583a05f82421f420c87ef7d177a1"],["/2022/07/14/文件上传漏洞/1654094399126.png","d01c88d399700cfbc2b4f08e37400b08"],["/2022/07/14/文件上传漏洞/1654094975312.png","8cbaf6d8d7a07566e36b479263020c52"],["/2022/07/14/文件上传漏洞/1654095196760.png","94e060e2fa15eb30844d6a171e98ac44"],["/2022/07/14/文件上传漏洞/1654096904053.png","4b8671f656daef516c426614c5b6fd4f"],["/2022/07/14/文件上传漏洞/1654096934870.png","dcc82b23d8a4163acdc4a4a01e49d27c"],["/2022/07/14/文件上传漏洞/1654097090794.png","da42ad66ca40a646681fe32be817c4bc"],["/2022/07/14/文件上传漏洞/1654148842727.png","faf0f5d008a5c5e3133c1a23fc4f6b71"],["/2022/07/14/文件上传漏洞/1654149912837.png","2e2da9dfa741762edf32981f28d573da"],["/2022/07/14/文件上传漏洞/1654150068373.png","332fe5733a6442b8f1f8b05cc7a0726d"],["/2022/07/14/文件上传漏洞/1654150305877.png","2340d66657a3db1848ea79db0bd82c07"],["/2022/07/14/文件上传漏洞/1654151486006.png","057c76a9def923ff4aa53fdc9ca9a372"],["/2022/07/14/文件上传漏洞/1654151583198.png","81cfbdf383c1167b57438ffffe0c0cb6"],["/2022/07/14/文件上传漏洞/1654151715919.png","58a710235d8ba1dd39d8636c8e1b0c32"],["/2022/07/14/文件上传漏洞/1654151991836.png","e40063c91b128ebee59e1f1525c40311"],["/2022/07/14/文件上传漏洞/1654152040991.png","856106e4317c325ea1db74a620cf9cf5"],["/2022/07/14/文件上传漏洞/1654152184415.png","cf10528ec085930ce2dbc13da24760b5"],["/2022/07/14/文件上传漏洞/1654152248919.png","3b6923d3bee60c204a4bbee4184e293d"],["/2022/07/14/文件上传漏洞/1654152624706.png","70a19475d4b65375e24edc59b761485b"],["/2022/07/14/文件上传漏洞/1654152706103.png","5e8ff2c8877b49f7cb9396718bea3c2a"],["/2022/07/14/文件上传漏洞/1654152775047.png","b3367910dc97130855ded66211c7cf7f"],["/2022/07/14/文件上传漏洞/1654152937357.png","12ccd52b4355abadd9a51d6e2cd89b45"],["/2022/07/14/文件上传漏洞/1654153198011.png","6e69cd1d5d07739f616725cc7a88123b"],["/2022/07/14/文件上传漏洞/1654153247599.png","645b3fbad1eb05771a6d775d4f49a003"],["/2022/07/14/文件上传漏洞/1654153332343.png","cb2ea2b49dd455dc2bbcc6a4afe45986"],["/2022/07/14/文件上传漏洞/1654153574559.png","5785c8b65462b43e4fae6172063ab75a"],["/2022/07/14/文件上传漏洞/1654153909578.png","d53e330425f668a2df29d555f7ffe6f8"],["/2022/07/14/文件上传漏洞/1654153938741.png","1fb1ef2325ee2a657e13fb19b7b50a05"],["/2022/07/14/文件上传漏洞/1654153978115.png","824de5aac820b0235aea8662212b434c"],["/2022/07/14/文件上传漏洞/1654157185332.png","b6e8e8cb0f3fd707bfb27433e0dcd323"],["/2022/07/14/文件上传漏洞/1654157562186.png","0111c41e3cae8dc05e473eeca4eea460"],["/2022/07/14/文件上传漏洞/1654157589537.png","e35a0dccbe6016524d7928cb866c8c1e"],["/2022/07/14/文件上传漏洞/1654157961914.png","996469333534cfad4dc5e4871032280d"],["/2022/07/14/文件上传漏洞/1654159024648.png","d7313e16559bb1d1a76e01dec4544185"],["/2022/07/14/文件上传漏洞/1654161319869.png","2cbf421a04b50a38e2c78f6f5a581843"],["/2022/07/14/文件上传漏洞/1654161491990.png","c96f64745166068367c245ebeeb7e6f7"],["/2022/07/14/文件上传漏洞/1654161538901.png","c972aedcd2e6ed607140633eaa27af85"],["/2022/07/14/文件上传漏洞/1654176164565.png","622fda7d2a6f6b3c91cac2a8f7001827"],["/2022/07/14/文件上传漏洞/1654177545110.png","e28aecf7846b3cc2f267709ada126246"],["/2022/07/14/文件上传漏洞/1654177712432.png","a8ab49831cc2bdb5841c0186487351a0"],["/2022/07/14/文件上传漏洞/1654177967385.png","221314ecef073f932a297f95f820bbf2"],["/2022/07/14/文件上传漏洞/1654178035764.png","e913ff168d85b0503f3efe151610dae4"],["/2022/07/14/文件上传漏洞/1654178227786.png","e628c0be481cfcd297fd5a4137eb2cac"],["/2022/07/14/文件上传漏洞/1654181296943.png","4210acbcb37c9e9d25942262c8b0cf32"],["/2022/07/14/文件上传漏洞/1654238636610.png","e814f1936ce866d1ada03c96f7519582"],["/2022/07/14/文件上传漏洞/1654239525931.png","3a62b12933d003c63c829c6aa7507fe6"],["/2022/07/14/文件上传漏洞/1654239627368.png","6fc3bd8fb7dee8b99c7bfb50079028e9"],["/2022/07/14/文件上传漏洞/1654243197451.png","0e55901ff096993b9c60a232ad91b4f1"],["/2022/07/14/文件上传漏洞/1654244793641.png","802ace27f7e806651d6fb8b4c9570686"],["/2022/07/14/文件上传漏洞/1654248134703.png","bc5a2b8e86c75d8fa132afacfee6b39c"],["/2022/07/14/文件上传漏洞/1654269571135.png","3dfbd0197813683c648628e08fa821c9"],["/2022/07/14/文件上传漏洞/1654270019803.png","52bedc490fe90f24b2f434d932592912"],["/2022/07/14/文件上传漏洞/1654270212578.png","32845b8bb2924d5773afc05c736e6889"],["/2022/07/14/文件上传漏洞/1654270364794.png","24cbe0b70f79baad1377a4c30534ec5a"],["/2022/07/14/文件上传漏洞/1654271914429.png","d8a7cb2707998aa38f889b6128e4e9bd"],["/2022/07/14/文件上传漏洞/1654326084463.png","6214296f82c720c55ad78104657501a4"],["/2022/07/14/文件上传漏洞/1654326767670.png","2cc40ec67db604f1cde15abeddb42678"],["/2022/07/14/文件上传漏洞/1654335466296.png","3938f6374d1e3f907a1859555b351ece"],["/2022/07/14/文件上传漏洞/1654336071402.png","8d621831b3ff81e2e41faca1ff224913"],["/2022/07/14/文件上传漏洞/1654336481654.png","b8c0cc283bca0f0c7e3ceb1818ddfd36"],["/2022/07/14/文件上传漏洞/1654337064779.png","a19dcae39548c959266ee6a0fe628e58"],["/2022/07/14/文件上传漏洞/1654337099829.png","ac90b58ff6effc6cd72a913b58a164db"],["/2022/07/14/文件上传漏洞/1654337178918.png","223cbc169d5ce334ff7b6b5d5d61bc4a"],["/2022/07/14/文件上传漏洞/1654339347242.png","2c8d5f10df916049147dd5d1cb0f3aee"],["/2022/07/14/文件上传漏洞/1654345449144.png","2b25a7db4862c04276dcc2102bbcbe8f"],["/2022/07/14/文件上传漏洞/1654346898042.png","23ff76bfc2c4753e65e7855c9befd117"],["/2022/07/14/文件上传漏洞/1654346976710.png","ab826252b44c391521091cb9c4e6c9ce"],["/2022/07/14/文件上传漏洞/1655018572154.png","5f523e098ec087cab3847bc60272f989"],["/2022/07/14/文件上传漏洞/1655019054284.png","2b6260b2c01c4c4d594b88f89f8eea9d"],["/2022/07/14/文件上传漏洞/1655019110044.png","38dffc5f6506b367331560b0731c65a7"],["/2022/07/14/文件上传漏洞/1655019158161.png","6a72b155894cd1c3a87cfd8c33e78c04"],["/2022/07/14/文件上传漏洞/index.html","0de600371d85cb0b49e3bd1f3dbe9499"],["/404.html","680f9dfcb73623bb6d081fb6492e112c"],["/about/index.html","92ae3e7279880cfe80746dcf26ef1159"],["/archives/2022/05/index.html","e368025ee9dc6e3d9fb3016dca4a0df3"],["/archives/2022/06/index.html","78a70a657eb0a632211acfc21165e68a"],["/archives/2022/07/index.html","95cf86e0f88807a79beb1c4bfbf8ab69"],["/archives/2022/index.html","4d698844624e928dc9613a69d01fa60f"],["/archives/2022/page/2/index.html","98adf481e63f4353d4eb606ba56c8faa"],["/archives/index.html","b9940f21336d592bb50a556799d2d3ec"],["/archives/page/2/index.html","7eef858ea42aca7d62b1009902ba197a"],["/categories/index.html","c14c666873e3cac4619d67710741d70e"],["/categories/python/index.html","dabf1d9eb8b22bb6cc79a62fd8c41ac3"],["/categories/web安全/index.html","a48c5cdefb932e4ce782d2bd2dce4225"],["/categories/数据库/index.html","04bbfc8daa16f6fa5d93f1d817e4a0d0"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/highlight-dark.css","be3af4b8abf2074e66acb737867c43dc"],["/css/highlight.css","fdd56de5edd1e833674574fdc74bbfe7"],["/css/mac.css","b6907c8478d705361a4b9d45c86d833b"],["/css/main.css","85cb8eb06470f2496aea3a84e08ab6b0"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","e4090e4fed7bc43c1a52db26e8f71df7"],["/js/boot.js","211458bcbad652438aee5e0e8976b86e"],["/js/color-schema.js","fda9ab19205d5873d3710a4cc5bb5ec3"],["/js/events.js","035809ecd3b1aa9612c11c9b0bf71387"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/plugins.js","85b5700ee52692e268d7ce57a8e3647b"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","4f4421ab7a715f974ecfa6cb3d312575"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","77b3dbb8a01d3eb46b36af6981e081e4"],["/playlist/index.html","ecfc76d819d5bd5b4acedbd8171d1408"],["/sw-register.js","5faecdafdb337863d6c6b9d5253796a5"],["/tags/XSS/index.html","e2c0d9293615db83230e740b48890db8"],["/tags/format/index.html","dc66b2aefaf3915f83297f5a5758d7c2"],["/tags/index.html","a87484122c71b6cf57ee505a75d9a3c7"],["/tags/创建数据库/index.html","f37ab2ada2f55e1aee620ae7fe00a7cc"],["/tags/多表链接/index.html","dc90f3bcff4aa2949040665c24d1f5ae"],["/tags/字符串操作/index.html","afc1c80edf5ddffad7d7a91af0753653"],["/tags/嵌套查询/index.html","e2ed6c1524db5dc77d1229b76583a1df"],["/tags/数据结构/index.html","7f49305d84cfd6b2442e9bc844e94a36"],["/tags/数据表/index.html","b1747b014f6e029c3fb6da51c3eb6b76"],["/tags/文件上传/index.html","dca8be42b3d0583edb179652ca565f83"],["/tags/简单查询/index.html","3d72925bf15ed0987ad76339e6b09815"],["/tags/索引/index.html","4c59510291f5e515c3669bb6f7a902ad"],["/tags/聚集函数查询/index.html","5b297029308127b526077951a648e2c7"],["/tags/视图/index.html","4c0218985016006f91440609a7e38ed1"],["/tags/进制转换/index.html","156c25500679967ed8ee720b4098aefd"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
