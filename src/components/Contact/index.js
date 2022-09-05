import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [formState, setFormState ] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isvalid conditional statement
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
    };


  return (
    <section className="container">
      <h1 className="d-flex justify-content-center">Contact me</h1>
      <div className="d-flex justify-content-center m-3">
        <p className="m-3">Fill out the form below or send me an email at {" "}
          <a
              className="contact-link"
              href="mailto: chrisdhodges12@gmail.com" target='_blank' rel="noreferrer" >
             chrisdhodges12@gmail.com {" "}
          </a>
        </p>
      </div>
      <form className="card m-auto col-md-6 col-sm-9 d-flex " onSubmit={handleSubmit}>
        <div className="card-body d-flex justify-content-end">
          <label className="m-auto" htmlFor="name">Name:</label>
          <br></br>
          <input className="m-2" type="text" name="Name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="card-body d-flex justify-content-end">
          <label className="m-auto" htmlFor="email">Email address:</label>
          <br></br>
          <input className="m-2" type="email" name="Email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="card-body d-flex justify-content-end">
          <label className="m-auto" htmlFor="message">Message: </label>
          <br></br>
          <textarea className="m-2" type="text" name="Message" rows="3" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
            <div>
                <p className="error-text m-3 text-warning d-flex justify-content-center">{errorMessage}</p>
            </div>
        )}
        <button className=" card-body submit-btn" type="submit">Submit</button>
      </form>
      <div className="d-flex justify-content-center m-3">
        <p className="m-5">
            You can also find me on GitHub at {" "}
            <a
                className="contact-link"
                href="https://github.com/chrisdhodges12" 
                target="_blank" rel="noreferrer">
                chrisdhodges12
            </a>
          </p>
      </div>
    </section>
  );
}
export default Contact;
