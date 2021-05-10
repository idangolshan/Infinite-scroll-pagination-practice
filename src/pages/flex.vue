<template>
  <div>
  <header>
    <span>icon</span>
    <span>icon</span>
    <span>icon</span>
  </header>

    <div class="flex__container">

      <div class="form q-pa-md flex__col-center">
        <h5>SISO's FORM</h5>
        <input>
        <input>
        <input>
        <input>
      </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
      <h5>SISO's FORM</h5>
      <input>
      <input>
      <input>
      <input>
    </div> <div class="form q-pa-md flex__col-center">
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
  name: "flex"
}
</script>

<style scoped>
.flex__container {
  flex-wrap: wrap;
}
header {
  display: flex;
  justify-content: space-between;
  color: #dddddd;
  background: #1976D2;
  font-size: 20px;
}

.form {
  background: #ddd;
  margin: 5px;
}

input {
 margin: 10px;
}
.form:focus-within > input:hover {
  background: white;
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
