import PhaserScene from "#app/phaser/phaserScene";

export const legacyCompatibleImages: string[] = [];

export default class SceneBase extends PhaserScene {
  constructor(nameScene: string) {
    super(nameScene);
  }
}
