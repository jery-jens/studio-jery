"use client";

import Head from "next/head";
import { Layout } from "../components";

export default function CookiePolicy() {
  return (
    <Layout mode="light">
      <Head>
      <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="c-container">
        <div className="max-w-4xl mx-auto py-32 policy">
          <h2>Cookie Policy</h2>

          <p>
          This Cookie Policy explains how Jery ("we," "us," or "our") uses cookies and similar technologies when you visit our website, located at www.jery.be. By using our website, you consent to the use of cookies as described in this policy.
          </p>

          <h5>
            1. What are cookies?
          </h5>
          <p>
          Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit certain web pages. These files allow websites to recognize your device and remember your preferences, enhance your user experience, and collect information about your online interactions.
          </p>

          <h5>2. How we use cookies</h5>
          <p>
          We use cookies for the following purposes:
          <br />
          <br />
          Google Analytics: We use Google Analytics cookies to analyze website traffic and gather information about how visitors use our site. This information helps us improve our website and provide a better user experience.
          <br /> <br />
          Functionality: These cookies enable specific functionalities on our website, such as remembering your language preferences and allowing you to log into secure areas of the site.
          </p>

          <h5>3. Types of cookies we use</h5>
          <p>
          Session Cookies: These cookies are temporary and are deleted from your device once you close your web browser.
          <br /> <br />
          Persistent Cookies: These cookies remain on your device for a specified period or until you manually delete them from your browser.          
          </p>

          <h5>4. Managing cookies</h5>
          <p>
            You can control and manage cookies in various ways. Please refer to your browser's help documentation to learn how to block or delete cookies. Keep in mind that disabling cookies may impact your experience on our website. <br /><br />
            Google Analytics Opt-Out: To prevent your data from being used by Google Analytics, you can install the Google Analytics Opt-Out Browser Add-On, available at https://tools.google.com/dlpage/gaoptout.
          </p>

          <h5>5. Changes to this Cookie Policy</h5>
          <p>
          We may update our Cookie Policy from time to time to reflect changes in technology, legislation, or our services. Any changes will be posted on this page with an updated effective date. We encourage you to review this Cookie Policy periodically for any changes.
          </p>

          <h5>6. Contact us</h5>
          <p>
          If you have any questions or concerns about our Cookie Policy, please contact us at:
          </p>

          <h5>Jery</h5>
          <p>
          Address: Spanjaardstraat 15 0101, 8000 Brugge <br />
          Email: jens@jery.be <br /> <br />

          By using our website, you agree to the use of cookies as described in this Cookie Policy. Thank you for visiting Jery.be.
          </p>
        </div>
      </div>
    </Layout>
  );
};
