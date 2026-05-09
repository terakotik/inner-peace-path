import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/test")({
  head: () => ({
    meta: [
      { title: "Тест на тревожность — Сергей Зверь, психолог" },
      {
        name: "description",
        content:
          "Бесплатный тест на уровень тревожности (шкала Бека). 21 вопрос о соматических и психо-эмоциональных проявлениях.",
      },
    ],
  }),
  component: TestPage,
});

const QUESTIONS = [
  "Ощущение онемения или покалывания в теле",
  "Ощущение жары",
  "Дрожь в ногах",
  "Неспособность расслабиться",
  "Страх, что произойдёт самое плохое",
  "Головокружение или ощущение лёгкости в голове",
  "Ускоренное сердцебиение",
  "Неустойчивость",
  "Ощущение ужаса",
  "Нервозность",
  "Дрожь в руках",
  "Ощущение удушья",
  "Шаткость походки",
  "Страх утраты контроля",
  "Затруднённость дыхания",
  "Страх смерти",
  "Испуг",
  "Желудочно-кишечные расстройства",
  "Обмороки",
  "Приливы крови к лицу",
  "Усиление потоотделения (не связанное с жарой)",
];

const OPTIONS = [
  { value: 0, label: "Совсем не беспокоит" },
  { value: 1, label: "Слегка. Не слишком меня беспокоит" },
  { value: 2, label: "Умеренно. Это было неприятно, но я могу это перенести" },
  { value: 3, label: "Очень сильно. Я с трудом могу это переносить" },
];

function interpret(score: number) {
  if (score <= 21)
    return {
      level: "Низкий уровень тревожности",
      text: "Тревога в пределах нормы. Поддерживайте баланс и обращайте внимание на самочувствие.",
    };
  if (score <= 35)
    return {
      level: "Средний уровень тревожности",
      text: "Тревога заметно проявляется. Стоит разобраться с её источниками — консультация поможет.",
    };
  return {
    level: "Высокий уровень тревожности",
    text: "Уровень тревоги высокий. Рекомендую обратиться к специалисту для индивидуальной работы.",
  };
}

function TestPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () => Object.values(answers).reduce((s, v) => s + v, 0),
    [answers],
  );
  const allAnswered = Object.keys(answers).length === QUESTIONS.length;
  const result = submitted ? interpret(score) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto max-w-md px-5 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> На главную
        </Link>
        <h1 className="mt-4 text-2xl font-bold">Тест на тревожность</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Шкала Бека. Отметьте, насколько каждое проявление беспокоило вас за последнюю неделю.
        </p>
      </header>

      <main className="mx-auto max-w-md px-5 py-6 space-y-4">
        {QUESTIONS.map((q, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-start gap-3">
              <span className="text-xs font-semibold text-primary mt-0.5 shrink-0">
                {idx + 1}.
              </span>
              <p className="text-sm font-medium">{q}</p>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {OPTIONS.map((opt) => {
                const active = answers[idx] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() =>
                      setAnswers((a) => ({ ...a, [idx]: opt.value }))
                    }
                    aria-label={opt.label}
                    title={opt.label}
                    className={
                      "h-11 rounded-xl text-sm font-semibold transition active:scale-95 border " +
                      (active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary text-secondary-foreground border-border hover:bg-accent")
                    }
                  >
                    {opt.value}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
          <p className="text-xs text-muted-foreground">Шкала ответов</p>
          <ul className="mt-2 space-y-1 text-xs">
            {OPTIONS.map((o) => (
              <li key={o.value} className="flex gap-2">
                <span className="font-semibold text-primary">{o.value}</span>
                <span>— {o.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {!submitted ? (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] active:scale-95 transition disabled:opacity-50"
          >
            {allAnswered
              ? "Узнать результат"
              : `Ответьте на все вопросы (${Object.keys(answers).length}/${QUESTIONS.length})`}
          </button>
        ) : (
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-soft)] text-center">
            <p className="text-xs opacity-80">Ваш результат</p>
            <p className="mt-1 text-4xl font-bold">{score}</p>
            <p className="mt-3 text-base font-semibold">{result?.level}</p>
            <p className="mt-2 text-sm opacity-90">{result?.text}</p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href="https://t.me/zver_sergey_krd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-background py-3 text-sm font-semibold text-foreground active:scale-95 transition"
              >
                Записаться на консультацию
              </a>
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setSubmitted(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 py-3 text-sm font-medium active:scale-95 transition"
              >
                <RotateCcw className="h-4 w-4" /> Пройти заново
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
