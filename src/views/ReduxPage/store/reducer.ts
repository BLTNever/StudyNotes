import { DEMO_LIST } from '@redux/store/actionType'
const initialState = {
  list: []
}

export default (state = initialState, action: { type: any; data: { list: Array<any> } }) => {
  switch (action.type) {
    case DEMO_LIST:
        return {
          ...state,
          list:action.data.list
        }
    default:
      return state
  }
}
