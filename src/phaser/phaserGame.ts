import PhaserCanvas from "#app/phaser/phaserCanvas";

export default class PhaserGame {
  public canvas: PhaserCanvas;
  constructor() {
    this.canvas = new PhaserCanvas();
  }
}
