<template>
    
<div>
    <Navbar/>
    <router-view/>
</div>




</template>

<script>
import Navbar from '../User Panel/NavBar.vue'
export default {
    name: 'User',
    components: {
        Navbar
    }
}
</script>