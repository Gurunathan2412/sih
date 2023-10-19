import React from 'react'
import { useEffect,useState } from 'react'
import "./Chatbot.css"
import send from "../../assets/send.svg"
import { Link } from 'react-router-dom'


const Chatbot = () => {
  const [query, setQuery] = useState('Hi');
  const [data,setdata] = useState([{
    "question": "What is this",
    "answer" : "This this the answer"
  }])
  function changeValue(e){
    setQuery(e.target.value)
  }
  
  async function sendData(){
    const todo =  query
    const response = await fetch("http://127.0.0.1:5000/add_todo", {
    method: "POST",
    headers: {
    'Content-Type' : 'application/json'
    },
    body: JSON.stringify(todo)
    })
    if (response.ok){
      
     response.json().then((response)=> {
      //  console.log(data)
       const p = [...data];
      //  console.log(...data,'aa')
      p.push({
        "question": query,
        "answer" : response.message
      })
      // console.log(p,"ppppppp")
      setdata(p)
    })
    // onNewTodo(todo)
    // setContent('')
    setQuery('')
    // fetchData()
    }
  }

  // useEffect(()=>{
  //   sendData()
  // },[data])

  // function fetchData(){
  //     fetch("http://127.0.0.1:5000/add_todo").then((res) =>{
  //         console.log(res)
  //         res.json().then((data) => {
  //           console.log(data)
  //             // Setting a data from api
  //             // setdata({
  //             //     name: data.Name,
  //             //     age: data.Age,
  //             //     date: data.Date,
  //             //     programming: data.programming,
  //             // });
  //         })
  //       }
  //     );
  // }
  
  // const a = [
  //   {
  //     "question": "What is this",
  //     "answer" : "This this the answer"
  //   },
  //   {
  //     "question": "what is the second question",
  //     "answer": "Ths is the second answer"
  //   },
  //   {
  //     "question": "what is the second question",
  //     "answer": "Ths is the second answer"
  //   },
  //   {
  //     "question": "what is the second question",
  //     "answer": "Ths is the second answer"
  //   },
  //   {
  //     "question": "what is the second question",
  //     "answer": "Ths is the second answer"
  //   }
  // ]
  // console.log(a.map(()=>{

  // }))
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
          <Link to="/Admin"><div className="listItems">
            <img src="" alt="" className="listItemsImg" />Admin
          </div></Link>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          
          {data.map((e)=>{
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
            <input type="text" placeholder='Send a message' value={query} onChange={changeValue}/><button className="send"><img src={send} onClick={sendData} alt="" /></button>
          </div>
          <p>POWERGPT is a best tool</p>
        </div>
      </div>
    </div>
  )
}


export default Chatbot