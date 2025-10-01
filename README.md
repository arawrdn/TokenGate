# 🎟️ TokenGate

TokenGate is an **NFT-based ticketing system** with **Dynamic QR Code Check-in** and **WalletConnect (via Reown AppKit)** integration.  
Each ticket is minted as an NFT, tradable on secondary markets, and validated at the event gate with a one-time QR.

---

## ✨ Features
- 🎫 Mint unique NFT tickets (ERC721)
- 🔑 Owner-only check-in
- 🚫 Prevents double use
- 📱 Dynamic QR generation
- 🔗 WalletConnect integration
- ✅ On-chain validation

---

## 📂 Repo Structure
- `contracts/` → Solidity smart contract.  
- `frontend/` → React frontend with WalletConnect & QR code.  
- `scripts/` → Deployment script (Hardhat).  
- `test/` → Contract tests.  

---

## 🚀 Getting Started

### 1. Smart Contract
1. Open [Remix IDE](https://remix.ethereum.org/)  
2. Paste code from `contracts/TokenGate.sol`  
3. Compile with Solidity `^0.8.20`  
4. Deploy the contract  
5. Copy the deployed contract address  

### 2. Frontend
```bash
cd frontend
npm install
npm start

📸 Example Components

1. WalletConnectBtn.jsx → Wallet connection button

2. QRGenerator.jsx → Generate QR from tokenId

3. QRScanner.jsx → (to be implemented for event staff)
