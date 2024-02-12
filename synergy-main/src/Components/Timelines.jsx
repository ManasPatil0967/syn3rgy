import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import schedule from './data/timelineData'
import "./styles/timeline.css"


const TimelineSection = ({ desc, time, index }) => {
    const { ref, inView } = useInView();

    return (
        <div className={index % 2 === 0 ? "left_section" : "right_section"}>
            {
                index % 2 !== 0 && (
                    <div style={{ marginRight: "10px" }} className="other">
                        {time} --------
                    </div>)
            }
            <div ref={ref} id={index === 14 && "last_block"} className={index % 2 === 0 ? "inner_section_left" : "inner_section_right"}>
                <motion.div
                    animate={inView ? { x: 0 } : { x: index % 2 === 0 ? "-100px" : "100px" }}
                    transition={{ duration: 1.5 }}
                >
                    <span>
                        {
                            (index <= 14) && (
                                <div className="long_block"></div>
                            )
                        }
                        {desc}
                    </span>
                </motion.div>
            </div>
            {
                index % 2 === 0 && (
                    <div className="other">
                        -------- {time}
                    </div>)
            }
        </div >
    );
};

const Timelines = () => {
    const { ref, inView } = useInView();
    const divRef = useRef(null);
    return (
        <>
            <div className="main_text">
                <div className="md:px-36 px-4 text-center text-white text-base md:text-xl">
                    <p>Scheduled for February 25th and 26th, 2024, it is set to be an enriching experience for all involved. Participants can expect not only to compete but also to collaborate, learn, and make meaningful contributions to the advancement of crucial fields.</p>
                </div>
            </div>

            <div className="main_sections">
                {schedule.map((item, index) => (
                    <div className="sections" key={index}>
                        <div className={index % 2 === 0 ? "sections_left" : "sections_right"}>
                            <TimelineSection desc={item.desc} time={item.time} index={index} />
                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}

export default Timelines