let env = {
  NODE_ENV: 'development',
  HOSTNAME: 'localhost',
  JWT_EXPIRE: '100 days',
  JWT_KEY: 'Key',
  DB_HOST: 'localhost',
  DB_NAME: 'crowdfunding',
  DB_USER: 'root',
  DB_PASS: 'password',
}

for(const key in env) {
  process.env[key] = env[key]
}
