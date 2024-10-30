export function Footer() {
  return (
    <footer className="bg-white mt-28 py-12 md:px-10 xl:px-20 px-4 flex items-center flex-col-reverse gap-8 md:gap-0 md:flex-row justify-between">
      <p className="text-text text-sm text-text-100 cursor-default">
        <span className="text-action">developed by</span>
        : @João Pedro Sena de Moura
      </p>
      <div className="flex gap-4 sm:gap-8 text-text-100">
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jp-sena-dev/" className="hover:text-black transition">LinkedIn</a>
        <a rel="noreferrer" target="_blank" href="https://github.com/jp-sena-dev" className="hover:text-black transition">Github</a>
        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/joao_sena1410/" className="hover:text-black transition">Instagram</a>
        <a href="mailto:joaopedrosena1410@gmail.com?subject=Oportunidade%20de%20Trabalho&body=Olá%20João,%0D%0A%0D%0AVi%20seu%20perfil%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.%0D%0A%0D%0AAtenciosamente,%0D%0A[Seu%20Nome]" className="hover:text-black transition">email</a>
      </div>
    </footer>
  );
}
