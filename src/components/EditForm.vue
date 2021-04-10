<template>
    
    <div class="edit">
        <heading>Edit</heading>
        <a href="#" class="edit__back" @click.prevent="changeView">Back</a>
        <form>

            <div class="form-row">
                <custom-input :fieldName="'name'" :fieldType="'text'" :labelText="'Name'" :fieldValue="charData.name"></custom-input>
                <custom-select :fieldName="'gender'" :selectedItem="charData.gender" :labelText="'Gender'" :options="options"></custom-select>
            </div>

            <div class="form-row">
                <custom-input :fieldName="'height'" :fieldType="'number'" :labelText="'Height (enter value in cm)'" :fieldValue="charData.height"></custom-input>
                <custom-input :fieldName="'weight'" :fieldType="'number'" :labelText="'Weight (enter value in kg)'" :fieldValue="charData.mass ? charData.mass.replace(',', '') : ''"></custom-input>            
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
            options: ["male", "female", "hermaphrodite", 'n/a']
        }
            
        
    },
    methods: {
        changeView: function() {
            this.$emit('change-view', 'list');
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