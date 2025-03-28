import { useState } from 'react'
import { buildingsList } from './Data'
import './components/index.css'
import GenerateBuilding from './components/Build';



function App() {
  
  const [index, setIndex] = useState(0);
let building = buildingsList[index];
let count = 12;

function handleNextClick()
{
  setIndex(index+1);
}
function handlePrevClick()
{
  setIndex(index-1);
}

function handleLastNext(){
  if (index === buildingsList.length - 1)
  {
      
    return <h2>End of list!</h2>
  }
  return null;
}
  return (
    <div class='dark:bg-gray-900 w-full h-screen' >
     <h1 class='font-stretch-extra-expanded text-center text-2xl p-5 text-blue-200' >Here are some details of famous buildings around the world.</h1>

     <div class='flex justify-center items-center mt-10'>
      <button onClick={handlePrevClick}
      type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Previous</button>
      
     <GenerateBuilding 
        name={building.name} 
        city={building.city} 
        height={building.height_meters} 
        year={building.year_built} 
        source={building.image_url}
        more = {building.wikipedia_url}
      />
      <button onClick={handleNextClick}  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-2">Next</button>
     </div>

   


      {handleLastNext()}
    </div>
  )
}

export default App
