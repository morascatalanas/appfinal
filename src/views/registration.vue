<template>
<div>
<div>
     
      <b-navbar class="justify-content-center align-items-center">
                    <Titulo text="REGISTRATION"/>
      </b-navbar>

    </div>
  <div class="registration">
    <Form/>
   </div>
   </div>
</template>
<script>
import Form from '@/components/form.vue'
import Titulo from '@/components/nav.vue'


export default {
  name : 'registration',
  components:{
    Form,
    Titulo
  }
}
</script>