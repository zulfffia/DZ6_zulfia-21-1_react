import {useEffect, useState} from "react";

function App() {
  const [lists, setLists] = useState(['Азамат', 'Лейла', 'Абай'])
  return (
    <div className="App">
      <ul>
        {
          lists.map((i, k) => <li key={k}>{i}</li>)
        }
      </ul>
    </div>
  );
}

export default App;