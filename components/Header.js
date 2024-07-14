import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div
      className="df aic jcsb w100p p5 "
      style={{
        backgroundColor: "var(--blackDark)",
        boxShadow: "0 2px 15px rgba(0,0,0,0.5)",
      }}
    >
      <h1 className= "cursorp" onClick={() => router.back()}> 🧠 Mi wed de CURSOS - MERGE </h1>
      <button>Iniciar session </button>
    </div>
  );
};

export default Header;
