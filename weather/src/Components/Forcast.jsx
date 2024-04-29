import React from 'react'
import ForcastStatus from './ForcastStatus'

let data =[
    {
       color: "red", title : "Warnings", main: "Subdivision Wise", sub: "District Wise"
    },
    {
       color: "#f7a92a", title : "Nowcast", main: "District Wise", sub: "Station Wise"
    },
    {
       color: "#1bc17f", title : "Weather Observations", main: "Daily", sub: "AWS"
    },
    {
       color: "white", title : "Public Observation", main: "Multi Indian", sub: "Language"
    },
   
    {
       color: "#F8CF44", title : "Forcast", main: "", sub: ""
    },
]
export default function Forcast() {
  return (
    <div className='flex h-full w-full'>
   {
    data.map((el)=> <div className='w-full'>
        <ForcastStatus color={el.color} title={el.title}main={el.main}sub={el.sub}/>
    </div>)
   } 
    </div>
  )
}
