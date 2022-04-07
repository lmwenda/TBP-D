import React from "react";
import { ReactTypes } from "../../SourceTypes";
import { Header } from "../../components/Header/Header";

import image from "../../assets/desserts.jpg";
import './RegisterPage.css';
import { Link } from "react-router-dom";

export const RegisterPage: React.FC<any> = (): JSX.Element => {

    const mql = window.matchMedia("(max-width: 600px)");
    let phoneView = mql.matches;

    const [ email, setEmail ] = React.useState<string>("");
    const [ username, setUsername ] = React.useState<string>("");
    const [ password, setPassword ] = React.useState<string>(""); 

    const registerUser = async(event: ReactTypes.RFE) => {
        event.preventDefault();


    }

    return(
        <div className="registerPage">
            <header>
                <Header />
            </header>

            <div className="registerPage___container">

                {
                    phoneView ? <div></div> :  <div className="registerPage___container___image">
                        <img id="img" src={image} alt="" />
                    </div>
                }

                <div className="registerPage___container___form">

                    <div className="header">
                        <h1>Get your fresh meal ready in minutes...</h1>
                    </div>
                    
                    <form>
                        <input type="text" placeholder="Email:" 
                            onChange={(e: ReactTypes.RCE) => setEmail(e.target.value)} />

                        <input type="text" placeholder="Username:" 
                            onChange={(e: ReactTypes.RCE) => setUsername(e.target.value)}/>

                        <textarea placeholder="Password:" 
                            onChange={(e: ReactTypes.TextArea_RCE) => setPassword(e.target.value)}/>

                        <button onClick={registerUser}>Register</button>
                        <Link id="redirection" to="/login">Already have an Account? Login now!</Link>

                    </form>
                </div>
        
            </div>
        </div>
    );
}