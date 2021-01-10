import React,{useState,useEffect} from "react";
import './App.css';
import Header from './Components/Header';
import Recipes from "./Components/Recipes";
import Axios from "axios";
import Footer from "./Components/Footer";



function App() {
  const[search,setSearch]=useState("");
  const[recipes,setRecipes]=useState([]);

  const APP_ID="f985173d";
  const APP_KEY="1af71388bcda965388398215a20678eb";

  useEffect(()=>{
    getRecipes();
  },[]

  );
    const getRecipes=async()=>{
      const res= await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      console.log(res);
      setRecipes(res.data.hits);

    };

    const onSearchClick=()=>{
      getRecipes();

    }

 
  const onInputChange=(e)=>{
    setSearch(e.target.value);
   
  }
  return (
   <>
 <Header search={search}  onInputChange={onInputChange} onSearchClick={onSearchClick}/>
 <Recipes recipes={recipes}/>
 <Footer/>

   </>

  );
}

export default App;
