const username = "kaysociety"; // <-- change this

async function loadRepos() {
    const container = document.getElementById("repo-container");

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();

        repos.slice(0, 6).forEach(repo => {
            const card = document.createElement("div");
            card.classList.add("repo-card");

            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : "No description available"}</p>
                <div class="repo-stats">
                    ⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}
                </div>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = "<p>Failed to load GitHub projects.</p>";
    }
}

loadRepos();