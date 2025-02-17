// import { useState } from 'react'
import Light from '../assets/light.svg'
import Dark from '../assets/dark.svg'

function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="home">
        {/* titile */}
        <div
          className="text-white font-bold text-5xl home-title flex justify-between items-center
          "
        >
          <span>TODO</span>

          <img src={Light} alt="light" className="w-10 h-10 cursor-pointer
" />
        </div>
      </div>
    </>
  );
}

export default Home;
