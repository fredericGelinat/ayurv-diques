import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Discutons de vos envies!</h3>
        <div className="content">
          <p>
            Passionnée de peinture depuis mon enfance, l’idée d’un nouveau
            langage me réjouit. A travers mes «Peintures à l’électricité» vous
            découvrirez mon univers poétique où l’énergie des couleurs rayonne.
          </p>
          {/* <form
            className="contact-form"
            action="https://formspree.io/f/xgedqqlr"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="Entrez votre email"
              name="_replyto"
            />
            <button type="submit" className="submit-btn">
              Valider
            </button>
          </form> */}
          <div className="contact">
            <form name="contact" method="post" className="contact_form"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact" />
                <label for="name">Nom:</label>
                <input type="text" name="name" />
              
            
                <label for="email">
                  Email: </label><input type="email" name="email" />
                
              
            
                <label for="message">
                  Message:  </label><textarea name="message"></textarea>
               
              
            
                <button type="submit">Envoyez-moi votre message</button>
              
            </form>
          </div>
          ,
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .contact {
    max-width: 500px;
    margin: 0 auto;
  }
  .contact_form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .contact_form input,
  .contact_form textarea,
  .contact_form button {
    margin: 0.3rem 0 1rem 0;
    padding: 0.3rem;
  }
  .contact_form button {
    font-size: 1.2rem;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
