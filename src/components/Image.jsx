const Image = ({ data }) => {
  return (
    <div className="relative group">
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img className="h-72 w-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition duration-300" src={data.urls.small} alt={data.alt_description} />
      </a>
      <div className="absolute top-0 right-0 bg-white bg-opacity-75 p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:translate-x-2">
        <h3 className="text-lg font-semibold">{data.alt_description}</h3>
        <p className="text-sm">{data.description || "No description available."}</p>
      </div>
    </div>
  )
}

export default Image;
