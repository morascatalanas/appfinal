<template>
  <div class="info">
  <div>
     
      <b-navbar class="justify-content-center align-items-center">
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