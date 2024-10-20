export function Footer() {
  return (
    <footer className="bg-white mt-28 py-8 md:px-20 px-4">
      <div className="mt-20 flex flex-col md:flex-row justify-between">
        <div className="font-medium text-center md:text-left">
          <p className="text-2xl md:text-5xl mb-5 md:mb-10">
            Vamos trocar uma ideia?
            <br />
            Adoraria
            <span className="text-action"> ouvir de você</span>
            !
          </p>
          <p className="text-3xl md:text-6xl mb-10 md:mb-0">
            Conecte-se
            {' '}
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jp-sena-dev/" className="text-action underline hover:text-action-100 trnasition">comigo</a>
            !
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center text-text-100">
            <p className="md:text-2xl font-medium text-text">Redes Sociais</p>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jp-sena-dev/" className="hover:text-black transition">LinkedIn</a>
            <a rel="noreferrer" target="_blank" href="https://github.com/jp-sena-dev" className="hover:text-black transition">Github</a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/joao_sena1410/" className="hover:text-black transition">Instagram</a>
          </div>
          <div className="flex flex-col items-center mt-10 text-text-100">
            <p className="md:text-2xl font-medium text-text">Contato</p>
            <p className="hover:text-black transition">email: joaopedrosena1410@gmail.com</p>
          </div>
        </div>
      </div>
      <hr className="my-14" />
      <div className="flex items-center justify-between w-full">
        <a href="https://www.linkedin.com/in/jp-sena-dev/" target="_blank" rel="noreferrer">
          <h1 className="font-bold md:text-xl lg:text-3xl">
            JP-SENA
            <span className="text-action">.</span>
            DEV
          </h1>
        </a>
        <p className="text-text text-[8px] md:text-[11px] text-text-100">
          <span className="text-action">developed by</span>
          : @João Pedro sena de Moura
        </p>
      </div>
    </footer>
  );
}
