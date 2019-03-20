<template>
  <div id="app">
    <Chart />
    <Grid />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Chart from './components/Chart'
import Grid from './components/Grid'

export default {
  components: {Chart, Grid},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      discountRate: 20
    }
  },
}
</script>

<style>
  @import url('./assets/common.css');
</style>
