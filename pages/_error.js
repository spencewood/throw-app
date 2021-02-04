function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}
Error.getInitialProps = ({ res, err }) => {
  res.statusCode = 404;
  return { statusCode: 404 };
};
export default Error;
