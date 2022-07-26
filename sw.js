/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/python基础之format/index.html","d1abb18ef98ffd997fd60779738eaf3f"],["/2022/05/22/python基础之文件操作/index.html","5bb24bbe734fc743737cc62bb1b23296"],["/2022/05/26/MYSQL数据库基础-一-创建数据库/index.html","af680740af6ad5d7513167d6aa221d42"],["/2022/05/26/MYSQL数据库基础-七-数据表的查询四-聚集函数查询/index.html","42a1c129d055a2ac8a0323f3c79b5f73"],["/2022/05/26/MYSQL数据库基础-三-数据数据增、删、改/index.html","82a5fb15a6e06c9cbfcc690c8598970d"],["/2022/05/26/MYSQL数据库基础-二-数据表结构操作/index.html","b71724f08cf39b5366871923057be311"],["/2022/05/26/MYSQL数据库基础-五-数据表的查询二-多表链接查询/index.html","40c74bd1b89e10e194753feb04c2cdf8"],["/2022/05/26/MYSQL数据库基础-八-数据库视图/index.html","4743f4038c12688595d1831cb8203fc2"],["/2022/05/26/MYSQL数据库基础-六-数据表的查询三-嵌套查询/index.html","0c59d068139948a2f1a19311e14f660d"],["/2022/05/26/MYSQL数据库基础-四-数据表的查询一-简单查询/index.html","33b6cb45bdaf7af076a695b62a9aeb69"],["/2022/06/28/python基础之字符串操作/index.html","7f401c727b150d720579258aa06b544e"],["/2022/06/28/python基础之常用数据结构/index.html","6959e93acfdddb6bff18c7340566144e"],["/2022/06/28/python基础之编码与进制/index.html","074861d0791dbed011518d4339593953"],["/2022/07/01/MYSQL数据库基础-九-数据库索引/index.html","32a7f6ec6f975810ecdb310726a7b8d3"],["/2022/07/01/MYSQL数据库基础-十-SQL编程基础/index.html","dd02b97fb922d47835656559d593aee8"],["/2022/07/14/SQL注入/index.html","b2a48faabb4aa44678a62bec366164cd"],["/2022/07/14/XSS跨站脚本攻击/1654952689653.png","102036b924cd32d3df11ddc4acfaf79f"],["/2022/07/14/XSS跨站脚本攻击/1654952754171.png","a709d7a7427117f49e911b8f62ca8eab"],["/2022/07/14/XSS跨站脚本攻击/1654952864134.png","66b321df687359a791e366204cbdf392"],["/2022/07/14/XSS跨站脚本攻击/1654955201315.png","072d544c65c8efec3948c03bd64f3215"],["/2022/07/14/XSS跨站脚本攻击/1654955508113.png","2ec1f6e1bfc7bd11fa86fab8bd9da6f7"],["/2022/07/14/XSS跨站脚本攻击/1654956988932.png","56037ffeb0789d2f87579fadd8b85d16"],["/2022/07/14/XSS跨站脚本攻击/1655125274005.png","45956ce8f353f973e3ce0236b38483a9"],["/2022/07/14/XSS跨站脚本攻击/1655130071557.png","7151a82cb6da192ad78968716bf4bb5e"],["/2022/07/14/XSS跨站脚本攻击/1655130528394.png","f2fd46b3939cdcd97fa6ff13ec36eb59"],["/2022/07/14/XSS跨站脚本攻击/1655131009417.png","51874fc5c77858f8469d5459be952e6c"],["/2022/07/14/XSS跨站脚本攻击/1655132651419.png","242f215f6bc61a7fd632143f62b6faf3"],["/2022/07/14/XSS跨站脚本攻击/1655133020288.png","097d8ccbece9e51104277a7f973c9532"],["/2022/07/14/XSS跨站脚本攻击/1655133898020.png","1c3f1eadfa09de1fecb95b8fedd8e923"],["/2022/07/14/XSS跨站脚本攻击/1655134242894.png","2bfa70c8d389cfad93c18bc2b47b87a2"],["/2022/07/14/XSS跨站脚本攻击/1655135160931.png","46792470f092bf07d960d81a15633ac2"],["/2022/07/14/XSS跨站脚本攻击/1655185794742.png","77bb0f6708fa47eaa5906e98fb35c2de"],["/2022/07/14/XSS跨站脚本攻击/1655207843072.png","df1f06472e551c9de6dffecf89a279fd"],["/2022/07/14/XSS跨站脚本攻击/1655207923964.png","ee14ff7901ed1484ba7736c00194ab87"],["/2022/07/14/XSS跨站脚本攻击/1655208174637.png","ee80aaf4b1e24b3561d85bef71eb4ec7"],["/2022/07/14/XSS跨站脚本攻击/1655208495775.png","9ec9c3de1af24494411292b196095f05"],["/2022/07/14/XSS跨站脚本攻击/1655208793078.png","0cf81c65e61e5c51c31a763290bb285b"],["/2022/07/14/XSS跨站脚本攻击/1655209246258.png","8f8038cf8bdb41de1b7a2cb3c29cdae1"],["/2022/07/14/XSS跨站脚本攻击/1655210758111.png","d295d74d4b2cf453da2892e2594589ae"],["/2022/07/14/XSS跨站脚本攻击/1655212429640.png","09bc66c063d019ec4aa70d1578337764"],["/2022/07/14/XSS跨站脚本攻击/index.html","2a9065d2e9782ea706242c557d291c2a"],["/2022/07/14/文件上传漏洞/1654078504278.png","3863f7892544bee05b44091e6d09cc77"],["/2022/07/14/文件上传漏洞/1654078710042.png","895facb968f191cf22756991815029dd"],["/2022/07/14/文件上传漏洞/1654078895575.png","7cf45a40d46a1a34d7abbd5eea2a2f36"],["/2022/07/14/文件上传漏洞/1654079426662.png","731923f35915bfed5e06717124740b97"],["/2022/07/14/文件上传漏洞/1654079931660.png","92269fd18bf5434fbedaaf61db579b9c"],["/2022/07/14/文件上传漏洞/1654079985977.png","e044662dee88eff9be7abdca96b35faf"],["/2022/07/14/文件上传漏洞/1654080064114.png","60050ef0172a9427c30a4c2d8cd3cbf6"],["/2022/07/14/文件上传漏洞/1654080089264.png","ab6c9d992693886b97b778b6e66e6880"],["/2022/07/14/文件上传漏洞/1654080246873.png","654dba28446596d81b7ebce386db5db4"],["/2022/07/14/文件上传漏洞/1654080482441.png","4332d9cd51f462b959937f13c3685291"],["/2022/07/14/文件上传漏洞/1654093689954.png","8278171433a1abc9579e43e24b7cc240"],["/2022/07/14/文件上传漏洞/1654094169130.png","6036583a05f82421f420c87ef7d177a1"],["/2022/07/14/文件上传漏洞/1654094399126.png","d01c88d399700cfbc2b4f08e37400b08"],["/2022/07/14/文件上传漏洞/1654094975312.png","8cbaf6d8d7a07566e36b479263020c52"],["/2022/07/14/文件上传漏洞/1654095196760.png","94e060e2fa15eb30844d6a171e98ac44"],["/2022/07/14/文件上传漏洞/1654096904053.png","4b8671f656daef516c426614c5b6fd4f"],["/2022/07/14/文件上传漏洞/1654096934870.png","dcc82b23d8a4163acdc4a4a01e49d27c"],["/2022/07/14/文件上传漏洞/1654097090794.png","da42ad66ca40a646681fe32be817c4bc"],["/2022/07/14/文件上传漏洞/1654148842727.png","faf0f5d008a5c5e3133c1a23fc4f6b71"],["/2022/07/14/文件上传漏洞/1654149912837.png","2e2da9dfa741762edf32981f28d573da"],["/2022/07/14/文件上传漏洞/1654150068373.png","332fe5733a6442b8f1f8b05cc7a0726d"],["/2022/07/14/文件上传漏洞/1654150305877.png","2340d66657a3db1848ea79db0bd82c07"],["/2022/07/14/文件上传漏洞/1654151486006.png","057c76a9def923ff4aa53fdc9ca9a372"],["/2022/07/14/文件上传漏洞/1654151583198.png","81cfbdf383c1167b57438ffffe0c0cb6"],["/2022/07/14/文件上传漏洞/1654151715919.png","58a710235d8ba1dd39d8636c8e1b0c32"],["/2022/07/14/文件上传漏洞/1654151991836.png","e40063c91b128ebee59e1f1525c40311"],["/2022/07/14/文件上传漏洞/1654152040991.png","856106e4317c325ea1db74a620cf9cf5"],["/2022/07/14/文件上传漏洞/1654152184415.png","cf10528ec085930ce2dbc13da24760b5"],["/2022/07/14/文件上传漏洞/1654152248919.png","3b6923d3bee60c204a4bbee4184e293d"],["/2022/07/14/文件上传漏洞/1654152624706.png","70a19475d4b65375e24edc59b761485b"],["/2022/07/14/文件上传漏洞/1654152706103.png","5e8ff2c8877b49f7cb9396718bea3c2a"],["/2022/07/14/文件上传漏洞/1654152775047.png","b3367910dc97130855ded66211c7cf7f"],["/2022/07/14/文件上传漏洞/1654152937357.png","12ccd52b4355abadd9a51d6e2cd89b45"],["/2022/07/14/文件上传漏洞/1654153198011.png","6e69cd1d5d07739f616725cc7a88123b"],["/2022/07/14/文件上传漏洞/1654153247599.png","645b3fbad1eb05771a6d775d4f49a003"],["/2022/07/14/文件上传漏洞/1654153332343.png","cb2ea2b49dd455dc2bbcc6a4afe45986"],["/2022/07/14/文件上传漏洞/1654153574559.png","5785c8b65462b43e4fae6172063ab75a"],["/2022/07/14/文件上传漏洞/1654153909578.png","d53e330425f668a2df29d555f7ffe6f8"],["/2022/07/14/文件上传漏洞/1654153938741.png","1fb1ef2325ee2a657e13fb19b7b50a05"],["/2022/07/14/文件上传漏洞/1654153978115.png","824de5aac820b0235aea8662212b434c"],["/2022/07/14/文件上传漏洞/1654157185332.png","b6e8e8cb0f3fd707bfb27433e0dcd323"],["/2022/07/14/文件上传漏洞/1654157562186.png","0111c41e3cae8dc05e473eeca4eea460"],["/2022/07/14/文件上传漏洞/1654157589537.png","e35a0dccbe6016524d7928cb866c8c1e"],["/2022/07/14/文件上传漏洞/1654157961914.png","996469333534cfad4dc5e4871032280d"],["/2022/07/14/文件上传漏洞/1654159024648.png","d7313e16559bb1d1a76e01dec4544185"],["/2022/07/14/文件上传漏洞/1654161319869.png","2cbf421a04b50a38e2c78f6f5a581843"],["/2022/07/14/文件上传漏洞/1654161491990.png","c96f64745166068367c245ebeeb7e6f7"],["/2022/07/14/文件上传漏洞/1654161538901.png","c972aedcd2e6ed607140633eaa27af85"],["/2022/07/14/文件上传漏洞/1654176164565.png","622fda7d2a6f6b3c91cac2a8f7001827"],["/2022/07/14/文件上传漏洞/1654177545110.png","e28aecf7846b3cc2f267709ada126246"],["/2022/07/14/文件上传漏洞/1654177712432.png","a8ab49831cc2bdb5841c0186487351a0"],["/2022/07/14/文件上传漏洞/1654177967385.png","221314ecef073f932a297f95f820bbf2"],["/2022/07/14/文件上传漏洞/1654178035764.png","e913ff168d85b0503f3efe151610dae4"],["/2022/07/14/文件上传漏洞/1654178227786.png","e628c0be481cfcd297fd5a4137eb2cac"],["/2022/07/14/文件上传漏洞/1654181296943.png","4210acbcb37c9e9d25942262c8b0cf32"],["/2022/07/14/文件上传漏洞/1654238636610.png","e814f1936ce866d1ada03c96f7519582"],["/2022/07/14/文件上传漏洞/1654239525931.png","3a62b12933d003c63c829c6aa7507fe6"],["/2022/07/14/文件上传漏洞/1654239627368.png","6fc3bd8fb7dee8b99c7bfb50079028e9"],["/2022/07/14/文件上传漏洞/1654243197451.png","0e55901ff096993b9c60a232ad91b4f1"],["/2022/07/14/文件上传漏洞/1654244793641.png","802ace27f7e806651d6fb8b4c9570686"],["/2022/07/14/文件上传漏洞/1654248134703.png","bc5a2b8e86c75d8fa132afacfee6b39c"],["/2022/07/14/文件上传漏洞/1654269571135.png","3dfbd0197813683c648628e08fa821c9"],["/2022/07/14/文件上传漏洞/1654270019803.png","52bedc490fe90f24b2f434d932592912"],["/2022/07/14/文件上传漏洞/1654270212578.png","32845b8bb2924d5773afc05c736e6889"],["/2022/07/14/文件上传漏洞/1654270364794.png","24cbe0b70f79baad1377a4c30534ec5a"],["/2022/07/14/文件上传漏洞/1654271914429.png","d8a7cb2707998aa38f889b6128e4e9bd"],["/2022/07/14/文件上传漏洞/1654326084463.png","6214296f82c720c55ad78104657501a4"],["/2022/07/14/文件上传漏洞/1654326767670.png","2cc40ec67db604f1cde15abeddb42678"],["/2022/07/14/文件上传漏洞/1654335466296.png","3938f6374d1e3f907a1859555b351ece"],["/2022/07/14/文件上传漏洞/1654336071402.png","8d621831b3ff81e2e41faca1ff224913"],["/2022/07/14/文件上传漏洞/1654336481654.png","b8c0cc283bca0f0c7e3ceb1818ddfd36"],["/2022/07/14/文件上传漏洞/1654337064779.png","a19dcae39548c959266ee6a0fe628e58"],["/2022/07/14/文件上传漏洞/1654337099829.png","ac90b58ff6effc6cd72a913b58a164db"],["/2022/07/14/文件上传漏洞/1654337178918.png","223cbc169d5ce334ff7b6b5d5d61bc4a"],["/2022/07/14/文件上传漏洞/1654339347242.png","2c8d5f10df916049147dd5d1cb0f3aee"],["/2022/07/14/文件上传漏洞/1654345449144.png","2b25a7db4862c04276dcc2102bbcbe8f"],["/2022/07/14/文件上传漏洞/1654346898042.png","23ff76bfc2c4753e65e7855c9befd117"],["/2022/07/14/文件上传漏洞/1654346976710.png","ab826252b44c391521091cb9c4e6c9ce"],["/2022/07/14/文件上传漏洞/1655018572154.png","5f523e098ec087cab3847bc60272f989"],["/2022/07/14/文件上传漏洞/1655019054284.png","2b6260b2c01c4c4d594b88f89f8eea9d"],["/2022/07/14/文件上传漏洞/1655019110044.png","38dffc5f6506b367331560b0731c65a7"],["/2022/07/14/文件上传漏洞/1655019158161.png","6a72b155894cd1c3a87cfd8c33e78c04"],["/2022/07/14/文件上传漏洞/index.html","1d51b12c179a29c1531d69df3136814f"],["/about/index.html","d4131ae4429673e14c8d4045266ca50f"],["/archives/2022/05/index.html","49c07be1378ae06d0daab9a5ea8e1055"],["/archives/2022/06/index.html","23a21499f45f1d2ffaacd8550d729795"],["/archives/2022/07/index.html","64f5cbe557f091f4fb65800b60b3f096"],["/archives/2022/index.html","716ecf3b910f549c54367aa1c618e060"],["/archives/2022/page/2/index.html","fd1ca1e4b29a2f97fb01bead7ce8b689"],["/archives/index.html","367bf9ab10d24bf80955e3772af8822f"],["/archives/page/2/index.html","209c1fc3379cd2e423584c8a0886dbed"],["/categories/index.html","308e89957a38d61e5409477db155c388"],["/categories/python/index.html","52b6bc89317964632980cb283c8cd1fb"],["/categories/web安全/index.html","955354689aa23901ee3272121f3f57f3"],["/categories/数据库/index.html","e9c386f6bffd4677bcdea37d3b62a661"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","ca9a712d53ac246cc8ced598a3520cda"],["/css/noscript.css","9dc99a1fc1a15880089437b5c4d86e04"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","d593709631bf6acec3c76b6eb2b4b560"],["/images/logo.svg","f9c1770a959633fdee3a5c53a7e301ee"],["/images/tp.png","0bae743ce95210134277da07409e13e7"],["/index.html","3ca528ac8fa108f780a53adacb3eaf17"],["/js/bookmark.js","f1e6b9739211bcb813a2e9707ac243cf"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","ab106f6bc9cbbd9e149504f32a3395e2"],["/js/next-boot.js","d02c9571387fb46adc55599f549d999e"],["/js/pjax.js","63b15d6691cd1af93bca55d221af9c97"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/schemes/muse.js","8dcd3926b0b220229c93432353c3d0d7"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","ab4c56a299ab145730e51a98410ff266"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/gitter.js","363a2a7a3a47f9af0b4405d484f211b5"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","5679a13a370710ee2784f874864f1c91"],["/js/third-party/comments/disqusjs.js","80915c877fc2801ed14e01e0c80792d0"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","fe28a65fd2165f4075fcd8a605131317"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/rating.js","b61638a7a9ac16ed0ad2b85e6d8613e0"],["/js/third-party/search/algolia-search.js","f2d2b2d53396d15f4e541fea183e9509"],["/js/third-party/search/local-search.js","d2c28f3d0de820d6346ee159082e9d40"],["/js/third-party/statistics/firestore.js","ca1a0531370720a9d32d1b25ec619125"],["/js/third-party/statistics/lean-analytics.js","9917b064415afe7452bc2ccb8b86b7bd"],["/js/third-party/tags/mermaid.js","dea56b0007787c0f0b161cf6ce8571f1"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/utils.js","ab10e90d3e5cfdb1659f0a24c1eee3af"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","02e03e86d4785e8d0a9495e9ed50115f"],["/playlist/index.html","9d0990abf986fa47a936ff26c3b414ab"],["/sw-register.js","89ed3d020168a3842308fc1db454266b"],["/tags/XSS/index.html","c98f8c58d4e2df49f28dfbf6a734ea84"],["/tags/format/index.html","a7314bae5ca7569c3a97bf8724ffa47c"],["/tags/index.html","e26824e090e239ff1e4bb9d0bd13e7c0"],["/tags/创建数据库/index.html","baf14d2ccea18fc5589e0f96fb2c3b29"],["/tags/多表链接/index.html","3fcef69ed137afb8370cd1c03b8ec13a"],["/tags/字符串操作/index.html","233218ea9b57f09d9b3883ab1c4ade55"],["/tags/嵌套查询/index.html","76f2cec5f33be004f193c96c3a3cf3aa"],["/tags/数据结构/index.html","157035a715197f73ec18c9ba04a516cc"],["/tags/数据表/index.html","035f4f043364e2e877f77abe0cdd1ab1"],["/tags/文件上传/index.html","fc863c8e7be89b97615774fba5b7dbcc"],["/tags/简单查询/index.html","d8eae982a8c13bd394ac40e14156013f"],["/tags/索引/index.html","3f129e21d1244ce987a168ed5ab1767f"],["/tags/编程/index.html","b909a4259cc408d52da133bc1ea06c7b"],["/tags/聚集函数查询/index.html","53f4d3d03440e47ff76d9f5d510f7a8b"],["/tags/视图/index.html","b0828ab281c764f0e71416eb3463b055"],["/tags/进制转换/index.html","bbc168bf6dc8e4f0ce3bf343c003d942"]];
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
