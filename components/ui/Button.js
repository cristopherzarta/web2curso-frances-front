const Button = ({ text, color, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{text} </button>
      <style jsx>{`
            button {
        padding: 0.5rem;
        background-color: var(--${color});
        border: none;
        border radius: 0.3rem;
        cursor: pointer;
      }

      button:hover {
        
       background-color: var(--${color}Dark);
      }
      
      `}</style>
    </>
  );
};

export default Button;
