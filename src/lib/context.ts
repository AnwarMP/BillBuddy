import { Pinecone } from "@pinecone-database/pinecone";
import { convertToAscii } from "./utils";
import { getEmbeddings } from "./embeddings";

export async function getMatchesFromEmbeddings(
  embeddings: number[],
  fileKey: string
) {
  try {
    const client = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
    });
    const pineconeIndex = await client.index("billbuddy");
    const namespace = pineconeIndex.namespace(convertToAscii(fileKey));
    const queryResult = await namespace.query({
      topK: 5,
      vector: embeddings,
      includeMetadata: true,
    });
    return queryResult.matches || [];
  } catch (error) {
    console.log("error querying embeddings", error);
    throw error;
  }
}

export async function getContext(query: string, fileKey: string) {
  // creates embedding of the query 
  const queryEmbeddings = await getEmbeddings(query);

  // gets the top 5 matches from the embeddings based on the query embedding
  const matches = await getMatchesFromEmbeddings(queryEmbeddings, fileKey);
  console.log('Matches:', matches)

  // based on the score of the matches, filters out the ones with a score greater than 0.7
  const qualifyingDocs = matches.filter(
    (match) => match.score && match.score > 0.2
  );

  // extracts the text from the qualifying documents
  type Metadata = {
    text: string;
    pageNumber: number;
  };

  // returns the first 3000 characters of the concatenated text of the qualifying documents
  let docs = qualifyingDocs.map((match) => (match.metadata as Metadata).text);
  // 5 vectors
  return docs.join("\n").substring(0, 3000);
}