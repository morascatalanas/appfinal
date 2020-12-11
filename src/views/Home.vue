<template>
  <div>
    <div>
      <b-navbar>
                    <Titulo text="HOME"/>
      </b-navbar>
    </div>

        <carrusel/>


 <div class="home">
      <b-card  bg-variant="secondary" text-variant="white" header="Contact US" class="text-center">
          <b-card-text>Please email us at <a href="nysl@chisoccer.org">nysl@chisoccer.org</a> <br> We will reply to your email as soon as we can.</b-card-text>
      </b-card>   
 </div>




      </div>
</template>

<style lang="scss">
.home{
    margin-left: 9%;
    margin-right: 9%;
    }
.b-button{
  text-align: center;
}
</style>
<script>
// @ is an alias to /src
import Carrusel from '@/components/carrusel.vue'
import Titulo from '@/components/nav.vue'

export default {
  name : 'home',

  components:{
    Carrusel,
    Titulo
    
  }
}

</script>
