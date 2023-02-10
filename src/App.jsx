import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="h-screen w-screen flex justify-center items-center bg-gray-300">
        <div className="card h-[500px] w-80 bg-gray-100 rounded-lg shadow-md">
          <img className="h-2/5 w-full bg-slate-200" src="" alt="cover" />
          <div className="h-3/5 flex flex-col justify-between text-gray-600 text-sm p-8">
            <p className="font-bold">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </p>
            <p className="text-gray-500">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>
            <div className="flex justify-between">
              <img src="" alt="avatar" />
              <div>
                <p>Michelle Appleton</p>
                <span>28 Jun 2020</span>
              </div>
              <button>{">"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
