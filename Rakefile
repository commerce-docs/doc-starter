# frozen_string_literal: true

spec = Gem::Specification.find_by_name 'magedocs_helper'
rakefile = "#{spec.gem_dir}/lib/magedocs_helper/Rakefile"
load rakefile

task default: %w[preview]

desc 'Preview the web site locally'
task preview: %w[install clean] do
  puts 'Generating the web site locally ... '.magenta
  if File.exist?('_config.local.yml')
    print 'enabled the additional configuration parameters from _config.local.yml: $ '.magenta
    sh 'bin/jekyll',
        'serve',
          '--incremental',
          '--open-url',
          '--livereload',
          '--trace',
          '--config=_config.yml,_config.local.yml',
          '--plugins=_plugins,_checks'
  else
    Rake::Task['preview:all'].invoke
  end
end

desc 'Build the website'
task build: %w[clean] do
  print 'Building the site with Jekyll: $ '.magenta
  sh 'bin/jekyll', 'build', '--verbose', '--trace'
  puts 'Built!'.green
end
