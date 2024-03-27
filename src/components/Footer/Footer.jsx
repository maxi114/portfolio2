import React from 'react'
import css from './Footer.module.scss'
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren } from '../../utils/motion'

const Footer = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>

            <motion.div
                variants={footerVariants}
                className={`innerWidth yPaddings flexCenter ${css.container}`}>
                <div className={css.left}>
                    <span className='primaryText'>
                        Let's make something <br /> amazing together.
                    </span>

                    <span className='primaryText'>
                        Start by <a href="https://calendly.com/maxkodi081/free-consultation" target='_blank' >booking a consultation</a>
                    </span>
                </div>
                <div className={css.right}>

                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>maxkodi081@gmail.com</p>
                    </div>

                    <div className={css.menu}>
                        <li><a href="#experties">Services</a></li>
                        <li><a  href="#portfolio">Portfolio</a></li>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Footer