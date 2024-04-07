import './App.css'
import Card from './componants/Card'

function App() {
  let myobj = {
      name: "Jay Mistry",
      location:
          "https://res.cloudinary.com/meoncloud101/image/upload/v1708481266/vgmvyarbzp3w7mpbgths.jpg",
  };

  return (
    <>
      <h1 className='bg-green-400 p-4 text-black rounded-2xl mb-3'>Tailwind</h1>
      <Card data={myobj} />
    </>
  )
}

export default App
