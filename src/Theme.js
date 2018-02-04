/**
 * Created by NikitaB on 2/3/18.
 */
import {
  yellow500, yellow400, yellow300, yellowA500, yellowA400, yellowA300, white, darkBlack, fullBlack, yellow600, yellow700
} from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  appBar: {
    height: 50,
    textColor: darkBlack
  },
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: yellow500,
    primary2Color: yellow400,
    primary3Color: yellow300,
    accent1Color: yellowA500,
    accent2Color: yellowA400,
    accent3Color: yellowA300,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: yellow600,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: yellow700,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
