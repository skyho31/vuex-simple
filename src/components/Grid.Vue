<template>
  <div class="grid box">
    <h1>Grid</h1>
    <label for="selector">Dropdown box</label>
    <select 
      name="selector"
      @change="changeValue">
      <option 
        v-for="option in options"
        :key="option.value"
        :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      options: [
        {name: 'a', value: 1},
        {name: 'b', value: 2},
        {name: 'c', value: 3},
        {name: 'd', value: 4},
      ]
    }
  },
  methods: {
    changeValue({ target: { value } }) {
      this.setSelectedValue(value)
    },
    ...mapActions(['setSelectedValue'])
  }
}
</script>