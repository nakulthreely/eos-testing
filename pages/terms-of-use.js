import { useContext, useEffect } from "react";
import Head from "next/head";
import { EOSContext } from "../contexts/EOSContext";

const TermsOfUse = () => {
  const { setBlur, AOS, setIsHomePage } = useContext(EOSContext);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
    setBlur(false);
    setIsHomePage(false);
  }, []);

  return (
    <>
      <Head>
        <title>Terms Of Use | Empire Of Sight</title>
        <meta
          name="description"
          content="Empire Of Sight is a 2D MMORPG blockchain game with a strong focus on unique NFTs, decentralized token profitability, and its Virtual Item Economy."
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.empireofsight.com/" />
        <meta property="og:title" content="Empire Of Sight" />
        <meta
          property="og:description"
          content="Empire Of Sight is a 2D MMORPG blockchain game with a strong focus on unique NFTs, decentralized token profitability, and its Virtual Item Economy."
        />
        <meta
          property="og:image"
          content="https://www.empireofsight.com/assets/sectionOneBg.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.empireofsight.com/" />
        <meta property="twitter:title" content="Empire Of Sight" />
        <meta
          property="twitter:description"
          content="Empire Of Sight is a 2D MMORPG blockchain game with a strong focus on unique NFTs, decentralized token profitability, and its Virtual Item Economy."
        />
        <meta
          property="twitter:image"
          content="https://www.empireofsight.com/assets/sectionOneBg.jpg"
        />
        <meta property="twitter:site" content="@EmpireOfSight" />
        <meta property="twitter:creator" content="@EmpireOfSight" />
      </Head>
      <div className="container">
        <div className="pageWrapper">
          <div className="textSection rounded" data-aos="fade-down">
            <div className="headingWrapper">
              <h1 className="lg:text-4xl sm:text-2xl text-gray-50 cinzelStyle">
                TERMS OF USE
              </h1>
            </div>
            <p className="defaultText" data-aos="fade-down">
              By using the Empire Of Sight website (the "Site"), its subdomains,
              and any services available within the site (collectively the
              "Services"), you agree to be bound by these Terms of Use as well
              as our Privacy Policy. If you do not agree to the Terms of Use
              herein, do not use the Site or Services. The Site and Services are
              provided by Empire Of Sight.
            </p>
            <p className="text-gray-50 text-xl">
              Empire Of Sight reserves the right, at its sole discretion, to
              amend, change, modify, add or remove portions of these Terms of
              Use at any time.
            </p>
            <p className="text-gray-50 text-xl">
              It is your responsibility to check these terms periodically for
              changes. Your continued use of the Services following the
              published updates to the terms will mean that you accept and agree
              to the changes.
            </p>
            <p className="text-gray-50 text-xl">
              We offer a wide range of products and services, and additional
              terms may apply. When you use Empire Of Sight’s Services, you will
              also be subject to the guidelines, terms, and agreements
              applicable to that particular service (the "Service Terms"). If
              these Terms of Use are inconsistent with the Service Terms, the
              Service Terms will control.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              1. Accessing the Services
            </p>
            <p className="text-gray-50 text-xl">
              Empire Of Sight grants you a revocable, non-exclusive,
              non-transferable, limited license to use the Services (information
              or software) on the Site in accordance with these Terms of Use and
              applicable Service Terms. This is the grant of a license, not a
              transfer of title, and under this license, you may not:
            </p>
            <ul className="list-disc text-gray-50 text-xl">
              <li>modify or copy the materials;</li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on the Site;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ul>
            <p className="text-gray-50 text-xl">
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by Empire Of Sight at any
              time. Upon terminating your viewing of these materials or upon the
              termination of this license, you must destroy any downloaded
              materials in your possession whether in electronic or printed
              format.
            </p>
            <p className="text-gray-50 text-xl">
              You must keep secret all credentials associated with the Services.
              You are solely responsible for managing and maintaining the
              security of any information relating to such credentials and agree
              that Empire Of Sight shall not be held responsible (and you shall
              not hold us responsible) for any unauthorized access to the
              Services or any resulting harm you may suffer.
            </p>
            <p className="text-gray-50 text-xl">
              You agree to notify us immediately of any unauthorized access to
              or use of your user name or password or any other breach of
              security. You also agree to ensure that you exit from your account
              at the end of each session. You should use particular caution when
              accessing your account from a public or shared computer so that
              others are not able to view or record your password or other
              personal information.
            </p>
            <p className="text-gray-50 text-xl">
              Your access to one or more Services may be contingent upon
              satisfaction of our onboarding processes, which may include
              verification of your identity and additional information we may
              request from time-to-time. The information we request may include,
              without limitation, personally identifiable information such as
              network address, name, email, address, telephone number, date of
              birth, taxpayer identification or social security number, official
              government-issued photo identification, and bank account
              information or other information we may reasonably deem helpful in
              satisfying our risk management or legal obligations. In providing
              this information to us you represent that it is accurate and agree
              to update your information promptly, but in no event later than 14
              days following any change in your information. Failure to provide
              information or update it promptly may result in Services or funds
              being unavailable to you.
            </p>
            <p className="text-gray-50 text-xl">
              Any and all communications from Empire Of Sight may be provided to
              you via electronic mail at the address you provided when accessing
              the Services. Empire Of Sight shall not be responsible for any
              harm you may suffer as a result of your failure to receive any
              notice provided to you in connection with your use of Services so
              long as such notice is provided to such email address. Empire Of
              Sight may also communicate with you through other methods,
              including via telephone call, instant messaging or chat
              applications either operated by Empire Of Sight or a third party.
            </p>
            <p className="text-gray-50 text-xl">
              We may close, terminate, enable or disable any or all of the
              Services, or your access to the Services at any time and for any
              reason.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              2. Non-Custodial Nature of Empire Of Sight Services
            </p>
            <p className="text-gray-50 text-xl">
              Empire Of Sight does not facilitate or provide brokerage,
              exchange, payment, escrow, remittance or merchant services.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              3. Disclaimer
            </p>
            <p className="text-gray-50 text-xl">
              Empire Of Sight DISCLAIMS ANY AND ALL PROMISES, REPRESENTATIONS
              AND WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING,
              BUT NOT LIMITED TO, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE, DATA ACCURACY, SYSTEM INTEGRATION, TITLE,
              NON-INFRINGEMENT AND/OR QUIET ENJOYMENT, AND ANY SERVICES PROVIDED
              BY Empire Of Sight ARE PROVIDED “AS IS” AND “AS AVAILABLE.” EXCEPT
              AS EXPRESSLY PROVIDED HEREIN, YOU ACKNOWLEDGE THAT Empire Of Sight
              MAKES NO WARRANTIES UNDER THIS AGREEMENT DIRECTLY FOR THE BENEFIT
              OF ANY END USER, AND THAT Empire Of Sight’S OBLIGATIONS UNDER THIS
              AGREEMENT ARE FOR THE BENEFIT OF YOU ONLY, AND NOT FOR THE BENEFIT
              OF ANY OTHER PERSON. IN ENTERING INTO THIS AGREEMENT, YOU
              REPRESENT THAT YOU HAVE NOT RELIED UPON ANY REPRESENTATION OR
              WARRANTY OF Empire Of Sight OR ITS AFFILIATES EXCEPT AS EXPRESSLY
              SET FORTH IN THIS AGREEMENT. WE DO NOT MAKE ANY REPRESENTATIONS OR
              WARRANTIES THAT ACCESS TO THE SERVICES SHALL BE CONTINUOUS,
              UNINTERRUPTED, TIMELY, OR ERROR-FREE.
            </p>
            <p className="text-gray-50 text-xl">
              You understand that we cannot and do not guarantee or warrant that
              files available for downloading from the Site will be free of
              viruses or other destructive code. You are responsible for
              implementing sufficient procedures and checkpoints to satisfy your
              particular requirements for anti-virus protection and accuracy of
              data input and output, and for maintaining a means external to our
              site for any reconstruction of any lost data.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              4. Risk of Digital Assets and Decentralized Networks
            </p>
            <p className="text-gray-50 text-xl">
              Please note that all transactions involving digital assets. You
              should therefore carefully consider whether using our Services is
              suitable for you in light of your financial condition. In
              considering whether to hold digital assets, you should be aware
              that the price or value of digital assets can change rapidly,
              decrease, and potentially even fall to zero. Past performance is
              not an indicator of future performance. You acknowledge that we
              are not responsible for any loss of your digital asset resulting
              from theft, loss, or mishandling of digital asset private keys
              outside our control.
            </p>
            <p className="text-gray-50 text-xl">
              We are not responsible for any digital asset market and we make no
              representations or warranties concerning the real or perceived
              value of digital assets as denominated in any quoted currency.
              Although we may provide historical and/or real-time data regarding
              the price of digital assets, we make no representations regarding
              the quality, suitability, truth, usefulness, accuracy, or
              completeness of such data, and you should not rely on such data
              for any reason whatsoever. You understand and agree that the value
              of digital assets can be volatile, and we are not in any way
              responsible or liable for any losses you may incur by using or
              transferring digital assets in connection with our Services.
            </p>
            <p className="text-gray-50 text-xl">
              We do not provide investment advice and any content contained on
              the Site should not be considered as a substitute for tailored
              investment advice. The contents of our Site and the Services
              should not be used as a basis for making investment decisions.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              5. Accuracy of Information and Third Party Content.
            </p>
            <p className="text-gray-50 text-xl">
              We endeavor to verify the accuracy of any information displayed,
              supplied, passing through or originating from the Services, but
              such information may not always be accurate or current.
              Accordingly, you should independently verify all information
              before relying on it, and any decisions or actions taken based
              upon such information are your sole responsibility.
            </p>
            <p className="text-gray-50 text-xl">
              We make no representation or warranty of any kind, express or
              implied, statutory or otherwise, regarding the contents of the
              Services, information and functions made accessible through the
              Services, any hyperlinks to third party websites, or the security
              associated with the transmission of information through the
              Services, or any website linked to the Services.
            </p>
            <p className="text-gray-50 text-xl">
              In using the Services, you may view content or services provided
              by third parties, including links to web pages and services of
              such parties (“Third Party Content”). We do not control, endorse
              or adopt any Third Party Content and have no responsibility for
              Third Party Content, including, without limitation, material that
              may be misleading, incomplete, erroneous, offensive, indecent or
              otherwise objectionable in your jurisdiction. In addition, your
              dealings or correspondence with such third parties are solely
              between you and the third party. We are not responsible or liable
              for any loss or damage of any sort incurred as a result of any
              such dealings and your use of Third Party Content is at your own
              risk.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              6. User Contributions
            </p>
            <p className="text-gray-50 text-xl">
              You represent and warrant that you own or control all rights in
              and to any content including, without limitation, all data you
              input into the Site or Services.
            </p>
            <p className="text-gray-50 text-xl">
              You understand and acknowledge that you are responsible for any
              data you submit to the Site or Services, and you, not Empire Of
              Sight, have full responsibility for such content, including its
              legality, reliability, accuracy, and appropriateness.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              7. Limitation of Liability
            </p>
            <p className="text-gray-50 text-xl">
              IN NO EVENT SHALL Empire Of Sight, ITS AFFILIATES AND SERVICE
              PROVIDERS, OR ANY OF THEIR RESPECTIVE OFFICERS, DIRECTORS, AGENTS,
              EMPLOYEES OR REPRESENTATIVES, BE LIABLE FOR ANY LOST PROFITS OR
              ANY SPECIAL, INCIDENTAL, INDIRECT, INTANGIBLE, OR CONSEQUENTIAL
              DAMAGES, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT
              LIABILITY, OR OTHERWISE, ARISING OUT OF OR IN CONNECTION WITH
              AUTHORIZED OR UNAUTHORIZED USE OF THE SITE, SERVICES, OR THIS
              AGREEMENT, EVEN IF AN AUTHORIZED REPRESENTATIVE OF Empire Of Sight
              HAS BEEN ADVISED OF, KNEW OF, OR SHOULD HAVE KNOWN OF THE
              POSSIBILITY OF SUCH DAMAGES. FOR EXAMPLE (AND WITHOUT LIMITING THE
              SCOPE OF THE PRECEDING SENTENCE), YOU MAY NOT RECOVER FOR LOST
              PROFITS, LOST BUSINESS OPPORTUNITIES, OR OTHER TYPES OF SPECIAL,
              INCIDENTAL, INDIRECT, INTANGIBLE, OR CONSEQUENTIAL DAMAGES. SOME
              JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
              INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION MAY
              NOT APPLY TO YOU.
            </p>
            <p className="text-gray-50 text-xl">
              UNDER NO CIRCUMSTANCES SHALL WE BE REQUIRED TO DELIVER TO YOU ANY
              VIRTUAL CURRENCY AS DAMAGES, MAKE SPECIFIC PERFORMANCE OR ANY
              OTHER REMEDY. IF YOU WOULD BASE YOUR CALCULATIONS OF DAMAGES IN
              ANY WAY ON THE VALUE OF VIRTUAL CURRENCY, YOU AND WE AGREE THAT
              THE CALCULATION SHALL BE BASED ON THE LOWEST VALUE OF THE VIRTUAL
              CURRENCY DURING THE PERIOD BETWEEN THE ACCRUAL OF THE CLAIM AND
              THE AWARD OF DAMAGES.
            </p>
            <p className="text-gray-50 text-xl">
              Empire Of Sight SHALL NOT BE LIABLE FOR ANY DAMAGES CAUSED IN
              WHOLE OR IN PART BY (A) UNSUPPORTED SOFTWARE OR HARDWARE; (B) THE
              MALFUNCTION, UNEXPECTED FUNCTION OR UNINTENDED FUNCTION OF ANY
              COMPUTER OR CRYPTOCURRENCY NETWORK, INCLUDING WITHOUT LIMITATION
              LOSSES ASSOCIATED WITH NETWORK FORKS, REPLAY ATTACKS, DOUBLE-SPEND
              ATTACKS, SYBIL ATTACKS, 51% ATTACKS, GOVERNANCE DISPUTES, MINING
              DIFFICULTY, CHANGES IN CRYPTOGRAPHY OR CONSENSUS RULES, HACKING OR
              CYBERSECURITY BREACHES; (C) THE CHANGE IN VALUE OF ANY DIGITAL
              ASSET; (D) ANY CHANGE IN LAW, REGULATION OR POLICY, OR (E) FORCE
              MAJEURE EVENT. THIS LIMITATION OF LIABILITY IS INTENDED TO APPLY
              WITHOUT REGARD TO WHETHER OTHER PROVISIONS OF THIS AGREEMENT HAVE
              BEEN BREACHED OR HAVE PROVEN INEFFECTIVE.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              8. Intellectual Property
            </p>
            <p className="text-gray-50 text-xl">
              Unless otherwise indicated by us, all intellectual property rights
              and any content provided in connection with the Site or the
              Services, are the property of Empire Of Sight or our licensors or
              suppliers and are protected by applicable intellectual property
              laws. We do not give any implied license for the use of the
              contents of the Site or the Services.
            </p>
            <p className="text-gray-50 text-xl">
              You accept and acknowledge that the material and content contained
              in or delivered by the Site or the Services is made available for
              your personal, lawful, non-commercial use only and that you may
              only use such material and content for the purpose of using the
              Site or the Services as set forth in this agreement.
            </p>
            <p className="text-gray-50 text-xl">
              You further acknowledge that any other use of content from the
              Site or the Services is strictly prohibited and you agree not to
              infringe or enable others to infringe our intellectual property
              rights. You agree to retain all copyrighted and other proprietary
              notices contained in the materials provided via the Site or the
              Services on any copy you make of the material but failing to do so
              shall not prejudice Empire Of Sight’s intellectual property rights
              therein.
            </p>
            <p className="text-gray-50 text-xl">
              You may not sell or modify materials derived or created from the
              Site or the Services or reproduce, display, publicly perform,
              distribute or otherwise use the materials in any way for any
              public or commercial purpose. Your use of such materials on any
              other website or on a file-sharing or similar service for any
              purpose is strictly prohibited. You may not copy any material or
              content derived or created from the Site or the Services without
              our express, written permission.
            </p>
            <p className="text-gray-50 text-xl">
              Any rights not expressly granted herein to use the materials
              contained on or through the Site or the Services are reserved by
              Empire Of Sight in full.
            </p>
            <p className="text-gray-50 text-xl">
              We respect the intellectual property of others. If you believe
              that your intellectual property rights are being infringed, please
              email at business@empireofsight.com.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              9. Indemnification
            </p>
            <p className="text-gray-50 text-xl">
              You agree to indemnify and hold harmless Empire Of Sight, its
              affiliates, subsidiaries, directors, managers, members, officers,
              and employees from any and all claims, demands, actions, damages,
              losses, costs or expenses, including without limitation,
              reasonable legal fees, arising out of or relating to your or any
              other person’s use of your credentials or User Account in
              connection with: (a) use of the Site or Services; (b) breach of
              these Terms of Use or any other policy; (c) feedback or
              submissions you provide; (d) false, incomplete, or misleading
              information relied upon by us to verify your identity and source
              of funds, where applicable; or (e) violation of any rights of any
              other person or entity; provided however, that you shall not
              indemnify Empire Of Sight for claims or losses arising out of
              Empire Of Sight’s gross negligence or willful misconduct. This
              indemnity shall apply to your successors and assigns and shall
              survive any termination or cancellation of this agreement.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              10. Governing Law, Legal Disputes, and Jurisdiction
            </p>
            <p className="text-gray-50 text-xl">
              All matters relating to the Website and these Terms of Use and any
              dispute or claim arising therefrom or related thereto (in each
              case, including non-contractual disputes or claims), shall be
              governed by and construed in accordance with the laws of
              [Country]. For litigation arising from this Agreement, the Parties
              submit to the exclusive jurisdiction of the arbitration in
              [Country]. Furthermore, if any arbitration is necessary to enforce
              the terms of this Agreement, the prevailing party will be entitled
              to reasonable attorneys' fees and costs.
            </p>
            <p className="text-gray-50 text-xl">
              EXCEPT WHERE PROHIBITED BY APPLICABLE LAW, YOU AGREE THAT ANY
              CLAIM YOU MAY HAVE AGAINST US SHALL BE BROUGHT INDIVIDUALLY AND
              YOU SHALL NOT JOIN SUCH CLAIM WITH CLAIMS OF ANY OTHER PERSON OR
              ENTITY OR BRING, JOIN, OR PARTICIPATE IN A CLASS ACTION AGAINST
              US. YOU FURTHER AGREE TO EXPRESSLY WAIVE YOUR RIGHT TO A TRIAL BY
              JURY.
            </p>
            <p className="text-gray-50 text-xl">
              ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR
              RELATING TO THESE TERMS OF USE OR THE SERVICES OR SITE MUST BE
              COMMENCED WITHIN ONE YEAR AFTER THE CAUSE OF ACTION ACCRUES,
              OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              11. Confidential Information
            </p>
            <p className="text-gray-50 text-xl">
              Definition. Each party to these Terms (a “Receiving Party”) may
              have access to, or become acquainted with, certain non-public
              confidential information of the other party (a “Disclosing Party”)
              including without limitation all information clearly identified as
              confidential at the time of disclosure (“Confidential
              Information”). You and Empire Of Sight further agree that, subject
              to the rights and licenses granted herein, each party's
              Confidential Information shall include all non-public information
              regarding the Disclosing party, including without limitation any
              customer, customer prospect, the terms, conditions and pricing set
              forth in any agreement and its Order Form(s), marketing,
              technical, business and/or strategic plans or information provided
              by the Disclosing Party to the Receiving party in the performance
              of the Services under the Agreement.
            </p>
            <p className="text-gray-50 text-xl">
              Use and Disclosure. Each party agrees as follows: (a) to use the
              Confidential Information of the Disclosing Party only for the
              purposes permitted by the Agreement, or as otherwise permitted by
              the Agreement; (b) to take all reasonable steps to ensure that the
              Disclosing Party’s Confidential Information is not disclosed or
              distributed by the Receiving Party’s employees or agents in
              violation of the Agreement, but in no event will either party use
              less effort to protect the Confidential Information of the
              Disclosing Party than it uses to protect its own Confidential
              Information of like importance; (c) to restrict access to the
              Confidential Information disclosed by the Disclosing Party to such
              of the Receiving Party’s employees, agents and third parties, if
              any, who have a need to have access and who have been advised of
              and have agreed in writing or are otherwise bound to treat such
              information in accordance with the Agreement; and (d) to return or
              destroy all Confidential Information of the Disclosing Party’s
              written request, after termination of the Agreement. The Receiving
              Party will not be obligated under this confidentiality section
              with respect to information that: (a) is or has become readily
              publicly available through no act or omission of the Receiving
              Party or its employees or agents; (b) is received from a third
              party lawfully in possession of such information and the Receiving
              Party has no knowledge of any disclosure restrictions on such
              third party to disclose such information; (c) is disclosed to a
              third party by the Disclosing Party without restriction on
              disclosure; (d) was rightfully in the possession of the Receiving
              Party without restriction prior to its disclosure by the
              Disclosing Party; or (e) was independently developed by employees
              or consultants of the Receiving Party without reliance on, or
              reference to, such Confidential Information.
            </p>
            <p className="text-gray-50 text-xl">
              Permitted Disclosures. Notwithstanding the foregoing, Confidential
              Information may be disclosed as required by any governmental
              agency, provided that before disclosing such information the
              Disclosing Party must provide the Receiving Party with sufficient
              advance notice of the agency’s request for the information to
              enable the Receiving Party to exercise any rights it may have to
              challenge or limit the agency’s authority to receive such
              Confidential Information, to the extent permitted by applicable
              law.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              12. Miscellaneous
            </p>
            <p className="text-gray-50 text-xl">
              Force Majeure. If by reason in whole or in part of any Force
              Majeure Event, either you or Empire Of Sight is delayed or
              prevented from complying with these Terms of Use, then such delay
              or non-compliance shall not be deemed to be a breach and no loss
              or damage shall be claimed by you or Empire Of Sight by reason
              thereof. “Force Majeure Event” means any event beyond the party’s
              reasonable control, including, but not limited to, flood,
              extraordinary weather conditions, earthquake, or other act of God,
              fire, war, insurrection, riot, labor dispute, accident, action of
              government, communications, power failure, failure in bank
              performance, or equipment or software malfunction including
              network splits or “forks” or unexpected changes in a computer
              network upon which the Services rely.
            </p>
            <p className="text-gray-50 text-xl">
              Taxes. It is your responsibility to determine what, if any, taxes
              apply due to your use of the Services, and it is your
              responsibility to report and remit the correct tax to the
              appropriate tax authority. Empire Of Sight is not responsible for
              determining and will not advise whether taxes apply to your use of
              the Services.
            </p>
            <p className="text-gray-50 text-xl">
              Severability and Reformation. In the event that any provision of
              these Terms of Use is unenforceable under applicable law, the
              validity or enforceability of the remaining provisions will not be
              affected. To the extent any provision of these Terms of Use is
              judicially determined to be unenforceable, a court of competent
              jurisdiction may reform any such provision to make it enforceable.
            </p>
            <p className="text-gray-50 text-xl">
              Waiver. No waiver by Empire Of Sight of any term or condition set
              forth in these Terms of Use shall be deemed a further or
              continuing waiver of such term or condition or a waiver of any
              other term or condition, and any failure of Empire Of Sight to
              assert a right or provision under these Terms of Use shall not
              constitute a waiver of such right or provision.
            </p>
            <p className="text-gray-50 text-xl">
              Assignment. These Terms of Use shall be binding on your
              successors, heirs, personal representatives, and assigns. You may
              not assign or transfer any of your rights or obligations without
              prior written consent of Empire Of Sight, which may be withheld in
              Empire Of Sight’s sole discretion. We may assign rights or
              delegate duties under these Terms of Use in our sole discretion.
            </p>
            <p className="text-gray-50 text-xl">
              Relationship of the Parties. Nothing in this agreement is intended
              to, nor shall create any partnership, joint venture, agency,
              consultancy or trusteeship. You and Empire Of Sight are
              independent contractors for purposes of this agreement.
            </p>
            <p className="text-gray-50 text-xl">
              Contact Information. You may contact us via
              business@empireofsight.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfUse;
