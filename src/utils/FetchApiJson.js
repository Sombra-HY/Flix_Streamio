import { options } from '../data/urls';

async function fetch_api_json(url) {
    const ContentPromise = fetch(url, options);
    const [contentM] = await Promise.all([ContentPromise]);
    return await contentM.json();
}

export default fetch_api_json;
