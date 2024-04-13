import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

export const openai = new OpenAI({
  apiKey: OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: "Say this is a test" }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices);
// }

// main();
