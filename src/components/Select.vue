<template>
    <div class="select">
        <label :for="fieldName" class="select__label">{{labelText}}</label>
        <select class="select__field" :name="fieldName" :id="fieldName" v-model="selectedItem">
            <option v-for="optionItem in options" :key="optionItem" :value="optionItem" >{{ optionItem }}</option>
        </select>
        

    </div>

</template>

<script>
export default {
    name: "custom-select",
    props: {
        selectedItem: [String, Number],
        options: Array,
        labelText: String,
        fieldName: String
    }
}
</script>



<style lang="scss">
@import '../assets/scss/components/_select.scss';
</style>