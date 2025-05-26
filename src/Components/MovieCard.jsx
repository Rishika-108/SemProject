import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="group">
      <div className="bg-gradient-to-br from-[#1e1e1e] to-[#111] rounded-xl overflow-hidden shadow-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 border border-transparent hover:border-pink-500/50">
        <div className="w-full h-72 overflow-hidden rounded-t-xl relative">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-200">
            {movie.title}
          </h3>
          <p className="text-sm text-pink-200 italic tracking-wide">{movie.genre}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
// import { Link } from "react-router-dom";

// const MovieCard = ({ movie }) => {
//   return (
//     <Link to={`/movies/${movie.id}`} className="group relative block rounded-xl overflow-hidden shadow-xl border border-transparent hover:border-pink-500/50 transition duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 bg-gradient-to-br from-[#1e1e1e] to-[#111]">
      
//       <div className="w-full h-72 overflow-hidden rounded-t-xl relative">
//         <img
//           src={movie.poster}
//           alt={movie.title}
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//         {/* Play button overlay on hover */}
//         {movie.trailer && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-16 w-16 text-pink-400"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={1}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.75A.75.75 0 007 8.243v7.514a.75.75 0 001.234.645l6.518-3.75a.75.75 0 000-1.29z" />
//             </svg>
//           </div>
//         )}
//       </div>

//       <div className="p-4">
//         <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-200">
//           {movie.title}
//         </h3>
//         <p className="text-sm text-pink-200 italic tracking-wide">{movie.genre}</p>
//       </div>
//     </Link>
//   );
// };

// export default MovieCard;
