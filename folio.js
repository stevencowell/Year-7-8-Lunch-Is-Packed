(() => {
  const container = document.querySelector('[data-folio]');
  container.innerHTML = COURSE_MODULES.map(module => `<article class="card"><p class="eyebrow">Module ${module.id}</p><h3>${module.title}</h3>${module.prompts.map(prompt => `<div class="evidence-card"><label for="folio-${prompt.id}">${prompt.label}</label><textarea id="folio-${prompt.id}" data-save-key="lunchpacked:${prompt.id}" placeholder="No response saved yet."></textarea></div>`).join('')}<a href="modules/module-${String(module.id).padStart(2,'0')}.html#section-1">Return to Module ${module.id} →</a></article>`).join('');
  const saveAreas = document.querySelectorAll('[data-save-key]');
  saveAreas.forEach(area => {
    area.value = localStorage.getItem(area.dataset.saveKey) || '';
    area.addEventListener('input', () => localStorage.setItem(area.dataset.saveKey, area.value));
  });
  document.querySelectorAll('[data-folio-meta]').forEach(field => {
    const key = `lunchpacked:folio:${field.dataset.folioMeta}`;
    field.value = localStorage.getItem(key) || '';
    field.addEventListener('input', () => {
      localStorage.setItem(key, field.value);
      document.querySelector('[data-meta-status]').textContent = 'Saved on this device';
    });
  });
  function payload() {
    const values = {};
    Object.keys(localStorage).filter(k => k.startsWith('lunchpacked:')).forEach(k => { values[k] = localStorage.getItem(k); });
    return {course:'Lunch Is Packed', version:1, exportedAt:new Date().toISOString(), values};
  }
  document.querySelector('[data-download]').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(payload(), null, 2)], {type:'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `lunch-is-packed-folio-${new Date().toISOString().slice(0,10)}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
    document.querySelector('[data-file-status]').textContent = 'Backup downloaded.';
  });
  document.querySelector('#restore-file').addEventListener('change', async event => {
    const file = event.target.files[0]; if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (data.course !== 'Lunch Is Packed' || !data.values) throw new Error('Not a Lunch Is Packed backup');
      Object.entries(data.values).forEach(([key, value]) => { if (key.startsWith('lunchpacked:')) localStorage.setItem(key, String(value)); });
      location.reload();
    } catch {
      document.querySelector('[data-file-status]').textContent = 'That file could not be restored. Choose a Lunch Is Packed JSON backup.';
    }
  });
  document.querySelector('[data-print]').addEventListener('click', () => window.print());

  const activityTitles = ['Design brief evidence lab','Textile sample investigation','Lunch-waste action investigation','Safety scenario studio','Four-concept design studio','Sewing machine systems lab','Stitch detective lab','Designer and appliqué sample studio','Production control room','Product test and evaluation lab'];
  const escapeHtml = value => value.replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const summary = document.querySelector('[data-activity-summary]');
  summary.innerHTML = activityTitles.map((title, i) => {
    const prefix = `lunchpacked:activity:a${i+1}-`;
    const keys = Object.keys(localStorage).filter(k => k.startsWith(prefix)).sort();
    const responses = keys.map(key => ({
      label: localStorage.getItem(`lunchpacked:activity-meta:${key.slice('lunchpacked:activity:'.length)}`) || 'Written response',
      value: (localStorage.getItem(key) || '').trim()
    })).filter(item => item.value);
    const evidence = responses.map(item => `<div class="activity-evidence"><strong>${escapeHtml(item.label)}</strong><p>${escapeHtml(item.value).replace(/\n/g,'<br>')}</p></div>`).join('');
    return `<article class="card activity-summary-card"><div class="module-card"><div class="number">${i+1}</div><div><h3>${title}</h3><p>${responses.length ? `${responses.length} response${responses.length===1?'':'s'} saved` : 'Not started on this device'}</p><a href="activities.html#activity-${i+1}">Open activity →</a></div></div>${evidence}</article>`;
  }).join('');
  const guidedSaved = [...document.querySelectorAll('[data-save-key]')].filter(field => field.value.trim()).length;
  const activitySaved = Object.keys(localStorage).filter(key => key.startsWith('lunchpacked:activity:a') && (localStorage.getItem(key) || '').trim()).length;
  const checksCorrect = Object.keys(localStorage).filter(key => key.startsWith('lunchpacked:check:')).filter(key => {
    try { return JSON.parse(localStorage.getItem(key)).correct === true; } catch { return false; }
  }).length;
  document.querySelector('[data-guided-count]').textContent = guidedSaved;
  document.querySelector('[data-activity-count]').textContent = activitySaved;
  document.querySelector('[data-check-count]').textContent = checksCorrect;
  document.querySelector('[data-print-activities-summary]').addEventListener('click', () => window.print());
})();
