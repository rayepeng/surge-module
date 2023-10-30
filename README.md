一些自用的sub.store脚本和surge脚本及模块

ToolKit 是一个封装了函数的类，简单看了下，主要是用作

1. 多平台，surge/quanx/loon
2. lk.isGetCookit() 判断是否有获取cookie，自动缓存
3. lk.getResponseBody() 发起请求


数据持久化
```js
// 持久化数据
const aliYunPanTokenKey = 'lkAliYunPanTokenKey'
let aliYunPanToken = lk.getVal(aliYunPanTokenKey, '')


//....
lk.setVal(aliYunPanTokenKey, aliYunPanToken)
```


请求
```js
lk.post(url, (error, _resp, data) => {
    // 判断是否有error，data会返回过来
})
```

通知
```js
lk.appendNotifyInfo(`xxx`)
```

