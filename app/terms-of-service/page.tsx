import Link from 'next/link';

export const metadata = {
  title: 'Условия использования | Максим Онуфриев',
  description: 'Условия использования услуг преподавателя английского языка Максима Онуфриева',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <Link href="/" className="text-accent hover:underline mb-8 inline-block">
          ← Вернуться на главную
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-space-grotesk tracking-tight">
          Условия использования
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Последнее обновление: 26.02.2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Принятие условий</h2>
            <p className="text-foreground leading-relaxed">
              Используя сайт и услуги преподавателя Максима Онуфриева, вы соглашаетесь с данными Условиями использования. Если вы не согласны с какой-либо частью этих условий, пожалуйста, не используйте наши услуги.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Описание услуг</h2>
            <p className="text-foreground leading-relaxed">
              Максим Онуфриев предоставляет индивидуальные образовательные услуги по обучению английскому языку. Услуги включают занятия по грамматике, разговорной речи, фонетике, произношению и неформальной лексике для взрослых и детей от 10 лет. Занятия проводятся онлайн (Zoom, Google Meet) или очно.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Интеллектуальная собственность</h2>
            <p className="text-foreground leading-relaxed">
              Все материалы на сайте, включая текст, графику, логотипы, аудиозаписи и изображения, являются собственностью Максима Онуфриева и защищены законами об авторском праве. Учебные материалы, предоставляемые в рамках занятий, предназначены исключительно для личного использования учеником. Вы не имеете права воспроизводить, распространять или использовать эти материалы без письменного согласия.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Ограничение ответственности</h2>
            <p className="text-foreground leading-relaxed">
              Преподаватель прилагает максимальные усилия для достижения образовательных результатов, однако не гарантирует конкретных результатов обучения, поскольку они зависят от индивидуальных способностей, регулярности и вовлечённости ученика. Преподаватель не несёт ответственности за какие-либо косвенные, случайные или последующие убытки, возникающие в результате использования услуг.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Запись и отмена занятий</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
              <li>Запись на занятие осуществляется через мессенджеры или электронную почту</li>
              <li>Отмена или перенос занятия возможны не менее чем за 24 часа до начала</li>
              <li>При отмене менее чем за 24 часа занятие считается проведённым</li>
              <li>Опоздание ученика не продлевает время занятия</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Оплата и возврат средств</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
              <li>Оплата производится согласно согласованному графику (поурочно или пакетами)</li>
              <li>Возврат средств за неиспользованные занятия из оплаченного пакета возможен по договорённости</li>
              <li>Акция «При покупке 5 занятий — 1 в подарок» действует для новых учеников и не суммируется с другими предложениями</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Конфиденциальность</h2>
            <p className="text-foreground leading-relaxed">
              Мы берём на себя обязательство сохранять конфиденциальность всей информации, которую вы предоставляете. См. <Link href="/privacy-policy" className="text-accent hover:underline">Политику конфиденциальности</Link> для подробной информации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Изменение условий</h2>
            <p className="text-foreground leading-relaxed">
              Мы оставляем за собой право изменять данные Условия использования в любое время. Изменения вступят в силу после их публикации на сайте. Продолжение использования услуг означает принятие изменений.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. Применимое право</h2>
            <p className="text-foreground leading-relaxed">
              Данные Условия использования регулируются и толкуются в соответствии с применимым законодательством. Любые споры разрешаются путём переговоров, а при невозможности — в судебных органах по месту регистрации Исполнителя.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. Контактная информация</h2>
            <p className="text-foreground leading-relaxed mb-4">
              По вопросам об Условиях использования свяжитесь с нами:
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
