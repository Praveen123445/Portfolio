"use client"

import { motion } from "framer-motion"

export const Contact = () => {
    return (
        <section id="contact" className="overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16"
            >
                <div className="space-y-12">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity : 1, x: 0}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-7xl font-bold text-gray-300"
                    >
                        Get in <span className="text-purple-500">touch</span>
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity : 1, x: 0}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="glass p-8 rounded-2xl space-y-8"
                    >
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Phone</p>
                            <a 
                              href="tel:+919999999999"
                              className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
                            >
                                +91 (9999)(999)(999)
                                <span className="text-gray-500">↗</span>
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Email</p>
                            <a 
                              href="mailto:PVCode@gmail.com"
                              className="text-3xl lg:text-4xl font-semibold hover:text-gray-400 transition duration-300 flex items-center"
                            >
                                pvcode@gamil.com
                                <span className="text-gray-500">↗</span>
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Office</p>
                            <address className="text-xl not-italic leading-relaxed">
                                Rampur 434,<br />Nashik<br />India</address>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity : 1, x: 0}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
                >
                    <iframe
                      src="https://www.google.com/maps/place/Municipal+Corporation+play+Groundand+jogging+track/@19.9859257,73.7792856,18.67z/data=!4m15!1m8!3m7!1s0x3bddd290b09914b3:0xcb07845d9d28215c!2sNashik,+Maharashtra!3b1!8m2!3d19.9974533!4d73.7898023!16zL20vMDM3dmtr!3m5!1s0x3bddeb110f4e4c2d:0xdcc7a3c80516b723!8m2!3d19.9854309!4d73.7793215!16s%2Fg%2F1q665hwvn?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
                      width="100%"
                      height="100%"
                      style={{border:0}}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                </motion.div>
            </motion.div>
        </section>
    )
}