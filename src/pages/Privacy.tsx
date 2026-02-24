import PageTemplate from "@/components/PageTemplate/PageTemplate";
import ObfuscatedEmail from "@/components/ObfuscatedEmail/ObfuscatedEmail";

export default function Privacy() {
  return (
    <PageTemplate
      as="article"
      className="legalPage"
      eyebrow="Legal"
      title="Privacy Policy for Sirina Chat"
      subtitle="Last updated: February 24, 2026"
    >

      <section className="legalSection">
        <h2>1. Summary</h2>
        <ul>
          <li>Sirina Chat is designed to be local-first.</li>
          <li>We do not run ads, analytics, or third-party tracking SDKs.</li>
          <li>We do not sell personal data.</li>
          <li>
            Chat content is stored on your device, with optional iCloud sync if
            you enable it.
          </li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>2. Data Processed by the App</h2>
        <p>
          Sirina Chat may process the following data to provide core features:
        </p>
        <ul>
          <li>
            Chat content: your prompts, assistant responses, chat titles, and
            message timestamps.
          </li>
          <li>
            Attachment metadata: file names for files you attach to a message.
          </li>
          <li>
            Attachment text excerpts: text extracted locally from supported
            files so the model can use that context. This extraction is done
            on-device and is not uploaded by Sirina Chat.
          </li>
          <li>
            Generated images: images generated from your prompts and stored in
            the app container on your device.
          </li>
          <li>
            App settings: preferences such as appearance, generation settings,
            and iCloud sync preference.
          </li>
          <li>
            Voice input data: audio and speech-to-text results when you use
            dictation.
          </li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>3. How Data Is Used</h2>
        <p>We use data only to operate app features, including:</p>
        <ul>
          <li>generating AI responses and titles,</li>
          <li>enabling chat history and search,</li>
          <li>processing supported file attachments,</li>
          <li>generating images from prompts,</li>
          <li>enabling speech-to-text input,</li>
          <li>
            syncing conversations across your devices if iCloud sync is
            enabled.
          </li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>4. Storage and Sync</h2>
        <h3>Local storage</h3>
        <p>
          By default, Sirina Chat stores chat data in the app&apos;s local
          storage on your device.
        </p>
        <h3>Optional iCloud sync</h3>
        <p>
          If iCloud sync is enabled in Settings, conversation records are
          synced through Apple&apos;s CloudKit private database so your data can
          appear on your other devices using the same Apple Account.
        </p>
        <p>
          If iCloud sync is disabled, the app continues to work locally
          on-device.
        </p>
      </section>

      <section className="legalSection">
        <h2>5. What We Do Not Collect</h2>
        <p>
          Sirina Chat does not collect personal data for developer-side
          analytics or advertising. Specifically, we do not:
        </p>
        <ul>
          <li>track you across apps or websites,</li>
          <li>sell data,</li>
          <li>use ad networks,</li>
          <li>
            maintain developer-side analytics profiles for your chat content.
          </li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>6. Apple Services and Frameworks</h2>
        <p>
          Sirina Chat uses Apple-provided frameworks and services, including
          Apple Intelligence/Foundation Models, Image Playground, Speech
          Recognition, and CloudKit (if enabled).
        </p>
        <p>
          When these Apple services are used, Apple may process data according
          to your device settings and Apple&apos;s own terms and privacy policies.
          We do not control Apple&apos;s processing policies.
        </p>
      </section>

      <section className="legalSection">
        <h2>7. Data Sharing</h2>
        <p>We do not share your data with data brokers or advertisers.</p>
        <p>
          Data may be handled by Apple services only as needed to provide
          requested functionality (for example, iCloud sync or Apple AI
          features).
        </p>
      </section>

      <section className="legalSection">
        <h2>8. Retention and Deletion</h2>
        <ul>
          <li>
            Chat data remains until you delete conversations, delete all
            conversations, or remove app data.
          </li>
          <li>You can manage and delete conversations from inside the app.</li>
          <li>
            If iCloud sync is enabled, deletions sync via CloudKit, which may
            take some time to propagate.
          </li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>9. Children</h2>
        <p>
          Sirina Chat is not directed to children under 13, and we do not
          knowingly collect personal information from children. Sirina Chat does
          not require creating an account.
        </p>
      </section>

      <section className="legalSection">
        <h2>10. International Users</h2>
        <p>
          If you use iCloud or other Apple services, data handling may occur in
          regions where Apple operates infrastructure, subject to Apple&apos;s
          policies.
        </p>
      </section>

      <section className="legalSection">
        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          reflected by revising the &quot;Last updated&quot; date above.
        </p>
      </section>

      <section className="legalSection">
        <h2>12. Contact</h2>
        <p>
          If you have privacy questions, contact us at{" "}
          <ObfuscatedEmail />.
        </p>
      </section>
    </PageTemplate>
  );
}
