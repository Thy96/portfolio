import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";

const styles = {
    tabs: {
        background: "#fff",
    },
    slide: {
        padding: 15,
        minHeight: 100,
        color: "#fff",
    },
    slide1: {
        backgroundColor: "#FEA900",
    },
    slide2: {
        backgroundColor: "#B3DC4A",
    },
    slide3: {
        backgroundColor: "#6AC0FF",
    },
};

const TabsAnimation = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, value) => {
        setValue(value);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        
        <div>
            <Tabs
                value={value}
                fullWidth
                onChange={handleChange}
                style={styles.tabs}
            >
                <Tab label="tab n°1" />
                <Tab label="tab n°2" />
                <Tab label="tab n°3" />
            </Tabs>
            <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
                <div style={Object.assign({}, styles.slide, styles.slide1)}>
                    slide n°1
                </div>
                <div style={Object.assign({}, styles.slide, styles.slide2)}>
                    slide n°2
                </div>
                <div style={Object.assign({}, styles.slide, styles.slide3)}>
                    slide n°3
                </div>
            </SwipeableViews>
        </div>
    );
};

export default TabsAnimation;
