<template>
  <div>
    <nav-bar
      @click-left="clickLeft"
      @click-right="clickRight"
      :style="{'backgroundColor': bc}"
    >
      <van-icon
        v-if="left"
        slot="left"
        size="0.5rem"
        name="arrow-left"
        :color="lc"
      />
      <slot
        v-else
        slot="left"
        name="left"
      ></slot>

      <span
        slot="title"
        class="title"
        :style="{'color':tc}"
      >{{$route.meta.title}}</span>

      <slot
        slot="right"
        name="right"
      ></slot>
    </nav-bar>
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  props: {
    lc: {
      type: String,
      default: '#ffffff'
    },
    bc: {
      type: String,
      default: '#ff2644'
    },
    tc: {
      type: String,
      default: '#ffffff'
    },
    left: {
      type: Boolean,
      default: false
    },
    goHome: {
      type: Boolean
    },
  },
  components: {
    NavBar
  },
  methods: {
    clickLeft() {
      if (this.left) {
        if (this.goHome) {
          this.$router.push({ path: '/' });
        } else {
          this.$router.go(-1);
        }
      } else {
        this.$emit('click-left');
      }
    },
    clickRight() {
      this.$emit('click-right');
    }
  },
};
</script>

<style scoped lang="scss">
.title {
  font-size: 0.34rem;
}
</style>
