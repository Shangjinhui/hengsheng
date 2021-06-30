<template>
  <div id="app">
    <my-header></my-header>
    <div class="page-mh">
        <keep-alive v-if="$route.meta.cache">
          <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view>
    </div>
    
    <my-footer></my-footer>
    <fixed-msg></fixed-msg>
  </div>
  
</template>

<script>
import myHeader from '@/components/header';
import myFooter from '@/components/footer';
import fixedMsg from '@/components/leavemsg'
export default {
  name: 'App',
  components:{
    myHeader,
    myFooter,
    fixedMsg
  },
}
</script>
