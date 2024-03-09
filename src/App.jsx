
import './App.css'
import Counter from './Counter';
import Team from './Team';

function App() {
    function handleClick(){
        alert('button clicked!');
    }
    const handleClick2 = () => {
        alert("button 2 clicked")
    }

    const addToFive = (num) => {
        alert(num + 5);
    }

    // class-3
    // destructuring
    // const {name , age} = {name : 'naimul' , age : 20};
    // const [first , second] = [12 , 24 , 54];

    // function getSomething(){
    //     return [25 , 96]
    // }
    // getSomething()
    // const [a , b] = getSomething();

    // ***(very very important)
    // function useState(num){
    //   function updateNum(value){
    //       num = value;
    //   }
    //     return [num , updateNum]
    // }
    // const [count , setCount] = useState(5);

  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Team></Team>
      <Counter></Counter>







      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() => alert('third clicked')}>Third</button>

      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>     
    </>
  )
}

export default App
