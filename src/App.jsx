import {useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import images from './Image'


function App() {
  const [width, setWidth] = useState(0);
  const slider = useRef();
  useEffect(() => {
    console.log(slider.current.scrollWidth)
    setWidth(slider.current.scrollWidth-slider.current.offsetWidth) 
  },[])

  return (
		<>
      <motion.div ref={slider} className="slider" whileTap={{ cursor: "grabbing" }}>
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className="inner-slider">
					<motion.div className="image">
						{images.map((image) => {
							return (
								<motion.div key={image} className="item">
									<img src={image} alt="" />
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
}

export default App
