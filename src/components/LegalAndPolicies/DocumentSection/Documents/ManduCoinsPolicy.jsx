function ManduCoinsPolicy() {
    return (
      <div className="p-4 h-full w-full">
        <h1 className="text-3xl font-semibold mb-4">ManduCoins Policy for GuffMandu</h1>
  
        <div className="h-[90%] overflow-y-scroll">
          <p className="text-lg mb-6">
            ManduCoins are the official virtual currency of GuffMandu, used for transactions such as gifting, top-ups, and withdrawals. By using ManduCoins, users agree to the terms outlined in this policy. GuffMandu reserves the right to modify this policy, with users being notified via email or in-app notifications.
          </p>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Currency Value and Adjustments</h2>
            <ul className="list-disc list-inside">
              <li className="mb-4">The current value of ManduCoins is 10 ManduCoins = 1 Nepali Rupee (NPR).</li>
              <li>GuffMandu reserves the right to adjust this value or introduce additional charges (e.g., top-up fees) in future updates. Changes will be communicated to users in advance.</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Top-Up and Withdrawal Limits</h2>
            <p className="font-semibold mb-2">Top-Up Limits</p>
            <ul className="list-disc list-inside mb-4">
              <li>Maximum Top-Up: Users can top-up up to 50,000 ManduCoins (equivalent to 5,000 NPR) per transaction.</li>
              <li>Additional fees for top-ups may apply in future updates.</li>
            </ul>
            <p className="font-semibold mb-2">Withdrawal Limits</p>
            <ul className="list-disc list-inside">
              <li>Minimum Withdrawal: Users must withdraw at least 100 ManduCoins (equivalent to 10 NPR).</li>
              <li>Withdrawable Amount: Withdrawals must be in multiples of 10 ManduCoins (e.g., 100, 200, 500).</li>
              <li>Withdrawals require users to provide their eSewa or Khalti account details for processing.</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Refund Policy</h2>
            <ul className="list-disc list-inside">
              <li className="mb-4">No Refunds for Top-Up or Withdrawal: Once users have topped up or withdrawn ManduCoins, no refunds will be provided.</li>
              <li>No Refunds for Gifting: ManduCoins sent as gifts cannot be refunded under any circumstances.</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Security Measures</h2>
            <ul className="list-disc list-inside">
              <li className="mb-4">Users must verify their account using a PIN before sending gifts or transferring ManduCoins. Transactions will only proceed upon successful verification.</li>
              <li className="mb-4">Users must log in to send or receive ManduCoins. Non-logged-in users cannot participate in ManduCoins transactions.</li>
              <li>All transactions are processed and verified through a secure backend system to prevent fraud or unauthorized activity.</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Prohibited Activities</h2>
            <p className="mb-4">To ensure a safe and fair environment, the following actions are strictly prohibited:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Any form of illegal or offensive activities involving ManduCoins.</li>
              <li>Attempting to manipulate transactions or engage in fraudulent activities.</li>
              <li>Receiving excessive reports for misconduct on the platform.</li>
            </ul>
            <p className="font-semibold mb-2">Penalties:</p>
            <ul className="list-disc list-inside">
              <li className="mb-4">Accounts involved in prohibited activities may face temporary or permanent suspension.</li>
              <li>GuffMandu reserves the right to deduct ManduCoins as penalties for violations.</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Policy Updates and User Notifications</h2>
            <ul className="list-disc list-inside">
              <li className="mb-4">GuffMandu holds the right to make changes to the ManduCoins policy. In the event of changes:</li>
              <li>Users will be notified through in-app notifications or emails.</li>
              <li>Continued use of the platform after changes are implemented constitutes acceptance of the updated policy.</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
  
  export default ManduCoinsPolicy;
  