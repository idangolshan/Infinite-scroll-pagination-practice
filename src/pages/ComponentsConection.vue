<template>
  <div>
    <h3>Connection</h3>
<BroOne @sisinumber="setNumberAtFuther"/>
    <div style="height: 100px; width: 100px; background: lightslategrey">
        Number: {{number}}
    </div>
<BroTwo v-bind:futherNumber="number"/>
  </div>
</template>

<script>
import BroOne from "src/middleware/ComponentsConection/BroOne";
import BroTwo from "src/middleware/ComponentsConection/BroTwo";
export default {
  name: "ComponentsConection",
  components: {BroTwo, BroOne},
  data(){
    return {
      number: 0
    }
  },
  methods: {
    setNumberAtFuther(nunber) {
      debugger
      this.number = nunber
    }
  }
}
</script>

<style scoped>

</style>
