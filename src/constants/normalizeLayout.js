// import {Dimensions, Platform, PixelRatio} from 'react-native';

// export var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
//   Dimensions.get('window');

// const wscale = SCREEN_WIDTH / 360;
// const hscale = SCREEN_HEIGHT / 720;

// export default function normalize(size, based = 'width') {
//   const newSize = based === 'height' ? size * hscale : size * wscale;
//   if (Platform.OS === 'ios') {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize));
//   } else {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
//   }
// }
// export function normalizeWidth(size) {
//   return normalize(size, 'width');
// }

// export function normalizeHeight(size) {
//   return normalize(size, 'height');
// }

// export function normalizeHorizontalPaddingAndMargin(size) {
//   return normalizeWidth(size);
// }

// export function normalizeVerticalPaddingAndMargin(size) {
//   return normalizeHeight(size);
// }

// export function normalizeFont(size) {
//   return normalizeHeight(size);
// }

import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// Define your base sizes here
const BASE_WIDTH = 360;
const BASE_HEIGHT = 720;

const wscale = SCREEN_WIDTH / BASE_WIDTH;
const hscale = SCREEN_HEIGHT / BASE_HEIGHT;

export default function normalize(size, based = 'width') {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if( Platform.OS === 'ios' ) return Math.round(PixelRatio.roundToNearestPixel(newSize) - 2);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function normalizeWidth(size) {
  return normalize(size, 'width');
}

export function normalizeHeight(size) {
  return normalize(size, 'height');
}

export function normalizeHorizontalPaddingAndMargin(size) {
  return normalizeWidth(size);
}

export function normalizeVerticalPaddingAndMargin(size) {
  return normalizeHeight(size);
}

export function normalizeFont(size) {
  return normalizeHeight(size);
}
