<template>
<div class="locations">
    <div>
     
      <b-navbar >
                    <Titulo text="LOCATIONS"/>
      </b-navbar>

    </div>

    <Maps/>
    </div>
</template>
<script>
import Titulo from '@/components/nav.vue'
import Maps from '@/components/maps.vue'


export default {
  name : 'Locations',
  components:{
    Titulo,
    Maps
  }
}

</script>

<style lang="scss">
.locations{
  background-color: #E5E8EC;
}
</style>