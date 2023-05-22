import { FC, useRef } from 'react';
import { bubbles } from '../../constants/bubbles';

import Bubble from '../Bubble';

import s from './scss/bubbles.module.scss';
import { useBubbles } from './typescript/bubbles.hooks';

const Bubbles: FC<{ collabs?: boolean }> = ({ collabs }) => {
  const reference = useRef<HTMLDivElement>(null);

  useBubbles({ reference });

  return (
    <div
      ref={reference}
      className={`${s['bubbles-wrapper']} ${
        collabs ? s['bubbles-wrapper--collabs'] : null
      } `}
    >
      {bubbles.map((bubble, index) => (
        <Bubble
          key={bubble.key}
          className={`${bubble.className} ${
            index < 3 ? s['bubble--animated'] : ''
          }`}
          bubble={bubble.bubble}
        />
      ))}
    </div>
  );
};

export default Bubbles;
