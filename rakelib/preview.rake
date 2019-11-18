# frozen_string_literal: true

namespace :preview do
  desc 'Preview the site locally (ignores local config)'
  task all: %w[install clean] do
    print 'Enabled the default configuration: $ '.magenta
    sh 'bin/jekyll',
         'serve',
          '--incremental',
          '--open-url',
          '--trace',
          '--plugins=_plugins,_checks'        
  end
end
