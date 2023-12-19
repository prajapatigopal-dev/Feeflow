const monthlyPriceElements = document.querySelectorAll('.price');
const monthlyBtn = document.querySelector('.btn__toggler[data-toggle="monthly_price"]');
const annualBtn = document.querySelector('.btn__toggler[data-toggle="annual__price"]');

monthlyBtn.addEventListener('click', function() {
  monthlyPriceElements.forEach(priceElement => {
    priceElement.textContent = priceElement.dataset.annualPrice / 12 + '/mo';
  });
});

annualBtn.addEventListener('click', function() {
    monthlyPriceElements.forEach(priceElement => {
      const annualPrice = priceElement.dataset.annualPrice;
      const discountAmount = annualPrice * 0.3;
      const discountedAnnualPrice = annualPrice - discountAmount;
      priceElement.textContent = Math.round(discountedAnnualPrice) + '/yr';
    });
});  

monthlyBtn.addEventListener('click', function() {
  document.querySelectorAll('.btn__toggler').forEach(button => button.classList.remove('selected'));
  this.classList.add('selected');
});

annualBtn.addEventListener('click', function() {
  document.querySelectorAll('.btn__toggler').forEach(button => button.classList.remove('selected'));
  this.classList.add('selected');
});
