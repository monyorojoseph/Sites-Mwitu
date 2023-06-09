import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from 'react-toastify'
import { SitesContextProvider } from '@/hooks/contexts/sitesContext';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session} refetchInterval={600 * 60} refetchOnWindowFocus={false}>
      <>
        <SitesContextProvider>     
          <Component {...pageProps} />
        </SitesContextProvider>
        <ToastContainer 
        
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
        />
      </>

    </SessionProvider>)
}
