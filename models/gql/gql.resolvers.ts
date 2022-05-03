//import { Artwork } from '../mongoose/artworks.model';

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World';
        },

        getAllArtworks: async () => {
//            const artworks = await Artwork.find();
            return [{id: "ID", title: "TITLE", description:"DESCRIPTION"}];
        }
    }
}