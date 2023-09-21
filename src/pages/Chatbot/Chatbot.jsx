import React from 'react'
import { useEffect,useState } from 'react'
import "./Chatbot.css"
import send from "D:/React/sih/src/assets/send.svg"


const Chatbot = () => {
  const a = [
    {
      "question": "What is this",
      "answer" : "This this the answer"
    },
    {
      "question": "what is the second question",
      "answer": "Ths is the second answer"
    },
    {
      "question": "what is the second question",
      "answer": "Ths is the second answer"
    },
    {
      "question": "what is the second question",
      "answer": "Ths is the second answer"
    },
    {
      "question": "what is the second question",
      "answer": "Ths is the second answer"
    }
  ]
  console.log(a.map(()=>{

  }))
  // const [answer,S]
  return (
    <div className='App'>
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src="" alt="" className="logo" />
            <span className="brand">Power GPT</span>
            <button className="midBtn"><img src="" alt="" className="addBtn" />New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src="" alt="" />What is power?</button>
              <button className="query"><img src="" alt="" />What is power?</button>
            </div>
          </div>

        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src="" alt="" className="listItemsImg" />Home
          </div>
          <div className="listItems">
            <img src="" alt="" className="listItemsImg" />Dashboard
          </div>
          <div className="listItems">
            <img src="" alt="" className="listItemsImg" />Admin
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {a.map((e)=>{
           return (<>
           <div className="chat">
           <img src={send} alt="" className="chatImg" /><p className="txt-data">{e.question}</p>
         </div>
         <div className="chat bot">
           <img src={send} alt="" className="chatImg" /><p className="txt-data">{e.answer}</p>
         </div>
           </>)
          })}
          
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message'/><button className="send"><img src={send} alt="" /></button>
          </div>
          <p>POWERGPT is a best tool</p>
        </div>
      </div>
    </div>
  )
}

export default Chatbot