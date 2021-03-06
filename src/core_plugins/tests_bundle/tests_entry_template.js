export default function ({ env, bundle }) {

  const pluginSlug = env.pluginInfo.sort()
    .map(p => ' *  - ' + p)
    .join('\n');

  const requires = bundle.modules
    .map(m => `require(${JSON.stringify(m)});`)
    .join('\n');

  return `
/**
 * Test entry file
 *
 * This is programatically created and updated, do not modify
 *
 * context: ${JSON.stringify(env.context)}
 * includes code from:
${pluginSlug}
 *
 */

window.__KBN__ = {
  version: '1.2.3',
  buildNum: 1234,
  vars: {
    kbnIndex: '.kibana',
    esShardTimeout: 1500,
    esApiVersion: 'master',
    esRequestTimeout: '300000',
    tilemapsConfig: {
      deprecated: {
        isOverridden: false,
        config: {
          options: {
          }
        }
      }
    },
    regionmapsConfig: {
      layers: []
    },
    mapConfig: {
      manifestServiceUrl: 'https://geo.elastic.co/v1/manifest'
    }
  },
  uiSettings: {
    defaults: ${JSON.stringify(env.defaultUiSettings, null, 2).split('\n').join('\n    ')},
    user: {}
  }
};

require('ui/test_harness');
${requires}
require('ui/test_harness').bootstrap(/* go! */);
`;

}
