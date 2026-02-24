import { Link } from "react-router-dom";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

export default function Home() {
  return (
    <PageTemplate
      className="homePage"
      eyebrow="Home"
      title="Sirina Chat"
      subtitle="Offline-first AI chat, right on your iPhone, with conversations kept on-device by default and optional iCloud sync across your Apple devices."
    >
      <div className="heroActions">
        <Link className="button buttonPrimary" to="/contact">
          Contact Support
        </Link>
        <Link className="button buttonGhost" to="/privacy">
          Privacy Policy
        </Link>
      </div>
    </PageTemplate>
  );
}
