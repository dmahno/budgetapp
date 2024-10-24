import {ThemeConfig} from 'antd';

export const configLightTheme: ThemeConfig = {
  token: {
    colorPrimary: '#f1ff0b',
    colorInfo: '#f1ff0b',
    colorBgBase: '#121212',
    colorTextBase: '#fafafa',
    fontSize: 16,
    borderRadius: 16,
    colorSuccess: '#05fa4a',
  },
  components: {
    Button: {
      primaryColor: 'rgb(39,44,0)',
      defaultBorderColor: 'rgb(67,67,67)',
    },
    Typography: {
      fontSizeHeading1: 62,
      fontSizeHeading2: 48,
      fontSizeHeading3: 36,
      fontSizeHeading4: 24,
      titleMarginBottom: '0',
      titleMarginTop: '0',
      fontFamilyCode: "'Logos'",
      fontWeightStrong: 800,
    },
    Checkbox: {
      colorWhite: 'rgb(39,44,0)',
    },
    DatePicker: {
      colorTextLightSolid: 'rgb(39,44,0)',
    },
    Radio: {
      dotSize: 12,
      radioSize: 24,
      buttonSolidCheckedColor: 'rgb(39,44,0)',
      buttonCheckedBg: 'rgb(39,44,0)',
      colorBorder: 'rgb(67,67,67)',
      dotColorDisabled: 'rgba(0,0,0,0.16)',
    },
    Select: {
      controlHeight: 48,
      controlHeightLG: 58,
      controlHeightSM: 38,
      colorBorder: 'rgb(67,67,67)',
      colorPrimary: 'rgb(241,255,11)',
      multipleItemBg: 'rgba(0,0,0,0.37)',
      colorTextPlaceholder: 'rgba(250,250,250,0.8)',
      optionSelectedBg: 'rgb(71,80,5)',
    },
    Slider: {
      handleColor: 'rgb(241,255,11)',
      dotBorderColor: 'rgb(241,255,11)',
      dotActiveBorderColor: 'rgb(241,255,11)',
      handleActiveOutlineColor: 'rgba(243,255,11,0.23)',
      trackBg: 'rgb(241,255,11)',
    },
    Switch: {
      handleBg: 'rgb(241,255,11)',
      handleSize: 24,
      trackHeight: 32,
      trackMinWidth: 48,
      trackPadding: 4,
      innerMinMarginSM: 6,
      handleSizeSM: 12,
      colorPrimary: 'rgb(0,0,0)',
    },
    Tabs: {
      colorText: 'rgb(250,250,250)',
      colorBorder: 'rgba(84,84,84,0)',
      itemActiveColor: 'rgb(255,255,255)',
    },
    Tag: {
      colorTextLightSolid: 'rgb(39,44,0)',
    },
  },
};
