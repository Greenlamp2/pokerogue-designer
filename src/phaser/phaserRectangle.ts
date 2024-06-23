import PhaserScene from "#app/phaser/phaserScene";

export default class PhaserRectangle {
  private scene: PhaserScene;
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public fillColor: string;
  public list = [];

  constructor(scene: PhaserScene, x?: number, y?: number, width?: number, height?: number, fillColor?: string) {
    this.scene = scene;
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
    this.fillColor = fillColor || "";
  }
  setOrigin(x, y) {
  }

  setAlpha(alpha) {
  }

  setVisible(visible) {
  }

  setName(name) {
  }

  once(event, callback, source) {
  }

  removeFromDisplayList() {
    // same as remove or destroy
  }

  addedToScene() {
    // This callback is invoked when this Game Object is added to a Scene.
  }

  setPositionRelative(source, x, y) {
    /// Sets the position of this Game Object to be a relative position from the source Game Object.
  }

  destroy() {
    this.list = [];
  }

  add(obj) {
    // Adds a child to this Game Object.
    this.list.push(obj);
  }

  removeAll() {
    // Removes all Game Objects from this Container.
    this.list = [];
  }

  addAt(obj, index) {
    // Adds a Game Object to this Container at the given index.
    this.list.splice(index, 0, obj);
  }

  remove(obj) {
    const index = this.list.indexOf(obj);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  getIndex(obj) {
    const index = this.list.indexOf(obj);
    return index || -1;
  }

  getAt(index) {
    return this.list[index];
  }

  getAll() {
    return this.list;
  }
  setScale(scale) {
    // return this.phaserText.setScale(scale);
  }

}
