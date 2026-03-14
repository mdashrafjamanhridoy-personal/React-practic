import BioData from "./components/BioData"

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
  {biodataInfo.map((biodata) => (
      <BioData 
        name={biodata.name}
        phone={biodata.phone}
        skills={biodata.skills}
        address={biodata.address}
      />
  ))};
  </>
  )
}

export default App
