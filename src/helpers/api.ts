import constants from '../utils/constants';

function api(query: string, method = 'GET'): Promise<Response> {
  return new Promise((resolve, reject) =>
    fetch(`${constants.apiUrl}/${query}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
    }).then(
      (response) => resolve(response.json()),
      (e) => reject(e)
    )
  );
}

export default api;
