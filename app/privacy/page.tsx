import React from 'react';

const PrivacyPage = () => {
  return (
    <main className="bg-gray-100 py-10 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Privacy Policy for 1 Vans App</h1>

        {/* <p><strong>Effective Date:</strong> [Insert Launch Date]</p> */}

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">1. About the App</h2>
          <p>
            1 Vans is a private-use mobile application designed for construction engineers
            assigned accounts by an admin. The app helps engineers submit daily work reports,
            upload site photos/videos, and log construction activities for internal project management.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">2. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Personal Information:</strong> Email address, name, and user ID (assigned by admin)</li>
            <li><strong>Usage Data:</strong> Daily reports, materials used, photos, videos, documents, and purchase orders</li>
            <li>
              <strong>Location Data:</strong>
              <ul className="list-disc ml-6 mt-2">
                <li><strong>Report Submission:</strong> Your location is captured once at the time you submit a report, to verify whether the submission was made from the designated site.</li>
                <li><strong>Weather Updates:</strong> We use your current location to provide real-time local weather information relevant to your area</li>
              </ul>
            </li>
          </ul>
          <p className="mt-2 italic">We do not collect location data in the background, and we do not track users.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>To allow engineers to submit reports and upload project data</li>
            <li>To help admins track site activity and verify location of submitted reports</li>
            <li>To organize site-related media and documentation</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">4. Data Sharing</h2>
          <p>We do <strong>not</strong> share your data with third parties.</p>
          <p>However, internal sharing within your construction company may occur:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Engineer-to-Admin Sharing:</strong> Engineers may share reports or documents with admins for remote updates.</li>
            <li><strong>Admin Access:</strong> Admins can view reports, media, and documents uploaded by engineers for project coordination.</li>
          </ul>
          <p>No data is shared with advertisers, analytics services, or any unauthorized third party.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">5. Data Security</h2>
          <p>We use secure servers, authentication protocols, and restricted access to keep your data safe and private.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">6. User Rights</h2>
          <p>If you are an engineer, you may request updates or removal of your data by contacting your admin. We respect all lawful data privacy rights.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">7. Children’s Privacy</h2>
          <p>The app is not intended for children under the age of 18. We do not knowingly collect personal data from minors.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy occasionally. Please check back to stay informed of any changes.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">9. Contact Us</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Email:</strong> hello@prayoshatechnology.com</li>
            <li><strong>Phone:</strong> +91 7600 922 524</li>
            <li><strong>Website:</strong> <a href="https://prayoshatechnology.com" className="text-blue-600 hover:underline">prayoshatechnology.com</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">10. Google Play Disclosure Summary</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Location Data:</strong> Collected only when submitting a report and weather information relevant to your area</li>
            <li><strong>Background Location:</strong> Not collected</li>
            <li><strong>Used for:</strong> Verifying report location only</li>
            <li><strong>Data Sharing:</strong> Internal only (between engineer and admin)</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;