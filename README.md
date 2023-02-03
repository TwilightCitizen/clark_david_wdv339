# Project Portfolio III

## Student Information

| Item    | Data                |
|:--------|:--------------------|
| Name    | David A. Clark, Jr. |
| Number  | #0004796375         |
| Class   | WDV339-O            |
| Term    | C202302             |
| Section | 01                  |

## Overview

### Selected Technologies

- Front End UI with React
- Back End Versioned API with Express
- Back End Storage Persisted in Redis Cache
- Application Data from Spotify Web API

### Project Organization

It is important to understand the project organization.  Issuing commands from within the incorrect directory will yield unexpected results.

| Component    | Directory     |
|:-------------|:--------------|
| Project Root | ./            |
| Express API  | ./express-api |
| React App    | ./react-app   |

### Branching Strategy

This project follows a branching strategy similar to but less stringent than [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow):

- Avoid code commits directly to branch 'main'
- Avoid code commits directly to branch 'development'
- Prefer new branches off 'development' for features
- Feature branches merged into 'development' via pull request when complete
- 'development' branch merged into 'main' branch via pull request for release
- Release branch off branch 'main' so bug fixes can be cherry-picked or pull requested as needed
- Delete feature branches after pull request to minimize branch pollution

### User Experience

- Prompt unauthenticated user to login in absence of Spotify token, retrieving, persisting, and refreshing token upon login
- Allow authenticated user to search Spotify for items of interest, such as artists, albums, and tracks matching supplied criteria
- Allow authenticated user to navigate to Spotify via search results to view or play selected artist, albums, or track

### User Interface

- Persistent Header
  - Conditionally Displayed Search Component
- Routing to Pages:
  - Login
    - Button or Link
  - No Search Results
    - Placeholder Text/Image
  - Search Results
    - Cards of Albums, Artists, or Tracks
    - Album, Artist, or Track Filtering Mechanism
  - Not Found / Error
    - Root Navigation

## Prerequisites

### Operating System Requirements

Either of--

| OS        | Version       |
|:----------|:--------------|
| GNU/Linux | >= Latest LTS |
| Mac OS    | 2 (Monterey)  |

### Platform Requirements

All of--

| Component      | Version     |
|:---------------|:------------|
| Docker Engine  | >= 20.10.5  |
| Docker Compose | >= 1.25.0-1 |
| Node           | >= 19.3.0   |
| npm            | >= v9.2.0   |

### Browser Requirements

Any of--

| Browser | Version                    |
|:--------|:---------------------------|
| Chrome  | >= Latest 2 Major Versions |
| Firefox | "                          |
| Safari  | "                          |
| Edge    | "                          |

## Considerations

The application requires a working internet connection to function.

Ports 3000, 3001, and 6379 must be open on the host machine for the application to function.

To find processes running on any of the aforementioned ports, run the following command from a terminal, replacing *PORT* with the port number:

> sudo lsof -i :*PORT*

To terminate any processes found in the preceding step, run the following command from a terminal, replacing *PORT* with the port number:

> sudo fuser -k *PORT*/tcp

## Getting Started

### Project Setup

After cloning the repository, first issue the following commands from a terminal within the *Express API* directory to establish environment variables required by the server.  Be sure to replace *YOUR_CLIENT_ID* and *YOUR_CLIENT_SECRET* with values you have obtained from your own Spotify Developer Account.

> sed -i -e 's/your_spotify_client_id/*YOUR_SPOTIFY_CLIENT_ID*/g' .env
> 
> sed -i -e 's/your_spotify_client_secret/*YOUR_SPOTIFY_CLIENT_SECRET*/g' .env

Then, issue the following command from a terminal within the *Project Root* to install all Node project and development dependencies:

> npm i

### Running the Application

Issue the following command from a terminal within the *Project Root* to start the application:

> npm run dev:react

To halt the application, from a terminal within the *Project Root*, issue the SIGNINT signal, often mapped to <Ctrl> + <c>.

## Links

| Link                                        | Description                                                  |
|:--------------------------------------------|:-------------------------------------------------------------|
| http://localhost:3000                       | React Front End UI (Specific Routes to Be Determined)        |
| http://localhost:3001                       | Express Back End                                             |
| http://localhost:3001/api/v1                | Express Back End API Routes Base URL                         |
| http://localhost:3001/api/v1/spotify        | Express Back End API Routes for Spotify Application          |
| http://localhost:3001/api/v1/spotify/login  | Spotify Application API Route for Obtaining a New Auth Token |
| http://localhost:3001/api/v1/spotify/auth   | Spotify Application API Route for Redirect after Login       |
| http://localhost:3001/api/v1/spotify/status | Spotify Application API Route for Validity of Token          |
| http://localhost:3001/api/v1/spotify/search | Spotify Application API Route for Search Results             |
| redis://localhost:6379                      | Redis Back End Storage Cache                                 |
