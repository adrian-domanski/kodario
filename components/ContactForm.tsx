import React from "react";
import { Paragraph } from "../styles/components/Paragraph";
import Section from "../styles/components/Section";
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

const ContactForm = () => {
  return (
    <Section>
      <Title>Masz pomysł na projekt?</Title>
      <Paragraph isCentered blueColor>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nobis nihil
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
    </Section>
  );
};

export default ContactForm;
