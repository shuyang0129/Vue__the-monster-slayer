new Vue({
    el: '#app',
    data: {
        isStart: false,
        myHP: 100,
        monsterHP: 100,
        log: []
    },
    methods: {
        resetGame: function() {
            this.isStart = true;
            this.myHP = 100;
            this.monsterHP = 100;
            this.log = [
                // player: give monster how much damage,
                // monster: give player how much damage
            ];
        },
        randomNum: function(num) {
            return Math.floor(Math.random() * num) + 1;
        },
        attack: function() {
            damageToPlayer = this.randomNum(10);
            damageToMonster = this.randomNum(10);
            this.myHP -= damageToPlayer;
            this.monsterHP -= damageToMonster;
            this.log.push({
                player: -damageToMonster,
                monster: -damageToPlayer 
            });
        },
        specialAttack: function() {
            damageToPlayer = this.randomNum(10);
            damageToMonster = this.randomNum(20);
            this.myHP -= damageToPlayer;
            this.monsterHP -= damageToMonster;
            this.log.push({
                player: -damageToMonster,
                monster: -damageToPlayer 
            });
        },
        heal: function() {
            damageToPlayer = this.randomNum(10);
            playerHeal = this.randomNum(10);
            this.myHP += playerHeal - damageToPlayer;
            this.log.push({
                player: playerHeal,
                monster: -damageToPlayer 
            });
        },
        giveup: function() {
            this.isStart = false;
            this.myHP = 100;
            this.monsterHP = 100;
            this.log = [];
        },
        gameFinish: function() {
            if (this.myHP == 0) {
                if(confirm('You lose! New Game')) {
                    this.resetGame();
                };
            } else if(this.monsterHP == 0) {
                if(confirm('You win! New game?')) {
                    this.resetGame();
                };
            }
            
        }
    },
    watch: {
        myHP: function() {
            if (this.myHP > 100) {
                this.myHP = 100;
            } else if (this.myHP < 0) {
                this.myHP = 0;
                // alert('You lose! New game?');
                this.gameFinish();
            }
        },
        monsterHP: function() {
            if (this.monsterHP > 100) {
                this.monsterHP = 100;
            } else if (this.monsterHP < 0) {
                this.monsterHP = 0;
                // alert('You win! New game?');
                this.gameFinish();
            }
        }
    }
});