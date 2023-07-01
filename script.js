window.addEventListener('DOMContentLoaded', () => {
  function generateEqualSpacedColors(length) {
    const colors = [];
    const hueStep = 360 / length;
  
    for (let i = 0; i < length; i++) {
      const startHue = i * hueStep;
      const endHue = (i + 1) * hueStep;
      const startColor = `hsl(${startHue}, 100%, 50%)`;
      const endColor = `hsl(${endHue}, 100%, 50%)`;
      const gradient = [startColor, endColor];
      colors.push(gradient);
    }
  
    return colors;
  }
  
  const gradientColors = generateEqualSpacedColors(100);
  const lightningBolt = document.getElementById('lightning-bolt');
  let i = 0
  let k = 50
  
  function generateLightningBolt() {
    const randomGradient = gradientColors[i % gradientColors.length];
    const randomGradient2 = gradientColors[k % gradientColors.length];
    const j = (i + 1) % gradientColors.length;
    const l = (k + 1) % gradientColors.length;
    const next = gradientColors[j];
    const next2 = gradientColors[l];
    lightningBolt.style.background = `linear-gradient(to bottom right, ${randomGradient[0]}, ${randomGradient[1]})`;
    lightningBolt.style.color = `${randomGradient2[0]}`;
    lightningBolt.style.opacity = 1;
    k = l
    i = j;
    setTimeout(generateLightningBolt, 133);
  }
  generateLightningBolt();
});