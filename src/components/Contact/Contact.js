import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const contactForm = useRef();

  const [response, setResponse] = React.useState(null);

  const sendEmail = async (data) => {
    console.log('data', data);
    try {
      const response = await emailjs.sendForm(
        'service_oqd5rpd',
        'contact_form',
        data,
        'DPg0uaakoZmnA4kzd',
      );
      setResponse(
        'Your message has been sent, we will get back to you within 48 hours.',
      );
      document.getElementById('contact-modal').showModal();
      console.log('Email sent', response.text);
    } catch (err) {
      setResponse('Something went wrong, please try again.');
      console.log('Email failed to send', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(contactForm.current);
    e.target.reset();
  };

  const handleCloseModal = () => {
    setResponse(null); // Set response to null
    document.getElementById('contact-modal').close(); // Close the modal
  };

  return (
    <div className="contact">
      <h1 className="contact__title text-4xl font-bold text-center text-primary">
        Contact Us
      </h1>
      <form
        ref={contactForm}
        onSubmit={handleSubmit}
        className="p-4 space-y-4 bg-accent m-10"
      >
        <label
          htmlFor="from_name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />

        <label
          htmlFor="reply_to"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="reply_to"
          name="reply_to"
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />

        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />

        <button
          type="submit"
          className="px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
        >
          Send
        </button>
      </form>
      <dialog id="contact-modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Success!</h3>
          <p className="py-4">{response}</p>
          {/* Close button */}
          <button
            className="px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
}
export default Contact;
