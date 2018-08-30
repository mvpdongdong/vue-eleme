<template>
  <div>
    <Header :seller="seller"/>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/shop/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"/>
  </div>
</template>
<script>
import '@/assets/global.scss';
import { axiosGet } from '@/utils/request';
import Header from '@/components/Header.vue';

export default {
  data() {
    return {
      seller: {},
    };
  },
  created() {
    axiosGet({
      url: '/api/seller',
    }).then((res) => {
      this.seller = res.data;
    }).catch((err) => {
      console.log(err);
    });
  },
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
.tab {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: relative;
}
.tab:after {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(7,17,27,0.1);
  content: ' ';
}
.tab .tab-item {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  text-align: center;
}
.tab .tab-item > a {
  display: block;
  font-size: 14px;
  color: #4d555d;
}
.tab .tab-item > a.active {
  color: #f01414;
}
</style>

