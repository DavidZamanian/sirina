import { FormEvent, useMemo, useState } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import ObfuscatedEmail from "@/components/ObfuscatedEmail/ObfuscatedEmail";
import { getMailtoPrefix, getSupportEmail } from "@/utils/email";

export default function Contact() {
  const supportEmail = useMemo(() => getSupportEmail(), []);
  const mailtoPrefix = useMemo(() => getMailtoPrefix(), []);
  const [subject, setSubject] = useState("General Support Request");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const params = new URLSearchParams({
      subject,
      body: message,
    });
    return `${mailtoPrefix}${supportEmail}?${params.toString()}`;
  }, [mailtoPrefix, message, subject, supportEmail]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <PageTemplate
      className="contactPage"
      eyebrow="Support"
      title="Contact Sirina Chat"
      subtitle="Reach us for product help, legal requests, or partnership discussions."
    >

      <div className="contactGrid">
        <article className="contactCard">
          <h2>Email</h2>
          <p>General support: <ObfuscatedEmail /></p>
          <p>
            Legal: <ObfuscatedEmail />
          </p>
          <p>
            Privacy: <ObfuscatedEmail />
          </p>
        </article>

        <article className="contactCard">
          <h2>Business Hours</h2>
          <p>Monday-Friday</p>
          <p>9:00 AM to 6:00 PM Pacific Time</p>
          <p>Average response time: 1 business day</p>
        </article>
      </div>

      <form className="contactForm" onSubmit={handleSubmit}>
        <h2>Send a message</h2>
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us how we can help."
          required
        />

        <button type="submit" className="button buttonPrimary">
          Open Email Draft
        </button>
      </form>
    </PageTemplate>
  );
}
