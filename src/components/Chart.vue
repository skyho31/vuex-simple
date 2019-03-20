<template>
  <div class="chart box">
    <h1>Chart</h1>
    {{ selectedValue }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['selectedValue'])
  }  
}
</script>