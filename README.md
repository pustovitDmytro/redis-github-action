# redis-github-action
Cross platform install for [redis-server](https://redis.io/).

[![CodeFactor][codefactor-badge]][codefactor-url]
[![SonarCloud][sonarcloud-badge]][sonarcloud-url]
[![Codacy][codacy-badge]][codacy-url]
[![Total alerts][lgtm-alerts-badge]][lgtm-alerts-url]
[![Language grade][lgtm-lg-badge]][lgtm-lg-url]
[![Scrutinizer][scrutinizer-badge]][scrutinizer-url]

[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![FOSSA][fossa-badge]][fossa-url]
[![License][badge-lic]][github]

## Table of Contents
  - [Requirements](#requirements)
  - [Usage](#usage)
  - [Contribute](#contribute)

## Requirements
[![Platform Status][node-ver-test-badge]][node-ver-test-url]

To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `>=10`
* npm `>=6`

Package is [continuously tested][node-ver-test-url] on darwin, linux and win32 platforms. All active and maintenance [LTS](https://nodejs.org/en/about/releases/) node releases are supported.

## Usage

```yml
  steps:
      - uses: actions/setup-node@v2
        with:
          node-version: 12
      - uses: actions/checkout@master
      - uses: pustovitDmytro/redis-github-action@v1.0.1

```

See real workflow example in [Lalaps Project](https://github.com/pustovitDmytro/lalaps/blob/master/.github/workflows/npt.yml)

## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions. Read [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

[npm]: https://www.npmjs.com/package/redis-github-action
[github]: https://github.com/pustovitDmytro/redis-github-action
[coveralls]: https://coveralls.io/github/pustovitDmytro/redis-github-action?branch=master
[badge-deps]: https://img.shields.io/librariesio/release/npm/redis-github-action.svg
[badge-vers]: https://img.shields.io/npm/v/redis-github-action.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/redis-github-action.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/redis-github-action/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/redis-github-action?branch=master

[snyk-badge]: https://snyk-widget.herokuapp.com/badge/npm/redis-github-action/badge.svg
[snyk-url]: https://snyk.io/advisor/npm-package/redis-github-action

[tests-badge]: https://img.shields.io/circleci/build/github/pustovitDmytro/redis-github-action
[tests-url]: https://app.circleci.com/pipelines/github/pustovitDmytro/redis-github-action

[codefactor-badge]: https://www.codefactor.io/repository/github/pustovitdmytro/redis-github-action/badge
[codefactor-url]: https://www.codefactor.io/repository/github/pustovitdmytro/redis-github-action

[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/pustovitDmytro/redis-github-action

[scrutinizer-badge]: https://scrutinizer-ci.com/g/pustovitDmytro/redis-github-action/badges/quality-score.png?b=master
[scrutinizer-url]: https://scrutinizer-ci.com/g/pustovitDmytro/redis-github-action/?branch=master

[lgtm-lg-badge]: https://img.shields.io/lgtm/grade/javascript/g/pustovitDmytro/redis-github-action.svg?logo=lgtm&logoWidth=18
[lgtm-lg-url]: https://lgtm.com/projects/g/pustovitDmytro/redis-github-action/context:javascript

[lgtm-alerts-badge]: https://img.shields.io/lgtm/alerts/g/pustovitDmytro/redis-github-action.svg?logo=lgtm&logoWidth=18
[lgtm-alerts-url]: https://lgtm.com/projects/g/pustovitDmytro/redis-github-action/alerts/

[codacy-badge]: https://app.codacy.com/project/badge/Grade/f658ddd6ac48454a90c95f3c5fee486a
[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/redis-github-action/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pustovitDmytro/redis-github-action&amp;utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_redis-github-action&metric=alert_status
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_redis-github-action

[npm-downloads-badge]: https://img.shields.io/npm/dw/redis-github-action
[npm-size-badge]: https://img.shields.io/bundlephobia/min/redis-github-action
[npm-size-url]: https://bundlephobia.com/result?p=redis-github-action

[node-ver-test-badge]: https://github.com/pustovitDmytro/redis-github-action/actions/workflows/npt.yml/badge.svg?branch=master
[node-ver-test-url]: https://github.com/pustovitDmytro/redis-github-action/actions?query=workflow%3A%22Node.js+versions%22

[fossa-badge]: https://app.fossa.com/api/projects/custom%2B24828%2Fredis-github-action.svg?type=shield
[fossa-url]: https://app.fossa.com/projects/custom%2B24828%2Fredis-github-action?ref=badge_shield