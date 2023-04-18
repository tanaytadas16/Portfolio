import React from "react";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { stevens } from "../assets";

const EducationCard = ({ eachEducation }) => (
    <VerticalTimelineElement
        contentStyle={{
            background: eachEducation.icon == stevens ? "#a32639" : "#1d1836",
            color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={eachEducation.date}
        iconStyle={{ background: eachEducation.iconBg }}
        icon={
            <div className="flex items-center justify-center w-full h-full">
                <img
                    src={eachEducation.icon}
                    alt={eachEducation.university}
                    className="w-[90%] h-[90%] object-contain rounded-full"
                />
            </div>
        }
    >
        {/* title */}
        <h3 className="text-white text-[24px] font-bold">
            {eachEducation.university}
        </h3>
        {/* location */}
        <p
            className="text-secondary text-[16px] font-semibold "
            style={{ margin: 0 }}
        >
            {eachEducation.location}
        </p>
        {/* degree */}
        <p
            className=" pt-3 text-white italic text-[16px] font-semibold "
            style={{ margin: 0 }}
        >
            {eachEducation.degree}
        </p>
        {/* bullet points */}
        <ul className="mt-5 list-disc ml-5 space-y-1">
            {eachEducation.points.map((point, index) => (
                <li
                    key={`education-point-${index}`}
                    className="text-white text-[14px] pl-1 tracking-wider"
                >
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
);
const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Where did i study</p>
                <h2 className={styles.sectionHeadText}>Education.</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {education.map((eachEducation, index) => (
                        <EducationCard
                            key={index}
                            eachEducation={eachEducation}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Education, "");
