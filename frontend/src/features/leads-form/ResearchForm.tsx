import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Loader from '@/components/ui/Loader';
import Textarea from '@/components/ui/TextArea';

function ResearchForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');
  const [challenge, setChallenge] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <p className="text-xl text-primary">
          Благодарим. Вашият отговор е важен за нас. Проверявайте посочения от Вас имейл за обратна
          връзка от нас.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <Input
        placeholder="Вашето име"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Имейл адрес"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        placeholder="Индустрия / вид бизнес"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      />
      <Textarea
        rows={5}
        placeholder="Опишете накратко какво ви затруднява най-много в момента..."
        value={challenge}
        onChange={(e) => setChallenge(e.target.value)}
        required
      />

      {error && <p className="text-red-500 text-sm mb-4">Нещо се обърка. Моля опитайте отново.</p>}

      <Button type="submit" variant="outline" fullWidth disabled={loading}>
        {loading ? <Loader /> : 'Изпратете отговора си →'}
      </Button>
    </form>
  );
}

export default ResearchForm;
