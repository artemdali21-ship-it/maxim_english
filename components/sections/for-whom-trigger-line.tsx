The app is broken because page.tsx imports ForWhomTriggerLine
from "@/components/sections/for-whom-trigger-line" but this
file does not exist.

Create the file: components/sections/for-whom-trigger-line.tsx

Content:

export function ForWhomTriggerLine() {
  return (
    <section className="w-full py-8" style={{ backgroundColor: '#EDEAE2' }}>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p style={{ 
          fontFamily: 'var(--font-inter), Inter, sans-serif',
          fontSize: '15px',
          color: '#6B6960',
          lineHeight: '1.6'
        }}>
          Netflix с субтитрами 10 лет · Три курса — ноль результата · Нужен язык для карьеры · Ребёнок не слышит разницу
        </p>
      </div>
    </section>
  )
}

Do NOT change any other files. Only create this one missing file.