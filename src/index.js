module.exports = function toReadable (number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) return 'zero';

  const getUnits = (num) => units[num];
  const getTeens = (num) => teens[num - 11];
  const getTens = (num) => tens[num];

  const convertHundreds = (num) => {
    if (num >= 100) {
      return units[Math.floor(num / 100)] + ' hundred';
    }
    return '';
  };

  const convertTensAndUnits = (num) => {
    if (num === 10) {
      return 'ten';
    } else if (num % 100 === 0) {
      return '';
    } else if (num < 10) {
      return getUnits(num);
    } else if (num < 20) {
      return getTeens(num);
    } else {
      const ten = getTens(Math.floor(num / 10));
      const unit = getUnits(num % 10);
      return ten + (unit ? ' ' + unit : '');
    }
  };

  const hundreds = convertHundreds(number);
  const tensAndUnits = convertTensAndUnits(number % 100);
  const result = (hundreds + (hundreds && tensAndUnits ? ' and ' : '') + tensAndUnits).trim();
  return result.replace(' and', '');
};