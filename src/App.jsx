import './App.css'
import Student from '../src/components/Student.jsx'


function App() {

  return (
    <>
      <Student name="john" age={"30"} isStudent={true}/>
      <Student name={"patrick"} age={"age"} isStudent={false}/>
      <Student name={"squid ward"} age={50} isStudent={false}/>
      <Student name={"Peywan"} age={25} isStudent={true}/>
        <Student />
    </>
  )
}

export default App
