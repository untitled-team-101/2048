"use strict";
import React from "react";
import Cell from "./Cell";
import { motion } from "framer-motion";
import "../style/board.scss";

function Board({}) {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100%",
    },
  };
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <div className={"board"}>
        {[...Array(4 * 4)].map((n, i) => {
          return <Cell key={i} index={i} />;
        })}
      </div>
    </motion.div>
  );
}

export default Board;
