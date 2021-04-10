<template>

<div  class="page-wrapper container">

  <transition 
    name="backout"
    mode="out-in">
    <component :is="view" :charData="cardToEdit" @edit="editCard" @change-view="changeView" ></component>    
  </transition>



</div>

</template>


<script>
import List from './components/CharList';
import Editform from './components/EditForm';

export default {
  name: "App",
  data() {
    return {
      cardToEdit: {},
      view: "list"
    }
  },
  methods: {
    editCard: function(data){

      this.cardToEdit = data;
    },
    changeView: function(view){
      this.view = view;
    },
  },
  components: {
    List,
    Editform
  }
}
</script>

