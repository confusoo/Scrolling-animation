/*INFORMAÇÕES IMPORTANTES*/
/*Neste template eu estava usando para uma class de nome 'Service', não esquecer de alterar.*/

const Service = () => {
const [isCardVisible, setIsCardVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Verifica a direção do scroll (pra cima ou pra baixo)
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Atualiza a visibilidade do card (neste caso vai deixar invisivel se rolar para baixo || !isScrollingDown)
      setIsCardVisible(!isScrollingDown);

      // Armazena a ultima posição para a proxima interação
      setPrevScrollPos(currentScrollPos);
    };

    // Adiciona o eventlistener
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener quando a condição não é atingida
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
}
