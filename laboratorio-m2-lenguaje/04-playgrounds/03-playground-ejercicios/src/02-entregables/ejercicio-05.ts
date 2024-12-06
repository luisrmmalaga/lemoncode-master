console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {

    private coins: number = 0;

    public play() {
        ++this.coins;
        const roulette = this.spinRoulette();
        if(this.anyFalseValue(roulette )) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
            return;
        }

        console.log("Good luck next time!!");
    }

    private spinRoulette(){
        return [this.generateBooleanValue(), this.generateBooleanValue(), this.generateBooleanValue()];
    }

    private generateBooleanValue() {
        return Boolean(Math.round(Math.random()));
    }

    private anyFalseValue(roulette) {
        return !roulette.some(value => !value);
    }
  }
  
  const machine1 = new SlotMachine();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();