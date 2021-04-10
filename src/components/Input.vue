<template>
    <div class="input">
        <label :for="inputName" class="input__label">{{labelValue}}</label>
        <input :name="inputName" :id="inputName" class="input__field" :type="inputType" v-model="inputValue">  
    </div>

</template>

<script>
export default {
    name: "custom-input",
    props: {
        fieldValue: [Number, String, Boolean],
        fieldType: String,
        labelText: String,
        fieldName: String
    },
    computed: {
        inputValue: {
            get() {
                return this.fieldValue
            },
            set(value) {
                this.$emit('input', value)
            }
        },
        labelValue() {
            return this.labelText
        },
        inputName() {
            return this.fieldName
        },
        inputType(){
            return this.fieldType
        }
    }
}
</script>


<style lang="scss">
@import '../assets/scss/components/_input.scss';
</style>