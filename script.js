// بيانات المباريات المباشرة (مثال)
const matches = [
  { home: "النصر", away: "الهلال", status: "مباشر", time: "20:00" },
  { home: "برشلونة", away: "ريال مدريد", status: "قادمة", time: "22:45" }
];

function displayMatches() {
  const container = document.getElementById('matches-list');
  
  matches.forEach(match => {
    const matchElement = document.createElement('div');
    matchElement.className = 'match-card';
    matchElement.innerHTML = 
      <div class="teams">
        <span class="home">${match.home}</span> 
        <span class="vs">vs</span>
        <span class="away">${match.away}</span>
      </div>
      <div class="match-info">
        <span class="time">${match.time}</span>
        <span class="status ${match.status === 'مباشر' ? 'live' : ''}">
          ${match.status}
        </span>
      </div>
    ;
    container.appendChild(matchElement);
  });

  // تحديث استخدام الذاكرة
  document.getElementById('memory').textContent = '49.5 MB';
}

// تشغيل الوظيفة عند تحميل الصفحة
window.onload = displayMatches;
