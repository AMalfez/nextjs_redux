import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";
interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section style={{width:"100vw"}}>
            <Nav />
            <main>{children}</main>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
