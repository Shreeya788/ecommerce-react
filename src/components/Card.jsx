import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border max-w-sm h-[80%] rounded-xl ">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
        <img src={props.image} alt="" className="object-cover max-h-90 w-fit" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {props.titleText}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {props.price}
          </p>
        </div>
        <p className="block h-5 font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 overflow-hidden">
          {/* Display only two lines of description */}
          <span className="truncate">{props.description}</span>
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs pt-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  titleText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
