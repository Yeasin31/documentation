import { getGuideDirectory, simpleLink } from './../helpers';

const accountManagement = () => {
  return {
    link: '/manage',
    title: 'Account Management',
    children: [
      simpleLink('/guides/account-mgmt'),
      getGuideDirectory('guides/account-mgmt/account'),
      getGuideDirectory('guides/account-mgmt/billing'),
      getGuideDirectory('guides/account-mgmt/plans'),
      getGuideDirectory('guides/account-mgmt/traffic'),
      simpleLink('/agency-tips', 'Agency Tips'),
      simpleLink('/enterprise-billing-center', "Enterprise Billing Center"),
      simpleLink('/tax-exempt-status', "Tax Exempt Status"),
      simpleLink('/resetting-passwords', "Resetting Passwords"),
      simpleLink('/platform-notifications', "Platform Notifications"),
      getGuideDirectory('guides/account-mgmt/workspace-sites-teams'),
      getGuideDirectory('guides/enterprise-billing-center'),
      simpleLink('/ldap-and-ldaps', 'LDAP and LDAPS'),
      getGuideDirectory('guides/sso'),
      getGuideDirectory('guides/wordpress-google-sso', 'WP SAML Auth'),
      // @todo, this page is oddly short.
      simpleLink('/support', 'Support'),
      getGuideDirectory('guides/support', 'Support'),
      getGuideDirectory('guides/professional-services'),

      getGuideDirectory('guides/domains'),
      // @todo, TOC doesn't work on this page. And this page should probably be combined with guides/custom-upstream
      simpleLink('/custom-upstreams', 'Custom Upstreams'),
      getGuideDirectory('guides/custom-upstream'),
      getGuideDirectory('guides/secure-development'),
      simpleLink('/autopilot', 'Autopilot Overview'),
      getGuideDirectory('guides/autopilot', 'Autopilot Guide'),
      getGuideDirectory('guides/autopilot-custom-upstream'),
      simpleLink('/ssh-keys', 'SSH Keys'),
      simpleLink('/billing', 'Billing'),

    ],
  }

};

export default accountManagement;
