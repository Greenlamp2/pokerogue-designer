import PhaserTexture from "#app/phaser/phaserTexture";

export default class PhaserTextureManager {
  constructor() {
  }

  get(key: string): PhaserTexture {
    return new PhaserTexture();
  }
}
