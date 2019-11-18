# frozen_string_literal: true

require 'colorator'
require 'html-proofer'

# Require helper methods from the 'lib' directory
Dir.glob('lib/**/*.rb') { |file| require_relative(file) }

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

task :clean do
  puts 'Cleaning after the last site generation...'.magenta
  print 'Removing _site: $ '.yellow
  sh 'rm', '-rf','_site'
  print 'Running Jekyll cleaner: $ '.yellow
  sh 'bin/jekyll', 'clean'
  puts 'Clean!'.green
end

task :install do
  print 'Install gems listed in the Gemfile: $ '.magenta
  sh 'bundle install'
  puts 'Installed!'.green
end

desc 'Build the website'
task build: %w[clean] do
  print 'Building the site with Jekyll: $ '.magenta
  sh 'bin/jekyll', 'build', '--verbose', '--trace'
  puts 'Built!'.green
end

desc 'Run checks (image optimization and Markdown style linting).'
task check: %w[check:image_optim check:mdl]

desc "Same as 'test:report'"
task test: %w[test:links]

desc 'Generate index for Algolia'
task :index do
  sh 'bin/jekyll',
      'algolia',
      '--config=_config.yml,_config.index.yml'
end