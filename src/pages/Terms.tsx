import PageTemplate from "@/components/PageTemplate/PageTemplate";
import ObfuscatedEmail from "@/components/ObfuscatedEmail/ObfuscatedEmail";

export default function Terms() {
  return (
    <PageTemplate
      as="article"
      className="legalPage"
      eyebrow="Legal"
      title="Terms of Use for Sirina Chat"
      subtitle="Last updated: February 24, 2026"
    >

      <section className="legalSection">
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your access to and use
          of Sirina Chat (the &quot;App&quot;, &quot;Service&quot;,
          &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By downloading,
          installing, or using Sirina Chat, you agree to these Terms and our
          Privacy Policy. If you do not agree, do not use the Service.
        </p>
      </section>

      <section className="legalSection">
        <h2>1. Eligibility</h2>
        <p>
          You must comply with applicable laws when using the Service. If you
          are under the age of majority in your jurisdiction, you may use the
          Service only with permission from a parent or legal guardian.
        </p>
      </section>

      <section className="legalSection">
        <h2>2. Service Description</h2>
        <p>Sirina Chat is an AI chat app for iOS that includes:</p>
        <ul>
          <li>AI text generation features,</li>
          <li>
            optional AI image generation features on supported devices/OS
            versions,
          </li>
          <li>optional file attachment processing,</li>
          <li>local data storage with optional iCloud sync.</li>
        </ul>
        <p>
          Feature availability may vary by device model, OS version, region,
          language, and Apple account/device settings.
        </p>
      </section>

      <section className="legalSection">
        <h2>3. Apple Platform Terms</h2>
        <p>
          Your use of the Service is also subject to applicable Apple terms,
          including App Store terms and Apple platform policies. Apple is not
          responsible for providing support or maintenance for Sirina Chat
          except as required by law.
        </p>
      </section>

      <section className="legalSection">
        <h2>4. AI Outputs and Accuracy</h2>
        <p>
          AI-generated responses and images may be inaccurate, incomplete, or
          inappropriate for your use case. You are responsible for evaluating
          outputs before relying on them.
        </p>
        <p>
          Do not use the Service as a substitute for professional advice (for
          example medical, legal, financial, or safety-critical advice).
        </p>
      </section>

      <section className="legalSection">
        <h2>5. Your Content</h2>
        <p>
          You are responsible for the prompts, attachments, and other content
          you submit (&quot;User Content&quot;).
        </p>
        <p>
          You represent that you have the necessary rights to use any User
          Content you submit and that your User Content does not violate law or
          third-party rights.
        </p>
        <p>
          You keep ownership of your User Content. You grant us a limited right
          to process it only as needed to operate the Service features you
          request.
        </p>
      </section>

      <section className="legalSection">
        <h2>6. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            use the Service for unlawful, harmful, fraudulent, or abusive
            activities,
          </li>
          <li>attempt to reverse engineer, disrupt, or compromise the Service,</li>
          <li>
            infringe intellectual property, privacy, or other rights of others,
          </li>
          <li>
            use the Service in ways that violate applicable Apple policies.
          </li>
        </ul>
        <p>
          We may limit or block use of the Service if required for security,
          legal, or policy reasons.
        </p>
      </section>

      <section className="legalSection">
        <h2>7. Privacy and Data Handling</h2>
        <p>Our handling of data is described in the Privacy Policy.</p>
        <p>In short:</p>
        <ul>
          <li>the app is designed as local-first,</li>
          <li>data can be synced with iCloud if you enable that option,</li>
          <li>
            Apple-provided frameworks and services may process data under
            Apple&apos;s policies.
          </li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>8. Third-Party Services</h2>
        <p>
          Sirina Chat relies on Apple technologies (including Apple
          Intelligence/Foundation Models, Image Playground, Speech Recognition,
          and CloudKit where applicable). Availability and behavior of these
          components are outside our direct control.
        </p>
        <p>
          We are not responsible for outages, restrictions, account
          limitations, or policy decisions made by Apple or other third-party
          platform providers.
        </p>
      </section>

      <section className="legalSection">
        <h2>9. Changes to the Service</h2>
        <p>
          We may modify, suspend, or discontinue features at any time, with or
          without notice, to improve the Service, maintain security, or comply
          with legal/platform requirements.
        </p>
      </section>

      <section className="legalSection">
        <h2>10. Disclaimer of Warranties</h2>
        <p>
          To the fullest extent permitted by law, the Service is provided
          &quot;as is&quot; and &quot;as available&quot;, without warranties of
          any kind, express or implied, including warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </section>

      <section className="legalSection">
        <h2>11. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, we are not liable for
          indirect, incidental, special, consequential, exemplary, or punitive
          damages, or for loss of data, profits, goodwill, or business
          interruption arising from or related to your use of the Service.
        </p>
        <p>
          Where liability cannot be excluded, our liability is limited to the
          minimum extent permitted by applicable law.
        </p>
      </section>

      <section className="legalSection">
        <h2>12. Termination</h2>
        <p>You may stop using the Service at any time.</p>
        <p>
          We may suspend or terminate access to the Service if you violate
          these Terms or if needed for security, legal, or platform compliance
          reasons.
        </p>
      </section>

      <section className="legalSection">
        <h2>13. Governing Law</h2>
        <p>
          These Terms are governed by the laws of Sweden, excluding
          conflict-of-laws rules, unless mandatory law in your jurisdiction
          requires otherwise.
        </p>
      </section>

      <section className="legalSection">
        <h2>14. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          Service after updates take effect means you accept the updated Terms.
        </p>
      </section>

      <section className="legalSection">
        <h2>15. Contact</h2>
        <p>
          If you have questions about these Terms, contact us at{" "}
          <ObfuscatedEmail />.
        </p>
      </section>
    </PageTemplate>
  );
}
