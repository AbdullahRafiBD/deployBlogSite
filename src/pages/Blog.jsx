import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";

const Blog = () => {
  // Blog start
  const [blog, setBlog] = useState([]);

  const fetchData = () => {
    return axios
      .get("https://laravelrestapi.abdullahrafi.com/api/show-all-blog")
      .then((response) => setBlog(response.data["blogs"]));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Layout>
        {/* <ul>
          {blog &&
            blog.length > 0 &&
            blog.map((userObj, index) => (
              <li key={userObj.id}>{userObj.name}</li>
            ))}
        </ul> */}

        <div>
          <div className="mx-auto max-w-7xl px-2">
            <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
              <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
                Resources and insights
              </p>
              <p className="max-w-4xl text-base text-gray-600 md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                veritatis voluptates neque itaque repudiandae sint, explicabo
                assumenda quam ratione placeat?
              </p>
              <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Search Topics"
                />
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Search
                </button>
              </div>
            </div>
            {/* <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
              <div className="flex w-full items-end border-b border-gray-300">
                <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
                  Design
                </div>
                <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
                  Product
                </div>
                <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
                  Software Engineering
                </div>
                <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black">
                  Customer Success
                </div>
              </div>
            </div> */}
            <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
              {blog &&
                blog.length > 0 &&
                blog.map((blogObj, index) => (
                  // <li key={blogObj.id}>{blogObj.name}</li>
                  <div key={blogObj.id} className="border">
                    <img
                      src={`${blogObj.image}`}
                      className="aspect-video w-full rounded-md"
                      alt
                    />
                    <div className="min-h-min p-3">
                      <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                        #Design
                      </p>
                      <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                        {blogObj.name}
                      </p>
                      <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                        {blogObj.description.substring(0, 250)}
                      </p>
                    </div>
                  </div>
                ))}

              {/* <div className="border">
                <img
                  src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  className="aspect-video w-full rounded-md"
                  alt
                />
                <div className="min-h-min p-3">
                  <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                    #Technology
                  </p>
                  <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                    The Future of Mobile App Development
                  </p>
                  <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                    Discover the latest trends and techniques that will shape
                    the future of mobile app development.
                  </p>
                  <div className="mt-4 flex space-x-3 ">
                    <img
                      className="h-full w-10 rounded-lg"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="John Smith"
                    />
                    <div>
                      <p className="text-sm font-semibold leading-tight text-gray-900">
                        John Smith
                      </p>
                      <p className="text-sm leading-tight text-gray-600">
                        1 April 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-7xl bg-gray-50"></div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
