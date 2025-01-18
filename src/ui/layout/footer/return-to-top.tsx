"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const ReturnToTop = () => {
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="outline"
      className="text-muted-foreground relative pr-7"
      onClick={scrollToTopHandler}
    >
      Return Top Top
      <ChevronUp className="absolute right-1.5" />
    </Button>
  );
};

export default ReturnToTop;
