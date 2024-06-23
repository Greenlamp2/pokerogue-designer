import {Phase} from "#app/phase";
import BattleScene from "#app/battle-scene";
import {TrainerSlot} from "#enums/trainerSlot";

export default class BattlePhase extends Phase {
  constructor(scene: BattleScene) {
    super(scene);
  }
}
