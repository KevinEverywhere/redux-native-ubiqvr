import React, { Component } from 'react';
import { View, ART, Dimensions, PixelRatio } from 'react-native';

const ReactART = ART.ReactART;

const {
  Group,
  Shape,
  Surface,
  Text
} = ART;

const getSVGDims = DimOBJ => {
  return {
    width: PixelRatio.getPixelSizeForLayoutSize(DimOBJ.width),
    height: PixelRatio.getPixelSizeForLayoutSize(DimOBJ.height),
  }
}

class SurfaceConnect extends Surface {
  constructor(props){
    super(props);
  }
  render() {
    // This is done specifically for a screen size that makes a square
    // surrounded by navigation. This enables for instance a 1280
    // by 720 display use a 720x720 area which expands to full screen
    // when fullScreen is selected
    const dims = {height, width} = Dimensions.get('window');
    const main = getSVGDims({height:dims.height,width:dims.width});
    const one = Math.min(main.height, main.width);
    const realDims = this.props.fullScreen ? {width:main.width,height:main.height} : {width:one,height:one};
    const _width = realDims.width;
    const _height = realDims.height;
    const perimeter_rect=`M0,0v${_width}h${_height}V0z`;
    // const svgStuff = Surface(this.props.children);
    return (
      <View>
        <Surface width={_width} height={_height}>
          <Group>
            <Shape
              d={perimeter_rect}
              fill={this.props.style.backgroundColor}
              fillOpacity="0.3"
            />
            <Shape
              d={'M50,50v40h40V50z'}
              stroke="#000"
              fill="#927"
              strokeWidth={1}
            />
            <Text x="20" y="20" height="20" width="200">this.props.children</Text>
          </Group>
        </Surface>
      </View>
    );
  }
}

export default SurfaceConnect;
