import {UiTheme} from "#enums/ui-theme";

export enum TextStyle {
  MESSAGE,
  WINDOW,
  WINDOW_ALT,
  BATTLE_INFO,
  PARTY,
  PARTY_RED,
  SUMMARY,
  SUMMARY_ALT,
  SUMMARY_RED,
  SUMMARY_BLUE,
  SUMMARY_PINK,
  SUMMARY_GOLD,
  SUMMARY_GRAY,
  SUMMARY_GREEN,
  MONEY,
  STATS_LABEL,
  STATS_VALUE,
  SETTINGS_LABEL,
  SETTINGS_SELECTED,
  SETTINGS_LOCKED,
  TOOLTIP_TITLE,
  TOOLTIP_CONTENT,
  MOVE_INFO_CONTENT,
  MOVE_PP_FULL,
  MOVE_PP_HALF_FULL,
  MOVE_PP_NEAR_EMPTY,
  MOVE_PP_EMPTY
}

export function getTextColor(textStyle: TextStyle, shadow?: boolean, uiTheme: UiTheme = UiTheme.DEFAULT): string {
  switch (textStyle) {
  case TextStyle.MESSAGE:
    return !shadow ? "#f8f8f8" : "#6b5a73";
  case TextStyle.WINDOW:
  case TextStyle.MOVE_INFO_CONTENT:
  case TextStyle.MOVE_PP_FULL:
  case TextStyle.TOOLTIP_CONTENT:
    if (uiTheme) {
      return !shadow ? "#484848" : "#d0d0c8";
    }
    return !shadow ? "#f8f8f8" : "#6b5a73";
  case TextStyle.MOVE_PP_HALF_FULL:
    if (uiTheme) {
      return !shadow ? "#a68e17" : "#ebd773";
    }
    return !shadow ? "#ccbe00" : "#6e672c";
  case TextStyle.MOVE_PP_NEAR_EMPTY:
    if (uiTheme) {
      return !shadow ? "#d64b00" : "#f7b18b";
    }
    return !shadow ? "#d64b00" : "#69402a";
  case TextStyle.MOVE_PP_EMPTY:
    if (uiTheme) {
      return !shadow ? "#e13d3d" : "#fca2a2";
    }
    return !shadow ? "#e13d3d" : "#632929";
  case TextStyle.WINDOW_ALT:
    return !shadow ? "#484848" : "#d0d0c8";
  case TextStyle.BATTLE_INFO:
    if (uiTheme) {
      return !shadow ? "#404040" : "#ded6b5";
    }
    return !shadow ? "#f8f8f8" : "#6b5a73";
  case TextStyle.PARTY:
    return !shadow ? "#f8f8f8" : "#707070";
  case TextStyle.PARTY_RED:
    return !shadow ? "#f89890" : "#984038";
  case TextStyle.SUMMARY:
    return !shadow ? "#f8f8f8" : "#636363";
  case TextStyle.SUMMARY_ALT:
    if (uiTheme) {
      return !shadow ? "#f8f8f8" : "#636363";
    }
    return !shadow ? "#484848" : "#d0d0c8";
  case TextStyle.SUMMARY_RED:
  case TextStyle.TOOLTIP_TITLE:
    return !shadow ? "#e70808" : "#ffbd73";
  case TextStyle.SUMMARY_BLUE:
    return !shadow ? "#40c8f8" : "#006090";
  case TextStyle.SUMMARY_PINK:
    return !shadow ? "#f89890" : "#984038";
  case TextStyle.SUMMARY_GOLD:
  case TextStyle.MONEY:
    return !shadow ? "#e8e8a8" : "#a0a060";
  case TextStyle.SETTINGS_LOCKED:
  case TextStyle.SUMMARY_GRAY:
    return !shadow ? "#a0a0a0" : "#636363";
  case TextStyle.STATS_LABEL:
    return !shadow ? "#f8b050" : "#c07800";
  case TextStyle.STATS_VALUE:
    return !shadow ? "#f8f8f8" : "#6b5a73";
  case TextStyle.SUMMARY_GREEN:
    return !shadow ? "#78c850" : "#306850";
  case TextStyle.SETTINGS_LABEL:
    return !shadow ? "#f8b050" : "#c07800";
  case TextStyle.SETTINGS_SELECTED:
    return !shadow ? "#f88880" : "#f83018";
  }
}
