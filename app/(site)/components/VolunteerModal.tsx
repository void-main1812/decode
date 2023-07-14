"use client";

import Button from "@/app/components/Button";
import React, { useState } from "react";
import { motion } from "framer-motion";

const VolunteerModal = () => {
  const [show, setShow] = useState(true);

  return (
    show && (
      <motion.div
        initial={{ x: "120%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.5, delay: 2 }}
        exit={{ x: "120%" }}
        className="z-50 fixed flex-col flex gap-4 justify-between items-center top-0 right-0 m-4 px-8 py-3 backdrop-blur-md bg-gradient-to-br from-gray-100/20 to-gray-100/10 border-[1px] border-gray-200/10 rounded-lg "
      >
        <span className="text-lg text-white font-semibold">
          We Need some Volunteers
        </span>
        <div className="flex gap-4 justify-between items-center">
          <a href="#volunteer">
            <Button height={"10"} onClick={() => setShow(false)}>
              Apply Now
            </Button>
          </a>
          <Button height={"10"} onClick={() => setShow(false)} ghost>
            Not Interested
          </Button>
        </div>
      </motion.div>
    )
  );
};

export default VolunteerModal;
