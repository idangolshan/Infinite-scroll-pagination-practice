import firebaseInstance from '../../firebase'
// import feed from "pages/feed";

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

  latestDoc = data.docs[data.docs.length - 1]

  return data
}
