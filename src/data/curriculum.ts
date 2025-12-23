import { Camera, Aperture, Clock, Focus, Palette, FileImage, User, Mountain, Moon, Zap } from 'lucide-react';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: typeof Camera;
  category: 'foundation' | 'portrait' | 'landscape' | 'lowlight' | 'action';
  order: number;
  content: LessonContent;
}

export interface LessonContent {
  introduction: string;
  sections: LessonSection[];
  practiceExercise: PracticeExercise;
  keyTakeaways: string[];
}

export interface LessonSection {
  title: string;
  content: string;
  tip?: string;
  settings?: CameraSettings;
}

export interface CameraSettings {
  mode?: string;
  iso?: string;
  aperture?: string;
  shutterSpeed?: string;
  focusMode?: string;
}

export interface PracticeExercise {
  title: string;
  instructions: string[];
  suggestedSettings: CameraSettings;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  objectives: string[];
  suggestedSettings: CameraSettings;
  tips: string[];
}

export interface CheatSheet {
  id: string;
  title: string;
  category: string;
  items: CheatSheetItem[];
}

export interface CheatSheetItem {
  scenario: string;
  mode: string;
  iso: string;
  aperture: string;
  shutterSpeed: string;
  notes: string;
}

export const foundationLessons: Lesson[] = [
  {
    id: 'getting-started',
    title: 'Getting to Know Your 1500D',
    description: 'Master the physical layout, buttons, and menus of your camera',
    duration: '15 min',
    icon: Camera,
    category: 'foundation',
    order: 1,
    content: {
      introduction: 'Your Canon EOS 1500D is a powerful tool waiting to be mastered. In this lesson, we\'ll explore every button, dial, and menu so you can navigate your camera with confidence.',
      sections: [
        {
          title: 'Camera Body Overview',
          content: 'The Canon EOS 1500D features an ergonomic body designed for comfortable shooting. On the top, you\'ll find the Mode Dial, Main Dial, Shutter Button, and Power Switch. The back houses the LCD screen, Quick Control button, and navigation controls.',
          tip: 'Spend 5 minutes just holding your camera and pressing each button without taking photos. Muscle memory is key!'
        },
        {
          title: 'The Mode Dial',
          content: 'The Mode Dial on top of your camera is your gateway to creative control. It includes: Auto (green square), Creative Auto (CA), Scene modes (Portrait, Landscape, etc.), P (Program), Tv (Shutter Priority), Av (Aperture Priority), and M (Manual).',
          tip: 'Start with P mode - it\'s a great stepping stone between Auto and full Manual.'
        },
        {
          title: 'Essential Buttons',
          content: 'Key buttons to memorize: Q (Quick Control) for fast settings access, DISP for changing screen information, ISO button for sensitivity adjustment, and the four-way controller for navigation and AF point selection.',
        },
        {
          title: 'Menu Navigation',
          content: 'Press MENU to access the camera\'s settings organized into tabs: Shooting (red), Playback (blue), Settings (yellow), and Custom Functions (orange). Use the Main Dial to switch tabs and the navigation buttons to move within menus.',
        }
      ],
      practiceExercise: {
        title: 'Button Scavenger Hunt',
        instructions: [
          'Turn on your camera and locate the Mode Dial',
          'Press the Q button and explore the Quick Control screen',
          'Navigate to the Menu and find the Image Quality setting',
          'Locate and press the ISO button, then change the ISO value',
          'Find the AF point selection button and move the focus point around'
        ],
        suggestedSettings: { mode: 'P' }
      },
      keyTakeaways: [
        'The Mode Dial controls how much automation vs manual control you have',
        'The Q button is your fastest way to change common settings',
        'Spend time exploring menus before you need to change settings in the field'
      ]
    }
  },
  {
    id: 'exposure-triangle',
    title: 'Understanding the Exposure Triangle',
    description: 'Master ISO, Aperture, and Shutter Speed - the foundation of photography',
    duration: '20 min',
    icon: Aperture,
    category: 'foundation',
    order: 2,
    content: {
      introduction: 'The Exposure Triangle is the most important concept in photography. Understanding how ISO, Aperture, and Shutter Speed work together will transform you from a snapshooter into a photographer.',
      sections: [
        {
          title: 'What is Exposure?',
          content: 'Exposure is the amount of light that reaches your camera sensor. A well-exposed photo has the right balance of bright and dark areas, with details visible in both highlights and shadows.',
          tip: 'Your camera\'s light meter (visible in the viewfinder) shows a scale from -3 to +3. Aim for the marker to be at 0 for "correct" exposure.'
        },
        {
          title: 'ISO: Sensor Sensitivity',
          content: 'ISO controls how sensitive your sensor is to light. Low ISO (100-400) = less sensitive, cleaner images, needs more light. High ISO (1600-6400) = more sensitive, allows shooting in darkness, but adds grain/noise. Your 1500D performs well up to ISO 1600.',
          settings: { iso: '100-6400' },
          tip: 'Always use the lowest ISO you can get away with. Increase only when necessary.'
        },
        {
          title: 'Aperture: The Light Gate',
          content: 'Aperture is the opening in your lens that lets light through. It\'s measured in f-stops. Wide aperture (f/1.8-f/4) = more light, blurry background (bokeh). Narrow aperture (f/8-f/16) = less light, sharp throughout. Counter-intuitive: smaller f-number = bigger opening!',
          settings: { aperture: 'f/3.5-f/22 (kit lens)' },
          tip: 'For portraits, use f/4-f/5.6. For landscapes, use f/8-f/11.'
        },
        {
          title: 'Shutter Speed: Freezing Time',
          content: 'Shutter Speed controls how long the sensor is exposed to light. Fast (1/500s+) freezes motion. Slow (1/30s or longer) creates blur. Rule of thumb: handheld shooting needs at least 1/focal length (1/50s for 50mm lens).',
          settings: { shutterSpeed: '30s to 1/4000s' },
          tip: 'If you see motion blur in your subjects, increase shutter speed. If the image is dark, decrease it.'
        },
        {
          title: 'The Triangle Balance',
          content: 'Here\'s the magic: these three settings are interconnected. If you change one, you must adjust another to maintain the same exposure. Double your ISO? You can halve your shutter speed. Open aperture one stop? Close shutter speed one stop.',
        }
      ],
      practiceExercise: {
        title: 'Exposure Triangle Experiment',
        instructions: [
          'Set your camera to Manual mode (M)',
          'Set ISO to 400, Aperture to f/5.6, and find a shutter speed that centers the meter',
          'Without changing anything else, double your ISO to 800 - notice the meter moves right (overexposed)',
          'Now halve your shutter speed to bring the meter back to center',
          'Try the same experiment with aperture changes'
        ],
        suggestedSettings: { mode: 'M', iso: '400', aperture: 'f/5.6' }
      },
      keyTakeaways: [
        'ISO, Aperture, and Shutter Speed all affect exposure and each other',
        'Each setting has a creative side effect: noise, depth of field, or motion blur',
        'Start with ISO as low as possible, then adjust aperture for creative effect, then shutter speed for correct exposure'
      ]
    }
  },
  {
    id: 'shooting-modes',
    title: 'Shooting Modes Deep Dive',
    description: 'Learn when to use Auto, P, Av, Tv, and M modes effectively',
    duration: '18 min',
    icon: Camera,
    category: 'foundation',
    order: 3,
    content: {
      introduction: 'Your Mode Dial isn\'t just a learning progression from Auto to Manual - each mode is a tool designed for specific situations. Learning when to use each will make you faster and more effective.',
      sections: [
        {
          title: 'Full Auto Mode (Green Square)',
          content: 'In Full Auto, the camera controls everything: ISO, aperture, shutter speed, flash, and focus mode. It\'s designed to get a usable shot in any situation, but it can\'t read your creative intent.',
          tip: 'Auto mode often pops up the flash unnecessarily and may choose settings that don\'t match your vision.'
        },
        {
          title: 'Program Mode (P)',
          content: 'P mode is "Auto with benefits." The camera sets aperture and shutter speed, but you control ISO, exposure compensation, white balance, and more. You can also shift the aperture/shutter combination while maintaining exposure.',
          settings: { mode: 'P' },
          tip: 'P mode is perfect for travel and street photography where conditions change quickly.'
        },
        {
          title: 'Aperture Priority (Av)',
          content: 'In Av mode, you set the aperture and the camera calculates shutter speed. This is the go-to mode for controlling depth of field - portraits, landscapes, and any situation where background blur matters.',
          settings: { mode: 'Av' },
          tip: 'Av is the most popular mode among professionals. Master it and you\'ll handle 80% of situations.'
        },
        {
          title: 'Shutter Priority (Tv)',
          content: 'In Tv mode, you set the shutter speed and the camera calculates aperture. Use this when motion is your priority - freezing action or intentionally blurring movement.',
          settings: { mode: 'Tv' },
          tip: 'For sports and wildlife, start with 1/500s. For light trails and waterfalls, try 1/4s to 2s.'
        },
        {
          title: 'Manual Mode (M)',
          content: 'Manual gives you complete control over all settings. The camera only provides a light meter reading as guidance. Use it when you need consistency across multiple shots or in challenging light.',
          settings: { mode: 'M' },
          tip: 'Manual isn\'t always "better" - it\'s a tool for specific situations like studio work or tricky lighting.'
        }
      ],
      practiceExercise: {
        title: 'Mode Comparison Shoot',
        instructions: [
          'Find a well-lit subject (person, pet, or still life)',
          'Take the same photo in Auto, P, Av (f/4), and M mode',
          'Compare the results and note which settings each mode chose',
          'Repeat in a darker location and observe how each mode adapts'
        ],
        suggestedSettings: { mode: 'Av', aperture: 'f/4' }
      },
      keyTakeaways: [
        'Use Av mode when depth of field is your priority',
        'Use Tv mode when motion (frozen or blurred) is your priority',
        'Use M mode when you need consistent exposure across shots',
        'P mode is a capable everyday mode, not a "beginner" mode'
      ]
    }
  },
  {
    id: 'focus-modes',
    title: 'Focus Modes & AF Points',
    description: 'Master autofocus for tack-sharp images every time',
    duration: '15 min',
    icon: Focus,
    category: 'foundation',
    order: 4,
    content: {
      introduction: 'A perfectly exposed photo means nothing if it\'s out of focus. Your 1500D\'s 9-point autofocus system is more powerful than you might think - let\'s unlock its full potential.',
      sections: [
        {
          title: 'One-Shot AF',
          content: 'One-Shot AF locks focus when you half-press the shutter button. It\'s perfect for stationary subjects like portraits, landscapes, and still life. Focus once, then you can recompose your shot.',
          settings: { focusMode: 'One-Shot AF' },
          tip: 'Half-press, hear the beep, then fully press. This two-stage technique is essential.'
        },
        {
          title: 'AI Servo AF',
          content: 'AI Servo continuously adjusts focus as your subject moves. Essential for sports, wildlife, kids, and pets. The camera predicts where the subject will be when the shutter fires.',
          settings: { focusMode: 'AI Servo' },
          tip: 'Keep the AF point on your subject while tracking. Pre-focus on where action will happen.'
        },
        {
          title: 'AI Focus AF',
          content: 'AI Focus automatically switches between One-Shot and AI Servo. It starts as One-Shot but switches to tracking if the subject moves. Good for unpredictable situations.',
          settings: { focusMode: 'AI Focus' },
          tip: 'AI Focus can be slower to react than manually choosing the right mode.'
        },
        {
          title: 'AF Point Selection',
          content: 'Your 1500D has 9 AF points. You can let the camera choose (automatic selection) or manually select a specific point. The center point is most accurate. Use single point selection for portraits.',
          tip: 'For portraits, always use single point AF and place it on the subject\'s nearest eye.'
        },
        {
          title: 'Manual Focus',
          content: 'Switch the lens to MF for complete control. Essential for: macro photography, low-contrast scenes where AF fails, precise focus stacking, and creative selective focus.',
          tip: 'Use Live View with 10x zoom to check manual focus accuracy.'
        }
      ],
      practiceExercise: {
        title: 'Focus Mode Challenge',
        instructions: [
          'Set up a stationary object and practice One-Shot AF with focus-recompose',
          'Switch to AI Servo and practice tracking a moving subject (pet, person walking, ball)',
          'Try selecting specific AF points and placing them on your subject\'s eye',
          'Use Live View to practice manual focus on a detailed subject'
        ],
        suggestedSettings: { focusMode: 'One-Shot AF' }
      },
      keyTakeaways: [
        'One-Shot for still subjects, AI Servo for moving subjects',
        'Single AF point selection gives you precise control over what\'s in focus',
        'Always focus on the eyes in portraits',
        'Manual focus is a skill worth developing for creative control'
      ]
    }
  },
  {
    id: 'white-balance',
    title: 'White Balance & Metering',
    description: 'Get accurate colors and proper exposure in any light',
    duration: '12 min',
    icon: Palette,
    category: 'foundation',
    order: 5,
    content: {
      introduction: 'Light isn\'t always white - it has color temperature. And your camera needs to know how to measure that light. Understanding these concepts will give you professional-looking colors.',
      sections: [
        {
          title: 'What is White Balance?',
          content: 'White balance adjusts colors so whites appear neutral under different light sources. Daylight is blue-ish, tungsten bulbs are orange, fluorescent is green. Your camera can compensate.',
          tip: 'If your photos look too orange or too blue, white balance is the culprit.'
        },
        {
          title: 'White Balance Presets',
          content: 'Your 1500D offers presets: AWB (Auto), Daylight, Shade, Cloudy, Tungsten, Fluorescent, Flash, and Custom. AWB works well in most situations but can be fooled by dominant colors.',
        },
        {
          title: 'Custom White Balance',
          content: 'For perfect accuracy, photograph a white or gray card under your current lighting, then set it as your custom white balance reference. Essential for product photography and consistent color.',
          tip: 'Shooting RAW? You can adjust white balance perfectly in post-processing.'
        },
        {
          title: 'Metering Modes',
          content: 'Metering determines how your camera measures light. Evaluative (default) analyzes the whole scene. Partial meters a center circle (good for backlit subjects). Spot meters a tiny center point.',
        },
        {
          title: 'When to Change Metering',
          content: 'Evaluative handles 90% of situations. Switch to Partial or Spot when your subject is much brighter or darker than the background - like a performer on a dark stage or a person against a bright window.',
          tip: 'For backlit portraits, use Partial metering and meter on the face, or use exposure compensation +1 to +2.'
        }
      ],
      practiceExercise: {
        title: 'Color Temperature Test',
        instructions: [
          'Photograph the same white object under different lights (window, lamp, fluorescent)',
          'Compare Auto White Balance with the correct preset for each',
          'Try intentionally wrong white balance for creative warm/cool effects',
          'Practice using Partial metering on a backlit subject'
        ],
        suggestedSettings: { mode: 'P' }
      },
      keyTakeaways: [
        'AWB is good but not perfect - know how to fix color casts',
        'Shoot RAW for maximum white balance flexibility',
        'Switch metering modes when the scene fools evaluative metering',
        'Exposure compensation is your friend for backlit subjects'
      ]
    }
  },
  {
    id: 'file-formats',
    title: 'File Formats & Quality Settings',
    description: 'Choose the right format for maximum quality and flexibility',
    duration: '10 min',
    icon: FileImage,
    category: 'foundation',
    order: 6,
    content: {
      introduction: 'The format you shoot in affects image quality, file size, and how much you can edit your photos later. Making the right choice now saves headaches later.',
      sections: [
        {
          title: 'JPEG: Processed & Ready',
          content: 'JPEG files are processed in-camera with your chosen picture style, color, and sharpening applied. They\'re smaller (3-6MB) and ready to share. But editing them degrades quality.',
          tip: 'JPEG is fine for casual shooting, social media, and when you don\'t plan to edit heavily.'
        },
        {
          title: 'RAW: Maximum Flexibility',
          content: 'RAW files contain all sensor data without processing (20-25MB each). They look flat out of camera but can be edited extensively without quality loss. Essential for professional work.',
          tip: 'RAW lets you recover blown highlights and crushed shadows that JPEG can\'t save.'
        },
        {
          title: 'RAW+JPEG: Best of Both',
          content: 'This setting saves both versions simultaneously. You get instant JPEGs for sharing and RAW files for editing important shots. Uses more storage.',
        },
        {
          title: 'JPEG Quality Levels',
          content: 'Your 1500D offers Large/Medium/Small sizes and Fine/Normal compression. For best quality, always use Large Fine. The only reason to go smaller is limited storage.',
        },
        {
          title: 'Storage Considerations',
          content: 'A 32GB card holds approximately: 1,500 Large Fine JPEGs, 800 RAW files, or 600 RAW+JPEG pairs. Always carry backup cards for important shoots.',
          tip: 'Format your card in-camera (not on computer) for best reliability.'
        }
      ],
      practiceExercise: {
        title: 'Format Comparison',
        instructions: [
          'Take the same photo in JPEG and RAW format',
          'Import both into editing software (Canon DPP is free)',
          'Try recovering a blown-out sky or dark shadow in each',
          'Compare the results to see RAW\'s advantage'
        ],
        suggestedSettings: { mode: 'P' }
      },
      keyTakeaways: [
        'Shoot RAW for important photos and anything you\'ll edit seriously',
        'JPEG is convenient but limits your editing options',
        'RAW+JPEG gives flexibility but uses more storage',
        'Always use Large Fine if shooting JPEG only'
      ]
    }
  }
];

export const scenarioLessons: Lesson[] = [
  {
    id: 'portrait-photography',
    title: 'Portrait Photography',
    description: 'Capture stunning portraits with beautiful bokeh and flattering light',
    duration: '25 min',
    icon: User,
    category: 'portrait',
    order: 7,
    content: {
      introduction: 'Portrait photography is about capturing personality and connection. With the right techniques, your Canon 1500D can produce professional-quality portraits that rival expensive camera systems.',
      sections: [
        {
          title: 'The Power of Aperture',
          content: 'Wide apertures (low f-numbers) create shallow depth of field, separating your subject from the background. With your kit lens, shoot at f/4-f/5.6 for best results. A 50mm f/1.8 lens is an affordable upgrade.',
          settings: { mode: 'Av', aperture: 'f/4-f/5.6' },
          tip: 'Get closer to your subject and further from the background to maximize bokeh.'
        },
        {
          title: 'Finding the Light',
          content: 'Natural light is your best friend. Golden hour (after sunrise, before sunset) provides warm, flattering light. Cloudy days act like a giant softbox. Avoid harsh midday sun unless using shade or fill flash.',
          tip: 'Window light creates beautiful portraits. Place subject beside a large window, not in front of it.'
        },
        {
          title: 'Focus on the Eyes',
          content: 'The eyes must be tack-sharp - they\'re where viewers look first. Use single-point AF and place it directly on the nearest eye. At wide apertures, even slight misfocus is noticeable.',
          settings: { focusMode: 'One-Shot AF' },
        },
        {
          title: 'Composition Essentials',
          content: 'Use the rule of thirds to place eyes in the upper third. Leave space in the direction your subject is looking (lead room). Shooting slightly from above is universally flattering.',
          tip: 'Fill the frame - don\'t be afraid to get close or crop tight in post.'
        },
        {
          title: 'Working with Your Subject',
          content: 'Direction matters more than gear. Give specific, actionable guidance: "Turn your shoulders left, but look at me." Keep shooting - people relax after the first 50 shots.',
        }
      ],
      practiceExercise: {
        title: 'Portrait Session',
        instructions: [
          'Find a willing subject and position them near a window',
          'Set Av mode at f/5.6, ISO 400-800 as needed',
          'Use single-point AF on the nearest eye',
          'Take 10 shots with different poses and expressions',
          'Review and identify your best shot and why it works'
        ],
        suggestedSettings: { mode: 'Av', aperture: 'f/5.6', iso: '400-800', focusMode: 'One-Shot AF' }
      },
      keyTakeaways: [
        'Wide aperture + distance from background = beautiful bokeh',
        'Always focus on the eyes',
        'Natural light near windows or in shade is flattering',
        'Connection with your subject matters more than technical perfection'
      ]
    }
  },
  {
    id: 'landscape-nature',
    title: 'Landscape & Nature',
    description: 'Capture breathtaking landscapes with stunning detail and depth',
    duration: '25 min',
    icon: Mountain,
    category: 'landscape',
    order: 8,
    content: {
      introduction: 'Landscape photography is about patience, timing, and understanding light. Your Canon 1500D is perfectly capable of capturing wall-worthy vistas with the right technique.',
      sections: [
        {
          title: 'Maximizing Sharpness',
          content: 'Use f/8-f/11 for the sharpest images across the frame. Smaller apertures (f/16+) cause diffraction that softens your image. Use a tripod to eliminate camera shake.',
          settings: { mode: 'Av', aperture: 'f/8-f/11' },
          tip: 'The "sweet spot" of your kit lens is around f/8 - maximum sharpness with good depth of field.'
        },
        {
          title: 'The Magic Hours',
          content: 'Golden hour (after sunrise, before sunset) bathes scenes in warm, directional light. Blue hour (before sunrise, after sunset) offers cool, ethereal tones. Midday is for scouting, not shooting.',
          tip: 'Arrive 30 minutes before sunset - the best light often comes after the sun drops below the horizon.'
        },
        {
          title: 'Composition Fundamentals',
          content: 'Include foreground interest to create depth. Use leading lines (roads, rivers, fences) to draw the eye. Apply the rule of thirds, but know when to break it for symmetry.',
        },
        {
          title: 'Using a Tripod',
          content: 'A sturdy tripod allows low ISO for clean images, long exposures for silky water, and consistent framing. Use a 2-second timer or remote to eliminate shutter shake.',
          settings: { iso: '100' },
          tip: 'Extend the thickest leg sections first for maximum stability.'
        },
        {
          title: 'Long Exposure Magic',
          content: 'Slow shutter speeds transform moving elements: smooth water (1-30 seconds), streaking clouds (30+ seconds), light trails from cars. Use Tv mode or Manual with low ISO.',
          settings: { mode: 'Tv', shutterSpeed: '1s-30s' },
        }
      ],
      practiceExercise: {
        title: 'Golden Hour Expedition',
        instructions: [
          'Scout a location with interesting foreground and a good view',
          'Arrive 30 minutes before sunset with your tripod',
          'Set Av mode, f/8, ISO 100, 2-second timer',
          'Compose with foreground interest and apply rule of thirds',
          'Take photos every 5 minutes as the light changes'
        ],
        suggestedSettings: { mode: 'Av', aperture: 'f/8', iso: '100' }
      },
      keyTakeaways: [
        'f/8-f/11 gives maximum sharpness across the frame',
        'Golden and blue hours are when magic happens',
        'Foreground interest creates depth and scale',
        'A tripod unlocks long exposure creativity'
      ]
    }
  },
  {
    id: 'low-light-night',
    title: 'Low Light & Night',
    description: 'Master challenging light conditions and night photography',
    duration: '25 min',
    icon: Moon,
    category: 'lowlight',
    order: 9,
    content: {
      introduction: 'Low light separates snapshots from photographs. While the 1500D isn\'t a low-light champion, knowing its limits and working within them produces impressive results.',
      sections: [
        {
          title: 'Pushing ISO Wisely',
          content: 'Your 1500D handles ISO 800 well, ISO 1600 acceptably, and ISO 3200 in a pinch. Above that, noise becomes significant. A slightly noisy sharp image beats a clean blurry one.',
          settings: { iso: '800-1600' },
          tip: 'Noise is more visible in shadows. Expose to the right (slightly bright) and darken in post.'
        },
        {
          title: 'Stabilization Techniques',
          content: 'Without in-body stabilization, you need: faster shutter speeds, a tripod, or bracing techniques. Lean against walls, hold breath, and use burst mode to increase sharp shot odds.',
          tip: 'The 1/focal length rule becomes 1/(focal length x 1.6) on crop sensor. For 50mm, shoot at least 1/80s handheld.'
        },
        {
          title: 'When to Use Flash',
          content: 'Built-in flash is harsh but useful. Bounce off a white ceiling if possible. Use flash exposure compensation (-1 to -2) for fill flash that doesn\'t overpower ambient light.',
          tip: 'An external flash bounced off the ceiling transforms indoor photography.'
        },
        {
          title: 'Night Cityscape Techniques',
          content: 'Use a tripod, lowest ISO, and small aperture (f/8-f/11) for sharp night cityscapes. Shutter speeds of 10-30 seconds turn car lights into light trails.',
          settings: { mode: 'M', iso: '100', aperture: 'f/8', shutterSpeed: '10-30s' },
        },
        {
          title: 'Astrophotography Basics',
          content: 'For starry skies: Manual mode, f/3.5 (widest), ISO 1600-3200, 20-second exposure (500 rule: 500÷focal length = max seconds before star trails). Use manual focus at infinity.',
          settings: { mode: 'M', aperture: 'f/3.5', iso: '1600-3200', shutterSpeed: '15-20s' },
          tip: 'Find dark skies away from city lights. Apps like PhotoPills help plan shots.'
        }
      ],
      practiceExercise: {
        title: 'Night Photography Session',
        instructions: [
          'Find a cityscape or lit subject after dark',
          'Set up your tripod and use a 2-second timer',
          'Start with ISO 100, f/8, and experiment with shutter speeds',
          'Capture light trails from moving cars (10-30 seconds)',
          'Try a starry sky shot if you have dark skies available'
        ],
        suggestedSettings: { mode: 'M', iso: '100-3200', aperture: 'f/8' }
      },
      keyTakeaways: [
        'A noisy sharp photo beats a clean blurry one - don\'t fear ISO',
        'Tripod is essential for night photography',
        'Built-in flash at -1 to -2 compensation works as fill',
        'Long exposures create magical effects with moving lights'
      ]
    }
  },
  {
    id: 'action-sports',
    title: 'Action & Sports',
    description: 'Freeze motion and capture decisive moments in action photography',
    duration: '25 min',
    icon: Zap,
    category: 'action',
    order: 10,
    content: {
      introduction: 'Action photography is about anticipation, technique, and quick reflexes. Your Canon 1500D\'s 3 fps burst mode and reliable AF can capture moments that matter.',
      sections: [
        {
          title: 'Freezing Motion',
          content: 'Fast subjects need fast shutter speeds. Walking: 1/250s. Running: 1/500s. Sports: 1/1000s+. Racing/birds in flight: 1/2000s+. Use Tv mode and let the camera handle aperture.',
          settings: { mode: 'Tv', shutterSpeed: '1/500-1/2000' },
          tip: 'When in doubt, go faster. You can brighten a dark image, but you can\'t unblur a blurry one.'
        },
        {
          title: 'Continuous AF Tracking',
          content: 'Switch to AI Servo focus mode for moving subjects. The camera continuously adjusts focus as long as you half-press the shutter. Keep the AF point on your subject.',
          settings: { focusMode: 'AI Servo' },
          tip: 'Pre-focus on where action will happen, then track as it enters frame.'
        },
        {
          title: 'Burst Mode',
          content: 'Hold down the shutter button for continuous shooting at 3 fps. This increases your chances of capturing the peak moment. Review and delete rejects to save storage.',
        },
        {
          title: 'Panning Technique',
          content: 'For creative motion blur: use 1/30-1/60s, track your moving subject smoothly, and fire while panning. Subject stays sharp while background streaks. Takes practice!',
          settings: { mode: 'Tv', shutterSpeed: '1/30-1/60' },
          tip: 'Use continuous shooting while panning - one of your burst shots will be sharper than the others.'
        },
        {
          title: 'Anticipation & Positioning',
          content: 'Know your sport. Position yourself where action happens. Pre-focus on key spots. Shoot slightly before peak action - there\'s shutter lag. More frames = more keepers.',
        }
      ],
      practiceExercise: {
        title: 'Motion Capture Challenge',
        instructions: [
          'Find a moving subject: pet, cyclist, runner, or fountain',
          'Set Tv mode at 1/1000s, AI Servo focus, burst mode ON',
          'Practice tracking the subject and shooting bursts',
          'Review your shots for sharp focus on the subject',
          'Try panning at 1/60s for motion blur effect'
        ],
        suggestedSettings: { mode: 'Tv', shutterSpeed: '1/1000', focusMode: 'AI Servo' }
      },
      keyTakeaways: [
        '1/500s minimum for running, 1/1000s+ for fast sports',
        'AI Servo is essential for tracking moving subjects',
        'Anticipation and positioning beat reflexes',
        'Burst mode increases your odds of catching the moment'
      ]
    }
  }
];

export const allLessons = [...foundationLessons, ...scenarioLessons];

export const challenges: Challenge[] = [
  {
    id: 'challenge-portrait-golden',
    title: 'Golden Hour Portrait',
    description: 'Capture a portrait during golden hour with beautiful warm light and shallow depth of field',
    difficulty: 'beginner',
    category: 'portrait',
    objectives: [
      'Shoot within 30 minutes of sunset',
      'Use f/5.6 or wider aperture',
      'Focus on the eyes',
      'Capture warm, glowing light on the face'
    ],
    suggestedSettings: { mode: 'Av', aperture: 'f/5.6', iso: '100-400', focusMode: 'One-Shot AF' },
    tips: [
      'Position subject with sun behind them for rim light',
      'Use a reflector or white surface to bounce light back',
      'Watch for catchlights in the eyes'
    ]
  },
  {
    id: 'challenge-silhouette',
    title: 'Dramatic Silhouette',
    description: 'Create a striking silhouette with a colorful sky background',
    difficulty: 'beginner',
    category: 'landscape',
    objectives: [
      'Expose for the bright sky, not the subject',
      'Create a recognizable silhouette shape',
      'Capture during sunrise or sunset'
    ],
    suggestedSettings: { mode: 'M', aperture: 'f/8', iso: '100' },
    tips: [
      'Meter on the brightest part of the sky',
      'Subjects with clear outlines work best',
      'Use spot metering for precise exposure'
    ]
  },
  {
    id: 'challenge-light-trails',
    title: 'City Light Trails',
    description: 'Capture car light trails on a busy street at night',
    difficulty: 'intermediate',
    category: 'lowlight',
    objectives: [
      'Use a tripod for stability',
      'Achieve 10-30 second exposures',
      'Include both red and white light trails',
      'Keep buildings sharp'
    ],
    suggestedSettings: { mode: 'M', aperture: 'f/8-f/11', iso: '100', shutterSpeed: '15-30s' },
    tips: [
      'Use a 2-second timer to prevent shake',
      'Find a location with curved roads for interesting trails',
      'Wait for traffic lights to let cars accumulate'
    ]
  },
  {
    id: 'challenge-freeze-action',
    title: 'Frozen in Motion',
    description: 'Freeze a fast-moving subject with crystal clarity',
    difficulty: 'intermediate',
    category: 'action',
    objectives: [
      'Capture at 1/1000s or faster',
      'Subject must be completely sharp',
      'Show the sense of motion in the frame'
    ],
    suggestedSettings: { mode: 'Tv', shutterSpeed: '1/1000-1/2000', focusMode: 'AI Servo' },
    tips: [
      'Pre-focus where action will happen',
      'Use burst mode to increase chances',
      'Increase ISO if needed for the shutter speed'
    ]
  },
  {
    id: 'challenge-macro-nature',
    title: 'Nature Up Close',
    description: 'Capture intricate details of flowers, insects, or textures',
    difficulty: 'intermediate',
    category: 'landscape',
    objectives: [
      'Fill the frame with your small subject',
      'Achieve sharp focus on key details',
      'Create pleasing background blur'
    ],
    suggestedSettings: { mode: 'Av', aperture: 'f/4-f/5.6', iso: '100-400', focusMode: 'One-Shot AF' },
    tips: [
      'Get as close as your lens allows while maintaining focus',
      'Use manual focus for precise control',
      'Early morning has dew drops and still insects'
    ]
  },
  {
    id: 'challenge-panning',
    title: 'Motion Blur Panning',
    description: 'Create dynamic motion blur while keeping your subject sharp',
    difficulty: 'advanced',
    category: 'action',
    objectives: [
      'Subject stays sharp while background blurs',
      'Use shutter speed between 1/30-1/60s',
      'Show clear sense of speed and direction'
    ],
    suggestedSettings: { mode: 'Tv', shutterSpeed: '1/30-1/60', focusMode: 'AI Servo' },
    tips: [
      'Practice smooth, continuous panning motion',
      'Use burst mode while panning',
      'Expect many failed attempts - this is challenging!'
    ]
  }
];

export const cheatSheets: CheatSheet[] = [
  {
    id: 'quick-settings',
    title: 'Quick Settings Guide',
    category: 'general',
    items: [
      { scenario: 'Sunny Day Outdoors', mode: 'Av', iso: '100', aperture: 'f/8', shutterSpeed: 'Auto', notes: 'The classic outdoor setting' },
      { scenario: 'Cloudy Day', mode: 'Av', iso: '200-400', aperture: 'f/5.6', shutterSpeed: 'Auto', notes: 'Increase ISO for clouds' },
      { scenario: 'Indoor Natural Light', mode: 'Av', iso: '800-1600', aperture: 'f/4', shutterSpeed: 'Auto', notes: 'Open up and boost ISO' },
      { scenario: 'Indoor with Flash', mode: 'P', iso: '400', aperture: 'Auto', shutterSpeed: 'Auto', notes: 'Flash handles the work' },
      { scenario: 'Night Tripod', mode: 'M', iso: '100', aperture: 'f/8', shutterSpeed: '10-30s', notes: 'Low ISO, long exposure' },
      { scenario: 'Night Handheld', mode: 'Tv', iso: '1600-3200', aperture: 'Auto', shutterSpeed: '1/50+', notes: 'Fast shutter, high ISO' }
    ]
  },
  {
    id: 'portrait-settings',
    title: 'Portrait Settings',
    category: 'portrait',
    items: [
      { scenario: 'Outdoor Headshot', mode: 'Av', iso: '100-400', aperture: 'f/4-5.6', shutterSpeed: 'Auto', notes: 'Focus on nearest eye' },
      { scenario: 'Golden Hour Portrait', mode: 'Av', iso: '100-200', aperture: 'f/4', shutterSpeed: 'Auto', notes: 'Warm, directional light' },
      { scenario: 'Window Light Portrait', mode: 'Av', iso: '400-800', aperture: 'f/4-5.6', shutterSpeed: 'Auto', notes: 'Position beside window' },
      { scenario: 'Group Photo', mode: 'Av', iso: '200-400', aperture: 'f/8', shutterSpeed: 'Auto', notes: 'Deeper DOF for all faces' },
      { scenario: 'Environmental Portrait', mode: 'Av', iso: '200-400', aperture: 'f/5.6-8', shutterSpeed: 'Auto', notes: 'Show context and setting' }
    ]
  },
  {
    id: 'action-settings',
    title: 'Action & Sports Settings',
    category: 'action',
    items: [
      { scenario: 'Walking/Casual', mode: 'Tv', iso: '100-400', aperture: 'Auto', shutterSpeed: '1/250', notes: 'Easy to freeze' },
      { scenario: 'Running/Jogging', mode: 'Tv', iso: '200-800', aperture: 'Auto', shutterSpeed: '1/500', notes: 'Moderate action' },
      { scenario: 'Sports/Fast Action', mode: 'Tv', iso: '400-1600', aperture: 'Auto', shutterSpeed: '1/1000+', notes: 'Use AI Servo AF' },
      { scenario: 'Birds in Flight', mode: 'Tv', iso: '400-1600', aperture: 'Auto', shutterSpeed: '1/2000+', notes: 'Very fast subjects' },
      { scenario: 'Panning Effect', mode: 'Tv', iso: '100', aperture: 'Auto', shutterSpeed: '1/30-1/60', notes: 'Track smoothly' }
    ]
  }
];

export const modeComparisons = [
  {
    id: 'portrait-bokeh',
    title: 'Portrait: Background Blur',
    category: 'portrait',
    autoDescription: 'Auto mode chose f/8, keeping the background nearly as sharp as the subject. The image lacks separation and the subject doesn\'t pop.',
    manualDescription: 'Using Av mode at f/4, the background melts into beautiful bokeh, creating a professional look that draws attention to the subject.',
    autoSettings: { mode: 'Auto', iso: '400', aperture: 'f/8', shutterSpeed: '1/125' },
    manualSettings: { mode: 'Av', iso: '200', aperture: 'f/4', shutterSpeed: '1/500' },
    lesson: 'Wide apertures create subject-background separation'
  },
  {
    id: 'lowlight-indoor',
    title: 'Low Light: Indoor Event',
    category: 'lowlight',
    autoDescription: 'Auto mode fired the flash, creating harsh shadows and washing out the ambient atmosphere. The background goes dark.',
    manualDescription: 'Manual control preserves the warm ambient light, using high ISO and wide aperture. The scene feels natural and inviting.',
    autoSettings: { mode: 'Auto', iso: '400', aperture: 'f/5.6', shutterSpeed: '1/60' },
    manualSettings: { mode: 'M', iso: '1600', aperture: 'f/4', shutterSpeed: '1/50' },
    lesson: 'Sometimes the "wrong" exposure is more evocative'
  },
  {
    id: 'action-freeze',
    title: 'Action: Freezing Motion',
    category: 'action',
    autoDescription: 'Auto mode selected too slow a shutter speed, resulting in motion blur. The decisive moment is lost to camera shake.',
    manualDescription: 'Tv mode at 1/1000s freezes the action completely. Every detail is sharp, capturing the exact moment of impact.',
    autoSettings: { mode: 'Auto', iso: '200', aperture: 'f/8', shutterSpeed: '1/60' },
    manualSettings: { mode: 'Tv', iso: '800', aperture: 'f/5.6', shutterSpeed: '1/1000' },
    lesson: 'Fast shutter speeds sacrifice ISO cleanliness for sharpness'
  },
  {
    id: 'landscape-golden',
    title: 'Landscape: Golden Hour',
    category: 'landscape',
    autoDescription: 'Auto mode overexposed the bright sky to capture the darker foreground, losing the beautiful sunset colors and drama.',
    manualDescription: 'Manual exposure preserved the rich oranges and pinks of the sky while keeping foreground detail. The scene feels magical.',
    autoSettings: { mode: 'Auto', iso: '400', aperture: 'f/8', shutterSpeed: '1/125' },
    manualSettings: { mode: 'M', iso: '100', aperture: 'f/11', shutterSpeed: '1/250' },
    lesson: 'Underexposing preserves color saturation in bright skies'
  },
  {
    id: 'creative-silhouette',
    title: 'Creative: Intentional Silhouette',
    category: 'landscape',
    autoDescription: 'Auto mode tried to expose for the person, resulting in a blown-out sky and muddy subject. Neither element works.',
    manualDescription: 'Exposing for the sky creates a dramatic silhouette. The subject becomes a bold shape against the colorful backdrop.',
    autoSettings: { mode: 'Auto', iso: '400', aperture: 'f/5.6', shutterSpeed: '1/250' },
    manualSettings: { mode: 'M', iso: '100', aperture: 'f/8', shutterSpeed: '1/500' },
    lesson: 'Sometimes underexposure IS the correct exposure'
  }
];
