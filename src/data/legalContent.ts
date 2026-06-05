export const LEGAL_SECTIONS = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content: [
      'At Styla, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you shop on our platform.',
      'We collect information you provide directly — such as your name, email address, phone number, and delivery address — when you create an account, place an order, or contact us.',
      'We use your data to process orders, improve our services, send promotional offers (with your consent), and comply with legal obligations. We never sell your personal information to third parties.',
      'Your data is stored securely and retained only as long as necessary. You may request access, correction, or deletion of your data by contacting us at support@styla.com.',
    ],
  },
  'terms-of-service': {
    title: 'Terms of Service',
    content: [
      'By accessing and using the Styla website, you agree to be bound by these Terms of Service. Please read them carefully before making a purchase.',
      'All products listed on Styla are subject to availability. We reserve the right to modify prices, descriptions, and product availability at any time without prior notice.',
      'Orders are confirmed once payment is received. Styla reserves the right to cancel orders in cases of pricing errors, stock unavailability, or suspected fraudulent activity.',
      'Returns are accepted within 30 days of delivery for unused items in original packaging. Refunds are processed within 7–10 business days after we receive the returned product.',
      'Styla is not liable for any indirect, incidental, or consequential damages arising from the use of our platform or products purchased through it.',
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    content: [
      'Styla uses cookies and similar technologies to enhance your browsing experience, analyse site traffic, and personalise content.',
      'Essential cookies are required for the website to function — they enable features like shopping cart persistence and secure login sessions.',
      'Analytics cookies help us understand how visitors interact with our site so we can improve layout, product recommendations, and performance.',
      'Marketing cookies may be used to show you relevant offers on other platforms. You can manage or disable cookies through your browser settings at any time.',
      'By continuing to use Styla, you consent to our use of cookies as described in this policy.',
    ],
  },
  'contact-us': {
    title: 'Contact Us',
    content: [
      'We are always happy to hear from you! Whether you have a question about an order, need styling advice, or want to partner with Styla — our team is here to help.',
      'Visit us at: Bilaspur, Chhattisgarh, India.',
      'Call us: +91 987654321 (Mon–Sat, 10 AM – 7 PM IST).',
      'Email us: support@styla.com — we aim to respond within 24 hours.',
      'For order-related queries, please include your order number in the subject line for faster resolution.',
    ],
  },
} as const;

export type LegalSectionId = keyof typeof LEGAL_SECTIONS;
