<template>
<div>
  <div>
     
      <b-navbar >
                    <Titulo text="LEGAL"/>
      </b-navbar>

    </div>
  <div class="Legal">
    <h2 >FIFA rules shall govern NYSL play except as modified herein. </h2>
    <Document/>
  </div>
  </div>
</template>
<script>
import Document from '@/components/document.vue'
import Titulo from '@/components/nav.vue'


export default {
  name : 'Legal',
  components:{
    Document,
    Titulo
  }
}
</script>

<style lang="scss">
h2{
  padding-top: 5vh;
  color:#212529;
}
.Legal{
  background-color: #E5E8EC;
}
</style>