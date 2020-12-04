<template>
  <div id="app" >

    <div class="navbar-container">
      <div class="navbar-content">
        <router-link to="/registration"> <i class=' bx bx-user'></i> </router-link>
        <router-link to="/legal"><i class='bx bx-file'></i> </router-link>
        <router-link to="/"> <i class='bx bx-football'> </i> </router-link>
        <router-link to="/info"><i class='bx bx-calendar-alt'> </i></router-link>
        <router-link to="/locations"><i class='bx bx-map'></i> </router-link>
      </div>
      </div>
      
     <div>
    <router-view/>
    </div>
  </div>
</template>

<style lang="scss">

#app{
  position:relative;
  padding-bottom: 25vh;
  background-color:  #E5E8EC;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
}

.card{
    border-top-color:#1CAF6C;

}
.navbar-container{
  z-index: 10;
  background-color: #E5E8EC;
  border-top-style: solid;
  border-top-color:#1CAF6C;
  width: 100%;
  position: fixed;
  bottom:0px;
.navbar-content{
    display: flex;
    justify-content: space-between;
    padding: 5px;
    padding-left: 9%;
    padding-right: 9%;
 a {
   font-size: x-large;
   color: #5C6C7D;
    &.router-link-exact-active{
      color:#1CAF6C;
    }

  }

  }
 
}

</style>
