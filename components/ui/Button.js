const Button = ({ mt, color, onClick, children }) => {
  return (
    <>
      <button onClick={onClick} >{children} </button>
      <style jsx>{`
        button {
          padding: 0.5rem;
          background-color: var(--${color});
          border: none;
          border-radius: 0.3rem;
          cursor: pointer;
          color: white;
          margin-top: ${mt};
        }

        button:hover {
          background-color: var(--${color}Dark);
        }
      `}</style>
    </>
  );
};

export default Button;
