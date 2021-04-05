<template>

<div class="list-wrapper">

  <list></list>
</div>



</template>


<script>
import List from './components/CharList';

export default {
  name: "App",
  components: {
    List
  }
}
</script>

<style>

  *,body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .list-wrapper{
    height: 100vh;
    width: 100vw;

  }


</style>