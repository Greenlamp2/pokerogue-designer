import PhaserTimerEvent from "#app/phaser/phaserTimerEvent";

export default class PhaserTime {
  private timeScale: number;
  constructor() {
    this.timeScale = 1;
  }

  setScale(scale: number) {
    this.timeScale = scale;
  }

  getScale() {
    return this.timeScale;
  }

  delayedCall(time: number, callback: () => void): PhaserTimerEvent {
    setTimeout(callback, time * this.timeScale);
    return new PhaserTimerEvent();
  }

  addEvent(config: any): PhaserTimerEvent {
    return new PhaserTimerEvent();
  }
}
