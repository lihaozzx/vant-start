<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view
        class="Router"
        :style="{'height':rheight+'px'}"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-right',
      rheight: window.innerHeight
    };
  },
  watch: {
    '$route'() {
      const isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
      this.$router.isBack = false;
    }
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      const html = document.documentElement;
      const windowWidth = html.clientWidth >= 750 ? 750 : html.clientWidth;
      html.style.fontSize = windowWidth / 7.5 + 'px';
    }, false);
  }
};
</script>

<style>
html,
body {
  margin: 0;
  overflow-x: hidden;
}
span p {
  user-select: none;
}
#app {
  max-width: 7.5rem;
  margin: 0 auto;
}
.Router {
  transition: all 0.8s ease;
  overflow-x: hidden;
  overflow-y: auto;
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
