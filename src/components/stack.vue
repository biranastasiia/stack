<template>
  <div class="container">
    <div class="stack">
      <h1 class="stack__title">Russian roulette</h1>
      <div class="stack__content">
        <div class="stack__player">
          <div class="stack__player-title">BOT</div>
          <div class="chamber-bot botShoot"></div>
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
          <div class="chamber-player playerShoot"></div>
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
        <div class="score__sub-title">Score</div>
        <span class="score__bot">{{ +botGameOver }}</span> 
        <span>:</span>
        <span class="score__player">{{ +gameOver }}</span>
      </div>
      <div class="score__button">
        <div @click="refillAGun()" class="score__restart">Restart</div>
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
      isPlayerShoot: false,
    }
  },
  mounted() {
    console.log(this.$refs)
    this.refillAGun();
    
  },
  methods: {
    refillAGun: function(){
      this.gameOver = false;
      this.botGameOver = false;
      this.refill = [];
      this.refill.push(1, 2, 3, 4, 5, 6);
      this.refill.sort(() => Math.random() - 0.5);
      let values = Object.values(this.$refs);
      values.forEach(element => {
        element.classList.remove('playerShoot', 'botShoot')
      });
      console.log(this.refill);
    },
    shootABullet: function(){
      let bullet = this.refill.pop()
        if(bullet == 1){
          this.gameOver = true;
        } else {
          console.log(bullet);
          let values = Object.values(this.$refs);
          let styleChamber = values[this.refill.length-1];
          styleChamber.classList.add('playerShoot')

          this.$refs.shoot.classList.add('disabled')
          this.$refs.refill.classList.add('disabled')

          setTimeout(this.shootABotBullet, 2000);
        }
    },
    shootABotBullet: function(){
      let bulletBot = this.refill.pop();
        if(bulletBot == 1){
          this.botGameOver = true;
          this.$refs.shoot.classList.remove('disabled')
          this.$refs.refill.classList.remove('disabled')
        } else {
          console.log(bulletBot);
          let values = Object.values(this.$refs);
          let styleChamber = values[this.refill.length-1];
          styleChamber.classList.add('botShoot')

          this.$refs.shoot.classList.remove('disabled')
          this.$refs.refill.classList.remove('disabled')
        }
    }
  }
}
</script>
