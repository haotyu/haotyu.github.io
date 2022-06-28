/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/python基础之format/index.html","3af570c7f77be980163009a485f0afa6"],["/2022/05/22/python基础之文件操作/index.html","3a9229f167a16fb399bfc3ed604dd0db"],["/2022/05/26/MYSQL数据库基础-一-创建数据库/index.html","fad57cda0468bc03f1674e89865fe899"],["/2022/05/26/MYSQL数据库基础-七-数据表的查询四-聚集函数查询/index.html","7067aba4b42c8aa96068b1f8b8d07786"],["/2022/05/26/MYSQL数据库基础-三-数据数据增、删、改/index.html","4c8639dbe1350ef1680f52362520701f"],["/2022/05/26/MYSQL数据库基础-二-数据表结构操作/index.html","42f85961de59282e38b583da6f0694f8"],["/2022/05/26/MYSQL数据库基础-五-数据表的查询二-多表链接查询/index.html","7652403d0575d9e5733fef79374893e1"],["/2022/05/26/MYSQL数据库基础-八-数据库视图/index.html","981aa2887dd9e09eadfc6c5d4f170124"],["/2022/05/26/MYSQL数据库基础-六-数据表的查询三-嵌套查询/index.html","e840f66c0177a0b0e5029f87ce1369e6"],["/2022/05/26/MYSQL数据库基础-四-数据表的查询一-简单查询/index.html","10d19df495ac6589da307c88f8a4687a"],["/2022/06/28/python基础之字符串操作/index.html","743f49c2472a18e39707681c5c3c7e3d"],["/2022/06/28/python基础之常用数据结构/index.html","b4f07c49d77d1cf4d6f0d6a8b0cf9391"],["/2022/06/28/python基础之编码与进制/index.html","d1fd61b5d2d7f392edfa595fc927d9f2"],["/404.html","8ecf4524c63392111b749fb5150f25dd"],["/about/index.html","3c03c4d8e4de47ce709454b3f4753e70"],["/archives/2022/05/index.html","e2430a83cef70ce6e4cc98ea01eb8e5d"],["/archives/2022/06/index.html","92d89c80bd9abe09d5f3a3bf93242e33"],["/archives/2022/index.html","667629d4cd09fd22f0d915df231de9ae"],["/archives/2022/page/2/index.html","0146c18d8efc08d3b8cea8f9b77710fb"],["/archives/index.html","0ce3bb82e19c642f20d1cd906985e73c"],["/archives/page/2/index.html","5d78e6356a01e0502e8c546015f6a4a4"],["/categories/index.html","b3623860359c545197864a59d5cb3359"],["/categories/python/index.html","77d57108bbb6c33f661ec8c015ca9417"],["/categories/数据库/index.html","c90c4703d9954525b0856337ef090a44"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","be3af4b8abf2074e66acb737867c43dc"],["/css/highlight.css","fdd56de5edd1e833674574fdc74bbfe7"],["/css/mac.css","b6907c8478d705361a4b9d45c86d833b"],["/css/main.css","85cb8eb06470f2496aea3a84e08ab6b0"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","8fadff38f3a1114d5c304cca5be0793d"],["/js/boot.js","211458bcbad652438aee5e0e8976b86e"],["/js/color-schema.js","fda9ab19205d5873d3710a4cc5bb5ec3"],["/js/events.js","035809ecd3b1aa9612c11c9b0bf71387"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/plugins.js","85b5700ee52692e268d7ce57a8e3647b"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/links/index.html","75ff28b63e08fa77729b2794f8d8d107"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","9fb4cb7d7010115bf397518f2edb8de9"],["/playlist/index.html","4f02a30eeb6d6bcae0e2d1cd9c6dfe2e"],["/sw-register.js","8bba02d53f7bfcfc64d48942ca4787d4"],["/tags/format/index.html","20a1432056624aa9e2bd9f1d16bf0bf2"],["/tags/index.html","3445701034d9a67ca485dbd1e311e85e"],["/tags/创建数据库/index.html","48db6282e7f58f5e24078d478f565f00"],["/tags/多表链接/index.html","f5e81440ef03134d70f04e6f4254cc7a"],["/tags/字符串操作/index.html","aff5146e0bbc1460d5e96121c91e4848"],["/tags/嵌套查询/index.html","eaf4bab5d0e132c2e9136ffd5b316c9d"],["/tags/数据结构/index.html","a5eec5756d55371c85753a5187ab98a7"],["/tags/数据表/index.html","53aeb6fc5c8cc8929cab4ea61afec9e8"],["/tags/简单查询/index.html","9e4b7fb9e9ff9baaba6f8d86437d306e"],["/tags/聚集函数查询/index.html","1c609610c1a27149f69d31cebe0c15da"],["/tags/视图/index.html","cc883f62a53ecc7c5b7679e89a80e0f8"],["/tags/进制转换/index.html","f22be1a58b7319d39b50947d1c4be1c4"]];
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
