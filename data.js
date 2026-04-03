/* =============================================================
   data.js — Meditation Techniques Database
   ============================================================= */

const TECHNIQUES = [
  {
    id: 'focused-attention',
    title: 'Focused Attention',
    subtitle: 'Breath Awareness',
    emoji: '🌬️',
    color: '#4fc3f7',
    colorDark: '#0288d1',
    gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    category: 'Foundation',
    tagline: 'Anchor yourself in the present through breath',
    shortDesc: 'The cornerstone of all meditation. Train your attention by gently returning focus to your breath whenever the mind wanders.',
    description: `Focused Attention meditation is the most widely practiced and scientifically studied form of meditation. It trains the fundamental mental skill of directing and sustaining attention—like a mental muscle you progressively strengthen.

The practice is deceptively simple: choose an anchor (typically the breath), keep your attention there, and when the mind inevitably wanders, gently return. That act of noticing and returning IS the practice.`,
    steps: [
      'Find a comfortable seated position with your spine naturally upright—on a cushion, chair, or floor.',
      'Gently close your eyes or soften your gaze downward.',
      'Take three deep, deliberate breaths to settle in.',
      'Let your breathing return to its natural rhythm. Don\'t control it.',
      'Choose your anchor point: the sensation at your nostrils, the rise and fall of your chest, or the expansion of your belly.',
      'Rest your full attention at that anchor point. Notice the subtle qualities—temperature, movement, texture.',
      'When you notice the mind has wandered (and it will—this is normal), gently and without judgment, return attention to the breath.',
      'The wandering and returning IS the exercise. Each return builds concentration.',
      'End by taking three deep breaths and slowly opening your eyes.'
    ],
    benefits: [
      'Reduces mind-wandering and rumination',
      'Improves sustained concentration',
      'Decreases anxiety and stress',
      'Enhances emotional regulation',
      'Improves working memory',
      'Better sleep quality'
    ],
    durations: [
      { time: 5, label: '5 min', description: 'Quick daily reset' },
      { time: 10, label: '10 min', description: 'Standard session' },
      { time: 20, label: '20 min', description: 'Deep practice' }
    ],
    gifUrl: 'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif',
    gifAlt: 'Breathing animation - slow waves representing breath',
    tip: 'Don\'t try to empty your mind. The goal is to notice when it wanders and return—not to prevent wandering.'
  },
  {
    id: 'open-monitoring',
    title: 'Open Monitoring',
    subtitle: 'Mindfulness Awareness',
    emoji: '👁️',
    color: '#a5d6a7',
    colorDark: '#388e3c',
    gradient: 'linear-gradient(135deg, #0a1628, #1a2a1e, #0d2818)',
    category: 'Mindfulness',
    tagline: 'Observe all experience with spacious awareness',
    shortDesc: 'Expand your awareness to include everything—thoughts, sounds, sensations—without focusing on any single object.',
    description: `Open Monitoring (also called Choiceless Awareness) is a more advanced practice where instead of focusing on a single object, you open your awareness to include the entire field of experience.

You observe whatever arises—sounds, sensations, thoughts, emotions—without grasping or pushing away. You become the sky, not the clouds. This develops meta-awareness: the ability to observe your own mental states.`,
    steps: [
      'Begin with 3–5 minutes of Focused Attention on the breath to settle the mind.',
      'Gradually expand your awareness like widening a lens—let it include sounds around you.',
      'Continue expanding to include bodily sensations, the feeling of air on skin.',
      'Now include mental events: thoughts, images, emotions as they arise.',
      'Don\'t follow any particular sensation or thought—just notice it arising and passing.',
      'If attention gets captured by something, gently release and re-open to the whole field.',
      'Notice the space of awareness itself—the vast container that holds all experience.',
      'Rest in that open, spacious awareness without clinging or rejecting.',
      'Gradually narrow back to breath awareness before ending.'
    ],
    benefits: [
      'Develops metacognitive awareness',
      'Reduces reactivity to thoughts',
      'Deepens insight into impermanence',
      'Cultivates equanimity',
      'Reduces emotional reactivity',
      'Builds psychological flexibility'
    ],
    durations: [
      { time: 10, label: '10 min', description: 'After breath foundation' },
      { time: 20, label: '20 min', description: 'Recommended' },
      { time: 30, label: '30 min', description: 'Deep exploration' }
    ],
    gifUrl: 'https://media.giphy.com/media/3o7TKDEhaXkse76Bpu/giphy.gif',
    gifAlt: 'Expanding ripples in water representing open awareness',
    tip: 'Think of yourself as a clear sky. Thoughts and sensations are clouds—they come and go, but the sky remains unchanged.'
  },
  {
    id: 'loving-kindness',
    title: 'Loving-Kindness',
    subtitle: 'Metta Bhavana',
    emoji: '💛',
    color: '#ffcc80',
    colorDark: '#f57c00',
    gradient: 'linear-gradient(135deg, #1a0a00, #2d1500, #1a0d00)',
    category: 'Heart',
    tagline: 'Cultivate boundless compassion for all beings',
    shortDesc: 'Systematically generate feelings of warmth, love, and goodwill—starting with yourself and expanding outward to all beings.',
    description: `Loving-Kindness (Metta) meditation is a heart-centered practice from the Buddhist tradition that deliberately cultivates feelings of love, compassion, and goodwill. Research shows it literally rewires brain circuitry associated with empathy and positive emotion.

The practice moves through expanding circles: yourself → loved ones → neutral people → difficult people → all beings. By generating these feelings systematically, you train the mind to access love more readily.`,
    steps: [
      'Sit comfortably. Place your hands on your heart if that feels natural.',
      'Bring to mind a version of yourself—perhaps a younger you, or your current self—and visualize them clearly.',
      'Silently repeat the traditional phrases: "May you be happy. May you be healthy. May you be safe. May you live with ease."',
      'Let the words carry genuine intent. Feel warmth radiating from your chest.',
      'Expand to a loved one—someone easy to love. Send them the same phrases with the same warmth.',
      'Expand to a neutral person—a neighbor, a shopkeeper. Send them loving-kindness.',
      'Expand to a difficult person (start mild). This is the most transformative step.',
      'Finally expand to all beings everywhere—all humans, all animals, all life.',
      '"May all beings be happy. May all beings be free from suffering."'
    ],
    benefits: [
      'Increases positive emotions and well-being',
      'Reduces self-criticism and shame',
      'Increases social connection and empathy',
      'Reduces bias and prejudice',
      'Alleviates depression symptoms',
      'Decreases chronic pain experience'
    ],
    durations: [
      { time: 10, label: '10 min', description: 'Self-compassion focus' },
      { time: 20, label: '20 min', description: 'Full expansion' },
      { time: 30, label: '30 min', description: 'Deep heart opening' }
    ],
    gifUrl: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif',
    gifAlt: 'Golden light radiating outward representing loving-kindness',
    tip: 'If you struggle to feel warmth toward yourself, try imagining a beloved pet or young child—then transfer that feeling to yourself.'
  },
  {
    id: 'body-scan',
    title: 'Body Scan',
    subtitle: 'Somatic Awareness',
    emoji: '🫁',
    color: '#ce93d8',
    colorDark: '#7b1fa2',
    gradient: 'linear-gradient(135deg, #0d001a, #1a0a2e, #0d0019)',
    category: 'Somatic',
    tagline: 'Journey through every cell of your body',
    shortDesc: 'Slowly move awareness through each part of the body, releasing tension and developing deep embodied presence.',
    description: `The Body Scan is a systematic practice of moving attention through the body from head to toe (or toe to head), noticing sensations with open curiosity. It's the cornerstone of MBSR (Mindfulness-Based Stress Reduction) developed by Jon Kabat-Zinn at MIT.

It bridges the gap between mind and body, dissolving the numbness and dissociation we often carry. You're not trying to relax (though that often happens)—you're developing the capacity to feel your body exactly as it is.`,
    steps: [
      'Lie down on your back in a comfortable position. Cover yourself if needed.',
      'Close your eyes. Take 5 deep breaths to arrive.',
      'Bring awareness to the soles of your feet. Notice any sensations—tingling, pressure, temperature, nothing.',
      'Slowly move awareness upward: feet → ankles → calves → knees.',
      'Continue through: thighs → hips → lower back → abdomen.',
      'Scan the chest, upper back, and the entire back of the body.',
      'Move through: shoulders → upper arms → elbows → forearms → hands → fingers.',
      'Bring attention to the neck, jaw (notice tension here), face, scalp.',
      'Finally, expand awareness to the entire body as one unified field of sensation.',
      'Rest here for a few minutes before slowly returning.'
    ],
    benefits: [
      'Reduces physical stress and tension',
      'Improves sleep quality significantly',
      'Develops interoceptive awareness',
      'Helps with chronic pain management',
      'Reduces PTSD symptoms',
      'Improves body image and self-acceptance'
    ],
    durations: [
      { time: 10, label: '10 min', description: 'Quick evening reset' },
      { time: 20, label: '20 min', description: 'Standard practice' },
      { time: 45, label: '45 min', description: 'MBSR full scan' }
    ],
    gifUrl: 'https://media.giphy.com/media/3oKIPf3C7HqqYBVcCk/giphy.gif',
    gifAlt: 'Gentle pulsing body silhouette animation',
    tip: 'Do this lying down before sleep. If you fall asleep, that\'s a success—you needed it.'
  },
  {
    id: 'mantra',
    title: 'Mantra Meditation',
    subtitle: 'Sacred Sound Practice',
    emoji: '🕉️',
    color: '#ef9a9a',
    colorDark: '#c62828',
    gradient: 'linear-gradient(135deg, #1a0000, #2d0505, #1a0000)',
    category: 'Vedic',
    tagline: 'Transcend thought through sacred sound',
    shortDesc: 'Silently repeat a sacred word or phrase to quiet the surface mind and access deeper states of consciousness.',
    description: `Mantra meditation uses the repetition of a sacred sound, word, or phrase to anchor and transcend the mind. It\'s the basis of Transcendental Meditation (TM), Japa, and many Vedic traditions. The vibration of certain sounds is believed to have intrinsic qualities that promote stillness.

Unlike breath-focused practices, mantra gives the mind something to do—useful for highly active or verbal minds. The mantra becomes an anchor that gradually dissolves into silence.`,
    steps: [
      'Sit comfortably in a chair or on a cushion. Close your eyes.',
      'Take a few natural breaths to settle.',
      'Choose your mantra. Common options: "So Hum" (I am that), "Om" (primordial sound), "Om Shanti" (peace), or simply "Peace" or "One".',
      'Begin silently repeating the mantra in your mind. Don\'t force it—let it arise softly.',
      'Synchronize with breath if natural: "So" on inhale, "Hum" on exhale.',
      'When thoughts arise (they will), gently return to the mantra—no frustration.',
      'Don\'t concentrate hard on the mantra—hold it lightly, effortlessly.',
      'The mantra may slow, distort, or fade. This indicates depth—let it happen.',
      'After your session, sit silently for 2 minutes before opening eyes.'
    ],
    benefits: [
      'Lowers cortisol and blood pressure',
      'Reduces anxiety and depression',
      'Increases alpha brain waves (relaxed alertness)',
      'Enhances focus and cognitive function',
      'Promotes deep rest (comparable to sleep)',
      'Access to transcendent states of consciousness'
    ],
    durations: [
      { time: 10, label: '10 min', description: 'Morning practice' },
      { time: 20, label: '20 min', description: 'TM standard session' },
      { time: 20, label: '20 min', description: 'Twice daily (TM tradition)' }
    ],
    gifUrl: 'https://media.giphy.com/media/l0Iyl55kTeh71nTXy/giphy.gif',
    gifAlt: 'Om symbol pulsing with sacred geometry',
    tip: 'TM tradition recommends 20 minutes twice daily. Even 10 minutes once daily produces measurable benefits.'
  },
  {
    id: 'walking',
    title: 'Walking Meditation',
    subtitle: 'Kinhin Practice',
    emoji: '🚶',
    color: '#80cbc4',
    colorDark: '#00695c',
    gradient: 'linear-gradient(135deg, #001a18, #00261e, #001a12)',
    category: 'Active',
    tagline: 'Transform each step into an act of presence',
    shortDesc: 'Bring full meditative awareness to the act of walking—each footfall a meditation, each step an arrival.',
    description: `Walking meditation (Kinhin in Zen, Cankama in Theravada) transforms ordinary movement into profound practice. It's ideal for those who struggle with stillness, for integrating meditation into daily life, and for cultivating mindfulness in action.

The body's natural rhythm—the lifting, moving, and placing of feet—becomes the anchor. You learn that presence isn't confined to a cushion: anywhere you walk can be sacred ground.`,
    steps: [
      'Find a path 10–20 steps long—indoors or outdoors. Remove shoes if comfortable.',
      'Stand at one end. Feel your feet on the ground. Notice your weight, balance, posture.',
      'Begin walking very slowly—about 4x slower than normal pace.',
      'Coordinate awareness with movement. "Lifting" as heel rises, "Moving" as foot swings forward, "Placing" as foot lands.',
      'Feel every micro-sensation: the weight shifting, muscle engagement, balance adjustments.',
      'When you reach the end, pause. Turn deliberately and mindfully. Begin again.',
      'When mind wanders to thought, gently return attention to the physical sensations of walking.',
      'After becoming comfortable, you can expand awareness to breath, sounds, the whole body.',
      'Gradually, normal-pace walking in daily life becomes meditative.'
    ],
    benefits: [
      'Ideal for active or restless minds',
      'Integrates meditation into daily life',
      'Improves balance and proprioception',
      'Reduces rumination while moving',
      'Bridges formal and informal practice',
      'Accessible anywhere, anytime'
    ],
    durations: [
      { time: 10, label: '10 min', description: 'Back-and-forth walking' },
      { time: 20, label: '20 min', description: 'Extended path walking' },
      { time: 30, label: '30 min', description: 'Outdoor walking meditation' }
    ],
    gifUrl: 'https://media.giphy.com/media/3ornjIhZGFWpbcGMAU/giphy.gif',
    gifAlt: 'Slow deliberate footsteps on natural ground',
    tip: 'The slower you walk, the more you discover. Even 5 steps walked with full awareness is profound practice.'
  },
  {
    id: 'visualization',
    title: 'Visualization',
    subtitle: 'Creative Imagery',
    emoji: '🌅',
    color: '#ffab91',
    colorDark: '#bf360c',
    gradient: 'linear-gradient(135deg, #1a0a00, #2d1a00, #1a0800)',
    category: 'Creative',
    tagline: 'Harness the mind\'s eye for healing and growth',
    shortDesc: 'Use vivid mental imagery to cultivate deep peace, rehearse success, or access healing states of mind.',
    description: `Visualization (or Guided Imagery) uses the mind's remarkable capacity to generate experience through imagination. The brain processes vivid mental images in ways remarkably similar to actual experience—activating the same neural networks, hormones, and physiological responses.

Used by elite athletes, trauma therapists, and ancient shamans alike, visualization can heal, motivate, rehearse, and transform. The most powerful form: visiting a peaceful inner sanctuary that you return to consistently.`,
    steps: [
      'Lie down or sit comfortably. Close your eyes. Take 5 deep breaths.',
      'Relax each part of your body with each exhale. Let go of any holding.',
      'Begin to imagine a place of perfect peace—real or imagined. A beach, forest, mountain, cozy room.',
      'Build it with all senses: What do you see? Hear? Feel on your skin? Smell?',
      'Make it vivid and specific. Add details. The warmth of sunlight. The sound of waves. The scent of pine.',
      'Explore this space. Sit, walk, breathe in this place. Let it feel completely real.',
      'Notice how your body responds—a sense of safety, warmth, expansion in your chest.',
      'You can meet a guide here, receive insight, or simply rest in perfect peace.',
      'When ready, slowly bring awareness back to your body and the room.',
      'Carry the feeling of this place with you into your day.'
    ],
    benefits: [
      'Deeply activates the relaxation response',
      'Reduces anxiety and trauma symptoms',
      'Enhances athletic and performance skills',
      'Boosts immune system function',
      'Accelerates healing and recovery',
      'Increases motivation and goal achievement'
    ],
    durations: [
      { time: 10, label: '10 min', description: 'Sanctuary visit' },
      { time: 20, label: '20 min', description: 'Deep exploration' },
      { time: 30, label: '30 min', description: 'Healing journey' }
    ],
    gifUrl: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
    gifAlt: 'Serene natural landscape visualization',
    tip: 'Visit the same sanctuary each time. The more you return, the more real and powerful it becomes—your brain builds a neural home base for peace.'
  }
   {
  id: 'guided-meditation',
  title: 'Guided Meditation',
  subtitle: 'Voice-Led Awareness & Deep Relaxation',
  emoji: '🎧',
  color: '#81c784',
  colorDark: '#388e3c',
  gradient: 'linear-gradient(135deg, #134e5e, #71b280)',
  category: 'Beginner',
  difficulty: 'Very Easy',
  tagline: 'Follow the voice. Enter stillness without effort.',
  
  shortDesc: 'A structured, voice-guided meditation that leads your attention step-by-step into relaxation, awareness, and mental clarity—ideal for beginners and restless minds.',

  description: `Guided Meditation is a structured attentional training method where an external narrator (audio/video) directs your awareness through specific mental and physiological states. Unlike unguided practices that require strong internal discipline, guided meditation reduces cognitive load by outsourcing attentional control.

This makes it highly effective for beginners, individuals with high cognitive noise (overthinking), or those dealing with stress, anxiety, or sleep disturbances.

From a neuroscience perspective, guided meditation helps deactivate the Default Mode Network (DMN)—the brain system responsible for mind-wandering and self-referential thinking—while activating regions associated with focused attention and emotional regulation.

The guide's voice acts as a dynamic anchor, continuously redirecting your awareness to breath, body sensations, or visualization, preventing prolonged distraction loops.

Over time, repeated guided sessions train meta-awareness (awareness of awareness), improve attentional stability, and condition the nervous system toward parasympathetic dominance (rest-and-digest state).`,

  phases: [
    {
      name: 'Arrival (1–2 min)',
      purpose: 'Transition from external activity to internal awareness',
      details: 'Slow breathing, posture adjustment, initial grounding'
    },
    {
      name: 'Attention Anchoring (2–5 min)',
      purpose: 'Stabilize awareness using breath/body',
      details: 'Guide directs focus to breathing patterns or sensations'
    },
    {
      name: 'Deepening (5–10 min)',
      purpose: 'Reduce mental activity and induce relaxation',
      details: 'Progressive relaxation, slower instructions, longer pauses'
    },
    {
      name: 'Expansion / Visualization (optional)',
      purpose: 'Enhance emotional or cognitive state',
      details: 'Imagery (light, nature, success, healing)'
    },
    {
      name: 'Return (1–2 min)',
      purpose: 'Reintegration into normal awareness',
      details: 'Gradual return to surroundings and body awareness'
    }
  ],

  steps: [
    'Choose a quiet, interruption-free environment with minimal sensory input.',
    'Sit upright (alert) or lie down (for relaxation/sleep sessions).',
    'Use headphones to enhance immersion and reduce external noise.',
    'Start a guided meditation audio track.',
    'Close your eyes and consciously shift from external to internal awareness.',
    'Follow each instruction precisely—breath focus, body awareness, or visualization.',
    'When distraction occurs, re-engage with the guide’s voice immediately.',
    'Allow your breathing to slow naturally—do not force rhythm.',
    'Notice physical relaxation spreading across muscles and joints.',
    'Observe thoughts as background events while prioritizing the guide.',
    'At session end, gradually deepen breath and reawaken sensory awareness.'
  ],

  guidedScriptSample: `Close your eyes...
Take a slow, deep breath in... and gently exhale.
Bring your attention to the natural rhythm of your breathing.
Notice the air entering through your nose... and leaving your body.

If your mind wanders, that’s okay.
Simply return to the sound of my voice.

Now, relax your shoulders...
Release any tension in your face...
Let your body become heavy and supported.

Imagine a calm, peaceful place...
A space where you feel completely safe and relaxed...

Stay here for a few moments... just breathing... just being...`,

  benefits: [
    'Reduces Default Mode Network (DMN) overactivity (less overthinking)',
    'Rapid stress reduction via parasympathetic activation',
    'Improves sleep latency and quality',
    'Enhances attentional control without mental strain',
    'Builds consistent meditation habit faster than unguided methods',
    'Improves emotional regulation and resilience',
    'Useful for anxiety, burnout, and cognitive fatigue',
    'Facilitates deep relaxation states (alpha/theta brainwaves)'
  ],

  useCases: [
    'Before sleep (insomnia relief)',
    'Morning mental clarity',
    'Stress recovery after work/study',
    'Anxiety calming sessions',
    'Break-time reset during study'
  ],

  durations: [
    { time: 3, label: '3 min', description: 'Ultra quick reset' },
    { time: 5, label: '5 min', description: 'Beginner entry session' },
    { time: 10, label: '10 min', description: 'Daily standard practice' },
    { time: 15, label: '15 min', description: 'Deeper relaxation' },
    { time: 20, label: '20 min', description: 'Full guided experience' },
    { time: 30, label: '30 min', description: 'Advanced immersion' }
  ],

  variations: [
    'Body Scan Guided Meditation',
    'Sleep Guided Meditation',
    'Visualization Guided Meditation',
    'Anxiety Relief Guided Session',
    'Focus/Study Guided Meditation'
  ],

  comparison: {
    vsFocusedAttention: 'Less effort required; external guidance replaces self-discipline',
    vsMindfulness: 'More structured; less open-ended awareness',
    vsMantra: 'Dynamic instructions vs repetitive anchor'
  },

  commonMistakes: [
    'Listening passively instead of actively following instructions',
    'Expecting instant silence of thoughts',
    'Using it in a noisy or distracting environment',
    'Falling asleep unintentionally (unless goal is sleep)',
    'Switching sessions too frequently without consistency'
  ],

  environmentSetup: {
    lighting: 'Dim or dark',
    sound: 'Headphones recommended',
    posture: 'Stable and comfortable',
    distractions: 'Phone on silent / airplane mode'
  },

  progressionPath: [
    'Start with guided meditation (Week 1–2)',
    'Combine with breath awareness (Week 3)',
    'Transition to partial silence (Week 4)',
    'Move toward unguided meditation (advanced stage)'
  ],

  gifUrl: 'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
  gifAlt: 'Person in deep guided meditation with headphones',

  tip: 'Engagement is everything. The deeper you follow the guide, the deeper your state. Passive listening = weak results.',

  advancedTip: 'After 2–3 weeks, reduce dependency on the guide gradually to build internal attention control.',

  warning: 'If you feel excessive sleepiness, try sitting posture instead of lying down.'
}
];

// Make available globally
if (typeof module !== 'undefined') module.exports = TECHNIQUES;
