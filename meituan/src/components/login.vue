<template>
  <div class="login">
    <hedear>
      <div class=" loginimg">
        <img src="https://p0.meituan.net/travelcube/7c71ecc4b44d0e17447076cd23e501cb31967.png" alt="">
      </div>
    </hedear>
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
    margin: 0;
    padding: 0;
  }
  .login{
    margin-top: -.45rem;
  }
  hedear{
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
        width: 50%;
        height: 50%;

      }
    }
  }
  .login-section{
    width: 100%;
    height: 4.4rem;
    .section{
      padding: 0 .2rem;
      height: 1.8rem;
      p:last-of-type{
        width: 100%;
        height: .4rem;
        margin-top: .15rem;
        border-bottom: .001rem #BDBDBD solid;
        position: relative;
        span{
          font-size: .15rem;
          color: #2c3e50;
          position: absolute;
          right: 0;
          bottom: .1rem;
          border-left:.01rem #2c3e50 solid ;
          display: inline-block;
          width: .8rem;
        }
        input{
          caret-color: #FE8C00;
          padding: 0;
          height: .3rem;
          position: absolute;
          bottom: .05rem;
          left: .65rem;
          font-size: .15rem;
          border: none;
          outline:none;
        }
      }
      p:first-of-type{
        width: 100%;
        height: .4rem;
        padding-bottom: 0;
        border-bottom: .001rem #BDBDBD solid;
        position: relative;
        span{
          font-size: .15rem;
          color: #2c3e50;
          position: absolute;
          left: 0;
          bottom: .1rem;
        }
        input{
          caret-color: #FE8C00;
          padding: 0;
          height: .3rem;
          position: absolute;
          bottom: .05rem;
          left: .65rem;
          font-size: .15rem;
          border: none;
          outline:none;
        }
      }
      button{
        color: #222222;
        /*opacity: 0.3;*/
        border-radius: .15rem;
        height: .45rem;
        font-size: .2rem;
        background-image: linear-gradient(-133deg, #FFBD00 0%, #FFD000 100%);
        width: 100%;
        border: 0;
        transform: translate(0,-.3rem);
        outline:none;
      }
    }
    ul{
      li:first-of-type{
        list-style: none;
        font-size: .1rem;
        color: #999;
        text-align: center;
        height: .2rem;
      }
      li:last-of-type{
        font-size: .1rem;
        color: #222;
        text-align: center;
        margin-top: .1rem;
      }
    }
  }
  .login-footer{
    margin: 0 auto;
    color: #999;
    width: 100%;
    text-align: center;
    font-size: .1rem;
   /* position: absolute;
    bottom: .2rem;*/
    margin: 0 auto;
    span{
      color: #FE8C00;
    }
  }
</style>
