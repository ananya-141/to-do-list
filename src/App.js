import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import deleted from "./delete.png";
import edit from "./edit.png";
import checked from "./checked.png";
import daisy from "./daisy.png";
import belo from "./6cf328996032ff015852902f090df7e9-removebg-preview.png";
import belo2 from "./ww.png";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [position,setPosition]=useState(-1);

  const addItem = (item) => {
    if(position>-1){
      var newList=list;
      newList[position]=item;
      setList(newList);
    }
    else{
      setList([...list, item]);
    }
    

  };
 
  return (
    <div>
    
    <div className="w-full h-screen bg-lightpink flex flex-row justify-center items-center text-center">
      
      
      <div className='w-1/4 h-4/5 bg-whale rounded-2xl shadow-xl shadow-lightpink'>
        <br/>
        <div>

        <img src={belo2} className='h-24 w-28 absolute mr-64  -mt-7 center'/>      
        <img src={belo} className='h-24 w-28 absolute ml-[270px]  -mt-6 center'/>    
        <h1 className='text-pink font-bold font-serif text-3xl  mb-2.5 shadow-md shadow-amber-700 bg-darkwhale pt-1 pb-0.5' >To Do List</h1>
        
        </div>
        <br/>
        <div className='flex items-center justify-center' >
        <input name="task" 
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }} className='text-center h-7 rounded top-0.5 outline-1 border-y-4 border-none text-sm font-medium w-3/5  ' type="text" placeholder='Enter what to do' />
        <button onClick={() => {
          addItem(task);
          setTask("");
        }} className=' ml-2.5 rounded bg-white px-2 text-lg outline-0 border-0 shadow-md text-yellow-800' >+add</button>
        </div>
        <ol className='mt-7' >
        {list.map((e,idx) => {
          return <li id={idx} className={`pl-2 my-2 p-4 w-4/5 h-7 justify-between mx-9 border-4 border-lightpink rounded-lg  text-left  font-medium  flex items-center text-pink  capitalize`}>{e}
          <div className='flex  justify-between'>
          
            <button onClick={() => { document.getElementById(idx).style.textDecoration="line-through"
            } } className='border-none mr-2.5 text-red-300 outline-none cursor-pointer bg-transparent text-pink text-2xl rounded-full task-button ' >
              <img src={checked} className='h-5 w-5'/>

            </button>
            <button onClick={() => {
              setPosition(idx);
              setTask(e);


            }} className='ml-2' >
              <img src={edit} className='h-5 w-5'/>

            </button>
            <button onClick={() => {
            document.getElementById(idx).remove()}
            } className='ml-2' >
            <img src={deleted} className='h-5 w-5'/>

            </button>
          </div>
          </li>;
        })}
          
        </ol>
      </div>
      
    </div>
    </div>
  );
}

export default App;
