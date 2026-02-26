import Link from 'next/link';

export const metadata = {
  title: 'Политика Cookie | Максим Онуфриев',
  description: 'Политика использования файлов Cookie на сайте преподавателя английского языка Максима Онуфриева',
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <Link href="/" className="text-accent hover:underline mb-8 inline-block">
          ← Вернуться на главную
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-space-grotesk tracking-tight">
          Политика использования файлов Cookie
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Последнее обновление: 26.02.2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Что такое файлы Cookie?</h2>
            <p className="text-foreground leading-relaxed">
              Файлы Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении веб-сайта. Они используются для улучшения функциональности сайта, анализа трафика и предоставления персонализированного контента.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Типы используемых файлов Cookie</h2>
            
            <h3 className="text-xl font-semibold text-primary/90 mb-3 mt-6">Необходимые файлы Cookie</h3>
            <p className="text-foreground leading-relaxed">
              Эти файлы необходимы для работы сайта, включая навигацию и безопасность. Они удаляются после закрытия браузера.
            </p>

            <h3 className="text-xl font-semibold text-primary/90 mb-3 mt-6">Аналитические файлы Cookie</h3>
            <p className="text-foreground leading-relaxed">
              Используются для анализа посещаемости сайта и улучшения его функциональности. Помогают нам понять, как вы используете наш сайт.
            </p>

            <h3 className="text-xl font-semibold text-primary/90 mb-3 mt-6">Функциональные файлы Cookie</h3>
            <p className="text-foreground leading-relaxed">
              Сохраняют ваши предпочтения для улучшения взаимодействия с сайтом при последующих посещениях.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Как управлять файлами Cookie</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Вы можете управлять файлами Cookie через настройки вашего браузера. Большинство браузеров позволяют вам:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
              <li>Просматривать сохранённые файлы Cookie</li>
              <li>Удалять файлы Cookie</li>
              <li>Блокировать установку новых файлов Cookie</li>
              <li>Получать уведомления при установке файлов Cookie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Третьи лица</h2>
            <p className="text-foreground leading-relaxed">
              Некоторые сервисы аналитики могут использовать файлы Cookie на нашем сайте. Мы не контролируем файлы Cookie, устанавливаемые третьими лицами.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Контакты</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Если у вас есть вопросы о нашей политике использования файлов Cookie, свяжитесь с нами:
            </p>
            <ul className="space-y-2 text-foreground/90">
              <li>Email: <a href="mailto:maximxiaoping@gmail.com" className="text-accent hover:underline">maximxiaoping@gmail.com</a></li>
              <li>Telegram: <a href="https://t.me/Max_Onny" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@Max_Onny</a></li>
            </ul>
          </section>
        </div>

        <Link href="/" className="text-accent hover:underline mt-12 inline-block">
          ← Вернуться на главную
        </Link>
      </div>
    </main>
  );
}
