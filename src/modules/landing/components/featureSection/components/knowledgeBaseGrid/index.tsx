"use client";


import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { DocumentText1, Global, SearchNormal1, Text } from "iconsax-react";

const KnowledgeBaseGrid = () => {
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: true });

  const animController = useAnimation();

  useEffect(() => {
    if (isInView) {
      animController.start("visible");
    }
  }, [isInView]);
  return (
    <div className="grid grid-cols-2 gap-4 py-20 w-[80%]" ref={mainRef}>
      <motion.div 
              variants={{
                hidden: {opacity:0 , x:"+20%"},
                visible: {opacity:1 , x:0}
              }}
              initial="hidden"
              animate={animController}
              transition={{duration: 1}}
      className="flex p-2 justify-between items-center border border-gray-300 rounded-md">
        <div>
          <h3>افزودن وبسایت</h3>
          <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
        </div>
        <div
          style={{
            background: "rgba(58, 96, 221, .1)",
          }}
          className="flex justify-center items-center w-[50px] h-[50px] border border-gray-300 rounded-md"
        >
          <Global size="32" color="rgba(58, 96, 221, 1)" variant="Outline" />
        </div>
      </motion.div>
      <motion.div 
                    variants={{
                      hidden: {opacity:0 , x:"-20%"},
                      visible: {opacity:1 , x:0}
                    }}
                    initial="hidden"
                    animate={animController}
                    transition={{duration: 1}}
      className="flex p-2 justify-between items-center border border-gray-300 rounded-md">
        <div>
          <h3>افزودن وبسایت</h3>
          <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
        </div>
        <div
          style={{
            background: "rgba(255, 199, 67, .1)",
          }}
          className="flex justify-center items-center w-[50px] h-[50px] border border-gray-300 rounded-md"
        >
          <DocumentText1
            size="32"
            color="rgba(255, 199, 67, 1)"
            variant="Outline"
          />
        </div>
      </motion.div>
      <motion.div 
                          variants={{
                            hidden: {opacity:0 , x:"+20%"},
                            visible: {opacity:1 , x:0}
                          }}
                          initial="hidden"
                          animate={animController}
                          transition={{duration: 1 , delay: .4}}
      className="flex p-2 justify-between items-center border border-gray-300 rounded-md">
        <div>
          <h3>افزودن وبسایت</h3>
          <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
        </div>
        <div
          style={{
            background: "rgba(37, 158, 99, 0.1)",
          }}
          className="flex justify-center items-center w-[50px] h-[50px] border border-gray-300 rounded-md"
        >
          <SearchNormal1
            size="32"
            color="rgba(37, 158, 99, 1)"
            variant="Outline"
          />
        </div>
      </motion.div>
      <motion.div 
                          variants={{
                            hidden: {opacity:0 , x:"-20%"},
                            visible: {opacity:1 , x:0}
                          }}
                          initial="hidden"
                          animate={animController}
                          transition={{duration: 1  , delay: .4}}
      className="flex p-2 justify-between items-center border border-gray-300 rounded-md">
        <div>
          <h3>افزودن وبسایت</h3>
          <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
        </div>
        <div
          style={{
            background: "rgba(136, 70, 195, 0.1)",
          }}
          className="flex justify-center items-center w-[50px] h-[50px] border border-gray-300 rounded-md"
        >
          <Text size="32" color="rgba(136, 70, 195, 1)" variant="Outline" />
        </div>
      </motion.div>
      <motion.div 
                          variants={{
                            hidden: {opacity:0 , x:"+20%"},
                            visible: {opacity:1 , x:0}
                          }}
                          initial="hidden"
                          animate={animController}
                          transition={{duration: 1 , delay: .8}}
      className="flex p-2 justify-between items-center border border-gray-300 rounded-md">
        <div>
          <h3>افزودن وبسایت</h3>
          <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
        </div>
        <div
          style={{
            background: "rgba(136, 70, 195, 0.1)",
          }}
          className="flex justify-center items-center w-[50px] h-[50px] border border-gray-300 rounded-md"
        >
          <Text size="32" color="rgba(136, 70, 195, 1)" variant="Outline" />
        </div>
      </motion.div>
      <motion.div 
                          variants={{
                            hidden: {opacity:0 , x:"-20%"},
                            visible: {opacity:1 , x:0}
                          }}
                          initial="hidden"
                          animate={animController}
                          transition={{duration: 1 , delay: .8}}
      className="flex p-2 justify-between items-center border border-gray-300 rounded-md">
        <div>
          <h3>افزودن وبسایت</h3>
          <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
        </div>
        <div
          style={{
            background: "rgba(136, 70, 195, 0.1)",
          }}
          className="flex justify-center items-center w-[50px] h-[50px] border border-gray-300 rounded-md"
        >
          <Text size="32" color="rgba(136, 70, 195, 1)" variant="Outline" />
        </div>
      </motion.div>
    </div>
  );
};

export default KnowledgeBaseGrid;
