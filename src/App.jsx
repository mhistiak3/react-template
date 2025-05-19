function App() {
 
  function handleEvent(e){
console.log(e.target);

  }
  return (
    <main className="app" style={{ padding: "20px" }}>

      <ul onClick={handleEvent}>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </main>
  );
}

export default App;
