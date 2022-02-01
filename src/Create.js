import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [name, setName] = useState('');
    const [steps, setSteps] = useState('');
    const [timer, setTimer] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = { name, steps, timer };    
        console.log(recipe);

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe)
          }).then(() => {
            navigate("/", { replace: true });
        })
      }

  
  

    return (
      <div className="create">
        <h2>Add a New Recipe</h2>
        <form onSubmit={handleSubmit}>
        <label>Recipe name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Steps:</label>
        <textarea
          required
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        ></textarea>
        <label>Timer:</label>
       
        <button>Add Blog</button>
      </form>
      </div>
    );
  }
   
  export default Create;