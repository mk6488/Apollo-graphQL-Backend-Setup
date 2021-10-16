import { config } from 'dotenv'

const { parsed } = config()

export const {
  DB,
  MODE,
  PORT,
  IN_PROD = MODE !== 'prod'
} = parsed