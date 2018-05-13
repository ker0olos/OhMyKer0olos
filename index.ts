import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'OhMyKer0olos!!';

const color =
{
  dark: '#252527',
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
    // function: color.red,
    functionCall: color.white,
    identifier: color.whitish,
    keyword: color.purple,
    number: color.orange,
    storage: color.greenish,
    string: color.orange,
    // class: color.red,
    // classMember: color.red,
    // type: color.red,
    // modifier: color.red,
    cssClass: color.bluish,
    cssId: color.bluish,
    cssTag: color.bluish,
    // markdownQuote: color.red
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
