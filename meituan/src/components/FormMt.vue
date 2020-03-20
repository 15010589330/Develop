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
        <dd>全部</dd>
        <dd>待付款</dd>
        <dd>待使用</dd>
        <dd>待评价</dd>
        <dd>退款/售后</dd>
      </dl>
      <div class="commodity">
        <div></div>
      </div>
    </div>
</template>

<script>
export default {
    name:'FormMt',
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
    background-color: #ffffff;
    dd{
      flex: 1;
      font-size: .3rem;
    }
  }
  .commodity{
    box-sizing: border-box;
    background: #fff;
    div{
      box-sizing: border-box;
      padding: .3rem .24rem;
      border-bottom: 1px solid #ccc;
      position: relative;
      overflow: visible;
      -webkit-transition: -webkit-transform .2s;
    }
  }
</style>
