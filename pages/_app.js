import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-primary-font'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
