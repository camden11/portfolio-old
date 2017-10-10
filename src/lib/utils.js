export const arrayEquals = (a, b) => {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export class TypeIndexTracker {
  constructor(tracker) {
    this.count = tracker ? tracker.count : 0;
  }

  index() {
    return this.count++;
  }
}
