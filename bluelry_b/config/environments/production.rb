require "active_support/core_ext/integer/time"

Rails.application.configure do
  # Code is not reloaded between requests.
  config.enable_reloading = false

  # Eager load code on boot.
  config.eager_load = true

  # Full error reports are disabled and caching is turned on.
  config.consider_all_requests_local = false

  # Ensures that a master key has been made available.
  # config.require_master_key = true

  # Disable serving static files from the `/public` folder.
  config.public_file_server.enabled = false

  # Enable serving of images, stylesheets, and JavaScripts from an asset server.
  # config.asset_host = "http://assets.example.com"

  # Specifies the header that your server uses for sending files.
  # config.action_dispatch.x_sendfile_header = "X-Sendfile" # for Apache
  # config.action_dispatch.x_sendfile_header = "X-Accel-Redirect" # for NGINX

  # Store uploaded files on the local file system (see config/storage.yml for options).
  config.active_storage.service = :local

  # Assume all access to the app is happening through a SSL-terminating reverse proxy.
  config.force_ssl = true

  # Log to a file in the production environment
  config.logger = ActiveSupport::Logger.new("log/production.log", "daily")
  config.logger.formatter = Logger::Formatter.new
  config.log_tags = [:request_id]
  config.active_support.tagged_logging = ActiveSupport::TaggedLogging.new(config.logger)

  # Set log level
  config.log_level = :info

  # Use a different cache store in production.
  # config.cache_store = :mem_cache_store

  # Use a real queuing backend for Active Job.
  # config.active_job.queue_adapter = :resque
  # config.active_job.queue_name_prefix = "bluelry_b_production"

  config.action_mailer.perform_caching = false

  # Enable locale fallbacks for I18n.
  config.i18n.fallbacks = true

  # Don't log any deprecations.
  config.active_support.report_deprecations = false

  # Do not dump schema after migrations.
  config.active_record.dump_schema_after_migration = false

  # Configure host authorization for extra security.
  config.hosts << "bluelry.com"
  config.hosts << "www.bluelry.com"
end
