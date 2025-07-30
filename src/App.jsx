import './App.css'
import bg_pic1 from './assets/assets-home/Property 1=slider_component_1.png'
import bg_pic2 from './assets/assets-home/Property 1=slider_component_2.png'
import bg_pic3 from './assets/assets-home/Property 1=slider_component_3.png'
import bg_pic4 from './assets/assets-home/Property 1=slider_component_4.png'
import bg_pic5 from './assets/assets-home/Property 1=slider_component_5.png'
import bg_pic6 from './assets/assets-home/Property 1=slider_component_6.png'

function App() {

  return (
    <>
      <div className='background-container'>
        <img className='home--background1' src={bg_pic1}/>
        <img className='home--background2' src={bg_pic2}/>
        <img className='home--background3' src={bg_pic3}/>
        <img className='home--background4' src={bg_pic4} />
        <img className='home--background5' src={bg_pic5} />
        <img className='home--background6' src={bg_pic6} />
      </div>
    </>
  )
}

export default App
