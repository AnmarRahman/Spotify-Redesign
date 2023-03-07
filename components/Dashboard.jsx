import SpotifyWebApi from "spotify-web-api-node";
import Body from "./Body.jsx";
import Right from "./Right.jsx";
import Sidebar from "./Sidebar.jsx";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Body spotifyApi={spotifyApi} />
      <Right />
    </div>
  );
}

export default Dashboard;
