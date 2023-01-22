import { useEffect, useState } from 'react' 
import Mealitem from './Mealitem'
import { RecipeIndex } from './RecipeIndex'

const Meal = () => {
    const [url, setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a")
    const [item, SetItem]=useState()
    const[show, setShow]=useState(false);
    const[search,setSearch]=useState("");
    useEffect(() =>{
        fetch(url).then(res=>res.json()).then(data=>{
            SetItem(data.meals)
            setShow(true)
        })
       
    },[url])
const setIndex=(alpha)=>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
}
 const searchResipe =(evt)=>{
    if(evt.key=="Enter"){
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }

 }
  return (
    <>
    <div className="containers">
        <div className='main'>
            <h1> Search Your Food Recipe</h1>
            <p>Here you  can search your faviourit recipes </p>
        </div>
        <div className='search'>
            <input type="search" className='search-bar' 
            onChange={e=>setSearch(e.target.value)} onKeyPress={searchResipe}/>
            
            
        </div>
        <div className='container'>
            
        {
            show ? <Mealitem  data={item}   /> :"no item found"
         }
        </div>
        <div className='recipeindex'>
            <RecipeIndex alphaindex={(alpha)=>setIndex(alpha)} />
        </div>
    </div>
    </>
  )
}

export default Meal