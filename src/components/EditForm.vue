<template>
    
    <div class="edit">
        <heading>Edit</heading>
        <a href="#" class="edit__back" @click.prevent="changeView">Back</a>
        <form>

            <div class="form-row">
                <custom-input :fieldName="'name'" :fieldType="'text'" :labelText="'Name'" :fieldValue="data.name"></custom-input>
                <custom-select :fieldName="'gender'" :selectedItem="data.gender" :labelText="'Gender'" :options="options"></custom-select>
            </div>

            <div class="form-row">
                <custom-input :fieldName="'height'" :fieldType="'number'" :labelText="'Height (enter value in cm)'" :fieldValue="data.height"></custom-input>
                <custom-input :fieldName="'weight'" :fieldType="'number'" :labelText="'Weight (enter value in kg)'" :fieldValue="data.mass ? data.mass.replace(',', '') : ''"></custom-input>            
            </div>

        </form>        
    </div>


</template>

<script>
import Heading from "./Heading"
import Input from "./Input"
import Select from "./Select"
export default {
    name: "EditForm",
    props: {
        charData: Object
    },
    data(){
        return{
            options: ["male", "female", "hermaphrodite", 'n/a'],
            data: ''
        }
            
        
    },
    methods: {
        changeView: function() {
            this.$emit('change-view', 'list');
        }

    },
    mounted(){
        const {gender, eye_color, birth_year} = this.charData;
        if(gender === "female" && eye_color === "brown" && birth_year === "19BBY"){
            this.data = this.charData;
        }
    },
    components: {
        Heading,
        'custom-input': Input,
        'custom-select': Select
    }
}
</script>


<style lang="scss">
@import '../assets/scss/components/_edit-form.scss';
</style>