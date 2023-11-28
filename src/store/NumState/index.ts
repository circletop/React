export interface actionsName {
  [key: string]: string
}

export interface actions {
  [key: string]: (x: object, y: object)=> void
}
const numState = {
  state: {
    a: 0
  },
  actions: {
    add(state:{a: number}){
      state.a ++
    },
    add2(state: {a: number}, actions: {type: string, val: number}) {
      state.a += actions.val
    }
  },
  asyncAction: {
    asyncAdd(val: number) {
      return (dispatch: Function)=> {
        setTimeout(() => {
          dispatch({type: 'add2', val})
        }, 1000);
      }
      }
  },
  actionNames: {}
}
const actionNames = {}
for (const key in numState.actions) {
  (actionNames as actionsName)[key] = key
}
numState.actionNames = actionNames

export default numState