
import { createContext } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Success from "./Success"




export default function Home() {
  const Context = createContext()

  const [state, handleSubmit] = useForm("xeqwdgad");
  if (state.succeeded) {
      return <Success/>;
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"30px" }}>
    <div className="🤚">
      <div className="👉"></div>
      <div className="👉"></div>
      <div className="👉"></div>
      <div className="👉"></div>
      <div className="🌴"></div>
      <div className="👍"></div>
    </div>
    <div className="login-box">
    <form onSubmit={handleSubmit}>
      <div className="user-box">
        <input type="text" name="fullName"  required/>
        <label>Full Name </label>
      </div>
      <ValidationError
      prefix="fullName"
      field="fullName"
      errors={state.errors}
      />
      <div className="user-box">
        <input type="text" name="surname"  />
        <label>Surname</label>
      </div>
      <ValidationError
      prefix="surname"
      field="surname"
      errors={state.errors}
      />
      <div className="user-box">
        <input type="email" name="email" />
        <label>Email</label>
      </div>
      <ValidationError
      prefix="email"
      field="email"
      errors={state.errors}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="sumbit">
        <a type="submit">
        <center>
          Join community
          <span></span>
          </center>
        </a>
        </button>
      </div>
      </form>
    </div>
  </div>

  )
}
