export default {

    start: {
        text: `It\'s an early summer morning. You are going for a walk in the woods near your house with some friends. You've been there many times before.  The birds are singing. It's still cool for a summer day, and the sky is overcast.  
It's 11am, British Standard Time.`,
        image: 'dark_woods.jpg',
    },

    steps: [
        {
            id: 1,
            text: `You spot something you haven't noticed before. There are some stone columns behind some trees. You walk over, and on closer inspection, they are part of a wall. They have rusted iron gates, which look like they haven't been used in a century. `,
            question: 'Do you want to see what is on the other side?',
            image: 'stone_gates.jpg',
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
            image: 'closed_entrance_gates.jpg',
            solutions: ['left', 'right'],
            feedback: 'Type "left", or "right".',
            next: {
                left: 3,
                right: 4
            },
            canGoBack: true
        },

        {
            id: 3,
            text: `You follow the wall to the left. 
            You come to a small pond. It's fringed with water hemlock and calla. Water lilies bob on small waves in the green water. There are a number of abandoned items here, a canoe, and a bunch of beehives in the distance. Weeds plait their way over everything. You start feeling a sense of dread, locked in this place. Hopefully this is not permanent.`,
            question: `Continue?`,
            image: 'abandoned_canoe.jpg',
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
            image: 'woman_sitting_fog.jpg',
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
            image: 'ivy_tree.jpg',
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
            image: 'rucksack_hanging_tree.jpg',
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
            
            Inside the bag is a set of headphones, a key, and a book. You've never seen flowers used as a bookmark before.

            You slip the key into your pocket. 

            You feel weird about looking in someone else's things. You put the book back quickly and keep walking. 
            `
            ,
            question: `Continue?`,
            image: 'book_flowers.jpg',
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
            image: 'petrol_pump.jpg',
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
            image: 'wall_and_gate.jpg',
            solutions: ['130'],
            feedback: 'Enter a number',
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
            image: 'adder.jpg',
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
            The path loops through a tunnel.
            `
            ,
            question: ``,
            image: 'tunnel.jpg',
            solutions: ['yes'],
            feedback: '',
            // hint: 'Obviously it\'s a snake. What type?',
            next: {
                "yes": 12,
            },
            canGoBack: true
        },


        

        // House


        {
            id: 10,
            text: `You follow the wall to the right. `,
            question: `There is a another thing here`,
            image: 'tunnel.jpg',
            solutions: 'test',
            feedback: 'test',
            canGoBack: true
        },


        // combine "Rachel" and "130"


    ],
    end: {
        text: `You have survived the poison garden. Don't eat the bluebells.`,
        image: 'bluebells_sunshine_game_end.jpg',
    }

}