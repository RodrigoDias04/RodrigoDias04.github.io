// 1. Exibir receita ao clicar no botão "Ver Receita"
document.querySelectorAll('.receita-btn').forEach(button => {
    button.addEventListener('click', () => {
      const prato = button.getAttribute('data-receita');
      switch (prato) {
        case 'bacalhau':
          alert("Receita Bacalhau à Brás: Bacalhau, batatas, ovos, cebola e azeite.");
          break;
        case 'caldo-verde':
          alert("Receita Caldo Verde: Couve, batatas, chouriço, alho e azeite.");
          break;
        case 'pasteis-nata':
          alert("Receita Pastéis de Nata: Massa folhada, creme de nata e açúcar.");
          break;
        default:
          alert("Receita não encontrada.");
      }
    });
  });
  
  // 2. Alternar prato em destaque ao clicar no botão "Mudar Prato"
  const destaqueTexto = document.getElementById('prato-destaque');
  const pratos = ["Bacalhau à Brás", "Caldo Verde", "Pastéis de Nata"];
  let index = 0;
  document.getElementById('mudar-destaque').addEventListener('click', () => {
    index = (index + 1) % pratos.length;
    destaqueTexto.textContent = pratos[index];
  });
  
  // 3. Validar o email ao inscrever-se para novas receitas
  document.getElementById('inscrever-receitas').addEventListener('click', () => {
    const email = document.getElementById('email-receitas').value;
    if (email.includes('@')) {
      alert("Inscrição realizada com sucesso! Você receberá novas receitas em breve.");
    } else {
      alert("Por favor, insira um email válido.");
    }
  });
  
  // 4. Destacar o prato selecionado ao passar o mouse sobre ele
  document.querySelectorAll('#pratos-tipicos li').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = '#FFF8DC';
    });
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'transparent';
    });
  });
  
  // 5. Exibir uma mensagem de boas-vindas ao carregar a página
  window.addEventListener('load', () => {
    alert("Bem-vindo à página de gastronomia local! Explore os pratos típicos e receba receitas!");
  });
  