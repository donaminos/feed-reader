export const Error = ({ message }) => {
  return message ? <span className="error">{message}</span> : null;
};
