import Section from './Section';
//import Text from './Text';
import Banner from './Banner';
import Grid from './Grid';
import Column from './Column';
import Card from './Card';
import FAQ from './FAQs';
import Divider from './Divider';

function Home() {
  return (
    <>
    <title>BASK Property Management | Northern NJ Retail</title>
      <meta
        name="description"
        content="BASK Property Management provides professional retail shopping center and strip center management services throughout Northern New Jersey."
      />
      <Banner
        title="Your Property. Our Priority."
        titleVariant="h1"
        subtitle="Professional retail property management with the accountability, attention, and financial discipline owners deserve."
        buttonLabel="See our services"
        buttonVariant="primary"
        colorScheme="accent5"
        buttonHref="#OurServices"
        container="fill"
        sectionColorScheme="primary"
        image="/Images/Commercial-Building.webp"
        imageAlt="A modern two-story office building in Eagle, ID, captured at sunset with a clear blue sky.        "
        imageRatio="5-3"
        imageTabletRatio="21-9"
        imageDesktopRatio="5-3"
        imageObjectFit="cover"
        mediaPosition="background"
        overlay="50"
        backgroundBlur="none"
      ></Banner>
      <Banner
        title="A Better Approach to Property Management"
        titleVariant="h2"
        description={
          'At BASK Property Management, we believe effective property management is built on accountability, proactive oversight, and strong relationships. \nSpecializing in retail shopping centers and strip centers throughout Northern New Jersey, we work closely with property owners to oversee daily operations, manage expenses, coordinate maintenance, and support the long-term performance of their investments.\nWe understand that every property has unique needs and every owner has different priorities. Our approach is tailored to each asset, combining hands-on management with thoughtful financial oversight and responsive communication.'
        }
        buttonLabel="See our services"
        buttonVariant="primary"
        colorScheme="accent2"
        buttonHref="#OurServices"
        container="hug"
        sectionColorScheme="primary"
        image="/Images/Building-Illustration.png"
        imageAlt="buildings"
        imageRatio="1-1"
        imageTabletRatio="1-1"
        imageDesktopRatio="1-1"
        imageObjectFit="cover"
        mediaPosition="right"
        mediaContainer="hug"
        id="About"
        eyebrow="| About"
      ></Banner>
      
      <Section
        colorScheme="accent2"
        showIntro="true"
        layout="top"
        titleVariant="h2"
        title="Comprehensive Retail Property Management."
        description="BASK Property Management provides tailored management solutions for retail shopping centers and strip centers across Northern New Jersey. We help owners navigate the operational and financial demands of commercial real estate while keeping their property's long-term performance in focus."
        id="OurServices"
        eyebrow="| Our Services"
      >
        <Grid mobileColumns="1" tabletColumns="2" desktopColumns="3">
          <Column>
            <Card
              colorScheme=""
              borderColor="none"
              title="Property Operations"
              description="Daily oversight, inspections, and vendor coordination."
              image="/Images/Property-Operations.png"
              imageAlt="Property Operations"
              imageRatio="1-1"
              imageTabletRatio="1-1"
              imageDesktopRatio="1-1"
              imageObjectFit="contain"
              mobileMediaPosition="left"
              tabletMediaPosition="top"
              desktopMediaPosition="top"
              mediaContainer="hug"
              backgroundOn="true"
              imageSize="large"
              imageRadius="false"
              textAlignment="center"
            ></Card>
          </Column>
          <Column>
            <Card
              colorScheme=""
              title="Financial Management"
              description="Budgeting, expense tracking, and financial reporting."
              image="/Images/Financial-Management.png"
              imageAlt="Property Operations"
              imageRatio="1-1"
              imageTabletRatio="1-1"
              imageDesktopRatio="1-1"
              imageObjectFit="contain"
              mobileMediaPosition="left"
              tabletMediaPosition="top"
              desktopMediaPosition="top"
              mediaContainer="hug"
              backgroundOn="true"
              imageSize="large"
              imageRadius="false"
              textAlignment="center"
            ></Card>
          </Column>
          <Column>
            <Card
              colorScheme=""
              title="Maintenance and Vendor Management"
              description="Preventive maintenance, repairs, and contractor oversight."
              image="/Images/Maintenance.png"
              imageAlt="Property Operations"
              imageRatio="1-1"
              imageTabletRatio="1-1"
              imageDesktopRatio="1-1"
              imageObjectFit="contain"
              mobileMediaPosition="left"
              tabletMediaPosition="top"
              desktopMediaPosition="top"
              mediaContainer="hug"
              backgroundOn="true"
              imageSize="large"
              imageRadius="false"
              textAlignment="center"
            ></Card>
          </Column>
          <Column>
            <Card
              colorScheme=""
              title="Tenant and Lease Administration"
              description="Tenant relations, lease tracking, and compliance."
              image="/Images/Tenenant-Lease-Administration.png"
              imageAlt="Property Operations"
              imageRatio="1-1"
              imageTabletRatio="1-1"
              imageDesktopRatio="1-1"
              imageObjectFit="contain"
              mobileMediaPosition="left"
              tabletMediaPosition="top"
              desktopMediaPosition="top"
              mediaContainer="hug"
              backgroundOn="true"
              imageSize="large"
              imageRadius="false"
              textAlignment="center"
            ></Card>
          </Column>
          <Column>
            <Card
              colorScheme=""
              title="Capital Planning and Asset Support"
              description="Capital improvements, property assessments, and asset preservation."
              image="/Images/Capital-Planning.png"
              imageAlt="Property Operations"
              imageRatio="1-1"
              imageTabletRatio="1-1"
              imageDesktopRatio="1-1"
              imageObjectFit="contain"
              mobileMediaPosition="left"
              tabletMediaPosition="top"
              desktopMediaPosition="top"
              mediaContainer="hug"
              backgroundOn="true"
              imageSize="large"
              imageRadius="false"
              textAlignment="center"
            ></Card>
          </Column>
        </Grid>
      </Section>
      <Divider type="section" sectionColorScheme="accent2"/>
      <Banner
        title="A management approach built around your property"
        titleVariant="h2"
        description={
          "No two retail centers operate the same way. BASK works with owners to understand their property's needs, establish priorities, and coordinate a management approach that aligns with their investment objectives. \nWhether you own a single neighborhood shopping center or a portfolio of retail properties, our focus is on dependable execution, clear communication, and responsible oversight."
        }
        colorScheme="accent2"
        container="fill"
        sectionColorScheme="accent5"
      ></Banner>


      <Section
        colorScheme="accent5"
        showIntro="true"
        layout="top"
        titleVariant="h2"
        title="Let's Talk About Your Property."
        description="Whether you're evaluating a new management partner, looking to improve day-to-day operations, or seeking greater visibility into your property's expenses, BASK Property Management is ready to start the conversation. We welcome inquiries from commercial property owners and investors throughout Northern New Jersey."
        id="Contact"
        buttonLabel="Contact Us"
        buttonHref="mailto:art@baskmgt.com"
        buttonAriaLabel="Contact BASK Property Management"
        eyebrow="| Contact"
      >
        <Grid mobileColumns="1" tabletColumns="2" desktopColumns="3">
          {/*--Column--*/}
          <Column>
            <Card
              colorScheme="accent3"
              title="Start a Conversation"
              description="Tell us about your property, your current management needs, and what you're looking to accomplish."
              backgroundOn="true"
              textAlignment="left"
            ></Card>
          </Column>
          {/*--Column--*/}
          <Column>
            <Card
              colorScheme="accent3"
              title="Our Service Area"
              description="Tell us about your property, your current management needs, and what you're looking to accomplish."
              backgroundOn="true"
              textAlignment="left"
            ></Card>
          </Column>
          {/*--Column--*/}
          <Column>
            <Card
              colorScheme="accent3"
              title="A Professional, Personal Approach"
              description="We aim to understand your objectives and determine whether BASK is the right management partner for your property."
              backgroundOn="true"
              textAlignment="left"
            ></Card>
          </Column>
        </Grid>
      </Section>
      <Section
        colorScheme=""
        showIntro="true"
        layout="top"
        titleVariant="h2"
        title="Frequently Asked Questions"
        id="FAQs"
        eyebrow="| FAQs"
      >
        <FAQ />
      </Section>
    </>
  );
}

export default Home;
