<template>
    
    <div class="counter">
        <span class="counter__value">{{counterValue}}</span>
        <span class="counter__label"><slot></slot></span>
    </div>

</template>

<script>
export default {
    name: "Counter",
    data() {
        return{
            counterValue: 0
        }
    },
    props: {
        targetValue: Number
    },
    mounted(){

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / 1500, 1);
            this.counterValue = Math.floor(progress * (this.targetValue - 0));

            if (progress < 1) {
            window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
        
        
        }
}
</script>


<style lang="scss">
    @import '../assets/scss/components/_counter.scss';
</style>
