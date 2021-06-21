import firebaseInstance from '../../firebase'

// Pagination practice
export default {
  GetPostsFromDB
}

//store last doc
let latestDoc = null;

async function GetPostsFromDB() {

  const ref = firebaseInstance.db().collection('posts')
    .orderBy('createdAt', 'asc' )
    .startAfter(latestDoc || 0)
    .limit(3)
  const data = await ref.get()
    .catch(e => console.log(e));
  console.log('data!!!!!', data)
  console.log('data array length!!!!!', data.docs.length)

  // data.docs === arr, this is why we are going for the last element in the arr
  latestDoc = data.docs[data.docs.length - 1] // [index]

  return data
}
