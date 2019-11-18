namespace :build do
  desc 'Build site for staging'
  task :stage do
    print 'Building the site for staging: $ '.magenta
    sh 'bin/jekyll',
          'build',
            '--baseurl=/${BUILD_NUMBER}',
            '--verbose',
            '--trace'
  end

  desc 'Build the site for production'
  task :prod do
    print 'Building the site for production: $ '.magenta
    sh 'bin/jekyll',
          'build',
            '--config=_config.yml,_config.prod.yml',
            '--verbose',
            '--trace'
  end
end
