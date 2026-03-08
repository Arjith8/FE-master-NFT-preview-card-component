export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="p-8 rounded-3xl w-104 bg-blue-900">
        
        <div className="group cursor-pointer">
          <div className="relative">
            <img src="/image-equilibrium.jpg" alt="equilibrium" className="rounded-xl" />
            <div className="absolute inset-0 rounded-xl bg-cyan-400/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <img src="/icon-view.svg" alt="" aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-3xl font-bold py-6">Equilibrium #3429</h1>
        </div>

        <p className="text-xl text-blue-500 font-thin">Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex flex-row justify-between py-4 text-xl">
          <div className="flex gap-2 text-cyan-400">
            <img src="/icon-ethereum.svg" alt="ETH" className="inline-block h-6"/>
            <p className="font-bold">0.041 ETH</p>
          </div>
          <div className="flex gap-2 items-center text-blue-500">
            <img src="/icon-clock.svg" alt="clock" className="inline-block w-6 h-6"/>
            <p>3 days left</p>
          </div>
        </div>

        <hr className="border-0 border-t border-blue-800" />
        <footer className="flex items-center gap-4 pt-4 text-xl">
          <img src="/image-avatar.png" alt="avatar" className="rounded-full w-12 border"/>
          <div>
          <span className="text-blue-500">Creation of</span>{" "}Jules Wyvern
          </div>
        </footer>
      </main>
    </div>
  );
}
