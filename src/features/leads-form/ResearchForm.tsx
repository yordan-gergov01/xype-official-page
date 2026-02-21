import { useState, SubmitEvent } from 'react';

function ResearchForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');
  const [challenge, setChallenge] = useState('');

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-primary">Благодарим. Вашият отговор е важен за нас.</p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-[#111111] border border-[#1F1F1F] text-foreground px-4 py-3 text-[15px] font-sans mb-4 focus:border-primary focus:outline-none transition-colors';

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <input
        type="text"
        placeholder="Вашето име"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClass}
      />
      <input
        type="email"
        placeholder="Имейл адрес"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClass}
      />
      <input
        type="text"
        placeholder="Индустрия / вид бизнес"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className={inputClass}
      />
      <textarea
        rows={5}
        placeholder="Опишете накратко какво ви затруднява най-много в момента..."
        value={challenge}
        onChange={(e) => setChallenge(e.target.value)}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        className="w-full border border-primary bg-transparent text-primary py-3.5 text-[15px] tracking-[0.05em] cursor-pointer transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_28px_rgba(90,158,114,0.3)]"
      >
        Изпратете отговора си →
      </button>
      <p className="text-center text-xs mt-4" style={{ color: '#333333' }}>
        Отговорите са анонимни по желание. Никога не споделяме данни с трети страни.
      </p>
    </form>
  );
}

export default ResearchForm;
