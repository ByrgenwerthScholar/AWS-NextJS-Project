import React from "react";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";

Amplify.configure({ ...awsconfig, ssr: true });

export default function DashboardLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}
