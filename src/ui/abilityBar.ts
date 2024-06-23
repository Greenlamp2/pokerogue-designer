import PhaserContainer from "#app/phaser/phaserContainer";
import BattleScene from "#app/battle-scene";

const hiddenX = -118;
const shownX = 0;
const baseY = -116;

export default class AbilityBar extends PhaserContainer {

  constructor(scene: BattleScene) {
    super(scene, hiddenX, baseY);
  }
}
