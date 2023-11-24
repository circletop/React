const nameInitialState = {
  a: 1
}
const reducer = (state = nameInitialState, action:{type: string}) => {
  console.log(action);
  
  switch (action.type) {
    case 'add':
      return state
    // case ACTION_TYPE_2:
    //   return state
    default:
      return state
  }

}

export default reducer