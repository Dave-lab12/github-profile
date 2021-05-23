import React, { useState, useRef } from "react";
import img from "../img/bg.svg";
import { AiFillGithub } from "react-icons/ai";
import Data from "./data";
function Home() {
  const URL2 = "";
  const [user, setUser] = useState(null);
  const [repo, setRepo] = useState([]);
  const [userName, setUserName] = useState("");
  const URL = `https://api.github.com/users/${userName}`;

  const getUserData = async () => {
    const fetchData = await fetch(URL);
    const fetchRepo = await fetch(`${URL}/repos`);
    const data = await fetchData.json();
    const data2 = await fetchRepo.json();

    setUser(data);
    setRepo(data2);
    console.log(data.code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserData();
  };
  let myRef = useRef();
  window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className=" h-screen w-full"
      >
        <div className="flex justify-items-center items-center flex-col space-y-16 pt-7">
          <h1 className="text-5xl text-yellow-100">Welcome</h1>

          <AiFillGithub className="text-8xl" />

          <p className=" text-2xl text-yellow-100">
            Enter your Github Username
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center space-x-8 ">
              <div className="flex flex-row-reverse">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-yellow-100 outline-none text-xl text-yellow-100"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6  text-yellow-100 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className="p-3 outline-white rounded-sm text-yellow-100"
                onClick={handleSubmit}
              >
                Search{" "}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div ref={myRef}>{user ? <Data user={user} repo={repo} /> : ""}</div>
    </div>
  );
}

export default Home;
