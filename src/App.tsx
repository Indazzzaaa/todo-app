import ContentArea from "./components/ContentArea";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-400 font-mono tracking-wider py-2 px-4 text-zinc-700">
      <header>
        <NavBar />
      </header>
      <main>
        <ContentArea />
      </main>
    </div>
  );
};

export default App;
