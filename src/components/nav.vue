<template>
<div class="nav">
        <b-navbar-brand ><strong> {{text}} </strong></b-navbar-brand>
</div>
        
</template>

<script>
export default {
  name: "nav",
  props: ["text"],
  
};
</script>

<style lang="scss">
nav{
    z-index: 9;
  background-color:#1CAF6C;
  position: fixed;

}
strong{
    color:#E5E8EC;

}
h2{
  color:#1CAF6C;
  text-align: center;
  margin-top: 5vh;
}

</style>