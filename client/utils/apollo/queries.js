import { gql} from "@apollo/client";


export const WALLETNFTS = gql`

query Query($walletAddress: String) {
    thisWalletQuery(walletAddress: $walletAddress) {
      network
      account
      assets {
        contract
        tokenId
        supply
        metadata {
          description
          artist_website
          image
          artistRoyaltyInfo {
            artistAddress
            artistPercentage
          }
          name
        }
      }
    }
  }`
