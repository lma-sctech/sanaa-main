import { previewNotice } from "@/lib/premium-data";

export const metadata = {
  title: "Contact",
  description: "Informational contact page for the Signature Journey preview.",
};

export default function ContactPage() {
  return (
    <>
      <div className="notice">{previewNotice}</div>
      <section className="detail-hero">
        <div className="shell">
          <p className="eyebrow">Contact</p>
          <h1>Contact details are intentionally not published yet.</h1>
          <p>
            This preview avoids fictitious phone numbers, addresses, email forms
            and fake success states. Verified contact information will be added
            after the NAP and policy review.
          </p>
        </div>
      </section>
    </>
  );
}
