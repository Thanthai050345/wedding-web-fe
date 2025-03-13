"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // ทำการ redirect ไปที่ /e-invitation
    router.push("/e-invitation");
  }, [router]);

  return null;
}
