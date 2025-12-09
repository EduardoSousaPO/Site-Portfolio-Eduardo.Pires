import streamlit as st
from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
from dotenv import load_dotenv, find_dotenv
import os

# Carrega variáveis de ambiente
load_dotenv(find_dotenv())

# Obter a chave da API e o nome do modelo das variáveis de ambiente
api_key = os.getenv("GROQ_API_KEY")
model_name = os.getenv("MODEL_NAME")

st.title("Chat com Modelo de Linguagem - LangChain")

# Configuração do prompt e do modelo
system = "You are a helpful assistant."
human = "{text}"
prompt = ChatPromptTemplate.from_messages([("system", system), ("human", human)])
chat = ChatGroq(api_key=api_key, temperature=0, model_name=model_name)
chain = prompt | chat

if "messages" not in st.session_state:
    st.session_state.messages = []

# Exibe mensagens do histórico
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# Caixa de entrada para o usuário
user_input = st.text_area("Você:", "", height=150)

# Enviar mensagem e receber resposta
if st.button("Enviar"):
    if user_input:
        st.session_state.messages.append({"role": "user", "content": user_input})
        with st.chat_message("user"):
            st.markdown(user_input)

        # Adiciona um container para a resposta do modelo
        response_stream = chain.stream({"text": user_input})    
        full_response = ""
        
        response_container = st.chat_message("assistant")
        response_text = response_container.empty()
        
        for partial_response in response_stream:
            full_response += str(partial_response.content)
            response_text.markdown(full_response + "▌")

        # Salva a resposta completa no histórico
        st.session_state.messages.append({"role": "assistant", "content": full_response})

