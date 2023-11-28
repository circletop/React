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
  const onclick3 = ()=> {
    // dispatch({type: 'add3', val: 10})
    dispatch((dispatch: Function)=> {
      setTimeout(()=> {
        dispatch({type: 'add2', val: 10})
      },1000)
    })
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
    <Button type="primary" htmlType="submit"  onClick={onclick3} style={{width: '100%'}}>
      异步提交
    </Button> 
  </>
}
export default View