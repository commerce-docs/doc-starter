# Documentation Starter Kit

Start your new documentation project by forking this repository.

## Prerequisites

* Ruby

## Setup

1. Install project dependencies

`bunlde install`

1. Start dev server.
   This server watches for changes in the src directory and updates using browser-sync.

```
cd src
bundle exec jekyll serve
```

## Directories

`src`

: Source of Jekyll assets.
  All doc related work should be done in here.

`_site`

: Directory where jekyll creates the HTML files.

## Files

`Gemfile`

: Ruby gems used in the project.

`_config.production.yml`

: Production-specific configurations.
