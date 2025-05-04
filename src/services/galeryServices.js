export async function getGalery(searchTerm, page) {
    const URL = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=12&page=${page}`;

    const TOKEN = "LjQh3F2ALNMQckc5n0qEzslCACb3qMC7QZouHbxigZsyVVC59T89qETx";

    let request = {
        method: "GET",
        headers: {
            Authorization: TOKEN,
        },
    };

    let apiResponse = await fetch(URL, request);
    let photoData = await apiResponse.json();
    return photoData;
}