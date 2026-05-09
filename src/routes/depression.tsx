import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/depression")({
  head: () => ({
    meta: [
      { title: "Тест на депрессию (шкала Бека) — Сергей Зверь, психолог" },
      {
        name: "description",
        content:
          "Шкала депрессии Бека. 21 вопрос о вашем самочувствии за последнюю неделю.",
      },
    ],
  }),
  component: DepressionPage,
});

const TELEGRAM = "https://t.me/zver_sergey_krd";

const QUESTIONS: { options: string[] }[] = [
  { options: ["Я не чувствую себя несчастным.", "Я чувствую себя несчастным.", "Я всё время несчастен и не могу освободиться от этого чувства.", "Я настолько несчастен и опечален, что не могу этого вынести."] },
  { options: ["Думая о будущем, я не чувствую себя особенно разочарованным.", "Думая о будущем, я чувствую себя разочарованным.", "Я чувствую, что мне нечего ждать в будущем.", "Я чувствую, что будущее безнадёжно и ничего не изменится к лучшему."] },
  { options: ["Я не чувствую себя неудачником.", "Я чувствую, что у меня было больше неудач, чем у большинства других людей.", "Когда я оглядываюсь на прожитую жизнь, всё, что я вижу — это череда неудач.", "Я чувствую себя полным неудачником."] },
  { options: ["Я получаю столько же удовольствия от жизни, как и раньше.", "Я не получаю столько же удовольствия от жизни, как и раньше.", "Я не получаю настоящего удовлетворения от чего бы то ни было.", "Я всем неудовлетворён, и мне всё надоело."] },
  { options: ["Я не чувствую себя особенно виноватым.", "Довольно часто я чувствую себя виноватым.", "Почти всегда я чувствую себя виноватым.", "Я чувствую себя виноватым всё время."] },
  { options: ["Я не чувствую, что меня за что-то наказывают.", "Я чувствую, что могу быть наказан за что-то.", "Я ожидаю, что меня накажут.", "Я чувствую, что меня наказывают за что-то."] },
  { options: ["Я не испытываю разочарования в себе.", "Я разочарован в себе.", "Я внушаю себе отвращение.", "Я ненавижу себя."] },
  { options: ["У меня нет чувства, что я в чём-то хуже других.", "Я самокритичен и признаю свои слабости и ошибки.", "Я всё время виню себя за свои ошибки.", "Я виню себя за всё плохое, что происходит."] },
  { options: ["У меня нет мыслей о том, чтобы покончить с собой.", "У меня есть мысли о том, чтобы покончить с собой, но я этого не делаю.", "Я хотел бы покончить жизнь самоубийством.", "Я бы покончил с собой, если бы представился удобный случай."] },
  { options: ["Я плачу не больше, чем обычно.", "Сейчас я плачу больше обычного.", "Я теперь всё время плачу.", "Раньше я ещё мог плакать, но теперь не смогу, даже если захочу."] },
  { options: ["Сейчас я не более раздражителен, чем обычно.", "Я раздражаюсь легче, чем раньше, даже по пустякам.", "Сейчас я всё время раздражён.", "Меня уже ничто не раздражает, потому что всё стало безразлично."] },
  { options: ["Я не потерял интереса к другим людям.", "У меня меньше интереса к другим людям, чем раньше.", "Я почти утратил интерес к другим людям.", "Я потерял всякий интерес к другим людям."] },
  { options: ["Я способен принимать решения так же, как всегда.", "Я откладываю принятие решений чаще, чем обычно.", "Я испытываю больше трудностей в принятии решений, чем прежде.", "Я больше не могу принимать каких-либо решений."] },
  { options: ["Я не чувствую, что я выгляжу хуже, чем обычно.", "Я обеспокоен, что выгляжу постаревшим и непривлекательным.", "Я чувствую, что изменения в моей внешности сделали меня непривлекательным.", "Я уверен, что выгляжу безобразным."] },
  { options: ["Я могу работать так же, как раньше.", "Мне надо приложить дополнительные усилия, чтобы начать что-либо делать.", "Я с большим трудом заставляю себя что-либо сделать.", "Я вообще не могу работать."] },
  { options: ["Я могу спать так же хорошо, как и обычно.", "Я сплю не так хорошо, как всегда.", "Я просыпаюсь на 1–2 часа раньше, чем обычно, и с трудом могу заснуть снова.", "Я просыпаюсь на несколько часов раньше обычного и не могу снова заснуть."] },
  { options: ["Я устаю не больше обычного.", "Я устаю легче обычного.", "Я устаю почти от всего того, что делаю.", "Я слишком устал, чтобы делать что бы то ни было."] },
  { options: ["Мой аппетит не хуже, чем обычно.", "У меня не такой хороший аппетит, как был раньше.", "Сейчас мой аппетит стал намного хуже.", "Я вообще потерял аппетит."] },
  { options: ["Если в последнее время я и потерял в весе, то очень немного.", "Я потерял в весе более 2 кг.", "Я потерял в весе более 4 кг.", "Я потерял в весе более 6 кг."] },
  { options: ["Я беспокоюсь о своём здоровье не больше, чем обычно.", "Меня беспокоят такие проблемы, как различные боли, расстройства желудка, запоры.", "Я настолько обеспокоен своим здоровьем, что мне даже трудно думать о чём-нибудь другом.", "Я до такой степени обеспокоен своим здоровьем, что вообще ни о чём не могу думать."] },
  { options: ["Я не замечал каких-либо изменений в моих сексуальных интересах.", "Я меньше, чем обычно, интересуюсь сексом.", "Сейчас я намного меньше интересуюсь сексом.", "Я совершенно утратил интерес к сексу."] },
];

function interpret(score: number) {
  if (score <= 9) return { level: "Отсутствие депрессивных симптомов", text: "Состояние в пределах нормы. Поддерживайте баланс." };
  if (score <= 15) return { level: "Лёгкая депрессия (субдепрессия)", text: "Лёгкие проявления. Стоит обратить внимание на самочувствие." };
  if (score <= 19) return { level: "Умеренная депрессия", text: "Симптомы выражены. Рекомендуется консультация специалиста." };
  if (score <= 29) return { level: "Выраженная депрессия (средней тяжести)", text: "Желательна работа со специалистом." };
  return { level: "Тяжёлая депрессия", text: "Настоятельно рекомендую обратиться за профессиональной помощью." };
}

function DepressionPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => Object.values(answers).reduce((s, v) => s + v, 0), [answers]);
  const allAnswered = Object.keys(answers).length === QUESTIONS.length;
  const result = submitted ? interpret(score) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto max-w-md px-5 pt-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> На главную
        </Link>
        <h1 className="mt-4 text-2xl font-bold">Тест на депрессию</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Шкала депрессии Бека. Выберите утверждение, которое лучше всего описывает ваше состояние за последнюю неделю.
        </p>
      </header>

      <main className="mx-auto max-w-md px-5 py-6 space-y-4">
        {QUESTIONS.map((q, idx) => (
          <div key={idx} className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
            <p className="text-xs font-semibold text-primary">Вопрос {idx + 1}</p>
            <p className="mt-1 text-sm text-muted-foreground">Как вы себя чувствовали на этой неделе и сегодня?</p>
            <div className="mt-3 space-y-2">
              {q.options.map((opt, val) => {
                const active = answers[idx] === val;
                return (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAnswers((a) => ({ ...a, [idx]: val }))}
                    className={
                      "w-full text-left rounded-xl px-3 py-2.5 text-sm transition active:scale-[0.99] border " +
                      (active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary text-secondary-foreground border-border hover:bg-accent")
                    }
                  >
                    <span className="font-semibold mr-2">{val}</span>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

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
                href={TELEGRAM}
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
