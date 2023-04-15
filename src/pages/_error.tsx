const ErrorPage = ({ statusCode }) => (
  <div>
    <h1>{statusCode} - Error</h1>
    <p>Sorry, an error occurred.</p>
  </div>
);

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
