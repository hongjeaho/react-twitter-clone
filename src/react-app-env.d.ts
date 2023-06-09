/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    REACT_APP_API_KEY: string
    REACT_APP_AUTH_DOMAIN: string
    REACT_APP_PROJECT_ID: string
    REACT_APP_STORAGE_BUCKET: string
    REACT_APP_MESSAGING_SENDERID: string
    REACT_APP_APP_ID: string
  }
}
