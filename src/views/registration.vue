<template>
<div>
<div>
     
      <b-navbar >
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

<style lang="scss">
.registration{
  background-color :#E5E8EC;
}
</style>