<template>
  <div class="page">

    <header v-bind:class="{scroll}">
    <div>
      <q-btn flat icon="menu"/>
    </div>
    <div>
      <span>LOGO</span>
    </div>
    <div>
      <q-btn flat icon="shopping_cart"/>
    </div>
  </header>



    <div class="flex__container">

      <div class="form q-pa-md flex__col-center">
        <h5>SISO's FORM</h5>
        <input>
        <input>
        <input>
        <input>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "flex",

  data(){
    return {
      scroll: false
    }
  },

  created() {
    addEventListener('scroll', ()=> {
        window.scrollY > 10 ? this.scroll = true : this.scroll = false;
    })
  }

}
</script>

<style scoped>
.page {
  height: 200vh;
}

header {
  transition: 1s;
  height: 80px;
  background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

header.scroll {
  transition: 1s;
  transform: translateY(-100%);
}



.form {
  background: #ddd;
  margin: 5px;
}

input {
 margin: 10px;
}
.form:focus-within > input:hover {
  background: pink;
  outline: none;
  border: 2px solid black;
}

input:focus {
  background: #F2C037;
}

input:hover {
  background: #1976D2;
}
</style>
