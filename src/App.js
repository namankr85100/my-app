import './App.css';
import { useState } from 'react'

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    return (
      setCount(count+1)
    )
  }

  
  return (
      <button onClick={handleClick}>
          Clicked {count}
      </button>
  ) 
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product => 
  <li
    key = {product.id}
    style={{
      color: products.isFruit ? 'magenta': 'darkgreen'
    }}
  >
    {product.title}
  </li>  
)


function SharedStateButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function ShareSameStateInTwoButton () {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1) 
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <SharedStateButton count={count} onClick={handleClick} />
      <SharedStateButton count={count} onClick={handleClick} />
    </div>
  )


}

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <MyButton />
      <br/>
      <br/>
      <img
       className='avatar'
       src={user.imageUrl}
       alt={'Photo of ' + user.name}
       style={{
         width: user.imageSize,
         height: user.imageSize
       }}
      />
     <br/>
     <br/>
      {listItems}
        
      <br/>
      <ShareSameStateInTwoButton/>
    </div>
  );
}

export default App;
