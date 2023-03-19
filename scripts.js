document.addEventListener('DOMContentLoaded', function () {
  const maths = [
    {
      name: 'Math 1',
      url: 'math1.html',
    },
    {
      name: 'Math 2',
      url: 'math2.html',
    },
    {
      name: 'Math 3',
      url: 'math3.html',
    },
    {
      name: 'Math 4',
      url: 'math4.html',
    },
    {
      name: 'Math 5',
      url: 'math5.html',
    },
    {
      name: 'Math 6',
      url: 'math6.html',
    },
    // Add more math activities here
  ];

  const mathSection = document.getElementById('maths');

  maths.forEach(math => {
    const mathLink = document.createElement('a');
    mathLink.href = math.url;
    mathLink.textContent = math.name;
    mathLink.classList.add('math-link');
    mathSection.appendChild(mathLink);

    const separator = document.createTextNode(' | ');
    mathSection.appendChild(separator);
  });

  // Remove the last separator
  mathSection.removeChild(mathSection.lastChild);
});