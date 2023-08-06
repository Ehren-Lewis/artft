import { gql } from "graphql-tag";

const typeDefs = gql`

    type Artist {
        _id: ID
        walletAddress: String
        permissionLevel: Int
    }

    type User {
       _id: ID
       walletAddress: String
       physicalAddress: String 
    }

    type Collection {
        _id: ID
        contractAddress: String
        network: String
        artistAddress: String
    }
    
    type NFT {
        _id: ID
        contractAddress: String
        tokenId: String
        supply: String
        contractType: String
        desription: String
        artistWebsite: String
        image: String
        artistAddress: String
        artistPercentage: String
        name: String
        status: String
        accountOwner: String
    }

    type royaltyInfo {
        artistAddress: String
        artistPercentage: String
    }

    type NFTMetadata {
        description: String
        artist_website: String
        image: String
        artistRoyaltyInfo: royaltyInfo
        name: String
    }

    type realNFT {
        contract: String
        tokenId: String
        supply: String
        metadata: NFTMetadata
    }

    type queryWalletNFTs {
        network: String
        account: String
        assets: [realNFT]
    }    


    type Query {
        artists: [Artist]
        singleArtist(walletAddress: String): Artist
        users: [User]
        singleUser(walletAddress: String): User
        Collections: [Collection]
        singleCollection(contractAddress: String): Collection
        NFTs: [NFT]
        singleNFT(contractAddress: String, tokenId: String): NFT
        userNFTs: NFT
        thisWalletQuery(walletAddress: String): queryWalletNFTs
    }
`

export default typeDefs
