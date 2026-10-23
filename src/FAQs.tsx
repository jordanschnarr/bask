import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import Text from './Text';

// ── Step 1: the data array goes HERE, outside the function ──
const faqs = [
  {
    question: 'What types of properties does BASK Property Management manage?',
    answer:
      'BASK specializes in retail shopping centers, strip centers, and multi-tenant retail properties.',
  },
  {
    question: 'Where does BASK provide property management services?',
    answer:
      'We focus on Northern New Jersey, working with commercial property owners and investors throughout the region.',
  },
  {
    question: 'What property management services do you offer?',
    answer:
      'Our services include property operations, financial management, maintenance coordination, tenant and lease administration, and capital planning.',
  },
  {
    question: 'Who can benefit from your services?',
    answer:
      'Our services are designed for property owners, real estate investors, and ownership groups seeking professional commercial property management.',
  },
  {
    question: 'Can BASK manage a single property?',
    answer:
      'Yes. We welcome inquiries from owners of individual retail properties as well as multi-property portfolios.',
  },
  {
    question: 'How can I transition to BASK from my current property manager?',
    answer:
      "We can discuss your property's needs, review the transition process, and coordinate next steps in accordance with your existing management agreement.",
  },
  {
    question: 'How do you help maintain property value?',
    answer:
      'We focus on proactive maintenance, expense oversight, operational efficiency, and long-term property planning.',
  },
  {
    question: 'How can I request a property management consultation?',
    answer:
      'Contact us through our website or reach out directly to discuss your property and management needs.',
  },
];

// ── the component uses that array ──
function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />


      <Accordion>
        {faqs.map((faq, i) => (
          <AccordionItem key={i} title={faq.question} labelSize="body">
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default FAQ;
