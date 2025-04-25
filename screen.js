// عرض الوقت الحالي
function updateClock() {
    const now = new Date();
    document.getElementById('current-time').textContent = now.toLocaleTimeString('ar-EG');
}
setInterval(updateClock, 1000);

// بيانات المباريات (يمكن استبدالها بطلب API)
const liveMatches = [
    {
        id: 1,
        home_team: "النصر",
        away_team: "الهلال",
        league: "الدوري السعودي",
        time: "21:00",
        status: "live",
        score: "2-1"
    },
    {
        id: 2,
        home_team: "برشلونة",
        away_team: "ريال مدريد",
        league: "لاليغا",
        time: "22:45",
        status: "upcoming"
    }
];

// عرض المباريات
function renderMatches() {
    const container = document.getElementById('live-matches');
    
    liveMatches.forEach(match => {
        const matchElement = document.createElement('div');
        matchElement.className = 'match-card';
        
        matchElement.innerHTML = 
            <div class="match-header">
                <span class="league">${match.league}</span>
                ${match.status === 'live' ? 
                    '<span class="live-badge">مباشر</span>' : 
                    <span class="time">${match.time}</span>}
            </div>
            <div class="teams">
                <div class="team">
                    <div class="team-name">${match.home_team}</div>
                    ${match.status === 'live' ? 
                        <div class="score">${match.score.split('-')[0]}</div> : ''}
                </div>
                <div class="vs">vs</div>
                <div class="team">
                    <div class="team-name">${match.away_team}</div>
                    ${match.status === 'live' ? 
                        <div class="score">${match.score.split('-')[1]}</div> : ''}
                </div>
            </div>
        ;
        
        container.appendChild(matchElement);
    });
}

// تشغيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    renderMatches();
});
