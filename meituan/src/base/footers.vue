<template>
  <div class="footers">
    <router-link v-for="(item) in list" :key="item.id" :to="item.path" tag="li">
      <div class="footers_box">
        <div>
          <span :class="item.path===$route.path?item.activeClass:item.class"></span>
        </div>
        <div>
          <span>{{item.name}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  names: "footers",
  data() {
    return {
      list: [
        {
          id: 1,
          name: "首页",
          path: "/Home",
          class: "iconfont icon-shouye",
          activeClass: "iconfont icon-shouye2"
        },
        {
          id: 2,
          name: "发现",
          path: "/FindMt",
          class: "iconfont icon-danyehuaban",
          activeClass: "iconfont icon-danyehuaban-copy"
        },
        {
          id: 3,
          name: "订单",
          path: "/FormMt",
          class: "iconfont icon-dingdan",
          activeClass: "iconfont icon-dingdan-copy"
        },
        {
          id: 4,
          name: "我的",
          path: "/MyMt",
          class: "iconfont icon-wode",
          activeClass: "iconfont icon-wode-copy"
        }
      ]
    };
  }
};
</script>
<style scoped lang='less'>
.icon-shouye2,.icon-wode-copy,.icon-danyehuaban-copy,.icon-dingdan-copy {
  color: #f6cc4a;
}
.footers {
  position: fixed;
  background-color: white;
  bottom: 0;
  width: 100%;
  height: 1rem;
  border-top: 0.01rem solid #ccc;
  font-size: 0.1rem;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  li {
    flex: 1;
    .footers_box {
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      align-items: center;
      .icon-shouye {
        font-size: 0.45rem;
      }
      .iconfont {
        font-size: 0.5rem;
      }
    }
  }
}


</style>