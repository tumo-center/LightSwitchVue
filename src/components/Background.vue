<template>
  <div
    id="background"
    :class="{off:!on}"
  >
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'background',
  computed: {
    ...mapState([
      'on'
    ])
  }
}
</script>
<style>
#background
{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}

#background.off
{
  background-color:#036fa9;
}
</style>