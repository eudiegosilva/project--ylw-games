import { Story, Meta } from '@storybook/react/types-6-0';
import Footer from '.';

export default {
  title: 'Design System/Footer',
  component: Footer
} as Meta;

export const FooterOnMobile: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
);

FooterOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
};

export const FooterOnDesktop: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
);
