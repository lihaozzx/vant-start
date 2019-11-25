<template>
  <div>
    <van-button @click="login">login</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
import { getUserInfo } from '../api/user';
export default {
  components: {
    vanButton: Button
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
    console.log(process.env);
  },
  mounted() {},
  methods: {
    login() {
      getUserInfo().then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
