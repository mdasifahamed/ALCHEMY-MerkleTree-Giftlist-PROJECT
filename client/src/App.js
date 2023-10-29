import MyProvider from "./Mycontex";
import Home from "./components/Home";
function App() {
  return (
    <>
      <MyProvider>
        <Home></Home>
      </MyProvider>
    </>
    
  );
}

export default App;
