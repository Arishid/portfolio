(async () => {
    const profileData = await fetchProfileData();
    console.log(profileData);
    document.querySelector(".title").innerHTML = 
    `
        Olá,<br>
        eu sou o<br>
        ${profileData.nome}
    `;
    debugger;
    document.querySelector(".linkedin a").href = `${profileData.linkedin}`;
    document.querySelector(".job").innerHTML = `${profileData.job}`;
    document.querySelector(".location").innerHTML = `${profileData.location}`;
    document.querySelector(".language").innerHTML = profileData.language.map(createLanguageItem).join("");
    document.querySelector(".formacao").innerHTML = profileData.formacao.map(createFormacaoItem).join("");
    document.querySelector(".experience").innerHTML = profileData.experiencia.map(createExperienceItem).join("");
})();

function createLanguageItem(language) {
    return `<li>${language}</li>`;
}

function createFormacaoItem(formacao) {
    return `
    <li>
        <span class="title">${formacao.titulo}</span> 
        <span class="subtitle">${formacao.ano} - ${formacao.instituicao}</span>
    </li>`;
}

function createExperienceItem(experience) {
    return `
    <li>
        <span class="title">${experience.titulo}</span> 
        <span class="subtitle">${experience.ano} - ${experience.instituicao}</span>
        <br>
        ${experience.descricao}
    </li>`;
}

