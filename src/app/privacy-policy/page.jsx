"use client";

import Head from "next/head";
import { Layout } from "../components";

export default function PrivacyPolicy() {
  return (
    <Layout mode="light">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="c-container">
        <div className="max-w-4xl mx-auto py-32 policy">
          <h2>Privacy Policy</h2>

          <p>
            Thank you for visiting Jery's website. Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, located at www.jery.be.
          </p>

          <h5>
            1. Information we collect
          </h5>
          <p>
            We only collect cookies for Google Analytics to analyze website traffic and optimize your website experience. The information collected through these cookies includes your IP address, browser type, internet service provider, referring/exit pages, operating system, date/time stamp, and clickstream data.
          </p>

          <h5>2. Use of Cookies</h5>
          <p>
            We use cookies to improve your user experience on our website. These cookies help us understand how you interact with our site, allowing us to make necessary improvements. By using our website, you consent to the use of cookies in accordance with this policy.
          </p>

          <h5>3. How we use your information</h5>
          <p>
            We use the information collected through Google Analytics cookies to analyze website traffic, monitor the effectiveness of our marketing efforts, and enhance the overall user experience on our website. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
          </p>

          <h5>4. Data security</h5>
          <p>
            We take appropriate measures to protect the information you provide to us. However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your data.
          </p>

          <h5>5. Third-Party links</h5>
          <p>
            Our website may contain links to third-party websites or services that are not owned or controlled by Jery. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h5>6. Changes to this Privacy Policy</h5>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically for any changes. Your continued use of the website after the changes have been made constitutes your acceptance of the updated policy.
          </p>

          <h5>7. Contact us</h5>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at:
          </p>

          <h5>Jery</h5>
          <p>
          Address: Spanjaardstraat 15 0101, 8000 Brugge <br />
          Email: jens@jery.be <br /> <br />

          By using our website, you agree to the terms and conditions of this Privacy Policy. Thank you for visiting Jery.be.
          </p>
        </div>
      </div>
    </Layout>
  );
};
