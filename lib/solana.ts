import { Connection, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js'

export const SOLANA_NETWORK = 'https://api.testnet.solana.com'
export const PROGRAM_ID = new PublicKey('4iQfsPKZHE2iyeAnv5j9U9SXFLjRRt4cXMmYdukJqbj5')

export const connection = new Connection(SOLANA_NETWORK, 'confirmed')

// Example: Send a no-op transaction to the program (replace with your real instruction)
export async function sendNoopTransaction(signer: any) {
  const instruction = new TransactionInstruction({
    keys: [],
    programId: PROGRAM_ID,
    data: Buffer.alloc(0), // No data, just a ping
  })
  const transaction = new Transaction().add(instruction)
  transaction.feePayer = signer.publicKey
  transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
  const signed = await signer.signTransaction(transaction)
  return await connection.sendRawTransaction(signed.serialize())
} 