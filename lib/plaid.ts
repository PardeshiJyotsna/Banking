import { headers } from "next/headers";
import { Configuration, PlaidApi, PlaidApiAxiosParamCreator, PlaidEnvironments } from "plaid";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions:{
    headers:{
      'PLAID-CLIENT-ID':process.env.PLAID_CLIENT_ID,
      'PLAID_SECRET': process.env.PLAID_SECRET,
    }
  }
})

export const plaidClient = new PlaidApi(configuration);