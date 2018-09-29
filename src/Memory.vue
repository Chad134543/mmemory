<template>
<div class="game-width" :class="{ 'game-over': gameOver }">
    <div class="header-area clearfix">
        <h1 class="title">M<span class="title-brown">Memory</span></h1>
        <div class="header-controls clearfix">
            <div class="attempts-n-matches">
                <div>
                    <div class="add-padding pulsate-color-on-game-over">Attempts: {{ attempts }}</div>
                    <div class="add-padding add-left-border">Pairs Left: {{ matchesLeft }}</div>
                </div>
            </div>
            <button class="shuffle" @click="handleShuffleClick">
                <svg version="1.1" id="icon_shuffle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 12" style="enable-background:new 0 0 19 12;" xml:space="preserve">
                    <polygon points="17,5 17,4 18,4 18,3 19,3 19,2 18,2 18,1 17,1 17,0 16,0 16,1 12,1 12,2 11,2 11,3 10,3 10,5 12,5 12,4 16,4 16,5 
                            "/>
                    <polygon points="9,4 8,4 8,3 7,3 7,2 6,2 6,1 0,1 0,4 6,4 6,5 7,5 7,6 8,6 8,7 9,7 9,8 10,8 10,9 11,9 11,10 12,10 12,11 16,11 
                        16,12 17,12 17,11 18,11 18,10 19,10 19,9 18,9 18,8 17,8 17,7 16,7 16,8 12,8 12,7 11,7 11,6 10,6 10,5 9,5    "/>
                    <polygon points="6,7 6,8 0,8 0,11 6,11 6,10 7,10 7,9 8,9 8,7    "/>
                </svg>
            </button>
        </div>
    </div>
    <transition-group class="clearfix">
        <card v-for="c in cards" :key="c.id" :index="c.index" :id="c.id" :imageName="c.imageName" :flipped="c.flipped" :matched="c.matched"></card>
    </transition-group>
</div>
</template>

<script>
import Card from './components/Card'

export default {
    name: 'Memory',
    components: {
        Card
    },
    data() {
        return {}
    },
    computed: {
        gameOver() {
            return this.$store.state.gameOver
        },
        attempts() {
            return this.$store.state.attempts
        },
        matchesLeft() {
            return this.$store.state.matchesLeft
        },
        cards() {
            return this.$store.state.cards
        },
    },
    methods: {
        handleShuffleClick() {
            this.$store.dispatch('shuffle')
        },
        shuffle() {
            this.$store.dispatch('shuffle')
        }
    },
    mounted() {
        this.shuffle()
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}
.clearfix:before {
    content: " ";
    display: table;
}
.clearfix:after {
    content: " ";
    display: table;
    clear: both;
}
body {
    font-family: 'VT323', monospace, Helvetica, Arial, sans-serif;
    font-size: 16px;
    text-align: center;
    color: rgb(236,129,57);
    background-color: #FFF;
    margin: 0;
    padding: 45px 25px 0 25px;
}
.game-width {
    width: 100%;
    min-width: 270px;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    left: 0.83%;
}
.header-area {
    margin-bottom: 15px;
}
.title {
    font-family: 'Press Start 2P', monospace, Helvetica, Arial, sans-serif;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 0;
    float: left;
    position: relative;
    top: -2px;
}
.title-brown {
    color: #7D450E;
}
.header-controls {
    float: right;
    margin-right: 1.66%;
}
.attempts-n-matches {
    display: table;
    height: 25px;
    border: 1px solid rgb(236,129,57);
    float: left;
    margin-right: 7px;
}
.attempts-n-matches > div {
    display: table-row;
}
.attempts-n-matches > div > div {
    display: table-cell;
    vertical-align: middle;
}
.add-padding {
    padding: 0 10px;
}
.add-left-border {
    border-left: 4px solid rgb(236,129,57);
}
.shuffle {
    display: block;
    width: 37px;
    height: 25px;
    background-color: #7D450E;
    box-shadow: 0 1px 2px rgba(0,0,0,0.5);
    outline: 0;
    border: none;
    cursor: pointer;
    position: relative;
    float: left;
}
.shuffle:hover #icon_shuffle {
    fill: #FFF;
}
.shuffle:focus {
    outline: 3px solid lightblue;
}
#icon_shuffle {
    width: 27px;
    height: 25px;
    position: absolute;
    top: 0;
    left: 6px;
    fill: rgb(231,203,57);
}
.game-over .pulsate-color-on-game-over {
    background-color: #FFF;
    animation-name: pulsate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
@keyframes pulsate {
    0% {
        box-shadow: inset 0px 0px 10px 0px rgba(235,206,14,0);
    }
    50% {
        box-shadow: inset 0px 0px 10px 0px rgb(236,129,57);
    }
    100% {
        box-shadow: inset 0px 0px 10px 0px rgba(235,206,14,0);
    }
}
@media (max-width: 460px) {
    .title {
        float: none;
        top: 0;
        margin-bottom: 19px;
    }
    .header-controls {
        float: none;
        display: inline-block;
    }
}
</style>