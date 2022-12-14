
import MingleComponent from "../mingle";

const HomeComponent = () => {
  return(
      <>
        <div className="container mt-5">
          <h1>Welcome to Music Mingles!</h1>
          <p>The #1 Spotify Extension that creates personalized blended playlists for you and your selected friend!</p>
         <p> Login with Spotify to start mingling, or explore mingles below!</p>
          <MingleComponent/>
        </div>
      </>
  );
}
export default HomeComponent;