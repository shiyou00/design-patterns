const A = {
  isVip: false
};

const B = {
  isVip: true
}

const club = {
  wine:100,
  girl:100
}

const visit = function (user){
  return new Proxy(club, {
    get: function(target, key){
      if(!user.isVip){
        return "抱歉只有VIP可以访问";
      }
      return target[key];
    }
  });
}
// 小A访问club的属性时
console.log(visit(A).wine) // 输出抱歉只有VIP可以访问

// 小B访问club的属性时
console.log(visit(B).wine) // 输出 100
