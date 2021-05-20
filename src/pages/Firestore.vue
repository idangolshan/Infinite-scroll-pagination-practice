<template>
<div class="container">
  <h4>send something to firestore</h4>
  <div class="item" style="max-width: 350px">
    <q-input v-model="item"/>
    <q-btn @click="setItem(item)" label="send product"/>
    <q-input v-model="id" label="enter Id to delete"/>
    <q-btn @click="deleteItem(id)" label="delete item"/>
    <q-input v-model="item" label="enter Id to delete"/>
    <q-btn @click="updateItem(item, id)" label="update item"/>

    <h4>{{id}}</h4>

    <div style="height: 100px; width: 100px">
      <q-btn label="try to delete collection" @click="deleteColection"/>
    </div>
  </div>

</div>
</template>

<script>


import fbi from '../middleware/firebase/index'
export default {
  name: "Firestore",
  created() {
    this.getItem()
    .catch(e => console.log(e))
  },

  data() {
    return {
      item: '',
      id: ''
    }
  },

  methods: {
    setItem(item){
      fbi.firebase.firestore().collection('items').doc(`SbbazknQxvNGR3c9J5w32bDci9H2`).collection('item-one').doc()
      .set({item})
    },
    getItem(){
      fbi.firebase.firestore().collection('items').doc(`SbbazknQxvNGR3c9J5w32bDci9H2`).collection('item-one').
      get()
        .then(docs => docs.forEach((doc) => {
          console.log(doc.data().item)
        }
    ))
    },

    deleteItem(id){
      const ref = `items/${user.uid}/item-one`;
      fbi.firebase.firestore().collection(ref).doc(id).delete()
    },

    updateItem(item, id){
      debugger
      const ref = `items/${user.uid}/item-one`;
      fbi.firebase.firestore().collection(ref).doc(id).update({name: fbi.firebase.firestore.FieldValue.delete()})
    },
    deleteColection() {
      fbi.firebase.firestore().collection('Cloud').doc('data')
    }
  }
}
</script>

<style scoped>

</style>
