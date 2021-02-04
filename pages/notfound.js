import React from "react";

export default function Problem() {
  return (
    <>
      <h1>404!</h1>
    </>
  );
}

const pTimeout = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

export const getStaticProps = async () => {
  await pTimeout();
  console.log({ level: "error", message: new Error("NotFound") });
  return {
    notFound: true,
  };
};
