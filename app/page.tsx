"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  // UseState Hook - data/storage
  const [data, setData] = useState<string>("")

  const fetchMyApi = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    setData(JSON.stringify(data))

  }


  const fetchCustomApi = async () => {

    try {

      const resopnse = await fetch("http://localhost:3000/api") // works 
      const data = await resopnse.json();
      console.log("Custom API data", JSON.stringify(data))

    } catch (error) {
      console.log("Error", error)
    }
  
  }

  // Q. When would you want to use functions within useEffect dependency bracket []
  // Q. LiveServer with Next.js?
  // Q. How do we check when things go through 'componentDidMount'

  // UseEffect Hook - onRender
  useEffect(() => {
    fetchMyApi()
    fetchCustomApi()
  }, [])


  return (
    <div>
      <div className="flex justify-center items-center bg-red-800 flex-col h-screen">
        <h1>Welcome To Our First Application</h1>
        <p>This app is under construction...</p>

        <Link href={"student"}> Navigate to student</Link>

        <span>
          <p>Logical Arithmatic Operators</p>
          <p> 2 + 2 = {2 + 2} </p>
          <p> 2 - 2 = {2 - 2} </p>
          <p> 2 * 2 = {2 * 2} </p>
          <p> 2 / 2 = {2 / 2} </p>
          <p> 2 + 2 = {2 % 2} </p>
        </span>

        <span>
          <p>Conditional Operations</p>
          <p> 2 &gt; 2 {2 > 2 ? "TRUE" : "FALSE"} </p>
          <p> 2 &gt; 4 {2 > 4 ? "TRUE" : "FALSE"} </p>
          <p> 4 &gt; 2 {4 > 2 ? "TRUE" : "FALSE"} </p>
          <div>
            4 &gt; 2 {4 > 2 ? <h1>Hello world</h1> : <p>Hello mini world</p>}
          </div>

          
          <br />
          
          <div>
            
          </div>
        </span>

        
        
      </div>

        {/* Display API Result */}
        <p>Result: {data}</p>
      </div>
  )
}
