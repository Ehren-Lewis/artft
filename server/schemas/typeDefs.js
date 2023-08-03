const { gql } = require("apollo-server-express");


const typeDefs = gql`

    type NFT {
        _id: ID
        contractAddress: String
        tokenId: String
        supply: String
        type: String
        metaData: NFTMetadata

    }

    type NFTMetadata {
        _id: ID
        description: String
        arist_website: String
        image: String
        
    }

`