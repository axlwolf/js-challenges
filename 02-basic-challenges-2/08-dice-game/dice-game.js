const diceGameSimulation = (numSimulations)=> {
    const simulations = []
    let simulation = { dice1: 0, dice2: 0, sum: 0, result: '' };

    for (let i = 0; i < numSimulations; i++) {
        let result = "";
        const dice1 = Math.ceil(Math.random() * 6);
        const dice2 = Math.ceil(Math.random() * 6);
        const sum = dice1 + dice2;
       if (sum === 7 || sum === 11) {
        result = 'win';
      } else if (sum === 2 || sum === 3 || sum === 12) {
        result = 'lose';
      } else {
        result = 'roll again';
      }
      simulation = {dice1, dice2, sum, result};
      simulations.push(simulation);
    }
    return simulations;
};

export default diceGameSimulation;
