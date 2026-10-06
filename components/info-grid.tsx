type InfoItem = {
  title: string
  text: string
}

export default function InfoGrid({ items }: { items: InfoItem[] }) {
  return (
    <div className="info-grid">
      {items.map((item) => (
        <article key={item.title} className="info-card">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  )
}
