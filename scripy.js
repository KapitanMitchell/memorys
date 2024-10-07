
const btn = document.getElementById('download-btn');
btn.addEventListener('click', () => {
  alert('Іде завантаження');
  setTimeout(() => {
    const fileContent = 'Віруса точно немає';
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'filename.txt';
    a.click();
    URL.revokeObjectURL(url);
  }, 4000);
});









