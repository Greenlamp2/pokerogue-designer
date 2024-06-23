import {FieldPhase} from "#app/phases/fieldPhase";
import BattleScene from "#app/battle-scene";

export default class TurnInitPhase extends FieldPhase {
  constructor(scene: BattleScene) {
    super(scene);
  }
}
