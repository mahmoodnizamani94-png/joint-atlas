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
  const figure = ({name, cls, props = '', body = '', cue = '', badge = 'Slow + controlled'}) => `
    <svg viewBox="0 0 220 160" aria-hidden="true" class="demo-svg demo-${cls}">
      <rect class="demo-room" x="8" y="8" width="204" height="144" rx="28"/>
      <path class="demo-horizon" d="M24 118C64 108 104 109 138 117s45 12 62 4"/>
      ${props}
      <g class="body body-${cls}">
        ${body}
      </g>
      <g class="cue cue-${cls}">${cue}</g>
      <g class="demo-badge"><rect x="14" y="18" width="128" height="24" rx="12"/><text x="78" y="33.5" text-anchor="middle" textLength="104" lengthAdjust="spacingAndGlyphs">${badge}</text></g>
      <text class="demo-title" x="110" y="146" text-anchor="middle">${name}</text>
    </svg>`;

  const person = {
    standing: `<circle class="head" cx="92" cy="48" r="10"/><path class="torso" d="M92 59l2 35"/><path class="arm rear" d="M93 68l-23 12"/><path class="arm front" d="M96 69l24 7"/><path class="leg rear" d="M94 94l-22 34"/><path class="leg front" d="M94 94l31 31"/><path class="foot" d="M66 130h25M119 129h25"/>`,
    chair: `<circle class="head" cx="91" cy="44" r="10"/><path class="torso" d="M91 56c5 14 12 24 22 33"/><path class="arm front" d="M99 68l25 8"/><path class="leg rear" d="M112 90l-31 10"/><path class="leg front" d="M112 90l23 25"/><path class="foot" d="M73 102h26M130 118h25"/>`,
    floor: `<circle class="head" cx="62" cy="88" r="10"/><path class="torso" d="M73 91c25-12 51-10 76 6"/><path class="arm rear" d="M91 94l-19 20"/><path class="leg rear" d="M146 98l-22 29"/><path class="leg front" d="M147 98l34 26"/><path class="foot" d="M116 130h26M176 127h24"/>`,
    side: `<circle class="head" cx="56" cy="89" r="10"/><path class="torso" d="M67 93c25 8 48 16 70 31"/><path class="leg rear" d="M102 113l47 12"/><path class="leg front" d="M102 113l48-28"/><path class="foot" d="M145 128h36M145 83h28"/>`,
    quadruped: `<circle class="head" cx="55" cy="81" r="10"/><path class="torso" d="M67 84c30-24 62-24 94-2"/><path class="arm front" d="M79 93l-17 38"/><path class="arm rear" d="M137 93l18 36"/><path class="foot" d="M51 132h29M145 132h34"/>`
  };

  const icons = {
    quadSet: figure({name:'quad press-down', cls:'quad-set', props:'<rect class="mat" x="32" y="121" width="156" height="8" rx="4"/><rect class="towel" x="120" y="111" width="34" height="12" rx="6"/>', body:`${person.floor}<path class="leg active" d="M146 98l43 24"/><path class="foot active" d="M183 125h21"/>`, cue:'<path class="down" d="M143 99v22"/><path class="arrow-head" d="M135 113l8 8 8-8"/><circle class="target" cx="143" cy="119" r="4"/>', badge:'Press + hold'}),
    quad: figure({name:'straight leg raise', cls:'quad', props:'<rect class="mat" x="32" y="121" width="156" height="8" rx="4"/>', body:`${person.floor}<path class="leg active" d="M148 98l43-34"/><path class="foot active" d="M185 61h20"/>`, cue:'<path class="arc" d="M147 98c11-19 24-31 42-37"/><circle class="target" cx="190" cy="61" r="4"/>'}),
    heel: figure({name:'heel slide', cls:'heel', props:'<rect class="mat" x="32" y="121" width="156" height="8" rx="4"/>', body:`${person.floor}<path class="leg active" d="M146 98c21 0 33 8 39 24"/><path class="foot active" d="M177 125h21"/>`, cue:'<path class="arrow" d="M174 118c-20 1-34 1-52 0"/><path class="arrow-head" d="M128 111l-9 7 9 7"/>'}),
    bridge: figure({name:'glute bridge', cls:'bridge', props:'<rect class="mat" x="28" y="123" width="166" height="8" rx="4"/>', body:`${person.floor}`, cue:'<path class="lift" d="M76 88c35-31 72-27 100 23"/><path class="up" d="M118 87v-24"/><path class="arrow-head" d="M110 70l8-8 8 8"/>'}),
    clam: figure({name:'clamshell', cls:'clam', props:'<rect class="mat" x="34" y="125" width="154" height="8" rx="4"/>', body:`${person.side}`, cue:'<path class="arc" d="M102 113c11-21 27-32 48-31"/><circle class="target" cx="150" cy="84" r="4"/>'}),
    chair: figure({name:'sit to stand', cls:'chair', props:'<path class="prop" d="M143 64h36v66M143 91h37"/>', body:`${person.chair}`, cue:'<path class="up" d="M103 85V55"/><path class="arrow-head" d="M95 63l8-8 8 8"/>'}),
    step: figure({name:'low step up', cls:'step', props:'<path class="block" d="M134 126V94h36V68h34v58z"/>', body:`${person.standing}<path class="leg active" d="M94 94l44 0"/><path class="foot active" d="M132 97h27"/>`, cue:'<path class="arrow" d="M113 109c18-18 30-27 50-29"/><path class="arrow-head" d="M153 75l11 4-5 10"/>'}),
    calf: figure({name:'calf raise', cls:'calf', props:'<path class="prop" d="M159 35v92"/>', body:`${person.standing}`, cue:'<path class="up" d="M92 116V91"/><path class="arrow-head" d="M84 99l8-8 8 8"/>'}),
    balance: figure({name:'single-leg balance', cls:'balance', props:'<path class="prop" d="M159 35v92"/>', body:`${person.standing}<path class="leg active" d="M94 94l35 5"/>`, cue:'<path class="sway" d="M80 35c-10 8-10 22 0 30M108 34c10 8 10 23 0 31"/>'}),
    back: figure({name:'spine / nerve calm', cls:'back', props:'<rect class="mat" x="30" y="121" width="160" height="8" rx="4"/>', body:`${person.floor}`, cue:'<path class="nerve" d="M144 99c18 12 28 22 42 29"/><circle class="target" cx="186" cy="128" r="4"/>'}),
    cat: figure({name:'cat-cow / bird dog', cls:'cat', props:'<rect class="mat" x="32" y="130" width="156" height="8" rx="4"/>', body:`${person.quadruped}<path class="leg active" d="M160 83l33-23"/><path class="arm active" d="M76 93L42 66"/>`, cue:'<path class="arc" d="M69 82c29-19 58-19 88 0"/>'}),
    walk: figure({name:'easy walk', cls:'walk', body:`${person.standing}`, cue:'<path class="arrow" d="M132 125c15 0 27-3 38-10"/><path class="arrow-head" d="M161 109l10 5-7 9"/>', badge:'soft steps'}),
    march: figure({name:'low-impact march', cls:'march', body:`${person.standing}<path class="leg active" d="M94 94l31-13v27"/>`, cue:'<path class="up" d="M126 107V78"/><path class="arrow-head" d="M118 86l8-8 8 8"/>', badge:'no jumping'}),
    ankle: figure({name:'ankle control', cls:'ankle', props:'<path class="prop" d="M145 36v92"/>', body:`${person.chair}`, cue:'<path class="arc" d="M134 116c14-12 27-12 39 0"/><path class="arrow-head" d="M165 107l9 7-10 6"/>'}),
    bike: figure({name:'stationary bike', cls:'bike', props:'<circle class="wheel" cx="73" cy="112" r="24"/><circle class="wheel" cx="151" cy="112" r="24"/><path class="bike-frame" d="M73 112l34-35 44 35h-49l-29 0M107 77l9 35M121 66h25"/>', body:'<circle class="head" cx="102" cy="35" r="10"/><path class="torso" d="M103 47l14 31"/><path class="arm front" d="M112 59l31 10"/><path class="leg active" d="M116 78l-9 34"/><path class="leg rear" d="M116 78l35 34"/>', cue:'<path class="spin" d="M96 112a20 20 0 1 0 40 0a20 20 0 1 0-40 0"/>'}),
    default: figure({name:'controlled movement', cls:'default', body:`${person.standing}`, cue:'<path class="sway" d="M78 35c-9 8-9 22 0 30M109 34c10 8 10 23 0 31"/>'})
  };
  return icons[type] || icons.default;
};

const exercises = [
  {id:'easy-walk', name:'Easy walk', areas:['knee','hip','ankle','sciatica','cardio'], icon:'walk', why:'Warms the body and builds stamina without heavy pounding.', how:'Walk on flat ground. Keep steps short and smooth. Stop before limping starts.', dose:'5–25 minutes', easier:'Walk indoors or break into 3–5 minute blocks.', harder:'Add 2–3 minutes per week.', warning:'Avoid hills if knee, hip, or sciatica pain flares.', source:sources.arthritisOA},
  {id:'indoor-march', name:'Low-impact indoor marching', areas:['knee','hip','ankle','sciatica','cardio'], icon:'march', why:'A high-reward, joint-friendly cardio alternative that requires zero equipment.', how:'Stand tall near a wall or counter for balance. Lift knees gently in a slow, rhythmic march. Land softly on your feet.', dose:'5–20 minutes', easier:'March while seated in a sturdy chair.', harder:'Pump arms in sync with steps and lift knees slightly higher.', warning:'Stop if lower back arches or hip pain spikes.', source:sources.arthritisOA},
  {id:'stationary-bike', name:'Stationary bike', areas:['knee','hip','ankle','cardio'], icon:'bike', why:'Low-impact cardio that moves the knees and hips repeatedly without impact.', how:'Use low resistance. Seat high enough that the knee is not deeply bent at the top.', dose:'5–25 minutes', easier:'Rock pedals back and forth before full circles.', harder:'Add time before adding resistance.', warning:'Stop if knee pain rises or hip pinches.', source:sources.arthritisOA},
  {id:'quad-set', name:'Quad squeeze / knee press-down', areas:['knee'], icon:'quadSet', why:'Turns on the front thigh muscle without loading the knee heavily.', how:'Lie or sit with leg straight. Tighten thigh and gently press knee down. Hold, then relax.', dose:'2 sets × 10, hold 5 sec', easier:'Do it seated with a towel under the knee.', harder:'Hold 8–10 seconds.', warning:'No sharp kneecap pain.', source:sources.aaosKnee},
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
