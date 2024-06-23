import PhaserTweens from "#app/phaser/phaserTweens";
import PhaserTime from "#app/phaser/phaserTime";
import PhaserSound from "#app/phaser/phaserSound";
import PhaserTextureManager from "#app/phaser/phaserTextureManager";
import PhaserText from "#app/phaser/phaserText";
import PhaserSprite from "#app/phaser/phaserSprite";
import PhaserNineSlice from "#app/phaser/phaserNineSlice";
import PhaserTexture from "#app/phaser/phaserTexture";
import PhaserContainer from "#app/phaser/phaserContainer";
import PhaserRectangle from "#app/phaser/phaserRectangle";
import PhaserImage from "#app/phaser/phaserImage";
import PhaserPolygon from "./phaserPolygon";
import PhaserDisplayList from "#app/phaser/phaserDisplayList";
import PhaserGameObjectCreator from "#app/phaser/phaserGameObjectCreator";

export default class PhaserScene {
  private nameScene: string;
  public tweens: PhaserTweens;
  public time: PhaserTime;
  public sound: PhaserSound;
  textures: PhaserTextureManager;
  public list = [];
  public displayList: PhaserDisplayList = new PhaserDisplayList(this);
  public make: PhaserGameObjectCreator;

  public add = {
    sprite: this.sprite.bind(this),
    text: this.text.bind(this),
    nineslice: this.nineslice.bind(this),
    container: this.container.bind(this),
    tileSprite: this.sprite.bind(this),
    existing: this.existing.bind(this),
    rectangle: this.rectangle.bind(this),
    image: this.image.bind(this),
    polygon: this.polygon.bind(this),
    bitmapText: this.text.bind(this),
    displayList: this.displayList,
  };

  constructor(nameScene: string) {
    this.time = new PhaserTime();
    this.time = new PhaserTime();
    this.tweens = new PhaserTweens();
    this.textures = new PhaserTextureManager();
    this.make = new PhaserGameObjectCreator(this);
    this.nameScene = nameScene;
  }

  sprite(x: number, y: number, texture: string) {
    const sprite = new PhaserSprite(this, x, y, texture);
    this.list.push(sprite);
    return sprite;
  }

  text(x, y, content, styleOptions) {
    const text = new PhaserText(this, x, y, content, styleOptions);
    this.list.push(text);
    return text;
  }

  nineslice(x: number, y: number, texture: string, frame: PhaserTexture, width: number, height: number, leftWidth: number, rightWidth: number, topHeight: number, bottomHeight: number) {
    const nineSlice = new PhaserNineSlice(this, x, y, texture, frame, width, height, leftWidth, rightWidth, topHeight, bottomHeight);
    this.list.push(nineSlice);
    return nineSlice;
  }

  container(x, y) {
    const container = new PhaserContainer(this, x, y);
    this.list.push(container);
    return container;
  }

  existing(obj) {
  }

  rectangle(x, y, width, height, fillColor) {
    const rectangle = new PhaserRectangle(this, x, y, width, height, fillColor);
    this.list.push(rectangle);
    return rectangle;
  }

  image(x, y, texture) {
    const image = new PhaserImage(this, x, y, texture);
    this.list.push(image);
    return image;
  }

  polygon(x, y, content, fillColor, fillAlpha) {
    const polygon = new PhaserPolygon(this, x, y, content, fillColor, fillAlpha);
    this.list.push(polygon);
    return polygon;
  }

}
