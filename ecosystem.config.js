module.exports = {
  apps : [{
    name: 'hej-api',
    script: 'dist/server.js',
    exec_mode: 'fork', // 'cluster' or 'fork'
    instance_var: 'INSTANCE_ID', // instance variable
    instances: 1, // pm2 instance count
    autorestart: true, // auto restart if process crash
    watch: false, // files change automatic restart
    ignore_watch: ['node_modules', 'logs'], // ignore files change
    max_memory_restart: '1G', // restart if process use more than 1G memory
    merge_logs: true, // if true, stdout and stderr will be merged and sent to pm2 log
    output: './logs/access.log', // pm2 log file
    error: './logs/error.log', // pm2 error log file
    env: { // environment variable
      PORT: 80,
      NODE_ENV: 'production',
    },
  }, ],

  deploy : {
    production : {
      user : 'rocky',
      host : '140.84.185.74',
      ref  : 'origin/main',
      repo : 'https://github.com/YamCrack/typescript-express-mongoose-starter.git',
      path : '~/api',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build && pm2 restart ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
