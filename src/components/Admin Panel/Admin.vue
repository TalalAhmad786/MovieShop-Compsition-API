<template>
    
    <div>
        <Nav/>
        <router-view/>
        
    </div>
   

</template>

<script>
import Nav from '@/components/Admin Panel/Nav_admin.vue'
export default {
    name:"Admin",
    components:{
        Nav
    }


}
</script>