




{
  const hamburger = document.querySelector('.hamburger');
  const sideMenu = document.querySelector('.sidenav');


  function toggleMenu(visible) {
    sideMenu.classList.toggle('hidden', visible);
  }

  hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth < 992) sideMenu.classList.add('hidden');
    else if (window.innerWidth > 993) sideMenu.classList.remove('hidden');
  });
}

{
  var ctx = document.getElementById('myChart').getContext('2d');
  console.log(ctx);

  // eslint-disable-next-line no-unused-vars,no-undef
  var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
      // 2
      labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
      // 3
      datasets: [{
        // 4
        label: 'Signups',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
        // 7
        hidden: true,
      }]
    },
  });
}