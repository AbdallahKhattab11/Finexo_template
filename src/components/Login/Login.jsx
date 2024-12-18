import { useState } from "react";
import Register from "../Register/Register";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        className="bg-primary text-white px-6 py-2 rounded-md"
        onClick={openModal}
      >
        Login
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 elementCenter bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl text-black font-bold mb-4 text-center">Login</h2>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block mb-2 text-black font-bold"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-2 border border-gray-300 rounded-md outline-none text-black font-medium"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-black font-bold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded-md outline-none text-black font-medium"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md"
              >
                Login
              </button>
              <div className="separator elementCenter my-[20px]">
                <span className="text-black">or</span>
              </div>
              <button className="text-blue-500 text-[17px] mx-auto block ">
                <Register />
              </button>
            </form>

            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-[22px] hover:text-gray-300 border-2 rounded-md px-2 bg-blue-500 transition"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
