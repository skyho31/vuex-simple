<template>
  <div class="chart box">
    <h1>Chart</h1>
    <p>{{ selectedValue }}</p>
    <p>{{ selValue }}</p>
    <p>{{ selectedValueDiff }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      selectedValueDiff: state => state.grid.selectedValue
    }),
    ...mapGetters({
      selValue: 'selectedValue'
    }),
    ...mapGetters(['selectedValue'])
  }  
}
</script>