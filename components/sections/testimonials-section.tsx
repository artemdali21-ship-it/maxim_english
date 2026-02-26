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
    <section id="testimonials" className="py-20 md:py-28 px-6 bg-background relative overflow-hidden" style={{
      backgroundImage: 'url(/testimonials-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center 30%',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Shadow effect for depth - minimal on mobile to show parallax, stronger on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 md:from-black/30 via-black/10 md:via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-background via-background/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4 tracking-tight leading-tight">
          Что говорят<br />
          <span className="text-accent">ученики</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-secondary/20 md:bg-secondary/50 p-10 border border-border/30 md:border-border/50 space-y-6 md:backdrop-blur">
              <p className="text-foreground/90 leading-relaxed italic font-light">"{testimonial.quote}"</p>
              <div className="border-t border-border/30 pt-6 space-y-1">
                <p className="font-serif font-semibold text-primary">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
