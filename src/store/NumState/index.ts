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
  actionNames: {}
}
const actionNames = {}
for (const key in numState.actions) {
  (actionNames as actionsName)[key] = key
}
numState.actionNames = actionNames

export default numState