import PhaserText from "#app/phaser/phaserText";
import PhaserScene from "#app/phaser/phaserScene";
import PhaserTextStyle from "#app/phaser/phaserTextStyle";

export default class PhaserBBCodeText extends PhaserText {
  constructor(scene: PhaserScene, x?: number, y?: number, text?: string, styleOptions?: PhaserTextStyle) {
    super(scene, x, y, text, styleOptions);
  }
}
