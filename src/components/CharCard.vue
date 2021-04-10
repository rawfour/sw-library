<template>
    <div  class="card">

        <div class="card__item"><span class="card__item-label">Name:</span> <span class="card__item-content" :style="{'color': charData.eye_color}">{{ charData.name }}</span></div> 

        <div class="card__item"><span class="card__item-label">Gender:</span><span class="card__item-content">{{ charData.gender }}</span></div> 

        <div class="card__item"><span class="card__item-label">Appearance:</span>
            <div class="card__item-content">
                <eye-icon :color="charData.eye_color"></eye-icon>
                <template v-if="isOverweight">
                    <overweight-icon :value="overweight"></overweight-icon>    
                </template>
                
            </div>
        </div>

        <div class="card__item"><vbutton>Edit</vbutton></div>

    </div>
</template>


<script>
import EyeIcon from './EyeIcon';
import OverweightIcon from './OverweightIcon';
import Vbutton from './Button';


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
    },
    components: {
        EyeIcon,
        OverweightIcon,
        Vbutton
    }
    
}
</script>

<style lang="scss">
@import '../assets/scss/components/_char-card.scss';
</style>