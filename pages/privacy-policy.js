import Image from "next/image";
import Head from "next/head";

import { useContext, useEffect } from "react";
import { EOSContext } from "../contexts/EOSContext";

const PrivacyPolicy = () => {
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
        <title>Privacy Policy | Empire Of Sight</title>
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
                PRIVACY POLICY
              </h1>
            </div>
            <p className="defaultText" data-aos="fade-down">
              This privacy policy applies between you, the User of this Website
              and Empire Of Sight, the owner and provider of this Website.
              Empire Of Sight takes the privacy of your information very
              seriously. This privacy policy applies to our use of any and all
              Data collected by us or provided by you in relation to your use of
              the Website. This privacy policy should be read alongside, and in
              addition to, our Terms Of Use, which can be found at:
              empireofsight.com/terms-of-use. Please read this privacy policy
              carefully.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              I. The Rights of Users and Data Subjects
            </p>
            <p className="text-gray-50 text-xl">
              With regard to the data processing to be described in more detail
              below, users and data subjects have the right
            </p>
            <ul className="list-disc text-gray-50 text-xl">
              <li>
                to confirmation of whether data concerning them is being
                processed, information about the data being processed, further
                information about the nature of the data processing, and copies
                of the data (cf. also Art. 15 GDPR);
              </li>
              <li>
                to correct or complete incorrect or incomplete data (cf. also
                Art. 16 GDPR);
              </li>
              <li>
                to the immediate deletion of data concerning them (cf. also Art.
                17 GDPR), or, alternatively, if further processing is necessary
                as stipulated in Art. 17 Para. 3 GDPR, to restrict said
                processing per Art. 18 GDPR;
              </li>
              <li>
                to receive copies of the data concerning them and/or provided by
                them and to have the same transmitted to other
                providers/controllers (cf. also Art. 20 GDPR);
              </li>
              <li>
                to file complaints with the supervisory authority if they
                believe that data concerning them is being processed by the
                controller in breach of data protection provisions (see also
                Art. 77 GDPR).
              </li>
            </ul>
            <p className="text-gray-50 text-xl">
              In addition, the controller is obliged to inform all recipients to
              whom it discloses data of any such corrections, deletions, or
              restrictions placed on processing the same per Art. 16, 17 Para.
              1, 18 GDPR. However, this obligation does not apply if such
              notification is impossible or involves a disproportionate effort.
              Nevertheless, users have a right to information about these
              recipients.
            </p>
            <p className="text-gray-50 text-xl">
              Likewise, under Art. 21 GDPR, users and data subjects have the
              right to object to the controller's future processing of their
              data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an
              objection to data processing for the purpose of direct advertising
              is permissible.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              II. Information About the Data Processing
            </p>
            <p className="text-gray-50 text-xl">
              Your data processed when using our website will be deleted or
              blocked as soon as the purpose for its storage ceases to apply,
              provided the deletion of the same is not in breach of any
              statutory storage obligations or unless otherwise stipulated
              below.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">Contact</p>
            <p className="text-gray-50 text-xl">
              If you contact us via email or via Twitter, the data you provide
              will be used for the purpose of processing your request. We must
              have this data in order to process and answer your inquiry;
              otherwise we will not be able to answer it in full or at all. The
              legal basis for this data processing is Art. 6 Para. 1 lit. b)
              GDPR. Your data will be deleted once we have fully answered your
              inquiry and there is no further legal obligation to store your
              data, such as if an order or contract resulted therefrom.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              Google Analytics
            </p>
            <p className="text-gray-50 text-xl">
              We use Google Analytics on our website. This is a web analytics
              service provided by Google Inc., 1600 Amphitheatre Parkway,
              Mountain View, CA 94043 (hereinafter: Google). Through
              certification according to the EU-US Privacy Shield Google
              guarantees that it will follow the EU's data protection
              regulations when processing data in the United States.
            </p>
            <p className="text-gray-50 text-xl">
              The Google Analytics service is used to analyze how our website is
              used. The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our
              legitimate interest lies in the analysis, optimization, and
              economic operation of our site. Usage and user-related
              information, such as IP address, place, time, or frequency of your
              visits to our website will be transmitted to a Google server in
              the United States and stored there. However, we use Google
              Analytics with the so-called anonymization function, whereby
              Google truncates the IP address within the EU or the EEA before it
              is transmitted to the US.
            </p>
            <p className="text-gray-50 text-xl">
              The data collected in this way is in turn used by Google to
              provide us with an evaluation of visits to our website and what
              visitors do once there. This data can also be used to provide
              other services related to the use of our website and of the
              internet in general. Google states that it will not connect your
              IP address to other data. In addition, Google provides further
              information with regard to its data protection practices,
              including options you can exercise to prevent such use of your
              data. In addition, Google offers an opt-out add-on in addition
              with further information. This add-on can be installed on the most
              popular browsers and offers you further control over the data that
              Google collects when you visit our website. The add-on informs
              Google Analytics' JavaScript (ga.js) that no information about the
              website visit should be transmitted to Google Analytics. However,
              this does not prevent information from being transmitted to us or
              to other web analytics services we may use as detailed herein.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              Google reCAPTCHA
            </p>
            <p className="text-gray-50 text-xl">
              Our website uses Google reCAPTCHA to check and prevent automated
              servers ("bots") from accessing and interacting with our website.
              This is a service provided by Google Inc., 1600 Amphitheatre
              Parkway, Mountain View, CA 94043 (hereinafter: Google).
            </p>
            <p className="text-gray-50 text-xl">
              Through certification according to the EU-US Privacy Shield Google
              guarantees that it will follow the EU's data protection
              regulations when processing data in the United States.
            </p>
            <p className="text-gray-50 text-xl">
              This service allows Google to determine from which website your
              request has been sent and from which IP address the reCAPTCHA
              input box has been used. In addition to your IP address, Google
              may collect other information necessary to provide and guarantee
              this service.
            </p>
            <p className="text-gray-50 text-xl">
              The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate
              interest lies in the security of our website and in the prevention
              of unwanted, automated access in the form of spam or similar.
            </p>
            <p className="text-gray-50 text-xl">
              Google offers detailed information concerning the general handling
              of your user data.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">Google Fonts</p>
            <p className="text-gray-50 text-xl">
              Our website uses Google Fonts to display external fonts. This is a
              service provided by Google Inc., 1600 Amphitheatre Parkway,
              Mountain View, CA 94043 (hereinafter: Google).
            </p>
            <p className="text-gray-50 text-xl">
              Through certification according to the EU-US Privacy Shield Google
              guarantees that it will follow the EU's data protection
              regulations when processing data in the United States.
            </p>
            <p className="text-gray-50 text-xl">
              To enable the display of certain fonts on our website, a
              connection to the Google server in the USA is established whenever
              our website is accessed.
            </p>
            <p className="text-gray-50 text-xl">
              The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate
              interest lies in the optimization and economic operation of our
              site.
            </p>
            <p className="text-gray-50 text-xl">
              When you access our site, a connection to Google is established
              from which Google can identify the site from which your request
              has been sent and to which IP address the fonts are being
              transmitted for display.
            </p>
            <p className="text-gray-50 text-xl">
              Google offers detailed information in their ad settings and in
              their privacy policy, in particular on options for preventing the
              use of data.
            </p>
            <p className="font-extrabold text-gray-50 text-2xl">
              Changes to This Privacy Policy
            </p>
            <p className="text-gray-50 text-xl">
              We may change this Privacy Policy from time to time. If we do, we
              will let you know by revising the date at the bottom of the
              policy. If we make a change to this policy that, in our sole
              discretion, is material, we will provide you with additional
              notice per email. We encourage you to review the Privacy Policy
              whenever you access or use our Services or otherwise interact with
              us to stay informed about our information practices and the ways
              you can help protect your privacy. By continuing to use our
              Services after Privacy Policy changes go into effect, you agree to
              be bound by the revised policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
