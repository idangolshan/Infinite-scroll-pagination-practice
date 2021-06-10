<template>
  <div>
    <h5>Bro Two</h5>
    <h3> {{setFuther }} </h3>

  </div>
</template>

<script>
export default {
  name: "BroTwo",
  props:['futherNumber'],
  created() {

  },
  computed: {
    setFuther() {
      return this.futherNumber += 3;
    }
  }
}
</script>

<style scoped>

</style>
