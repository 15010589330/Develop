<template>
    <div class="MyMt">
      <header>
        <div class="header-back">
          <img src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png" alt="">
        </div>
        <div class="header-title" >
          <span>我的美团</span>
        </div>
        <div class="header-seek">
          <img src="https://p1.meituan.net/travelcube/142ba119b889881105236ef57446e6bf866.png" alt="">
          <img src="https://p0.meituan.net/travelcube/4b45dc09c35f9175498345f8672d08991022.png" alt="">
        </div>
      </header>
      <div class="account">
        <div class="head">
          <img src="http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/pic-default.png" alt="">
        </div>
        <div class="user">
          <p>rRh123456789</p>
          <p></p>
          <div>账户余额：<span>0</span>元</div>
        </div>
      </div>
      <div class="list">
        <p class="order">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dingdan"></use>
          </svg>
          <span>全部订单</span>
        </p>
        <div>
          <ul>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-daifukuan"></use>
              </svg>
              <p>待付款</p>
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-daishiyongdikouquan"></use>
              </svg>
              <p>待使用</p>
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-daipingjia01"></use>
              </svg>
              <p>待评价</p>
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tuikuan-shouhou"></use>
              </svg>
              <P>退款/售后</P>
            </li>
          </ul>
        </div>
      </div>
      <dl class="list">
        <dd>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <span>我的收藏</span>
        </dd>
        <dd>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon_A"></use>
          </svg>
          <span>我的抵用券</span>
        </dd>
        <dd>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liwu_jiangpin_choujiang"></use>
          </svg>
          <span>我的抽奖单</span>
        </dd>
        <dd>
          <img src="http://p0.meituan.net/mmc/7a85a206820814190b1fc332c10f37cf3081.png" alt="">
          <span>积分换礼品</span>
        </dd>
      </dl>
      <footer>
        <div class="city">
          <span>城市：
          <img src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png" alt="">
          北京</span>
        </div>
        <div class="link">
          友情链接：
          <p>猫眼电影</p>
          <p>大众点评</p>
          <p>美团旅行</p>
          <p>民宿</p>
          <p>大众点评下载</p>
          <p>美团收银官网</p>
          <p>美团点评餐饮学院</p>
          <p>快驴进货商家合作</p>
        </div>
      </footer>
    </div>
</template>

<script>
export default {
    name:'MyMt'
}
</script>

<style scoped lang="less">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .MyMt{
    font-size: .28em;
    color: #333;
    background-color: #f0efed;
  }
  header{
    height: 1.01rem;
    display: -webkit-box;
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
      font-size: 0.32rem;
      text-align: center;
      line-height: 1rem;
      width: 3.3rem;
    }
    .header-seek{
      width: 1.5rem;
      padding-left: .5rem;
      img{
        width: 0.48rem;
        height: 0.48rem;
        margin-top: .3rem;
        margin-right: .15rem;
      }
    }
  }
  .account{
    width:100%;
    height: 1.6rem;
    background-image:url("http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/my-photo.png");
    background-repeat:no-repeat;
    background-size:100%;
    position: relative;
    border-top: 1px solid #DDD8CE;
    border-bottom: 1px solid #DDD8CE;
    .head{
      position: absolute;
      top: .2rem;
      left: .4rem;
      border-radius: 50%;
      img{
        width: 1.2rem;
        height: 1.2rem;
      }
    }
    .user{
      position: relative;
      height: 100%;
      padding: .28rem .2rem;
      margin-right: .2rem;
      box-sizing: border-box;
      padding-left: 2rem;
      color: #666;
      p:first-of-type{
        font-size: .3rem;
        color: #333;
        margin-top: .1rem;
        margin-bottom: .25rem;
        display: inline-block;
        width: 2.2rem;
      }
      P:last-of-type{
        width: .3rem;
        height: .3rem;
        display: inline-block;
        background: url('http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/css/i/vip3.png');
        background-size: .3rem;
        margin-top: -.05rem;
      }
      span{
        color: #FF9712;
      }
    }
    .extend{

    }
  }
  .list{
    border-top: 1px solid #DDD8CE;
    border-bottom: 1px solid #DDD8CE;
    margin-top: .2rem;
    margin-bottom: 0;
    background-color: #fff;
    .order{
      margin: 0;
      border-bottom: 1px solid #DDD8CE;
      overflow: hidden;
      position: relative;
      padding-left: .2rem;
      padding-bottom: .1rem;
      font-size: .6rem;
      span{
        font-size: .28rem;
        color: #0f0f0f;
      }
    }
    div{
      ul{
        display: flex;text-align: center;
        padding: .1rem .1rem .2rem .1rem;
        li{
          flex: 1;
          list-style: none;
          font-size: .6rem;
          p{
            font-size: .3rem;
          }
        }
      }
    }
  }
  dl{
    dd{
      border:1px solid #DDD8CE;
      font-size: .6rem;
      padding-left: .2rem;
      padding-top:.1rem;
      padding-bottom:.1rem;
      span{
        font-size: .28rem;
        color: #0f0f0f;
      }
      img{
        width: .55rem;
      }
    }
  }
  footer{
    background: #FFFFFF;
    padding: 0 .2rem .4rem;
    border-top: #ffffff 1rem solid;
    .city{
      margin-top: -0.9rem;
      padding-top: 0.3rem;
      padding-left: 0.3rem;
      span{
        font-size: .3rem;
        img{
        width: .3rem;
      }
      }
    }
    .link{
      text-align: center;
      margin-top:.35rem ;
      p{
        display: inline-block;
        margin: .1rem .1rem 0rem .1rem;
      }
    }
  }
</style>
