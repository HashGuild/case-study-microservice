import mongoose from 'mongoose';

const ArtworkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export const gqlArtworkSchema = `
    {
        id: ID
        title: String
        description: String
    }
    
`;

export const Artwork = mongoose.model('artwork', ArtworkSchema);