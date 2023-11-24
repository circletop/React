import {useSelector, useDispatch} from "react-redux"
import { Button } from "antd"
const View = ()=> {
  const {a} = useSelector((state: RootState)=> ({a: state.a}))

  const dispatch = useDispatch()
  const onclick = ()=> {
    dispatch({type: 'add'})
  }
  return <>
    <div>Page1 {a}</div>
    <Button type="primary" htmlType="submit"  onClick={onclick} style={{width: '100%'}}>
      Submit
    </Button> 
  </>
}
export default View