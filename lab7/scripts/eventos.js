// 1. Evento de clique (click): Muda o conteúdo do botão para "Inscrição Completa!" ao clicar
document.querySelectorAll('.inscreva-se-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      event.target.textContent = 'Inscrição Completa!';
      event.target.style.backgroundColor = '#4CAF50';
    });
  });
  
  // 2. Evento de duplo clique (dblclick): Adiciona uma nova descrição ao evento ao clicar duas vezes no título
  document.querySelectorAll('.evento h3').forEach(title => {
    title.addEventListener('dblclick', () => {
      title.innerHTML += "<p style='font-size: 14px; color: #555;'>Esse evento é gratuito e aberto ao público.</p>";
    });
  });
  
  // 3. Eventos de mouseover e mouseout: Muda a cor de fundo da descrição do evento ao passar o mouse
  document.querySelectorAll('.evento').forEach(evento => {
    evento.addEventListener('mouseover', () => {
      evento.style.backgroundColor = '#f0f8ff';
    });
    evento.addEventListener('mouseout', () => {
      evento.style.backgroundColor = 'white';
    });
  });
  
  // 4. Eventos de teclado (keydown e keyup): Exibe o texto digitado no campo nome em tempo real
  const nomeInput = document.getElementById('nome');
  nomeInput.addEventListener('keydown', () => {
    nomeInput.style.color = 'blue';
  });
  nomeInput.addEventListener('keyup', () => {
    nomeInput.style.color = 'black';
  });
  
  // 5. Eventos de formulário (change e submit): Exibe uma mensagem de confirmação e limpa o formulário ao enviar
  document.getElementById('evento-selecao').addEventListener('change', (event) => {
    alert(`Você escolheu o evento: ${event.target.value}`);
  });
  
  document.getElementById('inscricao-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulário enviado com sucesso! Obrigado por se inscrever.');
    event.target.reset();
  });
  