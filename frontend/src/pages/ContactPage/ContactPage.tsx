import React from "react";
import { ReactTypes } from "../../SourceTypes";
import { Header } from "../../components/Header/Header";

import image from "../../assets/desserts.jpg";
import './ContactPage.css';

export const ContactPage: React.FC<any> = (): JSX.Element => {

    const mql = window.matchMedia("(max-width: 600px)");
    let phoneView = mql.matches;

    const [ email, setEmail ] = React.useState<string>("");
    const [ subject, setSubject ] = React.useState<string>("");
    const [ message, setMessage ] = React.useState<string>(""); 

    const sendMessage = () => {

    }

    return(
        <div className="contactPage">
            <header>
                <Header />
            </header>

            <div className="contactPage___container">

                {
                    phoneView ? <div></div> :  <div className="contactPage___container___image">
                        <img id="img" src={image} alt="" />
                    </div>
                }

                <div className="contactPage___container___form">
                    <h1>Contact us</h1>
                    <form>
                        <input type="text" placeholder="Email:" 
                            onChange={(e: ReactTypes.RCE) => setEmail(e.target.value)} />

                        <input type="text" placeholder="Subject:" 
                            onChange={(e: ReactTypes.RCE) => setSubject(e.target.value)}/>

                        <textarea placeholder="Message:" 
                            onChange={(e: ReactTypes.TextArea_RCE) => setMessage(e.target.value)}/>

                        <button onClick={sendMessage}>Send</button>
                    </form>
                </div>
        
            </div>
        </div>
    );
}