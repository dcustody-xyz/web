import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/Layout'

const arrayContext = [
  {
    title: 'Security, Protection and Use of Personal Information',
    paragraphs: [
      'dCustody is committed to protecting your privacy. Internally, only a specified number of employees within our business have access to your Personal Information. These employees have duties which reasonably require access to your Personal Information.',
      'dCustody`s systems and data are constantly under review to ensure that you are getting the best level of service and that market leading security features are in place.',
      'dCustody reserves the right to retain and share certain Personal Information in order to meet our regulatory and statutory requirements. In addition, dCustody reserves the right to retain and share certain Personal Information with our corporate partners, and third parties acting on behalf of dCustody.',
      'Personal Information and other related data may be exported outside of the jurisdiction in which you reside. Your Personal Information may be processed and stored in a foreign country or countries. Under those circumstances, the governments, courts, law enforcement or regulatory agencies of that country or those countries may be able to obtain access to your Personal Information through foreign laws. You need to be aware that the privacy standards of those countries may be lower than those of the jurisdiction in which you reside. You should note that you are not obliged to give your Personal Information to dCustody, but if you choose not to do so, we may not be able to provide our services, or your access to our services may be limited.',
    ],
    code: 'security_protection_personal_information'
  },
  {
    title: 'Consent',
    paragraphs: [
      'Consent is required for the collection of Personal Information and the subsequent use of disclosure of Personal Information. The form of consent may vary depending upon the circumstances and the type of Personal information obtained. Your agreement with dCustody`s Terms of Service constitutes your consent to the collection and use of Personal Information as described in this Privacy Policy. dCustody reserves the right to use and disclose Personal Information without your knowledge or consent as permitted by applicable law.',
    ],
    code: 'consent'
  },
  {
    title: 'Disclosure of Personal Information',
    paragraphs: [
      'We use the Personal Information for the purposes indicated at the time you provide us with such information, and/or otherwise for the purposes set out in this Privacy Policy and/or as otherwise permitted by law. We may make available the Personal Information that you provide to us to our affiliates, agents, representatives, service providers and contractors for these purposes. We also reserve the right to disclose Personal information that dCustody believes, in good faith, is appropriate or necessary to enforce our Terms of Use, take precautions against liability or harm, to investigate and respond to third party claims or allegations, to respond to a court order or official requests, to protect security or integrity of dCustody and to protect the rights, property or safety of dCustody, our uses or others.',
      'We may share Users Personal Information with any financial dispute resolution scheme to which the Company subscribes, and other law enforcement bodies, regulatory agencies, courts, arbitration bodies and dispute resolution schemes as may be required by law.',
      'If you request it in writing, we may share your Personal Information with your nominated advisers. Except where disclosure of your Personal Information is required by law or requested by you, we will generally require any third party which receives or has access to Personal Information to protect such Personal Information and to use it only to carry out the services they are performing for you or for us, unless otherwise required or permitted by law. We will ensure that any such third party is aware of our obligations under this Privacy Policy and we will take reasonable steps to ensure that contracts we enter with such third parties binds them to terms no less protective of any Personal Information disclosed to them than the obligations we undertake to you under this Privacy Policy or which are imposed on us under applicable data protection laws.',
      'In the event that dCustody is involved in a merger, acquisition, sale, bankruptcy, insolvency, reorganization, receivership, assignment or the application of laws or change of control, there may be a disclosure of your information to another entity related to such an event.',
    ],
    code: 'disclosure_personal_information'
  },
  {
    title: 'Access and Changing of Personal Information',
    paragraphs: [
      'You have the right to access the Personal Information we hold about you, and to require the correction, updating and blocking of inaccurate and/or incorrect data by sending an email to us. We will aim respond to your request within 14 days. You may also request the deletion or destruction of your Personal Information, your Account details, or your Transaction details by sending an email to us. dCustody will act on your request only when it is not inconsistent with its legal and regulatory obligations and compliance procedures. Upon your written request, we will inform you of the use and general disclosure of your Personal Information. Depending on the nature of your request, there may be a minimal charge for accessing your Personal Information.',
    ],
    code: 'access_changing_personal_information'
  },
  {
    title: 'Security',
    paragraphs: [
      'We take reasonable steps to protect your Personal Information from misuse, loss, unauthorized access, modification or disclosure, including implementing appropriate security measures. The security measures in place will, from time to time, be reviewed in line with legal and technical developments. However, we give no guarantee that such misuse, loss, unauthorized access, modification or disclosure will not occur. There are protective measures that you should take which as well include but are not limited to changing password regularly, not sharing your Personal Information with other unless you clearly understand the purpose of their request and you know with whom you are dealing.',
    ],
    code: 'security'
  },
  {
    title: 'Retention of Personal Information',
    paragraphs: [
      'We will hold your Personal Information only for as long as it is necessary for us to do so, having regard to the purposes described in this Privacy Policy and our own legal and regulatory requirements. In general, Personal Information relating to your Account for at least a period of 5 years after your Account is closed. Similarly, we usually retain information about Transactions on your Account for a period of 5 years from the date of the Transaction. Personal Information which is collected for other purposes will be discarded inn accordance with our policies in place from time to time.',
    ],
    code: 'retention_personal_information'
  },
  {
    title: 'Users Under Age of 13',
    paragraphs: [
      'dCustody does not knowingly collect or store any personal information about children under 13 without verifiable prior parental consent. If you believe such information has been inadvertently collected, we will take necessary steps in order to remove such information from our database. Users under 13 must seek and obtain parental consent to use this website.',
    ],
    code: 'users_under_age_13'
  },
  {
    title: 'Links',
    paragraphs: [
      'There may be links from our Site to other sites and resources provided by third parties. This Privacy Policy applies only to our Site. Accessing those third-party sites or sources requires you to leave our Site. We do not control those third party sites or any of the content contained therein and you agree that we are in no way responsible or liable for any of those third party sites, including, without limitation, their content, policies, failures, promotions, products, services or actions and/or any damages, losses, failures or problems caused by, related to or arising from those sites. We encourage you to review all policies, rules, terms and regulations, including the privacy policies, of each site that you visit.',
    ],
    code: 'links'
  },
  {
    title: 'Changes',
    paragraphs: [
      'Our policies, content, information, promotions, disclosures, disclaimers and features may be revised, modified, updated, and/or supplemented at any time and without prior notice at the sole and absolute discretion of the Company. If we change this Privacy Policy, we will take steps to notify all Users by a notice on our website and will post the amended Privacy Policy on the website.',
    ],
    code: 'changes'
  },
  {
    title: 'Contact Us',
    paragraphs: [''],
    code: 'contact_us'
  },
]
const arrayContextList = [
  {
    title: '',
    paragraphs: [
      'dCustody and its affiliates (hereinafter, "dCustody", "the Company", "we", "us" or "our") values your privacy and cares about the way in which your personal information is treated. This Privacy Policy together with our Terms governs our collection, processing and use of your Personal Information. By accessing dCustody, you are consenting to the information collection and use practices described in this Privacy Policy. dCustody will undertake best efforts to give you best possible degree of control over your privacy. The purpose of this Privacy Policy is to set out in an accountable and transparent way the collection and use of information by dCustody. Personal Information "Personal Information" is information which identifies you personally or by which your identity can reasonably be ascertained. This may include but is not limited to:',
    ],
    list: [
      'Full legal name, address for service, e-mail address, phone number, date of birth, photographic identification, government issued identification and other contact details.',
      'dCustody requires the highest level of browser permissions that could potentially lead to procurement of more Personal Information than enclosed in the definition of Personal Information.',
      'World Wide Web related information, including but not limited to IP Addresses, operating system and browser type may be received by dCustody as a result of your interactions with dCustody.',
      'dCustody uses Google Analytics for purposes of monitoring web traffic. Any identifying information collected via Google Analytics is controlled by Google.',
      'Public blockchains provide transparency into transactions and dCustody is not responsible for preventing or managing information broadcasted on a blockchain.',
    ],
    code: 'first_list'
  },
  {
    title: 'Purpose of Personal Information collection',
    paragraphs: ['Personal Information is collected in order to:'],
    list: [
      'Provide our services efficiently and effectively;',
      'Inform you about lending and financing features;',
      'Develop, enhance, market and deliver products and services to you;',
      'Understand your needs and your eligibility for products and services;',
      'Provide information to you about developments and new products, including changes and enhancements to the Site;',
      'Process billing and collection of any fees;',
      'Conduct surveys and get feedback from you;',
      'Establish and maintain a responsible commercial relationship with you;',
      'Provide you with news and other matters of general interest to you as dCustody customer;',
      'Meet dCustody`s legal and regulatory requirements (eg, information required to verify your identity).',
    ],
    code: 'second_list'
  }
]

const PrivacyPage: React.FC<PageProps> = () => {
  return (
    <React.Fragment>
      <Layout>
        <div>
          <div className="columns is-centered mt-5">
            <div className="column">
              <h1 className="title is-1 has-text-centered">Privacy Policy</h1>
              <p className="subtitle is-3 has-text-centered">Last updated: 2023-10-01</p>
            </div>
          </div>
          {arrayContextList.map((slideContent, index) => (
            <section key={index}>
              <h2 className="title is-5 mt-5">
                {slideContent.title}
              </h2>
              {slideContent.paragraphs.map((text, index) => (
                <p className="my-2">
                  {text}
                </p>
              ))}

              <ol className="my-2 ml-5 pl-5">
                {slideContent.list.map((item, index) => (
                  <li>
                    {item}
                  </li>
                ))}
              </ol>
            </section>
          ))}

          {arrayContext.map((slideContent, index) => (
            <section key={index}>
              <h2 className="title is-5 mt-5">
                {slideContent.title}
              </h2>
              {slideContent.paragraphs.map((text, index) => (
                <p className="my-2">
                  {text}
                </p>
              ))}
              {slideContent.code === 'contact_us' ? (
                <p className="my-2">
                  If you have any questions, comments, or concerns regarding our
                  Privacy Policy and/or practices, please contact us at
                  <a href="mailto:contact@dcustody.xyz" target="_blank" rel="noreferrer">
                    contact@dcustody.xyz
                  </a>
                </p>
              ) : (
                ""
              )}
            </section>
          ))}
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default PrivacyPage

export const Head: HeadFC = () => (
  <React.Fragment>
    <html lang="en" className="has-background-black has-text-light has-navbar-fixed-bottom" />
    <title>dCustody - Privacy policy</title>

    <meta name="description" content="dCustody: Infrastructure for Trustless Digital Asset Custody" />

    <meta property="og:local" content="en_US" />
    <meta property="og:title" content="dCustody" />
    <meta property="og:description" content="dCustody: Infrastructure for Trustless Digital Asset Custody" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://dcustody.xyz" />
    <meta property="og:image" content="https://dcustody.xyz/icons/icon-512x512.png" />
  </React.Fragment>
)
