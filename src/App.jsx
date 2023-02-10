import { useState } from "react";

import "./App.css";

import drawers from "./assets/images/drawers.jpg";
import avatar from "./assets/images/avatar-michelle.jpg";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <div className="h-screen w-screen flex justify-center items-center bg-gray-300">
        <div className="card h-[500px] w-80 bg-gray-100 rounded-lg shadow-md">
          <img
            className="h-2/5 w-full bg-slate-200"
            src={drawers}
            alt="cover"
          />
          <article className="h-3/5 flex flex-col justify-between text-gray-600 text-sm ">
            <p className="font-bold px-8 pt-8">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </p>
            <p className="text-gray-500 px-8">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>
            <div>
              <div className="flex justify-between m-6">
                <div className="flex">
                  <img
                    className="h-10 rounded-full"
                    src={avatar}
                    alt="avatar"
                  />
                  <div className="ml-4">
                    <p className="font-semibold">Michelle Appleton</p>
                    <span className="text-xs font-medium text-gray-400">
                      28 Jun 2020
                    </span>
                  </div>
                </div>
                <button
                  className="bg-gray-200 rounded-full p-3 group"
                  onClick={() => setActive(!active)}
                >
                  <svg
                    className="fill-gray-500 group-active:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                  >
                    <path
                      // fill="#6E8098"
                      d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
