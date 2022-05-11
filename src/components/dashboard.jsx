import { useState } from "react"

export const Dashboard = () => {

    const [user,setuser] = useState("");

    
    return (
        <div>
            <input type="text" onChange={handlechange} />
            <button>submit</button>
        </div>
    )
}