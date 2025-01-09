'use client';
import { useState } from 'react';
import styles from '@/app/layoutpage/layoutpage.module.scss';

const LayoutPage = () => {
  const [positions, setPositions] = useState([0, 1, 2, 3, 4, 5]);

  const handleMoveShape = () => {
    const newPositions = positions.map((pos) => (pos + 1) % positions.length);
    setPositions(newPositions);
  };

  const handleSwapRows = () => {
    const newPositions = [...positions];
    const firstRow = newPositions.slice(0, 3);
    const secondRow = newPositions.slice(3, 6);
    setPositions([...secondRow, ...firstRow]);
  };

  const handleRandomize = () => {
    setPositions([...positions].sort(() => Math.random() - 0.5));
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <button onClick={handleMoveShape} className={styles.moveShape}>
            &#8592; &#8594;
          </button>
          <div className={styles.buttonLabel}>Move Shape</div>
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={handleSwapRows} className={styles.movePosition}>
            &#8593; &#8595;
          </button>
          <div className={styles.buttonLabel}>Move Position</div>
        </div>
      </div>

      <div className={styles.grid}>
        {positions.map((pos) => (
          <div key={pos} className={styles.shape} onClick={handleRandomize}>
            {pos === 0 && <div className={styles.ellipse} />}
            {pos === 1 && <div className={styles.roundCircle} />}
            {pos === 2 && <div className={styles.trapezoid} />}
            {pos === 3 && <div className={styles.rectangle} />}
            {pos === 4 && <div className={styles.parallelogram} />}
            {pos === 5 && <div className={styles.rhombus} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutPage;
