<template>
  <div>
    <div class="placeholder" />
    <nav-bar
      :style="sty"
      @click-left="clickLeft"
      @click-right="clickRight"
    >
      <van-icon
        v-if="back"
        slot="left"
        size="0.5rem"
        name="arrow-left"
        :color="lc"
      />
      <slot
        v-else
        slot="left"
        name="left"
      />

      <span
        slot="title"
        class="title"
        :style="{'color':tc}"
      >{{ $route.meta.title }}</span>

      <slot
        slot="right"
        name="right"
      />
    </nav-bar>
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  components: {
    NavBar
  },
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
    back: {
      type: Boolean,
      default: false
    },
    goHome: {
      type: Boolean
    }
  },
  data() {
    return {
      sty: {
        backgroundColor: this.bc,
        width: '7.5rem',
        position: 'absolute',
        top: 0,
        zIndex: 999999999
      }
    };
  },
  methods: {
    clickLeft() {
      if (this.back) {
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
  }
};
</script>

<style scoped lang="scss">
.placeholder {
  height: 46px;
}

.title {
  font-size: 0.34rem;
}
.van-hairline--bottom::after {
  border: none;
}
</style>
