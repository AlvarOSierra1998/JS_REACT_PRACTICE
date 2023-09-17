
import './App.css'
function App() {

  return (
    <>
      <section className="img"></section>
      <section>
        <div className="container">
          <div className="valor">
            <form action="">
              <h2>Login</h2>
              <div className="inputBox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="" name="" id="" required />
                <label >Email</label>
              </div>
              <div className="inputBox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" name="" id="" required />
                <label>Password</label>
              </div>

              <div className="Forget">
                <label ><input type="checkbox" />Remember Me
                  <a href="https://www.w3schools.com/tags/att_a_target.asp" target="_blank">Forget Password</a>
                </label>
              </div>
              <a href="" target="_blank">
              <button>Login</button>
              </a>
              <div className="Register">
                <span>I case you don't Have a account <a href="https://bethesda.net/es/game/starfield" target="_blank">Register</a></span>
              </div>
            </form>
          </div>
        </div>
      </section>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </>
  )
}

export default App
