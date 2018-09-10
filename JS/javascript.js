new Vue({
    el: '#app',
    data: {
        isStart: false,
        myHP: 0,
        monsterHP: 0
    },
    methods: {
        resetGame: function() {
            this.isStart = true;
            this.myHP = 100;
            this.monsterHP = 100
        }
    }
});