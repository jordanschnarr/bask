import Text from './Text';
import Banner from './Banner';
import Section from './Section';

function Privacy() {
  return (
    <>
        <title>Privacy Policy | BASK Property Management</title>
      <meta
        name="description"
        content="Read the BASK Property Management Privacy Policy to learn about our website privacy practices and approach to protecting visitor privacy."
      />
      <Banner
        title="Privacy Policy"
        titleVariant="h1"
        subtitle=""
        description=""
        colorScheme="accent5"
        buttonHref="OurServices"
        container="fill"
        sectionColorScheme="primary"
        slot="hero"
      ></Banner>

      {/*--Section--*/}

      <Section showIntro="false">
        <Text variant="body">Effective Date: October 22, 2026</Text>
        <Text variant="body">
          BASK Property Management (“BASK,” “we,” “our,” or “us”) respects your
          privacy. This Privacy Policy explains our approach to privacy in
          connection with your use of our website.
        </Text>
        <Text variant="h2">Information Collection</Text>
        <Text variant="body">
          BASK Property Management does not knowingly collect personal
          information directly through this website. The website is intended to
          provide general information about our company and commercial property
          management services.
        </Text>
        <Text variant="h2">Cookies and Tracking Technologies</Text>
        <Text variant="body">
          BASK does not intentionally use this website to collect personal
          information through cookies or tracking technologies. However, our
          website hosting provider or other technical service providers may
          process limited technical information as necessary to operate,
          maintain, and secure the website.
        </Text>
        <Text variant="h2">Third-Party Websites</Text>
        <Text variant="body">
          Our website may contain links to third-party websites. BASK Property
          Management is not responsible for the privacy practices or content of
          those websites. Visitors should review the privacy policies of any
          third-party websites they access.
        </Text>
        <Text variant="h2">Data Security</Text>
        <Text variant="body">
          Although BASK does not knowingly collect personal information directly
          through this website, reasonable measures may be used to maintain
          website security and functionality. No website or electronic
          transmission can be guaranteed to be completely secure.
        </Text>
        <Text variant="h2">Changes to This Policy</Text>
        <Text variant="body">
          We may update this Privacy Policy from time to time. Any updates will
          be posted on this page with a revised effective date.
        </Text>
      </Section>
    </>
  );
}

export default Privacy;
