import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Solutions',
      links: [
        {
          text: 'Hybrid Exchange',
          href: getPermalink('/landing/hybrid-exchange'),
        },
        {
          text: 'Shared Currency Exchange',
          href: getPermalink('/landing/shared-currency-exchange'),
        },
        {
          text: 'Multi Strategy Wallet',
          href: getPermalink('/landing/multi-strategy-wallet'),
        },
        {
          text: 'Liquidity Aggregator',
          href: getPermalink('/landing/liquidity-aggregator'),
        },
        { text: 'Market Making As A Service', href: getPermalink('/landing/market-making-as-a-service') },
      ],
    },
    {
      text: 'About',
      href: '#about',
    },
    { text: 'Contact', href: '#footer' },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Contact', href: '#' },
        { text: 'Careers', href: '#' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
};
