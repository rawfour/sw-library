<template>
    <div class="select">
        <label :for="inputName" class="select__label">{{labelValue}}</label>
        <select class="select__field" :name="inputName" :id="inputName" v-model="inputValue">
            <option v-for="optionItem in inputOption" :key="optionItem" :value="optionItem" >{{ optionItem }}</option>
        </select>
        

    </div>

</template>

<script>
export default {
    name: "custom-select",
    props: {
        selectedItem: String,
        options: Array,
        labelText: String,
        fieldName: String
    },

    computed: {
        inputValue: {
            get() {
                return this.selectedItem
            },
            set(value) {
                this.$emit('select', value)
            }
        },
        labelValue() {
            return this.labelText
        },
        inputName() {
            return this.fieldName
        },
        inputOption(){
            return this.options
        }
    }
}
</script>



<style lang="scss">
@import '../assets/scss/components/_select.scss';
</style>