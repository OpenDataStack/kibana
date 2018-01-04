# Kibana 6.0.0

Kibana is your window into the [Elastic Stack](https://www.elastic.co/products). Specifically, it's
an open source ([Apache Licensed](LICENSE.md)), browser-based analytics and search dashboard for Elasticsearch.

The original README is at the [main Kibana
repo](https://github.com/elastic/kibana/blob/master/README.md). This fork
provides the same base product with some patches applied to:

* Change some build configuration.
* Drop Management link.

```sh
# Install all the dependencies.
$ npm install

# Run the Kibana server in production mode.
$ npm run start

# Run the Kibana server in dev mode.
$ npm run dev

# Run the automated tests. Currently this should fail on some management tab tests.
$ npm run test

# Build a .tar.gz package.
$ time npm run build -- --skip-os-packages --release
```
