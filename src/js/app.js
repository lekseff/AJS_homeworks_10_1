class Team {
  constructor() {
    this.team = new Set();
  }

  add(hero) {
    if (this.team.has(hero)) {
      throw new Error(`${hero.type} ${hero.name} уже есть в команде`);
    }
    this.team.add(hero);
  }

  addAll(...heroes) {
    heroes.forEach((hero) => this.team.add(hero));
  }

  toArray() {
    return [...this.team];
  }

  [Symbol.iterator]() {
    // так
    // let current = 0;
    // const total = this.team.size;
    // const heroes = [...this.team];
    // return {
    //   next() {
    //     if (current < total) {
    //       return {
    //         done: false,
    //         value: heroes[current++]
    //       }
    //     } else {
    //       return {
    //         done: true
    //       }
    //     }
    //   }
    // }

    //или
    return this.team.values();
  }
}


const zombie = {
  name: 'Shon',
  type: 'Zombie',
  level: 2,
  health: 100,
  attack: 48,
  defence: 12,
};

const undead = {
  name: 'Fred',
  type: 'Undead',
  level: 2,
  health: 100,
  attack: 48,
  defence: 12,
};

const bowman = {
  name: 'Legolas',
  type: 'Bowman',
  level: 2,
  health: 100,
  attack: 25,
  defence: 25,
};

const myTeam = new Team();

myTeam.add(zombie);
myTeam.add(bowman);
myTeam.add(undead);

for(current of myTeam) {
  console.log(current);
}
