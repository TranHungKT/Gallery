import { DataImage, TImage } from '../Components/DataImage'

export interface IINITIAL_STATE {
  indexChooseImage: number

  dataImage: TImage[]
}

export enum Action {
  CHOOSE_NEXT_IMAGE = 'CHOOSE_NEXT_IMAGE',
  CHOOSE_PREVIOUS_IMAGE = 'CHOOSE_PREVIOUS_IMAGE',
  CHOOSE_IMAGE = 'CHOOSE_IMAGE'
}

export type TAction =
  | { type: Action.CHOOSE_NEXT_IMAGE }
  | { type: Action.CHOOSE_PREVIOUS_IMAGE }
  | { type: Action.CHOOSE_IMAGE; payload: number }

export const initialState: IINITIAL_STATE = {
  indexChooseImage: 0,
  dataImage: DataImage
}

export default function ChooseImageReducer(
  state: IINITIAL_STATE,
  action: TAction
) {
  switch (action.type) {
    case Action.CHOOSE_NEXT_IMAGE:
      if (state.indexChooseImage === state.dataImage.length - 1) {
        return {
          ...state,
          indexChooseImage: 0
        }
      }
      return {
        ...state,
        indexChooseImage: state.indexChooseImage + 1
      }

    case Action.CHOOSE_PREVIOUS_IMAGE:
      if (state.indexChooseImage === 0) {
        return {
          ...state,
          indexChooseImage: state.dataImage.length - 1
        }
      }
      return {
        ...state,
        indexChooseImage: state.indexChooseImage - 1
      }
    case Action.CHOOSE_IMAGE:
      return {
        ...state,
        indexChooseImage: action.payload
      }
  }
}
