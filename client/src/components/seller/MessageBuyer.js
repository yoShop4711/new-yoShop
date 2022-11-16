import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import _ from "lodash"
import Messages from "./Messages"



function MessageBuyer() {
   


const { id } = useParams()     

  return (<div>
    
        return <Messages  id={id} />
      
    


  </div>);
}

export default MessageBuyer;
