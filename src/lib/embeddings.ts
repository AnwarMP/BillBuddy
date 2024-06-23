import { OpenAIApi, Configuration } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function getEmbeddings(text: string) {
  try {
    const response = await openai.createEmbedding({
      model: "text-embedding-3-small",
      input: text.replace(/\n/g, " "),
    });

    // Ensure the response is in JSON format
    const result = await response.json();
    console.log("OpenAI Response:", result);

    // Check if the data property exists and has at least one element
    if (result.data && result.data.length > 0) {
      return result.data[0].embedding as number[];
    } else {
      throw new Error("Invalid response structure from OpenAI API");
    }
  } catch (error) {
    console.log("Error calling OpenAI embeddings API:", error);
    throw error;
  }
}
