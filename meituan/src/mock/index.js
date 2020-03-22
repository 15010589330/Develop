const Mock = require('mockjs');
const Random = Mock.Random;
let dataindex = [];
/* Mock.setup({
    timeout:300
});*/
Random.extend({
    shopname:function(){
        let shopname = ['麦当劳','和合谷(北京丰台区分店)','张姐烤肉拌饭','好时光','吉野家','杨国福麻辣拌','翠满楼',
        '肯德基','老家肉饼','东北麻辣拌','翠竹食府','必胜客']
        return this.pick(shopname)
    },
    discount:function(){
        let discount = ['首单减22','已减少4元','已减20元','40减5','80减12','160减25','单人餐29元起',
        '首单减17','5折','6折','8折','必胜客2-3人餐142元']
        return this.pick(discount)
    }
})

for(let i=0;i<20;i++){
    let template = {
        'id':i+'',
        'imgsrc':'../static/img/'+ (i+1)+'.jpg',
        'shopname':Random.shopname(),
        'grade':Random.float(4,4,1,1)+'分',
        'discount':Random.discount(),
        'price':'人均￥'+Random.natural(30,200),
        
        


    }
    dataindex.push(template)
}
Mock.mock('/mock/index','get',dataindex)
