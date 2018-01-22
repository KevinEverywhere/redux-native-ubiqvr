import { Dimensions, PixelRatio } from 'react-native';
import { combineReducers } from 'redux';
import { SVG_MULT, svgMult, ADD_BLOCK, GET_BLOCKS } from './actions';
// const svgStuff = Surface(this.props.children);
const dims = {height, width} = Dimensions.get('window');
const _width=PixelRatio.getPixelSizeForLayoutSize(dims.width);
const _height=PixelRatio.getPixelSizeForLayoutSize(dims.height);
const _min=Math.min(_height, _width);
const _max=Math.max(_height, _width);

export function getSVGDims(state = {}, action) {
  switch (action.type) {
    case "SVG_MULT":
      return Object.assign({}, state,
        {svgDims:{
          width: _width,
          height: _height,
          max: _max,
          min: _min,
        }},
      );
    default:
      return state;
  }
}

export function getBlocks(state = {}, action) {
  switch (action.type) {
    case "GET_BLOCKS":
      return Object.assign({}, state,
        store.getState().getBlocks,
      );
    default:
      return state;
  }
}

export function addBlock(state = {}, action) {
  switch (action.type) {
    case "ADD_BLOCK":
      return Object.assign({}, state,
        {svgDims:{
          width: _width,
          height: _height,
          max: _max,
          min: _min,
        }},
      );
    default:
      return state;
  }
}

 combineReducers({
  getSVGDims,
  addBlock,
  getBlocks
});

const reducers = () => {}

export default reducers;
