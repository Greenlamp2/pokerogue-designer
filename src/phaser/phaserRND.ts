export default class PhaserRND {
  constructor() {
  }

  static realInRange(min: number, max: number): number {
    return (Math.random() * max-min) + min;
  }

  static integerInRange(min: number, max: number): number {
    return Math.floor(Math.random() * max-min) + min;
  }

  static pick(obj): any {
    // return a random element from the obj array
    return obj[Math.floor(Math.random() * obj.length)];
  }

  static weightedPick(obj): any {
    return obj[~~(Math.pow(this.frac(), 2) * (obj.length - 0.5) + 0.5)];
  }

  static frac(): number {
    return Math.random();
  }
}
