const baseUrl = "https://api.github.com";

const Api = {
  getUser: async (username: string) => {
    const urls = [
      `${baseUrl}/users/${username}`,
      `${baseUrl}/users/${username}/repos`,
    ];
    const responses = Promise.all(urls.map(u=>fetch(u))).then(responses =>
      Promise.all(responses.map(res => res.json()))
    ).then(jsons => {
      return {
        user: jsons[0],
        repositories: jsons[1],
      };
    });
    return responses;
  },
};

export default Api;
