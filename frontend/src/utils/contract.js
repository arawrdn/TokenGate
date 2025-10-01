import { ethers } from "ethers";
import contractABI from "./TokenGateABI.json";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

export function getContract(signer) {
  return new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
}
