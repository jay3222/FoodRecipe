import React from 'react'

const Recipes =(props)=> {

    return (
       <>
  
        <div className="container">
            <div className="row">
            <div className="col-12">
                <h3 className="py-2"  style={{letterSpacing:"2px", fontFamily:"sans-serif"}}>ALL RECIPES</h3>
                        </div>
           
            
                    {
                      props.recipes.map(recipe=>(
                            <div className="col-md-3 col-6  my-3 p-3">
                                <div className="card py-2">
                                <img src={recipe.recipe.image} className="img-fluid w-50 mx-auto rounded-circle"></img>
                                <hr className="w-100"></hr>
                                    <div className="card-body">
                                        <h5>{recipe.recipe.label}</h5>
                                    </div>
                                    <ul className="list-group">
                                        {
                                            recipe.in
                                        }
                                    </ul>
                                </div>

                            </div>

                      ))

                    }
            
            </div></div>
        
       </>
    )
}

export default Recipes;
