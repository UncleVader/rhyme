import Footer from "@/components/common/Footer";
import React from "react";
import {Header} from "@/components/common/Header";
import {PageGradientBg} from "@/components/common/PageGradientBg";
import Policies from "@/components/pages/policies/Policies";

export default async function PrivacyPolicyPage() {
  return (
    <>
      <Policies>
        <>
          <h1>Our Commitment to GDPR Compliance</h1>

          <p>
            At Rhyme AI Inc, we understand the importance of privacy and data protection in the digital age. We are committed to ensuring the security and protection of the personal data that we process and to provide a compliant and consistent approach to data protection. In line with the General Data Protection Regulation (GDPR), we have adopted comprehensive measures to meet its standards of transparency, accountability, and individual rights protection, while also enhancing our data management and security practices.
          </p>

          <h2>Key Measures for GDPR Compliance</h2>

          <h3>Consent Management</h3>
          <p>
            We have updated our cookie policies and deployed a Consent Management Platform (CMP) to ensure clear and affirmative consent is obtained from our website visitors for the use of cookies and similar tracking technologies. Visitors now have the capability to accept, decline, or customize their preferences with an easy-to-use interface, ensuring their rights to privacy are respected and protected.
          </p>

          <h3>Secure Data Storage</h3>
          <p>
            Recognizing the importance of security, we have employed robust encryption methods for securing personal data both in transit and at rest. Access to this data is tightly controlled, ensuring only authorized personnel have access, and they are fully trained on the importance of GDPR compliance.
          </p>

          <h3>Data Subject Rights</h3>
          <p>
            We have streamlined our processes to ensure individuals can easily exercise their rights under GDPR. This includes requests for access to, correction of, deletion of personal data, and the right to withdraw consent. We are committed to responding to such requests promptly and efficiently.
          </p>

          <h3>Penetration Testing</h3>
          <p>
            Regular penetration testing is conducted to identify and rectify potential vulnerabilities within our systems and website. This proactive approach to security helps safeguard personal data against unauthorized access and cyber threats.
          </p>

          <h3>Privacy Policy Transparency</h3>
          <p>
            Our updated privacy policy provides clear, comprehensive information about how we collect, use, store, and protect user data. It reflects our commitment to transparency and our dedication to protecting user privacy.
          </p>

          <p>
            By implementing these measures, Rhyme AI Inc has assured itself to be GDPR compliant. We believe that data protection is a cornerstone of trustworthy business practices, and we continue to adapt and improve our policies and procedures to meet and exceed regulatory requirements. Protecting our customers&apos; privacy and their personal data is of the utmost importance to us, and we are committed to maintaining the highest standards of data protection.
          </p>



        </>
      </Policies>
      <Footer/>
      <PageGradientBg/>

    </>
  );
}
