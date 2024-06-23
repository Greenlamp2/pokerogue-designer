import PhaserContainer from "#app/phaser/phaserContainer";
import BattleScene from "#app/battle-scene";
import UiHandler from "#app/ui/ui-handler";
import PhaserRectangle from "#app/phaser/phaserRectangle";
import {Mode} from "#enums/mode";
import BattleMessageUiHandler from "#app/ui/0 - message/battle-message-ui-handler";

const transitionModes = [
  Mode.SAVE_SLOT,
  Mode.PARTY,
  Mode.SUMMARY,
  Mode.STARTER_SELECT,
  Mode.EVOLUTION_SCENE,
  Mode.EGG_HATCH_SCENE,
  Mode.EGG_LIST,
  Mode.EGG_GACHA,
  Mode.CHALLENGE_SELECT
];

const noTransitionModes = [
  Mode.TITLE,
  Mode.CONFIRM,
  Mode.OPTION_SELECT,
  Mode.MENU,
  Mode.MENU_OPTION_SELECT,
  Mode.GAMEPAD_BINDING,
  Mode.KEYBOARD_BINDING,
  Mode.SETTINGS,
  Mode.SETTINGS_AUDIO,
  Mode.SETTINGS_DISPLAY,
  Mode.SETTINGS_GAMEPAD,
  Mode.SETTINGS_KEYBOARD,
  Mode.ACHIEVEMENTS,
  Mode.GAME_STATS,
  Mode.VOUCHERS,
  Mode.LOGIN_FORM,
  Mode.REGISTRATION_FORM,
  Mode.LOADING,
  Mode.SESSION_RELOAD,
  Mode.UNAVAILABLE,
  Mode.OUTDATED
];

export default class UI extends PhaserContainer {
  private mode: Mode;
  private modeChain: Mode[];
  public handlers: UiHandler[];
  private overlayActive: boolean;
  private overlay: PhaserRectangle;

  constructor(scene: BattleScene) {
    super(scene, 0, scene.game.canvas.height / 6);
    this.mode = Mode.MESSAGE;
    this.modeChain = [];
    this.handlers = [
      new BattleMessageUiHandler(scene),
    ];
  }

  getHandler(): UiHandler {
    return this.handlers[this.mode];
  }

  getMode(): Mode {
    return this.mode;
  }

  setMode(mode: Mode, ...args: any[]): Promise<void> {
    return this.setModeInternal(mode, true, false, false, args);
  }

  private setModeInternal(mode: Mode, clear: boolean, forceTransition: boolean, chainMode: boolean, args: any[]): Promise<void> {
    return new Promise(resolve => {
      if (this.mode === mode && !forceTransition) {
        resolve();
        return;
      }
      const doSetMode = () => {
        if (this.mode !== mode) {
          if (clear) {
            this.getHandler().clear();
          }
          if (chainMode && this.mode && !clear) {
            this.modeChain.push(this.mode);
          }
          this.mode = mode;
          const touchControls = document.getElementById("touchControls");
          if (touchControls) {
            touchControls.dataset.uiMode = Mode[mode];
          }
          this.getHandler().show(args);
        }
        resolve();
      };
      if (((!chainMode && ((transitionModes.indexOf(this.mode) > -1 || transitionModes.indexOf(mode) > -1)
        && (noTransitionModes.indexOf(this.mode) === -1 && noTransitionModes.indexOf(mode) === -1)))
        || (chainMode && noTransitionModes.indexOf(mode) === -1))) {
        this.fadeOut(250).then(() => {
          this.scene.time.delayedCall(100, () => {
            doSetMode();
            this.fadeIn(250);
          });
        });
      } else {
        doSetMode();
      }
    });
  }

  fadeOut(duration: integer): Promise<void> {
    return new Promise(resolve => {
      if (this.overlayActive) {
        return resolve();
      }
      this.overlayActive = true;
      this.overlay.setAlpha(0);
      this.overlay.setVisible(true);
      this.scene.tweens.add({
        targets: this.overlay,
        alpha: 1,
        duration: duration,
        ease: "Sine.easeOut",
        onComplete: () => resolve()
      });
    });
  }

  fadeIn(duration: integer): Promise<void> {
    return new Promise(resolve => {
      if (!this.overlayActive) {
        return resolve();
      }
      this.scene.tweens.add({
        targets: this.overlay,
        alpha: 0,
        duration: duration,
        ease: "Sine.easeIn",
        onComplete: () => {
          this.overlay.setVisible(false);
          resolve();
        }
      });
      this.overlayActive = false;
    });
  }

  playSelect(): void {
    (this.scene as BattleScene).playSound("select");
  }

}
