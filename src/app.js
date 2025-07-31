document.addEventListener('DOMContentLoaded', () => {
  const team = [
    { name: 'Anwar Zbir', role: 'Founder & CEO' },
    { name: 'Jane Doe', role: 'Lead AI Engineer' },
    { name: 'John Smith', role: 'DeFi Specialist' },
  ];

  const teamList = document.getElementById('team-list');

  if (teamList) {
    team.forEach(member => {
      const listItem = document.createElement('li');
      listItem.textContent = `${member.name} - ${member.role}`;
      teamList.appendChild(listItem);
    });
  }
});
