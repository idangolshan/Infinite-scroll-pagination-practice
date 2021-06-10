<template>
  <div>
<h5>Bro One</h5>
    <input type="number" v-model="number"/>
    <q-btn @click="sendNumber" label="send Number"/>
  </div>
</template>

<script>


export default {
  name: "BroOne",
  data(){
    return {
      number: 0
    }
  },
  methods: {
    sendNumber(){
      this.$emit('sisinumber', this.number)
    }
  }
}
</script>

<style scoped>

</style>
