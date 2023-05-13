import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
/* import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas); */
config.autoAddCss = false;



import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null; }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export const baseUrlApiOctoPi = "http://10.13.13.2";
export const tokenApiOctoPi = "9663187C616B4F07A9C207A84C598DF5";
export default api.withTRPC(MyApp);
