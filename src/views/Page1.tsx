import {useSelector, useDispatch} from "react-redux"
import { Button } from "antd"
const View = ()=> {
  const {a} = useSelector((state: RootState)=> ({a: state.NumReducer.a}))
  const { list } = useSelector((state:RootState)=>({list: state.ArrReducer.list}))
  const dispatch = useDispatch()
  const onclick = ()=> {
    dispatch({type: 'add'})
    dispatch({type: 'push'})
  }
  const onclick2 = ()=> {
    dispatch({type: 'add2', val: 10})
  }
  return <>
    <div>Page1 reducer-参数{a}</div>
    <div>Page1 reducer-参数{list}</div>
    {
      list.map((item: number| string, index: number)=> {
        return <div>{item}-{index}</div>
      })
    }
    <Button type="primary" htmlType="submit"  onClick={onclick} style={{width: '100%'}}>
      Submit
    </Button> 
    <Button type="primary" htmlType="submit"  onClick={onclick2} style={{width: '100%'}}>
      add 10
    </Button> 
  </>
}
export default View