// eslint-disable-next-line react/prop-types
const Button = ({ callApi }) => {
  return <button className="bg-blue-500 hover:bg-blue-600 text-white transition p-4 mt-4 shadow-lg rounded-md hover cursor-pointer" onClick={callApi}>Click to generate a joke.</button>;
};

export default Button;
