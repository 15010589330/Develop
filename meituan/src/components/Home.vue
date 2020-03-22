<template>
  <div class="Home">
    <div class="Home_y">
      <div class="top">
        <div>
          <img src="../assets/img/unlogin.png" class="userHead" alt />
        </div>
        <div class="address">
          <p>
            <span>北京</span>
            <span class="iconfont icon-arrow-up2"></span>
          </p>
          <p class="weather">
            <span>阴 12℃</span>
          </p>
        </div>
        <div class="ipt">
          <input type="text" v-model="search" />
          <span class="magnifying iconfont icon-xingtaiduICON_sousuo---copy"></span>
        </div>
        <div class="microphone">
          <span class="iconfont icon-huatong"></span>
        </div>
        <div class="ten">
          <span class="iconfont icon-shizi"></span>
        </div>
      </div>
      <div class="hotSearch">
        <div class="hotSearch_80">
          <li>
            <span>热搜:</span>
          </li>
          <li>
            <svg class="icon kouzhao" aria-hidden="true">
              <use xlink:href="#iconcolor-kouzhao" />
            </svg>
            <span>口罩</span>
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
            <svg class="icon hudun" aria-hidden="true">
              <use xlink:href="#iconcolor-hudun-copy" />
            </svg>
            <span>安心返工</span>
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
            <span>米饭</span>
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
            <span>可乐</span>
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
            <span>美团买菜</span>
          </li>
        </div>
      </div>
      <div class="scan">
        <li>
          <span class="iconfont icon-saoma"></span>
          <span class="word">扫一扫</span>
        </li>
        <li>
          <span class="iconfont icon-fukuanma"></span>
          <span class="word">付款码</span>
        </li>
        <li>
          <span class="iconfont icon-xinaixin"></span>
          <span class="word">畅行码</span>
        </li>
        <li>
          <span class="iconfont icon-danche"></span>
          <span class="word">骑车</span>
        </li>
      </div>
      <div class="middle_y">
        <div class="middle_w">
          <li>
            <svg class="icon bigicon" aria-hidden="true">
              <use xlink:href="#iconcolor-meituanwaimai" />
            </svg>
            <span>外卖</span>
          </li>
          <li>
            <svg class="icon bigicon" aria-hidden="true">
              <use xlink:href="#iconcolor-meishi" />
            </svg>
            <span>美食</span>
          </li>
          <li>
            <svg class="icon bigicon" aria-hidden="true">
              <use xlink:href="#iconcolor-jiudianzhusu" />
            </svg>
            <span>酒店/住宿</span>
          </li>
          <li>
            <svg class="icon bigicon" aria-hidden="true">
              <use xlink:href="#iconcolor-ziyuan-copy" />
            </svg>
            <span>休闲/玩乐</span>
          </li>
          <li>
            <svg class="icon bigicon" aria-hidden="true">
              <use xlink:href="#iconcolor-maoyandianying" />
            </svg>
            <span>电影/演出</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconcolor-car" />
            </svg>
            <span>打车</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconcolor-cai" />
            </svg>
            <span>送菜上门</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconcolor-yao" />
            </svg>
            <span>送药上门</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconcolor-chaoshi" />
            </svg>
            <span>超市/便利店</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconcolor-huoche" />
            </svg>
            <span>火车票/机票</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconcolor-mianfeiling" />
            </svg>
            <span>免费领</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconcolor-daishufuwu" />
            </svg>
            <span>袋鼠快跑</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconcolor-hongbao_qiandao" />
            </svg>
            <span>红包签到</span>
          </li>
          <li>
            <svg class="icon jieqian" aria-hidden="true">
              <use xlink:href="#iconcolor-jieqian" />
            </svg>
            <span>借钱</span>
          </li>
          <li>
            <span class="iconfont icon-gengduo"></span>
            <span>更多</span>
          </li>
        </div>
      </div>
    </div>
    <div class="slideshow">
      <mt-swipe :auto="0">
        <mt-swipe-item>
          <img src="../assets/img/1.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/2.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/3.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/4.jpg" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="falls_c clear">
      <div class="falls clear" >
        <div class="leftFalls" ref="left">
            <div class="fallsBox" v-for='item in leftFallitems' :key='item.id' >
              <img :src="item.imgsrc" alt width="100%" />
              <p class="shopname">{{item.shopname}}</p>
              <p class="grade">{{item.grade}}</p>
              <p class="discount">{{item.discount}}</p>
              <p class="price">{{item.price}}</p>
            </div>
          </div>
          <div class="rightFalls" ref='right'>
            <div class="fallsBox" v-for='item in rightFallitems' :key='item.id' >
              <img :src="item.imgsrc" alt width="100%" />
              <p class="shopname">{{item.shopname}}</p>
              <p class="grade">{{item.grade}}</p>
              <p class="discount">{{item.discount}}</p>
              <p class="price">{{item.price}}</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { getIndexShop } from "../api";
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
export default {
  name: "Home",
  data() {
    return {
      search: "",
      fallindex: [],
      leftFallitems:[],
      rightFallitems:[]
    };
  },
  created() {
    axios.get("/mock/index").then(res => {
        this.fallindex=res.data
      console.log(res.data)
        this.updateWaterFalls();
    });
  },
  mounted(){
    
  },
  methods: {
    updateWaterFalls(){
      let leftHeight = this.$refs.left.clientHeight;
      let rightHeight = this.$refs.right.clientHeight;
      //console.log(leftHeight)
      //console.log(rightHeight)
      let falls = this.fallindex.shift();
      //console.log(this.fallindex)
      //console.log(falls)
      if(falls ==null){
        return
      }
      if(leftHeight<=rightHeight){
        this.leftFallitems.push(falls)
      }else{
        this.rightFallitems.push(falls)
      }
     
       this.$nextTick(()=>{
         this.updateWaterFalls();
       })
    },
  },
  computed:{
  },
  components: {

  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.Home_y {
  background-color: #f8d146;
}
.top {
  padding-top: 0.2rem;
  width: 100%;
  background-color: #f8d146;
  display: flex;
  align-items: center;
  justify-content: center;
  div:first-of-type {
    display: flex;
    justify-content: center;
  }
  & > div {
    flex: 1;
  }
  .userHead {
    width: 0.77rem;
  }
  .address {
    p {
      color: #222222;
      &:first-of-type {
        display: flex;
        justify-content: center;
        font-weight: 550;
        font-size: 0.33rem;
      }
    }
    .weather {
      display: flex;
      justify-content: center;
    }
  }
  .ipt {
    position: relative;
    input {
      border-radius: 0.1rem;
      height: 0.6rem;
    }
    span {
      position: absolute;
      left: 0.2rem;
      top: 0.18rem;
      font-size: 0.26rem;
    }
  }
  .microphone {
    color: #222222;
    display: flex;
    justify-content: center;
    .icon-huatong {
      font-size: 0.5rem;
    }
  }
  .ten {
    color: #222222;
    .icon-shizi {
      font-size: 0.4rem;
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.hotSearch {
  background-color: #f8d146;
  display: flex;
  align-items: center;
  justify-content: center;
  .hotSearch_80 {
    display: flex;
    width: 90%;
    align-items: center;
    height: 0.7rem;
    background-color: #f8d146;
    justify-content: space-around;
    li {
      display: flex;
      justify-items: center;
      color: #222222;
      &:first-of-type {
        color: #222222;
        font-weight: 500;
      }
      .kouzhao {
        height: 0.35rem;
        width: 0.3rem;
        font-size: 0.3rem;
      }
      .hudun {
        height: 0.35rem;
        width: 0.3rem;
        font-size: 0.3rem;
      }
    }
  }
}
.scan {
  margin: 0.3rem 0;
  display: flex;
  background-color: #f8d146;
  align-items: center;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #1f1f21;
    .icon-fukuanma {
      font-weight: 700;
    }
    .iconfont {
      font-size: 0.6rem;
      color: #1f1f21;
      margin-bottom: 0.1rem;
    }
    .word {
      font-weight: 600;
    }
  }
}
.middle_y {
  display: flex;
  background: linear-gradient(180deg, #f8d146 5%, white 50%);
  justify-content: center;
  .middle_w {
    border-top-left-radius: 0.45rem;
    border-top-right-radius: 0.45rem;
    display: flex;
    width: 95%;
    background-color: white;
    flex-wrap: wrap;
    li {
      margin: 0.2rem 0;
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      svg {
        margin-bottom: 0.1rem;
        font-size: 0.5rem;
      }
      .bigicon {
        font-size: 1.1rem;
      }
      .icon-gengduo {
        margin-bottom: 0.1rem;
        font-size: 0.5rem;
        color: #1abfbf;
      }
    }
  }
}
.slideshow {
  display: flex;
  background-color: #f4f4f4;
  .mint-swipe {
    margin: 0 auto;
    width: 95%;
    height: 2.5rem;
    border-radius: 0.25rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.falls_c {
  width: 100%;
  background-color: #f4f4f4;
  .falls {
    margin: 0 auto 2rem;
    width: 95%;
    padding-top: .1rem;
    .leftFalls{
      float: left;
      width:48%;
    }
    .rightFalls{
      float: right;
      width:48%;
    }
    .fallsBox {
      padding-bottom: 0.2rem;
      width: 100%;
      border-radius: 0.1rem;
      background-color: white;
      margin:.2rem auto;
      img {
        border-radius: 0.1rem;
        width: 100%;
      }
      p {
        margin: 0.1rem;
        white-space: pre-line;
      }
      .shopname {
        font-size: 0.33rem;
        font-weight: 600;
        color: black;
      }
      .grade {
        color: #ee7b38;
        font-size: 0.27rem;
        font-weight: 450;
      }
      .discount {
        font-size: 0.27rem;
        display: inline-block;
        color: #f0837e;
        border: 0.04rem solid #fef3f2;
        background-color: #fef6f5;
      }
      .price {
        font-size: 0.27rem;
        margin: 0.2rem,0,0.2rem,0;
      }
    }
  }
}
.clear::after{
  content: "";
  display: block;
  height: 0;
  clear:both;
  visibility: hidden;

}
</style>
