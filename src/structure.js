sink.Structure = [
    {
        text: 'Beginner Drum Lessons',
        cls: 'launchscreen',
        items: [
            {
                text: 'Beginner Drum Lessons',
                card: demos.BeginnerDrumLessons,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            },
            {
                text: 'How To Play Drums',
                card: demos.HowToPlayDrums,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            },
            {
                text: 'Drum Related Terms',
                card: demos.DrumRelatedTerms,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            },
            {
                text: 'Holding The Drumsticks',
                card: demos.HoldingTheDrumsticks,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            },
            {
                text: 'Choosing Drumsticks',
                card: demos.ChoosingDrumsticks,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            },
            {
                text: 'Bass Drum Techniques',
                card: demos.BassDrumTechniques,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            },
            {
                text: 'Drum Set Posture',
                card: demos.DrumSetPosture,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            },
            {
                text: 'Drum Set Warm-Ups',
                card: demos.DrumSetWarmUps,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            },
            {
                text: 'Drum Warm-Ups & Stretches',
                card: demos.DrumWarmUpsStretches,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            },
            {
                text: 'Drum Tuning',
                card: demos.DrumTuning,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            },
            {
                text: 'Snare Drum Tuning',
                card: demos.SnareDrumTuning,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            },
            {
                text: 'Learn To Play Drums',
                card: demos.LearnToPlayDrums,
                source: 'src/demos/beginner_drum_lessons.js',
                leaf: true
            }
        ]
    },
    
    
    
    
    
    
    
    {
        text: 'Drum Theory & Notation',
        cls: 'launchscreen',
        items: [
            {
                text: 'Drum Theory & Notation',
                card: demos.DrumTheoryNotation,
                source: 'src/demos/drum_theory_notation.js',
                leaf: true
            },
            {
                text: 'Counting Quarter Notes',
                card: demos.CountingQuarterNotes,
                source: 'src/demos/drum_theory_notation.js',
                leaf: true
            },
            {
                text: 'Counting Eighth Notes',
                card: demos.CountingEighthNotes,
                source: 'src/demos/drum_theory_notation.js',
                leaf: true
            },
            {
                text: 'Counting Sixteenth Notes',
                card: demos.CountingSixteenthNotes,
                source: 'src/demos/drum_theory_notation.js',
                leaf: true
            },
            {
                text: 'Counting Eighth Note Triplets',
                card: demos.CountingEighthNoteTriplets,
                source: 'src/demos/drum_theory_notation.js',
                leaf: true
            },
            {
                text: 'Counting 16th Note Triplets',
                card: demos.Counting16thNoteTriplets,
                source: 'src/demos/drum_theory_notation.js',
                leaf: true
            },
            {
                text: 'Counting 32nd Notes',
                card: demos.Counting32ndNotes,
                source: 'src/demos/drum_theory_notation.js',
                leaf: true
            },
            {
                text: 'How To Count Rests',
                card: demos.HowToCountRests,
                source: 'src/demos/drum_theory_notation.js',
                leaf: true
            },
            {
                text: 'Note Value Drum Exercise',
                card: demos.NoteValueDrumExercise,
                source: 'src/demos/drum_theory_notation.js',
                leaf: true
            }
        ]
    },
    
    
    
    
    
    
    
    
    
    
    
    {
        text: 'Dynamic Drumming',
        cls: 'launchscreen',
        items: [
            {
                text: 'Dynamic Drumming',
                card: demos.DynamicDrumming,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
            {
                text: 'Playing with Ghost Notes',
                card: demos.PlayingWithGhostNotes,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
            {
                text: 'Accenting With Rim Shots',
                card: demos.AccentingWithRimShots,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
            {
                text: 'Flam Exercises',
                card: demos.FlamDrumExercise,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
            {
                text: 'Snare Cross-Sticking',
                card: demos.SnareDrumCrossSticking,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
            {
                text: 'Crescendo & Decrescendo',
                card: demos.CrescendoDecrescendo,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
            {
                text: 'Opening/Closing Hi-Hats',
                card: demos.OpeningClosingHiHats,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
            {
                text: 'Doubles to Singles',
                card: demos.DoublesToSingles,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
            {
                text: 'Sizzling Hi-Hats',
                card: demos.SizzlingTheHiHats,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
            {
                text: 'Cymbal Choking',
                card: demos.CymbalChoking,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
            {
                text: 'Off-Beat Hi-Hat',
                card: demos.OffBeatHiHatBeats,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
            {
                text: 'Burn Exercise',
                card: demos.TheBurnDrumExercise,
                source: 'src/demos/dynamic_drumming.js',
                leaf: true
            },
        ]
    }
    
    
    
    
];


Ext.regModel('Demo', {
    fields: [
        {name: 'text',        type: 'string'},
        {name: 'source',      type: 'string'},
        {name: 'preventHide', type: 'boolean'},
        {name: 'cardSwitchAnimation'},
        {name: 'card'}
    ]
});

sink.StructureStore = new Ext.data.TreeStore({
    model: 'Demo',
    root: {
        items: sink.Structure
    },
    proxy: {
        type: 'ajax',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});
