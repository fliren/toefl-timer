import React from 'react';

export const timeSettings = {
  1: {
    time: 45,
    phases: [
      { start: 45, end: 35, text: 'restate the question' },
      { start: 34, end: 20, text: 'first example' },
      { start: 19, end: 5, text: 'second example' },
      { start: 4, end: 0, text: 'conclusion' },
    ],
  },
  2: {
    time: 60,
    phases: [
      { start: 60, end: 45, text: 'introduce the reading' },
      { start: 44, end: 25, text: 'first conversation example' },
      { start: 24, end: 5, text: 'second example' },
      { start: 4, end: 0, text: 'conclusion' },
    ],
  },
  3: {
    time: 60,
    phases: [
      { start: 60, end: 45, text: 'intro topic' },
      { start: 44, end: 24, text: 'first example' },
      { start: 23, end: 3, text: 'second example' },
      { start: 2, end: 0, text: 'conclusion' },
    ],
  },
  4: {
    time: 60,
    phases: [
      { start: 60, end: 48, text: 'introduce the topic' },
      { start: 47, end: 27, text: 'first example' },
      { start: 26, end: 6, text: 'second example' },
      { start: 5, end: 0, text: 'conclusion' },
    ],
  },
};

const Hint = ({ time, settings }) => {
  let hint = '';

  if (settings) {
    for (const phase of settings.phases) {
      if (time >= phase.end && time <= phase.start) {
        hint = phase.text;
        break;
      }
    }
  }

  return <div className="hint">{hint}</div>;
};

export default Hint;
