import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/TextArea';
import Loader from '@/components/ui/Loader';
import Reveal from '@/components/Reveal';

import { submitContactRequest } from '@/services/api-service';
import { ContactRequest } from '@/types/calculator';

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const isValid = name.trim().length > 1 && email.includes('@') && message.trim().length > 2;

  const handleSubmit = async () => {
    setLoading(true);
    setError(false);

    const data: ContactRequest = {
      name,
      email,
      phone: phone || undefined,
      message,
    };

    try {
      await submitContactRequest(data);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left - intro */}
        <Reveal>
          <p className="flex items-center gap-3 uppercase text-primary text-[13px] tracking-[0.3em]">
            <span className="inline-block w-0.5 h-3.5 bg-current" />
            Контакти
          </p>
          <h2 className="mt-5 font-bold text-foreground leading-[1.1] text-[clamp(32px,5vw,52px)]">
            Да поговорим за вашия проект.
          </h2>
          <p className="mt-6 max-w-[460px] text-[16px] leading-[1.8] text-[#777777]">
            Имате идея, въпрос или процес, който искате да автоматизирате? Пишете ни и ще се свържем
            с вас в рамките на 24 часа.
          </p>
          <a
            href="https://www.linkedin.com/company/xype-io"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-[15px] text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <FaLinkedin size={20} />
            Последвай ни в LinkedIn
          </a>
        </Reveal>

        {/* Right - form */}
        <Reveal delay={120}>
          {submitted ? (
            <div className="h-full flex flex-col justify-center gap-4 py-8">
              <p className="text-primary uppercase text-[13px] tracking-[0.25em]">
                Съобщението е изпратено
              </p>
              <p className="text-foreground font-semibold text-[22px]">
                Благодарим ви! Ще се свържем с вас скоро.
              </p>
              <p className="text-[14px] leading-[1.7] text-[#555555]">
                Ще получите отговор от нас в рамките на 24 часа.
              </p>
            </div>
          ) : (
            <div>
              <Input placeholder="Вашето име" value={name} onChange={(e) => setName(e.target.value)} />
              <Input
                type="email"
                placeholder="Имейл адрес"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="tel"
                placeholder="Телефон (по желание)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Textarea
                placeholder="Разкажете ни накратко за вашия проект"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {error && (
                <p className="text-red-500 text-sm mb-4">Нещо се обърка. Моля опитайте отново.</p>
              )}

              <Button variant="outline" fullWidth onClick={handleSubmit} disabled={!isValid || loading}>
                {loading ? <Loader /> : 'Изпратете съобщение →'}
              </Button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
