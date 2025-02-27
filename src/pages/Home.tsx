import { useState } from 'react'
import { TodoItem, TodoList } from '../components';

import LightIcon from '../assets/light.svg'
import DarkIcon from '../assets/dark.svg'

function Home() {
  const [mode, setMode] = useState('light');

  const handleMode = () =>{
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

  }

  return (
    <>
      <div className="home">
        {/* titile */}
        <div
          className="text-white font-bold text-5xl home-title flex justify-between items-center
          "
        >
          <span>TODO</span>

          <img src={mode === 'light' ? LightIcon : DarkIcon} alt="icon" className="w-10 h-10 cursor-pointer" onClick={handleMode} />
        </div>

        <TodoItem />
        <TodoList />
      </div>
    </>
  );
}

export default Home
