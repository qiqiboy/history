myHistory
======

> javascript历史记录

## 注意
该组件依赖于我开发另一个storage组件storage.js( https://github.com/qiqiboy/storage )，以及一个JSON.js(为ie6 7增加JSON功能，https://github.com/douglascrockford/JSON-js )。

添加记录需要指定一个键值用来保证记录唯一性。

索引越小的数据越新。

## 如何使用
```javascript
// 首先在页面中依次引入storage.js, JSON.js(JSON2.js),history.js
// 实例化一个历史记录引用对象
var history=new myHistory('myHistory');

// 添加记录
history.add(key, data);

// 删除记录
history.remove(id);

// 清空记录
history.empty();

// 获取索引键值
history.key(i);

// 获取索引记录数据
history.index(i);

// 获取键值所对应的数据
history.get(key);

// 遍历历史数据记录
// 从0到最大，记录由新到旧，即索引为0的为最新的记录
history.walk(function(data, key){});

````

## DEMO 
无
