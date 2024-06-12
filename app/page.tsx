import type { Metadata } from "next";
import Form from "./components/form/form";

export default function IndexPage() {
  return <Form />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
