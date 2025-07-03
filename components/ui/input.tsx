import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "text-xl focus-visible:outline-0 border-main-50 border h-14.5 px-5 rounded-sm text-main-50 placeholder:text-xl placeholder:text-text-main-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
