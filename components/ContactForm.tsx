import React, { useState } from 'react';
import { Paragraph } from '../styles/components/Paragraph';
import Title from '../styles/components/Title';
import styled from 'styled-components';
import Button from '../styles/components/Button';
import ContactChatSVG from './svg-animations/ContactChatSVG';

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
    padding: 0.9rem 1.5rem;
    border-radius: 50px;
    border: none;
    background: #e5ebef;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 1.1rem;
    transition: background-color 0.15s ease-in;

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

  a.footer-link {
    color: ${({ theme }) => theme.colors.darkerBlue};
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }

  :not(:last-child) {
    margin-bottom: 1rem;
  }

  i {
    color: ${({ theme }) => theme.colors.darkerBlue};
    padding-right: 8px;
  }
`;

const ContactChatSVGWrapper = styled.div`
  display: none;

  @media screen and (min-width: 998px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    position: relative;
    left: 8%;
  }

  svg {
    width: 100%;
    height: 100%;
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

const StyledFormMessage = styled.div<{ status: string }>`
  background-color: ${(props) =>
    props.status === 'SUCCESS' ? '#239c8f' : 'red'};
  color: ${({ theme }) => theme.colors.lightWhite};
  padding: 1rem;
  display: ${(props) => (props.status === 'NOT SENT' ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  border-radius: 5px;

  button {
    border: 0;
    background: transparent;
    color: #fff;
    font-size: 1.4rem;
    transition: transform 0.1s ease-in;
    transform-origin: center;
    cursor: pointer;

    :focus,
    :active {
      border: none;
    }

    :active,
    :focus,
    :hover {
      transform: scale(1.1);
    }
  }
`;

interface IProps {
  contactInformation?: boolean;
  showImage?: boolean;
}

const ContactForm: React.FC<IProps> = ({ contactInformation, showImage }) => {
  const [status, setStatus] = useState<
    'SUCCESS' | 'FAILURE' | 'NOT FILLED' | 'NOT SENT'
  >('NOT SENT');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formState;

    if (!name || !email || !message) {
      return setStatus('NOT FILLED');
    }

    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setStatus('SUCCESS');
        setFormState({
          email: '',
          name: '',
          message: '',
        });
      } else {
        setStatus('FAILURE');
      }
    };
    xhr.send(data);
  };

  const handleCloseMessage = () => setStatus('NOT SENT');

  return (
    <PageWrapper>
      <ContactFormWrapper id='contact-form'>
        <Title>Get in touch</Title>
        <StyledFormMessage status={status}>
          {status === 'FAILURE' ? (
            <span>
              There was an unexpected error - please send your message to
              contact@kodario.com
            </span>
          ) : (
            ''
          )}
          {status === 'SUCCESS' ? (
            <span>
              Your message was sent successfully! We'll get back to you shortly!
            </span>
          ) : (
            ''
          )}
          {status === 'NOT FILLED' ? <span>Please fill all fields!</span> : ''}
          {status !== 'NOT SENT' ? (
            <button onClick={handleCloseMessage}>
              <i className='fas fa-times'></i>
            </button>
          ) : (
            ''
          )}
        </StyledFormMessage>
        <Form
          onSubmit={handleSubmit}
          action='https://formspree.io/f/mvovqere'
          method='POST'
        >
          <FormControl>
            <label htmlFor='name'>Name:</label>
            <input
              onChange={handleChange}
              type='text'
              value={formState.name}
              name='name'
              id='name'
            />
          </FormControl>
          <FormControl>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              onChange={handleChange}
              name='email'
              value={formState.email}
              id='email'
            />
          </FormControl>
          <FormControl>
            <label htmlFor='message'>Message:</label>
            <textarea
              name='message'
              onChange={handleChange}
              value={formState.message}
              id='message'
            />
          </FormControl>
          <Button type='submit'>Send</Button>
        </Form>
      </ContactFormWrapper>

      {contactInformation && (
        <ContactInformation>
          <Title>Contact details</Title>
          <ContactList>
            <ContactListItem>
              <i className='fas fa-map-marker-alt' />
              Poznań, Poland
            </ContactListItem>
            <ContactListItem>
              <i className='fas fa-envelope' />
              <a
                href='mailto:contact@kodario.com'
                target='_blank'
                rel='noopener'
                className='footer-link'
              >
                contact@kodario.com
              </a>
            </ContactListItem>
            <ContactListItem>
              <i className='fab fa-linkedin' aria-hidden='true'></i>
              <a
                href='https://www.linkedin.com/in/adrian-domanski-dev'
                target='_blank'
                aria-label='Linkedin'
                className='footer-link'
                rel='noopener'
              >
                adrian-domanski-dev
              </a>
            </ContactListItem>
            <ContactListItem>
              <i className='fab fa-github' aria-hidden='true'></i>
              <a
                href='https://github.com/adrian-domanski'
                target='_blank'
                className='footer-link'
                rel='noopener'
                aria-label='GitHub'
              >
                adrian-domanski
              </a>
            </ContactListItem>
          </ContactList>
        </ContactInformation>
      )}

      {showImage && (
        <ContactChatSVGWrapper>
          <ContactChatSVG />
        </ContactChatSVGWrapper>
      )}
    </PageWrapper>
  );
};

export default ContactForm;
