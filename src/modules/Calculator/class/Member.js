export default class Member {
    constructor(value = 0, power = 0){
        this.value = value - 0;
        this.power = power - 0;
    }

    toString() {
        if (this.value === -1 && this.power === 1) return "-x";
        if (this.value === 1 && this.power === 1) return "x";
        if (this.value === -1) return `-x^${this.power}`;
        if (this.value === 0) return "";
        if (this.power === 0) return `${this.value}`;
        if (this.value === 1) return `x^${this.power}`;
        if (this.power === 1) return `${this.value}*x`;
        return `${this.value}*x^${this.power}`;
    }
}