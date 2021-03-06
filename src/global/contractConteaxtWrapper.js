import React, { createContext, useContext, useMemo } from "react";

// import Contract from "web3-eth-contract";
// import { create } from "ipfs-http-client";

import { SPACE_TOKEN_CONTRACT_ADDRESS } from "../constants/addresses";
import SpaceContracABI from "../contracts/spaceToken.json";

const ContractContext = createContext();

export function ContractContextWrapper({ children }) {
  const spaceTokenContract = connectToSpaceTokenContract();
  const ipfs = connectToIPFS();

  const value = useMemo(
    () => ({
      spaceTokenContract: spaceTokenContract,
      ipfs: ipfs,
    }),
    [spaceTokenContract, ipfs]
  );

  return (
    <ContractContext.Provider value={value}>
      {children}
    </ContractContext.Provider>
  );
}

function connectToSpaceTokenContract() {
  const { ethers } = require("ethers");
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      SPACE_TOKEN_CONTRACT_ADDRESS,
      SpaceContracABI.abi,
      signer
    );

    return contract;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function connectToIPFS() {
  return undefined;
  // return create({
  //   url: "https://ipfs.infura.io:5001/api/v0",
  // });
}

export default function useContract() {
  return useContext(ContractContext);
}
