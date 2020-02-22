import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'OhMyKer0olos!!';

const color =
{
  dark: '#252526',
  whitish: '#D3D7CF',
  white: '#FFFFFF',
  greenish: '#4EC9B0',
  green: '#8ED15D',
  orange: '#ECC116',
  grey: '#888A85',
  red: '#FF5555',
  purple: '#AD7EC9',
  bluish: '#7496B9'
}

const colorSet: IColorSet =
{
  base:
  {
    background: color.dark,
    foreground: color.whitish,

    color1: color.whitish,
    color2: color.orange,
    color3: color.green,
    color4: color.whitish
  },
  syntax:
  {
    comment: color.grey,
    boolean: color.purple,
    function: color.whitish,
    functionCall: color.whitish,
    identifier: color.whitish,
    keyword: color.purple,
    number: color.orange,
    storage: color.greenish,
    string: color.orange,
    cssClass: color.bluish,
    cssId: color.bluish,
    cssTag: color.bluish,
  },
  ui:
  {
    guide: '#3e3e42',
    invisibles: '#3e3e42',
    selection: '#434044',
    wordHighlight: '#417012'
  },
  overrides:
  {
    'selection.background': '#125b8c',
    'list.activeSelectionBackground': '#094771',
    'list.inactiveSelectionBackground': '#313133',
    'list.inactiveSelectionForeground': '#FFFFFF',
    'list.focusBackground': '#073655',
    'list.hoverBackground': '#2A2D2E',
    // 'editor.foldBackground': '#252526',
    'editor.lineHighlightBorder': '#161616',
    'editor.lineHighlightBackground': '#161616',
    'editor.findMatchBackground': '#0c5096',
    'editor.findMatchHighlightBackground': '#417012',
    'focusBorder': '#094771',
    'button.background': '#094771',
    'sideBar.background': '#252526',
    'panel.background': '#252526',
    'activityBar.background': '#313133',
    'activityBarBadge.background': '#236ea0',
    'statusBar.noFolderBackground': '#094771',
    'statusBar.background': '#151717',
    'statusBar.debuggingBackground': '#CC6633',
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
