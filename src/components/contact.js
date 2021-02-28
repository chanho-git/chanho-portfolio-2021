import React from "react";

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className='contact-body'>
                        <h2>Get in touch</h2>
                        <a href='mailto:chanhop@student.unimelb.edu.au' target='_blank' rel='noreferrer'>Email</a><td/>
                        <a href='https://www.linkedin.com/in/chanho-park/' target='_blank' rel='noreferrer'>LinkedIn</a>
                    </div>
                    <p>This website is built with <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>React</a> and hosted on <a href='https://www.netlify.com/' target='_blank' rel='noreferrer'>Netlify</a>
                        <span role="img" aria-label="Victory Hand">✌️</span></p>
                </div>
            </div>
        </section>
    )
}

export default Contact;
