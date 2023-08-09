import { options } from '../var';

async function fetch_api_json(url) {
    const ContentPromise = fetch(url, options);
    const [contentM] = await Promise.all([ContentPromise]);
    return await contentM.json();
}

export default fetch_api_json;
