<template>
  <div class="login">
    <header>
      <div class=" loginimg">
        <img src="https://p0.meituan.net/travelcube/7c71ecc4b44d0e17447076cd23e501cb31967.png" alt="">
      </div>
    </header>
    <div class="login-section">
      <div class="section">
        <p>
          <span href="" >中国+86</span>
          <input type="el" placeholder="请输入手机号/用户名" maxlengh="13">
        </p>
        <p>
          <input type="password" placeholder="请输入密码/验证码" maxlengh="13">
          <span>获取验证码</span>
        </p>
        <button>登陆</button>
      </div>
      <ul>
        <li>未注册的手机号验证后自动创建美团账户</li>
        <li>账号密码登陆</li>
      </ul>
    </div>
    <div class="login-footer">
      <p>登录即代表您已经同意</p>
      <span>《美团点评用户服务协议》《隐私政策》</span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'login',
  }
</script>
<style scoped lang="less">
  *{
    margin:0;
    padding: 0;
  }
  header{
    height: 2.7rem;
    box-sizing: border-box;
    padding-top: .5rem;
    text-align: center;
    .loginimg{
      margin: 0 auto;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      img{
        width: 100%;
        height: 100%;

      }
    }
  }
  .login-section{
    width: 100%;
    .section{
      padding: .3rem .65rem 0 .65rem;
      p:last-of-type{
        height: .7rem;
        box-sizing: border-box;
        padding-bottom: 0;
        align-items: center;
        position: relative;
        border-bottom: .001rem #646464 solid;
        span{
          background-color: transparent;
          color: #666;
          cursor: pointer;
          position: absolute;
          right: 0;
          bottom: .15rem;
          border-left: .001rem #646464 solid;
          text-align: center;
          width: 1.5rem;
        }
        input{
          font-size: .3rem;
          padding-left: 0;
          caret-color: #FE8C00;
          letter-spacing: .002rem;
          position: absolute;
          bottom: .15rem;
        }
      }
      p:first-of-type{
        border-bottom: .001rem #646464 solid;
        height: .7rem;
        box-sizing: border-box;
        padding-bottom: 0;
        align-items: center;
        position: relative;
        margin-bottom: .4rem;
        span{
          max-width: 45%;
          display: flex;
          min-width: 0;
          font-size: .28rem;
          color: #646464;
          padding-top: .1rem;
        }
        input{
          caret-color: #FE8C00;
          font-size: .3rem;
          padding: 0;
          letter-spacing: .002rem;
          height: .5rem;
         /* line-height: 1.2em;*/
          position: absolute;
          left: 1.3rem;
          bottom: .07rem;
        }
      }
      button{
        margin-top: 2em;
        color: #222222;
        font-family: PingFangSC-Medium;
        border-radius: .2rem;
        height: .9rem;
        line-height: .9rem;
        background-image: linear-gradient(-133deg, #FFBD00 0%, #FFD000 100%);
        width: 100%;
        display: block;
        border: none;
        cursor: pointer;
        font-size: 1em;
      }
    }
    ul{
      li:first-of-type{
        list-style: none;
        font-size: .1rem;
        color: #999;
        text-align: center;
        height: .2rem;
        margin: .2rem;
      }
      li:last-of-type{
        font-size: .25rem;
        color: #222;
        text-align: center;
        margin-top: .45rem;
      }
    }
  }
  .login-footer{
    width: 100%;
    text-align: center;
    font-size: .24rem;
    height: 1rem;
    position: fixed;
    bottom:0rem;
    background: #ffffff;
    z-index: 100;
    span{
      color: #FE8C00;
    }
  }
</style>
