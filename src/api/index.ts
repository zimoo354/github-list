const baseUrl = "https://api.github.com";

export const getUser = async (username: string) => {
  const urls = [
    `${baseUrl}/users/${username}`,
    `${baseUrl}/users/${username}/repos`,
  ];
  const responses = await Promise.all(urls.map(url => fetch(url)));
    return await Promise.all(responses.map(res => {
      if (res.status != 200)
        return null;

      return res.json();
    })
  );  
}
