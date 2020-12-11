<template>     
     <b-avatar :srch ="user.photoURL"  size="6rem"></b-avatar>
</template>

<script> 

import {mapState} from 'vuex';
export default {
    name : 'userInfo',
    computed:{
        ...mapState(['user'])
    }
}
</script>