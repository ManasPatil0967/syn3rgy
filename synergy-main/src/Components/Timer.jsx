import { useState, useEffect, useRef } from 'react'

import './timer.css'

/* Confetti component */
import { useWindowSize } from 'react-use';
import ReactConfetti from 'react-confetti';
const Confetti = () => {
    const { width, height } = useWindowSize()

    return (
        <ReactConfetti
            width={width}
            height={height}
        />
    )
}
/**/

const Timer = () => {
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [timerEnded, setTimerEnded] = useState(false);

    const savedCallback = useRef();

    const eventDateTime = new Date('February 25, 2024 11:00:00').getTime();

    const calculateTimeRemaining = () => {
        const currentTime = new Date().getTime();
        const timeDiff = eventDateTime - currentTime;

        if (timeDiff <= 0) {
            clearInterval(savedCallback.current);
            setTimerEnded(true);

            return;
        }

        const remainingSeconds = Math.floor(timeDiff / 1000);

        setTimeRemaining({
            days: Math.floor(remainingSeconds / (24 * 3600)),
            hours: Math.floor((remainingSeconds % (24 * 3600)) / 3600),
            minutes: Math.floor((remainingSeconds % 3600) / 60),
            seconds: remainingSeconds % 60
        });
    };

    useEffect(() => {
        savedCallback.current = calculateTimeRemaining;
    }, []);

    useEffect(() => {
        calculateTimeRemaining(); // Initial calculation

        const intervalId = setInterval(() => {
            savedCallback.current();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='syn-timer-wrapper'>
            {timerEnded ? <Confetti /> : null}
            <div className="syn-timer-box">
                <div className={`syn-timer${timerEnded ? " syn-rotate" : ""}`}>
                    <div className='syn-timer-front'>
                        <div>
                            <span>{String(timeRemaining.days).padStart(2, '0')}</span>
                            <h2>DAYS</h2>
                        </div>
                        <p className='syn-colon'>:</p>
                        <div>
                            <span>{String(timeRemaining.hours).padStart(2, '0')}</span>
                            <h2>HOURS</h2>
                        </div>
                        <p className='syn-colon'>:</p>
                        <div>
                            <span>{String(timeRemaining.minutes).padStart(2, '0')}</span>
                            <h2>MINS</h2>
                        </div>
                        <p className='syn-colon'>:</p>
                        <div>
                            <span>{String(timeRemaining.seconds).padStart(2, '0')}</span>
                            <h2>SECS</h2>
                        </div>
                    </div>
                    <div className="syn-timer-back">
                        <h2>{
                            timerEnded ?
                            <>
                                Coding round has ended! <br />
                            </>
                            :'All The Best!'
                        }
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer
