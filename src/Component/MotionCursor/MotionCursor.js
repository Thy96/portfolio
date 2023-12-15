import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const MotionCursor = ({ cursorVariant }) => {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    const variants = {
        zoomin: {
            x: mousePosition.x - 13,
            y: mousePosition.y - 13,
            background: "#18d26e",
        },
        zoomout: {
            height: 60,
            width: 60,
            x: mousePosition.x - 28,
            y: mousePosition.y - 28,
            background: "#fff",
        }
    }

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <motion.div className="cursor" variants={variants} animate={cursorVariant}></motion.div>
    );
}

export default MotionCursor;
