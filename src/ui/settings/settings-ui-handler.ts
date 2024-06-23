import AbstractSettingsUiHandler from "#app/ui/settings/abstract-settings-ui-handler";
import {Mode} from "#enums/mode";
import BattleScene from "#app/battle-scene";
import {Setting, SettingType} from "#app/system/settings/settings";

export default class SettingsUiHandler extends AbstractSettingsUiHandler {
  /**
   * Creates an instance of SettingsGamepadUiHandler.
   *
   * @param scene - The BattleScene instance.
   * @param mode - The UI mode, optional.
   */
  constructor(scene: BattleScene, mode?: Mode) {
    super(scene, mode);
    this.title = "General";
    this.settings = Setting.filter(s => s.type === SettingType.GENERAL);
    this.localStorageKey = "settings";
  }
}
