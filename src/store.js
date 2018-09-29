import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex,
        cardsLength = array.length;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // and swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    for (let i=0; i < cardsLength; i++) {
        array[i].index = i
        array[i].flipped = false
        array[i].matched = false
    }

    return array
}

export default new Vuex.Store({
    state: {
        gameBusy: false,
        gameOver: false,
        attempts: 0,
        matchesLeft: 18,
        currentAttempt: [],
        cards: [
            {
                index: 0,
                id: '1A',
                imageName: 'card-01.png',
                flipped: false,
                matched: false
            },
            {
                index: 1,
                id: '2A',
                imageName: 'card-02.png',
                flipped: false,
                matched: false
            },
            {
                index: 2,
                id: '3A',
                imageName: 'card-03.png',
                flipped: false,
                matched: false
            },
            {
                index: 3,
                id: '4A',
                imageName: 'card-04.png',
                flipped: false,
                matched: false
            },
            {
                index: 4,
                id: '5A',
                imageName: 'card-05.png',
                flipped: false,
                matched: false
            },
            {
                index: 5,
                id: '6A',
                imageName: 'card-06.png',
                flipped: false,
                matched: false
            },
            {
                index: 6,
                id: '7A',
                imageName: 'card-07.png',
                flipped: false,
                matched: false
            },
            {
                index: 7,
                id: '8A',
                imageName: 'card-08.png',
                flipped: false,
                matched: false
            },
            {
                index: 8,
                id: '9A',
                imageName: 'card-09.png',
                flipped: false,
                matched: false
            },
            {
                index: 9,
                id: '10A',
                imageName: 'card-10.png',
                flipped: false,
                matched: false
            },
            {
                index: 10,
                id: '11A',
                imageName: 'card-11.png',
                flipped: false,
                matched: false
            },
            {
                index: 11,
                id: '12A',
                imageName: 'card-12.png',
                flipped: false,
                matched: false
            },
            {
                index: 12,
                id: '13A',
                imageName: 'card-13.png',
                flipped: false,
                matched: false
            },
            {
                index: 13,
                id: '14A',
                imageName: 'card-14.png',
                flipped: false,
                matched: false
            },
            {
                index: 14,
                id: '15A',
                imageName: 'card-15.png',
                flipped: false,
                matched: false
            },
            {
                index: 15,
                id: '16A',
                imageName: 'card-16.png',
                flipped: false,
                matched: false
            },
            {
                index: 16,
                id: '17A',
                imageName: 'card-17.png',
                flipped: false,
                matched: false
            },
            {
                index: 17,
                id: '18A',
                imageName: 'card-18.png',
                flipped: false,
                matched: false
            },
            {
                index: 18,
                id: '1B',
                imageName: 'card-01.png',
                flipped: false,
                matched: false
            },
            {
                index: 19,
                id: '2B',
                imageName: 'card-02.png',
                flipped: false,
                matched: false
            },
            {
                index: 20,
                id: '3B',
                imageName: 'card-03.png',
                flipped: false,
                matched: false
            },
            {
                index: 21,
                id: '4B',
                imageName: 'card-04.png',
                flipped: false,
                matched: false
            },
            {
                index: 22,
                id: '5B',
                imageName: 'card-05.png',
                flipped: false,
                matched: false
            },
            {
                index: 23,
                id: '6B',
                imageName: 'card-06.png',
                flipped: false,
                matched: false
            },
            {
                index: 24,
                id: '7B',
                imageName: 'card-07.png',
                flipped: false,
                matched: false
            },
            {
                index: 25,
                id: '8B',
                imageName: 'card-08.png',
                flipped: false,
                matched: false
            },
            {
                index: 26,
                id: '9B',
                imageName: 'card-09.png',
                flipped: false,
                matched: false
            },
            {
                index: 27,
                id: '10B',
                imageName: 'card-10.png',
                flipped: false,
                matched: false
            },
            {
                index: 28,
                id: '11B',
                imageName: 'card-11.png',
                flipped: false,
                matched: false
            },
            {
                index: 29,
                id: '12B',
                imageName: 'card-12.png',
                flipped: false,
                matched: false
            },
            {
                index: 30,
                id: '13B',
                imageName: 'card-13.png',
                flipped: false,
                matched: false
            },
            {
                index: 31,
                id: '14B',
                imageName: 'card-14.png',
                flipped: false,
                matched: false
            },
            {
                index: 32,
                id: '15B',
                imageName: 'card-15.png',
                flipped: false,
                matched: false
            },
            {
                index: 33,
                id: '16B',
                imageName: 'card-16.png',
                flipped: false,
                matched: false
            },
            {
                index: 34,
                id: '17B',
                imageName: 'card-17.png',
                flipped: false,
                matched: false
            },
            {
                index: 35,
                id: '18B',
                imageName: 'card-18.png',
                flipped: false,
                matched: false
            }
        ]
    },
    mutations: {
        setGameBusy(state, bool) {
            state.gameBusy = bool
        },
        setGameOver(state, bool) {
            state.gameOver = bool
        },
        setAttempts(state, numb) {
            state.attempts = numb
        },
        setMatchesLeft(state, numb) {
            state.matchesLeft = numb
        },
        setCurrentAttempt(state, arr) {
            state.currentAttempt = arr
        },
        pushCurrentAttempt(state, card) {
            state.currentAttempt.push(card)
        },
        setCardFlipped(state, obj) {
            state.cards[obj.i].flipped = obj.flipped
        },
        setCardMatched(state, obj) {
            state.cards[obj.i].matched = obj.matched
        },
        setCards(state, arr) {
            state.cards = arr
        }
    },
    actions: {
        shuffle(context) {
            if (!context.state.gameBusy) {
                context.commit('setGameBusy', true)

                // Reset Data
                context.commit('setGameBusy', false)
                context.commit('setGameOver', false)
                context.commit('setAttempts', 0)
                context.commit('setMatchesLeft', 18)
                context.commit('setCurrentAttempt', [])
                context.commit('setCards', shuffle(context.state.cards))
                setTimeout(function(){
                    context.commit('setCards', shuffle(context.state.cards))
                    setTimeout(function(){
                        context.commit('setCards', shuffle(context.state.cards))
                        setTimeout(function(){
                            context.commit('setGameBusy', false)
                        }, 200)
                    }, 200)
                }, 200)
            }
        },
        cardSelected(context, i) {
            if (context.state.cards[i].flipped===false && context.state.gameBusy===false) {
                context.commit('setGameBusy', true)
                context.commit('setCardFlipped', {
                    i: i,
                    flipped: true
                })
                context.commit('pushCurrentAttempt', context.state.cards[i])
                if (context.state.currentAttempt.length === 2) {  // If 2 have been chosen evaluate for a match.
                    setTimeout(function(){  // A delay which leaves time for the second card to fully flip over.
                        if (context.state.currentAttempt[0].imageName === context.state.currentAttempt[1].imageName) {  // Match.
                            context.commit('setCardMatched', {
                                i: context.state.currentAttempt[0].index,
                                matched: true
                            })
                            context.commit('setCardMatched', {
                                i: context.state.currentAttempt[1].index,
                                matched: true
                            })
                            context.commit('setMatchesLeft', context.state.matchesLeft-1)
                            if (context.state.matchesLeft === 0) {
                                context.state.gameOver = true
                            }
                        } else {  // No match.
                            context.commit('setCardFlipped', {
                                i: context.state.currentAttempt[0].index,
                                flipped: false
                            })
                            context.commit('setCardFlipped', {
                                i: context.state.currentAttempt[1].index,
                                flipped: false
                            })
                        }
                        context.commit('setAttempts', context.state.attempts+1)
                        context.commit('setCurrentAttempt', [])  // Reset currentAttempt.
                        context.commit('setGameBusy', false)
                    }, 900)
                } else {
                    context.commit('setGameBusy', false)
                }
            }
        }
    }
});