<template>
  <div>
    <div class ='posts-group' id="body" >
      <div class="container" v-for="r in arr" >
        <div class="card">
          <h3> נושא הפוסט: {{ r.title }} </h3>
          <p> נכתב ע"י: {{ r.sender }} </p>
<!--          <p>להשלים את הקיז הנכונים לפלאש פוינט</p>-->
        </div>
      </div>
      <div class="loadMore" >
        <q-btn @click="!data.empty && extractPosts()"> טען עוד </q-btn>
      </div>
    </div>
    <div class="loading" v-model="loading" v-show="loading" dir="rtl">  טוען פוסטים... </div>
  </div>

</template>

<script>

import firestore from '../middleware/firestore/feed'

export default {
  name: "feed",
  data() {
    return {
      arr: [],
      data: {},
      // Catches into a variable the loading class from the DOM
      loading: false

    }
  },
  mounted() {
    // Detect when scrolled to bottom.
    const postsElm = document.querySelector('#body');

    // Initially load some items.
    this.extractPosts();

    // User scroll tracking & activating an action
    postsElm.addEventListener('scroll', e => {
      // console.log(postsElm.scrollTop, 'scroll Topppppppp')
      // console.log(postsElm.clientHeight, 'client Heightttt')
      // console.log(postsElm.scrollHeight, 'scroll Heightttt')
      // console.log(this.data.empty)
      if (postsElm.scrollTop + postsElm.clientHeight >= postsElm.scrollHeight && !this.data.empty) {
        this.extractPosts();
      }
    });


  },

  methods: {
    // Activating the GetPostsFromDB in the index file
    async extractPosts() {
      this.loading = true; // Loading text appears
      this.data = await firestore.GetPostsFromDB()
      this.data.docs.forEach(doc => {
        const post = doc.data();
        this.arr.push(post)
      })
      this.loading = false; // Loading text disappears

    },
  }
}
</script>

<style scoped>

.posts-group {
  height: 90vh;
  background: #f2f2f2f2;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 20px;
  /*  scroll stuff*/
  max-height: 80%;
  box-sizing: border-box;
  overflow: auto;
}
/*.posts-group::-webkit-scrollbar {*/
/*  display: none;*/
/*}*/

.container {
/*background: #1D1D1D;*/
  direction: rtl;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 960px;
  margin: 10px auto;
  padding: 20px;
}

.card {
  background: white;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 40px auto;
  font-size: 1.2em;
}

.card h3 {
  margin-bottom: 0;
}

.card p {
  margin-top: 4px;
}

.loadMore {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  /*display: none;*/
}

.loading {
  display: block;
  font-size: 2em;
  text-align: center;
  margin: 5px 0;
  bottom: 80px;
  left: 50%;
  top: 50%;
  /*border: 16px solid #f3f3f3; !* Light grey *!*/
  /*border-top: 16px solid #3498db; !* Blue *!*/
  /*border-radius: 50%;*/
  /*width: 120px;*/
  /*height: 120px;*/
  /*animation: spin 2s linear infinite;*/
  /*align-items: center;*/
  /*position: absolute;*/
}
/*@keyframes spin {*/
/*  0% { transform: rotate(0deg); }*/
/*  100% { transform: rotate(360deg); }*/
/*}*/

</style>
