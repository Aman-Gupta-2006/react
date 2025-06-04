import { useState } from "react"
import Card from "./components/Card";

function App() {
  let [count, setCount] = useState(0);
 
  let increment = () => {
    setCount(count + 1);
  }

  let decrement = () => {
    setCount(count - 1);
  }

  const userInfo = [
    {
    name: "Sarah Dayan",
    role: "Staff Engineer, Algolia",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }, 
    {
    name: "John Doe",
    role: "Software Engineer, Example Corp",
    image: "https://randomuser.me/api/portraits/women/44.jpg"},
    {
    name: "Jane Smith",
    role: "Frontend Developer, Tech Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
    name: "Alice Johnson",
    role: "UI/UX Designer, Creative Agency",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]
  
  return (
    <> 
      {userInfo.map((user, index) => {
        return <Card key = { index } name = { user.name } role = { user.role } image = { user.image} />
      })}
    </>
  )
}

export default App
