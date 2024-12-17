import {defineChain} from 'thirdweb/react'
import { solana, ethereum} from 'thirdweb/chains'

export const SOLANA_CHAIN = defineChain(solana);
export const ETHEREUM_CHAIN = defineChain(ethereum);