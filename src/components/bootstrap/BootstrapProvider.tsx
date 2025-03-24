"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BootstrapProvider() {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min")
  }, []);

  return null;
}