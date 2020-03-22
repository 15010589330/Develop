<template>
    <div class="FormMt">
      <header>
        <div class="header-back">
          <img src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png" alt="">
        </div>
        <div class="header-title" >
          <span>全部订单</span>
          <img src="https://p0.meituan.net/travelcube/1716d6a3ad892866d4592daebaea9505277.png" alt="">
        </div>
        <div class="header-seek">
          <img src="https://p0.meituan.net/travelcube/7289ad16274ae18417b84c916bb6a711169.png" alt="">
        </div>
      </header>
      <dl class="menu">
        <dd @tap="getlist">全部 <div v-if="boo==1?true:false"></div></dd>
        <dd @tap="payment">待付款 <div v-if="boo==2?true:false"></div></dd>
        <dd @tap="use">待使用 <div v-if="boo==3?true:false"></div></dd>
        <dd @tap="evaluation">待评价 <div v-if="boo==4?true:false"></div></dd>
        <dd @tap=" refund">退款/售后 <div v-if="boo==5?true:false"></div></dd>
      </dl>
      <div class="commodity" v-for="item in list" :key="item.id">
        <div class="list">
          <img v-lazy="item.orderImg" alt="">
          <p>
            <span>{{item.orderName}}</span>
            <span>{{item.orderState}}</span>
          </p>
          <div class="time">
            <span>{{item.orderTime}}</span>
            <span>总价：{{item.orderPrice}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import * as API from '../api/index'
export default {
    name:'FormMt',
  data(){
      return {
        list:'',
        timer:'',
        total:'',//总页数
        page:'1',//当前页数
        curr:'10',//一页多少条
        boo:1,
      }
  },
  mounted(){
    this.getlist(this.page,this.curr)
    window.addEventListener("scroll",this.nextPage)
  },
  methods:{
    getlist(page,curr){
        this.boo = 1
      API.order(page,curr).then((res)=>{
        this.total=res.data.total
        this.list=[...this.list,...res.data.order]
      })
    },
    payment(){
      this.boo=2
      API.payment().then((res)=>{
        this.list=res.data.order
      })
    },
    use(){
      this.boo=3
      API.use().then((res)=>{
        this.list=res.data.order
      })
    },
    evaluation(){
      this.boo=4
      API.evaluation().then((res)=>{
        this.list=res.data.order
      })
    },
    refund(){
      this.boo=5
      API. refund().then((res)=>{
        this.list=res.data.order
      })
    },
    nextPage(){//下拉加载下一页
      clearTimeout(this.timer)
      this.timer=setTimeout(()=>{
        let win=document.documentElement || document.body;
        let {scrollTop, clientHeight, scrollHeight}=win;
        if (scrollTop+clientHeight>scrollHeight-100) {
          console.log(scrollTop, clientHeight, scrollHeight);
          if (this.page>this.total) {
            return
          }
          this.page++;
          this.getlist(this.page,this.curr)
        }
      },800)
    }
  }
}
</script>

<style scoped lang="less">
  .FormMt{
    background-color:#f0efed ;
  }
  header{
    height: 1.01rem;
    display: -ms-flexbox;
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
    border: none;
    .header-back{
      height: 1rem;
      width: 1.5rem;
      line-height: 1.2rem;
      padding: 0 .3rem;
      img{
        width: 0.2rem;
        height: 0.36rem;
      }
    }
    .header-title{
      position: absolute;
      top: 0rem;
      left:2.1rem;
      font-size: 0.35rem;
      text-align: center;
      line-height: 1rem;
      width: 3.3rem;
      color: #0f0f0f;
      img{
        width: .25rem;
      }
    }
    .header-seek{
      width: 1.5rem;

      position: absolute;
      top: 0;
      right:0;
      img{
        padding-left: .7rem;
        width: 0.48rem;
        height: 0.48rem;
        margin-top: .3rem;
        margin-right: .15rem;
      }
    }
  }
  .menu{
    height: .65rem;
    text-align: center;
    color: #333;
    padding-top: .2rem;
    padding-right: .3rem;
    margin-bottom: .2rem;
    display: flex;
    position: fixed;
    top: 1rem;
    left: 0;
    right: 0;
    background: #ffffff;
    z-index: 100;
    dd{
      flex: 1;
      font-size: .3rem;
      text-align: center;
      div{
        width: 1rem;
        height: .05rem;
        background: #FFBD00;
        margin-left: .25rem;
        margin-top: .1rem;
      }
    }
  }
  .commodity:first-of-type{
    margin-top: 1.8rem;
  }
  .commodity{
    box-sizing: border-box;
    background: #fff;
    padding: .3rem .24rem;
    border-bottom: 1px solid #ccc;
    .list{
      box-sizing: border-box;
      position: relative;
      overflow: visible;
      -webkit-transition: -webkit-transform .2s;
      img{
        width: .76rem;
        height: .76rem;
        border-radius: .08rem;
        display: inline-block;
        position: absolute;
        left: 0rem;
        top: 0rem;
      }
      p{
        font-size: .3rem;
        color: #333;
        display: inline-block;
        position: absolute;
        top: 0rem;
        left: 1rem;
        width: 89%;
        span:last-of-type{
          font-size: .25rem;
          color: #666;
          position: absolute;
          right: .3rem;
        }
      }
      .time{
        display: inline-block;
        margin-top: .5rem;
        margin-left: 1rem;
        span{
          display: inline-block;
          width: 100%;
          color: #666;
        }
      }
    }
  }
</style>
