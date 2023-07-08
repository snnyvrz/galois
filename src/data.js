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
        { text: 'Hybrid Exchange', href: '/landing/hybrid-exchange' },
        { text: 'Shared Currency Exchange', href: '/landing/shared-currency-exchange' },
        { text: 'Multi Strategy Wallet', href: '/landing/multi-strategy-wallet' },
        { text: 'Liquidity Aggregator', href: '/landing/liquidity-aggregator' },
        { text: 'Market Making As A Service', href: '/landing/market-making-as-a-service' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#about' },
        { text: 'Contact', href: '#footer' },
        { text: 'Careers', href: '/' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/galoisFoundation' },
  ],
};
