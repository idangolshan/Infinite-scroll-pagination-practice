<template>
<div>
  hello Idan
</div>
</template>

<script>
import fbi from '../middleware/firebase'
export default {
  name: "CollectionGroup",
  created() {
    const ids = ['22','33','44'];
   return fbi.db().collectionGroup('posts').
   where('id', 'in', ids ).orderBy('time').
   get()
    .then(r => r.docs.forEach(doc => {
      console.log(doc.data())
    }))
    .catch(e => console.log(e))
  }
}
</script>

<style scoped>

</style>
