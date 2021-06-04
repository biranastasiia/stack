<template>
  <div class="stack__wrapper">
    <div class="container">
      <div class="stack">
        <h1 class="stack__title">Russian roulette</h1>
        <div class="stack__total-score-title">Total score</div>
        <div class="stack__total-score">
          <div class="bot-score">{{botScore}}</div>
          <div>:</div>
          <div class="user-score">{{userScore}}</div>
        </div>
        <div class="stack__content">
          <div class="stack__player">
            <div class="stack__player-title">BOT</div>
            <input :checked="isBot" type="radio" name="player" id="bot">
            <label for="bot"></label>
          </div>
          <div class="stack__gun">
            <div class="gun-shop">
              <div class="chamber chamber-1" ref="1"></div>
              <div class="chamber chamber-2" ref="2"></div>
              <div class="chamber chamber-3" ref="3"></div>
              <div class="chamber chamber-4" ref="4"></div>
              <div class="chamber chamber-5" ref="5"></div>
              <div class="chamber chamber-6" ref="6"></div>
              <div class="ratchet"></div>
            </div>
          </div>
          <div class="stack__player">
            <div class="stack__player-title">YOU</div>
            <input :checked="isUser" type="radio" name="player" id="user">
            <label for="user"></label>
          </div>
        </div>
        <div class="stack__buttons">
          <div class="stack__button shoot" ref="shoot" @click="shootABullet">Shoot a bullet!</div>
          <div class="stack__button refill" ref="refill" @click="refillAGun">Refill the gun shop</div>
        </div>
      </div>

      <div v-if="gameOver|| botGameOver" class="background"></div>
      <div v-if="gameOver || botGameOver" class="score">
        <h2 class="score__title" v-if="gameOver && !botGameOver">You lose!</h2>
        <h2 class="score__title" v-if="!gameOver && botGameOver">You win!</h2>
        <div class="score__content">
          <div class="score__sub-title">Game Score</div>
          <span class="score__bot">{{ +botGameOver }}</span> 
          <span>:</span>
          <span class="score__player">{{ +gameOver }}</span>
        </div>
        <div class="score__button">
          <div @click="refillAGun()" class="score__restart">Restart</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      refill: [],
      gameOver: false,
      botGameOver: false,
      isUser: true,
      isBot: false,
      userScore: 0,
      botScore: 0,
    }
  },
  mounted() {
    this.refillAGun();
  },
  methods: {
    refillAGun: function(){
      this.gameOver = false;
      this.botGameOver = false;
      this.isUser = true;
      this.isBot = false;

      this.refill = [];
      this.refill.push(1, 2, 3, 4, 5, 6);
      this.refill.sort(() => Math.random() - 0.5);
      let values = Object.values(this.$refs);
      values.forEach(element => {
        element.classList.remove('shootenChamber')
      });
      console.log(this.refill);
    },
    shootABullet: function(){
      let bullet = this.refill.pop()
        if(bullet == 1){
          this.gameOver = true;
          this.botScore += 1;
        } else {
          let values = Object.values(this.$refs);
          let styleChamber = values[this.refill.length-1];
          styleChamber.classList.add('shootenChamber')

          this.$refs.shoot.classList.add('disabled')
          this.$refs.refill.classList.add('disabled')

          this.isUser = false;
          this.isBot = true;

          setTimeout(this.shootABotBullet, 2000);
        }
    },
    shootABotBullet: function(){
      let bulletBot = this.refill.pop();
        if(bulletBot == 1){
          this.botGameOver = true;
          this.userScore += 1;
          this.$refs.shoot.classList.remove('disabled')
          this.$refs.refill.classList.remove('disabled')
        } else {
          let values = Object.values(this.$refs);
          let styleChamber = values[this.refill.length-1];
          styleChamber.classList.add('shootenChamber')

          this.$refs.shoot.classList.remove('disabled')
          this.$refs.refill.classList.remove('disabled')

          this.isUser = true;
          this.isBot = false;
        }
    }
  }
}
</script>
