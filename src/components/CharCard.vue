<template>
    <div :style="{'color': charData.eye_color}" class="char-card">{{ charData.name }} <span>overweight: {{ isOverweight }}</span>  <span>overweight value: {{ overweight }}</span></div>
</template>


<script>
export default {
    name: "CharacterCard",
    data(){
        return{
            isOverweight: false,
            overweight: null,
        }
    },
    props: {
        charData: Object
    },
    computed: {

    },
    mounted(){
            const mass = this.charData.mass.replace(',', '').trim(),
                  height = this.charData.height.replace(',', '').trim(),
                  bmi = Math.round(mass/(height/100*height/100));

            if(!isNaN(bmi)){
                if(bmi > 25){
                    this.isOverweight = true;
                    const correctWeight = 25 * (height/100*height/100);

                    this.overweight = Math.round(mass - correctWeight);

                }else{
                    this.isOverweight = false;
                }
            }
    }
    
}
</script>