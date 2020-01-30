
export const getRepos = (query = "") => {
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve();
    } else {
      const formattedQuery = query.toLowerCase();
      const results = githubAPIGet(formattedQuery);
      resolve(results);
    }
  });
};

const githubAPIGet = async (query: string) => {
	try {
	  let response = await fetch(
		'https://api.github.com/search/repositories?q='+ query +'&sort=stars&order=desc',
	  );
	  let responseJson = await response.json();
	  debugger;
	  return responseJson;
	} catch (error) {
	  console.error(error);
	}
}