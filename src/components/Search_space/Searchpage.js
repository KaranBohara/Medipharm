import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Searchpage.css";

const Searchpage=()=>
{
    const [query,setQuery]=useState('');
    const [items, setItems] = useState([]);
    const fetchitems = async () => {
        const req = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=216926853f1c4686b08202ddd84bb414`);
        const items = await req.json();
        setItems(items.articles);
      }
      const handleQuery=(e)=>
{
    setQuery(e.target.value)
}
      useEffect(() => {
  fetchitems()
},[]);
const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase())||item.description.toLowerCase().includes(query.toLowerCase())
);
    return(<div>
        <div><input type='search' style={{border:"2px solid red"}} onChange={handleQuery}/> </div>
         {filteredItems ? filteredItems.map((item,index)=>
            {
                return(
                    <div key={index}>
                    <div><b>Title:</b>{item.title}</div>
                    <div><b>Description:</b>{item.description}</div>
                    </div>
                )
            }):"Loading"}
        </div>
    );
}
export default Searchpage;