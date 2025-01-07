/* eslint-disable react/prop-types */
const Register = ({setIsRegister, setIsLogin}) => {
  const handleLogin = () => {
    setIsRegister(false);
    setIsLogin(true);
  };
  return (
    <div onClick={() => setIsRegister(false)} className="fixed inset-0 bg-black-50 w-full h-screen elementCenter z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white w-[400px] h-[600px] rounded-lg p-[20px] m-[20px] relative">
        <h2 className="text-2xl font-bold text-black mb-[40px]">Register</h2>
        <form className="">
          <div className="name mb-7 flex flex-col">
            <label htmlFor="name" className="label ">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              placeholder="Enter your name"
            />
          </div>
          <div className="email mb-7 flex flex-col">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="input"
              placeholder="Enter your email"
            />
          </div>
          <div className="password mb-7 flex flex-col">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              placeholder="Enter your password"
            />
          </div>
          <div className="confirm-password mb-7 flex flex-col">
            <label htmlFor="confirm-password" className="label">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="input"
              placeholder="Confirm your password"
            />
          </div>
          <div className="register flex flex-col mb-7">
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white py-2 rounded-md tracking-wide font-semibold">Register</button>
          </div>
          <p className="text-center">
            Already have an account?
            <span className="text-blue-600 cursor-pointer" onClick={() => handleLogin()}>Login</span>
          </p>
        </form>
        <div onClick={() => setIsRegister(false)} className="absolute top-4 right-4 cursor-pointer text-2xl bg-blue-500 px-2 pb-1 rounded-md text-white hover:bg-blue-600 transition">
          x
        </div>
      </div>
    </div>
  );
};

export default Register;
