import { createThirdwebClient } from "thirdweb";


const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!;
const secretKey = process.env.THIRDWEB_SECRET_KEY!;

const options: any = secretKey
  ? { secretKey }
  : { clientId: clientId as string }

export const client = createThirdwebClient(options);
