import { LIST_OF_COLORS } from "../Constants";

export function ColorChoices({
  setColor,
  setSaved
}: {
  setColor:(color:string) => void;
  setSaved?:(save:boolean)=>void
}) {
  function clickHandler(color:string):void{
    setColor(color)
    if(setSaved)
    setSaved(false)
  }

  return (
    <div className="flex ">
    <div
      className={`w-14 h-14 bg-red-500 rounded-full`}
      onClick={()=>clickHandler('red')}
    />
    <div
    className={`w-14 h-14 bg-blue-500 rounded-full`}
    onClick={()=>clickHandler('blue')}
  />
  <div
  className={`w-14 h-14 bg-yellow-500 rounded-full`}
  onClick={()=>clickHandler('yellow')}
/>
    <div
    className={`w-14 h-14 bg-green-500 rounded-full`}
    onClick={()=>clickHandler('green')}
  />
      <div
    className={`w-14 h-14 bg-pink-500 rounded-full`}
    onClick={()=>clickHandler('pink')}
  />   
   <div
  className={`w-14 h-14 bg-purple-500 rounded-full`}
  onClick={()=>clickHandler('purple')}
/>
    <div
    className={`w-14 h-14 bg-indigo-500 rounded-full`}
    onClick={()=>clickHandler('indigo')}
  />
  </div>
  )
}
