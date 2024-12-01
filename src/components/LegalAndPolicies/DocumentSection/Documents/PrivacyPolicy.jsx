function PrivacyPolicy() {
    return (
      <div className="p-4 h-full w-full">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy for GuffMandu</h1>
        <p className="text-sm mb-4">Effective Date: [2024 November, 30]</p>
        <p className="mb-6">
          GuffMandu is committed to protecting your privacy and ensuring transparency about how your data is collected,
          used, and safeguarded. Below is our detailed Privacy Policy outlining how we handle user information:
        </p>
  
        <div className="h-[90%] overflow-y-scroll">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Data Collection</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <span className="font-semibold">Mandatory Data:</span> Email, username, profile photo, age, gender, and
                account balance.
              </li>
              <li>
                <span className="font-semibold">Optional Data:</span> Phone number (only when necessary).
              </li>
            </ul>
            <p className="mb-4">
              We ensure that no data will be leaked or used for illegal purposes. Any use of data for marketing or
              research will exclude sensitive or identifiable information shared with third parties.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Purpose of Data Usage</h2>
            <ul className="list-disc list-inside mb-4">
              <li>To manage accounts and enable seamless platform operations.</li>
              <li>
                In the future, data may be used for personalized services and targeted advertisements without sharing
                sensitive information with third parties.
              </li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Data Sharing</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <span className="font-semibold">With Payment Processors:</span> Only necessary details required for
                processing transactions will be shared with payment service providers.
              </li>
              <li>
                <span className="font-semibold">No Other Third-Party Sharing:</span> We do not share user data with any
                other third parties.
              </li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. User Rights</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <span className="font-semibold">Account Deletion:</span> Users can request account deletion at any time.
                However, transaction histories will be retained for compliance and legal purposes. Deleted accounts will
                remain in the database but will not be accessible externally.
              </li>
              <li>
                <span className="font-semibold">Data Access and Corrections:</span> Users may request to access or update
                their personal data by contacting us.
              </li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Encrypted storage of sensitive information.</li>
              <li>Secure backend systems for transactions and data handling.</li>
              <li>Continuous improvements to our security protocols.</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Cookies and Tracking</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Currently, GuffMandu does not use cookies.</li>
              <li>
                In the future, cookies and tracking technologies may be introduced to monitor user behavior for improving
                services.
              </li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Data Retention</h2>
            <p className="mb-4">
              User data will be stored indefinitely unless a specific issue arises or a deletion request is approved.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Children’s Privacy</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <span className="font-semibold">No Minors Allowed:</span> Users must meet the minimum age requirement (age
                of majority in their country).
              </li>
              <li>
                If a minor is found using the platform, their account will be terminated immediately.
              </li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Policy Updates</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Users who are logged in and have provided email addresses will receive notifications about any updates to
                this Privacy Policy.
              </li>
              <li>Updates will also be announced on the platform.</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">10. Feedback and Concerns</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Use the Feedback and Reporting section on the website or email us at{' '}
                <span className="font-semibold">guffmandu@gmail.com</span>.
              </li>
              <li>We strive to respond promptly to your questions or concerns.</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
  
  export default PrivacyPolicy;
  