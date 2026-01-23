import './App.css'

function App() {
  let counter = 15 
  const addvalue = () => {
    counter += 1
    console.log(counter); 
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>
    </>
  )
}

export default App
