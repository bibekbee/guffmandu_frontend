const LoadingSpinner = () => {
  return (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              className="opacity-35"
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              strokeWidth="2"
            ></circle>
            <path
              fill="white"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
  )
};

export default LoadingSpinner;
