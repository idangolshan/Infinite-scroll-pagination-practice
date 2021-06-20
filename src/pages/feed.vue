<template>
  <div class ='posts-group' id="body" ref="infoBox">
    <div class="container" v-for="r in arr">
      <div class="card">
        <h3> נושא הפוסט: {{ r.title }} </h3>
        <p> נכתב ע"י: {{ r.sender }} </p>
        <p>להשלים את הקיז הנכונים לפלאש פוינט</p>
      </div>
    </div>
    <div class="loadMore">
      <q-btn @click="!data.empty && extractPosts()"> טען עוד </q-btn>
    </div>
  </div>
</template>

<script>

import firestore from '../middleware/firestore/feed'

export default {
  name: "feed",
  data() {
    return {
      // container: '',
      arr: [],
      // data: {},
      // body: document.querySelector('body')

    }
  },
  mounted() {
    // Detect when scrolled to bottom.
    const listElm = document.querySelector('#body');

    listElm.addEventListener('scroll', e => {
      console.log(listElm.scrollTop)
      console.log(listElm.clientHeight)
      console.log(listElm.scrollHeight)
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.extractPosts();
      }
    });

    // Initially load some items.
    this.extractPosts();
  },

    // this.$refs.infoBox.focus()
    // addEventListener('scroll', ()=> {
    //   console.log(this.$refs.infoBox.scrollHeight)
    //   console.log(window.scrollY)
    //   console.log('TOTAL:', this.$refs.infoBox.scrollHeight - window.scrollY)
    //   console.log('OFFESET', window.pageYOffset)
    // })

  methods: {
    async extractPosts() {
      this.data = await firestore.GetPostsFromDB()
      this.data.docs.forEach(doc => {
        const post = doc.data();
        this.arr.push(post)
      })
    },

    // handleScroll(event) {
    //   console.log(this.$refs.infoBox.$el.clientHeight, 'clientHeight')
    //   console.log('scrolling')
    //   console.log('this.body.scrollHeight', this.body.scrollHeight)
    //   let triggerHeight = this.body.scrollTop + this.body.offsetHeight;
    //   debugger
    //   if (triggerHeight === this.body.scrollHeight) {
    //     debugger
    //     this.extractPosts()
    //   }
    // let triggerHeight = this.container.scrollTop + this.container.offsetHeight;
    // debugger
    // if (triggerHeight >= this.container.scrollHeight) {
    //
    // }
    //   }
    //
    // },

    // created() {
    //   this.extractPosts()
    //   // window.addEventListener('scroll', this.handleScroll);
    // },

    // destroyed() {
    //   window.removeEventListener('scroll', this.handleScroll);
    // },
  }
}
</script>

<style scoped>

.posts-group {
  height: 80vh;
  background: #f2f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
  padding: 20px;
  /*max-height: 80%;*/
  /*box-sizing: border-box;*/
  overflow: auto;
}
.posts-group::-webkit-scrollbar {
  display: none;
}

.container {

  direction: rtl;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 960px;
  margin: 10px auto;
  padding: 20px;
  /*  scroll stuff*/
  /*max-height: 80%;*/
  /*box-sizing: border-box;*/
  /*overflow: auto;*/
}

.card {
  background: white;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 20px auto;
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
  display: none;
}
</style>
