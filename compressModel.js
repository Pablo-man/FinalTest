import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import {FaissStore} from "langchain/vectorstores/faiss";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { ContextualCompressionRetriever } from "langchain/retrievers/contextual_compression";
import { LLMChainExtractor } from "langchain/retrievers/document_compressors/chain_extract";
import * as dotenv from "dotenv";
dotenv.config();

const model= new OpenAI({
    temperature:0.7
});

const embdeddings= new OpenAIEmbeddings();
const baseCompressor = LLMChainExtractor.fromLLM(model);
const vectorStrore= await FaissStore.load("./",embdeddings);

const retriever = new ContextualCompressionRetriever({
    baseCompressor,
    baseRetriever: vectorStrore.asRetriever(),
});

const chain = RetrievalQAChain.fromLLM(model, retriever);
const res = await chain.call({
query: "Cual es el titulo?",
});
console.log({res});