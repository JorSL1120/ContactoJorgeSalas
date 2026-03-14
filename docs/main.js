document.addEventListener('DOMContentLoaded', () => {
  const copyFields = document.querySelectorAll('.value');

  copyFields.forEach(field => {
    field.style.cursor = 'pointer';
    
    field.addEventListener('click', () => {
      const text = field.innerText;
      navigator.clipboard.writeText(text).then(() => {
        const originalText = text;
        field.innerText = "¡Copiado!";
        field.style.color = "#00ff88";
        
        setTimeout(() => {
          field.innerText = originalText;
          field.style.color = "white";
        }, 1500);
      });
    });
  });
});