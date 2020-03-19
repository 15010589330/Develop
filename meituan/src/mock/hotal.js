const Mock = require('mockjs');
const Random = Mock.Random;
let dataindex = [];
Mock.setup({
    timeout:300
});
Random.extend({
    hotalname:function(){
        let hotalname = ['7天酒店·北京总部基地店','汉庭优佳(北京总部基地店)','和熙至尚酒店(北京总部基地店)','速8酒店(北京市丰台区南路地铁站)','格林豪泰(北京总部基地店)','7天酒店','成家公寓',
        '福星宾馆','99优选酒店','北京正阳园林宾馆','玛雅岛酒店','未名酒店']
        return this.pick(hotalname)
    }
})

for(let i=0;i<20;i++){
    let template = {
        'id':i+'',
        'hotalname':Random.hotalname(),
        'grade':Random.float(4,4,1,1)+'分',
        'reserve':Random.natural(1,4)+'小时前有人预定',
        'price':'￥'+Random.natural(140,300)+'起',
        
        


    }
    dataindex.push(template)
}
Mock.mock('/hotal/index','get',dataindex)