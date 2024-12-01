function AgeRestrictionsPolicy() {
    return (
      <div className="p-4 h-full w-full">
        <h1 className="text-3xl font-semibold mb-4">Age Restrictions Policy for GuffMandu</h1>
  
        <div className="h-[90%] overflow-y-scroll">
          <p className="text-sm mb-6">
            At GuffMandu, we prioritize the safety and appropriateness of our platform for all users. 
            The following age restrictions and related policies are in place to ensure a safe environment:
          </p>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Minimum Age Requirement</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Users must be 18 years or older to use the platform. This aligns with legal adulthood 
                as defined in most jurisdictions.
              </li>
              <li>
                Minors are strictly prohibited from accessing or using the platform, even with parental or guardian consent.
              </li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Age Verification</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                GuffMandu reserves the right to implement age verification measures at any time. 
                This may include requesting users to submit proof of age, such as an ID or equivalent document, to verify eligibility.
              </li>
              <li>
                Users who fail to verify their age may face account suspension or permanent bans.
              </li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Reporting Underage Users</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                If a user suspects that someone on the platform is underage, they are encouraged to report the account 
                using the in-app reporting system.
              </li>
              <li>
                Reports will be reviewed promptly by moderators, and accounts found in violation of the age restriction 
                will be permanently banned.
              </li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Parental Responsibility</h2>
            <p className="mb-4">
              While GuffMandu is not designed for children or minors, we strongly urge parents and guardians 
              to monitor and regulate internet usage to prevent unauthorized access.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Legal Compliance</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Our age restrictions align with applicable local and international laws concerning online platform usage.
              </li>
              <li>
                By using the platform, users agree that they meet the minimum age requirement and are legally permitted 
                to engage in such activities.
              </li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Changes to Age Policy</h2>
            <p className="mb-4">
              We reserve the right to modify the age restrictions and related policies. Any changes will be communicated 
              to users via notifications, email, or updates on our Policies Page.
            </p>
          </section>
        </div>
      </div>
    );
  }
  
  export default AgeRestrictionsPolicy;
  