import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// This page displays the privacy policy and legal disclaimer for BachHouse
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
      <Head>
        <title>Privacy Policy | BachHouse Student Accommodation</title>
        <meta name="description" content="BachHouse Privacy Policy and Legal Disclaimer" />
      </Head>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-indigo-700">
            <h1 className="text-3xl font-bold text-white">Privacy Policy & Legal Disclaimer</h1>
            <p className="mt-1 text-indigo-200">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="py-4 px-6">
              <div className="prose max-w-none">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 mb-4">
                    This Privacy Policy and Disclaimer ("Policy") governs the use of the BachHouse platform ("Website", "Platform", "We", "Us", or "Our"), which provides an online medium for students or individuals ("Users", "You") to search and inquire about accommodation options posted by third-party property owners or managers ("Owners").
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="font-medium text-yellow-800">
                      <strong>By accessing or using our platform, you agree to be bound by the terms outlined in this document.</strong> If you do not agree with these terms, please do not use the platform.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Nature of Our Platform</h2>
                  <p className="text-gray-600 mb-4">
                    BachHouse is a <strong>technology platform only</strong>. We provide a listing and inquiry-based medium for students and property owners to connect.
                  </p>
                  <p className="text-gray-600 mb-4">
                    We are <strong>not a broker, agent, real estate consultant, landlord, tenant, manager, or legal representative</strong> for any property or person using the platform.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="font-medium text-gray-800 mb-2">We do not:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Own, rent, or lease any property listed.</li>
                      <li>Guarantee accuracy, legality, or authenticity of listings.</li>
                      <li>Participate in or validate the rental transaction or agreement.</li>
                    </ul>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">No Agency Relationship</h3>
                  <p className="text-gray-600">
                    Nothing on the platform shall be construed to create any partnership, agency, or employment relationship between BachHouse and any user or owner.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Strict Limitation of Liability</h2>
                  <p className="text-gray-600 mb-4">
                    To the <strong>fullest extent permitted by applicable law</strong>, BachHouse and its team shall <strong>not be liable</strong> for:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Any disputes, verbal or physical conflicts, or harm caused by either users or owners.</li>
                        <li>Financial losses, frauds, scams, or misrepresentations.</li>
                        <li>Non-fulfillment of amenities, false promises, or defective accommodation.</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Evictions, harassment, or any form of misconduct by either party.</li>
                        <li>Property damages, injuries, theft, illegal activities, or police matters.</li>
                        <li>Fake documentation, false identity, or misleading photos and descriptions.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">4. User & Owner Responsibilities</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">A. Users (Students / Tenants)</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Must <strong>verify</strong> property details, documents, identity of owner, rent agreement, and legality before making payments or moving in.</li>
                        <li>Responsible for <strong>personal conduct</strong> during stay and for respecting local laws.</li>
                        <li>Must never share misleading or fraudulent information during inquiry or booking.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">B. Property Owners / Managers</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Must provide only <strong>truthful, current, and verifiable</strong> information.</li>
                        <li>Must comply with local rental laws, tenant rights, and safety standards.</li>
                        <li>Are fully responsible for <strong>tenancy issues</strong>, documentation, rent collection, and maintenance.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Payments & Transactions</h2>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>BachHouse does <strong>not process or control any financial transactions</strong> between users and owners.</li>
                      <li>Any advance, token, deposit, or rent paid is <strong>at the user's own risk.</strong></li>
                      <li>We do not verify bank details, UPI IDs, or personal payment channels shared between parties.</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Misuse and Fraud</h2>
                  <p className="text-gray-600 mb-4">
                    We reserve the right to <strong>immediately ban, block, and report</strong> any user or property owner found guilty of:
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Posting fake listings.</li>
                      <li>Attempting scams or impersonation.</li>
                      <li>Sharing offensive, unlawful, or harassing content.</li>
                      <li>Violating this policy or applicable laws.</li>
                    </ul>
                  </div>
                  <p className="text-gray-600">
                    We may cooperate with law enforcement authorities and provide necessary information <strong>if legally required</strong>.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Platform Data Usage</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">A. Data Collection</h3>
                      <p className="text-gray-600">
                        We collect limited personal information like name, contact number, and location preferences for inquiry and communication purposes only.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">B. Data Usage & Sharing</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Data is <strong>shared only with relevant property owners</strong> when you submit an inquiry.</li>
                        <li>We do <strong>not sell or rent</strong> user data to advertisers or third-party marketers.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">C. Data Protection</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>We use secure hosting and data encryption measures.</li>
                        <li>However, we are <strong>not liable for data breaches</strong>, hacks, or unauthorized access arising from technical vulnerabilities or force majeure events.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Content Disclaimer</h2>
                  <p className="text-gray-600 mb-4">
                    All property details including rent, amenities, availability, and photos are provided by owners.
                  </p>
                  <p className="text-gray-600 mb-4">
                    We <strong>do not validate or guarantee</strong>:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Accuracy of property images, features, or rental prices.</li>
                      <li>Availability of property at the time of inquiry.</li>
                      <li>Owner's identity, intentions, or agreements made outside the platform.</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Communication & Recording</h2>
                  <p className="text-gray-600 mb-4">
                    All user inquiries made through the platform are <strong>automated or routed</strong> to the owner's contact.
                  </p>
                  <p className="text-gray-600 mb-4">
                    BachHouse is <strong>not responsible for</strong>:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Call behavior, abusive language, false information, or harassment.</li>
                      <li>WhatsApp or SMS conversations initiated outside the platform.</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">10. No Mediation Policy</h2>
                  <p className="text-gray-600 mb-4">
                    We do <strong>not</strong>:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Mediate conflicts, complaints, or disagreements between parties.</li>
                      <li>Offer legal assistance, refunds, or damage compensation.</li>
                      <li>Take responsibility for tenant evictions, security deposits, or owner policies.</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Force Majeure Clause</h2>
                  <p className="text-gray-600">
                    We shall not be held responsible for any failure to perform our obligations due to:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mt-2">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Natural disasters, lockdowns, riots, strikes, war, pandemic, or server outages.</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
                  <p className="text-gray-600">
                    You agree to <strong>fully indemnify and hold harmless</strong> BachHouse, its founders, employees, and partners from:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mt-2">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Any claim, liability, legal action, cost, or damage resulting from your use of the platform, breach of terms, or violation of third-party rights.</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Governing Law & Jurisdiction</h2>
                  <p className="text-gray-600 mb-2">
                    This Policy shall be governed by the laws of the <strong>Republic of India</strong>.
                  </p>
                  <p className="text-gray-600">
                    Any legal dispute shall be subject to the jurisdiction of <strong>Pimpri-Chinchwad/Maharashtra courts only.</strong>
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Policy Updates</h2>
                  <p className="text-gray-600">
                    We may <strong>update, amend, or revise</strong> this policy without prior notice. The updated policy will be effective immediately upon posting.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">15. Acceptance of Terms</h2>
                  <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                    <p className="text-gray-600 mb-2">
                      By using this platform, you confirm that:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>You have <strong>read and understood</strong> this entire document.</li>
                      <li>You agree to comply with all terms stated herein.</li>
                      <li>You waive any right to hold the platform legally or financially accountable for disputes beyond its role.</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-600 mb-2">
                    For any policy-related queries, please contact:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-600 mb-1">📧 <a href="mailto:contact.bachhouse@gmail.com" className="text-indigo-600 hover:underline">contact.bachhouse@gmail.com</a></p>
                    <p className="text-gray-600">📞 +91-9039031115</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}