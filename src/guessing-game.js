class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let mid = Math.ceil((this.max + this.min) / 2);
        return mid;
    }

    lower() {
        let maxNum = this.guess();
        this.setRange(this.min, maxNum);
    }

    greater() {
        let minNum = this.guess();
        this.setRange(minNum, this.max);
    }
}

module.exports = GuessingGame;
