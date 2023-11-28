import handleNum from "./index"
import { actionsName, actions } from "./index" 
const nameInitialState = {
  ...handleNum.state
}

const reducer = (state = nameInitialState, action:{type: string, val: number}) => {  
  const newState = JSON.parse(JSON.stringify(state))
  let item: string
  for ( item in handleNum.actionNames) {
    if(action.type === (handleNum.actionNames as actionsName)[item]) {
      (handleNum.actions as actions)[(handleNum.actionNames as actionsName)[item]](newState, action)
      break
    }
  }
  return newState
}

export default reducer