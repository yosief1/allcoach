// training-engine.js
function buildTrainingPlan(goal, duration, location) {
  const base = {
    title: goal || 'Neues Training',
    type: 'Technik',
    goal,
    duration: Number(duration) || 35,
    location: location || 'Trainingszentrum',
    exercises: [
      'Warm-up: 4 Min. Ballkontakte',
      'Übung 1: 2 x 6 Flanken',
      'Übung 2: 3 x 5 Flanken im Lauf',
      'Übung 3: 1v1 mit Nachspiel'
    ]
  };

  return base;
}
