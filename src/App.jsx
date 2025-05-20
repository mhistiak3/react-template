import Toolbar from "./components/Event";

function App() {
  function handleEvent(e) {
    if (e.target.matches("li")) {
      console.log(e.target);
    }
  }
  return (
    <main className="app" style={{ padding: "20px" }}>
      <ul onClick={handleEvent}>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
      <Toolbar />

      <div
        onClickCapture={() => {
         console.log('s');
         
        }}
      >
        <button onClick={(e) => e.stopPropagation()} >sad</button>
        <button onClick={(e) => e.stopPropagation()} >sad</button>
      </div>
    </main>
  );
}

export default App;
