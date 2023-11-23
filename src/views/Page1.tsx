import {useSelector} from "react-redux"
const View = ()=> {
  const {a} = useSelector((state)=> ({a: state.a}))
  return <>
  <div>Page1 {a}</div>
  </>
}
export default View