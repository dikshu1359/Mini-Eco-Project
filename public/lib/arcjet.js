// lib/arcjet.js
import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    tokenBucket({
      mode: "LIVE", // Change to "DRY_RUN" for testing
      refillRate: 2,    // 5 tokens per minute
      interval: 120,     // 60 seconds
      capacity: 2,      // Max 5 requests
    }),
  ],
});

export default aj;


// npm i @arcjet/next @arcjet/inspect