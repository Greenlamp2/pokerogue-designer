import UI, { Mode } from "pokerogue/src/ui/UI";
import GameManager from "pokerogue/src/test/utils/GameManager";

const useUiManager = () => {
  const phaserGame = new Phaser.Game({
    type: Phaser.HEADLESS,
  });
  const game = new GameManager(phaserGame);
  const ui = new UI(game.scene);
  const setMode = (mode: Mode) => {
    ui.setMode(mode);
  };

  return {
    setMode
  };
};

export default useUiManager;
