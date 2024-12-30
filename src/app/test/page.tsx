'use server'
import Link from 'next/link';
import type { Metadata } from "next";

export const getMetadata = async (): Promise<Metadata> => {
  return {
  title: "Test",
  description: "Test page",
  }
}

export default async function page() {
  return (
    <>
      <Link href={`/`}>home</Link>
    </>
  )
}
