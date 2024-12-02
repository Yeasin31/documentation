import { getGuideDirectory, simpleLink } from './../helpers';

const workflows = () => {
  return {
    link: '/pantheon-workflow',
    title: 'Development Workflows',
    children: [
      // TODO: Report for Submenus and children lists that do not start with a sublink
      simpleLink('/pantheon-workflow', 'Deployment Pipeline on Pantheon', [
        simpleLink('/pantheon-workflow', 'Pantheon Workflow'),
        getGuideDirectory('guides/multidev'),
        getGuideDirectory('guides/environment-configuration'),
        simpleLink('/connection-modes', 'Connection Modes'),
        getGuideDirectory('guides/sftp', 'SFTP'),
        //Todo: relocate hotfixes into git guide
        getGuideDirectory('guides/git', 'Git'),

        simpleLink('/hotfixes', 'Hotfixes'),
        simpleLink('/core-updates', 'Core Updates'),
        simpleLink('/workflow-logs', 'Workflow Logs'),
        simpleLink('/content-staging', 'Content Staging'),
      ]),
      simpleLink('/guides/integrated-composer', 'Integrated Composer', [
        getGuideDirectory(
          'guides/integrated-composer',
          'Using Integrated Composer',
        ),
        // "a Standard Drupal Site" is now an out of date phrase.
        simpleLink('/composer-convert', 'Convert to Integrated Composer'),
        simpleLink(
          '/composer-convert-from-empty',
          'Convert from an Empty Repository',
        ),
        simpleLink(
          '/upgrade-drupal-with-ic-to-latest',
          'Upgrade a Drupal Site',
        ),
      ]),
      // This page is pretty short given the size of the topic.
      simpleLink('/continuous-integration', 'Continuous Integration', [
        simpleLink('/continuous-integration', 'CI Solutions'),
        getGuideDirectory('guides/build-tools', 'Build Tools'),
        simpleLink('/deploybot', 'DeployBot'),
        simpleLink('/jenkins', 'Jenkins'),
        simpleLink('/behat', 'Behat Testing'),
      ]),
      getGuideDirectory('guides/quicksilver', 'Quicksilver Workflow Hooks'),
      getGuideDirectory('guides/backups'),
      // Maybe make this a separate category for local development
      getGuideDirectory('guides/local-development', 'Local Development'),
    ],
  };
};

export default workflows;
