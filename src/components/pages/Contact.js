import React, { useState } from 'react';
import './Contact.scss';
import Axios from 'axios';

const Contact = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
    const [emailSent, setemailSent] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, email, message)
        

        Axios.post('https://swaraj-portfolio.herokuapp.com/contact', {name, email, message}).then(res => {
            if (res.data.success) {
                setemailSent(true)
            } else {
                setemailSent(false) 
            }
        }).catch(err => {
            setemailSent(false)
        })
    }
    
    

    return (
        <div>
            <div className="contact-container">
                <form id="contact" onSubmit={handleSubmit}>
                    <h3>Quick Contact</h3>
                    <h4>Contact me today, and get reply with in 24 hours!</h4>
                    <fieldset>
                        <input placeholder="Your name" type="text" value={name} tabIndex="1" onChange={(e) => {setname(e.target.value)}} required />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Email Address" type="email" value={email} onChange={(e) => {setemail(e.target.value)}} tabIndex="2" required />
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Type your Message Here...." value={message} onChange={(e) => {setmessage(e.target.value)}} tabIndex="3" required></textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                        {emailSent === true && <h4>Email Sent</h4>}
                        {emailSent === false && <h4>Email Not Sent</h4>}
                    </fieldset>

                    
                </form>


            </div>
        </div>
    )
}

export default Contact
