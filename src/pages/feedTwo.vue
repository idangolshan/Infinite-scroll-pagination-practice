<template>
  <div>
  <div class="heading">
    <h1>Infinite Scroll</h1>
    <h4>A simple infinite scroll example using Vue.js</h4>
  </div>

  <div class="container">

    <div class="list-group-wrapper">
      <transition name="fade">
        <div class="loading" v-show="loading">
          <span class="fa fa-spinner fa-spin"></span> Loading
        </div>
      </transition>
      <ul class="list-group" id="infinite-list">
        <li class="list-group-item" v-for="item in items" v-text="item"></li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "feedTwo",
  data() {
    return {
      loading: false,
      nextItem: 1,
      items: []
    }

  },
  mounted () {

    // Detect when scrolled to bottom.
    const listElm = document.querySelector('#infinite-list');
    listElm.addEventListener('scroll', e => {
      if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loadMore();
      }
    });

    // Initially load some items.
    this.loadMore();

  },
  methods: {
    loadMore () {

      /** This is only for this demo, you could
       * replace the following with code to hit
       * an endpoint to pull in more data. **/
      this.loading = true;
      setTimeout(e => {
        for (let i = 0; i < 20; i++) {
          this.items.push('Item ' + this.nextItem++);
        }
        this.loading = false;
      }, 200);
      /**************************************/

    }
  }
}
</script>

<style lang="scss" scoped>
$purple: #5c4084;

body {
  background-color: $purple;
  padding: 50px;
}
.container {
  padding: 40px 80px 15px 80px;
  background-color: #fff;
  border-radius: 8px;
  max-width: 800px;
}
.heading {
  text-align: center;
h1 {
  background: -webkit-linear-gradient(#fff, #999);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-align: center;
  margin: 0 0 5px 0;
  font-weight: 900;
  font-size: 4rem;
  color: #fff;
}
h4 {
  color: lighten(#5c3d86,30%);
  text-align: center;
  margin: 0 0 35px 0;
  font-weight: 400;
  font-size: 24px;
}
}

.list-group-wrapper {
  position: relative;
}
.list-group {
  overflow: auto;
  height: 50vh;
  border: 2px solid #dce4ec;
  border-radius: 5px;
}
.list-group-item {
  margin-top: 1px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #dce4ec;
}
.loading {
  text-align: center;
  position: absolute;
  color: #fff;
  z-index: 9;
  background: $purple;
  padding: 8px 18px;
  border-radius: 5px;
  left: calc(50% - 45px);
  top: calc(50% - 18px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
