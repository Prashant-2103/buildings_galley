import "./index.css";



export default function GenerateBuilding(props)
{

    console.log(props);
    
    
    return(
    <> 
    

        <div class="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src={`${props.source}`} alt={`${props.name} s image`}
          
          class="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div class="flex flex-col justify-between p-4 space-y-8">
          <div class="space-y-2">
            <h2 class="text-3xl font-semibold tracking-wide">{props.name}</h2>
            <p class="text-gray-400">
            {props.name} was built in {props.year} situated in {props.city} having a height of {props.height}meters.
            </p>
          </div>
          <button
            type="button"
            class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            <a href={`${props.more}`}>Read more</a> 
          </button>
        </div>
      </div>

    </>

    );
    
}

