import UI from "#app/ui/ui";
import BattleScene from "#app/battle-scene";
import {Mode} from "#enums/mode";
import UiHandler from "#app/ui/ui-handler";


const useUiManager = () => {
  const scene = new BattleScene();
  const ui = new UI(scene);
  scene.ui = ui;
  const setMode = (mode: Mode, handler: UiHandler) => {
    ui.handlers[mode] = handler;
    scene.ui.setMode(mode);
  };

  return {
    scene, ui, setMode
  };
};

export default useUiManager;
