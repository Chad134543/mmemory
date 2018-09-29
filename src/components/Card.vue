<template>
<button type="button" class="card-wrap" :class="{ flipped:flipped, matched:matched }" @click="handleCardClick">
    <div class="card">
        <div class="front">
            <img :src="'./static/img/card-back.png'">
        </div>
        <div class="back">
            <img :src="'./static/img/'+imageName">
            <div class="opacity-div"></div>
        </div>
    </div>
</button>
</template>

<script>
export default {
    name: 'Card',
    props: [
    'index',
    'id',
    'imageName',
    'flipped',
    'matched'
    ],
    data() {
        return {}
    },
    methods: {
        handleCardClick() {
            this.$store.dispatch('cardSelected', this.index)
        }
    }
} 
</script>

<style scoped>
.card-wrap {
    width: 15%;
    perspective: 1000px;
    float: left;
    cursor: pointer;
    border: 0;
    padding: 0;
    margin: 0 1.66% 1.66% 0;
    transition: transform 0.2s ease-in-out;
}
.card-wrap:focus {
    outline: 3px solid lightblue;
}
.card-wrap.flipped .card {
    transform: rotateY(180deg);
    cursor: default;
}
.card-wrap.matched .opacity-div {
    opacity: 0.5;
}
.card {
    transition: 0.2s;
    transform-style: preserve-3d;
    box-shadow: 0 1px 2px rgba(0,0,0,0.5);
}
.front {
    backface-visibility: hidden;
    background-color: rgb(231,203,57);
    z-index: 2;
    transform: rotateY(0deg);
}
.back {
    width: 100%;
    backface-visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
    transform: rotateY(180deg);
}
.front img,
.back img {
    display: block;
    width: 100%;
    height: 100%;
}
.opacity-div {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #FFF;
    opacity: 0;
    transition: opacity 0.3s;
}
</style>