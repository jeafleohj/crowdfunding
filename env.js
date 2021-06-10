let env = {
  NODE_ENV: 'development',
  HOSTNAME: 'http://127.0.0.1:3000',
  JWT_EXPIRE: '100 days',
  JWT_KEY: 'Key',
  DB_HOST: 'localhost',
  DB_NAME: 'crowdfunding',
  DB_USER: 'root',
  DB_PASS: 'password',
  AWS_ACCESS_KEY_ID: 'ASIAWFVGZBBSZJQOMLTX',
}

for(const key in env) {
  process.env[key] = env[key]
}
