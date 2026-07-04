# GPT Images 2 Prompt Pack — Workout Visual Replacement

## Access note

This repository does not include generated image files. The current harness session did not expose an image-generation model/tool, so these prompts are the source of truth for creating the real assets externally. After generation, provide the exported files and the app can be wired to use them directly.

## Review and recommendation

The current exercise cards render small inline SVG animations from `script.js`. They are lightweight and accessible, but they look symbolic instead of instructional: stick-figure anatomy, repeated body templates, and looped motion cues make several exercises feel generic. Replacing them with still images is reasonable for this site because the cards already provide the movement instructions, dose, easier/harder options, warnings, and trusted demo links. The images should communicate the safe start position and main movement direction rather than trying to be full clinical demonstrations.

## How many images are needed?

Use **24 total images**: one image for each exercise in the current library. That is the cleanest replacement because every exercise card can get a unique, recognizable visual, including exercises that currently share the same SVG icon template.

Recommended specs:

- **Format:** WebP for production, PNG during review if easier.
- **Aspect ratio:** 11:8 horizontal, matching the current card visual area.
- **Minimum size:** 1320 × 960 px, export down as needed.
- **Safe crop:** keep the full body, chair/step/bike/mat, and movement arrow inside the central 85% of the frame.
- **Style:** warm editorial wellness illustration, realistic enough to teach posture, not photorealistic medical stock imagery.
- **Accessibility:** avoid text baked into the image; the app should keep exercise names and instructions as HTML text.

## Global style prompt prefix

Use this prefix before every exercise-specific prompt:

> Create a polished editorial wellness illustration for a cartilage- and sciatica-friendly exercise website. Warm minimalist clinic-at-home setting, alabaster background, eucalyptus sage and champagne-gold accents, soft natural light, premium magazine composition, calm middle-aged woman in her late 40s with a larger body, modest fitted workout clothing, supportive sneakers when standing, no logos, no medical devices unless specified. Show safe beginner form, controlled low-impact movement, friendly and non-intimidating. Horizontal 11:8 composition, full body visible, clean negative space, no text, no watermark, no extra limbs, anatomically correct joints, realistic proportions, clear chair/mat/step/bike props when needed.

## Global negative prompt

Use this negative prompt with every image:

> Avoid: high-intensity gym aesthetic, young thin fitness model, extreme flexibility, pain grimacing, deep squats, jumping, running, heavy weights, medical x-ray style, cluttered background, text labels, watermark, brand logos, distorted hands or feet, missing props, unsafe knee collapse, twisted spine, hyperextended joints.

## Per-image prompts

### 01 — Easy walk

Prompt: Global prefix +

> The woman walks slowly on a flat indoor path beside a wall or kitchen counter, upright relaxed posture, soft heel-to-toe step, arms naturally swinging, supportive sneakers, gentle movement trail behind the stepping foot to imply easy pacing. Emphasize low impact, stable surface, calm breathing, no hills or stairs.

### 02 — Low-impact indoor marching

Prompt: Global prefix +

> The woman performs low-impact indoor marching in place, one knee lifted only to a comfortable low height, both feet never shown airborne at the same time, arms bent lightly at sides, upright torso, soft living-room floor, optional chair nearby for balance. Show controlled, no-jumping cardio.

### 03 — Stationary bike

Prompt: Global prefix +

> The woman uses an upright stationary bike with a comfortable seat height, knee slightly bent at the bottom of the pedal stroke, hands resting lightly on handlebars, relaxed shoulders, neutral spine. The bike should look simple and home-friendly, not a spin-class bike. Show gentle cycling pace.

### 04 — Quad squeeze / knee press-down

Prompt: Global prefix +

> The woman lies on her back on a padded exercise mat with one leg straight and a small rolled towel under the knee. Show her gently pressing the back of the knee down into the towel while the toes point upward, thigh muscle engaged subtly, other knee bent for comfort. Calm face, no strain.

### 05 — Heel slide

Prompt: Global prefix +

> The woman lies on her back on a mat. One knee is bent with the foot sliding toward the body, the other leg relaxed. Include a faint curved motion trail from straight-leg position to bent-knee position. Show the heel staying on the mat and the knee tracking straight, comfortable shallow range.

### 06 — Straight-leg raise

Prompt: Global prefix +

> The woman lies on her back on a mat, one knee bent with foot planted, the other leg straight and lifted about 12 inches from the mat. Toes point upward, knee straight but not locked, pelvis level, hands relaxed at sides. Include a subtle upward movement trail from floor to raised position.

### 07 — Glute bridge

Prompt: Global prefix +

> The woman lies on her back on a mat with knees bent and feet hip-width apart. Hips are lifted into a gentle bridge, shoulders and upper back grounded, ribs relaxed, knees aligned over feet. Include a soft upward motion cue around the hips. Make it look beginner-safe, not a high arch.

### 08 — Clamshell

Prompt: Global prefix +

> The woman lies on her side on a mat with knees bent and feet together. Top knee opens upward a modest amount while hips stay stacked and feet remain touching. Head supported by a small pillow or lower arm. Include a subtle arc cue at the top knee. Show controlled side-hip strengthening.

### 09 — Side-lying hip raise

Prompt: Global prefix +

> The woman lies on her side on a mat, bottom knee slightly bent for comfort, top leg straight and lifted a small distance. Toes angle slightly downward, hips stacked, torso relaxed, head supported. Include a minimal upward motion trail on the top leg. Avoid high kick or flexible dancer posture.

### 10 — Standing side leg lift

Prompt: Global prefix +

> The woman stands tall holding the back of a sturdy chair with one hand. One leg moves gently out to the side with toes facing forward, trunk upright without leaning, standing knee soft. Include a small sideward motion cue at the moving foot. Show balance support and safe range.

### 11 — Chair sit-to-stand

Prompt: Global prefix +

> The woman rises from a firm chair, feet under knees, torso leaning slightly forward from the hips, knees tracking over toes, hands near the chair or thighs for optional support. Show the midpoint between sitting and standing, with the chair clearly visible. Emphasize safe real-life strength.

### 12 — Mini squat / wall squat

Prompt: Global prefix +

> The woman performs a shallow mini squat with hands lightly on a kitchen counter or back of a chair. Knees bend only slightly, hips shift back, chest tall, knees aligned over toes. Include a gentle downward motion cue. Make the range clearly shallow and joint-friendly.

### 13 — Standing hamstring curl

Prompt: Global prefix +

> The woman stands holding a sturdy chair for support. One knee bends to bring the heel gently toward the back of the thigh, with thighs staying aligned and torso upright. Include a small curved motion cue behind the working leg. Show controlled hamstring strengthening, not a fast kick.

### 14 — Calf raise

Prompt: Global prefix +

> The woman stands behind a chair with both hands resting lightly on it, rising onto the balls of both feet. Heels are lifted modestly, ankles aligned, posture tall, gaze forward. Include a subtle upward cue near the heels. Show stable, slow calf strengthening.

### 15 — Low step-up

Prompt: Global prefix +

> The woman steps onto a very low 4–6 inch platform or aerobic step while holding a rail or chair nearby. Front foot fully on the step, knee tracking over toes, torso upright, back foot about to follow. Include a small upward-forward motion cue. Make the step visibly low and safe.

### 16 — Single-leg balance

Prompt: Global prefix +

> The woman stands beside a wall or sturdy chair, fingertips lightly touching support. One foot is lifted only an inch off the floor, standing knee soft, hips level, posture relaxed. Show a calm balance hold with subtle stability rings near the standing foot. No unstable surfaces.

### 17 — Ankle pumps

Prompt: Global prefix +

> The woman sits comfortably in a chair with one leg extended slightly forward, heel resting on the floor. Show the foot moving between toes pointed away and toes pulled upward with a subtle two-direction motion cue. Posture relaxed, chair stable, movement focused at the ankle.

### 18 — Heel-toe rocks

Prompt: Global prefix +

> The woman stands behind a chair or counter, gently rocking weight from heels to toes. Show one ghosted foot position with heels slightly lifted and another with toes slightly lifted, very small range. Knees soft, posture upright, both hands available for support.

### 19 — Pelvic tilt

Prompt: Global prefix +

> The woman lies on her back on a mat with knees bent and feet flat. Show a gentle pelvic tilt: lower back softly flattening toward the mat, abdominal engagement subtle, shoulders relaxed. Include a small curved cue near the pelvis. Keep the movement tiny and calm.

### 20 — Single knee-to-chest stretch

Prompt: Global prefix +

> The woman lies on her back on a mat. One knee is gently drawn toward the chest with both hands behind the thigh, not yanking on the knee; the other knee remains bent with foot flat for comfort. Calm stretch posture, neutral neck, no aggressive pulling.

### 21 — Sciatic nerve glide

Prompt: Global prefix +

> The woman sits tall on the front half of a chair. One leg is partially straightened forward with the heel near the floor while the toes point gently away; include a second faint ghost position showing the knee bent and toes pulled upward. Show dynamic gentle nerve gliding, not a held hamstring stretch.

### 22 — Cat-cow back motion

Prompt: Global prefix +

> The woman is on hands and knees on a cushioned mat with extra knee padding. Show a comfortable tabletop position with a faint ghosted curve indicating gentle rounding and lengthening of the spine. Wrists under shoulders, knees under hips, neck neutral. Make it soft and low strain.

### 23 — Bird dog

Prompt: Global prefix +

> The woman is on hands and knees on a cushioned mat with one leg reaching straight back at hip height and the opposite arm reaching forward only if stable. Hips level, spine long, gaze down, core controlled. Include subtle lengthening cues from fingertips to heel. Avoid high leg lift or back arch.

### 24 — Supported hip hinge

Prompt: Global prefix +

> The woman stands facing a kitchen counter with both hands lightly on it. Knees are soft, hips shift backward, spine long and neutral, chest angled forward from the hips. Include a gentle backward hip motion cue. Show safe bending mechanics for daily life, no rounded back.

## Implementation plan after you generate the images

When the images are ready, place them in `assets/exercises/` with these filenames:

1. `easy-walk.webp`
2. `indoor-march.webp`
3. `stationary-bike.webp`
4. `quad-set.webp`
5. `heel-slide.webp`
6. `straight-leg-raise.webp`
7. `bridge.webp`
8. `clamshell.webp`
9. `side-hip-raise.webp`
10. `standing-hip-abduction.webp`
11. `sit-to-stand.webp`
12. `mini-squat.webp`
13. `hamstring-curl.webp`
14. `calf-raise.webp`
15. `low-step-up.webp`
16. `single-leg-balance.webp`
17. `ankle-pumps.webp`
18. `heel-toe-rocks.webp`
19. `pelvic-tilt.webp`
20. `knee-to-chest.webp`
21. `sciatic-glide.webp`
22. `cat-cow.webp`
23. `bird-dog.webp`
24. `hip-hinge.webp`

After the generated files are provided, replace each exercise card's current SVG animation with an `<img>` using the matching exercise `id`, keep the existing HTML exercise instructions, and use empty alt text if the adjacent card text already names and explains the exercise.
