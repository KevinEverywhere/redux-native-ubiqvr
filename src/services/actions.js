import store from './store';
import { Alert } from 'react-native';
export const SVG_MULT = 'svgMult';
export const ADD_BLOCK = 'addBlock';
export const GET_BLOCKS = 'getBlocks';

export const svgMult = data => store.dispatch({type: SVG_MULT, data});;

export const addBlock = block => store.dispatch({type: ADD_BLOCK, block});

export const getBlocks =() => store.dispatch({type: GET_BLOCKS});

export default function nothingHere() {
  return {"nothing": "here"};
}
