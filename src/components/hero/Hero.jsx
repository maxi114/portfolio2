import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion';
import { slideIn, fadeIn, staggerContainer } from '../../utils/motion';
const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`innerWidth ${css.container}`}>

                {/* upper elemenst */}
                <div className={css.upperElements}>
                    <motion.span
                        variants={fadeIn("right", "tween", 0.2, 1)}
                        className='primaryText'>Hey There, <br /> I'm Max. </motion.span>

                    <motion.span
                        variants={fadeIn("left", "tween", 0.2, 1)}
                        className='secondaryText'> I Empower Brokers and Agents with <br /> Custom IDX websites.</motion.span>
                </div>

                {/*person image*/}
                <motion.div
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    className={css.person}>
                    <motion.img
                        variants={slideIn("up", "tween", 0.5, 1.3)}
                        src="./person.png" alt="" />

                </motion.div>

                {/*email*/}


                {/*lower elements*/}
                <div className={css.lowerElements}>
                    {/*<motion.div 
                    variants={fadeIn("right", "tween", 0.3, 1)}
                    className={css.experience}>
                        <div className='primaryText'>5</div>
                        <div className='secondaryText'>
                            <div>Years</div>
                            <div>Experience</div>
                        </div>
                    </motion.div>*/}

                    <motion.div
                        variants={fadeIn("left", "tween", 0.5, 1)}
                        className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>CERTIFIED PROFETIONAL</span>
                        <span>WEB DEVELOPER</span>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("right", "tween", 0.3, 1)}
                        className={css.experience}>
                        <div className='secondaryText'>
                            <a href="https://calendly.com/maxkodi081/free-consultation" target='_blank'
                            className={css.email} >Get Started</a>
                        </div>
                    </motion.div>


                </div>
            </motion.div>
        </section>
    )
}

export default Hero