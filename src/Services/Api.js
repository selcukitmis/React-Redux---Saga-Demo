import apisauce from 'apisauce';

const create = (baseURL = "https://api.github.com/") => {
  const api = apisauce.create({baseURL, timeout: 20000});

  /// Podcast Servisleri
  const GetPodcasts   = (sessionKey) => api.get('GetPodcasts', {sessionKey});
  const GetGithubUser = () => api.get("users/selcukitmis");
  return {
    GetPodcasts,
    GetGithubUser
  }
};

export default {
  create
}