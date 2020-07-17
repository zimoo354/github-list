const baseUrl = "https://api.github.com";

export const getUserProfile = username => {
  let user;
  return fetch(`${baseUrl}/users/${username}`)
    .then(response => response.json());
};

export const getUser = username => {
  const urls = [
    `${baseUrl}/users/${username}`,
    `${baseUrl}/users/${username}/repos`,
  ];
  return Promise.all(urls.map(u=>fetch(u))).then(responses =>
      Promise.all(responses.map(res => res.json()))
  );  
}
