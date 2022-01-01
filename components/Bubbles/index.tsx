import { FC } from 'react';
import { bubbles } from '../../helpers/bubbleList';
import Bubble from '../Bubble';

import s from './scss/bubbles.module.scss';
import { useBubbles } from './typescript/bubbles.hooks';

const Bubbles: FC = () => {
  const [ref] = useBubbles();

  return (
    <div ref={ref} className={`${s['bubbles-wrapper']}`}>
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
