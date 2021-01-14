import React,{ useEffect, useRef,useState} from 'react';
import './App.css';
import n1 from './samples/a-3.mp3'
import n2 from './samples/a-4.mp3'
import n3 from './samples/a-5.mp3'
import n4 from './samples/a3.mp3'
import n5 from './samples/a4.mp3'
import n6 from './samples/a5.mp3'
import n7 from './samples/b3.mp3'
import n8 from './samples/b4.mp3'
import n9 from './samples/b5.mp3'
import n10 from './samples/c-3.mp3'


function App() {
  const note1 =  new Audio(n1);
  const note2 =  new Audio(n2);
  const note3 =  new Audio(n3);
  const note4 =  new Audio(n4);
  const note5 =  new Audio(n5);
  const note6 =  new Audio(n6);
  const note7 =  new Audio(n7);
  const note8 =  new Audio(n8);
  const note9 =  new Audio(n9);
  const note10 =  new Audio(n10);
  const divRef = useRef();

  useEffect(() => {
    divRef.current.focus();
  }, [])

  const [pressed1,setPresed1] = useState('keys')
  const [pressed2,setPresed2] = useState('keys')
  const [pressed3,setPresed3] = useState('keys')
  const [pressed4,setPresed4] = useState('keys')
  const [pressed5,setPresed5] = useState('keys')
  const [pressed6,setPresed6] = useState('keys')
  const [pressed7,setPresed7] = useState('keys')
  const [pressed8,setPresed8] = useState('keys')
  const [pressed9,setPresed9] = useState('keys')
  const [pressed10,setPresed10] = useState('keys')

  const handleKey =(e)=>{
    switch(e.key){
      case 'a':
        setPresed1('keyPressed');
        note1.play();
        break
      case 's':
        setPresed2('keyPressed');
        note2.play();
        break
      case 'd':
        setPresed3('keyPressed');
        note3.play();
        break
      case 'f':
        setPresed4('keyPressed');
        note4.play();
        break
      case 'g':
        setPresed5('keyPressed');
        note5.play();
        break
      case 'h':
        setPresed6('keyPressed');
        note6.play();
        break
      case 'j':
        setPresed7('keyPressed');
        note7.play();
        break
      case 'k':
        setPresed8('keyPressed');
        note8.play();
        break
      case 'l':
        setPresed9('keyPressed');
        note9.play();
        break
      case';':
      setPresed10('keyPressed');
      note10.play();
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
      case ';':
      setPresed10('keys');
        break

      default:
        alert('is not a key')
  }
}

  

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
                
          <div className={pressed10}
                onKeyDown={handleKey} 
                onKeyUp={released}
                tabIndex="9"></div>
     </div>
    </div>
  );
}

export default App;
