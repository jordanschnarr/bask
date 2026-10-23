import Text from './Text';
import Banner from './Banner';
import Section from './Section';

function termsOfUse() {
  return (
    <>
      <title>Terms of Use | BASK Property Management</title>
      <meta
        name="description"
        content="Review the BASK Property Management website Terms of Use, including website usage guidelines, disclaimers, and applicable legal terms."
      />
      <Banner
        title="Terms of Use"
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
          Welcome to the website of BASK Property Management (“BASK,” “we,”
          “our,” or “us”). By accessing or using this website, you agree to
          these Terms of Use.
        </Text>
        <Text variant="h2">1. Website Purpose</Text>
        <Text variant="body">
          This website provides general information about BASK Property
          Management and our commercial property management services, including
          services for retail shopping centers and strip centers.
        </Text>
        <Text variant="h2">2. No Professional Advice</Text>
        <Text variant="body">
          The information on this website is provided for general informational
          purposes only and does not constitute legal, financial, tax,
          investment, or other professional advice.
        </Text>
        <Text variant="h2">3. No Client Relationship</Text>
        <Text variant="body">
          Use of this website does not establish a property management,
          brokerage, advisory, or other professional relationship with BASK. Any
          engagement for services must be established through a separate written
          agreement.
        </Text>
        <Text variant="h2">4. Accuracy of Information</Text>
        <Text variant="body">
          We make reasonable efforts to keep website content accurate and
          current but do not guarantee that all information is complete,
          accurate, or up to date. Content may be modified at any time without
          notice.
        </Text>
        <Text variant="h2">5. Permitted Use</Text>
        <Text variant="body">
          Visitors may use this website for lawful, informational purposes.
          Unauthorized access, interference with website operations, malicious
          activity, or unauthorized commercial use of website content is
          prohibited.
        </Text>
        <Text variant="h2">6. Intellectual Property</Text>
        <Text variant="body">
          Unless otherwise indicated, the website's text, graphics, logos,
          design, and other content are owned by BASK Property Management or
          used with permission. Reproduction or commercial use without prior
          written authorization is prohibited, except as permitted by law.
        </Text>
        <Text variant="h2">7. Third-Party Links</Text>
        <Text variant="body">
          This website may contain links to external websites for convenience.
          BASK does not control and is not responsible for the content,
          availability, or practices of third-party websites.
        </Text>
        <Text variant="h2">8. Disclaimer of Warranties</Text>
        <Text variant="body">
          This website and its content are provided on an “as is” and “as
          available” basis to the fullest extent permitted by law. BASK
          disclaims warranties to the extent permitted by applicable law.
        </Text>
        <Text variant="h2">9. Limitation of Liability</Text>
        <Text variant="body">
          To the fullest extent permitted by applicable law, BASK Property
          Management will not be liable for indirect, incidental, consequential,
          or other damages arising from the use of, or inability to use, this
          website. Nothing in these terms excludes liability that cannot
          lawfully be excluded.
        </Text>

        <Text variant="h2">10. Changes to These Terms</Text>
        <Text variant="body">
          BASK may update these Terms of Use at any time. Updates will be posted
          on this page with a revised effective date.
        </Text>
        <Text variant="h2">11. Governing Law</Text>
        <Text variant="body">
          These Terms of Use are governed by the laws of the State of New
          Jersey, except where applicable law requires otherwise.
        </Text>
      </Section>
    </>
  );
}

export default termsOfUse;
