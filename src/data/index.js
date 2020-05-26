export default {

    start: {
        text: `It\'s an early summer morning. You are going for a walk in the woods near your house with some friends. You've been there many times before.  The birds are singing. It's still cool for a summer day, and the sky is overcast.  

It's 11am, British Standard Time.`,
        images: ['dark_woods.jpg'],
    },

    steps: [
        {
            id: 1,
            text: `You spot something you haven't noticed before. There are some stone columns behind some trees. You walk over, and on closer inspection, they are part of a wall. They have rusted iron gates, which look like they haven't been used in a century. `,
            question: 'Do you want to see what is on the other side?',
            images: ['stone_gates.jpg'],
            solutions: ['yes'],
            feedback: 'You really should go through the gates. Try typing "yes" ?',
            next: {
                yes: 2
            }
        },

        {
            id: 2,
            text: `Your friend trips over a dead branch lying on the ground. Unfortunately that was the only thing holding the gates open, and they slam shut behind you and your friends. You try to move the gates open but they are massively heavy. The walls, despite their age, are very smooth and impossible to climb. You had better try looking for another way out.`,
            question: 'Follow the wall to the left, or right?',
            images: ['closed_entrance_gates.jpg'],
            solutions: ['left', 'right'],
            feedback: 'Type "left", or "right".',
            next: {
                left: 3,
                right: 30
            },
            canGoBack: true
        },

        {
            id: 3,
            text: `You follow the wall to the left. 
            You come to a small pond. It's fringed with water hemlock and calla. Water lilies bob on small waves in the green water. There are a number of abandoned items here, a canoe, and a bunch of beehives in the distance. Weeds plait their way over everything. You start feeling a sense of dread, locked in this place. Hopefully this is not permanent.`,
            question: `Continue?`,
            images: ['abandoned_canoe.jpg'],
            solutions: ['yes'],
            feedback: 'Type "yes" to continue',
            next: {
                yes: 4,
            },
            canGoBack: true
        },

        {
            id: 4,
            text: `You walk away from the pond. It's much cooler and a mist is setting in. You come across a woman sitting in the path. Hopefully she can tell you the way out.
            
            You cough to attract attention, she's obviously not expecting to see anyone. "Excuse me?" 

            She turns to you, and says,
            "Call me by my name, if you want to talk to me!"
            `,
            question: `What is her name?`,
            images: ['woman_sitting_fog.jpg'],
            solutions: ['rachel'],
            feedback: 'Enter a name',
            hint: 'Clues are on the last page',
            next: {
                rachel: 5,
            },
            canGoBack: true
        },

        {
            id: 5,
            text: `
            Rachel turns to look at you, and decides she doesn't want to talk to you anyway. She turns away and runs off into the woods. The woods are getting deeper and many of the trees are half-covered in ivy, and moss on one side of their trunks. 
            `
            ,
            question: `Looking directly at this tree, what direction are you facing?`,
            images: ['ivy_tree.jpg'],
            solutions: ['south'],
            feedback: 'Enter a compass direction.',
            hint: 'what side of a tree does moss and ivy grow? Remember you are looking directly at the tree.',
            next: {
                south: 6,
            },
            canGoBack: true
        },

        {
            id: 6,
            text: `
            South seems a good direction as any to go in. You lost track of the wall you were following a while ago. 
            
            You come across a rucksack hanging on a tree. It must be Rachel's, it looks just like the one she was wearing. 
            `
            ,
            question: `Are you going to open the backpack, or keep walking?`,
            images: ['rucksack_hanging_tree.jpg'],
            solutions: ['open', 'walk'],
            feedback: '"Open" or "Walk"',
            // hint: '',
            next: {
                open: 7,
                walk: 8
            },
            canGoBack: true
        },


        {
            id: 7,
            text: `
            Looking in someone else's bag isn't something you usually do, but this isn't a normal situation.
            
            Inside the bag is a key, and a book. You've never seen flowers used as a bookmark before.

            You slip the key into your pocket. 

            You feel weird about looking in someone else's things. You put the book back quickly and keep walking. 
            `
            ,
            question: `Continue?`,
            images: ['book_flowers.jpg'],
            solutions: ['yes'],
            feedback: '"Yes" to continue',
            // hint: '',
            next: {
                yes: 8,
            },
            canGoBack: true
        },

        {
            id: 8,
            text: `
            More weird abandoned junk, and more hemlocks.  
            `
            ,
            question: `Continue?`,
            images: ['petrol_pump.jpg', 'abandoned_bike.jpg'],
            solutions: ['yes'],
            feedback: '"Yes" to continue',
            // hint: '',
            next: {
                yes: 9,
            },
            canGoBack: true
        },

        {
            id: 9,
            text: `
            There's a wall with an opening ahead. There's another gate here but this one seems to have been used more recently. It's locked but there is a keypad for entering a code.    
            `
            ,
            question: `What is the code?`,
            images: ['wall_and_gate.jpg'],
            solutions: ['130'],
            feedback: 'Enter a 3-digit number',
            hint: 'Try looking in the rucksack again?',
            next: {
                "130": 10,
            },
            canGoBack: true
        },
       
        {
            id: 10,
            text: `
            The gate opens. You would have thought this was the way out, but it doesn't feel like it.    

            Even though the gates were used quite recently, you've still disturbed some local wildlife. This one looks like it's calculating to bite you. 
            `
            ,
            question: `What is this creature?`,
            images: ['adder.jpg'],
            solutions: ['adder'],
            feedback: '',
            hint: 'Obviously it\'s a snake. What type?',
            next: {
                "adder": 11,
            },
            canGoBack: true
        },

        {
            id: 11,
            text: `
                You give the snake plenty of space, and continue through the gate. 
                There's a path to follow, and you arrive at at tunnel. There must have been train tracks here, many years ago.

                The walls of the tunnel have graffiti, and names scratched into the smoke marks on the stone . Some are hard to read, but you can make out Rachel's name. 

                There are two words where you can read the start, and the middle letters, but it's hard to tell exactly how many letters are missing.

                "Cl~~~~~"
                "~~~~~as" 

                On the other side of the tunnel, the old railway tracks lead right. There's a path through the woods to the left. 

                To the left, you see a building.
                To the right, you see the train tracks leading to a bridge over some water.
            `
            ,
            question: `Which way?`,
            images: ['tunnel.jpg'],
            solutions: ['left', 'right'],
            feedback: 'Enter "Left" or "Right".',
            next: {
                "right": 30,
                "left": 12,
            },
            canGoBack: true
        },

        {
            id: 12,
            text: `
            You wouldn't take a train over this bridge but it seems sturdy enough to walk on. Underfoot, each sleeper has a word written on it.
            
            Amanita
            Boletus
            Claviceps
            Entoloma
            Hypholoma
            Lactarius
            Lepiota
            Omphalotus            
            Tricholoma
            Trogia

            The next sleepers are missing. The gap is too big to cross. You had better turn back. 

            `
            ,
            question: `Turn back?`,
            images: ['bridge_daylight.jpg'],
            solutions: ['yes'],
            feedback: 'Type yes to continue',
            next: {
                yes: 11
            },
            canGoBack: true
        },

        // House


        {
            id: 30,
            text: `After walking a short way, you come to the building. No-one has lived here for years. There's another wall with a locked gate here too.
            
            You walk into the building. Once, it was a stately home, but now the plants are taking it over. As you walk through the house, some of the inner rooms are still very grand, although very dusty. You decide to try and find the key for the locked gate outside. Perhaps it's hidden under something?`,

            question: `Where will you look for the gate key?`,
            images: ['inside_ruined_building.jpg','inside_building.jpg', 'wood_floor_room.jpg', 'abandoned_fancy_room.jpg'],
            solutions: ['tablecloth', 'table cloth'],
            feedback: 'Type the name of the item you will look under',
            next: {
                tablecloth: 31,
                'table cloth': 31
            },
            hint: 'Use the words on the bridge',
            canGoBack: true
        },


        {
            id: 31,
            text: `The gate unlocks.  Beyond it there is a lot of ragweed and belladonna, and more junk here, including a stack of worn suitcases. You remember the key you took from Rachel's rucksack. Perhaps it will open a suitcase?`,
            question: `Which suitcase will you try?`,
            images: ['suitcases.jpg'],
            solutions: ['top', 'middle', 'bottom'],
            feedback: '"Top", "Middle" or "Bottom" suitcase?',
            next: {
                top: 33,
                middle: 34,
                bottom: 32
            },
            
            canGoBack: true
        },

        {
            id: 32,
            text: `Inside the suitcase is TODO`,   /** petrol pump/bike clue */
            images: ['suitcases.jpg'],
            solutions: [''],
            feedback: '',
            next: {
                cliff: 40
            },
            canGoBack: true
        },

        {
            id: 33,
            text: `You open the top suitcase. There is a wide-mouthed frog inside.
            "This is my house!" said the frog. "Guess who gave me this suitcase!" 
            You have no idea. You suppose it's someone who used to live in the house. "Can you give me a clue?" You ask the frog.
            "What do you call a man with a seagull on his head?" asks the frog.`,
            images: ['top_frog.jpg'],
            solutions: ['cliff'],
            feedback: 'Who owns this suitcase?',
            next: {
                cliff: 35
            },
            canGoBack: true
        },

        {
            id: 34,
            text: `You open the middle suitcase. There is a wide-mouthed frog inside.
            "This is my house!" said the frog. "Guess who gave me this suitcase!" 
            You have no idea. You suppose it's someone who used to live in the house. "Can you give me a clue?" You ask the frog.
            "What do you call a man without a spade on his head?" asks the frog.`,

            images: ['middle_frog.jpg'],
            solutions: ['douglas'],
            feedback: 'Who owns this suitcase?',
            next: {
                douglas: 36
            },
            canGoBack: true
        },

        {
            id: 35,
            text: `The frog is impressed by your knowlege. It tells you that the way out is close by, but you need to go through two more locked gates to get out.`,
            images: ['top_frog.jpg'],
            question: 'Do you want to try another suitcase?',
            solutions: ['yes'],
            feedback: 'Type "yes" to try another suitcase',
            next: {
                yes: 31
            },
            canGoBack: true
        },

        {
            id: 36,
            text: `The frog is impressed by your knowlege. It tells you that `,  /** ???  */
            images: ['middle_frog.jpg'],
            question: 'Do you want to try another suitcase?',
            solutions: ['yes'],
            feedback: 'Type "yes" to try another suitcase',
            next: {
                yes: 31
            },
            canGoBack: true
        },


    

        {
            id: 40,
            text: `You find yourself at another locked gate. This one is overgrown with plants and flowers too, but you can see it has a key code lock`,
            question: `What is the combination?`,
            images: ['flowers/bloodroot.jpg', 'flowers/foxglove.jpg', 'flowers/anenome.jpg', 'flowers/nightshade.jpg'],
            solutions: ['9165'],
            feedback: "It's a 4-digit code.",
            next: {
                '9165': 41
            },
            hint: 'Each flower will give you a number',
            canGoBack: true
        },

        {
            id: 41,
            text: `Behind the gate is a walled garden, with a second gate on the other side. Depsite being so overgrown, it is quite pretty, and has statues, a sundial, and Rachel is here. "What time is it?", she asks you.`,
            question: `What time is it?`,
            images: ['plant_pot.jpg', 'sundial.jpg'],
            solutions: ['5'],
            feedback: 'Enter the time in 12-hour format to the nearest hour, for example "1" or "2"',
            next: {
                '5': 42
            },
            hint: 'at the start of the game, did you notice how you were told what time it was?',
            canGoBack: true
        },


        {
            id: 42,
            text: `Rachel thanks you. She points at the door and tells you that you should leave now, and that this is the way out.`,
            question: ``,
            images: ['black_door_padlock'],
            solutions: ['Rachel\'s rucksack', 'rucksack'],
            feedback: "Type the name of the place you got the key",
            next: {
                'end': 'end'
            },
            canGoBack: true
        },

        // abandoned petrol pump and bike 


    ],
    end: {
        text: `You have survived the poison garden. Don't eat the bluebells.`,
        images: ['bluebells_sunshine_game_end.jpg'],
    }

}