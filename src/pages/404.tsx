import React from "react";
import { MainLayout } from "@layout";
import Link from "next/link";
import Head from "next/head";
import { Four04Image } from "@components/Four04Image";

export default function Four04Page() {
  return (
    <>
      <Head>
        <title>404 Not Found - Kishan </title>
      </Head>
      <MainLayout>
        <div className="flex flex-col">
          <Four04Image />
          <Link href="/" className="mx-auto" passHref replace={true}>
            Go Home
          </Link>
        </div>
      </MainLayout>
    </>
  );
}
