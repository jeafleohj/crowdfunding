declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: string,
        HOSTNAME: string,
        JWT_EXPIRE: string,
        JWT_KEY: string,
        DB_HOST: string,
        DB_NAME: string,
        DB_USER: string,
        DB_PASS: string,
        AWS_S3_NAME: string,
        AWS_ACCESS_KEY_ID: string,
        AWS_SECRET_ACCESS_KEY: string,
        GOOGLE_CLIENT_ID: string,
        GOOGLE_CLIENT_SECRET: string,
        GOOGLE_REDIRECT_URL: string,
      }
    }
  }
}
