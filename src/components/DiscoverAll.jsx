
import React, { useState, useEffect } from 'react';
import { FaChartLine, FaCogs, FaBullseye, FaRocket } from "react-icons/fa";
import { FaArrowRightLong } from 'react-icons/fa6';
const DiscoverAll = () => {

const [projects, setProjects] = useState([]);


    useEffect(() => {
        
    
        fetch("http://localhost:5000/projects")
          .then((res) => res.json())
          .then((data) => setProjects(data));
      }, []);
    
    return (
        <div>
            <h1>
                Discover all 
            </h1>
        </div>

    );
};

export default DiscoverAll;
