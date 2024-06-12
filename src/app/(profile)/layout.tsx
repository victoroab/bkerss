export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <aside>
        <nav>side nav</nav>
      </aside>

      <div>{children}</div>
    </main>
  )
}
