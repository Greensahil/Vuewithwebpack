<template>
<ul>
    <li v-for="book in books">
        {{book}}
    </li>
</ul>
</template>

<script>
export default {

  data () {
    return {
     books:['The martian','Into the wild']

    }
  }
}
</script>

<style>

</style>
