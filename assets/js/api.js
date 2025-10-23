async function fetchProfileData() {
    const url = "https://cdn.jsdelivr.net/gh/Arishid/portfolio@master/assets/data/profile.json";
    const fetching = await fetch(url);
    return (await fetching).json();
}
