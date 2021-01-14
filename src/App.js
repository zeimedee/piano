import React,{ useEffect, useRef,useState} from 'react';
import './App.css';

function App() {

  const divRef = useRef();

  const [pressed1,setPresed1] = useState('keys')
  const [pressed2,setPresed2] = useState('keys')
  const [pressed3,setPresed3] = useState('keys')
  const [pressed4,setPresed4] = useState('keys')
  const [pressed5,setPresed5] = useState('keys')
  const [pressed6,setPresed6] = useState('keys')
  const [pressed7,setPresed7] = useState('keys')
  const [pressed8,setPresed8] = useState('keys')
  const [pressed9,setPresed9] = useState('keys')

  const handleKey =(e)=>{
    switch(e.key){
      case 'a':
        setPresed1('keyPressed');
        break
      case 's':
        setPresed2('keyPressed');
        break
      case 'd':
        setPresed3('keyPressed');
        break
      case 'f':
        setPresed4('keyPressed');
        break
      case 'g':
        setPresed5('keyPressed');
        break
      case 'h':
        setPresed6('keyPressed');
        break
      case 'j':
        setPresed7('keyPressed');
        break
      case 'k':
        setPresed8('keyPressed');
        break
      case 'l':
        setPresed9('keyPressed');
        break

      default:
        alert('is not a key')

    }
  }

  const released =(e)=>{
    switch(e.key){
      case 'a':
        setPresed1('keys');
        break
      case 's':
        setPresed2('keys');
        break
      case 'd':
        setPresed3('keys');
        break
      case 'f':
        setPresed4('keys');
        break
      case 'g':
        setPresed5('keys');
        break
      case 'h':
        setPresed6('keys');
        break
      case 'j':
        setPresed7('keys');
        break
      case 'k':
        setPresed8('keys');
        break
      case 'l':
        setPresed9('keys');
        break

      default:
        alert('is not a key')
  }
}

  useEffect(() => {
    divRef.current.focus();
    
  }, [])

  return (
    <div className="App">
     <div className='keyboard'>
          <div className={pressed1} 
                onKeyDown={handleKey} 
                onKeyUp={released}
                ref={divRef}
                tabIndex="0"></div>

          <div className={pressed2} 
                onKeyDown={handleKey} 
                onKeyUp={released}
                ref={divRef}
                tabIndex="1"></div>

          <div className={pressed3} 
                onKeyDown={handleKey} 
                onKeyUp={released}
                tabIndex="2"></div>
                
          <div className={pressed4} 
                onKeyDown={handleKey} 
                onKeyUp={released}
                tabIndex="3"></div>

          <div className={pressed5} 
                onKeyDown={handleKey} 
                onKeyUp={released}
                tabIndex="4"></div>

          <div className={pressed6}
                onKeyDown={handleKey} 
                onKeyUp={released}
                tabIndex="5"></div>

          <div className={pressed7} 
                onKeyDown={handleKey} 
                onKeyUp={released}
                tabIndex="6"></div>

          <div className={pressed8} 
                onKeyDown={handleKey} 
                onKeyUp={released}
                tabIndex="7"></div>

          <div className={pressed9}
                onKeyDown={handleKey} 
                onKeyUp={released}
                tabIndex="8"></div>
     </div>
    </div>
  );
}

export default App;
