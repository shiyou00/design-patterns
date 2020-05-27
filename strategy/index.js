const outputPriceStrategy = {
  'v1': (originPrice)=>{
    return originPrice * 0.9;
  },
  'v2':(originPrice)=>{
    return originPrice * 0.8;
  },
  'v3':(originPrice)=>{
    return originPrice * 0.7;
  },
  'v4':(originPrice)=>{
    return originPrice * 0.6;
  }
}

const A = {
  vip:"v1",
  originPrice: 200
}

const B = {
  vip:"v3",
  originPrice: 200
}

const getDiscounts = (user)=>{
  return outputPriceStrategy[user.vip](user.originPrice);
}

console.log(getDiscounts(A)); // 180
console.log(getDiscounts(B)); // 140


