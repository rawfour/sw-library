<template>
    <div class="input">
        <label :for="fieldName" class="input__label">{{labelText}}</label>
        <input :name="fieldName" :id="fieldName" class="input__field" :type="fieldType" v-model="fieldValue">  
    </div>

</template>

<script>
export default {
    name: "custom-input",
    props: {
        fieldValue: [Number, String, Array, Boolean],
        fieldType: String,
        labelText: String,
        fieldName: String
    }
}
</script>


<style lang="scss">
@import '../assets/scss/components/_input.scss';
</style>