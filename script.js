const fortunes = {
    intro: ['Hello Darling, ', 'Welcome, ', 'Nice to see you here, '],
    middle: ['You are a brave soul. ', 'You are a curious person. ', 'I see that you want to make some changes. '],
    end: ['Do not worry the future looks bright.', 'You are about to go through a drastic transition.', 'Look back to your past for the asnwers you are looking for.']
};

const randomFortune = (fortunes.intro, fortunes.middle, fortunes.end) => `${Math.random(fortunes.intro)}+${Math.random(fortunes.middle)}+${Math.random(fortunes.end)}`;

console.log(randomFortune);
