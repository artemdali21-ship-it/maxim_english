import Link from 'next/link';

export const metadata = {
  title: 'Политика конфиденциальности | Максим Онуфриев',
  description: 'Политика конфиденциальности Максима Онуфриева - преподавателя английского языка',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <Link href="/" className="text-accent hover:underline mb-8 inline-block">
          ← Вернуться на главную
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-space-grotesk tracking-tight">
          Политика конфиденциальности
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Последнее обновление: 26.02.2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Введение</h2>
            <p className="text-foreground leading-relaxed">
              Индивидуальный преподаватель Максим Онуфриев ("я", "мы", "наш") предоставляет услуги обучения английскому языку в соответствии с данной Политикой конфиденциальности. Мы уважаем вашу приватность и берём на себя ответственность за защиту ваших персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Какую информацию мы собираем</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Мы собираем информацию, которую вы предоставляете напрямую, включая:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
              <li>Контактная информация (имя, электронная почта, номер телефона, аккаунт в мессенджере)</li>
              <li>Информация об уровне владения языком и целях обучения</li>
              <li>Информация о возрасте ученика (для подбора программы)</li>
              <li>Любая другая информация, которую вы добровольно предоставляете</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Как мы используем вашу информацию</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Мы используем собранную информацию в следующих целях:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
              <li>Предоставления и улучшения образовательных услуг</li>
              <li>Связи с вами по поводу занятий, расписания и запросов</li>
              <li>Подбора индивидуальной программы обучения</li>
              <li>Отправки информации о новых курсах и предложениях</li>
              <li>Анализа и улучшения нашего сайта</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Защита данных</h2>
            <p className="text-foreground leading-relaxed">
              Мы внедряем технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако, пожалуйста, имейте в виду, что ни одна система безопасности не является полностью безопасной.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Передача данных третьим лицам</h2>
            <p className="text-foreground leading-relaxed">
              Мы не продаём, не торгуем и не передаём вашу личную информацию третьим лицам без вашего согласия, за исключением случаев, когда это необходимо для предоставления образовательных услуг или выполнения обязательств по закону.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Ваши права</h2>
            <p className="text-foreground leading-relaxed mb-4">
              У вас есть следующие права в отношении ваших персональных данных:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
              <li>Право доступа к вашим данным</li>
              <li>Право на исправление неточных данных</li>
              <li>Право на удаление данных</li>
              <li>Право отозвать согласие на обработку</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Контактная информация</h2>
            <p className="text-foreground leading-relaxed">
              Если у вас есть вопросы о данной Политике конфиденциальности или о том, как мы обрабатываем ваши данные, свяжитесь с нами:
            </p>
            <ul className="space-y-2 text-foreground/90 mt-4">
              <li>Email: <a href="mailto:maximxiaoping@gmail.com" className="text-accent hover:underline">maximxiaoping@gmail.com</a></li>
              <li>Telegram: <a href="https://t.me/Max_Onny" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@Max_Onny</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Изменения в Политике</h2>
            <p className="text-foreground leading-relaxed">
              Мы оставляем за собой право изменять данную Политику конфиденциальности в любое время. Изменения вступят в силу после их публикации на сайте.
            </p>
          </section>
        </div>

        <Link href="/" className="text-accent hover:underline mt-12 inline-block">
          ← Вернуться на главную
        </Link>
      </div>
    </main>
  );
}
