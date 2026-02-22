import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ResearchForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');
  const [challenge, setChallenge] = useState('');

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, industry, challenge },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
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
        required
        className={inputClass}
      />
      <input
        type="email"
        placeholder="Имейл адрес"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
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
        required
        className={`${inputClass} resize-none`}
      />

      {error && <p className="text-red-500 text-sm mb-4">Нещо се обърка. Моля опитайте отново.</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full border border-primary bg-transparent text-primary py-3.5 text-[15px] tracking-[0.05em] cursor-pointer transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_28px_rgba(90,158,114,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Изпращане...' : 'Изпратете отговора си →'}
      </button>

      <p className="text-center text-xs mt-4" style={{ color: '#333333' }}>
        Отговорите са анонимни по желание. Никога не споделяме данни с трети страни.
      </p>
    </form>
  );
}

export default ResearchForm;
