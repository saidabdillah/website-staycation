export default function List({ children, active }) {
  return (
    <li>
      <a
        href="/"
        className={` hover:text-white  ${
          active ? "text-white" : "text-gray-900"
        } lg:hover:text-indigo-600 ${
          active ? "lg:text-indigo-700" : "lg:text-gray-900"
        }`}
      >
        {children}
      </a>
    </li>
  );
}
