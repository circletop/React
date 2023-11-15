// 模块引用解决让样式私有化
import  styles from "./comp1.module.scss"
function Comp1() {
  return <div className={styles.box}>
    <p>这是comp1</p>
  </div>

}

export default Comp1