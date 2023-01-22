import React from 'react'

export const RecipeIndex = ({alphaindex}) => {
    

    const alpha =["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  
    let num=0;
    return (
    <>
    {
        
alpha.map((item)=>{
    return(
        <div className='numbox' key={num++} onClick={()=>alphaindex(item)}>
        <h1>{item} </h1>
        </div>
    )
})

    }
    </>
  )
}
