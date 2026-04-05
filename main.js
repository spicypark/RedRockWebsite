const aboutPages = ['about-org', 'about-first', 'student-leaders', 'mentors'];
const robotDetailPages = ['robot-2026a', 'robot-2026b', 'robot-2025', 'robot-2024', 'robot-2023', 'robot-2022'];
let activeRobotsTeam = '3006';

function setRobotsTeam(team) {
  activeRobotsTeam = team;

  const list3006 = document.getElementById('robots-list-3006');
  const list2726 = document.getElementById('robots-list-2726');
  const btn3006 = document.getElementById('robots-team-3006');
  const btn2726 = document.getElementById('robots-team-2726');

  if (!list3006 || !list2726 || !btn3006 || !btn2726) return;

  const show3006 = team === '3006';
  list3006.classList.toggle('hidden', !show3006);
  list2726.classList.toggle('hidden', show3006);

  btn3006.classList.toggle('active', show3006);
  btn2726.classList.toggle('active', !show3006);
  btn3006.setAttribute('aria-selected', show3006 ? 'true' : 'false');
  btn2726.setAttribute('aria-selected', show3006 ? 'false' : 'true');
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(id);
  if (page) page.classList.add('active');

  if (id === 'robots') setRobotsTeam(activeRobotsTeam);

  document.querySelectorAll('.nav-right a, .nav-right .dropdown-trigger').forEach(a => a.classList.remove('active'));

  let navTarget = id;
  if (aboutPages.includes(id)) navTarget = 'about';
  else if (robotDetailPages.includes(id)) navTarget = 'robots';

  const navEl = document.getElementById('nav-' + navTarget);
  if (navEl) navEl.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitSponsorForm() {
  const company = document.getElementById('s-company').value.trim();
  const name    = document.getElementById('s-name').value.trim();
  const email   = document.getElementById('s-email').value.trim();
  if (!company || !name || !email) {
    alert('Please fill in the required fields (Company, Name, and Email).');
    return;
  }
  document.getElementById('sponsor-form-wrap').style.display = 'none';
  document.getElementById('form-submitted').style.display = 'block';
}