"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import Image from "next/image";
import { motion } from "framer-motion";

import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { IconCode } from "@tabler/icons-react";

const Exist: React.FC = () => {
  const word = `Exist`;

  return (
    <div className="pb-8 px-4">
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center space-x-1">
          {/* <IconCode className="h-7 w-7" /> */}
          <TextGenerateEffect className="font-normal" words={word} />
        </div>

        {/* 36x33 Grid of Circle Nodes */}
      </div>
    </div>
  );
};

export default Exist;
