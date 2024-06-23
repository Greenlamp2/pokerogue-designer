import UiHandler from "#app/ui/ui-handler";
import BattleScene from "#app/battle-scene";
import {Mode} from "#enums/mode";
import { Button } from "#enums/buttons";
import {Setting} from "#app/system/settings/settings";


export default class AbstractSettingsUiHandler extends UiHandler {
  private reloadRequired: boolean;
  protected rowsToDisplay: number;
  protected title: string;
  protected settings: Array<Setting>;
  protected localStorageKey: string;

  constructor(scene: BattleScene, mode?: Mode) {
    super(scene, mode);

    this.reloadRequired = false;
    this.rowsToDisplay = 8;
  }

  setup(): void {
    throw new Error("Method not implemented.");
  }
  processInput(button: Button): boolean {
    throw new Error("Method not implemented.");
  }
}
