import { ethers } from "ethers";
import Abi from "./abi.json";

const SUPPORTED_CHAIN = 11155111;


export const getContract = (providerOrSigner) =>
    new ethers.Contract(
        process.env.NEXT_PUBLIC_contractAddress,
        Abi,
        providerOrSigner
    );

export const isSupportedChain = (chainId) =>
    Number(chainId) === SUPPORTED_CHAIN;
