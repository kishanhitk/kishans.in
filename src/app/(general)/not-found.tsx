import React from "react";
import Link from "next/link";
import { Four04Image } from "@components/Four04Image";

export default function Four04Page() {
  return (
    <div className="flex flex-col">
      <Four04Image />
      <Link href="/" className="mx-auto" passHref replace={true}>
        Go Home
      </Link>
    </div>
  );
}
