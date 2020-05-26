const cOutlet = function(){
  return [{name:"插座"}] // 中国插座的结构
}

const render = function( fn ){
  console.log(JSON.stringify( fn() )) // 渲染中国插座"[{name:"插座"}]"
};


render(cOutlet); // 目前我们人在中国可以正常使用插座

const kOutlet = function(){
  return ["插座"]; // 韩国插座是这种结构，很明显不能使用render插入，不然输出的结构不一样肯定是匹配不了的。
}

// 我们定制一个转换器函数，输入中国插座，希望输出的是韩国插座的结构
const adapter = function(cOutlet){
  return function () {
    return cOutlet().map(item=>item.name);
  }
}

render(adapter(cOutlet));  // 通过转换器函数，我们就把中国插座的结构"[{name:"插座"}]" 转换成符合韩国插座的结构 "["插座"]"，并且没有改动中国插座的任何代码。这就是转换器的应用。
