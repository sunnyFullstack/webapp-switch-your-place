import React from "react";

const Toast = ({
  message,
  type = "success",
}: {
  message: string;
  type?: "success" | "error" | "warning";
}) => {
  const bgColor =
    type === "success"
      ? "bg-green"
      : type === "error"
      ? "bg-red"
      : type === "warning"
      ? "bg-orange"
      : "bg-grey";

  return (
    <div
      className={`fixed top-5 right-5 px-4 py-2 rounded text-primary shadow-lg ${bgColor}`}
    >
      {message}
    </div>
  );
};

export default Toast;
