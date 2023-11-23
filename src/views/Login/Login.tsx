import style from './login.module.scss'
import LoginLeft from "@/assets/images/login_left.png"
import ReactLogo from "@/assets/react.svg"
import LoginForm from './LoginForm'

const Login = () => (<div className={`${style.loginContainer} flx-center`}>
  <div className={style.loginBox}>
    <div className={style.loginLeft}>
    <img className={style.loginLeftImg} src={LoginLeft} alt="login" />
    </div>
    <div className={style.loginForm}>
        <div className={style.loginLogo}>
          <img className={style.loginIcon} src={ReactLogo} alt="" />
          <h2 className={style.logoText}>Geekier-Admin</h2>
        </div>
        <LoginForm />
      </div>
  </div>
  <div>

  </div>
</div>)

export default Login