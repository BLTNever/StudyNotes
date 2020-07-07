import req from '@utils/req'
// import { connect, useSelector, useDispatch } from 'react-redux'

// import { DEMO_LIST } from '@store/actionType' 

// export function setList(list) {
//   return { type: DEMO_LIST, list: list }   
// }


export const getList = (url:string, params: any) => {
  const res: any = req(url, params)
  return res
}