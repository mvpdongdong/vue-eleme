<template>
  <div id="nav">
    <router-link to="/goods">商品</router-link>
  </div>
</template>
<script>
export default {
  name: 'Header'
}

</script>
<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

