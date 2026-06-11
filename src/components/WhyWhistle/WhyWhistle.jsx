import './WhyWhistle.css';

// Embedded data matching your Figma design perfectly
const whyWhistleData = [
  {
    id: 1,
    image: '/images/teeth.png', // Replace with your actual image paths
    title: 'Custom-made & invisible',
    description: 'Tailored for your teeth and smile with a clear, discreet appearance.'
  },
  {
    id: 2,
    image: '/images/teeth2.png',
    title: 'Predictable results',
    description: 'Advanced 3D modeling and AI-technology for precise planning and predictable results.'
  },
  {
    id: 3,
    image: '/images/teeth3.png',
    title: 'Partnership with Clove Dental',
    description: 'Led by highly experienced Orthodontists of Clove Dental and Whistle that have corrected over 2 lakh smiles.'
  },
  {
    id: 4,
    image: '/images/teeth4.png',
    title: 'Unlimited Aligners*',
    description: 'Unlimited aligners and doctor consults at no extra cost.'
  }
];

function WhyWhistle() {
  return (
    <section className="why-whistle" id="why-whistle">
      <h2 className="why-whistle__title">Why Whistle?</h2>

      <div className="why-whistle__carousel">
        {whyWhistleData.map((card) => (
          <div key={card.id} className="why-whistle__card">
            <img
              src={card.image}
              alt={card.title}
              className="why-whistle__img"
              loading="lazy"
            />
            <div className="why-whistle__content">
              <h3 className="why-whistle__card-title">{card.title}</h3>
              <p className="why-whistle__card-desc">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyWhistle;