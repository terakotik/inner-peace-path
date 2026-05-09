import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap, Briefcase, Brain, ListChecks, CalendarHeart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Обо мне — Сергей Зверь, психолог" },
      {
        name: "description",
        content:
          "Образование, опыт работы, подходы и запросы психолога Сергея Зверя. 13 лет практики, более 40 000 терапевтических часов.",
      },
    ],
  }),
  component: About,
});

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof GraduationCap;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-base font-semibold">{title}</h2>
      </div>
      <div className="mt-3 text-sm text-muted-foreground space-y-2">{children}</div>
    </section>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto max-w-md px-5 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> На главную
        </Link>
        <h1 className="mt-4 text-2xl font-bold">Обо мне</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Сергей Зверь · Психолог
        </p>
      </header>

      <main className="mx-auto max-w-md px-5 py-6 space-y-4">
        <Section icon={GraduationCap} title="Образование">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Военно-медицинская академия им. Кирова, СПб</li>
            <li>Институт психологии и социальной работы, СПб</li>
            <li>
              Повышение квалификации, семейная психология и психотерапия, ИДПО, Москва
            </li>
            <li>Семинары и тренинги по различным доменам и подходам</li>
          </ul>
        </Section>

        <Section icon={Briefcase} title="Опыт работы">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>13 лет практики</li>
            <li>Более 40 000 терапевтических часов</li>
          </ul>
        </Section>

        <Section icon={Brain} title="Подходы, в которых работаю">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Семейная системная терапия (ССТ)</li>
            <li>Транзактный анализ (ТА)</li>
            <li>Когнитивно-поведенческая терапия (КПТ)</li>
          </ul>
        </Section>

        <Section icon={ListChecks} title="Запросы, с которыми работаю">
          <div>
            <p className="font-medium text-foreground">Аффективный спектр</p>
            <p>
              депрессия, апатия, прокрастинация, агрессия, повышенная эмоциональность и импульсивность,
              дистимия, циклотимия, ангедония.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">Тревожный спектр</p>
            <p>
              генерализованное тревожное расстройство (ГТР), паническое расстройство,
              обсессивно-компульсивное расстройство (ОКР), фобии, социальное тревожное расстройство,
              посттравматическое стрессовое расстройство (ПТСР).
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">Травмы</p>
            <p>
              травматический опыт, травматические отношения в настоящем, буллинг, шейминг,
              абьюзивные и токсичные отношения.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">Семейный спектр</p>
            <p>
              измены, развод, конфликты, налаживание коммуникации, нормативные кризисы
              в отношениях, отсутствие взаимопонимания, ревность, охлаждение чувств,
              финансовые разногласия, снижение влечения и дисгармония в интимной жизни.
            </p>
          </div>
        </Section>

        <Section icon={CalendarHeart} title="Пакет диагностики">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Длительность — 20 минут</li>
            <li>Видео или аудио формат, по предварительной записи</li>
            <li>Стоимость — 1 500 ₽</li>
          </ul>
          <p className="mt-3 font-medium text-foreground">Что входит в пакет:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Краткий сбор анамнеза и жалоб</li>
            <li>Обратная связь по полученной информации</li>
            <li>Обозначение доменов, с которыми необходимо работать</li>
            <li>Выбор и обоснование подхода терапии</li>
          </ul>
        </Section>

        <Link
          to="/"
          className="block w-full rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] active:scale-95 transition"
        >
          Записаться на консультацию
        </Link>
      </main>
    </div>
  );
}
