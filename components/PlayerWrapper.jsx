import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";
import { useClient } from "urql";
import SpotifyPlayer from "react-spotify-web-playback";

// function Player({ accessToken, trackUri }) {
//   const client = useClient();
//   const [play, setPlay] = useRecoilState(playState);
//   const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

//   useEffect(() => {
//     if (trackUri) {
//       setPlay(true);
//     }
//   }, [trackUri]);

//   if (!accessToken || !client) return null;

//   return (
//     <>
//       {/* Premium Users */}
//       <SpotifyPlayer
//         styles={{
//           activeColor: "#fff",
//           bgColor: "#181818",
//           color: "#fff",
//           loaderColor: "#fff",
//           sliderColor: "#1cb954",
//           trackArtistColor: "#ccc",
//           trackNameColor: "#fff",
//           height: "70px",
//           sliderTrackColor: "#535353",
//           sliderTrackBorderRadius: "4px",
//           sliderHandleColor: "#fff",
//           errorColor: "#fff",
//         }}
//         token={accessToken}
//         showSaveIcon
//         callback={(state) => {
//           setPlay(state.isPlaying);
//         }}
//         play={play}
//         uris={trackUri ? [trackUri] : []}
//         magnifySliderOnHover={true}
//         autoPlay={true}
//       />
//     </>
//   );
// }

// export default Player;

export const PlayerWrapper = ({ accessToken, trackUri }) => {
  const client = useClient();
  //   const { accessToken, trackUri } = props;
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  useEffect(() => {
    if (trackUri) {
      setPlay(true);
    }
  }, [trackUri]);

  if (!accessToken || !client) return null;

  return (
    <>
      {/* Premium Users */}
      <SpotifyPlayer
        styles={{
          activeColor: "#fff",
          bgColor: "#181818",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
          height: "70px",
          sliderTrackColor: "#535353",
          sliderTrackBorderRadius: "4px",
          sliderHandleColor: "#fff",
          errorColor: "#fff",
        }}
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          setPlay(state.isPlaying);
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        magnifySliderOnHover={true}
        autoPlay={true}
      />
    </>
  );
};
