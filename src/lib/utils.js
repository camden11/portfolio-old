export const arrayEquals = (a, b) => {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export class TypeIndexTracker {
  constructor(options) {
    const { tracker, index } = options || {};
    if (tracker) {
      this.count = tracker.count;
    } else if (index) {
      this.count = index;
    } else {
      this.count = 0;
    }
  }

  index() {
    return this.count++;
  }
}

export const getNamePath = () => {
  if (window.innerWidth > 812) {
    return 'Camden Phalen';
  }
  return 'CP';
};
