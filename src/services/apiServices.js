export const getApiData = async (endpoints, ...params) => {
    try {
        const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoints}`)
        const response = await fetch(url, {
            method: 'GET',
        });

        if(!response.ok) {
            console.error(e);
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (e) {
        console.error('Catch error:', e);
    }
}

