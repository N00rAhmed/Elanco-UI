import NavBar from "../navbar/page";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import "./register.css";

export default function Register() {
  return (
    <main>
      <div>
        <NavBar/>
      </div>
      <form>
        <div className="signup-container">
          <h1>Welcome back!</h1>
          <br/>
          <h3>To keep connected with us please login with your personal info</h3>
          <h3>We appreciate your trust from Elanco</h3>
          <br/>
          <div>
            <Button style={{width:"15%"}}>Login</Button>
          </div>
        </div>
      </form>
      <form>
        <div className="signup-form">
          <div className="signup-container2">
            <h1>Create account</h1>
            <h2>______________________________________</h2>
            <br/>
            <div className="input-container">
              <Input style={{width: "50%"}} placeholder="First name"/>
            </div>
            <br/>
            <br/>
            <div className="input-container">
              <Input style={{width: "50%"}} placeholder="Last name"/>
            </div>
            <br/>
            <br/>
            <div className="input-container">
              <Input style={{width: "50%"}} type="password" placeholder="Password"/>
            </div>
            <br/>
            <br/>
            <div className="input-container">
              <Input style={{width: "50%"}} type="password" placeholder="Password confirm"/>
            </div>
            <br/>
            <br/>
            <div className="input-container">
              <Input style={{width: "50%"}} placeholder="Your phone number (optional)"/>
            </div>
            <br/>
            <br/>
            <div id="button">
              <Button style={{width: "15%"}}>Sign up</Button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}