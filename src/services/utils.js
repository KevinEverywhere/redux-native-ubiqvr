import { Dimensions, PixelRatio } from 'react-native';
const dims = {height, width} = Dimensions.get('window');
const _width=PixelRatio.getPixelSizeForLayoutSize(dims.width);
const _height=PixelRatio.getPixelSizeForLayoutSize(dims.height);
const _min=Math.min(_height, _width);
const _max=Math.max(_height, _width);

export function getSVGDims() {
  return ({
    width: _width,
    height: _height,
    max: _max,
    min: _min,
  });
}

export default function Util(){
  return {empty:'function'};
}
