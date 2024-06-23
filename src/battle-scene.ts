import UI from "#app/ui/ui";
import {UiTheme} from "#enums/ui-theme";
import PhaserGame from "#app/phaser/phaserGame";

export default class BattleScene {
  public game: PhaserGame;
  public ui: UI;
  public uiTheme: UiTheme = UiTheme.DEFAULT;

  constructor() {
    this.game = new PhaserGame();
    this.ui = new UI(this);
  }
}
