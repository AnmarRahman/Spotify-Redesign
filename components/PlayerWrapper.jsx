import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";
import { useClient } from "urql";
import dynamic from "next/dynamic";

const SpotifyPlayer = dynamic(() => import("react-spotify-web-playback"), {
  ssr: false,
});

function PlayerWrapper({ accessToken, trackUri }) {
  const window = useClient();
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  useEffect(() => {
    if (trackUri) {
      setPlay(true);
    }
  }, [trackUri]);

  useEffect(() => {
    if (window && window.Spotify) {
      const player = new window.Spotify.Player({
        name: "My Web Player",
        getOAuthToken: (cb) => {
          cb(accessToken);
        },
      });

      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("playback_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("player_state_changed", (state) => {
        console.log(state);
        setPlayingTrack(state.track_window.current_track);
      });

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        // Now you can start playback using device_id
      });

      player.connect();
    }
  }, [window, accessToken]);

  return (
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
      uri={trackUri ? [trackUri] : []}
      magnifySliderOnHover={true}
      autoPlay={true}
    />
  );
}

export default PlayerWrapper;
