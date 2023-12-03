import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Layout from "../layout/Layout";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // declare user variable to fetch user data from database vai axios
  /* const [user, setUser] = useState([]);

  const fetchData = () => {
    return axios
      .get("http://127.0.0.1:8000/api/users")
      .then((response) => setUser(response.data["users"]));
  };

  useEffect(() => {
    fetchData();
  }, []); */

  // Subscribe  start here
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function save() {
    let item = { email };
    // console.warn(item);
    let result = await fetch(
      "https://laravelrestapi.abdullahrafi.com/api/subscribe-user",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    console.warn("result", result);
    navigate("/");
  }

  // Blog start
  const [blog, setBlog] = useState([]);

  const fetchData = () => {
    return axios
      .get("https://laravelrestapi.abdullahrafi.com/api/show-blog")
      .then((response) => setBlog(response.data["blogs"]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <ul>
        {blog &&
          blog.length > 0 &&
          blog.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
      </ul> */}
      {/* <Layout>
        <h1>user data</h1>
        <ul>
          {user &&
            user.length > 0 &&
            user.map((userObj, index) => (
              <li key={userObj.id}>{userObj.name}</li>
            ))}
        </ul>
      </Layout> */}
      <Layout>
        <div className="relative w-full bg-white">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
              {/* <svg
                width={30}
                height={36}
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg> */}
              <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
                <div className="rounded-full bg-white p-1 px-2">
                  <p className="text-sm font-medium">We hiring</p>
                </div>
                <p className="text-sm font-medium">Join our team →</p>
              </div>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                People who care about your growth
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur modi blanditiis dolores quasi eaque explicabo!
              </p>
              <form action className="mt-8 flex items-start space-x-2">
                <div>
                  <input
                    className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    We care about your privacy
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={save}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
              <img
                className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt
              />
            </div>
          </div>
        </div>

        <section className="relative overflow-hidden py-20">
          <div className="relative">
            <div className="mx-auto max-w-xl lg:max-w-7xl">
              <div className="mx-auto mb-14 max-w-2xl text-center">
                <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">
                  OUR BLOG
                </span>
                <h1 className="text-5xl font-bold">
                  Latest news from our blog
                </h1>
              </div>
              <div className="my-18 -mx-4 flex flex-wrap px-4">
                <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
                  <a className="group block w-full" href="#">
                    <img
                      className="mb-5 block w-full rounded-lg"
                      src="https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt
                    />
                    <span className="mb-5 block text-gray-500">
                      Jul 20, 2023
                    </span>
                    <h4 className="mb-5 text-3xl font-semibold text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h4>
                    <p className="max-w-xl text-lg text-gray-500">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit xercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                  </a>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  {/* <a className="group mb-8 md:flex" href="#">
                    <img
                      className="h-40 w-48 rounded-lg"
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                      alt
                    />
                    <div className="my-4 pt-2 md:ml-6 md:mt-0">
                      <span className="mb-2 block text-gray-500">
                        Jul 20, 2022
                      </span>
                      <h4 className="text-xl font-semibold text-gray-900">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </h4>
                    </div>
                  </a> */}
                  {blog &&
                    blog.length > 0 &&
                    blog.map((blogObj, index) => (
                      // <li key={blogObj.id}>{blogObj.name}</li>
                      <a
                        key={blogObj.id}
                        className="group mb-8 md:flex"
                        href="#"
                      >
                        <img
                          className="h-40 w-48 rounded-lg"
                          src={`${blogObj.image}`}
                          alt
                        />
                        <div className="my-4 pt-2 md:ml-6 md:mt-0">
                          <span className="mb-2 block text-gray-500">
                            {blogObj.created_at}
                          </span>
                          <h4 className="text-xl font-semibold text-gray-900">
                            {blogObj.name}
                          </h4>
                        </div>
                      </a>
                    ))}
                </div>
              </div>
              <div className="mt-14 text-center">
                <Link
                  to={"/blog"}
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  View All Posts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
