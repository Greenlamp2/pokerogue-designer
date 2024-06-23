import i18next from "i18next";

const VOLUME_OPTIONS: SettingOption[] = new Array(11).fill(null).map((_, i) => i ? {
  value: (i * 10).toString(),
  label: (i * 10).toString(),
} : {
  value: "Mute",
  label: i18next.t("settings:mute")
});
const OFF_ON: SettingOption[] = [
  {
    value: "Off",
    label: i18next.t("settings:off")
  },
  {
    value: "On",
    label: i18next.t("settings:on")
  }
];
const AUTO_DISABLED: SettingOption[] = [
  {
    value: "Auto",
    label: i18next.t("settings:auto")
  },
  {
    value: "Disabled",
    label: i18next.t("settings:disabled")
  }
];

/**
 * Types for helping separate settings to different menus
 */
export enum SettingType {
  GENERAL,
  DISPLAY,
  AUDIO
}

type SettingOption = {
  value: string,
  label: string
};

export interface Setting {
  key: string
  label: string
  options: SettingOption[]
  default: number
  type: SettingType
  requireReload?: boolean
}

/**
 * Setting Keys for existing settings
 * to be used when trying to find or update Settings
 */
export const SettingKeys = {
  Game_Speed: "GAME_SPEED",
  HP_Bar_Speed: "HP_BAR_SPEED",
  EXP_Gains_Speed: "EXP_GAINS_SPEED",
  EXP_Party_Display: "EXP_PARTY_DISPLAY",
  Skip_Seen_Dialogues: "SKIP_SEEN_DIALOGUES",
  Battle_Style: "BATTLE_STYLE",
  Enable_Retries: "ENABLE_RETRIES",
  Tutorials: "TUTORIALS",
  Touch_Controls: "TOUCH_CONTROLS",
  Vibration: "VIBRATION",
  Language: "LANGUAGE",
  UI_Theme: "UI_THEME",
  Window_Type: "WINDOW_TYPE",
  Money_Format: "MONEY_FORMAT",
  Damage_Numbers: "DAMAGE_NUMBERS",
  Move_Animations: "MOVE_ANIMATIONS",
  Show_Stats_on_Level_Up: "SHOW_LEVEL_UP_STATS",
  Candy_Upgrade_Notification: "CANDY_UPGRADE_NOTIFICATION",
  Candy_Upgrade_Display: "CANDY_UPGRADE_DISPLAY",
  Move_Info: "MOVE_INFO",
  Show_Moveset_Flyout: "SHOW_MOVESET_FLYOUT",
  Show_Arena_Flyout: "SHOW_ARENA_FLYOUT",
  Show_Time_Of_Day_Widget: "SHOW_TIME_OF_DAY_WIDGET",
  Time_Of_Day_Animation: "TIME_OF_DAY_ANIMATION",
  Sprite_Set: "SPRITE_SET",
  Fusion_Palette_Swaps: "FUSION_PALETTE_SWAPS",
  Player_Gender: "PLAYER_GENDER",
  Type_Hints: "TYPE_HINTS",
  Master_Volume: "MASTER_VOLUME",
  BGM_Volume: "BGM_VOLUME",
  SE_Volume: "SE_VOLUME",
  Music_Preference: "MUSIC_PREFERENCE"
};

/**
 * All Settings not related to controls
 */
export const Setting: Array<Setting> = [
  {
    key: SettingKeys.Game_Speed,
    label: i18next.t("settings:gameSpeed"),
    options: [
      {
        value: "1",
        label: "1x"
      },
      {
        value: "1.25",
        label: "1.25x"
      },
      {
        value: "1.5",
        label: "1.5x"
      },
      {
        value: "2",
        label: "2x"
      },
      {
        value: "2.5",
        label: "2.5x"
      },
      {
        value: "3",
        label: "3x"
      },
      {
        value: "4",
        label: "4x"
      },
      {
        value: "5",
        label: "5x"
      }
    ],
    default: 3,
    type: SettingType.GENERAL
  },
  {
    key: SettingKeys.HP_Bar_Speed,
    label: i18next.t("settings:hpBarSpeed"),
    options: [
      {
        value: "Normal",
        label: i18next.t("settings:normal")
      },
      {
        value: "Fast",
        label: i18next.t("settings:fast")
      },
      {
        value: "Faster",
        label: i18next.t("settings:faster")
      },
      {
        value: "Skip",
        label: i18next.t("settings:skip")
      }
    ],
    default: 0,
    type: SettingType.GENERAL
  },
  {
    key: SettingKeys.EXP_Gains_Speed,
    label: i18next.t("settings:expGainsSpeed"),
    options: [
      {
        value: "Normal",
        label: i18next.t("settings:normal")
      },
      {
        value: "Fast",
        label: i18next.t("settings:fast")
      },
      {
        value: "Faster",
        label: i18next.t("settings:faster")
      },
      {
        value: "Skip",
        label: i18next.t("settings:skip")
      }
    ],
    default: 0,
    type: SettingType.GENERAL
  },
  {
    key: SettingKeys.EXP_Party_Display,
    label: i18next.t("settings:expPartyDisplay"),
    options: [
      {
        value: "Normal",
        label: i18next.t("settings:normal")
      },
      {
        value: "Level Up Notification",
        label: i18next.t("settings:levelUpNotifications")
      },
      {
        value: "Skip",
        label: i18next.t("settings:skip")
      }
    ],
    default: 0,
    type: SettingType.GENERAL
  },
  {
    key: SettingKeys.Skip_Seen_Dialogues,
    label: i18next.t("settings:skipSeenDialogues"),
    options: OFF_ON,
    default: 0,
    type: SettingType.GENERAL
  },
  {
    key: SettingKeys.Battle_Style,
    label: i18next.t("settings:battleStyle"),
    options: [
      {
        value: "Switch",
        label: i18next.t("settings:switch")
      },
      {
        value: "Set",
        label: i18next.t("settings:set")
      }
    ],
    default: 0,
    type: SettingType.GENERAL
  },
  {
    key: SettingKeys.Enable_Retries,
    label: i18next.t("settings:enableRetries"),
    options: OFF_ON,
    default: 0,
    type: SettingType.GENERAL
  },
  {
    key: SettingKeys.Tutorials,
    label: i18next.t("settings:tutorials"),
    options: OFF_ON,
    default: 1,
    type: SettingType.GENERAL
  },
  {
    key: SettingKeys.Touch_Controls,
    label: i18next.t("settings:touchControls"),
    options: AUTO_DISABLED,
    default: 0,
    type: SettingType.GENERAL
  },
  {
    key: SettingKeys.Vibration,
    label: i18next.t("settings:vibrations"),
    options: AUTO_DISABLED,
    default: 0,
    type: SettingType.GENERAL
  },
  {
    key: SettingKeys.Language,
    label: i18next.t("settings:language"),
    options: [
      {
        value: "English",
        label: "English"
      },
      {
        value: "Change",
        label: i18next.t("settings:change")
      }
    ],
    default: 0,
    type: SettingType.DISPLAY,
    requireReload: true
  },
  {
    key: SettingKeys.UI_Theme,
    label: i18next.t("settings:uiTheme"),
    options: [
      {
        value: "Default",
        label: i18next.t("settings:default")
      },
      {
        value: "Legacy",
        label: i18next.t("settings:legacy")
      }
    ],
    default: 0,
    type: SettingType.DISPLAY,
    requireReload: true
  },
  {
    key: SettingKeys.Window_Type,
    label: i18next.t("settings:windowType"),
    options: new Array(5).fill(null).map((_, i) => {
      const windowType = (i + 1).toString();
      return {
        value: windowType,
        label: windowType
      };
    }),
    default: 0,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Money_Format,
    label: i18next.t("settings:moneyFormat"),
    options: [
      {
        value: "Normal",
        label: i18next.t("settings:normal")
      },
      {
        value: "Abbreviated",
        label: i18next.t("settings:abbreviated")
      }
    ],
    default: 0,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Damage_Numbers,
    label: i18next.t("settings:damageNumbers"),
    options: [
      {
        value: "Off",
        label: i18next.t("settings:off")
      },
      {
        value: "Simple",
        label: i18next.t("settings:simple")
      },
      {
        value: "Fancy",
        label: i18next.t("settings:fancy")
      }
    ],
    default: 0,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Move_Animations,
    label: i18next.t("settings:moveAnimations"),
    options: OFF_ON,
    default: 1,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Show_Stats_on_Level_Up,
    label: i18next.t("settings:showStatsOnLevelUp"),
    options: OFF_ON,
    default: 1,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Candy_Upgrade_Notification,
    label: i18next.t("settings:candyUpgradeNotification"),
    options: [
      {
        value: "Off",
        label: i18next.t("settings:off")
      },
      {
        value: "Passives Only",
        label: i18next.t("settings:passivesOnly")
      },
      {
        value: "On",
        label: i18next.t("settings:on")
      }
    ],
    default: 0,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Candy_Upgrade_Display,
    label: i18next.t("settings:candyUpgradeDisplay"),
    options: [
      {
        value: "Icon",
        label: i18next.t("settings:icon")
      },
      {
        value: "Animation",
        label: i18next.t("settings:animation")
      }
    ],
    default: 0,
    type: SettingType.DISPLAY,
    requireReload: true
  },
  {
    key: SettingKeys.Move_Info,
    label: i18next.t("settings:moveInfo"),
    options: OFF_ON,
    default: 1,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Show_Moveset_Flyout,
    label: i18next.t("settings:showMovesetFlyout"),
    options: OFF_ON,
    default: 1,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Show_Arena_Flyout,
    label: i18next.t("settings:showArenaFlyout"),
    options: OFF_ON,
    default: 1,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Show_Time_Of_Day_Widget,
    label: i18next.t("settings:showTimeOfDayWidget"),
    options: OFF_ON,
    default: 1,
    type: SettingType.DISPLAY,
    requireReload: true,
  },
  {
    key: SettingKeys.Time_Of_Day_Animation,
    label: i18next.t("settings:timeOfDayAnimation"),
    options: [
      {
        value: "Bounce",
        label: i18next.t("settings:bounce")
      },
      {
        value: "Back",
        label: i18next.t("settings:timeOfDay_back")
      }
    ],
    default: 0,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Sprite_Set,
    label: i18next.t("settings:spriteSet"),
    options: [
      {
        value: "Consistent",
        label: i18next.t("settings:consistent")
      },
      {
        value: "Mixed Animated",
        label: i18next.t("settings:mixedAnimated")
      }
    ],
    default: 0,
    type: SettingType.DISPLAY,
    requireReload: true
  },
  {
    key: SettingKeys.Fusion_Palette_Swaps,
    label: i18next.t("settings:fusionPaletteSwaps"),
    options: OFF_ON,
    default: 1,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Player_Gender,
    label: i18next.t("settings:playerGender"),
    options: [
      {
        value: "Boy",
        label: i18next.t("settings:boy")
      },
      {
        value: "Girl",
        label: i18next.t("settings:girl")
      }
    ],
    default: 0,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Type_Hints,
    label: i18next.t("settings:typeHints"),
    options: OFF_ON,
    default: 0,
    type: SettingType.DISPLAY
  },
  {
    key: SettingKeys.Master_Volume,
    label: i18next.t("settings:masterVolume"),
    options: VOLUME_OPTIONS,
    default: 5,
    type: SettingType.AUDIO
  },
  {
    key: SettingKeys.BGM_Volume,
    label: i18next.t("settings:bgmVolume"),
    options: VOLUME_OPTIONS,
    default: 10,
    type: SettingType.AUDIO
  },
  {
    key: SettingKeys.SE_Volume,
    label: i18next.t("settings:seVolume"),
    options: VOLUME_OPTIONS,
    default: 10,
    type: SettingType.AUDIO
  },
  {
    key: SettingKeys.Music_Preference,
    label: i18next.t("settings:musicPreference"),
    options: [
      {
        value: "Consistent",
        label: i18next.t("settings:consistent")
      },
      {
        value: "Mixed",
        label: i18next.t("settings:mixed")
      }
    ],
    default: 0,
    type: SettingType.AUDIO,
    requireReload: true
  }
];
