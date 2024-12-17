import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
const client = createThirdwebClient({
  clientId: "ff2d9dfed0f2aa3ab6d90252c104bf3f"
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.trustwallet.app"),
  createWallet("app.phantom"),
];


export default function ConnectWallet() {
  return (
    <>
      <ConnectButton
        client={client}
        wallets={wallets}
        connectModal={{
          size: "compact",
          showThirdwebBranding: false,
        }}
      />
    </>
  )
}
