import React, { useRef} from 'react';
import "./Login.css";

const Modal = props => {
    const usernameRef = useRef()
    const passwordRef = useRef()
   
   const modalConfirmHandler = () => {
          const username = usernameRef.current.value;
          const password = passwordRef.current.value;
          console.log(username, password)
          if(username === "cypher" && password === "1234"){
            window.location = "/dashboard";
          }else if(username==="admin" && password === "1234"){
            window.location = "/dashboard";
          }else {
              alert("wrong information")
          }
    }

     

   
        return (
            <div className="modal">
                <header className="modal_header"><h1>Login now</h1></header>
                {/* <form> */}
                <section className="modal_content">
               
                <div className="form-control">
                    <label htmlFor="username">username:</label>
                    <input type="text" id="username" name="username" className="name_input" ref={usernameRef}/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">password:</label>
                    <input type="password" id="password" name="password" className="email_input" ref={passwordRef}/>
                </div>
                </section>
                <section className="modal_action">
                    <button className="btn book" onClick={modalConfirmHandler} >Login</button>
                </section>
                {/* </form> */}
            </div>
            )
  
}

export default Modal;