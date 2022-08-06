/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/python-ji-chu-zhi-format/index.html","744c95c5bef78586d5860def65d68c58"],["/2022/05/22/python-ji-chu-zhi-wen-jian-cao-zuo/index.html","c9d1750ccf7fb53e64f881e8fe08ff8d"],["/2022/05/26/mysql-shu-ju-ku-ji-chu-ba-shu-ju-ku-shi-tu/index.html","795260264fdd30e81784adf03d527c2b"],["/2022/05/26/mysql-shu-ju-ku-ji-chu-er-shu-ju-biao-jie-gou-cao-zuo/index.html","f5caa991e534eb4bd546c75e57f133a9"],["/2022/05/26/mysql-shu-ju-ku-ji-chu-liu-shu-ju-biao-de-cha-xun-san-qian-tao-cha-xun/index.html","6385245c6b2841de7ac42e328bee388f"],["/2022/05/26/mysql-shu-ju-ku-ji-chu-qi-shu-ju-biao-de-cha-xun-si-ju-ji-han-shu-cha-xun/index.html","5a0b1c97df3d8eca42606a7919be40d4"],["/2022/05/26/mysql-shu-ju-ku-ji-chu-san-shu-ju-shu-ju-zeng-shan-gai/index.html","97270a45c6d4cca3de517c8d63a5089e"],["/2022/05/26/mysql-shu-ju-ku-ji-chu-si-shu-ju-biao-de-cha-xun-yi-jian-dan-cha-xun/index.html","61dd7a7607a9758e544165576391d358"],["/2022/05/26/mysql-shu-ju-ku-ji-chu-wu-shu-ju-biao-de-cha-xun-er-duo-biao-lian-jie-cha-xun/index.html","b7f62c952daf1c396e41ae34ef3df8ba"],["/2022/05/26/mysql-shu-ju-ku-ji-chu-yi-chuang-jian-shu-ju-ku/index.html","352a990675b5b007057a072fbd58d559"],["/2022/06/28/python-ji-chu-zhi-bian-ma-yu-jin-zhi/index.html","2928de9a2a0e57a695851e671712d835"],["/2022/06/28/python-ji-chu-zhi-chang-yong-shu-ju-jie-gou/index.html","9ad68266f12fdbcca7d16acf61e5d059"],["/2022/06/28/python-ji-chu-zhi-zi-fu-chuan-cao-zuo/index.html","5955b39631b05de96b1600f4be3e8ffc"],["/2022/07/01/mysql-shu-ju-ku-ji-chu-jiu-shu-ju-ku-suo-yin/index.html","f06ef9bb3bf4c08eb97446c51d5a48ae"],["/2022/07/01/mysql-shu-ju-ku-ji-chu-shi-sql-bian-cheng-ji-chu/index.html","8474ecfd3226ecfbfdb2e42d14018d1d"],["/2022/07/14/sql-zhu-ru/index.html","7aa65a200557525d3103e89135fad39f"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654078504278.png","3863f7892544bee05b44091e6d09cc77"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654078710042.png","895facb968f191cf22756991815029dd"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654078895575.png","7cf45a40d46a1a34d7abbd5eea2a2f36"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654079426662.png","731923f35915bfed5e06717124740b97"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654079931660.png","92269fd18bf5434fbedaaf61db579b9c"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654079985977.png","e044662dee88eff9be7abdca96b35faf"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654080064114.png","60050ef0172a9427c30a4c2d8cd3cbf6"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654080089264.png","ab6c9d992693886b97b778b6e66e6880"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654080246873.png","654dba28446596d81b7ebce386db5db4"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654080482441.png","4332d9cd51f462b959937f13c3685291"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654093689954.png","8278171433a1abc9579e43e24b7cc240"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654094169130.png","6036583a05f82421f420c87ef7d177a1"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654094399126.png","d01c88d399700cfbc2b4f08e37400b08"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654094975312.png","8cbaf6d8d7a07566e36b479263020c52"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654095196760.png","94e060e2fa15eb30844d6a171e98ac44"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654096904053.png","4b8671f656daef516c426614c5b6fd4f"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654096934870.png","dcc82b23d8a4163acdc4a4a01e49d27c"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654097090794.png","da42ad66ca40a646681fe32be817c4bc"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654148842727.png","faf0f5d008a5c5e3133c1a23fc4f6b71"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654149912837.png","2e2da9dfa741762edf32981f28d573da"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654150068373.png","332fe5733a6442b8f1f8b05cc7a0726d"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654150305877.png","2340d66657a3db1848ea79db0bd82c07"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654151486006.png","057c76a9def923ff4aa53fdc9ca9a372"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654151583198.png","81cfbdf383c1167b57438ffffe0c0cb6"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654151715919.png","58a710235d8ba1dd39d8636c8e1b0c32"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654151991836.png","e40063c91b128ebee59e1f1525c40311"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654152040991.png","856106e4317c325ea1db74a620cf9cf5"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654152184415.png","cf10528ec085930ce2dbc13da24760b5"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654152248919.png","3b6923d3bee60c204a4bbee4184e293d"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654152624706.png","70a19475d4b65375e24edc59b761485b"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654152706103.png","5e8ff2c8877b49f7cb9396718bea3c2a"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654152775047.png","b3367910dc97130855ded66211c7cf7f"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654152937357.png","12ccd52b4355abadd9a51d6e2cd89b45"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654153198011.png","6e69cd1d5d07739f616725cc7a88123b"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654153247599.png","645b3fbad1eb05771a6d775d4f49a003"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654153332343.png","cb2ea2b49dd455dc2bbcc6a4afe45986"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654153574559.png","5785c8b65462b43e4fae6172063ab75a"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654153909578.png","d53e330425f668a2df29d555f7ffe6f8"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654153938741.png","1fb1ef2325ee2a657e13fb19b7b50a05"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654153978115.png","824de5aac820b0235aea8662212b434c"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654157185332.png","b6e8e8cb0f3fd707bfb27433e0dcd323"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654157562186.png","0111c41e3cae8dc05e473eeca4eea460"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654157589537.png","e35a0dccbe6016524d7928cb866c8c1e"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654157961914.png","996469333534cfad4dc5e4871032280d"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654159024648.png","d7313e16559bb1d1a76e01dec4544185"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654161319869.png","2cbf421a04b50a38e2c78f6f5a581843"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654161491990.png","c96f64745166068367c245ebeeb7e6f7"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654161538901.png","c972aedcd2e6ed607140633eaa27af85"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654176164565.png","622fda7d2a6f6b3c91cac2a8f7001827"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654177545110.png","e28aecf7846b3cc2f267709ada126246"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654177712432.png","a8ab49831cc2bdb5841c0186487351a0"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654177967385.png","221314ecef073f932a297f95f820bbf2"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654178035764.png","e913ff168d85b0503f3efe151610dae4"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654178227786.png","e628c0be481cfcd297fd5a4137eb2cac"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654181296943.png","4210acbcb37c9e9d25942262c8b0cf32"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654238636610.png","e814f1936ce866d1ada03c96f7519582"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654239525931.png","3a62b12933d003c63c829c6aa7507fe6"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654239627368.png","6fc3bd8fb7dee8b99c7bfb50079028e9"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654243197451.png","0e55901ff096993b9c60a232ad91b4f1"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654244793641.png","802ace27f7e806651d6fb8b4c9570686"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654248134703.png","bc5a2b8e86c75d8fa132afacfee6b39c"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654269571135.png","3dfbd0197813683c648628e08fa821c9"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654270019803.png","52bedc490fe90f24b2f434d932592912"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654270212578.png","32845b8bb2924d5773afc05c736e6889"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654270364794.png","24cbe0b70f79baad1377a4c30534ec5a"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654271914429.png","d8a7cb2707998aa38f889b6128e4e9bd"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654326084463.png","6214296f82c720c55ad78104657501a4"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654326767670.png","2cc40ec67db604f1cde15abeddb42678"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654335466296.png","3938f6374d1e3f907a1859555b351ece"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654336071402.png","8d621831b3ff81e2e41faca1ff224913"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654336481654.png","b8c0cc283bca0f0c7e3ceb1818ddfd36"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654337064779.png","a19dcae39548c959266ee6a0fe628e58"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654337099829.png","ac90b58ff6effc6cd72a913b58a164db"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654337178918.png","223cbc169d5ce334ff7b6b5d5d61bc4a"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654339347242.png","2c8d5f10df916049147dd5d1cb0f3aee"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654345449144.png","2b25a7db4862c04276dcc2102bbcbe8f"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654346898042.png","23ff76bfc2c4753e65e7855c9befd117"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1654346976710.png","ab826252b44c391521091cb9c4e6c9ce"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1655018572154.png","5f523e098ec087cab3847bc60272f989"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1655019054284.png","2b6260b2c01c4c4d594b88f89f8eea9d"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1655019110044.png","38dffc5f6506b367331560b0731c65a7"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/1655019158161.png","6a72b155894cd1c3a87cfd8c33e78c04"],["/2022/07/14/wen-jian-shang-chuan-lou-dong/index.html","c01694a8955dd149738dfdf85e057453"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1654952689653.png","102036b924cd32d3df11ddc4acfaf79f"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1654952754171.png","a709d7a7427117f49e911b8f62ca8eab"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1654952864134.png","66b321df687359a791e366204cbdf392"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1654955201315.png","072d544c65c8efec3948c03bd64f3215"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1654955508113.png","2ec1f6e1bfc7bd11fa86fab8bd9da6f7"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1654956988932.png","56037ffeb0789d2f87579fadd8b85d16"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655125274005.png","45956ce8f353f973e3ce0236b38483a9"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655130071557.png","7151a82cb6da192ad78968716bf4bb5e"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655130528394.png","f2fd46b3939cdcd97fa6ff13ec36eb59"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655131009417.png","51874fc5c77858f8469d5459be952e6c"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655132651419.png","242f215f6bc61a7fd632143f62b6faf3"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655133020288.png","097d8ccbece9e51104277a7f973c9532"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655133898020.png","1c3f1eadfa09de1fecb95b8fedd8e923"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655134242894.png","2bfa70c8d389cfad93c18bc2b47b87a2"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655135160931.png","46792470f092bf07d960d81a15633ac2"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655185794742.png","77bb0f6708fa47eaa5906e98fb35c2de"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655207843072.png","df1f06472e551c9de6dffecf89a279fd"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655207923964.png","ee14ff7901ed1484ba7736c00194ab87"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655208174637.png","ee80aaf4b1e24b3561d85bef71eb4ec7"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655208495775.png","9ec9c3de1af24494411292b196095f05"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655208793078.png","0cf81c65e61e5c51c31a763290bb285b"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655209246258.png","8f8038cf8bdb41de1b7a2cb3c29cdae1"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655210758111.png","d295d74d4b2cf453da2892e2594589ae"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/1655212429640.png","09bc66c063d019ec4aa70d1578337764"],["/2022/07/14/xss-kua-zhan-jiao-ben-gong-ji/index.html","bf5f3a256e28aa02c75757336262afba"],["/2022/08/06/linux-ming-ling-zhi-awk/index.html","f844f7a102ac7a09d40c342e7399ebe5"],["/about/index.html","53cec69a721fac53212568a573be40ec"],["/archives/2022/05/index.html","efb17fb8b4b668fa898baa0182946792"],["/archives/2022/06/index.html","e5c3f1bdbd3f173657ea9fd1588a91ea"],["/archives/2022/07/index.html","5f152a4e3d19b8dcf4e5768a2127e381"],["/archives/2022/08/index.html","ade05d623673a112ccf242f6195c1c1d"],["/archives/2022/index.html","dba3b50f779289400c5eac9a9ef1b9ef"],["/archives/2022/page/2/index.html","9dc7e7d5f8f6474c048e44b92c6ae954"],["/archives/index.html","bdce3cc2a38db0483f1d40b2ac0cf8ea"],["/archives/page/2/index.html","f981346743a8852ec390308ec2468874"],["/categories/Linux/index.html","22d1bb87b9a06cd1c56ae83672ddefcf"],["/categories/index.html","dd47684d0103528df516771f80536a9b"],["/categories/python/index.html","b1c1a30bfdf5b3d5eb9570195bf66342"],["/categories/web安全/index.html","6b97348fa5d23ce05791cfe6a65faf64"],["/categories/数据库/index.html","8225b0d2ee98530500d70efc818cd65b"],["/contact/index.html","1ec4c61e3d342e28c1470c23077bf9af"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/loading.css","490b25d052226ccf15cde9e64651225a"],["/css/matery.css","4706751cd58e92afbe7b52329f62c1e9"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/friends/index.html","c0d251a981387ea611a26da58b77fa51"],["/index.html","1a89d8171a3f8549c8ae03d9e35dae22"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","a98ebcf5de279be0a99cfb145525bad8"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","fe11a3a32db7284d920063f21e7d3777"],["/libs/awesome/css/all.min.css","dfb8fc36e102730fddf78b5494eb0035"],["/libs/awesome/webfonts/fa-brands-400.ttf","0fbfc862056bad982c93ba51460e31d9"],["/libs/awesome/webfonts/fa-brands-400.woff2","a9afdb72826cde196ddf29eb8f9d0f8f"],["/libs/awesome/webfonts/fa-regular-400.ttf","35307505c129ab1f9173f7917b50756f"],["/libs/awesome/webfonts/fa-regular-400.woff2","f817938f131b0cabee81e59a96f9c2a6"],["/libs/awesome/webfonts/fa-solid-900.ttf","ffc89d3ea2e2c3ba295689305f91ca78"],["/libs/awesome/webfonts/fa-solid-900.woff2","297973a488f688271dd223d542ba2697"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","4bde6a62454b669bb0ce0448491a71d7"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","72d85419b5a3c5867b1903ef565f5a8d"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","2ec2cb2199d4d881e6a6ad86690f6add"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/buble.js","a268f2e08a2cc18216e5fac33de11d0a"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/popupText.js","3652242f7e15d186daf7c2a270f0618b"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/1.jpg","415de4d5d462d6bd318c09824113e54e"],["/medias/banner/0.jpg","306003d8042084347393c395cf75c56d"],["/medias/banner/1.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/medias/banner/2.jpg","9d5259c1c229c7b2a7ea813b5246ce26"],["/medias/banner/3.jpg","8c7505b632239a7c4e39f1667c3928b0"],["/medias/banner/4.jpg","86b8effb2e19b0251f53a7dd8869dc8e"],["/medias/banner/5.jpg","ac669fc927093822996b6bfbafc9c3a0"],["/medias/banner/6-1.jpg","dcdf8ccac37f8d6663883ef2f63aea24"],["/medias/banner/6-2.jpg","1a91081f6d9e063a0e007a4e6e25d03a"],["/medias/banner/6.jpg","144d7672ecee40d66b8dd58c0e702a76"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/tp.png","0bae743ce95210134277da07409e13e7"],["/page/2/index.html","93556f5b7ea587180e326155f25eb470"],["/playlist/index.html","e1492012d6f527b3151aaa86fbfaeabf"],["/sw-register.js","0d3f0047d81de058d1fa6a4830f7e371"],["/tags/XSS/index.html","8ea01d9849dcc9eb6f1b515c751002ee"],["/tags/format/index.html","4fceda724a3ee152664c98fa62873954"],["/tags/index.html","848cf52c2b8a97aa25e7fad653553282"],["/tags/view/index.html","9aa903824819871b20c5476020f99d0f"],["/tags/创建数据库/index.html","5d174e60d0a2d12f918867a86ce5b42d"],["/tags/多表链接/index.html","3ae6c9095d78be76d927045f41047290"],["/tags/字符串操作/index.html","b2462dbf744c4d507944a1380f209de4"],["/tags/嵌套查询/index.html","607c7d0eb025f3dc756fffd6d73c4461"],["/tags/数据结构/index.html","573f99b4a9c6adf75c7be940fec3c782"],["/tags/数据表/index.html","ecdf87c66410d781dd447931b7208e52"],["/tags/文件上传/index.html","3f5094d7ecd59334b8c2dbbe6abec0e6"],["/tags/简单查询/index.html","85c95820b0c0532d1d1b8400c6e34e3a"],["/tags/索引/index.html","1aa9fcc08fe6e49103003efdcdd757e2"],["/tags/编程/index.html","00d88236c5bfbf06ebecf0c387c17584"],["/tags/聚集函数查询/index.html","adf6cbdb4f3ebbecc2ec1f409d171642"],["/tags/视图/index.html","198d256226fb450f7db1e73091088a23"],["/tags/进制转换/index.html","de2b650ac3fe8cc9453f56f6b9a9e2d4"]];
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
