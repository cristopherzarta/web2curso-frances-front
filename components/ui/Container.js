
export const Container = ({ children }) => {
  return (
    <>
    <div className="df aic jcsb w100p main-container">{children}</div>
    <style jsx>{`
        .main-container {
          max-width: 70vw;
          margin: 0 auto;
        }
        @media screen (max-width: 800px) {
          .main-container {
            max-width: 100vw;
          }
        }
      `}</style>
    </>
  )
}
