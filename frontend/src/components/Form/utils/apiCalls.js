const BASE_URL = 'http://localhost:8080';

const getCoordinates = async (query) => {
  const { access_token } = JSON.parse(localStorage.getItem('collectupAuth'));

  const res = await fetch(`${BASE_URL}/forward`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      method: 'GET',
      url: `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(
        query
      )}`,
      authorization: `Bearer ${access_token}`,
    }),
  });

  if (res.status === 200) {
    const body = await res.json();
    if (body.items.length > 0) return body.items[0].position;
  }

  return { lat: undefined, lng: undefined };
};

export default getCoordinates;
