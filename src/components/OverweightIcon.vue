<template>

<div class="icon icon--twiced">

<div class="icon">

<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve">
<g>
	<path style="fill:#030104;" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25
		C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18,12H8L4,7c0,0,3-4,9-4s9,4,9,4L18,12z"/>
	<polygon style="fill:#030104;" points="15.613,11 16.982,5.01 13.02,11 	"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>



</div>

<span class="icon__value">+{{value}}kg</span>

</div>


</template>

<script>
export default {
    name: "OverweightIcon",
    props: {
        value: Number
    },
}
</script>

<style lang="scss">
@import '../assets/scss/components/_icon.scss';
</style>