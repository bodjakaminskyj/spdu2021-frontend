import React, {useState} from "react";
import "./Task.css"
export const Task = (task) => {
    const [value, setValue] = useState(false)
    const handleChang = (e) =>{
        setValue(!value)
        const x = e.target.parentElement
        if(!value){
            x.classList.add("done")
        }else {
            x.classList.remove("done")
        }
        console.log(x)
    }
    return(
        <div className="task" onChange={handleChang}>
            <input type="checkbox" /><label>{task.tasks.name}</label>
        </div>
    )
}