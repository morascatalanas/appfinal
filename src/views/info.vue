<template>
  <div class="info">
  <div>
     
      <b-navbar  >
                    <Titulo text="GAME DATES"/>
      </b-navbar>
<Dates/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Titulo from '@/components/nav.vue'

import Dates from '@/components/calendar.vue'


export default {
  name : 'Info',
  components:{
    Titulo,
    Dates
  }
}

</script>
<style lang="scss">
.info{
  background-color: #E5E8EC;
}
</style>