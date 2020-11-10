import React from "react";
import { Paragraph } from "../styles/components/Paragraph";
import Title from "../styles/components/Title";
import styled from "styled-components";
import Button from "../styles/components/Button";

const Form = styled.form`
  margin-top: 2rem;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 1rem;
  }

  label {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    padding: 0.9rem 1rem;
    border-radius: 50px;
    border: none;
    outline: none;
    background: #e5ebef;
    color: ${({ theme }) => theme.colors.darkBlue};

    :focus,
    :active {
      background: #dee5eb;
    }
  }

  textarea {
    height: 300px;
    border-radius: 25px;
    resize: none;
  }
`;

const ContactFormWrapper = styled.div`
  @media screen and (min-width: 998px) {
    width: 60%;

    ${Paragraph} {
      text-align: left;
      margin-bottom: 3rem;
    }
  }
`;

const ContactInformation = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 998px) {
    margin-top: 0;
  }

  ${Button} {
    margin: 0 auto;

    @media screen and (min-width: 998px) {
      margin-left: 0;
    }
  }
`;

const ContactList = styled.ul`
  margin: 3rem 0 2rem;
  text-align: center;

  @media screen and (min-width: 998px) {
    text-align: left;
  }
`;

const ContactListItem = styled.li`
  color: ${({ theme }) => theme.colors.darkerBlue};

  :not(:last-child) {
    margin-bottom: 1rem;
  }

  i {
    color: ${({ theme }) => theme.colors.darkerBlue};
  }
`;

const StyledImage = styled.img`
  display: none;

  @media screen and (min-width: 998px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    position: relative;
    left: 8%;
  }
`;

const PageWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;

  @media screen and (min-width: 998px) {
    display: flex;
    max-width: 1100px;
    justify-content: space-between;

    ${Title} {
      margin-left: 0;
    }
  }
`;

interface IProps {
  contactInformation?: boolean;
  showImage?: boolean;
}

const ContactForm: React.FC<IProps> = ({ contactInformation, showImage }) => {
  return (
    <PageWrapper>
      <ContactFormWrapper>
        <Title>Masz pomysł na projekt?</Title>
        <Paragraph isCentered blueColor>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nobis
          nihil
        </Paragraph>
        <Form>
          <FormControl>
            <label htmlFor="name">Twoje imie:</label>
            <input type="text" name="name" id="name" />
          </FormControl>
          <FormControl>
            <label htmlFor="email">Twój adres email:</label>
            <input type="email" name="email" id="email" />
          </FormControl>
          <FormControl>
            <label htmlFor="message">Treść wiadomości:</label>
            <textarea name="message" id="message" />
          </FormControl>
          <Button>Wyślij</Button>
        </Form>
      </ContactFormWrapper>

      {contactInformation && (
        <ContactInformation>
          <Title>Dane kontaktowe</Title>
          <ContactList>
            <ContactListItem>
              <i className="fas fa-map-marker-alt" /> Mosina, Śrem, Poznań
            </ContactListItem>
            <ContactListItem>
              <i className="fas fa-envelope" /> adrian.domanski.dev@gmail.com
            </ContactListItem>
            <ContactListItem>
              <i className="fas fa-mobile-alt" /> 667 458 654
            </ContactListItem>
          </ContactList>
          <Button>Napisz na Facebooku</Button>
        </ContactInformation>
      )}

      {showImage && (
        <StyledImage
          src="/img/contact.svg"
          alt="Czat grupowy, komunikacja, formularz kontaktowy"
        />
      )}
    </PageWrapper>
  );
};

export default ContactForm;
