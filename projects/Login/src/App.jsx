import { useState } from 'react'

import './App.css'
function App() {
  const [showPassWrd, setShowPassWrd] = useState(false)

  return (
    <>

      <section className="img animate__animated animate__fadeIn" >
        <section>
          <div className="container">
            <div className="valor">
              <form action="">
                <h2>Sign in</h2>
                <div className="inputBox">
                  <ion-icon name="mail-outline"></ion-icon>
                  <input type="" name="" id="" required />
                  <label >Email</label>
                </div>
                <div className="inputBox">
                  <div onClick={() => setShowPassWrd(!showPassWrd)}>
                    {showPassWrd ?
                      <svg className="Open-Closed--Eye" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 11.4872 7.07719 10.9925 7.22057 10.5268C7.61175 11.3954 8.48527 12 9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.48527 11.3954 7.61175 10.5269 7.21995C10.9925 7.07719 11.4872 7 12 7Z"></path></svg>
                      : <svg className="Open-Closed--Eye" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z">
                        </path></svg>}
                  </div>
                  <input type={showPassWrd ? "text" : "password"} name="" id="log" required />
                  <label>Password</label>
                </div>

                <div className="Forget">
                  <label className='register--label'>
                    <input type="checkbox" />Remember Me &nbsp;</label>
                </div>
                <a href="" target="_blank">
                  <button>Log in</button>
                </a>
                <div className="Register">
                  <span>Don't Have an account? <a href="https://bethesda.net/es/game/starfield" target="_blank">Register</a></span>
                </div>

                <div className='Forget'>
                  <label className='register--label'>
                    <a href="https://www.youtube.com/shorts/8_yeKAp78_8" target="_blank"><i>forget Password</i></a>
                  </label>
                </div>
              </form>

            </div>
          </div>
        </section>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </section>

      <footer className='animate__animated animate__fadeIn'>
        <i>Realizado por Álvaro Olmos Sierra 2ºDAW</i>
      </footer>
    </>
  )
}

export default App
