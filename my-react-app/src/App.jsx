import BioData from "./components/BioData"
import CounterApp from "./components/CounterApp"
import TodoApp from "./components/TodoApp"
import TodoContextProvider from "./context/TodoContext"

const biodataInfo = [
  {
    name: "ashraf",
    phone: "+880123456789",
    skills: ["React", "Js"],
    address: "Dhaka"
  },
  {
    name: "jaman",
    phone: "+880123456789",
    skills: ["django", "Js"],
    address: "Dhaka"
  }
]

function App() {
  return (
    <>
      {biodataInfo.map((biodata, index) => (
        <BioData 
          key={index}
          name={biodata.name}
          phone={biodata.phone}
          skills={biodata.skills}
          address={biodata.address}
        />
      ))}

      <CounterApp />

      <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider>
    </>
  )
}

export default App;