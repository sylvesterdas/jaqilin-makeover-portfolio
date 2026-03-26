
import EmailLink from '@/components/email-link';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import { isMalayalam } from '@/lib/locale';
import { getRequestLocale } from '@/lib/locale-server';
import { buildSocialMetadata } from '@/lib/metadata';
import StructuredData from '@/components/structured-data';
import { buildBreadcrumbSchema } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle = 'Privacy Policy | Jaqilin Makeover';
  const englishDescription =
    'Privacy policy for Jaqilin Makeover website and services.';
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: 'https://www.jaqilinmakeover.com/privacy-policy',
  });

  return {
    title: inMalayalam
      ? 'സ്വകാര്യതാ നയം | ജാകിലിൻ മേക്കോവർ'
      : englishTitle,
    description: inMalayalam
      ? 'ജാകിലിൻ മേക്കോവറിന്റെ സ്വകാര്യതാ നയം.'
      : englishDescription,
    alternates: {
      canonical: '/privacy-policy',
    },
    openGraph,
    twitter,
  };
}

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20 sm:pt-24 md:pt-32">
        <StructuredData data={breadcrumbSchema} />
        <div className="container mx-auto px-4">
          <Card className="bg-card border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-3xl sm:text-4xl md:text-5xl text-primary">Privacy Policy</CardTitle>
              <p className="text-xs sm:text-sm text-foreground/60 pt-2">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </CardHeader>
            <CardContent className="prose prose-sm sm:prose-lg max-w-none text-foreground/80 space-y-4">
              <p>
                Welcome to Jaqilin Makeover. This Privacy Policy outlines how LJS Works, a registered Indian sole proprietorship (UDYAM-KL-12-0112903) under Jaqilin S, collects, uses, maintains, and discloses information collected from users (each, a "User") of the https://www.jaqilinmakeover.com website ("Site"). This privacy policy applies to the Site and all products and services offered by Jaqilin Makeover.
              </p>

              <h2 className="font-headline text-2xl text-primary pt-4">1. Information We Collect</h2>
              <p>
                We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, contact us via the provided WhatsApp number, and in connection with other activities, services, features or resources we make available on our Site.
              </p>
              <p>
                The only personal information we collect directly is what you voluntarily provide to us. When you contact us via WhatsApp, we will have access to your name and phone number as provided by the application. This information is used solely for the purpose of responding to your inquiries, providing service details, and scheduling appointments.
              </p>

              <h2 className="font-headline text-2xl text-primary pt-4">2. Web Browser Cookies & Analytics</h2>
              <p>
                Our Site uses "cookies" and similar technologies to enhance User experience and analyze site traffic. A cookie is a small file placed on your device.
              </p>
              <p>
                We use Google Analytics to help us understand how our Users engage with the Site. Google Analytics collects anonymous information such as how often users visit this site, what pages they visit, and general demographic data. We use this information solely to improve our Site and services. Google’s ability to use and share information collected by Google Analytics is restricted by the Google Analytics Terms of Use and the Google Privacy Policy.
              </p>
              <p>
                In compliance with India's Digital Personal Data Protection (DPDP) Act, we ask for your consent to use these analytics cookies via a banner on our site. By default, we assume consent is given, but you have the clear option to reject. Your choice is stored in your browser's local storage and can be changed at any time by clearing your browser's data for this site.
              </p>

              <h2 className="font-headline text-2xl text-primary pt-4">3. How We Use Collected Information</h2>
              <p>
                LJS Works collects and uses Users' personal information for the following purposes:
              </p>
              <ul>
                <li><strong>To provide customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                <li><strong>To personalize user experience:</strong> We may use aggregated, anonymous analytics data to understand how our Users as a group use the services and resources provided on our Site.</li>
                <li><strong>To send periodic communications:</strong> We use the contact information (phone number) to communicate with you regarding your inquiries, bookings, confirmations, reminders, and to provide details about our services.</li>
              </ul>

              <h2 className="font-headline text-2xl text-primary pt-4">4. How We Protect Your Information</h2>
              <p>
                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information stored on our devices and communication platforms (like WhatsApp).
              </p>

              <h2 className="font-headline text-2xl text-primary pt-4">5. Sharing Your Personal Information</h2>
              <p>
                We do not sell, trade, or rent Users' personal identification information to others. As a sole proprietorship, we are not affiliated with any other businesses and your information is kept confidential.
              </p>

              <h2 className="font-headline text-2xl text-primary pt-4">6. Your Acceptance of These Terms</h2>
              <p>
                By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
              </p>

              <h2 className="font-headline text-2xl text-primary pt-4">7. Contacting Us</h2>
              <p>
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
              </p>
              <p>
                LJS Works (Jaqilin Makeover)<br />
                Kanjiramkulam, Trivandrum<br />
                <EmailLink user="contact" domain="jaqilinmakeover.com" className="text-primary hover:underline" />
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
