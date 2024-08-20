'use client'
import { useState } from "react";
import { useSocket } from "../context/socketProvider";
import classes from "./page.module.css";

export default function Page(){
  const {sendMessage} = useSocket();
  const [message, setMessage] = useState('')
  
  return (
    <div>
      <div><h1>All Messages will apprear here</h1></div>
      <div>
        <input onChange={(e) => setMessage(e.target.value)} className={classes["chat-input"]} placeholder="Type your message here" type="text" />
        <button onClick={(e) => sendMessage(message)} className={classes["button"]} >Send</button>
      </div>
    </div>
  )
}