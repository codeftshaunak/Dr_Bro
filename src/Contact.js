import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 0.5rem 0;
    text-align: center;
    background-color: aliceblue;
    .contact-heading {
      font-size: 28px;
      padding-top: 10px;
      font-weight: bold;
      color: coral;
    }
    .contact-heading-title {
      font-size: 12px;
    }
    .container {
      padding-top: 40px;
      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
    @media only screen and (max-width: 768px) {
      .contact {
        display: flex;
        flex-wrap: wrap;

        .contact-form {
          width: 90%;
        }

        iframe {
          width: 90%;
          margin: auto;
        }
      }
    }
  `;

  return (
    <Wrapper>
      <p className="contact-heading">
        A creator-friendly customer support team <br /> that's always just a
        click away
      </p>
      <span className="contact-heading-title">
        Our average response time is under 5 minutes.
      </span>
      <br />
      <div className="container contact grid grid-two-column">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="contact-form">
          <form
            action="https://formspree.io/f/mgeqndlb"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
