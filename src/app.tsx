import React, {useEffect} from "react";
import useUiManager from "#app/hooks/useUiManager";
import {Mode} from "#enums/mode";
import SettingsUiHandler from "#app/ui/settings/settings-ui-handler";

const App = () => {
  const {setMode, scene, ui} = useUiManager();

  useEffect(() => {
    const handler = new SettingsUiHandler(scene, Mode.SETTINGS);
    setMode(Mode.SETTINGS, handler);
  }, [setMode, ui, scene]);

  return (
    <div>
    </div>
  );
};

export default App;
