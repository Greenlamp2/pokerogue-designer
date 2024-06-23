import PhaserText from "#app/phaser/phaserText";
import PhaserScene from "#app/phaser/phaserScene";
import PhaserTextStyle from "#app/phaser/phaserTextStyle";

export default class PhaserInputText extends PhaserText {
  constructor(scene: PhaserScene, x?:number, y?: number, width?: number, height?: number, styleOptions?: PhaserTextStyle) {
    super(scene, x, y, "", styleOptions);
  }
}
