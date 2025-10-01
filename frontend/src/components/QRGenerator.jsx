import QRCode from "qrcode.react";

export default function QRGenerator({ tokenId }) {
  return (
    <div>
      <h3>Your Ticket QR</h3>
      <QRCode value={`token:${tokenId}`} size={200} />
    </div>
  );
}
