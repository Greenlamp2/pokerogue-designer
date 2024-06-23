import BattleScene from "#app/battle-scene";


export default class PhaserContainer {
  protected scene: BattleScene;
  public x: number;
  public y: number;
  constructor(scene: BattleScene, x?: number, y?: number) {
    this.scene = scene;
    this.x = x || 0;
    this.y = y ||0;
  }
}
