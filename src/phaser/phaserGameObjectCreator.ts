import PhaserScene from "#app/phaser/phaserScene";
import PhaserGraphics from "#app/phaser/phaserGraphics";

export default class PhaserGameObjectCreator {
  scene: PhaserScene;
  constructor(scene: PhaserScene) {
    this.scene = scene;
  }

  graphics(config: any): PhaserGraphics {
    return new PhaserGraphics(this.scene);
  }
}
