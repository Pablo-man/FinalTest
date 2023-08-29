import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import {FaissStore} from "langchain/vectorstores/faiss";
import {OpenAIEmbeddings} from "langchain/embeddings/openai";
import { CharacterTextSplitter } from "langchain/text_splitter";
import * as dotenv from "dotenv";
dotenv.config();


const file = new PDFLoader("archivo.pdf");
const fileLoad= await file.load();

const splitt= new CharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 50,
});

const documents = await splitt.splitDocuments(fileLoad);

const embedd= new OpenAIEmbeddings();

const vectorDB= await FaissStore.fromDocuments(documents, embedd);
await vectorDB.save("./");