const baseUrl = "https://api.github.com";

export const getUser = username => {
  const urls = [
    `${baseUrl}/users/${username}`,
    `${baseUrl}/users/${username}/repos`,
  ];
  return Promise.all(urls.map(url => fetch(url)))
    .then(
      responses => Promise.all(responses.map(res => res.json())
    ),
  );  
}
