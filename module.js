(() => {
  const moduleId = Number(document.body.dataset.module);
  const data = COURSE_MODULES.find(item => item.id === moduleId);
  if (!data) return;

  const visuals = {
    1:[
      {after:0,src:'design-cycle.svg',alt:'Five-stage design cycle from investigate to evaluate',caption:'Keep returning to the brief as evidence changes your decisions.'},
      {after:1,src:'module-01-design-planning-photo.png',alt:'Colour photograph of lunch-bag concepts, fabric swatches and textiles tools on a classroom design table',caption:'Early design work connects different concepts to real materials, tools and user needs.'}
    ],
    2:[
      {after:0,src:'module-02-textile-samples-photo.png',alt:'Colour photograph comparing fibres, yarns, woven, knitted and non-woven textile samples',caption:'Inspecting real structures helps students move beyond choosing fabric by colour alone.'},
      {after:1,src:'textile-structure.svg',alt:'Fibres combining into yarn and yarns interlacing to form fabric',caption:'Structure helps explain why fabrics stretch, fray, fold and sew differently.'}
    ],
    3:[
      {after:0,src:'module-03-lunch-waste-audit-photo.png',alt:'Colour photograph comparing clean single-use lunch packaging with reusable containers and a textile lunch bag',caption:'A waste audit starts with real items and frequency, then identifies realistic opportunities to reduce single-use packaging.'},
      {after:1,src:'life-cycle.svg',alt:'Reusable lunch bag life cycle from raw materials through use, repair and end of life',caption:'A reusable solution creates benefits only when it is kept, cared for and used.'}
    ],
    4:[
      {after:0,src:'safety-zone.svg',alt:'Safe sewing workspace with a clear needle zone and stored sharp tools',caption:'Clear routines keep sharp, moving and heat hazards visible and controlled.'},
      {after:1,src:'module-04-safe-workstation-photo.png',alt:'Colour photograph of an organised school sewing workstation with a clear machine area and separate heat-safe iron zone',caption:'Good setup makes hazard controls visible before practical work begins.'}
    ],
    5:[
      {after:0,src:'module-05-design-options-photo.png',alt:'Colour photograph of four genuinely different reusable lunch-bag concept sketches',caption:'Genuine alternatives change form, closure, carrying method and surface design, not only colour.'},
      {after:1,src:'design-options.svg',alt:'Four genuinely different lunch bag concepts',caption:'Compare alternatives against the same criteria before selecting a direction.'}
    ],
    6:[
      {after:0,src:'module-06-sewing-system-photo.png',alt:'Close colour photograph of the needle, presser foot, fabric and seam guide on a classroom sewing machine',caption:'The needle area is one part of a system that positions thread, holds fabric and supports controlled feeding.'},
      {after:1,src:'sewing-system.svg',alt:'Sewing machine system showing needle, presser foot, feed dogs and bobbin',caption:'Stitches form because several parts hold, move and interlock thread around the fabric.'}
    ],
    7:[
      {after:1,src:'module-07-stitch-quality-photo.png',alt:'Colour photograph comparing balanced, looping, puckered and skipped stitch samples',caption:'Visible stitch symptoms are evidence: stop, compare both fabric sides and check one likely cause at a time.'},
      {after:2,src:'sewing-system.svg',alt:'Sewing machine parts involved in controlled stitch formation',caption:'Use the system diagram to connect a stitch symptom to setup, machine parts or fabric handling.'}
    ],
    8:[
      {after:0,src:'module-08-applique-samples-photo.png',alt:'Colour photograph of three applique samples exploring colour, placement and edge stitching',caption:'Side-by-side samples make refinement decisions visible before final project material is used.'},
      {after:1,src:'applique-test.svg',alt:'Applique sample and refinement process',caption:'A small sample protects final project pieces and gives evidence for improvement.'}
    ],
    9:[
      {after:0,src:'construction-flow.svg',alt:'Construction flow from checking instructions through making, testing and cleanup',caption:'Plan the complete practical, including quality checks, evidence and cleanup.'},
      {after:2,src:'module-09-production-evidence-photo.png',alt:'Colour photograph of partly assembled lunch-bag panels, a workplan and a tablet recording construction evidence',caption:'Photograph real checkpoints and explain the decision, problem or correction each image proves.'}
    ],
    10:[
      {after:0,src:'module-10-testing-evaluation-photo.png',alt:'Colour photograph of a finished reusable lunch bag beside containers, a tape measure and an evaluation sheet',caption:'Capacity, closure, carrying and finish should be tested with real evidence, not judged from appearance alone.'},
      {after:1,src:'evaluation-loop.svg',alt:'Criterion, test, evidence, judgement and improvement evaluation loop',caption:'A useful evaluation connects each judgement to evidence and a specific next step.'}
    ]
  };
  const activityLabels = ['Design brief evidence lab','Textile sample investigation','Lunch-waste action investigation','Safety scenario studio','Four-concept design studio','Sewing machine systems lab','Stitch detective lab','Designer and applique sample studio','Production control room','Product test and evaluation lab'];
  const moduleVideoSection = {1:1,2:2,3:1,4:1,5:2,6:1,7:1,8:2,10:2};
  const presentationFiles = [
    'Lunch-Is-Packed-Module-01-the-design-challenge.pptx',
    'Lunch-Is-Packed-Module-02-textiles-around-us.pptx',
    'Lunch-Is-Packed-Module-03-sustainable-lunch-choices.pptx',
    'Lunch-Is-Packed-Module-04-tools-materials-and-safety.pptx',
    'Lunch-Is-Packed-Module-05-develop-and-communicate-ideas.pptx',
    'Lunch-Is-Packed-Module-06-know-the-sewing-machine.pptx',
    'Lunch-Is-Packed-Module-07-set-up-and-practise.pptx',
    'Lunch-Is-Packed-Module-08-decoration-and-surface-design.pptx',
    'Lunch-Is-Packed-Module-09-plan-and-construct.pptx',
    'Lunch-Is-Packed-Module-10-test-evaluate-and-improve.pptx'
  ];

  document.title = `Module ${data.id}: ${data.title} | Lunch Is Packed`;
  document.querySelector('[data-module-header]').innerHTML = `<p class="eyebrow">Module ${data.id} of ${COURSE_MODULES.length}</p><h1>${data.title}</h1><p class="lede">${data.subtitle}</p>`;
  document.querySelector('[data-contents]').innerHTML = data.sections.map((s, i) => `<li><a href="#section-${i + 1}">${s.title}</a></li>`).join('');

  const figureHtml = item => `<figure class="teaching-visual"><a href="../assets/${item.src}" target="_blank" rel="noopener"><img src="../assets/${item.src}" alt="${item.alt}" loading="lazy"></a><figcaption>${item.caption} <a href="../assets/${item.src}" target="_blank" rel="noopener">Open larger</a></figcaption></figure>`;
  const videoHtml = (video, sectionNumber) => `<aside class="video-learning" aria-labelledby="video-title-${sectionNumber}"><div class="video-copy"><p class="eyebrow">Watch and notice</p><h3 id="video-title-${sectionNumber}">${video.title}</h3><p>${video.purpose}</p><p class="watch-for"><strong>Watch for:</strong> ${video.watchFor}</p><p class="fine">${video.channel} · YouTube</p></div><div><div class="video-frame" data-video-frame><button type="button" class="video-launch" data-video-load="${video.id}" aria-label="Play ${video.title}"><img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="" loading="lazy"><span class="video-play" aria-hidden="true">▶</span><span class="video-launch-label">Play video</span></button></div><p class="video-fallback"><a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener">Open in YouTube ↗</a></p></div></aside>`;
  const presentationHtml = () => `<aside class="module-presentation" aria-labelledby="module-presentation-title"><div><p class="eyebrow">Module presentation</p><h2 id="module-presentation-title">Learn with the slides</h2><p>This teacher-style presentation explains the three sections in this module. You can use it independently to review the ideas, answer the checks and prepare your written responses.</p><p class="fine">PowerPoint file · 8 slides · includes teaching notes</p></div><a class="button tomato presentation-download" href="../resources/presentations/${presentationFiles[moduleId - 1]}" download>Download Module ${moduleId} PowerPoint</a></aside>`;
  const questionHtml = (item, qi, section) => {
    const saved = readJSON(`lunchpacked:check:${section.learningId}:${qi}`);
    return `<fieldset class="question" data-question="${qi}" data-review="${section.title}"><legend>${qi + 1}. ${item.q}</legend>${item.options.map((option, oi) => `<label class="option"><input type="radio" name="${section.learningId}-q${qi}" value="${oi}" ${saved.selected === oi ? 'checked' : ''}> <span>${option}</span></label>`).join('')}<button type="button" class="button secondary compact check-one" data-check-one>Check answer</button><p class="feedback ${saved.checked ? (saved.correct ? 'good' : 'try') : ''}" aria-live="polite">${saved.checked ? feedbackText(saved.correct, section.title) : ''}</p></fieldset>`;
  };
  const evidenceHtml = (section, index) => {
    const w = section.written;
    return `<section class="section-evidence" aria-labelledby="evidence-${section.learningId}"><p class="eyebrow">Written evidence ${moduleId}.${index + 1}</p><h3 id="evidence-${section.learningId}">${w.label}</h3><button type="button" class="button secondary response-help-toggle" data-response-help aria-expanded="false" aria-controls="guide-${w.id}">What is this asking?</button><div class="response-guide" id="guide-${w.id}" hidden><p><strong>In plain language:</strong> ${w.clarify}</p><ol>${w.steps.map(step => `<li>${step}</li>`).join('')}</ol><p><strong>Sentence starter:</strong> ${w.starter}</p><p><a href="#section-${index + 1}">Return to the precise relevant theory section: ${section.title}</a></p><details><summary>Appropriate response example</summary><p>${w.example}</p></details></div><label class="sr-only" for="${w.id}">${w.label}</label><textarea id="${w.id}" data-save-key="lunchpacked:${w.id}" placeholder="Write your response here…"></textarea><p class="save-status" id="status-${w.id}" aria-live="polite"></p></section>`;
  };

  document.querySelector('[data-theory]').innerHTML = presentationHtml() + data.sections.map((section, i) => {
    const figures = (visuals[moduleId] || []).filter(v => v.after === i).map(figureHtml).join('');
    const video = moduleVideoSection[moduleId] === i + 1 ? COURSE_VIDEOS[`${moduleId}.${i + 1}`] : null;
    return `<section class="theory-block" id="section-${i + 1}"><h2>${section.title}</h2>${section.html}</section>${figures}${video ? videoHtml(video, `${moduleId}-${i + 1}`) : ''}<details class="section-learning" id="check-${section.learningId}"><summary><span>Learning activity ${moduleId}.${i + 1}</span><strong>10 questions + written response</strong></summary><div class="section-learning-body"><p>Answer all ten questions. Feedback returns you to this precise theory section when you need another look.</p><div data-section-check="${section.learningId}">${section.questions.map((item, qi) => questionHtml(item, qi, section)).join('')}</div>${evidenceHtml(section, i)}</div></details>`;
  }).join('');

  const oldCheck = document.getElementById('knowledge-check');
  const oldEvidence = document.getElementById('make-evidence');
  if (oldCheck) oldCheck.remove();
  if (oldEvidence) oldEvidence.remove();

  const aside = document.querySelector('.module-aside');
  aside.insertAdjacentHTML('beforeend', `<hr><h3>Project activity</h3><p>${activityLabels[moduleId - 1]}</p><a class="button secondary compact" href="../activities.html#activity-${moduleId}">Open activity</a><button class="button secondary compact" type="button" data-print-module>Print / Save PDF</button>`);
  aside.querySelector('[data-print-module]').addEventListener('click', () => window.print());

  document.querySelectorAll('[data-check-one]').forEach(button => {
    button.addEventListener('click', () => {
      const fieldset = button.closest('[data-question]');
      const sectionBox = button.closest('[data-section-check]');
      const section = data.sections.find(s => s.learningId === sectionBox.dataset.sectionCheck);
      const qi = Number(fieldset.dataset.question);
      const selected = fieldset.querySelector('input:checked');
      const feedback = fieldset.querySelector('.feedback');
      if (!selected) {
        feedback.className = 'feedback try';
        feedback.textContent = 'Choose an answer, then check again.';
        return;
      }
      const selectedIndex = Number(selected.value);
      const correct = selectedIndex === section.questions[qi].answer;
      localStorage.setItem(`lunchpacked:check:${section.learningId}:${qi}`, JSON.stringify({selected:selectedIndex, checked:true, correct}));
      feedback.className = `feedback ${correct ? 'good' : 'try'}`;
      feedback.innerHTML = correct ? 'Correct — keep going.' : `Not yet. Review <a href="#section-${data.sections.indexOf(section) + 1}">${section.title}</a>, then try again.`;
      updateProgress();
    });
  });

  document.querySelectorAll('[data-response-help]').forEach(button => {
    button.addEventListener('click', () => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });
  });

  document.querySelectorAll('[data-video-load]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.videoLoad;
      const frame = button.closest('[data-video-frame]');
      const title = button.getAttribute('aria-label').replace(/^Play /, '');
      frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
      frame.querySelector('iframe').focus();
    });
  });

  document.querySelectorAll('[data-save-key]').forEach(area => {
    area.value = localStorage.getItem(area.dataset.saveKey) || '';
    let timer;
    area.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        localStorage.setItem(area.dataset.saveKey, area.value);
        const status = document.getElementById(`status-${area.id}`);
        status.textContent = 'Saved on this device';
        setTimeout(() => { status.textContent = ''; }, 1800);
        updateProgress();
      }, 250);
    });
  });

  const previous = document.querySelector('[data-previous]');
  const next = document.querySelector('[data-next]');
  if (moduleId === 1) { previous.href = '../index.html'; previous.textContent = '← Course home'; }
  else { previous.href = `module-${String(moduleId - 1).padStart(2, '0')}.html`; previous.textContent = `← Module ${moduleId - 1}`; }
  if (moduleId === COURSE_MODULES.length) { next.href = '../folio.html'; next.textContent = 'Open My folio →'; }
  else { next.href = `module-${String(moduleId + 1).padStart(2, '0')}.html`; next.textContent = `Module ${moduleId + 1} →`; }

  function readJSON(key) {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); }
    catch (_) { return {}; }
  }
  function feedbackText(correct, review) {
    return correct ? 'Correct — keep going.' : `Not yet. Review ${review}, then try again.`;
  }
  function updateProgress() {
    const responses = data.sections.filter(section => (localStorage.getItem(`lunchpacked:${section.written.id}`) || '').trim().length >= 20).length;
    const correct = data.sections.reduce((total, section) => total + section.questions.filter((_, qi) => readJSON(`lunchpacked:check:${section.learningId}:${qi}`).correct).length, 0);
    const total = data.sections.length * 11;
    const pct = Math.round(((responses + correct) / total) * 100);
    document.querySelector('[data-progress]').style.width = `${pct}%`;
    document.querySelector('[data-progress-text]').textContent = `${correct} of 30 questions correct and ${responses} of 3 written responses saved on this device`;
  }
  updateProgress();
})();
