async function fetchMatches() {
    const response = await fetch('https://api.example.com/matches');
    return await response.json();
}

function displayMatches(matches) {
    const container = document.getElementById('matches');
    container.innerHTML = matches.map(match => 
        <div class="match">
            <h3>${match.home_team} vs ${match.away_team}</h3>
            <p>الوقت: ${match.time}</p>
        </div>
    ).join('');
}

fetchMatches().then(displayMatches);
