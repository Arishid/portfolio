(async () => {
    const profileData = await fetchProfileData();
    console.log(profileData);
    document.querySelector(".title").innerHTML = 
    `
        Olá,<br>
        eu sou o<br>
        ${profileData.nome}
    `;
    document.querySelector(".email").textContent = `${profileData.email}`;
    document.querySelector(".linkedin").textContent = `${profileData.linkedin}`;
    document.querySelector(".job").textContent = `${profileData.job}`;
    document.querySelector(".location").textContent = `${profileData.location}`;
    debugger;
    document.querySelector(".language").innerHTML = createLanguageItem(profileData.language);
})();

function createLanguageItem(language) {
    const li = document.createElement("li");
    li.textContent = language;
    return li;
}
