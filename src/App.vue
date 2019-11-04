<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    '$route'() {
      let isBack = this.$router.isBack //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  },
  data() {
    return {
      transitionName: 'slide-right',
    }
  }
}
</script>

<style>
html,
body {
  margin: 0;
  overflow-x: hidden;
}
span {
  user-select: none;
}
.Router {
  transition: all 0.8s ease;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
