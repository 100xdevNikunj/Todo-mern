import  { useState } from "react";
function input() {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");


    function addTodo() {
        fetch("http://localhost:3000/todo",{
        method: "POST",
        body: JSON.stringify({
            title: title,
            description: description
        }),
        headers: {
            "Content-type": "application/json"
        }
        }).then(async function(res){
            const json = await res.json();
            alert('TODO added')
        })
    } 
     
    return(
        <>
        <input name="title" placeholder="Title" type="text" onChange={(event)=>{
           settitle(event.target.value)
        }} /><br></br>
        <input name="Description" placeholder="Description" type="text" onChange={(event)=>{
            setdescription(event.target.value)
        }}/><br></br>
        <button onClick={addTodo}>Add TODO</button>
        </>
    )
}
export default input;