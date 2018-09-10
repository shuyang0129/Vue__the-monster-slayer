new Vue({
    el: '#app',
    data: {
        isStart: false,
        myHP: 50,
        monsterHP: 0
    },
    methods: {
        resetGame: function() {
            this.isStart = true;
            this.myHP = 100;
            this.monsterHP = 100
        },
        randomNum: function(num) {
            return Math.floor(Math.random() * num) + 1;
        },
        attack: function() {
            this.myHP -= this.randomNum(10);
            this.monsterHP -= this.randomNum(10);
        },
        specialAttack: function() {
            this.myHP -= this.randomNum(10);
            this.monsterHP -= this.randomNum(20);
        },
        heal: function() {
            this.myHP += this.randomNum(10);
            this.myHP -= this.randomNum(10);
        }
    },
    watch: {
        myHP: function() {
            if (this.myHP > 100) {
                this.myHP = 100;
            } else if (this.myHP < 0) {
                this.myHP = 0;
            }
        }
    }
});