<template>
  <div class="account">

  <div >
      <b-navbar >
                    <Titulo text="USER"/>
      </b-navbar>
    </div>

    <template  v-if="user==null">

        <div class="start">
           <b-avatar src="" size="6rem"></b-avatar>
           <b-button @click="logIn()" variant="outline-success">Login whit Google</b-button>
        </div>
    

    </template>

      <template  v-else>

        <div class="start">
           <b-avatar :src="user.photoURL" size="6rem"></b-avatar>
           <h2>{{user.displayName}}</h2>
           <b-button @click="logOut()" variant="outline-success">Logout</b-button>
        </div>
    

    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import Titulo from '@/components/nav.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import {mapState} from 'vuex'

export default {
  name : 'account',
   computed:{
    ...mapState(['user'])
  },
 
      components:{
    Titulo
  },
     methods:{
    logIn () {
      let provider= new firebase.auth.GoogleAuthProvider()
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
         console.log('login'+' '+ result.user.email);
        })
        .catch(error =>{
          console.log(error.code);
        })

    },
     logOut(){
      firebase
      .auth()
      .signOut()
      .then( result =>{
         console.log('logout'+ result.user.email);
      
      })
      .catch(error =>{
        console.log(error.code);
      })
    }
     }
}

</script>

<style lang="scss">
.account{
    height: 100vh;
}
.start{
    justify-items: center;
    display: inline-grid;
    position: relative;
    width: -webkit-fill-available;
}

.b-avatar {
    margin: 7vh;
}
.btn{
  margin:2vh;
}
</style>