import firebaseInstance from '../../firebase'
const ids = ['22','33','44'];

// Pagination practice
export default {
  getPostsFromDB
}

//store last doc
let latestDoc = null;

async function getPostsFromDB() {

  const ref = firebaseInstance.db().collectionGroup('posts')
    .where('id', 'in', ids)
    .orderBy('time', 'asc' )
    .startAfter(latestDoc || 0)
    .limit(3)
  const data = await ref.get()
    .catch(e => console.log(e));

  // data.docs === arr, this is why we are going for the last element in the arr
  latestDoc = data.docs[data.docs.length - 1] // [index]
  console.log(data.docs)
  return data
}
