const HEADERS = {
  'Content-Type': 'application/json',
};

async function fetchGet(url = '') {
  const response = await fetch(url, {
    method: 'GET',
    headers: HEADERS,
  });
  return response.json();
}

async function fetchPost(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(data),
  });
  return response.json();
}

async function fetchPut(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: HEADERS,
    body: JSON.stringify(data),
  });
  return response.ok;
}

async function fetchPatch(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify(data),
  });
  return response.ok;
}

export {fetchGet, fetchPost, fetchPut, fetchPatch};
