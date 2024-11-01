# Spotify Redesign 🎶

A redesigned Spotify web application built with **Next.js** and **Tailwind CSS**. This project provides an updated UI experience while using Spotify's features such as browsing playlists, playing songs, and viewing album details. Requires a valid Spotify account to access features.

## Features ✨

- **Modern UI**: Redesigned Spotify interface with responsive layouts.
- **User Authentication**: Log in with your Spotify account via Spotify's OAuth.
- **Browse and Play**: Access playlists, albums, and artists directly from your account.
- **Playback Controls**: Play, pause, and control your music playback.
- **Real-Time Data**: Pulls data directly from Spotify’s API for accurate song, playlist, and artist information.

## Tech Stack 🛠️

- **Next.js** - For server-side rendering and optimized routing.
- **Tailwind CSS** - For fast and responsive UI design.
- **Spotify Web API** - To retrieve and play user data directly from Spotify.

## Getting Started 🚀

To run this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- **Spotify Developer Account** - Register at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) to create a new application and retrieve your Client ID and Client Secret.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/spotify-redesign.git
   cd spotify-redesign

2. **Install dependencies:**
   ```bash
   npm install

3. **Set up Spotify API:**

- Go to the Spotify Developer Dashboard and create a new application.
- Copy your Client ID and Client Secret.
- Set the Redirect URI to http://localhost:3000/api/auth/callback in your Spotify app settings.

4. **Configure environment variables:**

- Create a .env.local file in the root directory.
- Add the following environment variables :

  ``` bash
  NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your-client-id
  NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=your-client-secret
  NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/api/auth/callback

5. **Run the development server:**

  ```bash
  npm run dev
  ```
Open http://localhost:3000 to view it in your browser.



