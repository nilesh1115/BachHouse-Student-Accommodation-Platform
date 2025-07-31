import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
      <Head>
        <title>Terms of Service | BachHouse Student Accommodation</title>
        <meta name="description" content="BachHouse Terms of Service - Legal agreement for platform usage" />
      </Head>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-indigo-700">
            <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
            <p className="mt-1 text-indigo-200">Last updated: May 8, 2025</p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="py-4 px-6">
              <div className="prose max-w-none">
                <section className="mb-8">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="font-medium text-yellow-800">
                      <strong>By accessing or using BachHouse, you agree to these Terms of Service.</strong> If you disagree with any part, you must immediately cease using the platform.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600">
                    By accessing or using the BachHouse platform ("we", "us", "our", "the platform"), you agree to comply with and be legally bound by these Terms of Service. These terms constitute a legally binding agreement between you and BachHouse.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Platform Overview</h2>
                  <p className="text-gray-600 mb-4">
                    BachHouse is an online listing and inquiry platform that connects property owners or managers ("Owners") with students or individuals ("Users") seeking rental accommodation.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="font-medium text-gray-800 mb-2">Key Disclaimers:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>We <strong>do not own, operate, manage, or control</strong> any property listed</li>
                      <li>We <strong>do not act as a broker, agent, mediator, or legal representative</strong></li>
                      <li>All transactions and communications happen <strong>independently at your own risk</strong></li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Eligibility</h2>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <p className="text-gray-600">
                      You must be at least <strong>18 years of age</strong> and legally capable of entering into binding agreements under Indian law to use this platform. By using BachHouse, you represent and warrant that you meet these requirements.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Account and Access</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Basic platform access requires no registration, but certain features (like posting properties or sending inquiries) may require providing basic information</li>
                    <li>You agree to provide only <strong>accurate, current, and truthful</strong> information</li>
                    <li>We reserve the right to <strong>restrict or terminate access</strong> to any user at our discretion, without notice</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">5. User Conduct and Obligations</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">As a user (tenant/seeker), you agree to:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Independently <strong>verify all property details</strong>, ownership, and terms before any transaction</li>
                        <li>Comply with all <strong>local laws and regulations</strong> while occupying any property</li>
                        <li>Refrain from posting <strong>misleading or fraudulent</strong> inquiries</li>
                        <li>Respect the property and neighbors during your stay</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-800 mb-2">We are not liable for:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Inaccurate listings, hidden charges, or property condition</li>
                        <li>Any disputes, damage, or loss arising after inquiry or occupancy</li>
                        <li>Owner's failure to deliver promised amenities or services</li>
                        <li>Eviction proceedings or tenancy disputes</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Owner Conduct and Obligations</h2>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">As a property owner or manager, you agree to:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Post only <strong>authentic, verifiable, and lawful</strong> listings</li>
                      <li>Promptly update property <strong>availability and pricing</strong></li>
                      <li>Remove outdated or rented listings immediately</li>
                      <li>Be solely responsible for <strong>tenancy agreements, rental laws, and tenant safety</strong></li>
                      <li>Disclose all material information about the property upfront</li>
                      <li>Comply with all applicable <strong>housing and anti-discrimination laws</strong></li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">7. No Guarantee or Endorsement</h2>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>BachHouse <strong>does not guarantee</strong> availability, accuracy, or legality of any listing</li>
                      <li>We <strong>do not endorse</strong> or certify any user, owner, or property</li>
                      <li>We are <strong>not responsible</strong> for the final terms or behavior of either party</li>
                      <li>Listings appear based on automated algorithms - <strong>not as recommendations</strong></li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Payments and Transactions</h2>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="font-medium text-yellow-800">
                      BachHouse <strong>does not handle any payments</strong> between users and owners. All financial transactions occur directly between parties.
                    </p>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>All payments (advance, token, security deposit, rent, etc.) are strictly between user and owner</li>
                    <li>We <strong>do not collect or manage</strong> any money on behalf of any party</li>
                    <li>Users must <strong>verify payment channels</strong> before proceeding with any transaction</li>
                    <li>We are <strong>not liable for fraud, payment disputes, or refunds</strong></li>
                    <li>We recommend using <strong>traceable payment methods</strong> and proper documentation</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Prohibited Activities</h2>
                  <div className="bg-red-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-600 mb-2">
                      You agree <strong>not to</strong> engage in any of the following activities:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Post fake, misleading, or duplicate listings/inquiries</li>
                      <li>Attempt impersonation, phishing, or scam activities</li>
                      <li>Violate any local, national, or international laws</li>
                      <li>Share offensive, threatening, or harassing content</li>
                      <li>Reverse engineer or attempt to extract platform data</li>
                      <li>Use automated bots or scrapers to access the platform</li>
                      <li>Circumvent any security or access controls</li>
                    </ul>
                  </div>
                  <p className="text-gray-600">
                    Violation of these terms may result in <strong>account suspension, legal action, and permanent ban</strong> from the platform.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Third-Party Links</h2>
                  <p className="text-gray-600">
                    Our platform may contain links to third-party websites or services. These links are provided for convenience only. We:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-2">
                    <li><strong>Do not control</strong> and are not responsible for third-party content</li>
                    <li><strong>Do not endorse</strong> or make representations about them</li>
                    <li>Have no responsibility for their <strong>policies or practices</strong></li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    Any interactions with third parties are <strong>solely between you and that party</strong>.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Platform Availability and Maintenance</h2>
                  <p className="text-gray-600 mb-2">
                    While we strive to provide uninterrupted access, we cannot guarantee continuous operation. The platform may be temporarily unavailable due to:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Scheduled or emergency maintenance</li>
                      <li>Technical issues or server failures</li>
                      <li>Security concerns or cyber attacks</li>
                      <li>Force majeure events (natural disasters, government restrictions, etc.)</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 mt-2">
                    We will make reasonable efforts to notify users of extended outages when possible.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Data Collection and Privacy</h2>
                  <p className="text-gray-600">
                    Your use of BachHouse is also governed by our <strong>Privacy Policy</strong>. By using the platform, you consent to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-2">
                    <li>The collection, use, and limited sharing of your data as described in our Privacy Policy</li>
                    <li>Receiving communications related to your account or inquiries</li>
                    <li>The processing of your personal information in accordance with applicable laws</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Limitation of Liability</h2>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <p className="text-gray-600 mb-2">
                      To the maximum extent permitted by law, BachHouse shall not be liable for:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Direct, indirect, incidental, or consequential losses or damages</li>
                      <li>Property disputes, evictions, or tenant-owner conflicts</li>
                      <li>Personal injury, property damage, or theft occurring at listed properties</li>
                      <li>Any legal claims arising from platform use or misuse</li>
                      <li>Technical failures, data loss, or service interruptions</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Indemnification</h2>
                  <p className="text-gray-600">
                    You agree to <strong>indemnify and hold harmless</strong> BachHouse, its founders, team, and partners from any:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mt-2">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Claims, losses, or damages arising from your platform use</li>
                      <li>Violation of these Terms of Service</li>
                      <li>Infringement of third-party rights (including intellectual property)</li>
                      <li>Legal costs and expenses related to the above</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">15. Termination of Access</h2>
                  <p className="text-gray-600 mb-2">
                    We reserve the right to block, suspend, or permanently ban any user from accessing the platform:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>With or without cause</li>
                      <li>Without prior notice</li>
                      <li>Without liability or obligation to provide reason</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 mt-2">
                    You may stop using our services at any time, but certain provisions of these Terms will survive termination.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">16. Force Majeure</h2>
                  <p className="text-gray-600">
                    We are not liable for any failure to perform or delay due to causes beyond our reasonable control including:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mt-2">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Natural disasters (floods, earthquakes, etc.)</li>
                      <li>Pandemics or public health emergencies</li>
                      <li>Government restrictions or legal changes</li>
                      <li>Internet or server failures</li>
                      <li>Cyberattacks or security breaches</li>
                      <li>War, terrorism, or civil unrest</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">17. Governing Law & Jurisdiction</h2>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <p className="text-gray-600 mb-2">
                      These Terms of Service shall be governed by and construed in accordance with the laws of the <strong>Republic of India</strong>.
                    </p>
                    <p className="text-gray-600">
                      Any disputes shall be subject to the <strong>exclusive jurisdiction</strong> of the courts in <strong>Pimpri-Chinchwad, Maharashtra</strong>.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">18. Amendments to Terms</h2>
                  <p className="text-gray-600 mb-2">
                    We reserve the right to modify, amend, or revise these Terms at any time at our sole discretion. When we make changes:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>We will update the "Last updated" date at the top of this page</li>
                    <li>Material changes will be notified via email or platform notification when appropriate</li>
                    <li>Your continued use after changes constitutes acceptance of the updated terms</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    We encourage you to periodically review these Terms for any updates.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">19. Contact Us</h2>
                  <p className="text-gray-600 mb-2">
                    For any questions or concerns regarding these Terms of Service, please contact us at:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-600 mb-1">📧 <a href="mailto:contact.bachhouse@gmail.com" className="text-indigo-600 hover:underline">support@bachhouse.in</a></p>
                    <p className="text-gray-600">📞 +91-9039031115</p>
                    <p className="text-gray-600 mt-2">
                      We typically respond to inquiries within 1-2 business days.
                    </p>
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