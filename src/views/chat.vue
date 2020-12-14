<template>
<div class="chat">
    <div >
      <b-navbar >
                    <Titulo text="CHAT ROOM"/>
      </b-navbar>
    </div>

    <template v-if="user== null">
        <div class="no-chat">
             <h2> Please login</h2>
              <router-link to="/account">
              <b-button  variant="outline-success"> Login </b-button>
              </router-link>
        </div>
       
    </template>
    
    <template v-else>
       <div class="chatroom">  
              <div v-for="(message,index) of messages" :key="index" class="mensaje">
                  <p ><strong>{{message.author}} said:</strong></p>
                  <p >     {{message.body}}    </p>
              </div>
                <form @submit.prevent="post()"  >
                      <input type="text" placeholder="Enter your message..." id="box" v-model="input">
                      <b-button variant="outline-success" type="submit">Send</b-button>
             </form>
        </div>
           
     
      </template>
</div>
</template>

<style lang="scss">
.no-chat{
        justify-items: center;
    display: inline-grid;
    position: relative;
    width: -webkit-fill-available;
}

.chatroom{
    height: 75vh;
    max-height: 75vh;
    overflow: auto;
    position: relative;
    overflow-y: scroll !important;
    
}

h2{
  margin: revert;
}
.mensaje{
  background-color: #1CAF6C ;
    position: relative;
    width: -webkit-fill-available;
    border-radius: 3vh;
    margin: 3vh;
    padding: 2vh;
}
  p{
    padding-left: 3vh;
     color:#E5E8EC;
  }
  b-button{
    background-color: #E5E8EC;
  }
  form{
    text-align-last: center;
    margin-bottom: 10vh;
  }
  
</style>
<script>
import Titulo from '@/components/nav.vue'
import { mapState } from "vuex";
import { db } from '../firebase/db'

export default {
    name:'Chat',
    data(){
      return{
        messages:[],
        input:null
      }
    },
    components:{
      Titulo
},
     computed:{
    ...mapState(['user']),
  
},
mounted(){
  this.messages = [];
  db.ref("forum/match" + this.$route.params.id).on("child_added",(snapshot)=>{
    this.messages.push(snapshot.val())
  })
},

methods:{
    post(){
        let folder = db.ref("forum/match" + this.$route.params.id)
        let message = {
          body: this.input,
          author:this.user.displayName,
          date: new Date().toDateString()
        }
       folder.push(message)
       
       this.input = null
    }
}

}

</script>