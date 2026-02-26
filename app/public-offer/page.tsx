import Link from 'next/link';

export const metadata = {
  title: 'Публичная оферта | Максим Онуфриев',
  description: 'Публичная оферта - условия оказания образовательных услуг преподавателем английского языка Максимом Онуфриевым',
};

export default function PublicOfferPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <Link href="/" className="text-accent hover:underline mb-8 inline-block">
          ← Вернуться на главную
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-space-grotesk tracking-tight">
          Публичная оферта
        </h1>
        <p className="text-lg text-muted-foreground mb-4">Условия оказания образовательных услуг</p>
        <p className="text-sm text-muted-foreground mb-12">
          Последнее обновление: 26.02.2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Общие положения</h2>
            <p className="text-foreground leading-relaxed">
              Данная публичная оферта (далее — «Оферта») содержит условия оказания услуг по обучению английскому языку (далее — «Услуги») физическим лицам (далее — «Ученик»).
            </p>
            <p className="text-foreground leading-relaxed mt-4">
              Исполнитель — Максим Онуфриев, индивидуальный преподаватель английского языка, филолог (МГУ).
            </p>
            <p className="text-foreground leading-relaxed mt-4">
              Оферта является официальным предложением заключить договор об оказании образовательных услуг. Принятие настоящей Оферты осуществляется путём совершения Учеником действия, свидетельствующего об акцепте Оферты, в том числе оплаты Услуг.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Услуги</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Исполнитель обязуется оказать образовательные Услуги в соответствии с условиями настоящей Оферты. Услуги включают:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
              <li>Индивидуальные занятия по грамматике английского языка (Modern English Grammar)</li>
              <li>Занятия по разговорному английскому (Modern Spoken English)</li>
              <li>Обучение фонетике и произношению (авторский курс)</li>
              <li>Обучение неформальной речи и сленгу (British Slang & Informal Speech)</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4">
              Занятия проводятся индивидуально, онлайн (Zoom, Google Meet) или очно.<br />
              Для взрослых и детей от 10 лет.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Стоимость услуг</h2>
            <p className="text-foreground leading-relaxed">
              Стоимость Услуг определяется индивидуально и сообщается Ученику до начала занятий. Оплата возможна поурочно или пакетами занятий.
            </p>
            <p className="text-foreground leading-relaxed mt-4">
              Актуальные специальные предложения:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2 mt-2">
              <li>При покупке 5 занятий — 1 занятие в подарок (для новых учеников)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Порядок оплаты</h2>
            <p className="text-foreground leading-relaxed">
              Ученик обязуется оплатить Услуги согласно согласованным условиям. Способы оплаты обсуждаются индивидуально.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Длительность и расписание занятий</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
              <li>Стандартная длительность занятия — 60 минут</li>
              <li>Рекомендуемая частота — 2-3 раза в неделю</li>
              <li>Расписание согласовывается индивидуально</li>
              <li>Первая консультация (30 минут) проводится бесплатно для определения уровня и целей</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Отмена и перенос занятий</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-2">
              <li>Отмена или перенос занятия возможны не менее чем за 24 часа до начала</li>
              <li>При отмене менее чем за 24 часа занятие считается проведённым и оплачивается в полном объёме</li>
              <li>Опоздание Ученика не продлевает время занятия</li>
              <li>Исполнитель обязуется уведомить Ученика об отмене или переносе занятия не менее чем за 24 часа; в случае отмены со стороны Исполнителя занятие переносится без дополнительной оплаты</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Ответственность сторон</h2>
            <p className="text-foreground leading-relaxed">
              Исполнитель несёт ответственность за качество образовательного процесса и применение своей методики в полном объёме. Исполнитель не гарантирует конкретных результатов обучения, поскольку они зависят от индивидуальных способностей, регулярности занятий и самостоятельной работы Ученика.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Конфиденциальность</h2>
            <p className="text-foreground leading-relaxed">
              Обе стороны обязуются сохранять конфиденциальность всей информации, полученной в процессе обучения. Информация о содержании занятий и прогрессе Ученика не передаётся третьим лицам без письменного согласия Ученика (или его законного представителя в случае несовершеннолетнего Ученика).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. Интеллектуальная собственность</h2>
            <p className="text-foreground leading-relaxed">
              Все авторские учебные материалы, упражнения, таблицы и методические разработки, предоставляемые в рамках занятий, являются интеллектуальной собственностью Исполнителя. Материалы предназначены исключительно для личного использования Учеником и не подлежат копированию, распространению или коммерческому использованию.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. Прекращение договора</h2>
            <p className="text-foreground leading-relaxed">
              Договор может быть расторгнут по соглашению сторон. При расторжении договора Ученик обязан оплатить фактически проведённые занятия. Возврат средств за неиспользованные занятия из оплаченного пакета производится по договорённости.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">11. Применимое право</h2>
            <p className="text-foreground leading-relaxed">
              Настоящая Оферта составлена в соответствии с применимым законодательством. Любые споры разрешаются путём переговоров, а при невозможности — в судебных органах по месту нахождения Исполнителя.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">12. Контактная информация</h2>
            <p className="text-foreground leading-relaxed mb-4">
              По всем вопросам, касающимся настоящей Оферты, Ученик может связаться с Исполнителем:
            </p>
            <ul className="space-y-2 text-foreground/90">
              <li>Email: <a href="mailto:maximxiaoping@gmail.com" className="text-accent hover:underline">maximxiaoping@gmail.com</a></li>
              <li>Telegram: <a href="https://t.me/Max_Onny" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@Max_Onny</a></li>
              <li>WhatsApp: <a href="https://wa.me/79853806657" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">+7 985 380-66-57</a></li>
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
