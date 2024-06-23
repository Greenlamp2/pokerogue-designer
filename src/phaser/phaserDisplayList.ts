import PhaserScene from "#app/phaser/phaserScene";

export default class PhaserDisplayList {
  scene: PhaserScene;
  public list = [];

  constructor(scene: PhaserScene) {
    this.scene = scene;
  }

  setTexture(key: string, frame?: string | number) {
    return this;
  }

  setSizeToFrame(frame?: boolean) {
    return {};
  }

  setPipeline(obj) {
    // Sets the pipeline of this Game Object.
  }

  off(event, callback, source) {
  }

  setTintFill(color) {
    // Sets the tint fill color.
  }

  setScale(scale) {
  }

  setOrigin(x, y) {
  }

  setSize(width, height) {
    // Sets the size of this Game Object.
  }

  once(event, callback, source) {
  }

  removeFromDisplayList() {
    // same as remove or destroy
  }

  addedToScene() {
    // This callback is invoked when this Game Object is added to a Scene.
  }

  setVisible(visible) {
  }

  setPosition(x, y) {
  }

  stop() {
  }

  setInteractive(hitArea, hitAreaCallback, dropZone) {
    return null;
  }

  on(event, callback, source) {
  }

  setAlpha(alpha) {
  }

  setTint(color) {
    // Sets the tint of this Game Object.
  }

  setPositionRelative(source, x, y) {
    /// Sets the position of this Game Object to be a relative position from the source Game Object.
  }

  setCrop(x, y, width, height) {
    // Sets the crop size of this Game Object.
  }

  clearTint() {
    // Clears any previously set tint.
  }

  disableInteractive() {
    // Disables Interactive features of this Game Object.
    return null;
  }

  apply() {
  }

  play() {
    // return this.phaserSprite.play();
    return this;
  }

  destroy() {
  }

  setName(name) {
  }

  setAngle(angle) {
  }

  setMask() {

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
}
