
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: April 1, 2025</p>
          
          <div className="prose prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground max-w-none">
            <p>
              At Murra Cars, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc ml-6 mb-4 text-muted-foreground">
              <li>Personal identifiers (name, email address, phone number)</li>
              <li>Financial information (when applying for financing)</li>
              <li>Vehicle preferences and browsing history</li>
              <li>Usage data (how you interact with our website)</li>
            </ul>
            
            <h2 className="text-xl mt-8 mb-4">2. How We Collect Your Data</h2>
            <p>
              We use different methods to collect data from and about you including through:
            </p>
            <ul className="list-disc ml-6 mb-4 text-muted-foreground">
              <li>Direct interactions (when you fill out forms or correspond with us)</li>
              <li>Automated technologies or interactions (cookies, server logs)</li>
              <li>Third parties (business partners, service providers)</li>
            </ul>
            
            <h2 className="text-xl mt-8 mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc ml-6 mb-4 text-muted-foreground">
              <li>To provide you with the services you have requested</li>
              <li>To improve our website and services</li>
              <li>To communicate with you about our products and services</li>
              <li>To comply with legal obligations</li>
            </ul>
            
            <h2 className="text-xl mt-8 mb-4">4. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">6. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc ml-6 mb-4 text-muted-foreground">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
            
            <h2 className="text-xl mt-8 mb-4">7. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our website.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@murracars.com.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
