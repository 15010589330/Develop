<template>
  <div id="app">
    <router-view/>
    <footers></footers>
  </div>
</template>

<script>
import footers from './base/footers'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    footers,
  }
}
</script>

<style>
  body, ul, li, h1, h2, h3, h4, h5, h6, p, form, dl, dt, dd {
    margin:0;
    padding: 0;
    font-size: .2rem;
    color:#606266;
 }
 ul,li{list-style: none;}
input{border: none;outline:none}
</style>
