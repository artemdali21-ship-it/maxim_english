export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Артём',
      role: 'Предприниматель',
      quote: 'Занимаюсь с Максимом третий год. Это лучший преподаватель, которого я встречал. Не "курсы" — это системная работа, после которой начинаешь реально слышать и понимать язык.'
    },
    {
      name: 'Марина',
      role: 'Маркетолог',
      quote: 'Перепробовала три школы и две платформы. С Максимом впервые поняла, что грамматика — это логика, а не набор правил. Через три месяца начала понимать подкасты без субтитров.'
    },
    {
      name: 'Дмитрий',
      role: 'Отец ученицы',
      quote: 'Дочь занимается с 12 лет. За год — колоссальная разница: она начала смотреть сериалы в оригинале и поправлять моё произношение. Рекомендую всем, кому важен результат.'
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 font-space-grotesk tracking-tight">
          Что говорят ученики
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-secondary p-8 border border-border rounded">
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
