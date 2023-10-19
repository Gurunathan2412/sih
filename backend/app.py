from nntplib import ArticleInfo
import os
import sys
import pinecone
from langchain.llms import Replicate
from langchain.vectorstores import Pinecone
from langchain.text_splitter import CharacterTextSplitter
from langchain.document_loaders import PyPDFLoader
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.chains import ConversationalRetrievalChain

# Replicate API token
os.environ['REPLICATE_API_TOKEN'] = "r8_Ue0y5p9udaq1VNF1AN39SGYCpoOcJCg0SKIiL"

# Initialize Pinecone
pinecone.init(api_key='2505bed9-bc7f-4a59-b787-9e37c85617d3', environment='gcp-starter')

# Load and preprocess the PDF document
# loader = PyPDFLoader('Substation-operation-and-maintenance-handbook.pdf')
# documents = loader.load()

# # Split the documents into smaller chunks for processing
# text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
# texts = text_splitter.split_documents(documents)

# Use HuggingFace embeddings for transforming text into numerical vectors
embeddings = HuggingFaceEmbeddings()

# Set up the Pinecone vector database
index_name = 'sih'
index = pinecone.Index(index_name)
vectordb = Pinecone.from_existing_index(index_name,embeddings)
# Pinecone.from_documents(texts, embeddings, index_name=index_name)

# Initialize Replicate Llama2 Model
llm = Replicate(
    model="meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
    input={"temperature": 0.75, "max_length": 3000}
)

# Set up the Conversational Retrieval Chain
qa_chain = ConversationalRetrievalChain.from_llm(
    llm,
    vectordb.as_retriever(search_kwargs={'k': 2}),
    return_source_documents=True
)

# Start chatting with the chatbot
from flask import Flask, render_template, request,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# @app.route("/")
# def index():
#     # query = input('Prompt: ')
#     query = "What is oil leakage"
#     if query.lower() in ["exit", "quit", "q"]:
#         print('Exiting')
#         sys.exit()
#     result = qa_chain({'question': query, 'chat_history': [(query,"chat_history")]})
#     # print('Answer: ' + result['answer'] + '\n')
#     # chat_history.append((query, result['answer']))
#     return jsonify({"Answer" : result['answer']})


@app.route('/add_todo', methods=['POST','GET'])
def add_todo():
    query = request.get_json()
    print(query)
    # query = "Hi"
    if query.lower() in ["exit", "quit", "q"]:
        print('Exiting')
        sys.exit()
    result = qa_chain({'question': query, 'chat_history': [(query,"chat_history")]})
    print('Answer: ' + result['answer'] + '\n')
    # chat_history.append((query, result['answer']))
    return ({'message': result['answer']})
    # new_todo = Todo(content=todo_data['content'])
    # db.session.add(new_todo)
    # db.session.commit()
    # return todo_data['content']
    # return 
# @app.route("/about")
# def about():
#     return render_template("about.html")

if __name__ == "__main__":
    app.run(debug=True)
# chat_history = []
# while True:
    # query = input('Prompt: ')
    # if query.lower() in ["exit", "quit", "q"]:
    #     print('Exiting')
    #     sys.exit()
    # result = qa_chain({'question': query, 'chat_history': chat_history})
    # print('Answer: ' + result['answer'] + '\n')
    # chat_history.append((query, result['answer']))

