import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

export default function WalletConnectBtn() {
  const { open } = useAppKit();
  const { address } = useAppKitAccount();

  return (
    <div>
      {address ? (
        <p>Connected: {address}</p>
      ) : (
        <button onClick={() => open()}>Connect Wallet</button>
      )}
    </div>
  );
}
