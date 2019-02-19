<template>
  <div id="app">
    <background></background>
    <div id="switches">
      <light-switch
        :on="on"
      >
      </light-switch>
      <light-switch
        :on="!on"
      >
      </light-switch>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LightSwitch from './components/LightSwitch.vue';
import Background from './components/Background.vue';

export default {
  name: 'app',
  components: {
    Background,
    LightSwitch
  },
  computed: {
    ...mapState([
      'on'
    ])
  }
}
</script>

<style>
  #switches
  {
    display: flex;
    justify-content: space-between;
    width: 600px;
    height: 320px;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    position: absolute;
    margin: auto;
  }
</style>
