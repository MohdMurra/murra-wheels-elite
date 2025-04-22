
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: April 1, 2025</p>
          
          <div className="prose prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground max-w-none">
            <p>
              Please read these Terms of Service ("Terms") carefully before using the Murra Cars website and services.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these terms, you may not use our services.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">2. Description of Services</h2>
            <p>
              Murra Cars provides an online platform for browsing, purchasing, and financing vehicles. We also offer various automotive services including maintenance, trade-in appraisals, and extended warranties.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">4. Vehicle Information and Pricing</h2>
            <p>
              While we strive to provide accurate information about our vehicles, we cannot guarantee the absolute accuracy of all details, including specifications, features, and pricing. All vehicles are subject to prior sale. Prices are subject to change without notice.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              The content on our website, including text, graphics, logos, images, and software, is the property of Murra Cars and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">6. User Content</h2>
            <p>
              By submitting content to our website (including reviews, comments, and testimonials), you grant us a non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content in connection with our services.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              In no event shall Murra Cars be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2 className="text-xl mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@murracars.com.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
