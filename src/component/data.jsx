import React, { useRef, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
function Data({ user, repo }) {
  let myRef = useRef();

  useEffect(() => {
    if (repo) {
      window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
    }
  }, [user, repo]);

  if (!user.name) {
    return (
      <h1
        ref={myRef}
        className="text-red-600 p-10 text-5xl capitalize text-center"
      >
        user not found!!!
      </h1>
    );
  }
  let title = repo.map((x) => x.name);
  let data = repo.map((x) => x.size);
  let lang = {};
  let language = repo.map((x) => x.language);
  for (let val of language) {
    lang[val] = (lang[val] || 0) + 1;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-items-center items-center flex-col">
        <img
          ref={myRef}
          src={user.avatar_url}
          alt="avatar"
          className="rounded-full h-44"
        />
        <h1 className="pt-3 text-2xl">{user.name}</h1>
        <a href={user.html_url} className="text-blue-600 mt-8">
          {user.login}
        </a>
      </div>
      <div className=" m-12 flex flex-wrap justify-center items-center content-around space-x-12">
        <div className="bg-red-300 p-5 rounded-2xl m-4 ml-16">
          <h1>Repositories</h1>
          <p className="text-center">{user.public_repos}</p>
        </div>
        <div className="bg-red-300 p-5 rounded-2xl m-4">
          <h1>Followers</h1>
          <p className="text-center">{user.followers}</p>
        </div>
        <div className="bg-red-300 p-5 rounded-2xl m-4">
          <h1>Following</h1>
          <p className="text-center">{user.following}</p>
        </div>
      </div>
      <div className="flex content-around flex-wrap">
        <div className=" w-full md:w-1/3 h-2/5 md:mx-16">
          <h1>Activity</h1>
          <Bar
            data={{
              labels: title,
              datasets: [
                {
                  label: "",
                  data: data,
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(75, 192, 192)",
                    "rgb(255, 205, 86)",
                    "rgb(201, 203, 207)",
                    "rgb(54, 162, 235)",
                  ],
                },
              ],
            }}
            width={"30%"}
            height={"30%"}
          />
        </div>
        <div className="w-full md:w-1/3 h-2/5 md:mx-16">
          <Doughnut
            data={{
              labels: Object.keys(lang),
              datasets: [
                {
                  label: "",
                  data: Object.values(lang),
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(75, 192, 192)",
                    "rgb(255, 205, 86)",
                    "rgb(201, 203, 207)",
                    "rgb(54, 162, 235)",
                  ],
                },
              ],
            }}
            width={"30%"}
            height={"30%"}
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl ">Top Repos</h1>
        <div className="flex flex-wrap space-x-4 p-2 justify-center ">
          {repo.slice(0, 7).map((data) => {
            return (
              <div
                key={data.id}
                className="shadow-xl p-10 mt-14 w-full md:w-1/4 "
              >
                <a href={data.html_url}>
                  <h1 className="text-left text-xl">{data.name}</h1>
                  <p className="text-right">{data.language}</p>
                  <p className="text-right">{data.size} KB</p>
                  <div className="flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    <p>{data.stargazers_count}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Data;
