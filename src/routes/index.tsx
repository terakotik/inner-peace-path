import { createFileRoute, Link } from "@tanstack/react-router";
import { User, FileCheck, CalendarHeart, Target, Send, Brain, Users, Activity } from "lucide-react";
import heroImage from "@/assets/hero-sergey.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Сергей Зверь — психолог. Работа с тревожностью" },
      {
        name: "description",
        content:
          "Психолог Сергей Зверь. Помощь при тревожности, проблемах в отношениях и поиске внутренней опоры.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-md px-5 pt-6 pb-10">
        <h1 className="sr-only">Сергей Зверь — психолог</h1>

        <img
          src={heroImage}
          alt="Психолог Сергей Зверь — специалист по работе с тревожностью"
          className="w-full rounded-3xl shadow-[var(--shadow-soft)]"
        />

        <div className="mt-6 grid grid-cols-3 gap-3">
          <Link
            to="/about"
            className="flex flex-col items-center gap-2 rounded-2xl bg-card px-2 py-4 text-center shadow-[var(--shadow-soft)] border border-border transition active:scale-95 hover:bg-accent"
          >
            <User className="h-6 w-6 text-primary" />
            <span className="text-xs font-medium">Обо мне</span>
          </Link>
          <Link
            to="/test"
            className="flex flex-col items-center gap-2 rounded-2xl bg-card px-2 py-4 text-center shadow-[var(--shadow-soft)] border border-border transition active:scale-95 hover:bg-accent"
          >
            <FileCheck className="h-6 w-6 text-primary" />
            <span className="text-xs font-medium">Чек-лист</span>
          </Link>
          <a
            href="https://t.me/zver_sergey_krd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-2xl bg-primary px-2 py-4 text-center text-primary-foreground shadow-[var(--shadow-soft)] transition active:scale-95"
          >
            <CalendarHeart className="h-6 w-6" />
            <span className="text-xs font-medium">Консультация</span>
          </a>
        </div>

        <section id="about" className="mt-8">
          <h2 className="text-xl font-semibold">Самые острые проблемы</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-accent p-4 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 shrink-0">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Тревожное расстройство</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Обрести внутреннюю опору и вернуть баланс
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-accent p-4 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Как построить отношения</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Сбалансировать близость и личные границы
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-accent p-4 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 shrink-0">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Невозможность двигаться к цели</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Понять себя и вернуть энергию к действию
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Бесплатные тесты</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Помогут лучше понять своё состояние
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3">
            <Link
              to="/test"
              className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-accent p-4 shadow-[var(--shadow-soft)] active:scale-[0.99] transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 shrink-0">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">Тест на тревожность</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Шкала Бека · 21 вопрос</p>
              </div>
              <span className="text-primary text-lg">→</span>
            </Link>
            <Link
              to="/depression"
              className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-accent p-4 shadow-[var(--shadow-soft)] active:scale-[0.99] transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 shrink-0">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">Тест на депрессию</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Шкала Бека · 21 вопрос</p>
              </div>
              <span className="text-primary text-lg">→</span>
            </Link>
          </div>
        </section>

        <section id="consult" className="mt-10">
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-soft)] text-center">
            <h2 className="text-lg font-semibold">Безоценочное пространство</h2>
            <p className="mt-2 text-sm opacity-90">
              для честного диалога и изменений
            </p>
            <a
              href="https://t.me/zver_sergey_krd"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition active:scale-95"
            >
              Записаться на консультацию
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-md px-5 py-6 text-center">
          <p className="text-sm font-medium">Сергей Зверь · Психолог</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Научный подход. Глубокое понимание. Реальные изменения.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ВКонтакте"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition active:scale-95 hover:bg-accent"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12.785 16.241s.288-.032.435-.194c.135-.148.131-.427.131-.427s-.019-1.302.576-1.495c.587-.19 1.341 1.262 2.14 1.821.605.422 1.064.33 1.064.33l2.137-.03s1.117-.071.587-.964c-.043-.073-.308-.661-1.588-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.84-.244-.84-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.213.262-.213.262s-.382 1.03-.89 1.907c-1.07 1.85-1.499 1.948-1.674 1.832-.407-.27-.305-1.077-.305-1.65 0-1.79.267-2.537-.521-2.732-.262-.065-.454-.108-1.123-.115-.858-.009-1.585.003-1.996.208-.274.136-.485.44-.357.457.16.022.519.099.71.363.246.341.237 1.107.237 1.107s.142 2.11-.33 2.371c-.325.18-.77-.187-1.725-1.865-.489-.86-.859-1.81-.859-1.81s-.07-.176-.197-.27c-.155-.114-.371-.15-.371-.15l-2.286.015s-.343.01-.469.161c-.112.135-.009.412-.009.412s1.79 4.258 3.817 6.403c1.858 1.967 3.969 1.838 3.969 1.838h.956z"/>
              </svg>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition active:scale-95 hover:bg-accent"
            >
              <Send className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4 text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Сергей Зверь
          </p>
        </div>
      </footer>
    </div>
  );
}
