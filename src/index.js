document.addEventListener("DOMContentLoaded", () => { 
    const form = document.getElementById('create-task-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const commentText = document.getElementById('new-task-description');
      const comment = document.createElement("li");
      comment.textContent = commentText.value;
      form.appendChild(comment);

      event.target.reset();
    });
  
});
