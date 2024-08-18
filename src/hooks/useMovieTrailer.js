// Import necessary hooks from React and Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

// Custom hook to fetch and manage movie trailer videos
const useMovieTrailer = (movieId) => {
  // Initialize the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  // Access the trailer video data from the Redux store
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // Function to fetch movie videos from The Movie Database (TMDb) API
  const getMovieVideos = async () => {
    // Fetch movie videos using the provided movie ID and API options
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    // Filter the results to find the video of type "Trailer"
    const filterData = json.results.filter((video) => video.type === "Trailer");
    // If a trailer is found, use the first one; otherwise, use the first video available
    const trailer = filterData.length ? filterData[0] : json.results[0];

    // Dispatch an action to store the trailer video in the Redux store
    dispatch(addTrailerVideo(trailer));
  };

  // useEffect hook to fetch the trailer video when the component mounts
  useEffect(() => {
    // Only fetch the trailer if it's not already available in the Redux store
    !trailerVideo && getMovieVideos();
  }, [trailerVideo]); // The effect depends on the trailerVideo value
};

// Export the custom hook as the default export
export default useMovieTrailer;
