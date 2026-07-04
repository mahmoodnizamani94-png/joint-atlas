const sources = {
  aaosKnee: 'https://orthoinfo.aaos.org/en/recovery/knee-conditioning-program/',
  aaosKnee2: 'https://orthoinfo.aaos.org/en/staying-healthy/knee-exercises/',
  aaosHip: 'https://orthoinfo.aaos.org/en/recovery/hip-conditioning-program/',
  nhsSciatica: 'https://www.nhs.uk/live-well/exercise/exercises-sciatica-problems/',
  niceBack: 'https://www.nice.org.uk/guidance/ng59',
  arthritisOA: 'https://www.arthritis.org/health-wellness/healthy-living/physical-activity/getting-started/benefits-of-exercise-for-osteoarthritis',
  arthritisWeight: 'https://www.arthritis.org/health-wellness/healthy-living/nutrition/weight-loss/oa-diagnosis-why-weight-loss-matters'
};

const icon = (type = 'default') => {
  const svgs = {
    quad: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-quad"><rect x="22" y="98" width="98" height="10" rx="5" class="motion-fill"/><circle cx="44" cy="48" r="10" class="motion-dot"/><path d="M38 59c15 4 25 17 32 38" class="motion-soft"/><path d="M30 103h63" class="motion-line"/><path d="M66 94l47-30" class="motion-line"/><path d="M105 62l18 5" class="motion-soft"/></svg>`,
    heel: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-heel"><rect x="25" y="96" width="90" height="10" rx="5" class="motion-fill"/><circle cx="43" cy="47" r="10" class="motion-dot"/><path d="M38 59c18 4 28 18 35 36" class="motion-soft"/><path d="M31 101h43" class="motion-line"/><path d="M73 101c18-10 26-24 22-42" class="motion-line"/></svg>`,
    bridge: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-bridge"><rect x="18" y="103" width="104" height="9" rx="5" class="motion-fill"/><circle cx="38" cy="75" r="10" class="motion-dot"/><path d="M47 78c24-25 47-22 63 22" class="motion-line"/><path d="M26 108h34M102 108h22" class="motion-soft"/></svg>`,
    clam: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-clam"><circle cx="38" cy="59" r="10" class="motion-dot"/><path d="M48 66c19 2 30 11 44 25" class="motion-soft"/><path d="M70 91l40-23" class="motion-line"/><path d="M69 93l43 13" class="motion-soft"/><path d="M54 105h73" class="motion-fill"/></svg>`,
    chair: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-chair"><path d="M93 42h29v72" class="motion-soft"/><path d="M82 75h43" class="motion-soft"/><circle cx="54" cy="42" r="10" class="motion-dot"/><path d="M55 55l17 33" class="motion-line"/><path d="M72 88l-22 29" class="motion-line"/><path d="M72 88l25 25" class="motion-soft"/></svg>`,
    step: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-step"><path d="M70 112h50V85H88V58H58" class="motion-fill"/><circle cx="49" cy="36" r="10" class="motion-dot"/><path d="M52 49l19 43" class="motion-line"/><path d="M71 92l30-7" class="motion-line"/><path d="M71 92l-21 31" class="motion-soft"/></svg>`,
    calf: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-calf"><path d="M104 32v86" class="motion-soft"/><circle cx="59" cy="38" r="10" class="motion-dot"/><path d="M61 51l7 43" class="motion-soft"/><path d="M68 94l-16 30" class="motion-line"/><path d="M69 94l26 29" class="motion-line"/><path d="M50 124h21M92 124h24" class="motion-soft"/></svg>`,
    balance: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-balance"><path d="M104 33v86" class="motion-soft"/><circle cx="59" cy="39" r="10" class="motion-dot"/><path d="M61 52l7 39" class="motion-line"/><path d="M68 91l-14 31" class="motion-line"/><path d="M68 91l28 7" class="motion-soft"/><path d="M45 124h24" class="motion-fill"/></svg>`,
    back: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-back"><circle cx="48" cy="37" r="10" class="motion-dot"/><path d="M50 50c-4 18 1 34 17 48" class="motion-line"/><path d="M67 98l-23 28" class="motion-soft"/><path d="M67 98l38 25" class="motion-line"/><path d="M54 60l41 19" class="motion-soft"/></svg>`,
    cat: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-cat"><circle cx="36" cy="68" r="10" class="motion-dot"/><path d="M48 72c22-20 45-20 66 0" class="motion-line"/><path d="M53 80l-13 34M97 80l14 34" class="motion-soft"/><path d="M28 116h24M100 116h24" class="motion-fill"/></svg>`,
    walk: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-walk"><circle cx="59" cy="35" r="10" class="motion-dot"/><path d="M60 49l-6 35" class="motion-line"/><path d="M54 84l-23 36" class="motion-line"/><path d="M55 84l37 22" class="motion-soft"/><path d="M58 58l33-4" class="motion-soft"/></svg>`,
    march: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-march"><circle cx="70" cy="35" r="10" class="motion-dot"/><path d="M70 47v35" class="motion-line"/><path d="M70 82l-22 36" class="motion-line"/><path d="M70 82l22-12v22" class="motion-line"/><path d="M64 54l-18 10" class="motion-soft"/><path d="M74 54l16 12" class="motion-soft"/></svg>`,
    ankle: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-ankle"><path d="M42 26c21 20 25 41 12 64" class="motion-soft"/><path d="M53 90l52 19" class="motion-line"/><path d="M83 112h34" class="motion-fill"/><path d="M52 89c12-3 23-2 33 5" class="motion-line"/></svg>`,
    default: `<svg viewBox="0 0 140 140" aria-hidden="true" class="icon-svg icon-default"><circle cx="52" cy="42" r="10" class="motion-dot"/><path d="M55 55l18 38" class="motion-line"/><path d="M72 92l-20 30" class="motion-line"/><path d="M73 92l31 24" class="motion-soft"/><path d="M58 64l38-12" class="motion-soft"/></svg>`
  };
  return svgs[type] || svgs.default;
};

const exercises = [
  {id:'easy-walk', name:'Easy walk', areas:['knee','hip','ankle','sciatica','cardio'], icon:'walk', why:'Warms the body and builds stamina without heavy pounding.', how:'Walk on flat ground. Keep steps short and smooth. Stop before limping starts.', dose:'5–25 minutes', easier:'Walk indoors or break into 3–5 minute blocks.', harder:'Add 2–3 minutes per week.', warning:'Avoid hills if knee, hip, or sciatica pain flares.', source:sources.arthritisOA},
  {id:'indoor-march', name:'Low-impact indoor marching', areas:['knee','hip','ankle','sciatica','cardio'], icon:'march', why:'A high-reward, joint-friendly cardio alternative that requires zero equipment.', how:'Stand tall near a wall or counter for balance. Lift knees gently in a slow, rhythmic march. Land softly on your feet.', dose:'5–20 minutes', easier:'March while seated in a sturdy chair.', harder:'Pump arms in sync with steps and lift knees slightly higher.', warning:'Stop if lower back arches or hip pain spikes.', source:sources.arthritisOA},
  {id:'stationary-bike', name:'Stationary bike', areas:['knee','hip','ankle','cardio'], icon:'walk', why:'Low-impact cardio that moves the knees and hips repeatedly without impact.', how:'Use low resistance. Seat high enough that the knee is not deeply bent at the top.', dose:'5–25 minutes', easier:'Rock pedals back and forth before full circles.', harder:'Add time before adding resistance.', warning:'Stop if knee pain rises or hip pinches.', source:sources.arthritisOA},
  {id:'quad-set', name:'Quad squeeze / knee press-down', areas:['knee'], icon:'quad', why:'Turns on the front thigh muscle without loading the knee heavily.', how:'Lie or sit with leg straight. Tighten thigh and gently press knee down. Hold, then relax.', dose:'2 sets × 10, hold 5 sec', easier:'Do it seated with a towel under the knee.', harder:'Hold 8–10 seconds.', warning:'No sharp kneecap pain.', source:sources.aaosKnee},
  {id:'heel-slide', name:'Heel slide', areas:['knee','hip'], icon:'heel', why:'Restores gentle knee bending and reduces stiffness.', how:'Lie on back or sit. Slide heel toward buttocks, then slide back out. Stay smooth.', dose:'2 sets × 10', easier:'Use a towel under heel.', harder:'Pause 2 seconds at comfortable bend.', warning:'Do not force deep bending.', source:sources.aaosKnee},
  {id:'straight-leg-raise', name:'Straight-leg raise', areas:['knee','hip'], icon:'quad', why:'Strengthens the thigh while avoiding deep knee bending.', how:'One knee bent, other leg straight. Tighten thigh and lift straight leg 6–10 inches. Lower slowly.', dose:'2–3 sets × 8–12', easier:'Lift lower or do fewer reps.', harder:'Add light ankle weight only after several easy weeks.', warning:'Stop if back arches or pain shoots down the leg.', source:sources.aaosKnee},
  {id:'bridge', name:'Glute bridge', areas:['knee','hip','sciatica'], icon:'bridge', why:'Builds glutes and hamstrings so the knee and low back get more support.', how:'Lie on back, knees bent. Squeeze buttocks and lift hips. Keep ribs down and lower slowly.', dose:'2–3 sets × 8–15', easier:'Lift only halfway.', harder:'Pause 3 seconds at top.', warning:'No back pinching or leg numbness.', source:sources.aaosHip},
  {id:'clamshell', name:'Clamshell', areas:['knee','hip'], icon:'clam', why:'Strengthens side hip muscles that control knee position.', how:'Lie on side, knees bent, feet together. Open top knee without rolling pelvis backward.', dose:'2 sets × 10–15 each side', easier:'Smaller opening.', harder:'Add a light band above knees.', warning:'Do not twist the back to cheat.', source:sources.aaosHip},
  {id:'side-hip-raise', name:'Side-lying hip raise', areas:['knee','hip'], icon:'clam', why:'Builds outer hip strength for walking, stairs, and knee alignment.', how:'Lie on side. Top leg straight, toes slightly down. Lift slowly, lower slowly.', dose:'2 sets × 8–12 each side', easier:'Do standing hip abduction instead.', harder:'Add a light ankle weight.', warning:'If side hip pinches, reduce range.', source:sources.aaosHip},
  {id:'standing-hip-abduction', name:'Standing side leg lift', areas:['knee','hip','ankle'], icon:'balance', why:'A standing version of hip strengthening for people who dislike floor work.', how:'Hold chair. Keep body tall. Move one leg out to the side. Return slowly.', dose:'2 sets × 10 each side', easier:'Smaller range.', harder:'Add band around ankles.', warning:'Do not lean the trunk far to the side.', source:sources.aaosHip},
  {id:'sit-to-stand', name:'Chair sit-to-stand', areas:['knee','hip','ankle'], icon:'chair', why:'The best real-life strength move: standing from a chair, stairs, and toilet transfers.', how:'Sit on firm chair. Feet under knees. Lean forward. Stand slowly. Sit slowly.', dose:'2–3 sets × 6–12', easier:'Use higher chair or hands.', harder:'Lower chair height or hold light weight.', warning:'Knees should not collapse inward.', source:sources.aaosKnee2},
  {id:'mini-squat', name:'Mini squat / wall squat', areas:['knee','hip'], icon:'chair', why:'Builds leg strength while keeping the bend shallow and controlled.', how:'Hold counter or lean against wall. Bend knees slightly, then stand tall.', dose:'2 sets × 8–10', easier:'Make it very shallow.', harder:'Pause 2 seconds at the bottom.', warning:'Avoid deep squats early.', source:sources.aaosKnee2},
  {id:'hamstring-curl', name:'Standing hamstring curl', areas:['knee','hip'], icon:'default', why:'Strengthens the back of the thigh for knee support.', how:'Hold chair. Bend knee and bring heel toward buttocks. Lower slowly.', dose:'2 sets × 10 each side', easier:'Smaller bend.', harder:'Add light ankle weight.', warning:'No cramping or sharp knee pain.', source:sources.aaosKnee},
  {id:'calf-raise', name:'Calf raise', areas:['knee','ankle','hip'], icon:'calf', why:'Strengthens calves for walking, balance, and shock absorption.', how:'Hold chair. Rise onto toes. Pause. Lower slowly.', dose:'2–3 sets × 10–15', easier:'Use both hands for support.', harder:'Slow 3-second lower.', warning:'Stop if ankle pain spikes.', source:sources.aaosKnee},
  {id:'low-step-up', name:'Low step-up', areas:['knee','hip','ankle'], icon:'step', why:'Builds stair strength safely when the step is low and controlled.', how:'Use a 4–6 inch step. Step up slowly. Step down slowly. Keep knee tracking over toes.', dose:'1–2 sets × 6–10 each side', easier:'Use lower step or rail.', harder:'Increase step height gradually.', warning:'Avoid if it causes swelling or limping.', source:sources.aaosKnee2},
  {id:'single-leg-balance', name:'Single-leg balance', areas:['knee','hip','ankle'], icon:'balance', why:'Improves joint control and fall prevention.', how:'Stand near wall or chair. Lift one foot slightly. Hold steady.', dose:'3 rounds × 10–30 sec each side', easier:'Fingertips on counter.', harder:'Turn head slowly or stand on folded towel.', warning:'Do not do this where a fall is possible.', source:sources.aaosKnee},
  {id:'ankle-pumps', name:'Ankle pumps', areas:['ankle','knee','cardio'], icon:'ankle', why:'Gentle movement for ankle stiffness and circulation.', how:'Sit or lie down. Point toes away, then pull toes toward you.', dose:'2 sets × 15–20', easier:'Do one ankle at a time.', harder:'Add circles after pumps.', warning:'Stop if calf becomes painful, hot, or swollen.', source:sources.aaosKnee},
  {id:'heel-toe-rocks', name:'Heel-toe rocks', areas:['ankle','knee'], icon:'ankle', why:'Trains ankle control for walking and balance.', how:'Hold counter. Rock weight from heels to toes slowly.', dose:'2 sets × 10–15', easier:'Smaller rocking range.', harder:'Pause at each end.', warning:'Avoid if dizzy or unstable.', source:sources.aaosKnee},
  {id:'pelvic-tilt', name:'Pelvic tilt', areas:['sciatica','hip'], icon:'back', why:'Gently wakes up deep core muscles and reduces back stiffness.', how:'Lie on back with knees bent. Flatten lower back gently, then relax.', dose:'2 sets × 8–12', easier:'Do very small movement.', harder:'Hold 5 seconds.', warning:'No leg symptoms should increase.', source:sources.nhsSciatica},
  {id:'knee-to-chest', name:'Single knee-to-chest stretch', areas:['sciatica','hip'], icon:'back', why:'May calm low-back and buttock tightness for some people.', how:'Lie on back. Bring one knee gently toward chest. Hold easy, then switch.', dose:'3 holds × 10–20 sec each side', easier:'Use towel behind thigh.', harder:'Longer hold if it feels good.', warning:'Stop if leg pain travels farther down.', source:sources.nhsSciatica},
  {id:'sciatic-glide', name:'Sciatic nerve glide', areas:['sciatica'], icon:'back', why:'Gently moves the irritated nerve dynamically to restore mobility without aggressive stretching.', how:'Sit tall. Slowly straighten one knee while pointing toes away (plantarflex), then bend the knee and pull toes up (dorsiflex). Keep it gentle, dynamic, and continuous.', dose:'1–2 sets × 8 each side', easier:'Smaller range of motion.', harder:'Move with slightly slower pacing to ensure control.', warning:'This should not create or increase tingling, burning, or numbness.', source:sources.nhsSciatica},
  {id:'cat-cow', name:'Cat-cow back motion', areas:['sciatica','hip'], icon:'cat', why:'Gentle spine movement for stiffness.', how:'On hands and knees, slowly round back, then gently arch. Keep it comfortable.', dose:'1–2 sets × 8–10', easier:'Do seated version: round and lengthen back.', harder:'Move slower with breath.', warning:'Avoid if kneeling hurts; use seated version.', source:sources.nhsSciatica},
  {id:'bird-dog', name:'Bird dog', areas:['sciatica','hip','knee'], icon:'cat', why:'Builds back, hip, and core control without heavy loading.', how:'On hands and knees. Reach one leg back. Optional opposite arm. Hold steady, switch.', dose:'2 sets × 6–8 each side', easier:'Only move the leg.', harder:'Hold 5 seconds.', warning:'Keep hips level; stop if back pain spikes.', source:sources.aaosHip},
  {id:'hip-hinge', name:'Supported hip hinge', areas:['hip','sciatica','knee'], icon:'default', why:'Teaches safe bending from hips instead of rounding the back.', how:'Hands on counter. Soften knees. Push hips back, keep back long, return tall.', dose:'2 sets × 8–10', easier:'Very small range.', harder:'Add light weight close to body.', warning:'Do not use during active shooting leg pain.', source:sources.niceBack}
];

const workouts = [
  {
    id:'workout-a', label:'Workout A', title:'Foundation Joint Strength', purpose:'Best for knee, hip, and general cartilage-friendly strengthening. Start here.',
    steps:[
      ['Warm-up', 'Easy walk or stationary bike', '5–10 min'],
      ['Quad squeeze', 'Knee press-down', '2×10'],
      ['Heel slide', 'Gentle bend', '2×10'],
      ['Straight-leg raise', 'Front thigh', '2×8–10'],
      ['Glute bridge', 'Butt + hamstrings', '2×8–12'],
      ['Chair sit-to-stand', 'Real-life strength', '2×6–10'],
      ['Cool-down', 'Easy walk + breathing', '3 min']
    ]
  },
  {
    id:'workout-b', label:'Workout B', title:'Leg + Balance Support', purpose:'Best after Week 2 when pain is calmer. Helps stairs, walking, and fall prevention.',
    steps:[
      ['Warm-up', 'Easy walk or low-impact indoor march', '5–10 min'],
      ['Clamshell', 'Side hip', '2×10 each'],
      ['Standing side leg lift', 'Hip control', '2×10 each'],
      ['Hamstring curl', 'Back thigh', '2×10 each'],
      ['Calf raise', 'Ankles + walking', '2×12'],
      ['Low step-up', 'Stairs', '1–2×6 each'],
      ['Single-leg balance', 'Control', '3×10–30 sec']
    ]
  },
  {
    id:'workout-c', label:'Workout C', title:'Spine + Sciatica Calm', purpose:'Best when pain starts in the low back/butt and travels down the leg.',
    steps:[
      ['Warm-up', 'Short easy walk or pacing', '3–8 min'],
      ['Pelvic tilt', 'Gentle core', '2×8'],
      ['Single knee-to-chest', 'Easy stretch', '3×10 sec'],
      ['Sciatic nerve glide', 'Gentle nerve motion', '1×8 each'],
      ['Glute bridge', 'Support', '2×8'],
      ['Bird dog or seated version', 'Core control', '2×6 each'],
      ['Avoid today', 'Deep bending + heavy lifting', 'all day']
    ]
  },
  {
    id:'workout-d', label:'Workout D', title:'Low-Impact Home Cardio', purpose:'Best for overweight patients, sore joint days, and building fitness in your living room.',
    steps:[
      ['Warm-up', 'Gentle pacing or slow marching', '5 min'],
      ['Main cardio', 'Low-impact indoor marching or stationary cycling', '8–25 min'],
      ['Ankle pumps', 'Circulation & mobility', '2×15'],
      ['Heel-toe rocks', 'Ankle control', '2×12'],
      ['Optional', 'Gentle side-to-side steps (step-touch)', '3 min'],
      ['Cool-down', 'Slow pacing + breathing', '3–5 min']
    ]
  }
];

const prescriptions = {
  calm: {
    title:'Calm Day',
    text:'Use this when the joint feels sore, swollen, stiff, or irritated. The win is finishing without making tomorrow worse.',
    bullets:['5–10 minutes low-impact indoor marching, stationary cycling, or flat pacing.', 'Heel slides, quad squeeze, pelvic tilt, and glute bridge only.', 'No step-ups, deep squats, long stairs, hills, or heavy carrying today.']
  },
  normal: {
    title:'Strength Day',
    text:'Use this when pain is mild and stable. Build the support system around the joint.',
    bullets:['Choose Workout A or B.', 'Keep all reps slow and controlled.', 'Add only one small progression this week if next-day symptoms are fine.']
  },
  nerve: {
    title:'Nerve Day',
    text:'Use this when pain burns, tingles, shoots, or travels from the back/butt down the leg.',
    bullets:['Choose Workout C.', 'Keep walking short and frequent instead of one long session.', 'Avoid bending forward, twisting, heavy lifting, and aggressive hamstring stretching.']
  }
};

const areaLabels = {knee:'Knee', hip:'Hip', ankle:'Ankle/foot', sciatica:'Sciatica/back', cardio:'Cardio'};

function updateWorkoutProgress(workoutId) {
  const card = document.getElementById(`card-${workoutId}`);
  if (!card) return;
  const checkboxes = card.querySelectorAll('[data-save]');
  const total = checkboxes.length;
  let checked = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) checked++;
  });
  const percent = Math.round((checked / total) * 100);
  
  // Update progress ring offset
  const circle = card.querySelector('.progress-ring__circle');
  if (circle) {
    const radius = 14;
    const circumference = 2 * Math.PI * radius; // ~88
    circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
  }
  // Update percentage text
  const text = card.querySelector('.progress-percent-text');
  if (text) {
    text.textContent = `${percent}%`;
  }
}

function renderWorkouts() {
  const grid = document.getElementById('workoutGrid');
  if (!grid) return;
  grid.innerHTML = workouts.map(workout => {
    const totalSteps = workout.steps.length;
    let checkedCount = 0;
    
    const stepsHtml = workout.steps.map((step, index) => {
      const key = `${workout.id}-${index}`;
      const isChecked = localStorage.getItem(key) === 'true';
      if (isChecked) checkedCount++;
      const checked = isChecked ? 'checked' : '';
      return `<li class="step-item ${isChecked ? 'is-completed' : ''}">
        <div class="checkbox-wrapper">
          <input type="checkbox" id="${key}" data-save="${key}" ${checked} />
          <span class="checkbox-custom"></span>
        </div>
        <label for="${key}"><strong>${step[0]}</strong> — ${step[1]}</label>
        <span class="step-dose">${step[2]}</span>
      </li>`;
    }).join('');

    const percent = Math.round((checkedCount / totalSteps) * 100);

    return `
      <article class="workout-card" id="card-${workout.id}">
        <div class="workout-head">
          <div class="workout-meta">
            <span class="workout-badge">${workout.label}</span>
            <div class="workout-progress-ring-wrap">
              <svg class="progress-ring" width="36" height="36">
                <circle class="progress-ring__circle-bg" stroke="rgba(30,28,26,0.06)" stroke-width="3" fill="transparent" r="14" cx="18" cy="18"/>
                <circle class="progress-ring__circle" stroke="var(--accent-green)" stroke-width="3" fill="transparent" r="14" cx="18" cy="18"
                  style="stroke-dasharray: 88; stroke-dashoffset: ${88 - (88 * percent) / 100}"/>
              </svg>
              <span class="progress-percent-text">${percent}%</span>
            </div>
          </div>
          <h3>${workout.title}</h3>
          <p>${workout.purpose}</p>
        </div>
        <div class="workout-body">
          <ul class="step-list">
            ${stepsHtml}
          </ul>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('[data-save]').forEach(input => {
    input.addEventListener('change', () => {
      localStorage.setItem(input.dataset.save, input.checked);
      const item = input.closest('.step-item');
      if (input.checked) {
        item.classList.add('is-completed');
      } else {
        item.classList.remove('is-completed');
      }
      updateWorkoutProgress(workoutIdFromKey(input.dataset.save));
    });
  });
}

function workoutIdFromKey(key) {
  const parts = key.split('-');
  return `${parts[0]}-${parts[1]}`;
}

function renderExercises(filter = 'all', query = '') {
  const grid = document.getElementById('exerciseGrid');
  const count = document.getElementById('exerciseCount');
  if (!grid || !count) return;

  const q = query.trim().toLowerCase();
  const filtered = exercises.filter(ex => {
    const matchesArea = filter === 'all' || ex.areas.includes(filter);
    const haystack = `${ex.name} ${ex.why} ${ex.how} ${ex.areas.join(' ')}`.toLowerCase();
    return matchesArea && (!q || haystack.includes(q));
  });

  count.textContent = `${filtered.length} of ${exercises.length} exercises shown`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="exercise-empty" role="status"><strong>No exercises found</strong><p>Try a broader body area or clear the search. The full library is still one tap away.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(ex => `
    <article class="exercise-card" id="ex-${ex.id}">
      <div class="exercise-visual">${icon(ex.icon)}</div>
      <div class="exercise-content">
        <div class="tag-row">${ex.areas.map(area => `<span class="tag tag-${area}">${areaLabels[area]}</span>`).join('')}</div>
        <h3>${ex.name}</h3>
        <p class="exercise-why">${ex.why}</p>
        
        <div class="exercise-details">
          <div class="detail-grid">
            <div class="detail"><b>How</b><span>${ex.how}</span></div>
            <div class="detail"><b>Dose</b><span>${ex.dose}</span></div>
            <div class="detail"><b>Easier</b><span>${ex.easier}</span></div>
            <div class="detail"><b>Harder</b><span>${ex.harder}</span></div>
            <div class="detail"><b>Stop if</b><span>${ex.warning}</span></div>
          </div>
          <a class="demo-link" href="${ex.source}" target="_blank" rel="noreferrer">Trusted demo/source</a>
        </div>
        
        <button class="btn-expand" type="button" aria-expanded="false">
          <span>Show instructions</span>
          <svg class="chevron-icon" viewBox="0 0 24 24" width="16" height="16"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.btn-expand').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.exercise-card');
      const details = card.querySelector('.exercise-details');
      const isExpanded = card.classList.contains('expanded');
      
      if (isExpanded) {
        card.classList.remove('expanded');
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('span').textContent = 'Show instructions';
        details.style.maxHeight = '0px';
      } else {
        card.classList.add('expanded');
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('span').textContent = 'Hide instructions';
        details.style.maxHeight = `${details.scrollHeight}px`;
      }
    });
  });
}

function updatePrescription(key) {
  const box = document.getElementById('dailyPrescription');
  if (!box) return;
  const item = prescriptions[key] || prescriptions.calm;
  box.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p><ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`;
}

function init() {
  const header = document.getElementById('siteHeader');
  const meter = document.getElementById('scrollMeter');
  const onScroll = () => {
    const progress = Math.min(1, window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
    if (meter) meter.style.width = `${progress * 100}%`;
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  const menuButton = document.getElementById('menuButton');
  const mobileNav = document.getElementById('mobileNav');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    mobileNav.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });
  mobileNav?.querySelectorAll('a,button').forEach(item => item.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded','false');
    mobileNav.classList.remove('open');
    document.body.classList.remove('menu-open');
  }));

  document.getElementById('printBtn')?.addEventListener('click', () => window.print());

  const primer = document.getElementById('plain-English');
  const openPrimer = () => { 
    if (primer) {
      primer.hidden = false; 
      primer.scrollIntoView({behavior:'smooth', block:'start'}); 
    }
  };
  document.getElementById('openPrimer')?.addEventListener('click', openPrimer);
  document.getElementById('openPrimerMobile')?.addEventListener('click', openPrimer);
  document.getElementById('closePrimer')?.addEventListener('click', () => { 
    if (primer) primer.hidden = true; 
  });

  document.querySelectorAll('.phase-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.phase-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      document.querySelectorAll('.phase-card').forEach(card => { card.classList.remove('active'); card.hidden = true; });
      tab.classList.add('active');
      tab.setAttribute('aria-selected','true');
      const panel = document.getElementById(tab.dataset.phase);
      if (panel) { panel.hidden = false; panel.classList.add('active'); }
    });
  });

  renderWorkouts();
  renderExercises();
  updatePrescription('calm');

  const search = document.getElementById('exerciseSearch');
  const chips = document.querySelectorAll('.filter-chip');
  let activeFilter = 'all';
  chips.forEach(chip => {
    chip.setAttribute('aria-pressed', chip.classList.contains('active') ? 'true' : 'false');
    chip.addEventListener('click', () => {
      chips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');
      activeFilter = chip.dataset.filter;
      renderExercises(activeFilter, search?.value || '');
      document.getElementById('library')?.scrollIntoView({behavior:'smooth'});
    });
  });

  document.getElementById('resetLibrary')?.addEventListener('click', () => {
    activeFilter = 'all';
    if (search) search.value = '';
    chips.forEach(c => {
      const active = c.dataset.filter === 'all';
      c.classList.toggle('active', active);
      c.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    renderExercises(activeFilter, '');
  });
  search?.addEventListener('input', () => renderExercises(activeFilter, search.value));

  document.querySelectorAll('[data-area-trigger]').forEach(button => {
    button.addEventListener('click', () => {
      const area = button.dataset.areaTrigger;
      const chip = document.querySelector(`.filter-chip[data-filter="${area}"]`);
      chip?.click();
    });
  });

  document.querySelectorAll('.decision').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.decision').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      updatePrescription(button.dataset.decision);
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .13});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', init);
