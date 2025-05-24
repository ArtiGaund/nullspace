
"use client";;
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

const Input = React.forwardRef(({ className, type, icon , ...props }, ref) => {
  const radius = 100; // change this to increase the rdaius of the hover effect
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.div
      style={{
        background: useMotionTemplate`
      radial-gradient(
        ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
        #3b82f6,
        transparent 80%
      )
    `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/input rounded-lg p-[2px] transition duration-300">
        <div className="items-center gap-2  bg-gray-50 px-3 py-2 dark:bg-zinc-900 shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none  text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400  focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040]">
          {icon && (
            <span className="text-gray-500 dark:text-gray-400">{icon}</span>
          )}
          <input
            type={type}
            className={cn(
              `flex-1 bg-transparent border-none outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600`,
              className
            )}
            ref={ref}
            {...props} />
        </div>
    </motion.div>
  );
});
Input.displayName = "Input";

export { Input };
