import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = (blogs) => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate()
  // const displayIngredients = blogs.ingredients.map((ingredient) => ingredient.name);


  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
        navigate("/", { replace: true });
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.name }</h2>

          {blog.ingredients.map((ingredient, i) => <div className="ingredientWrapper" key={i}>
            <div className="quantity">{ingredient.quantity}</div>
            <div className="ingredient">{ingredient.name}</div>
            </div>)}           
          

          <div><div>Method: </div>
            <ol> {blog.steps.map(e => <li>{e}</li>)}</ol>
          </div>
          <div className="imgBtn">
            <img src={blog.imageURL} alt=""/>
            <button onClick={handleClick}>Delete</button>
          </div>
        </article>
      )}    
    </div>
  );
}
 
export default BlogDetails ;