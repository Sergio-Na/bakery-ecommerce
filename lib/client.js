// import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";
import {createClient} from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'

// export const client = new SanityClient({
//     projectId: "6njf0n7o",
//     dataset: "production",
//     apiVersion: "2023-04-07",
//     useCdn: true,
//     token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// });
export const client = createClient({
    projectId: '6njf0n7o',
    dataset: 'production',
    useCdn: false, // set to `true` to fetch from edge cache
    apiVersion: '2023-04-07', // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN // Only if you want to update content with the client
  })

  
//const builder = createImageUrlBuilder(client);
export const urlFor = (source) => createImageUrlBuilder(client).image(source);