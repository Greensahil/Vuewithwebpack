<template>
  <div>
    <h1>{{title}}</h1>
    <sahil></sahil>
  </div>
</template>

<script>
import sahil from './sahil.vue'
export default {
  components:{
    'sahil':sahil
  },
  data () {
    return {
     title:"Ninja app"

    }
  }
}
</script>

<style>

</style>
