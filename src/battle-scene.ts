import UI from "#app/ui/ui";
import {UiTheme} from "#enums/ui-theme";
import PhaserGame from "#app/phaser/phaserGame";
import {Phase} from "#app/phase";
import AbilityBar from "#app/ui/abilityBar";
import SceneBase from "#app/scene-base";
import Battle from "#app/battle";
import TurnInitPhase from "#app/phases/turnInitPhase";
import CharSprite from "#app/ui/char-sprite";
import PhaserContainer from "#app/phaser/phaserContainer";

export type AnySound = any;

export default class BattleScene extends SceneBase {
  public game: PhaserGame;
  public ui: UI;
  public uiTheme: UiTheme = UiTheme.DEFAULT;
  public masterVolume: number = 0.5;
  public bgmVolume: number = 1;
  public seVolume: number = 1;
  public charSprite: CharSprite;
  public windowType: integer = 0;

  public phaseQueue: Phase[];
  private phaseQueuePrepend: Phase[];
  public conditionalQueue: Array<[() => boolean, Phase]>;
  private phaseQueuePrependSpliceIndex: integer;
  private nextCommandPhaseQueue: Phase[];
  private currentPhase: Phase;
  private standbyPhase: Phase;

  public currentBattle: Battle;

  public abilityBar: AbilityBar;
  public fieldUI: PhaserContainer;

  constructor() {
    super("battle");
    this.game = new PhaserGame();
    this.phaseQueue = [];
    this.phaseQueuePrepend = [];
    this.conditionalQueue = [];
    this.phaseQueuePrependSpliceIndex = -1;
    this.nextCommandPhaseQueue = [];
  }

  shiftPhase(): void {
    if (this.standbyPhase) {
      this.currentPhase = this.standbyPhase;
      this.standbyPhase = null;
      return;
    }

    if (this.phaseQueuePrependSpliceIndex > -1) {
      this.clearPhaseQueueSplice();
    }
    if (this.phaseQueuePrepend.length) {
      while (this.phaseQueuePrepend.length) {
        this.phaseQueue.unshift(this.phaseQueuePrepend.pop());
      }
    }
    if (!this.phaseQueue.length) {
      this.populatePhaseQueue();
      // clear the conditionalQueue if there are no phases left in the phaseQueue
      this.conditionalQueue = [];
    }
    this.currentPhase = this.phaseQueue.shift();

    // Check if there are any conditional phases queued
    if (this.conditionalQueue?.length) {
      // Retrieve the first conditional phase from the queue
      const conditionalPhase = this.conditionalQueue.shift();
      // Evaluate the condition associated with the phase
      if (conditionalPhase && conditionalPhase[0]()) {
        // If the condition is met, add the phase to the front of the phase queue
        this.unshiftPhase(conditionalPhase[1]);
      } else if (conditionalPhase) {
        // If the condition is not met, re-add the phase back to the front of the conditional queue
        this.conditionalQueue.unshift(conditionalPhase);
      }
    }

    this.currentPhase.start();
  }

  clearPhaseQueueSplice(): void {
    this.phaseQueuePrependSpliceIndex = -1;
  }

  populatePhaseQueue(): void {
    if (this.nextCommandPhaseQueue.length) {
      this.phaseQueue.push(...this.nextCommandPhaseQueue);
      this.nextCommandPhaseQueue.splice(0, this.nextCommandPhaseQueue.length);
    }
    this.phaseQueue.push(new TurnInitPhase(this));
  }

  unshiftPhase(phase: Phase): void {
    if (this.phaseQueuePrependSpliceIndex === -1) {
      this.phaseQueuePrepend.push(phase);
    } else {
      this.phaseQueuePrepend.splice(this.phaseQueuePrependSpliceIndex, 0, phase);
    }
  }

  playSound(sound: string | AnySound, config?: object): AnySound {
    if (config) {
      if (config.hasOwnProperty("volume")) {
        config["volume"] *= this.masterVolume * this.seVolume;
      } else {
        config["volume"] = this.masterVolume * this.seVolume;
      }
    } else {
      config = { volume: this.masterVolume * this.seVolume };
    }
    // PRSFX sounds are mixed too loud
    if ((typeof sound === "string" ? sound : sound.key).startsWith("PRSFX- ")) {
      config["volume"] *= 0.5;
    }
    if (typeof sound === "string") {
      this.sound.play(sound, config);
      return this.sound.get(sound) as AnySound;
    } else {
      sound.play(config);
      return sound;
    }
  }
}
