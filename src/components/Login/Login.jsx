/* eslint-disable react/prop-types */
const Login = ({ setIsLogin, setIsRegister }) => {
  const handleRegister = () => {
    setIsLogin(false);
    setIsRegister(true);
  };
  return (
    <div onClick={() => setIsLogin(false)} className="fixed inset-0 bg-black-50 w-full h-screen elementCenter">
      <div onClick={(e) => e.stopPropagation()} className="bg-white w-[400px] h-[400px] rounded-lg p-[20px] m-[20px] relative">
        <div className=" flex flex-col items-start mb-7 mt-4">
          <h2 className="text-2xl font-bold text-black mb-[10px]">Login</h2>
          <p className="text-gray-600 font-semibold text-[14px]">
            Welcome back! Please enter your details.
          </p>
        </div>
        <form>
          <div className="email flex flex-col mb-[20px]">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              className="input"
            />
          </div>
          <div className="password flex flex-col mb-[20px]">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              className="input"
            />
          </div>
          <div className="flex gap-6 items-end mt-[40px]">
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className="loginBtn"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => handleRegister()}
              className="registerBtn"
            >
              Register
            </button>
          </div>
        </form>
        <div onClick={() => setIsLogin(false)} className="absolute top-4 right-4 cursor-pointer text-2xl bg-blue-500 px-2 pb-1 rounded-md text-white hover:bg-blue-600 transition">
          x
        </div>
      </div>
    </div>
  );
};

export default Login;
