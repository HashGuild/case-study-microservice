import {gql} from "apollo-server-express";
import { gqlArtworkSchema } from "../mongoose/artworks.model"

export const typeDefs = gql`
    type Artwork ${gqlArtworkSchema}

    type Query {
        hello: String
        getAllArtworks: [Artwork]
    }
`;