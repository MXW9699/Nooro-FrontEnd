import { useState } from "react";

//TODD: hard code for now, make scalable
//tailwind has trouble dymanically rendering colors. Maybe set styles property insteaad and do a Map of colors array
export function ColorChoices({
  setColor,
  setSaved
}: {
  setColor:(color:string) => void;
  setSaved?:(save:boolean)=>void
}) {

  const [selected, setSelected] = useState(0)

  function clickHandler(color:string, key:number):void{
    setColor(color)
    setSelected(key)
    if(setSaved)
    setSaved(false)
  }

  return (
    <div className="flex m-1">
    <div
      className={`m-1 w-14 h-14 bg-red-500 rounded-full ${selected === 0? 'border-4 border-white' : ''}`}
      onClick={()=>clickHandler('red',0)}
    />
    <div
    className={`m-1 w-14 h-14 bg-blue-500 rounded-full ${selected === 1? 'border-4 border-white' : ''}`}
    onClick={()=>clickHandler('blue',1)}
  />
  <div
  className={`m-1 w-14 h-14 bg-yellow-500 rounded-full ${selected === 2? 'border-4 border-white' : ''}`}
  onClick={()=>clickHandler('yellow',2)}
/>
    <div
    className={`m-1 w-14 h-14 bg-green-500 rounded-full ${selected === 3? 'border-4 border-white' : ''}`}
    onClick={()=>clickHandler('green',3)}
  />
      <div
    className={`m-1 w-14 h-14 bg-pink-500 rounded-full ${selected === 4? 'border-4 border-white' : ''}`}
    onClick={()=>clickHandler('pink',4)}
  />   
   <div
  className={`m-1 w-14 h-14 bg-purple-500 rounded-full ${selected === 5? 'border-4 border-white' : ''}`}
  onClick={()=>clickHandler('purple',5)}
/>
    <div
    className={`m-1 w-14 h-14 bg-indigo-500 rounded-full ${selected === 6? 'border-4 border-white' : ''}`}
    onClick={()=>clickHandler('indigo',6)}
  />
  </div>
  )
}
