<template>
    <div :style="{'color': charData.eye_color}" class="char-card">{{ charData.name }}</div>
</template>


<script>
export default {
    name: "CharacterCard",
    props: {
        charData: Object
    }
}
</script>