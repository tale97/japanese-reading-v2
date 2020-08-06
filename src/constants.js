export const USER_INPUT = "USER_INPUT";

const method = "tuanHeroku";

var REGISTER_URL = "https://localhost:3000/register";
var SIGNIN_URL = "https://localhost:3000/signin";
var PROFILE_URL = "https://localhost:3000/profile/";
var GETWORD_URL = "https://shrouded-harbor-11572.herokuapp.com/getwordinfo";
var MEDIA_BASE_URL_SENTENCE =
  "https://s3.amazonaws.com/media.japanesereading.com/sentence-sound/";
var MEDIA_BASE_URL_WORD =
  "https://s3.amazonaws.com/media.japanesereading.com/word-sound/";
var MEDIA_BASE_URL_CHAR =
  "https://s3.amazonaws.com/media.japanesereading.com/character-sound/kanasound-"; // add {romaji}.mp3

switch (method) {
  case "local":
    break;
  case "tuanHeroku":
    REGISTER_URL = "https://shrouded-harbor-11572.herokuapp.com/register";
    SIGNIN_URL = "https://shrouded-harbor-11572.herokuapp.com/signin";
    PROFILE_URL = "https://shrouded-harbor-11572.herokuapp.com/profile/";
    break;
  case "lienHeroku":
    REGISTER_URL = "https://peaceful-sands-25473.herokuapp.com/register";
    SIGNIN_URL = "https://peaceful-sands-25473.herokuapp.com/signin";
    PROFILE_URL = "https://peaceful-sands-25473.herokuapp.com/profile/";
    break;
  default:
    console.log("method should be either tuanHeroku, lienHeroku, or local");
    break;
}

export {
  REGISTER_URL,
  SIGNIN_URL,
  PROFILE_URL,
  GETWORD_URL,
  MEDIA_BASE_URL_SENTENCE,
  MEDIA_BASE_URL_WORD,
  MEDIA_BASE_URL_CHAR,
};
