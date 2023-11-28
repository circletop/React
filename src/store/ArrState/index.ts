export interface actionsName {
  [key: string]: string
}

export interface actions {
  [key: string]: (x: object, y: object)=> void
}
const store = {
  state: {
    list: []
  },
  actions: {
    push(state:{list: number[]}){
      state.list.push(1)
    },
  },
  actionNames: {}
}
const actionNames = {}
for (const key in store.actions) {
  (actionNames as actionsName)[key] = key
}
store.actionNames = actionNames

export default store