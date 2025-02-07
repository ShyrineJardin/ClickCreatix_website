import { SLIDE_TEXT } from '../constants';
import {motion} from 'framer-motion';

const Slide = () => {
  return (
    <div className="mt-2 w-full bg-pink text-black lg:py-6">
        <div className="flex overflow-hidden whitespace-nowrap">
            {
                [...Array(2)].map((_,i) =>(

                    <motion.h1 
                    initial={{x: '-100%'}}
                    animate={{x:0}}
                    transition={{repeat: Infinity, ease:'linear', duration:20}}
                    key={i} className="py-2 text-3xl font-oswa font-bold leading-none tracking-tighter lg:text-7xl">
                        {SLIDE_TEXT}
                    </motion.h1>
                ))
            }
        </div>
    </div>
  )
}

export default Slide