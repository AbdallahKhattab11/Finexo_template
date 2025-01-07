/* eslint-disable react/prop-types */
const Button = ({children}) => {
  return (
    <button type="button" className="">
      <a href="#" className="inline-block text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-sm text-md px-5 py-2.5 text-center transition">
        {children}
      </a>
    </button>
  )
}

export default Button