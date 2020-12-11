<template>
  <div class="container">

    <div class="title">
      <b-navbar-brand><strong> {{ text }} </strong></b-navbar-brand>
    </div>

    <div class="button">
              <router-link to="/account"><b-button  variant="outline">account </b-button></router-link>

              
    </div>
   


</div>
        
</template>

<script>
export default {
  name: "nav",
  props: ["text"],
}
</script>

<style lang="scss">
.navbar {
    position: static;
    display: flex;
    height: 50px;
    z-index: 9;
    background-color: #1caf6c;
}
.contaier{
  display:contents;
}
strong {
  color: #e5e8ec;
}
h2 {
  color: #1caf6c;
  margin-top: 5vh;
}
.title {
  position: absolute;
  left: 3vh;
}
.button {
    position: absolute;
    right: 0px;
}
.btn{
  font-variant: all-petite-caps;
}
</style>